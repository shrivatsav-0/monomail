// src/workers/assets/rpc-proxy.worker.ts
import { WorkerEntrypoint } from "cloudflare:workers";

// src/workers/core/dev-registry-proxy-shared.worker.ts
import { DurableObject } from "cloudflare:workers";
var SERIALIZED_DATE = "___serialized_date___", SERIALIZED_BIGINT = "___serialized_bigint___";
function tailEventsReplacer(_, value) {
  return value instanceof Date ? { [SERIALIZED_DATE]: value.toISOString() } : typeof value == "bigint" ? { [SERIALIZED_BIGINT]: value.toString() } : value;
}
function tailEventsReviver(_, value) {
  if (value && typeof value == "object") {
    if (SERIALIZED_DATE in value)
      return new Date(value[SERIALIZED_DATE]);
    if (SERIALIZED_BIGINT in value)
      return BigInt(value[SERIALIZED_BIGINT]);
  }
  return value;
}

// src/workers/assets/rpc-proxy.worker.ts
var RPCProxyWorker = class extends WorkerEntrypoint {
  async fetch(request) {
    return this.env.ROUTER_WORKER.fetch(request);
  }
  // Forward scheduled events to the User Worker. The proxy itself doesn't run
  // any scheduled logic; it just dispatches a real scheduled event to the user
  // worker via the Fetcher built-in, then propagates the user worker's noRetry
  // decision back onto this controller so the outcome surfaces correctly to
  // the caller (e.g. the entry worker's `/cdn-cgi/handler/scheduled` handler).
  async scheduled(controller) {
    let result = await this.env.USER_WORKER.scheduled?.({
      cron: controller.cron,
      scheduledTime: new Date(controller.scheduledTime)
    });
    if (result?.noRetry && controller.noRetry(), result?.outcome !== "ok")
      throw new Error(
        `User Worker scheduled handler failed with outcome: ${result?.outcome}`
      );
  }
  tail(events) {
    return this.env.USER_WORKER.tail(
      JSON.parse(JSON.stringify(events, tailEventsReplacer), tailEventsReviver)
    );
  }
  constructor(ctx, env) {
    return super(ctx, env), new Proxy(this, {
      get(target, prop) {
        return Reflect.has(target, prop) ? Reflect.get(target, prop) : Reflect.get(target.env.USER_WORKER, prop);
      }
    });
  }
};
export {
  RPCProxyWorker as default
};
//# sourceMappingURL=rpc-proxy.worker.js.map
