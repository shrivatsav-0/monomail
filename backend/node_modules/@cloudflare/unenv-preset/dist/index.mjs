

// -- Unbuild CommonJS Shims --
import __cjs_url__ from 'url';
import __cjs_path__ from 'path';
import __cjs_mod__ from 'module';
const __filename = __cjs_url__.fileURLToPath(import.meta.url);
const __dirname = __cjs_path__.dirname(__filename);
const require = __cjs_mod__.createRequire(import.meta.url);
const version = "2.16.1";

const defaultNativeModules = [
  "_stream_duplex",
  "_stream_passthrough",
  "_stream_readable",
  "_stream_transform",
  "_stream_writable",
  "_tls_common",
  "_tls_wrap",
  "assert",
  "assert/strict",
  "async_hooks",
  "buffer",
  "constants",
  "crypto",
  "diagnostics_channel",
  "dns",
  "dns/promises",
  "events",
  "net",
  "path",
  "path/posix",
  "path/win32",
  "querystring",
  "module",
  "stream",
  "stream/consumers",
  "stream/promises",
  "stream/web",
  "string_decoder",
  "sys",
  "timers",
  "timers/promises",
  "tls",
  "url",
  "util",
  "util/types",
  "zlib"
];
function getCloudflarePreset({
  compatibilityDate = "2024-09-03",
  compatibilityFlags = []
}) {
  const compat = {
    compatibilityDate,
    compatibilityFlags
  };
  const overrides = [
    getHttpOverrides(compat),
    getHttp2Overrides(compat),
    getOsOverrides(compat),
    getFsOverrides(compat),
    getPunycodeOverrides(compat),
    getClusterOverrides(compat),
    getTraceEventsOverrides(compat),
    getDomainOverrides(compat),
    getWasiOverrides(compat),
    getConsoleOverrides(compat),
    getVmOverrides(compat),
    getInspectorOverrides(compat),
    getSqliteOverrides(compat),
    getDgramOverrides(compat),
    getStreamWrapOverrides(compat),
    getReplOverrides(compat),
    getProcessOverrides(compat),
    getV8Overrides(compat),
    getTtyOverrides(compat),
    getChildProcessOverrides(compat),
    getWorkerThreadsOverrides(compat),
    getReadlineOverrides(compat),
    getPerfHooksOverrides(compat)
  ];
  const nativeModules = [
    ...defaultNativeModules,
    ...overrides.flatMap((o) => o.nativeModules)
  ];
  const hybridModules = overrides.flatMap((o) => o.hybridModules);
  const injects = Object.assign({}, ...overrides.map((o) => o.inject ?? {}));
  const polyfills = overrides.flatMap((o) => o.polyfills ?? []);
  return {
    meta: {
      name: "unenv:cloudflare",
      version,
      url: __filename
    },
    alias: {
      // Alias each native module (and its `node:...` equivalent) to itself to ensure we override any polyfills from the base unenv presets.
      ...Object.fromEntries(
        nativeModules.flatMap((p) => [
          [p, p],
          [`node:${p}`, `node:${p}`]
        ])
      ),
      // Alias each hybrid module (and its `node:...` equivalent) to its unenv polyfill implementation.
      ...Object.fromEntries(
        hybridModules.flatMap((m) => [
          [m, `@cloudflare/unenv-preset/node/${m}`],
          [`node:${m}`, `@cloudflare/unenv-preset/node/${m}`]
        ])
      )
    },
    inject: {
      // Do not inject globals implemented natively by workerd. Setting the value to `false` ensures that any base preset inject is not used.
      Buffer: false,
      global: false,
      clearImmediate: false,
      setImmediate: false,
      // Inject globals provided by unenv for the current compat date and flags.
      ...injects
    },
    polyfill: polyfills,
    external: nativeModules.flatMap((p) => [p, `node:${p}`])
  };
}
function getHttpOverrides({
  compatibilityDate,
  compatibilityFlags
}) {
  const httpDisabledByFlag = compatibilityFlags.includes(
    "disable_nodejs_http_modules"
  );
  const httpEnabledByFlag = compatibilityFlags.includes(
    "enable_nodejs_http_modules"
  );
  const httpEnabledByDate = compatibilityDate >= "2025-08-15";
  const httpEnabled = (httpEnabledByFlag || httpEnabledByDate) && !httpDisabledByFlag;
  if (!httpEnabled) {
    return { nativeModules: [], hybridModules: [] };
  }
  const httpServerEnabledByFlag = compatibilityFlags.includes(
    "enable_nodejs_http_server_modules"
  );
  const httpServerDisabledByFlag = compatibilityFlags.includes(
    "disable_nodejs_http_server_modules"
  );
  const httpServerEnabledByDate = compatibilityDate >= "2025-09-01";
  const httpServerEnabled = (httpServerEnabledByFlag || httpServerEnabledByDate) && !httpServerDisabledByFlag;
  return {
    nativeModules: [
      "_http_agent",
      "_http_client",
      "_http_common",
      "_http_incoming",
      "_http_outgoing",
      // `_http_server` can only be imported when the server flag is set
      // See https://github.com/cloudflare/workerd/blob/56efc04/src/workerd/api/node/node.h#L102-L106
      ...httpServerEnabled ? ["_http_server"] : [],
      "http",
      "https"
    ],
    hybridModules: []
  };
}
function getHttp2Overrides({
  compatibilityDate,
  compatibilityFlags
}) {
  const disabledByFlag = compatibilityFlags.includes(
    "disable_nodejs_http2_module"
  );
  const enabledByFlag = compatibilityFlags.includes(
    "enable_nodejs_http2_module"
  );
  const enabledByDate = compatibilityDate >= "2025-09-01";
  const enabled = (enabledByFlag || enabledByDate) && !disabledByFlag;
  return enabled ? {
    nativeModules: ["http2"],
    hybridModules: []
  } : {
    nativeModules: [],
    hybridModules: []
  };
}
function getOsOverrides({
  compatibilityDate,
  compatibilityFlags
}) {
  const disabledByFlag = compatibilityFlags.includes(
    "disable_nodejs_os_module"
  );
  const enabledByFlag = compatibilityFlags.includes("enable_nodejs_os_module");
  const enabledByDate = compatibilityDate >= "2025-09-15";
  const enabled = (enabledByFlag || enabledByDate) && !disabledByFlag;
  return enabled ? {
    nativeModules: ["os"],
    hybridModules: []
  } : {
    nativeModules: [],
    hybridModules: []
  };
}
function getFsOverrides({
  compatibilityDate,
  compatibilityFlags
}) {
  const disabledByFlag = compatibilityFlags.includes(
    "disable_nodejs_fs_module"
  );
  const enabledByFlag = compatibilityFlags.includes("enable_nodejs_fs_module");
  const enabledByDate = compatibilityDate >= "2025-09-15";
  const enabled = (enabledByFlag || enabledByDate) && !disabledByFlag;
  return enabled ? {
    nativeModules: ["fs/promises", "fs"],
    hybridModules: []
  } : {
    nativeModules: [],
    hybridModules: []
  };
}
function getPunycodeOverrides({
  compatibilityDate,
  compatibilityFlags
}) {
  const disabledByFlag = compatibilityFlags.includes(
    "disable_nodejs_punycode_module"
  );
  const enabledByFlag = compatibilityFlags.includes(
    "enable_nodejs_punycode_module"
  );
  const enabledByDate = compatibilityDate >= "2025-12-04";
  const enabled = (enabledByFlag || enabledByDate) && !disabledByFlag;
  return enabled ? {
    nativeModules: ["punycode"],
    hybridModules: []
  } : {
    nativeModules: [],
    hybridModules: []
  };
}
function getClusterOverrides({
  compatibilityDate,
  compatibilityFlags
}) {
  const disabledByFlag = compatibilityFlags.includes(
    "disable_nodejs_cluster_module"
  );
  const enabledByFlag = compatibilityFlags.includes(
    "enable_nodejs_cluster_module"
  );
  const enabledByDate = compatibilityDate >= "2025-12-04";
  const enabled = (enabledByFlag || enabledByDate) && !disabledByFlag;
  return enabled ? {
    nativeModules: ["cluster"],
    hybridModules: []
  } : {
    nativeModules: [],
    hybridModules: []
  };
}
function getTraceEventsOverrides({
  compatibilityDate,
  compatibilityFlags
}) {
  const disabledByFlag = compatibilityFlags.includes(
    "disable_nodejs_trace_events_module"
  );
  const enabledByFlag = compatibilityFlags.includes(
    "enable_nodejs_trace_events_module"
  );
  const enabledByDate = compatibilityDate >= "2025-12-04";
  const enabled = (enabledByFlag || enabledByDate) && !disabledByFlag;
  return enabled ? {
    nativeModules: ["trace_events"],
    hybridModules: []
  } : {
    nativeModules: [],
    hybridModules: []
  };
}
function getDomainOverrides({
  compatibilityDate,
  compatibilityFlags
}) {
  const disabledByFlag = compatibilityFlags.includes(
    "disable_nodejs_domain_module"
  );
  const enabledByFlag = compatibilityFlags.includes(
    "enable_nodejs_domain_module"
  );
  const enabledByDate = compatibilityDate >= "2025-12-04";
  const enabled = (enabledByFlag || enabledByDate) && !disabledByFlag;
  return enabled ? {
    nativeModules: ["domain"],
    hybridModules: []
  } : {
    nativeModules: [],
    hybridModules: []
  };
}
function getWasiOverrides({
  compatibilityDate,
  compatibilityFlags
}) {
  const disabledByFlag = compatibilityFlags.includes(
    "disable_nodejs_wasi_module"
  );
  const enabledByFlag = compatibilityFlags.includes(
    "enable_nodejs_wasi_module"
  );
  const enabledByDate = compatibilityDate >= "2025-12-04";
  const enabled = (enabledByFlag || enabledByDate) && !disabledByFlag;
  return enabled ? {
    nativeModules: ["wasi"],
    hybridModules: []
  } : {
    nativeModules: [],
    hybridModules: []
  };
}
function getConsoleOverrides({
  compatibilityDate,
  compatibilityFlags
}) {
  const disabledByFlag = compatibilityFlags.includes(
    "disable_nodejs_console_module"
  );
  const enabledByFlag = compatibilityFlags.includes(
    "enable_nodejs_console_module"
  );
  const enabledByDate = compatibilityDate >= "2025-09-21";
  const enabled = (enabledByFlag || enabledByDate) && !disabledByFlag;
  return enabled ? {
    nativeModules: ["console"],
    hybridModules: [],
    inject: {}
  } : {
    nativeModules: [],
    hybridModules: ["console"],
    inject: { console: "@cloudflare/unenv-preset/node/console" }
  };
}
function getVmOverrides({
  compatibilityDate,
  compatibilityFlags
}) {
  const disabledByFlag = compatibilityFlags.includes(
    "disable_nodejs_vm_module"
  );
  const enabledByFlag = compatibilityFlags.includes("enable_nodejs_vm_module");
  const enabledByDate = compatibilityDate >= "2025-10-01";
  const enabled = (enabledByFlag || enabledByDate) && !disabledByFlag;
  return enabled ? {
    nativeModules: ["vm"],
    hybridModules: []
  } : {
    nativeModules: [],
    hybridModules: []
  };
}
function getInspectorOverrides({
  compatibilityDate,
  compatibilityFlags
}) {
  const disabledByFlag = compatibilityFlags.includes(
    "disable_nodejs_inspector_module"
  );
  const enabledByFlag = compatibilityFlags.includes(
    "enable_nodejs_inspector_module"
  );
  const enabledByDate = compatibilityDate >= "2026-01-29";
  const enabled = (enabledByFlag || enabledByDate) && !disabledByFlag;
  return enabled ? {
    nativeModules: ["inspector/promises", "inspector"],
    hybridModules: []
  } : {
    nativeModules: [],
    hybridModules: []
  };
}
function getSqliteOverrides({
  compatibilityDate,
  compatibilityFlags
}) {
  const disabledByFlag = compatibilityFlags.includes(
    "disable_nodejs_sqlite_module"
  );
  const enabledByFlag = compatibilityFlags.includes(
    "enable_nodejs_sqlite_module"
  );
  const enabledByDate = compatibilityDate >= "2026-01-29";
  const enabled = (enabledByFlag || enabledByDate) && !disabledByFlag;
  return enabled ? {
    nativeModules: ["sqlite"],
    hybridModules: []
  } : {
    nativeModules: [],
    hybridModules: []
  };
}
function getDgramOverrides({
  compatibilityDate,
  compatibilityFlags
}) {
  const disabledByFlag = compatibilityFlags.includes(
    "disable_nodejs_dgram_module"
  );
  const enabledByFlag = compatibilityFlags.includes(
    "enable_nodejs_dgram_module"
  );
  const enabledByDate = compatibilityDate >= "2026-01-29";
  const enabled = (enabledByFlag || enabledByDate) && !disabledByFlag;
  return enabled ? {
    nativeModules: ["dgram"],
    hybridModules: []
  } : {
    nativeModules: [],
    hybridModules: []
  };
}
function getStreamWrapOverrides({
  compatibilityDate,
  compatibilityFlags
}) {
  const disabledByFlag = compatibilityFlags.includes(
    "disable_nodejs_stream_wrap_module"
  );
  const enabledByFlag = compatibilityFlags.includes(
    "enable_nodejs_stream_wrap_module"
  );
  const enabledByDate = compatibilityDate >= "2026-01-29";
  const enabled = (enabledByFlag || enabledByDate) && !disabledByFlag;
  return enabled ? {
    nativeModules: ["_stream_wrap"],
    hybridModules: []
  } : {
    nativeModules: [],
    hybridModules: []
  };
}
function getReplOverrides({
  compatibilityDate,
  compatibilityFlags
}) {
  const disabledByFlag = compatibilityFlags.includes(
    "disable_nodejs_repl_module"
  );
  const enabledByFlag = compatibilityFlags.includes(
    "enable_nodejs_repl_module"
  );
  const enabledByDate = compatibilityDate >= "2026-03-17";
  const enabled = (enabledByFlag || enabledByDate) && !disabledByFlag;
  return enabled ? {
    nativeModules: ["repl"],
    hybridModules: []
  } : {
    nativeModules: [],
    hybridModules: []
  };
}
function getProcessOverrides({
  compatibilityDate,
  compatibilityFlags
}) {
  const disabledV2ByFlag = compatibilityFlags.includes(
    "disable_nodejs_process_v2"
  );
  const enabledV2ByFlag = compatibilityFlags.includes(
    "enable_nodejs_process_v2"
  );
  const enabledV2ByDate = compatibilityDate >= "2025-09-15";
  const hasFixes = hasFetchIterableFixes({
    compatibilityDate,
    compatibilityFlags
  });
  const useV2 = hasFixes && (enabledV2ByFlag || enabledV2ByDate) && !disabledV2ByFlag;
  return useV2 ? {
    nativeModules: ["process"],
    hybridModules: [],
    // We can use the native global, return `false` to drop the unenv default
    inject: { process: false }
  } : {
    nativeModules: [],
    hybridModules: ["process"],
    // Use the module default export as the global `process`
    inject: { process: "@cloudflare/unenv-preset/node/process" }
  };
}
function hasFetchIterableFixes({
  compatibilityDate,
  compatibilityFlags
}) {
  const supportEnabledByFlag = compatibilityFlags.includes(
    "fetch_iterable_type_support"
  );
  const supportDisabledByFlag = compatibilityFlags.includes(
    "no_fetch_iterable_type_support"
  );
  const supportEnabledByDate = compatibilityDate >= "2026-02-19";
  const supportEnabled = (supportEnabledByDate || supportEnabledByFlag) && !supportDisabledByFlag;
  if (!supportEnabled) {
    return false;
  }
  const adjustmentEnabledByFlag = compatibilityFlags.includes(
    "fetch_iterable_type_support_override_adjustment"
  );
  const adjustmentDisabledByFlag = compatibilityFlags.includes(
    "no_fetch_iterable_type_support_override_adjustment"
  );
  const adjustmentImpliedBySupport = compatibilityDate >= "2026-01-15";
  const adjustmentEnabled = (adjustmentEnabledByFlag || adjustmentImpliedBySupport) && !adjustmentDisabledByFlag;
  return adjustmentEnabled;
}
function getV8Overrides({
  compatibilityDate,
  compatibilityFlags
}) {
  const disabledByFlag = compatibilityFlags.includes(
    "disable_nodejs_v8_module"
  );
  const enabledByFlag = compatibilityFlags.includes("enable_nodejs_v8_module");
  const enabledByDate = compatibilityDate >= "2026-03-17";
  const enabled = (enabledByFlag || enabledByDate) && !disabledByFlag;
  return enabled ? {
    nativeModules: ["v8"],
    hybridModules: []
  } : {
    nativeModules: [],
    hybridModules: []
  };
}
function getTtyOverrides({
  compatibilityDate,
  compatibilityFlags
}) {
  const disabledByFlag = compatibilityFlags.includes(
    "disable_nodejs_tty_module"
  );
  const enabledByFlag = compatibilityFlags.includes("enable_nodejs_tty_module");
  const enabledByDate = compatibilityDate >= "2026-03-17";
  const enabled = (enabledByFlag || enabledByDate) && !disabledByFlag;
  return enabled ? {
    nativeModules: ["tty"],
    hybridModules: []
  } : {
    nativeModules: [],
    hybridModules: []
  };
}
function getChildProcessOverrides({
  compatibilityDate,
  compatibilityFlags
}) {
  const disabledByFlag = compatibilityFlags.includes(
    "disable_nodejs_child_process_module"
  );
  const enabledByFlag = compatibilityFlags.includes(
    "enable_nodejs_child_process_module"
  );
  const enabledByDate = compatibilityDate >= "2026-03-17";
  const enabled = (enabledByFlag || enabledByDate) && !disabledByFlag;
  return enabled ? {
    nativeModules: ["child_process"],
    hybridModules: []
  } : {
    nativeModules: [],
    hybridModules: []
  };
}
function getWorkerThreadsOverrides({
  compatibilityDate,
  compatibilityFlags
}) {
  const disabledByFlag = compatibilityFlags.includes(
    "disable_nodejs_worker_threads_module"
  );
  const enabledByFlag = compatibilityFlags.includes(
    "enable_nodejs_worker_threads_module"
  );
  const enabledByDate = compatibilityDate >= "2026-03-17";
  const enabled = (enabledByFlag || enabledByDate) && !disabledByFlag;
  return enabled ? {
    nativeModules: ["worker_threads"],
    hybridModules: []
  } : {
    nativeModules: [],
    hybridModules: []
  };
}
function getReadlineOverrides({
  compatibilityDate,
  compatibilityFlags
}) {
  const disabledByFlag = compatibilityFlags.includes(
    "disable_nodejs_readline_module"
  );
  const enabledByFlag = compatibilityFlags.includes(
    "enable_nodejs_readline_module"
  );
  const enabledByDate = compatibilityDate >= "2026-03-17";
  const enabled = (enabledByFlag || enabledByDate) && !disabledByFlag;
  return enabled ? {
    nativeModules: ["readline", "readline/promises"],
    hybridModules: []
  } : {
    nativeModules: [],
    hybridModules: []
  };
}
function getPerfHooksOverrides({
  compatibilityDate,
  compatibilityFlags
}) {
  const disabledByFlag = compatibilityFlags.includes(
    "disable_nodejs_perf_hooks_module"
  );
  const enabledByFlag = compatibilityFlags.includes(
    "enable_nodejs_perf_hooks_module"
  );
  const enabledByDate = compatibilityDate >= "2026-03-17";
  const enabled = (enabledByFlag || enabledByDate) && !disabledByFlag;
  return enabled ? {
    nativeModules: ["perf_hooks"],
    hybridModules: []
  } : {
    nativeModules: [],
    hybridModules: [],
    polyfills: ["@cloudflare/unenv-preset/polyfill/performance"]
  };
}

const nonPrefixedNodeModules = [
  "_http_agent",
  "_http_client",
  "_http_common",
  "_http_incoming",
  "_http_outgoing",
  "_http_server",
  "_stream_duplex",
  "_stream_passthrough",
  "_stream_readable",
  "_stream_transform",
  "_stream_wrap",
  "_stream_writable",
  "_tls_common",
  "_tls_wrap",
  "assert",
  "assert/strict",
  "async_hooks",
  "buffer",
  "child_process",
  "cluster",
  "console",
  "constants",
  "crypto",
  "dgram",
  "diagnostics_channel",
  "dns",
  "dns/promises",
  "domain",
  "events",
  "fs",
  "fs/promises",
  "http",
  "http2",
  "https",
  "inspector",
  "inspector/promises",
  "module",
  "net",
  "os",
  "path",
  "path/posix",
  "path/win32",
  "perf_hooks",
  "process",
  "punycode",
  "querystring",
  "readline",
  "readline/promises",
  "repl",
  "stream",
  "stream/consumers",
  "stream/promises",
  "stream/web",
  "string_decoder",
  "sys",
  "timers",
  "timers/promises",
  "tls",
  "trace_events",
  "tty",
  "url",
  "util",
  "util/types",
  "v8",
  "vm",
  "wasi",
  "worker_threads",
  "zlib"
];
const cloudflare = getCloudflarePreset({});

export { cloudflare, getCloudflarePreset, nonPrefixedNodeModules };
