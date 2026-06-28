// src/workers/stream/object.worker.ts
import { DurableObject } from "cloudflare:workers";
import {
  all,
  BlobStore,
  createTypedSql,
  get,
  SharedBindings,
  Timers
} from "miniflare:shared";

// src/workers/stream/errors.ts
var StreamBindingError = class extends Error {
  constructor(message, code, statusCode) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
    this.name = "StreamBindingError";
  }
  code;
  statusCode;
}, BadRequestError = class extends StreamBindingError {
  constructor(message = "Bad Request") {
    super(message, 10005, 400), this.name = "BadRequestError";
  }
}, NotFoundError = class extends StreamBindingError {
  constructor(message = "Not Found") {
    super(message, 10003, 404), this.name = "NotFoundError";
  }
}, InvalidURLError = class extends StreamBindingError {
  constructor(message = "Invalid URL") {
    super(message, 10010, 400), this.name = "InvalidURLError";
  }
};

// src/workers/stream/schemas.ts
var SQL_SCHEMA = `
CREATE TABLE IF NOT EXISTS _mf_stream_videos (
  id                      TEXT PRIMARY KEY,
  creator                 TEXT,
  thumbnail               TEXT NOT NULL DEFAULT '',
  thumbnail_timestamp_pct REAL NOT NULL DEFAULT 0.0,
  ready_to_stream         INTEGER NOT NULL DEFAULT 1,
  ready_to_stream_at      TEXT,
  status_state            TEXT NOT NULL DEFAULT 'ready',
  status_pct_complete     TEXT,
  status_error_reason_code TEXT NOT NULL DEFAULT '',
  status_error_reason_text TEXT NOT NULL DEFAULT '',
  meta                    TEXT NOT NULL DEFAULT '{}',
  created                 TEXT NOT NULL,
  modified                TEXT NOT NULL,
  scheduled_deletion      TEXT,
  size                    INTEGER NOT NULL DEFAULT 0,
  allowed_origins         TEXT NOT NULL DEFAULT '[]',
  require_signed_urls     INTEGER,
  uploaded                TEXT,
  upload_expiry           TEXT,
  max_size_bytes          INTEGER,
  max_duration_seconds    INTEGER,
  duration                REAL NOT NULL DEFAULT -1.0,
  input_width             INTEGER NOT NULL DEFAULT 0,
  input_height            INTEGER NOT NULL DEFAULT 0,
  live_input_id           TEXT,
  clipped_from_id         TEXT,
  blob_id                 TEXT
);

CREATE TABLE IF NOT EXISTS _mf_stream_captions (
  video_id   TEXT NOT NULL,
  language   TEXT NOT NULL,
  generated  INTEGER NOT NULL DEFAULT 0,
  label      TEXT NOT NULL DEFAULT '',
  status     TEXT,
  blob_id    TEXT,
  PRIMARY KEY (video_id, language),
  FOREIGN KEY (video_id) REFERENCES _mf_stream_videos(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS _mf_stream_watermarks (
  id              TEXT PRIMARY KEY,
  name            TEXT NOT NULL DEFAULT '',
  size            INTEGER NOT NULL DEFAULT 0,
  height          INTEGER NOT NULL DEFAULT 0,
  width           INTEGER NOT NULL DEFAULT 0,
  created         TEXT NOT NULL,
  downloaded_from TEXT,
  opacity         REAL NOT NULL DEFAULT 1.0,
  padding         REAL NOT NULL DEFAULT 0.05,
  scale           REAL NOT NULL DEFAULT 0.15,
  position        TEXT NOT NULL DEFAULT 'upperRight',
  blob_id         TEXT
);

CREATE TABLE IF NOT EXISTS _mf_stream_downloads (
  video_id         TEXT NOT NULL,
  download_type    TEXT NOT NULL DEFAULT 'default',
  status           TEXT NOT NULL DEFAULT 'ready',
  percent_complete REAL NOT NULL DEFAULT 100.0,
  url              TEXT,
  PRIMARY KEY (video_id, download_type),
  FOREIGN KEY (video_id) REFERENCES _mf_stream_videos(id) ON DELETE CASCADE
);
`;

// src/workers/stream/object.worker.ts
var BLOB_NAMESPACE = "stream-data", StreamObject = class extends DurableObject {
  timers = new Timers();
  #blob;
  #db;
  #stmts;
  #now() {
    return new Date(this.timers.now()).toISOString();
  }
  constructor(state, env) {
    super(state, env);
    let db = createTypedSql(state.storage);
    db.exec("PRAGMA foreign_keys = ON"), db.exec(SQL_SCHEMA), this.#db = db, this.#stmts = sqlStmts(db, () => this.#now());
    let stickyBlobs = !!env.MINIFLARE_STICKY_BLOBS;
    this.#blob = new BlobStore(
      env.MINIFLARE_BLOBS,
      BLOB_NAMESPACE,
      stickyBlobs
    );
  }
  async createVideo(body, params) {
    let id = crypto.randomUUID(), now = this.#now(), blobId = null, size = 0;
    if (body !== null) {
      let { readable, writable } = new TransformStream({
        transform(chunk, controller) {
          size += chunk.byteLength, controller.enqueue(chunk);
        }
      });
      [blobId] = await Promise.all([
        this.#blob.put(readable),
        body.pipeTo(writable)
      ]);
    }
    this.#stmts.insertVideo({
      id,
      creator: params.creator ?? null,
      meta: JSON.stringify(params.meta ?? {}),
      allowed_origins: JSON.stringify(params.allowedOrigins ?? []),
      require_signed_urls: params.requireSignedURLs ? 1 : 0,
      scheduled_deletion: params.scheduledDeletion ?? null,
      thumbnail_timestamp_pct: params.thumbnailTimestampPct ?? 0,
      created: now,
      modified: now,
      uploaded: body !== null ? now : null,
      status_state: body !== null ? "ready" : "pendingupload",
      ready_to_stream: body !== null ? 1 : 0,
      size,
      blob_id: blobId
    });
    let row = get(this.#stmts.getVideo({ id }));
    if (row === void 0) throw new NotFoundError(`Video not found: ${id}`);
    return row;
  }
  async getVideo(id) {
    let row = get(this.#stmts.getVideo({ id }));
    if (row === void 0) throw new NotFoundError(`Video not found: ${id}`);
    return row;
  }
  async updateVideo(id, params) {
    return this.#stmts.updateVideo(id, params);
  }
  async deleteVideo(id) {
    let blobIds = this.#stmts.deleteVideo(id);
    await Promise.all(blobIds.map((b) => this.#blob.delete(b)));
  }
  async listVideos(params) {
    if (params?.before === void 0 && params?.after === void 0)
      return params?.limit === void 0 ? all(this.#stmts.listVideos({})) : all(this.#stmts.listVideosLimit({ limit: params.limit }));
    let compToSql = {
      eq: "=",
      gt: ">",
      gte: ">=",
      lt: "<",
      lte: "<="
    }, conditions = [], values = [];
    if (params.before !== void 0) {
      let op = compToSql[params.beforeComp ?? "lt"];
      if (op === void 0)
        throw new BadRequestError(
          "Invalid comparison operator: " + String(params.beforeComp)
        );
      conditions.push("created " + op + " ?"), values.push(params.before);
    }
    if (params.after !== void 0) {
      let op = compToSql[params.afterComp ?? "gte"];
      if (op === void 0)
        throw new BadRequestError(
          "Invalid comparison operator: " + String(params.afterComp)
        );
      conditions.push("created " + op + " ?"), values.push(params.after);
    }
    values.push(params.limit ?? 1e3);
    let sql = "SELECT * FROM _mf_stream_videos WHERE " + conditions.join(" AND ") + " ORDER BY created DESC LIMIT ?";
    return Array.from(this.#db.exec(sql, ...values));
  }
  async generateToken(id) {
    if (get(this.#stmts.getVideo({ id })) === void 0) throw new NotFoundError(`Video not found: ${id}`);
    let payload = {
      sub: id,
      kid: "local-mode-key",
      exp: Math.floor(this.timers.now() / 1e3) + 360 * 60
    };
    return btoa(JSON.stringify(payload));
  }
  async generateCaption(videoId, language) {
    if (get(this.#stmts.getVideo({ id: videoId })) === void 0)
      throw new NotFoundError(`Video not found: ${videoId}`);
    let label = new Intl.DisplayNames(["en"], { type: "language" }).of(language) ?? language, existing = get(
      this.#stmts.getCaption({ video_id: videoId, language })
    );
    existing?.blob_id !== void 0 && existing.blob_id !== null && await this.#blob.delete(existing.blob_id), this.#stmts.upsertCaption({
      video_id: videoId,
      language,
      generated: 1,
      label,
      status: "ready",
      blob_id: null
    });
    let row = get(this.#stmts.getCaption({ video_id: videoId, language }));
    if (row === void 0)
      throw new NotFoundError(`Caption not found: ${videoId}/${language}`);
    return row;
  }
  async uploadCaption(videoId, language, input) {
    if (get(this.#stmts.getVideo({ id: videoId })) === void 0)
      throw new NotFoundError(`Video not found: ${videoId}`);
    let label = new Intl.DisplayNames(["en"], { type: "language" }).of(language) ?? language, existing = get(
      this.#stmts.getCaption({ video_id: videoId, language })
    );
    existing?.blob_id !== void 0 && existing.blob_id !== null && await this.#blob.delete(existing.blob_id);
    let blobId = await this.#blob.put(input);
    this.#stmts.upsertCaption({
      video_id: videoId,
      language,
      generated: 0,
      label,
      status: "ready",
      blob_id: blobId
    });
    let row = get(this.#stmts.getCaption({ video_id: videoId, language }));
    if (row === void 0)
      throw new NotFoundError(`Caption not found: ${videoId}/${language}`);
    return row;
  }
  async listCaptions(videoId, language) {
    if (get(this.#stmts.getVideo({ id: videoId })) === void 0)
      throw new NotFoundError(`Video not found: ${videoId}`);
    if (language !== void 0) {
      let row = get(this.#stmts.getCaption({ video_id: videoId, language }));
      return row !== void 0 ? [row] : [];
    }
    return all(this.#stmts.listCaptionsByVideo({ video_id: videoId }));
  }
  async deleteCaption(videoId, language) {
    let deleted = get(
      this.#stmts.deleteCaption({ video_id: videoId, language })
    );
    if (deleted === void 0)
      throw new NotFoundError(`Caption not found: ${videoId}/${language}`);
    deleted.blob_id !== null && await this.#blob.delete(deleted.blob_id);
  }
  async createWatermarkFromUrl(url, params) {
    let response = await fetch(url);
    if (!response.ok || response.body === null)
      throw new InvalidURLError(
        `Failed to fetch watermark from URL: ${response.status} ${response.statusText}`
      );
    return this.createWatermarkFromBody(
      await response.arrayBuffer(),
      url,
      params
    );
  }
  async createWatermarkFromBody(buffer, downloadedFrom, params) {
    let size = buffer.byteLength, blobId = await this.#blob.put(
      new Response(buffer).body
    ), id = crypto.randomUUID(), now = this.#now();
    this.#stmts.insertWatermark({
      id,
      name: params.name ?? "",
      size,
      created: now,
      downloaded_from: downloadedFrom,
      opacity: params.opacity ?? 1,
      padding: params.padding ?? 0.05,
      scale: params.scale ?? 0.15,
      position: params.position ?? "upperRight",
      blob_id: blobId
    });
    let row = get(this.#stmts.getWatermark({ id }));
    if (row === void 0)
      throw new NotFoundError(`Watermark not found: ${id}`);
    return row;
  }
  async getWatermark(id) {
    let row = get(this.#stmts.getWatermark({ id }));
    if (row === void 0)
      throw new NotFoundError(`Watermark not found: ${id}`);
    return row;
  }
  async listWatermarks() {
    return all(this.#stmts.listWatermarks({}));
  }
  async deleteWatermark(id) {
    let deleted = get(this.#stmts.deleteWatermark({ id }));
    if (deleted === void 0)
      throw new NotFoundError(`Watermark not found: ${id}`);
    deleted.blob_id !== null && await this.#blob.delete(deleted.blob_id);
  }
  async generateDownload(videoId, downloadType = "default") {
    if (get(this.#stmts.getVideo({ id: videoId })) === void 0)
      throw new NotFoundError(`Video not found: ${videoId}`);
    return this.#stmts.upsertDownload({
      video_id: videoId,
      download_type: downloadType,
      status: "ready",
      percent_complete: 100
    }), all(this.#stmts.listDownloads({ video_id: videoId }));
  }
  async listDownloads(videoId) {
    if (get(this.#stmts.getVideo({ id: videoId })) === void 0)
      throw new NotFoundError(`Video not found: ${videoId}`);
    return all(this.#stmts.listDownloads({ video_id: videoId }));
  }
  async deleteDownload(videoId, downloadType = "default") {
    if (get(
      this.#stmts.deleteDownload({
        video_id: videoId,
        download_type: downloadType
      })
    ) === void 0)
      throw new NotFoundError(`Download not found: ${videoId}/${downloadType}`);
  }
  async getVideoBlob(videoId) {
    let row = get(this.#stmts.getVideo({ id: videoId }));
    if (row === void 0 || row.blob_id === null)
      return null;
    let stream = await this.#blob.get(row.blob_id);
    return stream === null ? null : { stream, size: row.size };
  }
  async fetch(req) {
    if (this.env[SharedBindings.MAYBE_JSON_ENABLE_CONTROL_ENDPOINTS] === !0) {
      let controlOp = req.cf?.miniflare?.controlOp;
      if (controlOp !== void 0) {
        let args = controlOp.args ?? [];
        switch (controlOp.name) {
          case "enableFakeTimers":
            return await this.timers.enableFakeTimers(args[0]), Response.json(null);
          case "disableFakeTimers":
            return await this.timers.disableFakeTimers(), Response.json(null);
          case "advanceFakeTime":
            return await this.timers.advanceFakeTime(args[0]), Response.json(null);
          case "waitForFakeTasks":
            return await this.timers.waitForFakeTasks(), Response.json(null);
        }
      }
    }
    return new Response(null, { status: 404 });
  }
};
function sqlStmts(db, now) {
  let stmtGetVideo = db.stmt(
    "SELECT * FROM _mf_stream_videos WHERE id = :id"
  ), stmtInsertVideo = db.stmt(`INSERT INTO _mf_stream_videos (
		id, creator, meta, allowed_origins, require_signed_urls,
		scheduled_deletion, thumbnail_timestamp_pct, created, modified,
		uploaded, status_state, ready_to_stream, size, blob_id
	) VALUES (
		:id, :creator, :meta, :allowed_origins, :require_signed_urls,
		:scheduled_deletion, :thumbnail_timestamp_pct, :created, :modified,
		:uploaded, :status_state, :ready_to_stream, :size, :blob_id
	)`), stmtUpdateVideo = db.stmt(`UPDATE _mf_stream_videos SET
		modified = :modified,
		creator = :creator,
		meta = :meta,
		allowed_origins = :allowed_origins,
		require_signed_urls = :require_signed_urls,
		scheduled_deletion = :scheduled_deletion,
		thumbnail_timestamp_pct = :thumbnail_timestamp_pct,
		max_duration_seconds = :max_duration_seconds
	WHERE id = :id`), stmtGetVideoCaptionBlobs = db.stmt("SELECT blob_id FROM _mf_stream_captions WHERE video_id = :id"), stmtDeleteVideoDownloads = db.stmt(
    "DELETE FROM _mf_stream_downloads WHERE video_id = :id"
  ), stmtDeleteVideo = db.stmt("DELETE FROM _mf_stream_videos WHERE id = :id RETURNING blob_id"), stmtListVideos = db.stmt(
    "SELECT * FROM _mf_stream_videos ORDER BY created DESC"
  ), stmtListVideosLimit = db.stmt(
    "SELECT * FROM _mf_stream_videos ORDER BY created DESC LIMIT :limit"
  ), stmtGetCaption = db.stmt(
    "SELECT * FROM _mf_stream_captions WHERE video_id = :video_id AND language = :language"
  ), stmtUpsertCaption = db.stmt(`INSERT INTO _mf_stream_captions (video_id, language, generated, label, status, blob_id)
		VALUES (:video_id, :language, :generated, :label, :status, :blob_id)
		ON CONFLICT (video_id, language) DO UPDATE SET
			generated = excluded.generated,
			label = excluded.label,
			status = excluded.status,
			blob_id = excluded.blob_id`), stmtListCaptionsByVideo = db.stmt("SELECT * FROM _mf_stream_captions WHERE video_id = :video_id"), stmtDeleteCaption = db.stmt(
    "DELETE FROM _mf_stream_captions WHERE video_id = :video_id AND language = :language RETURNING blob_id"
  ), stmtGetWatermark = db.stmt(
    "SELECT * FROM _mf_stream_watermarks WHERE id = :id"
  ), stmtInsertWatermark = db.stmt(`INSERT INTO _mf_stream_watermarks
		(id, name, size, height, width, created, downloaded_from, opacity, padding, scale, position, blob_id)
		VALUES (:id, :name, :size, 0, 0, :created, :downloaded_from, :opacity, :padding, :scale, :position, :blob_id)`), stmtListWatermarks = db.stmt(
    "SELECT * FROM _mf_stream_watermarks ORDER BY created DESC"
  ), stmtDeleteWatermark = db.stmt("DELETE FROM _mf_stream_watermarks WHERE id = :id RETURNING blob_id"), stmtUpsertDownload = db.stmt(`INSERT INTO _mf_stream_downloads (video_id, download_type, status, percent_complete)
		VALUES (:video_id, :download_type, :status, :percent_complete)
		ON CONFLICT (video_id, download_type) DO UPDATE SET
			status = excluded.status,
			percent_complete = excluded.percent_complete`), stmtListDownloads = db.stmt(
    "SELECT * FROM _mf_stream_downloads WHERE video_id = :video_id"
  ), stmtDeleteDownload = db.stmt(
    "DELETE FROM _mf_stream_downloads WHERE video_id = :video_id AND download_type = :download_type RETURNING video_id"
  ), deleteVideo = db.txn((id) => {
    let captionBlobs = all(stmtGetVideoCaptionBlobs({ id })).map((r) => r.blob_id).filter((b) => b !== null);
    stmtDeleteVideoDownloads({ id });
    let videoRow = get(stmtDeleteVideo({ id }));
    if (videoRow === void 0)
      throw new NotFoundError(`Video not found: ${id}`);
    let blobIds = captionBlobs;
    return videoRow.blob_id !== null && blobIds.push(videoRow.blob_id), blobIds;
  }), updateVideo = db.txn(
    (id, params) => {
      let current = get(stmtGetVideo({ id }));
      if (current === void 0)
        throw new NotFoundError(`Video not found: ${id}`);
      let nowValue = now();
      stmtUpdateVideo({
        id,
        modified: nowValue,
        creator: "creator" in params ? params.creator ?? null : current.creator,
        meta: params.meta !== void 0 ? JSON.stringify(params.meta) : current.meta,
        allowed_origins: params.allowedOrigins !== void 0 ? JSON.stringify(params.allowedOrigins) : current.allowed_origins,
        require_signed_urls: params.requireSignedURLs !== void 0 ? params.requireSignedURLs ? 1 : 0 : current.require_signed_urls,
        scheduled_deletion: "scheduledDeletion" in params ? params.scheduledDeletion ?? null : current.scheduled_deletion,
        thumbnail_timestamp_pct: params.thumbnailTimestampPct ?? current.thumbnail_timestamp_pct,
        max_duration_seconds: params.maxDurationSeconds ?? current.max_duration_seconds
      });
      let updated = get(stmtGetVideo({ id }));
      if (updated === void 0)
        throw new NotFoundError(`Video not found: ${id}`);
      return updated;
    }
  );
  return {
    getVideo: stmtGetVideo,
    insertVideo: stmtInsertVideo,
    updateVideo,
    deleteVideo,
    listVideos: stmtListVideos,
    listVideosLimit: stmtListVideosLimit,
    getCaption: stmtGetCaption,
    upsertCaption: stmtUpsertCaption,
    listCaptionsByVideo: stmtListCaptionsByVideo,
    deleteCaption: stmtDeleteCaption,
    getWatermark: stmtGetWatermark,
    insertWatermark: stmtInsertWatermark,
    listWatermarks: stmtListWatermarks,
    deleteWatermark: stmtDeleteWatermark,
    upsertDownload: stmtUpsertDownload,
    listDownloads: stmtListDownloads,
    deleteDownload: stmtDeleteDownload
  };
}
export {
  StreamObject
};
//# sourceMappingURL=object.worker.js.map
