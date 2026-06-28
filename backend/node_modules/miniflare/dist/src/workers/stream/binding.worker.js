// src/workers/stream/binding.worker.ts
import { RpcTarget, WorkerEntrypoint } from "cloudflare:workers";
import { getPublicUrl } from "miniflare:shared";

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
};
var InvalidURLError = class extends StreamBindingError {
  constructor(message = "Invalid URL") {
    super(message, 10010, 400), this.name = "InvalidURLError";
  }
};

// src/workers/stream/schemas.ts
function rowToStreamVideo(row, entryUrl) {
  let placeholderUrl = `https://customer-placeholder.cloudflarestream.com/${row.id}`, videoUrl = `${entryUrl.origin}/cdn-cgi/mf/stream/${row.id}/watch`;
  return {
    id: row.id,
    creator: row.creator,
    thumbnail: row.thumbnail || `${placeholderUrl}/thumbnails/thumbnail.jpg`,
    thumbnailTimestampPct: row.thumbnail_timestamp_pct,
    readyToStream: row.ready_to_stream === 1,
    readyToStreamAt: row.ready_to_stream_at,
    status: {
      state: row.status_state,
      pctComplete: row.status_pct_complete ?? void 0,
      errorReasonCode: row.status_error_reason_code,
      errorReasonText: row.status_error_reason_text
    },
    meta: JSON.parse(row.meta),
    created: row.created,
    modified: row.modified,
    scheduledDeletion: row.scheduled_deletion,
    size: row.size,
    preview: videoUrl,
    allowedOrigins: JSON.parse(row.allowed_origins),
    requireSignedURLs: row.require_signed_urls === null ? null : row.require_signed_urls === 1,
    uploaded: row.uploaded,
    uploadExpiry: row.upload_expiry,
    maxSizeBytes: row.max_size_bytes,
    maxDurationSeconds: row.max_duration_seconds,
    duration: row.duration,
    input: { width: row.input_width, height: row.input_height },
    hlsPlaybackUrl: `${placeholderUrl}/manifest/video.m3u8`,
    dashPlaybackUrl: `${placeholderUrl}/manifest/video.mpd`,
    watermark: null,
    liveInputId: row.live_input_id,
    clippedFromId: row.clipped_from_id,
    publicDetails: null
  };
}
function rowToStreamCaption(row) {
  return {
    language: row.language,
    label: row.label || row.language,
    generated: row.generated === 1,
    status: row.status
  };
}
function rowToStreamWatermark(row) {
  return {
    id: row.id,
    name: row.name,
    size: row.size,
    height: row.height,
    width: row.width,
    created: row.created,
    downloadedFrom: row.downloaded_from,
    opacity: row.opacity,
    padding: row.padding,
    scale: row.scale,
    position: row.position
  };
}
function rowToStreamDownload(row) {
  return {
    type: row.download_type,
    download: {
      percentComplete: row.percent_complete,
      status: row.status,
      url: row.url ?? void 0
    }
  };
}

// src/workers/stream/binding.worker.ts
function getStub(env) {
  let id = env.store.idFromName("stream-data");
  return env.store.get(id);
}
function rowsToDownloadResponse(rows) {
  let result = {};
  for (let { type, download } of rows)
    result[type] = download;
  return result;
}
var StreamBinding = class extends WorkerEntrypoint {
  async fetch(request) {
    let match = new URL(request.url).pathname.match(/^\/cdn-cgi\/mf\/stream\/([^/]+)\/watch$/);
    if (!match)
      return new Response("Not found", { status: 404 });
    let videoId = match[1], result = await getStub(this.env).getVideoBlob(videoId);
    return result === null ? new Response("Video not found", { status: 404 }) : new Response(result.stream, {
      headers: {
        "Content-Type": "video/mp4",
        "Content-Length": result.size.toString()
      }
    });
  }
  async upload(urlOrBody, params) {
    let body;
    if (typeof urlOrBody == "string") {
      let response = await fetch(urlOrBody);
      if (!response.ok || response.body === null)
        throw new InvalidURLError(
          `Failed to fetch video from URL: ${response.status} ${response.statusText}`
        );
      body = response.body;
    } else
      body = urlOrBody;
    let row = await getStub(this.env).createVideo(body, params ?? {}), entryUrl = await getPublicUrl(this.env.MINIFLARE_LOOPBACK);
    return rowToStreamVideo(row, entryUrl);
  }
  // Not supported in local mode yet
  async createDirectUpload(_params) {
    throw new BadRequestError(
      "createDirectUpload is not supported in local mode"
    );
  }
  video(id) {
    return new StreamVideoHandleImpl(this.env, id);
  }
  get videos() {
    return new StreamVideosImpl(this.env);
  }
  get watermarks() {
    return new StreamWatermarksImpl(this.env);
  }
}, StreamScopedCaptionsImpl = class extends RpcTarget {
  #env;
  #videoId;
  constructor(env, videoId) {
    super(), this.#env = env, this.#videoId = videoId;
  }
  async upload(language, input) {
    let row = await getStub(this.#env).uploadCaption(this.#videoId, language, input);
    return rowToStreamCaption(row);
  }
  async generate(language) {
    let row = await getStub(this.#env).generateCaption(this.#videoId, language);
    return rowToStreamCaption(row);
  }
  async list(language) {
    return (await getStub(this.#env).listCaptions(this.#videoId, language)).map(rowToStreamCaption);
  }
  async delete(language) {
    await getStub(this.#env).deleteCaption(this.#videoId, language);
  }
}, StreamScopedDownloadsImpl = class extends RpcTarget {
  #env;
  #videoId;
  constructor(env, videoId) {
    super(), this.#env = env, this.#videoId = videoId;
  }
  async generate(downloadType = "default") {
    let rows = await getStub(this.#env).generateDownload(this.#videoId, downloadType);
    return rowsToDownloadResponse(rows.map(rowToStreamDownload));
  }
  async get() {
    let rows = await getStub(this.#env).listDownloads(this.#videoId);
    return rowsToDownloadResponse(rows.map(rowToStreamDownload));
  }
  async delete(downloadType = "default") {
    await getStub(this.#env).deleteDownload(this.#videoId, downloadType);
  }
}, StreamVideoHandleImpl = class extends RpcTarget {
  id;
  #env;
  constructor(env, id) {
    super(), this.#env = env, this.id = id;
  }
  async details() {
    let row = await getStub(this.#env).getVideo(this.id), entryUrl = await getPublicUrl(this.#env.MINIFLARE_LOOPBACK);
    return rowToStreamVideo(row, entryUrl);
  }
  async update(params) {
    let row = await getStub(this.#env).updateVideo(this.id, params), entryUrl = await getPublicUrl(this.#env.MINIFLARE_LOOPBACK);
    return rowToStreamVideo(row, entryUrl);
  }
  async delete() {
    await getStub(this.#env).deleteVideo(this.id);
  }
  async generateToken() {
    return getStub(this.#env).generateToken(this.id);
  }
  get downloads() {
    return new StreamScopedDownloadsImpl(this.#env, this.id);
  }
  get captions() {
    return new StreamScopedCaptionsImpl(this.#env, this.id);
  }
}, StreamVideosImpl = class extends RpcTarget {
  #env;
  constructor(env) {
    super(), this.#env = env;
  }
  async list(params) {
    let rows = await getStub(this.#env).listVideos(params), entryUrl = await getPublicUrl(this.#env.MINIFLARE_LOOPBACK);
    return rows.map((row) => rowToStreamVideo(row, entryUrl));
  }
}, StreamWatermarksImpl = class extends RpcTarget {
  #env;
  constructor(env) {
    super(), this.#env = env;
  }
  async generate(streamOrUrl, params) {
    if (params.opacity !== void 0 && (params.opacity < 0 || params.opacity > 1))
      throw new BadRequestError("opacity must be between 0.0 and 1.0");
    if (params.padding !== void 0 && (params.padding < 0 || params.padding > 1))
      throw new BadRequestError("padding must be between 0.0 and 1.0");
    if (params.scale !== void 0 && (params.scale < 0 || params.scale > 1))
      throw new BadRequestError("scale must be between 0.0 and 1.0");
    let stub = getStub(this.#env);
    if (typeof streamOrUrl == "string") {
      let row2 = await stub.createWatermarkFromUrl(streamOrUrl, params);
      return rowToStreamWatermark(row2);
    }
    let buffer = await new Response(streamOrUrl).arrayBuffer(), row = await stub.createWatermarkFromBody(buffer, null, params);
    return rowToStreamWatermark(row);
  }
  async list() {
    return (await getStub(this.#env).listWatermarks()).map(rowToStreamWatermark);
  }
  async get(watermarkId) {
    let row = await getStub(this.#env).getWatermark(watermarkId);
    return rowToStreamWatermark(row);
  }
  async delete(watermarkId) {
    await getStub(this.#env).deleteWatermark(watermarkId);
  }
};
export {
  StreamBinding
};
//# sourceMappingURL=binding.worker.js.map
