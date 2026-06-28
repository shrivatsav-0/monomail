// src/workers/core/dev-registry-proxy.worker.ts
import { WorkerEntrypoint } from "cloudflare:workers";

// src/workers/core/dev-registry-proxy-shared.worker.ts
import { DurableObject } from "cloudflare:workers";
var registry = /* @__PURE__ */ new Map();
function setRegistry(data) {
  registry = new Map(Object.entries(data));
}
function resolveTarget(service) {
  let entry = registry.get(service);
  if (!(!entry || !("debugPortAddress" in entry)))
    return entry;
}
function hasRegistryEntry(service) {
  return registry.has(service);
}
function workerNotFoundMessage(service) {
  return hasRegistryEntry(service) ? `Worker "${service}" is not compatible with this version of the dev server. Please update all Worker instances to the same version.` : `Worker "${service}" not found. Make sure it is running locally.`;
}
function connectToActor(debugPort, scriptName, className, actorId) {
  let target = resolveTarget(scriptName);
  return !target || !target.debugPortAddress ? null : debugPort.connect(target.debugPortAddress).getActor(target.userWorkerService, className, actorId);
}
function createProxyDurableObjectClass({
  scriptName,
  className
}) {
  return class extends DurableObject {
    _cachedFetcher;
    _cachedDebugPortAddress;
    // Lazily resolve and cache. Invalidates when debugPortAddress changes.
    _resolve() {
      let target = resolveTarget(scriptName);
      if (this._cachedFetcher && target?.debugPortAddress === this._cachedDebugPortAddress)
        return this._cachedFetcher;
      this._cachedFetcher = void 0, this._cachedDebugPortAddress = void 0;
      let fetcher = connectToActor(
        this.env.DEV_REGISTRY_DEBUG_PORT,
        scriptName,
        className,
        this.ctx.id.toString()
      );
      return fetcher && target && (this._cachedFetcher = fetcher, this._cachedDebugPortAddress = target.debugPortAddress), fetcher;
    }
    constructor(ctx, env) {
      return super(ctx, env), new Proxy(this, {
        get(target, prop) {
          if (Reflect.has(target, prop))
            return Reflect.get(target, prop);
          let fetcher = target._resolve();
          return fetcher ? Reflect.get(fetcher, prop) : () => {
            throw new Error(workerNotFoundMessage(scriptName));
          };
        }
      });
    }
    fetch(request) {
      let fetcher = this._resolve();
      return fetcher ? fetcher.fetch(request) : Promise.resolve(
        new Response(workerNotFoundMessage(scriptName), { status: 503 })
      );
    }
  };
}
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

// src/workers/core/dev-registry-proxy.worker.ts
var HANDLER_RESERVED_KEYS = /* @__PURE__ */ new Set([
  "alarm",
  "connect",
  "self",
  "tail",
  "tailStream",
  "test",
  "trace",
  "webSocketClose",
  "webSocketError",
  "webSocketMessage"
]);
function resolve(props, env) {
  let { service, entrypoint, userProps } = props, target = resolveTarget(service);
  if (!target || !target.debugPortAddress)
    return null;
  let serviceName = entrypoint === null || entrypoint === "default" ? target.defaultEntrypointService : target.userWorkerService;
  return env.DEV_REGISTRY_DEBUG_PORT.connect(target.debugPortAddress).getEntrypoint(serviceName, entrypoint ?? void 0, userProps);
}
var ExternalServiceProxy = class extends WorkerEntrypoint {
  _fetcher = null;
  _entryFetcher = null;
  constructor(ctx, env) {
    super(ctx, env), this._fetcher = resolve(ctx.props, env);
    let target = resolveTarget(ctx.props.service);
    if (target && target.debugPortAddress) {
      let client = env.DEV_REGISTRY_DEBUG_PORT.connect(
        target.debugPortAddress
      );
      this._entryFetcher = client.getEntrypoint("core:entry");
    }
    return new Proxy(this, {
      get(target2, prop) {
        if (Reflect.has(target2, prop))
          return Reflect.get(target2, prop);
        if (!(typeof prop == "string" && HANDLER_RESERVED_KEYS.has(prop))) {
          if (!target2._fetcher)
            throw new Error(workerNotFoundMessage(ctx.props.service));
          return Reflect.get(target2._fetcher, prop);
        }
      }
    });
  }
  fetch(request) {
    return this._fetcher ? this._fetcher.fetch(request) : new Response(workerNotFoundMessage(this.ctx.props.service), {
      status: 503
    });
  }
  async scheduled(controller) {
    if (!this._entryFetcher)
      throw new Error(workerNotFoundMessage(this.ctx.props.service));
    let params = new URLSearchParams();
    controller.cron && params.set("cron", controller.cron), controller.scheduledTime && params.set("time", String(controller.scheduledTime));
    let response = await this._entryFetcher.fetch(
      new Request(`http://localhost/cdn-cgi/handler/scheduled?${params}`, {
        headers: { "MF-Route-Override": this.ctx.props.service }
      })
    );
    if (!response.ok) {
      let body = await response.text();
      throw new Error(
        `Scheduled handler returned HTTP ${response.status}: ${body}`
      );
    }
  }
  // Forward tail events to the remote worker via RPC.
  // Events with rpcMethod==="tail" are filtered out to prevent infinite
  // recursion (the remote tail() call would itself produce a tail event).
  tail(events) {
    if (!this._fetcher)
      return;
    let filtered = events.filter(
      (e) => e.event?.rpcMethod !== "tail"
    );
    if (filtered.length !== 0)
      try {
        let serializedEvents = JSON.parse(
          JSON.stringify(filtered, tailEventsReplacer),
          tailEventsReviver
        );
        return this._fetcher.tail(serializedEvents);
      } catch (e) {
        console.warn(
          `[dev-registry] Failed to forward tail events to "${this.ctx.props.service}": ${e instanceof Error ? e.message : String(e)}`
        );
      }
  }
};
export {
  ExternalServiceProxy,
  createProxyDurableObjectClass,
  setRegistry
};
//# sourceMappingURL=dev-registry-proxy.worker.js.map
