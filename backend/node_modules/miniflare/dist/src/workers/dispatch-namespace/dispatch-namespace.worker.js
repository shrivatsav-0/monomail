// src/workers/dispatch-namespace/dispatch-namespace.worker.ts
function dispatch_namespace_worker_default(env) {
  return {
    get(name, args, options) {
      return env.proxyClient.get(name, args, options);
    }
  };
}
export {
  dispatch_namespace_worker_default as default
};
//# sourceMappingURL=dispatch-namespace.worker.js.map
