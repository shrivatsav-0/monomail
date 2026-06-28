// src/workers/images/images.worker.ts
import { RpcTarget, WorkerEntrypoint } from "cloudflare:workers";
import { getPublicUrl } from "miniflare:shared";

// src/workers/core/constants.ts
var CorePaths = {
  /** Magic proxy used by getPlatformProxy */
  PLATFORM_PROXY: "/cdn-cgi/platform-proxy",
  /** Trigger scheduled event handlers */
  SCHEDULED: "/cdn-cgi/handler/scheduled",
  /** Trigger email event handlers */
  EMAIL: "/cdn-cgi/handler/email",
  /** Handler path prefix for validation */
  HANDLER_PREFIX: "/cdn-cgi/handler/",
  /** Live reload WebSocket endpoint */
  LIVE_RELOAD: "/cdn-cgi/mf/reload",
  /** Local explorer UI and API */
  EXPLORER: "/cdn-cgi/explorer",
  /** Legacy way to trigger scheduled event handlers */
  LEGACY_SCHEDULED: "/cdn-cgi/mf/scheduled",
  /** Stream video serving endpoint */
  STREAM_VIDEO: "/cdn-cgi/mf/stream",
  /** Local image delivery endpoint for serving hosted images */
  IMAGE_DELIVERY: "/cdn-cgi/mf/imagedelivery",
  /** Public R2 bucket object serving endpoint */
  R2_PUBLIC: "/cdn-cgi/local/r2/public"
}, CoreHeaders = {
  CUSTOM_FETCH_SERVICE: "MF-Custom-Fetch-Service",
  CUSTOM_NODE_SERVICE: "MF-Custom-Node-Service",
  ORIGINAL_URL: "MF-Original-URL",
  /**
   * Stores the original hostname when using the `upstream` option.
   * When requests are proxied to an upstream, the `Host` header is rewritten
   * to match the upstream. This header preserves the original hostname
   * so Workers can access it if needed.
   */
  ORIGINAL_HOSTNAME: "MF-Original-Hostname",
  PROXY_SHARED_SECRET: "MF-Proxy-Shared-Secret",
  DISABLE_PRETTY_ERROR: "MF-Disable-Pretty-Error",
  ERROR_STACK: "MF-Experimental-Error-Stack",
  ROUTE_OVERRIDE: "MF-Route-Override",
  CF_BLOB: "MF-CF-Blob",
  /** Used by the Vite plugin to pass through the original `sec-fetch-mode` header */
  SEC_FETCH_MODE: "MF-Sec-Fetch-Mode",
  // API Proxy
  OP_SECRET: "MF-Op-Secret",
  OP: "MF-Op",
  OP_TARGET: "MF-Op-Target",
  OP_KEY: "MF-Op-Key",
  OP_SYNC: "MF-Op-Sync",
  OP_STRINGIFIED_SIZE: "MF-Op-Stringified-Size",
  OP_RESULT_TYPE: "MF-Op-Result-Type",
  OP_ORIGINAL_URL: "MF-Op-Original-URL"
}, CoreBindings = {
  SERVICE_LOOPBACK: "MINIFLARE_LOOPBACK",
  SERVICE_USER_ROUTE_PREFIX: "MINIFLARE_USER_ROUTE_",
  SERVICE_USER_FALLBACK: "MINIFLARE_USER_FALLBACK",
  TEXT_CUSTOM_SERVICE: "MINIFLARE_CUSTOM_SERVICE",
  // Backs the Images binding (`env.IMAGES`) — see imagesLocalFetcher.
  IMAGES_BINDING_SERVICE: "MINIFLARE_IMAGES_BINDING_SERVICE",
  // Backs `fetch(url, { cf: { image } })` transforms — see cfImageLocalFetcher.
  IMAGES_FETCH_SERVICE: "MINIFLARE_IMAGES_FETCH_SERVICE",
  TEXT_UPSTREAM_URL: "MINIFLARE_UPSTREAM_URL",
  JSON_CF_BLOB: "CF_BLOB",
  JSON_ROUTES: "MINIFLARE_ROUTES",
  JSON_LOG_LEVEL: "MINIFLARE_LOG_LEVEL",
  DATA_LIVE_RELOAD_SCRIPT: "MINIFLARE_LIVE_RELOAD_SCRIPT",
  DURABLE_OBJECT_NAMESPACE_PROXY: "MINIFLARE_PROXY",
  DATA_PROXY_SECRET: "MINIFLARE_PROXY_SECRET",
  DATA_PROXY_SHARED_SECRET: "MINIFLARE_PROXY_SHARED_SECRET",
  TRIGGER_HANDLERS: "TRIGGER_HANDLERS",
  LOG_REQUESTS: "LOG_REQUESTS",
  STRIP_DISABLE_PRETTY_ERROR: "STRIP_DISABLE_PRETTY_ERROR",
  SERVICE_LOCAL_EXPLORER: "MINIFLARE_LOCAL_EXPLORER",
  EXPLORER_DISK: "MINIFLARE_EXPLORER_DISK",
  JSON_LOCAL_EXPLORER_BINDING_MAP: "LOCAL_EXPLORER_BINDING_MAP",
  JSON_LOCAL_EXPLORER_WORKER_NAMES: "LOCAL_EXPLORER_WORKER_NAMES",
  JSON_EXPLORER_WORKER_OPTS: "MINIFLARE_EXPLORER_WORKER_OPTS",
  SERVICE_CACHE: "MINIFLARE_CACHE",
  SERVICE_DEV_REGISTRY_PROXY: "MINIFLARE_DEV_REGISTRY_PROXY",
  JSON_TELEMETRY_CONFIG: "MINIFLARE_TELEMETRY_CONFIG",
  DEV_REGISTRY_DEBUG_PORT: "DEV_REGISTRY_DEBUG_PORT",
  SERVICE_STREAM: "MINIFLARE_STREAM",
  SERVICE_IMAGES_DELIVERY: "MINIFLARE_IMAGES_DELIVERY",
  SERVICE_R2_PUBLIC: "MINIFLARE_R2_PUBLIC"
};

// src/workers/images/images.worker.ts
function buildVariantUrl(publicUrl, imageId, variant) {
  return new URL(
    `${CorePaths.IMAGE_DELIVERY}/${imageId}/${variant}`,
    publicUrl
  ).toString();
}
async function withResolvedVariants(metadata, env) {
  let publicUrl = await getPublicUrl(env[CoreBindings.SERVICE_LOOPBACK]);
  return {
    ...metadata,
    variants: metadata.variants.map(
      (variant) => buildVariantUrl(publicUrl, metadata.id, variant)
    )
  };
}
function base64DecodeArrayBuffer(buffer) {
  let base64String = new TextDecoder().decode(buffer), binaryString = atob(base64String.trim()), bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++)
    bytes[i] = binaryString.charCodeAt(i);
  return bytes.buffer;
}
async function base64DecodeStream(stream) {
  let buffer = await new Response(stream).arrayBuffer();
  return base64DecodeArrayBuffer(buffer);
}
var ImageHandleImpl = class extends RpcTarget {
  #imageId;
  #env;
  constructor(imageId, env) {
    super(), this.#imageId = imageId, this.#env = env;
  }
  async details() {
    let result = await this.#env.IMAGES_STORE.getWithMetadata(
      this.#imageId,
      "arrayBuffer"
    );
    return result.metadata === null ? null : withResolvedVariants(result.metadata, this.#env);
  }
  async bytes() {
    let data = await this.#env.IMAGES_STORE.get(this.#imageId, "arrayBuffer");
    return data === null ? null : new Blob([data]).stream();
  }
  async update(options) {
    let existing = await this.#env.IMAGES_STORE.getWithMetadata(
      this.#imageId,
      "arrayBuffer"
    );
    if (existing.value === null || existing.metadata === null)
      throw new Error(`Image not found: ${this.#imageId}`);
    let updatedMetadata = {
      ...existing.metadata,
      requireSignedURLs: options.requireSignedURLs ?? existing.metadata.requireSignedURLs,
      meta: options.metadata ?? existing.metadata.meta,
      creator: options.creator ?? existing.metadata.creator
    };
    return await this.#env.IMAGES_STORE.put(this.#imageId, existing.value, {
      metadata: updatedMetadata
    }), withResolvedVariants(updatedMetadata, this.#env);
  }
  async delete() {
    return await this.#env.IMAGES_STORE.get(
      this.#imageId,
      "arrayBuffer"
    ) === null ? !1 : (await this.#env.IMAGES_STORE.delete(this.#imageId), !0);
  }
}, ImagesService = class extends WorkerEntrypoint {
  image(imageId) {
    return new ImageHandleImpl(imageId, this.env);
  }
  async upload(image, options) {
    let imageData = image;
    options?.encoding === "base64" && (imageData = image instanceof ArrayBuffer ? base64DecodeArrayBuffer(image) : await base64DecodeStream(image));
    let buffer = imageData instanceof ArrayBuffer ? imageData : await new Response(imageData).arrayBuffer(), id = options?.id ?? crypto.randomUUID(), metadata = {
      id,
      filename: options?.filename ?? "uploaded.jpg",
      uploaded: (/* @__PURE__ */ new Date()).toISOString(),
      requireSignedURLs: options?.requireSignedURLs ?? !1,
      meta: options?.metadata ?? {},
      variants: ["public"],
      draft: !1,
      creator: options?.creator
    };
    return await this.env.IMAGES_STORE.put(id, buffer, { metadata }), withResolvedVariants(metadata, this.env);
  }
  async list(options) {
    let limit = options?.limit ?? 50, allImages = [], kvCursor;
    do {
      let kvResult = await this.env.IMAGES_STORE.list({
        cursor: kvCursor
      });
      for (let key of kvResult.keys)
        key.metadata && allImages.push(key.metadata);
      kvCursor = kvResult.list_complete ? void 0 : kvResult.cursor;
    } while (kvCursor);
    options?.creator && allImages.splice(
      0,
      allImages.length,
      ...allImages.filter((i) => i.creator === options.creator)
    ), allImages.sort((a, b) => {
      let dateA = a.uploaded ?? "", dateB = b.uploaded ?? "", cmp = dateA.localeCompare(dateB) || a.id.localeCompare(b.id);
      return options?.sortOrder === "desc" ? -cmp : cmp;
    });
    let startIndex = 0;
    if (options?.cursor) {
      let cursorIndex = allImages.findIndex((i) => i.id === options.cursor);
      cursorIndex >= 0 && (startIndex = cursorIndex + 1);
    }
    let page = allImages.slice(startIndex, startIndex + limit), hasMore = startIndex + limit < allImages.length, lastImage = page[page.length - 1], publicUrl = await getPublicUrl(
      this.env[CoreBindings.SERVICE_LOOPBACK]
    );
    return {
      images: page.map((metadata) => ({
        ...metadata,
        variants: metadata.variants.map(
          (variant) => buildVariantUrl(publicUrl, metadata.id, variant)
        )
      })),
      cursor: hasMore && lastImage ? lastImage.id : void 0,
      listComplete: !hasMore
    };
  }
  async #detectContentType(data) {
    let formData = new FormData();
    formData.append("image", new Blob([data]));
    let infoRequest = new Request("http://placeholder/info", {
      method: "POST",
      body: formData
    });
    infoRequest.headers.set(
      CoreHeaders.CUSTOM_FETCH_SERVICE,
      CoreBindings.IMAGES_BINDING_SERVICE
    );
    let response = await this.env[CoreBindings.SERVICE_LOOPBACK].fetch(infoRequest);
    if (response.ok) {
      let info = await response.json();
      if (info.format)
        return info.format;
    }
    return "application/octet-stream";
  }
  // Handle HTTP requests for image delivery and transform operations
  async fetch(request) {
    let url = new URL(request.url);
    if (url.pathname.startsWith(`${CorePaths.IMAGE_DELIVERY}/`)) {
      let imageId = url.pathname.slice(CorePaths.IMAGE_DELIVERY.length + 1).split("/")[0];
      if (!imageId)
        return new Response("Missing image ID", { status: 400 });
      let data = await this.env.IMAGES_STORE.get(imageId, "arrayBuffer");
      if (data === null)
        return new Response("Image not found", { status: 404 });
      let contentType = await this.#detectContentType(data);
      return new Response(data, {
        headers: { "Content-Type": contentType }
      });
    }
    let forwardRequest = new Request(request);
    return forwardRequest.headers.set(
      CoreHeaders.CUSTOM_FETCH_SERVICE,
      CoreBindings.IMAGES_BINDING_SERVICE
    ), forwardRequest.headers.set(CoreHeaders.ORIGINAL_URL, request.url), this.env[CoreBindings.SERVICE_LOOPBACK].fetch(forwardRequest);
  }
};
export {
  ImagesService as default
};
//# sourceMappingURL=images.worker.js.map
