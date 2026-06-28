// src/workers/core/outbound.worker.ts
import { LogLevel, SharedHeaders } from "miniflare:shared";

// src/workers/core/constants.ts
var CoreHeaders = {
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

// src/workers/core/outbound.worker.ts
var RESIZING_VIA_TOKEN = "image-resizing", warnedLowFidelity = !1, outbound_worker_default = {
  async fetch(request, env) {
    let image = request.cf?.image;
    if (!(image != null && typeof image == "object" && Object.keys(image).length > 0)) {
      let headers = strippedHeaders(request, env);
      return headers ? fetch(request, { headers }) : fetch(request);
    }
    return resizeImage(request, env, image);
  }
};
function strippedHeaders(request, env) {
  if (!env.STRIP_CF_CONNECTING_IP)
    return;
  let headers = new Headers(request.headers);
  return headers.delete("CF-Connecting-IP"), headers.set("CF-Worker", env.CF_WORKER_ZONE), headers;
}
async function resizeImage(request, env, image) {
  let headers = strippedHeaders(request, env) ?? new Headers(request.headers), via = headers.get("via");
  headers.set(
    "via",
    via ? `${via}, ${RESIZING_VIA_TOKEN}` : RESIZING_VIA_TOKEN
  );
  let originResponse = await fetch(request, { headers });
  if (!originResponse.ok)
    return originResponse;
  let source = await originResponse.arrayBuffer(), form = new FormData();
  form.append("image", new Blob([source])), form.append("options", JSON.stringify(image));
  let transformRequest = new Request("http://localhost/cf-image", {
    method: "POST",
    body: form
  });
  transformRequest.headers.set(
    CoreHeaders.CUSTOM_FETCH_SERVICE,
    CoreBindings.IMAGES_FETCH_SERVICE
  );
  let transformed = await env[CoreBindings.SERVICE_LOOPBACK].fetch(transformRequest);
  if (!transformed.ok) {
    let headers2 = new Headers(originResponse.headers);
    return headers2.delete("content-encoding"), headers2.delete("content-length"), new Response(source, {
      status: originResponse.status,
      headers: headers2
    });
  }
  return await warnLowFidelityOnce(env), transformed;
}
async function warnLowFidelityOnce(env) {
  warnedLowFidelity || (warnedLowFidelity = !0, await env[CoreBindings.SERVICE_LOOPBACK].fetch("http://localhost/core/log", {
    method: "POST",
    headers: { [SharedHeaders.LOG_LEVEL]: LogLevel.WARN.toString() },
    body: "Local cf.image transforms are a low-fidelity mock; only resize, rotate and format conversion are applied. Deploy to preview the full transformation."
  }));
}
export {
  outbound_worker_default as default
};
//# sourceMappingURL=outbound.worker.js.map
