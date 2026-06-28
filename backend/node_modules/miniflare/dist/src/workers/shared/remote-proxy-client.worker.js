// src/workers/shared/remote-proxy-client.worker.ts
import { WorkerEntrypoint } from "cloudflare:workers";

// src/workers/shared/constants.ts
var SharedBindings = {
  TEXT_NAMESPACE: "MINIFLARE_NAMESPACE",
  DURABLE_OBJECT_NAMESPACE_OBJECT: "MINIFLARE_OBJECT",
  MAYBE_SERVICE_BLOBS: "MINIFLARE_BLOBS",
  MAYBE_SERVICE_LOOPBACK: "MINIFLARE_LOOPBACK",
  MAYBE_JSON_ENABLE_CONTROL_ENDPOINTS: "MINIFLARE_ENABLE_CONTROL_ENDPOINTS",
  MAYBE_JSON_ENABLE_STICKY_BLOBS: "MINIFLARE_STICKY_BLOBS"
};

// ../../node_modules/.pnpm/capnweb@0.5.0/node_modules/capnweb/dist/index-workers.js
import * as cfw from "cloudflare:workers";
var WORKERS_MODULE_SYMBOL = /* @__PURE__ */ Symbol("workers-module");
globalThis[WORKERS_MODULE_SYMBOL] = cfw;
Symbol.dispose || (Symbol.dispose = /* @__PURE__ */ Symbol.for("dispose"));
Symbol.asyncDispose || (Symbol.asyncDispose = /* @__PURE__ */ Symbol.for("asyncDispose"));
Promise.withResolvers || (Promise.withResolvers = function() {
  let resolve, reject;
  return { promise: new Promise((res, rej) => {
    resolve = res, reject = rej;
  }), resolve, reject };
});
var workersModule = globalThis[WORKERS_MODULE_SYMBOL], RpcTarget = workersModule ? workersModule.RpcTarget : class {
}, AsyncFunction = (async function() {
}).constructor;
function typeForRpc(value) {
  switch (typeof value) {
    case "boolean":
    case "number":
    case "string":
      return "primitive";
    case "undefined":
      return "undefined";
    case "object":
    case "function":
      break;
    case "bigint":
      return "bigint";
    default:
      return "unsupported";
  }
  if (value === null)
    return "primitive";
  let prototype = Object.getPrototypeOf(value);
  switch (prototype) {
    case Object.prototype:
      return "object";
    case Function.prototype:
    case AsyncFunction.prototype:
      return "function";
    case Array.prototype:
      return "array";
    case Date.prototype:
      return "date";
    case Uint8Array.prototype:
      return "bytes";
    case WritableStream.prototype:
      return "writable";
    case ReadableStream.prototype:
      return "readable";
    case Headers.prototype:
      return "headers";
    case Request.prototype:
      return "request";
    case Response.prototype:
      return "response";
    // TODO: All other structured clone types.
    case RpcStub.prototype:
      return "stub";
    case RpcPromise.prototype:
      return "rpc-promise";
    // TODO: Promise<T> or thenable
    default:
      if (workersModule) {
        if (prototype == workersModule.RpcStub.prototype || value instanceof workersModule.ServiceStub)
          return "rpc-target";
        if (prototype == workersModule.RpcPromise.prototype || prototype == workersModule.RpcProperty.prototype)
          return "rpc-thenable";
      }
      return value instanceof RpcTarget ? "rpc-target" : value instanceof Error ? "error" : "unsupported";
  }
}
function mapNotLoaded() {
  throw new Error("RPC map() implementation was not loaded.");
}
var mapImpl = { applyMap: mapNotLoaded, sendMap: mapNotLoaded };
function streamNotLoaded() {
  throw new Error("Stream implementation was not loaded.");
}
var streamImpl = {
  createWritableStreamHook: streamNotLoaded,
  createWritableStreamFromHook: streamNotLoaded,
  createReadableStreamHook: streamNotLoaded
}, StubHook = class {
  // Like call(), but designed for streaming calls (e.g. WritableStream writes). Returns:
  // - promise: A Promise<void> for the completion of the call.
  // - size: If the call was remote, the byte size of the serialized message. For local calls,
  //   undefined is returned, indicating the caller should await the promise to serialize writes
  //   (no overlapping).
  stream(path, args) {
    let pulled = this.call(path, args).pull(), promise;
    return pulled instanceof Promise ? promise = pulled.then((p) => {
      p.dispose();
    }) : (pulled.dispose(), promise = Promise.resolve()), { promise };
  }
}, ErrorStubHook = class extends StubHook {
  constructor(error) {
    super(), this.error = error;
  }
  call(path, args) {
    return this;
  }
  map(path, captures, instructions) {
    return this;
  }
  get(path) {
    return this;
  }
  dup() {
    return this;
  }
  pull() {
    return Promise.reject(this.error);
  }
  ignoreUnhandledRejections() {
  }
  dispose() {
  }
  onBroken(callback) {
    try {
      callback(this.error);
    } catch (err) {
      Promise.resolve(err);
    }
  }
}, DISPOSED_HOOK = new ErrorStubHook(
  new Error("Attempted to use RPC stub after it has been disposed.")
), doCall = (hook, path, params) => hook.call(path, params);
function withCallInterceptor(interceptor, callback) {
  let oldValue = doCall;
  doCall = interceptor;
  try {
    return callback();
  } finally {
    doCall = oldValue;
  }
}
var RAW_STUB = /* @__PURE__ */ Symbol("realStub"), PROXY_HANDLERS = {
  apply(target, thisArg, argumentsList) {
    let stub = target.raw;
    return new RpcPromise(doCall(
      stub.hook,
      stub.pathIfPromise || [],
      RpcPayload.fromAppParams(argumentsList)
    ), []);
  },
  get(target, prop, receiver) {
    let stub = target.raw;
    return prop === RAW_STUB ? stub : prop in RpcPromise.prototype ? stub[prop] : typeof prop == "string" ? new RpcPromise(
      stub.hook,
      stub.pathIfPromise ? [...stub.pathIfPromise, prop] : [prop]
    ) : prop === Symbol.dispose && (!stub.pathIfPromise || stub.pathIfPromise.length == 0) ? () => {
      stub.hook.dispose(), stub.hook = DISPOSED_HOOK;
    } : void 0;
  },
  has(target, prop) {
    let stub = target.raw;
    return prop === RAW_STUB ? !0 : prop in RpcPromise.prototype ? prop in stub : typeof prop == "string" ? !0 : prop === Symbol.dispose && (!stub.pathIfPromise || stub.pathIfPromise.length == 0);
  },
  construct(target, args) {
    throw new Error("An RPC stub cannot be used as a constructor.");
  },
  defineProperty(target, property, attributes) {
    throw new Error("Can't define properties on RPC stubs.");
  },
  deleteProperty(target, p) {
    throw new Error("Can't delete properties on RPC stubs.");
  },
  getOwnPropertyDescriptor(target, p) {
  },
  getPrototypeOf(target) {
    return Object.getPrototypeOf(target.raw);
  },
  isExtensible(target) {
    return !1;
  },
  ownKeys(target) {
    return [];
  },
  preventExtensions(target) {
    return !0;
  },
  set(target, p, newValue, receiver) {
    throw new Error("Can't assign properties on RPC stubs.");
  },
  setPrototypeOf(target, v) {
    throw new Error("Can't override prototype of RPC stubs.");
  }
}, RpcStub = class _RpcStub extends RpcTarget {
  // Although `hook` and `path` are declared `public` here, they are effectively hidden by the
  // proxy.
  constructor(hook, pathIfPromise) {
    if (super(), !(hook instanceof StubHook)) {
      let value = hook;
      if (value instanceof RpcTarget || value instanceof Function ? hook = TargetStubHook.create(value, void 0) : hook = new PayloadStubHook(RpcPayload.fromAppReturn(value)), pathIfPromise)
        throw new TypeError("RpcStub constructor expected one argument, received two.");
    }
    this.hook = hook, this.pathIfPromise = pathIfPromise;
    let func = () => {
    };
    return func.raw = this, new Proxy(func, PROXY_HANDLERS);
  }
  hook;
  pathIfPromise;
  dup() {
    let target = this[RAW_STUB];
    return target.pathIfPromise ? new _RpcStub(target.hook.get(target.pathIfPromise)) : new _RpcStub(target.hook.dup());
  }
  onRpcBroken(callback) {
    this[RAW_STUB].hook.onBroken(callback);
  }
  map(func) {
    let { hook, pathIfPromise } = this[RAW_STUB];
    return mapImpl.sendMap(hook, pathIfPromise || [], func);
  }
  toString() {
    return "[object RpcStub]";
  }
}, RpcPromise = class extends RpcStub {
  // TODO: Support passing target value or promise to constructor.
  constructor(hook, pathIfPromise) {
    super(hook, pathIfPromise);
  }
  then(onfulfilled, onrejected) {
    return pullPromise(this).then(...arguments);
  }
  catch(onrejected) {
    return pullPromise(this).catch(...arguments);
  }
  finally(onfinally) {
    return pullPromise(this).finally(...arguments);
  }
  toString() {
    return "[object RpcPromise]";
  }
};
function unwrapStubTakingOwnership(stub) {
  let { hook, pathIfPromise } = stub[RAW_STUB];
  return pathIfPromise && pathIfPromise.length > 0 ? hook.get(pathIfPromise) : hook;
}
function unwrapStubAndDup(stub) {
  let { hook, pathIfPromise } = stub[RAW_STUB];
  return pathIfPromise ? hook.get(pathIfPromise) : hook.dup();
}
function unwrapStubNoProperties(stub) {
  let { hook, pathIfPromise } = stub[RAW_STUB];
  if (!(pathIfPromise && pathIfPromise.length > 0))
    return hook;
}
function unwrapStubOrParent(stub) {
  return stub[RAW_STUB].hook;
}
function unwrapStubAndPath(stub) {
  return stub[RAW_STUB];
}
async function pullPromise(promise) {
  let { hook, pathIfPromise } = promise[RAW_STUB];
  return pathIfPromise.length > 0 && (hook = hook.get(pathIfPromise)), (await hook.pull()).deliverResolve();
}
var RpcPayload = class _RpcPayload {
  // Private constructor; use factory functions above to construct.
  constructor(value, source, hooks, promises) {
    this.value = value, this.source = source, this.hooks = hooks, this.promises = promises;
  }
  // Create a payload from a value passed as params to an RPC from the app.
  //
  // The payload does NOT take ownership of any stubs in `value`, and but promises not to modify
  // `value`. If the payload is delivered locally, `value` will be deep-copied first, so as not
  // to have the sender and recipient end up sharing the same mutable object. `value` will not be
  // touched again after the call returns synchronously (returns a promise) -- by that point,
  // the value has either been copied or serialized to the wire.
  static fromAppParams(value) {
    return new _RpcPayload(value, "params");
  }
  // Create a payload from a value return from an RPC implementation by the app.
  //
  // Unlike fromAppParams(), in this case the payload takes ownership of all stubs in `value`, and
  // may hold onto `value` for an arbitrarily long time (e.g. to serve pipelined requests). It
  // will still avoid modifying `value` and will make a deep copy if it is delivered locally.
  static fromAppReturn(value) {
    return new _RpcPayload(value, "return");
  }
  // Combine an array of payloads into a single payload whose value is an array. Ownership of all
  // stubs is transferred from the inputs to the outputs, hence if the output is disposed, the
  // inputs should not be. (In case of exception, nothing is disposed, though.)
  static fromArray(array) {
    let hooks = [], promises = [], resultArray = [];
    for (let payload of array) {
      payload.ensureDeepCopied();
      for (let hook of payload.hooks)
        hooks.push(hook);
      for (let promise of payload.promises)
        promise.parent === payload && (promise = {
          parent: resultArray,
          property: resultArray.length,
          promise: promise.promise
        }), promises.push(promise);
      resultArray.push(payload.value);
    }
    return new _RpcPayload(resultArray, "owned", hooks, promises);
  }
  // Create a payload from a value parsed off the wire using Evaluator.evaluate().
  //
  // A payload is constructed with a null value and the given hooks and promises arrays. The value
  // is expected to be filled in by the evaluator, and the hooks and promises arrays are expected
  // to be extended with stubs found during parsing. (This weird usage model is necessary so that
  // if the root value turns out to be a promise, its `parent` in `promises` can be the payload
  // object itself.)
  //
  // When done, the payload takes ownership of the final value and all the stubs within. It may
  // modify the value in preparation for delivery, and may deliver the value directly to the app
  // without copying.
  static forEvaluate(hooks, promises) {
    return new _RpcPayload(null, "owned", hooks, promises);
  }
  // Deep-copy the given value, including dup()ing all stubs.
  //
  // If `value` is a function, it should be bound to `oldParent` as its `this`.
  //
  // If deep-copying from a branch of some other RpcPayload, it must be provided, to make sure
  // RpcTargets found within don't get duplicate stubs.
  static deepCopyFrom(value, oldParent, owner) {
    let result = new _RpcPayload(null, "owned", [], []);
    return result.value = result.deepCopy(
      value,
      oldParent,
      "value",
      result,
      /*dupStubs=*/
      !0,
      owner
    ), result;
  }
  // For `source === "return"` payloads only, this tracks any StubHooks created around RpcTargets
  // or WritableStreams found in the payload at the time that it is serialized (or deep-copied) for
  // return, so that we can make sure they are not disposed before the pipeline ends.
  //
  // This is initialized on first use.
  rpcTargets;
  // Get the StubHook representing the given RpcTarget found inside this payload.
  getHookForRpcTarget(target, parent, dupStubs = !0) {
    if (this.source === "params") {
      if (dupStubs) {
        let dupable = target;
        typeof dupable.dup == "function" && (target = dupable.dup());
      }
      return TargetStubHook.create(target, parent);
    } else if (this.source === "return") {
      let hook = this.rpcTargets?.get(target);
      return hook ? dupStubs ? hook.dup() : (this.rpcTargets?.delete(target), hook) : (hook = TargetStubHook.create(target, parent), dupStubs ? (this.rpcTargets || (this.rpcTargets = /* @__PURE__ */ new Map()), this.rpcTargets.set(target, hook), hook.dup()) : hook);
    } else
      throw new Error("owned payload shouldn't contain raw RpcTargets");
  }
  // Get the StubHook representing the given WritableStream found inside this payload.
  getHookForWritableStream(stream, parent, dupStubs = !0) {
    if (this.source === "params")
      return streamImpl.createWritableStreamHook(stream);
    if (this.source === "return") {
      let hook = this.rpcTargets?.get(stream);
      return hook ? dupStubs ? hook.dup() : (this.rpcTargets?.delete(stream), hook) : (hook = streamImpl.createWritableStreamHook(stream), dupStubs ? (this.rpcTargets || (this.rpcTargets = /* @__PURE__ */ new Map()), this.rpcTargets.set(stream, hook), hook.dup()) : hook);
    } else
      throw new Error("owned payload shouldn't contain raw WritableStreams");
  }
  // Get the StubHook representing the given ReadableStream found inside this payload.
  getHookForReadableStream(stream, parent, dupStubs = !0) {
    if (this.source === "params")
      return streamImpl.createReadableStreamHook(stream);
    if (this.source === "return") {
      let hook = this.rpcTargets?.get(stream);
      return hook ? dupStubs ? hook.dup() : (this.rpcTargets?.delete(stream), hook) : (hook = streamImpl.createReadableStreamHook(stream), dupStubs ? (this.rpcTargets || (this.rpcTargets = /* @__PURE__ */ new Map()), this.rpcTargets.set(stream, hook), hook.dup()) : hook);
    } else
      throw new Error("owned payload shouldn't contain raw ReadableStreams");
  }
  deepCopy(value, oldParent, property, parent, dupStubs, owner) {
    switch (typeForRpc(value)) {
      case "unsupported":
        return value;
      case "primitive":
      case "bigint":
      case "date":
      case "bytes":
      case "error":
      case "undefined":
        return value;
      case "array": {
        let array = value, len = array.length, result = new Array(len);
        for (let i = 0; i < len; i++)
          result[i] = this.deepCopy(array[i], array, i, result, dupStubs, owner);
        return result;
      }
      case "object": {
        let result = {}, object = value;
        for (let i in object)
          result[i] = this.deepCopy(object[i], object, i, result, dupStubs, owner);
        return result;
      }
      case "stub":
      case "rpc-promise": {
        let stub = value, hook;
        if (dupStubs ? hook = unwrapStubAndDup(stub) : hook = unwrapStubTakingOwnership(stub), stub instanceof RpcPromise) {
          let promise = new RpcPromise(hook, []);
          return this.promises.push({ parent, property, promise }), promise;
        } else
          return this.hooks.push(hook), new RpcStub(hook);
      }
      case "function":
      case "rpc-target": {
        let target = value, hook;
        return owner ? hook = owner.getHookForRpcTarget(target, oldParent, dupStubs) : hook = TargetStubHook.create(target, oldParent), this.hooks.push(hook), new RpcStub(hook);
      }
      case "rpc-thenable": {
        let target = value, promise;
        return owner ? promise = new RpcPromise(owner.getHookForRpcTarget(target, oldParent, dupStubs), []) : promise = new RpcPromise(TargetStubHook.create(target, oldParent), []), this.promises.push({ parent, property, promise }), promise;
      }
      case "writable": {
        let stream = value, hook;
        return owner ? hook = owner.getHookForWritableStream(stream, oldParent, dupStubs) : hook = streamImpl.createWritableStreamHook(stream), this.hooks.push(hook), stream;
      }
      case "readable": {
        let stream = value, hook;
        return owner ? hook = owner.getHookForReadableStream(stream, oldParent, dupStubs) : hook = streamImpl.createReadableStreamHook(stream), this.hooks.push(hook), stream;
      }
      case "headers":
        return new Headers(value);
      case "request": {
        let req = value;
        return req.body && this.deepCopy(req.body, req, "body", req, dupStubs, owner), new Request(req);
      }
      case "response": {
        let resp = value;
        return resp.body && this.deepCopy(resp.body, resp, "body", resp, dupStubs, owner), new Response(resp.body, resp);
      }
      default:
        throw new Error("unreachable");
    }
  }
  // Ensures that if the value originally came from an unowned source, we have replaced it with a
  // deep copy.
  ensureDeepCopied() {
    if (this.source !== "owned") {
      let dupStubs = this.source === "params";
      this.hooks = [], this.promises = [];
      try {
        this.value = this.deepCopy(this.value, void 0, "value", this, dupStubs, this);
      } catch (err) {
        throw this.hooks = void 0, this.promises = void 0, err;
      }
      if (this.source = "owned", this.rpcTargets && this.rpcTargets.size > 0)
        throw new Error("Not all rpcTargets were accounted for in deep-copy?");
      this.rpcTargets = void 0;
    }
  }
  // Resolve all promises in this payload and then assign the final value into `parent[property]`.
  deliverTo(parent, property, promises) {
    if (this.ensureDeepCopied(), this.value instanceof RpcPromise)
      _RpcPayload.deliverRpcPromiseTo(this.value, parent, property, promises);
    else {
      parent[property] = this.value;
      for (let record of this.promises)
        _RpcPayload.deliverRpcPromiseTo(record.promise, record.parent, record.property, promises);
    }
  }
  static deliverRpcPromiseTo(promise, parent, property, promises) {
    let hook = unwrapStubNoProperties(promise);
    if (!hook)
      throw new Error("property promises should have been resolved earlier");
    let inner = hook.pull();
    inner instanceof _RpcPayload ? inner.deliverTo(parent, property, promises) : promises.push(inner.then((payload) => {
      let subPromises = [];
      if (payload.deliverTo(parent, property, subPromises), subPromises.length > 0)
        return Promise.all(subPromises);
    }));
  }
  // Call the given function with the payload as an argument. The call is made synchronously if
  // possible, in order to maintain e-order. However, if any RpcPromises exist in the payload,
  // they are awaited and substituted before calling the function. The result of the call is
  // wrapped into another payload.
  //
  // The payload is automatically disposed after the call completes. The caller should not call
  // dispose().
  async deliverCall(func, thisArg) {
    try {
      let promises = [];
      this.deliverTo(this, "value", promises), promises.length > 0 && await Promise.all(promises);
      let result = Function.prototype.apply.call(func, thisArg, this.value);
      return result instanceof RpcPromise ? _RpcPayload.fromAppReturn(result) : _RpcPayload.fromAppReturn(await result);
    } finally {
      this.dispose();
    }
  }
  // Produce a promise for this payload for return to the application. Any RpcPromises in the
  // payload are awaited and substituted with their results first.
  //
  // The returned object will have a disposer which disposes the payload. The caller should not
  // separately dispose it.
  async deliverResolve() {
    try {
      let promises = [];
      this.deliverTo(this, "value", promises), promises.length > 0 && await Promise.all(promises);
      let result = this.value;
      return result instanceof Object && (Symbol.dispose in result || Object.defineProperty(result, Symbol.dispose, {
        // NOTE: Using `this.dispose.bind(this)` here causes Playwright's build of
        //   Chromium 140.0.7339.16 to fail when the object is assigned to a `using` variable,
        //   with the error:
        //       TypeError: Symbol(Symbol.dispose) is not a function
        //   I cannot reproduce this problem in Chrome 140.0.7339.127 nor in Node or workerd,
        //   so maybe it was a short-lived V8 bug or something. To be safe, though, we use
        //   `() => this.dispose()`, which seems to always work.
        value: () => this.dispose(),
        writable: !0,
        enumerable: !1,
        configurable: !0
      })), result;
    } catch (err) {
      throw this.dispose(), err;
    }
  }
  dispose() {
    if (this.source === "owned")
      this.hooks.forEach((hook) => hook.dispose()), this.promises.forEach((promise) => promise.promise[Symbol.dispose]());
    else if (this.source === "return" && (this.disposeImpl(this.value, void 0), this.rpcTargets && this.rpcTargets.size > 0))
      throw new Error("Not all rpcTargets were accounted for in disposeImpl()?");
    this.source = "owned", this.hooks = [], this.promises = [];
  }
  // Recursive dispose, called only when `source` is "return".
  disposeImpl(value, parent) {
    switch (typeForRpc(value)) {
      case "unsupported":
      case "primitive":
      case "bigint":
      case "bytes":
      case "date":
      case "error":
      case "undefined":
        return;
      case "array": {
        let array = value, len = array.length;
        for (let i = 0; i < len; i++)
          this.disposeImpl(array[i], array);
        return;
      }
      case "object": {
        let object = value;
        for (let i in object)
          this.disposeImpl(object[i], object);
        return;
      }
      case "stub":
      case "rpc-promise": {
        let hook = unwrapStubNoProperties(value);
        hook && hook.dispose();
        return;
      }
      case "function":
      case "rpc-target": {
        let target = value, hook = this.rpcTargets?.get(target);
        hook ? (hook.dispose(), this.rpcTargets.delete(target)) : disposeRpcTarget(target);
        return;
      }
      case "rpc-thenable":
        return;
      case "headers":
        return;
      case "request": {
        let req = value;
        req.body && this.disposeImpl(req.body, req);
        return;
      }
      case "response": {
        let resp = value;
        resp.body && this.disposeImpl(resp.body, resp);
        return;
      }
      case "writable": {
        let stream = value, hook = this.rpcTargets?.get(stream);
        hook ? this.rpcTargets.delete(stream) : hook = streamImpl.createWritableStreamHook(stream), hook.dispose();
        return;
      }
      case "readable": {
        let stream = value, hook = this.rpcTargets?.get(stream);
        hook ? this.rpcTargets.delete(stream) : hook = streamImpl.createReadableStreamHook(stream), hook.dispose();
        return;
      }
      default:
        return;
    }
  }
  // Ignore unhandled rejections in all promises in this payload -- that is, all promises that
  // *would* be awaited if this payload were to be delivered. See the similarly-named method of
  // StubHook for explanation.
  ignoreUnhandledRejections() {
    this.hooks ? (this.hooks.forEach((hook) => {
      hook.ignoreUnhandledRejections();
    }), this.promises.forEach(
      (promise) => unwrapStubOrParent(promise.promise).ignoreUnhandledRejections()
    )) : this.ignoreUnhandledRejectionsImpl(this.value);
  }
  ignoreUnhandledRejectionsImpl(value) {
    switch (typeForRpc(value)) {
      case "unsupported":
      case "primitive":
      case "bigint":
      case "bytes":
      case "date":
      case "error":
      case "undefined":
      case "function":
      case "rpc-target":
      case "writable":
      case "readable":
      case "headers":
      case "request":
      case "response":
        return;
      case "array": {
        let array = value, len = array.length;
        for (let i = 0; i < len; i++)
          this.ignoreUnhandledRejectionsImpl(array[i]);
        return;
      }
      case "object": {
        let object = value;
        for (let i in object)
          this.ignoreUnhandledRejectionsImpl(object[i]);
        return;
      }
      case "stub":
      case "rpc-promise":
        unwrapStubOrParent(value).ignoreUnhandledRejections();
        return;
      case "rpc-thenable":
        value.then((_) => {
        }, (_) => {
        });
        return;
      default:
        return;
    }
  }
};
function followPath(value, parent, path, owner) {
  for (let i = 0; i < path.length; i++) {
    parent = value;
    let part = path[i];
    if (part in Object.prototype) {
      value = void 0;
      continue;
    }
    switch (typeForRpc(value)) {
      case "object":
      case "function":
        Object.hasOwn(value, part) ? value = value[part] : value = void 0;
        break;
      case "array":
        Number.isInteger(part) && part >= 0 ? value = value[part] : value = void 0;
        break;
      case "rpc-target":
      case "rpc-thenable": {
        if (Object.hasOwn(value, part))
          throw new TypeError(
            `Attempted to access property '${part}', which is an instance property of the RpcTarget. To avoid leaking private internals, instance properties cannot be accessed over RPC. If you want to make this property available over RPC, define it as a method or getter on the class, instead of an instance property.`
          );
        value = value[part], owner = null;
        break;
      }
      case "stub":
      case "rpc-promise": {
        let { hook, pathIfPromise } = unwrapStubAndPath(value);
        return { hook, remainingPath: pathIfPromise ? pathIfPromise.concat(path.slice(i)) : path.slice(i) };
      }
      case "writable":
        value = void 0;
        break;
      case "readable":
        value = void 0;
        break;
      case "primitive":
      case "bigint":
      case "bytes":
      case "date":
      case "error":
      case "headers":
      case "request":
      case "response":
        value = void 0;
        break;
      case "undefined":
        value = value[part];
        break;
      case "unsupported": {
        if (i === 0)
          throw new TypeError("RPC stub points at a non-serializable type.");
        {
          let prefix = path.slice(0, i).join("."), remainder = path.slice(0, i).join(".");
          throw new TypeError(
            `'${prefix}' is not a serializable type, so property ${remainder} cannot be accessed.`
          );
        }
      }
      default:
        throw new TypeError("unreachable");
    }
  }
  if (value instanceof RpcPromise) {
    let { hook, pathIfPromise } = unwrapStubAndPath(value);
    return { hook, remainingPath: pathIfPromise || [] };
  }
  return {
    value,
    parent,
    owner
  };
}
var ValueStubHook = class extends StubHook {
  call(path, args) {
    try {
      let { value, owner } = this.getValue(), followResult = followPath(value, void 0, path, owner);
      if (followResult.hook)
        return followResult.hook.call(followResult.remainingPath, args);
      if (typeof followResult.value != "function")
        throw new TypeError(`'${path.join(".")}' is not a function.`);
      let promise = args.deliverCall(followResult.value, followResult.parent);
      return new PromiseStubHook(promise.then((payload) => new PayloadStubHook(payload)));
    } catch (err) {
      return new ErrorStubHook(err);
    }
  }
  map(path, captures, instructions) {
    try {
      let followResult;
      try {
        let { value, owner } = this.getValue();
        followResult = followPath(value, void 0, path, owner);
      } catch (err) {
        for (let cap of captures)
          cap.dispose();
        throw err;
      }
      return followResult.hook ? followResult.hook.map(followResult.remainingPath, captures, instructions) : mapImpl.applyMap(
        followResult.value,
        followResult.parent,
        followResult.owner,
        captures,
        instructions
      );
    } catch (err) {
      return new ErrorStubHook(err);
    }
  }
  get(path) {
    try {
      let { value, owner } = this.getValue();
      if (path.length === 0 && owner === null)
        throw new Error("Can't dup an RpcTarget stub as a promise.");
      let followResult = followPath(value, void 0, path, owner);
      return followResult.hook ? followResult.hook.get(followResult.remainingPath) : new PayloadStubHook(RpcPayload.deepCopyFrom(
        followResult.value,
        followResult.parent,
        followResult.owner
      ));
    } catch (err) {
      return new ErrorStubHook(err);
    }
  }
}, PayloadStubHook = class _PayloadStubHook extends ValueStubHook {
  constructor(payload) {
    super(), this.payload = payload;
  }
  payload;
  // cleared when disposed
  getPayload() {
    if (this.payload)
      return this.payload;
    throw new Error("Attempted to use an RPC StubHook after it was disposed.");
  }
  getValue() {
    let payload = this.getPayload();
    return { value: payload.value, owner: payload };
  }
  dup() {
    let thisPayload = this.getPayload();
    return new _PayloadStubHook(RpcPayload.deepCopyFrom(
      thisPayload.value,
      void 0,
      thisPayload
    ));
  }
  pull() {
    return this.getPayload();
  }
  ignoreUnhandledRejections() {
    this.payload && this.payload.ignoreUnhandledRejections();
  }
  dispose() {
    this.payload && (this.payload.dispose(), this.payload = void 0);
  }
  onBroken(callback) {
    this.payload && this.payload.value instanceof RpcStub && this.payload.value.onRpcBroken(callback);
  }
};
function disposeRpcTarget(target) {
  if (Symbol.dispose in target)
    try {
      target[Symbol.dispose]();
    } catch (err) {
      Promise.reject(err);
    }
}
var TargetStubHook = class _TargetStubHook extends ValueStubHook {
  // Constructs a TargetStubHook that is not duplicated from an existing hook.
  //
  // If `value` is a function, `parent` is bound as its "this".
  static create(value, parent) {
    return typeof value != "function" && (parent = void 0), new _TargetStubHook(value, parent);
  }
  constructor(target, parent, dupFrom) {
    super(), this.target = target, this.parent = parent, dupFrom ? dupFrom.refcount && (this.refcount = dupFrom.refcount, ++this.refcount.count) : Symbol.dispose in target && (this.refcount = { count: 1 });
  }
  target;
  // cleared when disposed
  parent;
  // `this` parameter when calling `target`
  refcount;
  // undefined if not needed (because target has no disposer)
  getTarget() {
    if (this.target)
      return this.target;
    throw new Error("Attempted to use an RPC StubHook after it was disposed.");
  }
  getValue() {
    return { value: this.getTarget(), owner: null };
  }
  dup() {
    return new _TargetStubHook(this.getTarget(), this.parent, this);
  }
  pull() {
    let target = this.getTarget();
    return "then" in target ? Promise.resolve(target).then((resolution) => RpcPayload.fromAppReturn(resolution)) : Promise.reject(new Error("Tried to resolve a non-promise stub."));
  }
  ignoreUnhandledRejections() {
  }
  dispose() {
    this.target && (this.refcount && --this.refcount.count == 0 && disposeRpcTarget(this.target), this.target = void 0);
  }
  onBroken(callback) {
  }
}, PromiseStubHook = class _PromiseStubHook extends StubHook {
  promise;
  resolution;
  constructor(promise) {
    super(), this.promise = promise.then((res) => (this.resolution = res, res));
  }
  call(path, args) {
    return args.ensureDeepCopied(), new _PromiseStubHook(this.promise.then((hook) => hook.call(path, args)));
  }
  stream(path, args) {
    return args.ensureDeepCopied(), { promise: this.promise.then((hook) => hook.stream(path, args).promise) };
  }
  map(path, captures, instructions) {
    return new _PromiseStubHook(this.promise.then(
      (hook) => hook.map(path, captures, instructions),
      (err) => {
        for (let cap of captures)
          cap.dispose();
        throw err;
      }
    ));
  }
  get(path) {
    return new _PromiseStubHook(this.promise.then((hook) => hook.get(path)));
  }
  dup() {
    return this.resolution ? this.resolution.dup() : new _PromiseStubHook(this.promise.then((hook) => hook.dup()));
  }
  pull() {
    return this.resolution ? this.resolution.pull() : this.promise.then((hook) => hook.pull());
  }
  ignoreUnhandledRejections() {
    this.resolution ? this.resolution.ignoreUnhandledRejections() : this.promise.then((res) => {
      res.ignoreUnhandledRejections();
    }, (err) => {
    });
  }
  dispose() {
    this.resolution ? this.resolution.dispose() : this.promise.then((hook) => {
      hook.dispose();
    }, (err) => {
    });
  }
  onBroken(callback) {
    this.resolution ? this.resolution.onBroken(callback) : this.promise.then((hook) => {
      hook.onBroken(callback);
    }, callback);
  }
}, NullExporter = class {
  exportStub(stub) {
    throw new Error("Cannot serialize RPC stubs without an RPC session.");
  }
  exportPromise(stub) {
    throw new Error("Cannot serialize RPC stubs without an RPC session.");
  }
  getImport(hook) {
  }
  unexport(ids) {
  }
  createPipe(readable) {
    throw new Error("Cannot create pipes without an RPC session.");
  }
  onSendError(error) {
  }
}, NULL_EXPORTER = new NullExporter(), ERROR_TYPES = {
  Error,
  EvalError,
  RangeError,
  ReferenceError,
  SyntaxError,
  TypeError,
  URIError,
  AggregateError
  // TODO: DOMError? Others?
}, Devaluator = class _Devaluator {
  constructor(exporter, source) {
    this.exporter = exporter, this.source = source;
  }
  // Devaluate the given value.
  // * value: The value to devaluate.
  // * parent: The value's parent object, which would be used as `this` if the value were called
  //     as a function.
  // * exporter: Callbacks to the RPC session for exporting capabilities found in this message.
  // * source: The RpcPayload which contains the value, and therefore owns stubs within.
  //
  // Returns: The devaluated value, ready to be JSON-serialized.
  static devaluate(value, parent, exporter = NULL_EXPORTER, source) {
    let devaluator = new _Devaluator(exporter, source);
    try {
      return devaluator.devaluateImpl(value, parent, 0);
    } catch (err) {
      if (devaluator.exports)
        try {
          exporter.unexport(devaluator.exports);
        } catch {
        }
      throw err;
    }
  }
  exports;
  devaluateImpl(value, parent, depth) {
    if (depth >= 64)
      throw new Error(
        "Serialization exceeded maximum allowed depth. (Does the message contain cycles?)"
      );
    switch (typeForRpc(value)) {
      case "unsupported": {
        let msg;
        try {
          msg = `Cannot serialize value: ${value}`;
        } catch {
          msg = "Cannot serialize value: (couldn't stringify value)";
        }
        throw new TypeError(msg);
      }
      case "primitive":
        return typeof value == "number" && !isFinite(value) ? value === 1 / 0 ? ["inf"] : value === -1 / 0 ? ["-inf"] : ["nan"] : value;
      case "object": {
        let object = value, result = {};
        for (let key in object)
          result[key] = this.devaluateImpl(object[key], object, depth + 1);
        return result;
      }
      case "array": {
        let array = value, len = array.length, result = new Array(len);
        for (let i = 0; i < len; i++)
          result[i] = this.devaluateImpl(array[i], array, depth + 1);
        return [result];
      }
      case "bigint":
        return ["bigint", value.toString()];
      case "date":
        return ["date", value.getTime()];
      case "bytes": {
        let bytes = value;
        return bytes.toBase64 ? ["bytes", bytes.toBase64({ omitPadding: !0 })] : [
          "bytes",
          btoa(String.fromCharCode.apply(null, bytes).replace(/=*$/, ""))
        ];
      }
      case "headers":
        return ["headers", [...value]];
      case "request": {
        let req = value, init = {};
        req.method !== "GET" && (init.method = req.method);
        let headers = [...req.headers];
        if (headers.length > 0 && (init.headers = headers), req.body)
          init.body = this.devaluateImpl(req.body, req, depth + 1), init.duplex = req.duplex || "half";
        else if (req.body === void 0 && !["GET", "HEAD", "OPTIONS", "TRACE", "DELETE"].includes(req.method)) {
          let bodyPromise = req.arrayBuffer(), readable = new ReadableStream({
            async start(controller) {
              try {
                controller.enqueue(new Uint8Array(await bodyPromise)), controller.close();
              } catch (err) {
                controller.error(err);
              }
            }
          }), hook = streamImpl.createReadableStreamHook(readable), importId = this.exporter.createPipe(readable, hook);
          init.body = ["readable", importId], init.duplex = req.duplex || "half";
        }
        req.cache && req.cache !== "default" && (init.cache = req.cache), req.redirect !== "follow" && (init.redirect = req.redirect), req.integrity && (init.integrity = req.integrity), req.mode && req.mode !== "cors" && (init.mode = req.mode), req.credentials && req.credentials !== "same-origin" && (init.credentials = req.credentials), req.referrer && req.referrer !== "about:client" && (init.referrer = req.referrer), req.referrerPolicy && (init.referrerPolicy = req.referrerPolicy), req.keepalive && (init.keepalive = req.keepalive);
        let cfReq = req;
        return cfReq.cf && (init.cf = cfReq.cf), cfReq.encodeResponseBody && cfReq.encodeResponseBody !== "automatic" && (init.encodeResponseBody = cfReq.encodeResponseBody), ["request", req.url, init];
      }
      case "response": {
        let resp = value, body = this.devaluateImpl(resp.body, resp, depth + 1), init = {};
        resp.status !== 200 && (init.status = resp.status), resp.statusText && (init.statusText = resp.statusText);
        let headers = [...resp.headers];
        headers.length > 0 && (init.headers = headers);
        let cfResp = resp;
        if (cfResp.cf && (init.cf = cfResp.cf), cfResp.encodeBody && cfResp.encodeBody !== "automatic" && (init.encodeBody = cfResp.encodeBody), cfResp.webSocket)
          throw new TypeError("Can't serialize a Response containing a webSocket.");
        return ["response", body, init];
      }
      case "error": {
        let e = value, rewritten = this.exporter.onSendError(e);
        rewritten && (e = rewritten);
        let result = ["error", e.name, e.message];
        return rewritten && rewritten.stack && result.push(rewritten.stack), result;
      }
      case "undefined":
        return ["undefined"];
      case "stub":
      case "rpc-promise": {
        if (!this.source)
          throw new Error("Can't serialize RPC stubs in this context.");
        let { hook, pathIfPromise } = unwrapStubAndPath(value), importId = this.exporter.getImport(hook);
        return importId !== void 0 ? pathIfPromise ? pathIfPromise.length > 0 ? ["pipeline", importId, pathIfPromise] : ["pipeline", importId] : ["import", importId] : (pathIfPromise ? hook = hook.get(pathIfPromise) : hook = hook.dup(), this.devaluateHook(pathIfPromise ? "promise" : "export", hook));
      }
      case "function":
      case "rpc-target": {
        if (!this.source)
          throw new Error("Can't serialize RPC stubs in this context.");
        let hook = this.source.getHookForRpcTarget(value, parent);
        return this.devaluateHook("export", hook);
      }
      case "rpc-thenable": {
        if (!this.source)
          throw new Error("Can't serialize RPC stubs in this context.");
        let hook = this.source.getHookForRpcTarget(value, parent);
        return this.devaluateHook("promise", hook);
      }
      case "writable": {
        if (!this.source)
          throw new Error("Can't serialize WritableStream in this context.");
        let hook = this.source.getHookForWritableStream(value, parent);
        return this.devaluateHook("writable", hook);
      }
      case "readable": {
        if (!this.source)
          throw new Error("Can't serialize ReadableStream in this context.");
        let ws = value, hook = this.source.getHookForReadableStream(ws, parent);
        return ["readable", this.exporter.createPipe(ws, hook)];
      }
      default:
        throw new Error("unreachable");
    }
  }
  devaluateHook(type, hook) {
    this.exports || (this.exports = []);
    let exportId = type === "promise" ? this.exporter.exportPromise(hook) : this.exporter.exportStub(hook);
    return this.exports.push(exportId), [type, exportId];
  }
};
var NullImporter = class {
  importStub(idx) {
    throw new Error("Cannot deserialize RPC stubs without an RPC session.");
  }
  importPromise(idx) {
    throw new Error("Cannot deserialize RPC stubs without an RPC session.");
  }
  getExport(idx) {
  }
  getPipeReadable(exportId) {
    throw new Error("Cannot retrieve pipe readable without an RPC session.");
  }
}, NULL_IMPORTER = new NullImporter();
function fixBrokenRequestBody(request, body) {
  let promise = new Response(body).arrayBuffer().then((arrayBuffer) => {
    let bytes = new Uint8Array(arrayBuffer), result = new Request(request, { body: bytes });
    return new PayloadStubHook(RpcPayload.fromAppReturn(result));
  });
  return new RpcPromise(new PromiseStubHook(promise), []);
}
var Evaluator = class _Evaluator {
  constructor(importer) {
    this.importer = importer;
  }
  hooks = [];
  promises = [];
  evaluate(value) {
    let payload = RpcPayload.forEvaluate(this.hooks, this.promises);
    try {
      return payload.value = this.evaluateImpl(value, payload, "value"), payload;
    } catch (err) {
      throw payload.dispose(), err;
    }
  }
  // Evaluate the value without destroying it.
  evaluateCopy(value) {
    return this.evaluate(structuredClone(value));
  }
  evaluateImpl(value, parent, property) {
    if (value instanceof Array) {
      if (value.length == 1 && value[0] instanceof Array) {
        let result = value[0];
        for (let i = 0; i < result.length; i++)
          result[i] = this.evaluateImpl(result[i], result, i);
        return result;
      } else switch (value[0]) {
        case "bigint":
          if (typeof value[1] == "string")
            return BigInt(value[1]);
          break;
        case "date":
          if (typeof value[1] == "number")
            return new Date(value[1]);
          break;
        case "bytes": {
          let b64 = Uint8Array;
          if (typeof value[1] == "string") {
            if (b64.fromBase64)
              return b64.fromBase64(value[1]);
            {
              let bs = atob(value[1]), len = bs.length, bytes = new Uint8Array(len);
              for (let i = 0; i < len; i++)
                bytes[i] = bs.charCodeAt(i);
              return bytes;
            }
          }
          break;
        }
        case "error":
          if (value.length >= 3 && typeof value[1] == "string" && typeof value[2] == "string") {
            let cls = ERROR_TYPES[value[1]] || Error, result = new cls(value[2]);
            return typeof value[3] == "string" && (result.stack = value[3]), result;
          }
          break;
        case "undefined":
          if (value.length === 1)
            return;
          break;
        case "inf":
          return 1 / 0;
        case "-inf":
          return -1 / 0;
        case "nan":
          return NaN;
        case "headers":
          if (value.length === 2 && value[1] instanceof Array)
            return new Headers(value[1]);
          break;
        case "request": {
          if (value.length !== 3 || typeof value[1] != "string") break;
          let url = value[1], init = value[2];
          if (typeof init != "object" || init === null) break;
          if (init.body && (init.body = this.evaluateImpl(init.body, init, "body"), !(init.body === null || typeof init.body == "string" || init.body instanceof Uint8Array || init.body instanceof ReadableStream)))
            throw new TypeError("Request body must be of type ReadableStream.");
          if (init.signal && (init.signal = this.evaluateImpl(init.signal, init, "signal"), !(init.signal instanceof AbortSignal)))
            throw new TypeError("Request siganl must be of type AbortSignal.");
          if (init.headers && !(init.headers instanceof Array))
            throw new TypeError("Request headers must be serialized as an array of pairs.");
          let result = new Request(url, init);
          if (init.body instanceof ReadableStream && result.body === void 0) {
            let promise = fixBrokenRequestBody(result, init.body);
            return this.promises.push({ promise, parent, property }), promise;
          } else
            return result;
        }
        case "response": {
          if (value.length !== 3) break;
          let body = this.evaluateImpl(value[1], parent, property);
          if (!(body === null || typeof body == "string" || body instanceof Uint8Array || body instanceof ReadableStream)) throw new TypeError("Response body must be of type ReadableStream.");
          let init = value[2];
          if (typeof init != "object" || init === null) break;
          if (init.webSocket)
            throw new TypeError("Can't deserialize a Response containing a webSocket.");
          if (init.headers && !(init.headers instanceof Array))
            throw new TypeError("Request headers must be serialized as an array of pairs.");
          return new Response(body, init);
        }
        case "import":
        case "pipeline": {
          if (value.length < 2 || value.length > 4 || typeof value[1] != "number")
            break;
          let hook = this.importer.getExport(value[1]);
          if (!hook)
            throw new Error(`no such entry on exports table: ${value[1]}`);
          let isPromise = value[0] == "pipeline", addStub = (hook2) => {
            if (isPromise) {
              let promise = new RpcPromise(hook2, []);
              return this.promises.push({ promise, parent, property }), promise;
            } else
              return this.hooks.push(hook2), new RpcPromise(hook2, []);
          };
          if (value.length == 2)
            return addStub(isPromise ? hook.get([]) : hook.dup());
          let path = value[2];
          if (!(path instanceof Array) || !path.every(
            (part) => typeof part == "string" || typeof part == "number"
          ))
            break;
          if (value.length == 3)
            return addStub(hook.get(path));
          let args = value[3];
          if (!(args instanceof Array))
            break;
          return args = new _Evaluator(this.importer).evaluate([args]), addStub(hook.call(path, args));
        }
        case "remap": {
          if (value.length !== 5 || typeof value[1] != "number" || !(value[2] instanceof Array) || !(value[3] instanceof Array) || !(value[4] instanceof Array))
            break;
          let hook = this.importer.getExport(value[1]);
          if (!hook)
            throw new Error(`no such entry on exports table: ${value[1]}`);
          let path = value[2];
          if (!path.every(
            (part) => typeof part == "string" || typeof part == "number"
          ))
            break;
          let captures = value[3].map((cap) => {
            if (!(cap instanceof Array) || cap.length !== 2 || cap[0] !== "import" && cap[0] !== "export" || typeof cap[1] != "number")
              throw new TypeError(`unknown map capture: ${JSON.stringify(cap)}`);
            if (cap[0] === "export")
              return this.importer.importStub(cap[1]);
            {
              let exp = this.importer.getExport(cap[1]);
              if (!exp)
                throw new Error(`no such entry on exports table: ${cap[1]}`);
              return exp.dup();
            }
          }), instructions = value[4], resultHook = hook.map(path, captures, instructions), promise = new RpcPromise(resultHook, []);
          return this.promises.push({ promise, parent, property }), promise;
        }
        case "export":
        case "promise":
          if (typeof value[1] == "number")
            if (value[0] == "promise") {
              let hook = this.importer.importPromise(value[1]), promise = new RpcPromise(hook, []);
              return this.promises.push({ parent, property, promise }), promise;
            } else {
              let hook = this.importer.importStub(value[1]);
              return this.hooks.push(hook), new RpcStub(hook);
            }
          break;
        case "writable":
          if (typeof value[1] == "number") {
            let hook = this.importer.importStub(value[1]), stream = streamImpl.createWritableStreamFromHook(hook);
            return this.hooks.push(hook), stream;
          }
          break;
        case "readable":
          if (typeof value[1] == "number") {
            let stream = this.importer.getPipeReadable(value[1]), hook = streamImpl.createReadableStreamHook(stream);
            return this.hooks.push(hook), stream;
          }
          break;
      }
      throw new TypeError(`unknown special value: ${JSON.stringify(value)}`);
    } else if (value instanceof Object) {
      let result = value;
      for (let key in result)
        key in Object.prototype || key === "toJSON" ? (this.evaluateImpl(result[key], result, key), delete result[key]) : result[key] = this.evaluateImpl(result[key], result, key);
      return result;
    } else
      return value;
  }
};
var ImportTableEntry = class {
  constructor(session, importId, pulling) {
    this.session = session, this.importId = importId, pulling && (this.activePull = Promise.withResolvers());
  }
  localRefcount = 0;
  remoteRefcount = 1;
  activePull;
  resolution;
  // List of integer indexes into session.onBrokenCallbacks which are callbacks registered on
  // this import. Initialized on first use (so `undefined` is the same as an empty list).
  onBrokenRegistrations;
  resolve(resolution) {
    if (this.localRefcount == 0) {
      resolution.dispose();
      return;
    }
    if (this.resolution = resolution, this.sendRelease(), this.onBrokenRegistrations) {
      for (let i of this.onBrokenRegistrations) {
        let callback = this.session.onBrokenCallbacks[i], endIndex = this.session.onBrokenCallbacks.length;
        resolution.onBroken(callback), this.session.onBrokenCallbacks[endIndex] === callback ? delete this.session.onBrokenCallbacks[endIndex] : delete this.session.onBrokenCallbacks[i];
      }
      this.onBrokenRegistrations = void 0;
    }
    this.activePull && (this.activePull.resolve(), this.activePull = void 0);
  }
  async awaitResolution() {
    return this.activePull || (this.session.sendPull(this.importId), this.activePull = Promise.withResolvers()), await this.activePull.promise, this.resolution.pull();
  }
  dispose() {
    this.resolution ? this.resolution.dispose() : (this.abort(new Error("RPC was canceled because the RpcPromise was disposed.")), this.sendRelease());
  }
  abort(error) {
    this.resolution || (this.resolution = new ErrorStubHook(error), this.activePull && (this.activePull.reject(error), this.activePull = void 0), this.onBrokenRegistrations = void 0);
  }
  onBroken(callback) {
    if (this.resolution)
      this.resolution.onBroken(callback);
    else {
      let index = this.session.onBrokenCallbacks.length;
      this.session.onBrokenCallbacks.push(callback), this.onBrokenRegistrations || (this.onBrokenRegistrations = []), this.onBrokenRegistrations.push(index);
    }
  }
  sendRelease() {
    this.remoteRefcount > 0 && (this.session.sendRelease(this.importId, this.remoteRefcount), this.remoteRefcount = 0);
  }
}, RpcImportHook = class _RpcImportHook extends StubHook {
  // undefined when we're disposed
  // `pulling` is true if we already expect that this import is going to be resolved later, and
  // null if this import is not allowed to be pulled (i.e. it's a stub not a promise).
  constructor(isPromise, entry) {
    super(), this.isPromise = isPromise, ++entry.localRefcount, this.entry = entry;
  }
  entry;
  collectPath(path) {
    return this;
  }
  getEntry() {
    if (this.entry)
      return this.entry;
    throw new Error("This RpcImportHook was already disposed.");
  }
  // -------------------------------------------------------------------------------------
  // implements StubHook
  call(path, args) {
    let entry = this.getEntry();
    return entry.resolution ? entry.resolution.call(path, args) : entry.session.sendCall(entry.importId, path, args);
  }
  stream(path, args) {
    let entry = this.getEntry();
    return entry.resolution ? entry.resolution.stream(path, args) : entry.session.sendStream(entry.importId, path, args);
  }
  map(path, captures, instructions) {
    let entry;
    try {
      entry = this.getEntry();
    } catch (err) {
      for (let cap of captures)
        cap.dispose();
      throw err;
    }
    return entry.resolution ? entry.resolution.map(path, captures, instructions) : entry.session.sendMap(entry.importId, path, captures, instructions);
  }
  get(path) {
    let entry = this.getEntry();
    return entry.resolution ? entry.resolution.get(path) : entry.session.sendCall(entry.importId, path);
  }
  dup() {
    return new _RpcImportHook(!1, this.getEntry());
  }
  pull() {
    let entry = this.getEntry();
    if (!this.isPromise)
      throw new Error("Can't pull this hook because it's not a promise hook.");
    return entry.resolution ? entry.resolution.pull() : entry.awaitResolution();
  }
  ignoreUnhandledRejections() {
  }
  dispose() {
    let entry = this.entry;
    this.entry = void 0, entry && --entry.localRefcount === 0 && entry.dispose();
  }
  onBroken(callback) {
    this.entry && this.entry.onBroken(callback);
  }
}, RpcMainHook = class extends RpcImportHook {
  session;
  constructor(entry) {
    super(!1, entry), this.session = entry.session;
  }
  dispose() {
    if (this.session) {
      let session = this.session;
      this.session = void 0, session.shutdown();
    }
  }
}, RpcSessionImpl = class {
  constructor(transport, mainHook, options) {
    this.transport = transport, this.options = options, this.exports.push({ hook: mainHook, refcount: 1 }), this.imports.push(new ImportTableEntry(this, 0, !1));
    let rejectFunc, abortPromise = new Promise((resolve, reject) => {
      rejectFunc = reject;
    });
    this.cancelReadLoop = rejectFunc, this.readLoop(abortPromise).catch((err) => this.abort(err));
  }
  exports = [];
  reverseExports = /* @__PURE__ */ new Map();
  imports = [];
  abortReason;
  cancelReadLoop;
  // We assign positive numbers to imports we initiate, and negative numbers to exports we
  // initiate. So the next import ID is just `imports.length`, but the next export ID needs
  // to be tracked explicitly.
  nextExportId = -1;
  // If set, call this when all incoming calls are complete.
  onBatchDone;
  // How many promises is our peer expecting us to resolve?
  pullCount = 0;
  // Sparse array of onBrokenCallback registrations. Items are strictly appended to the end but
  // may be deleted from the middle (hence leaving the array sparse).
  onBrokenCallbacks = [];
  // Should only be called once immediately after construction.
  getMainImport() {
    return new RpcMainHook(this.imports[0]);
  }
  shutdown() {
    this.abort(new Error("RPC session was shut down by disposing the main stub"), !1);
  }
  exportStub(hook) {
    if (this.abortReason) throw this.abortReason;
    let existingExportId = this.reverseExports.get(hook);
    if (existingExportId !== void 0)
      return ++this.exports[existingExportId].refcount, existingExportId;
    {
      let exportId = this.nextExportId--;
      return this.exports[exportId] = { hook, refcount: 1 }, this.reverseExports.set(hook, exportId), exportId;
    }
  }
  exportPromise(hook) {
    if (this.abortReason) throw this.abortReason;
    let exportId = this.nextExportId--;
    return this.exports[exportId] = { hook, refcount: 1 }, this.reverseExports.set(hook, exportId), this.ensureResolvingExport(exportId), exportId;
  }
  unexport(ids) {
    for (let id of ids)
      this.releaseExport(id, 1);
  }
  releaseExport(exportId, refcount) {
    let entry = this.exports[exportId];
    if (!entry)
      throw new Error(`no such export ID: ${exportId}`);
    if (entry.refcount < refcount)
      throw new Error(`refcount would go negative: ${entry.refcount} < ${refcount}`);
    entry.refcount -= refcount, entry.refcount === 0 && (delete this.exports[exportId], this.reverseExports.delete(entry.hook), entry.hook.dispose());
  }
  onSendError(error) {
    if (this.options.onSendError)
      return this.options.onSendError(error);
  }
  ensureResolvingExport(exportId) {
    let exp = this.exports[exportId];
    if (!exp)
      throw new Error(`no such export ID: ${exportId}`);
    if (!exp.pull) {
      let resolve = async () => {
        let hook = exp.hook;
        for (; ; ) {
          let payload = await hook.pull();
          if (payload.value instanceof RpcStub) {
            let { hook: inner, pathIfPromise } = unwrapStubAndPath(payload.value);
            if (pathIfPromise && pathIfPromise.length == 0 && this.getImport(hook) === void 0) {
              hook = inner;
              continue;
            }
          }
          return payload;
        }
      }, autoRelease = exp.autoRelease;
      ++this.pullCount, exp.pull = resolve().then(
        (payload) => {
          let value = Devaluator.devaluate(payload.value, void 0, this, payload);
          this.send(["resolve", exportId, value]), autoRelease && this.releaseExport(exportId, 1);
        },
        (error) => {
          this.send(["reject", exportId, Devaluator.devaluate(error, void 0, this)]), autoRelease && this.releaseExport(exportId, 1);
        }
      ).catch(
        (error) => {
          try {
            this.send(["reject", exportId, Devaluator.devaluate(error, void 0, this)]), autoRelease && this.releaseExport(exportId, 1);
          } catch (error2) {
            this.abort(error2);
          }
        }
      ).finally(() => {
        --this.pullCount === 0 && this.onBatchDone && this.onBatchDone.resolve();
      });
    }
  }
  getImport(hook) {
    if (hook instanceof RpcImportHook && hook.entry && hook.entry.session === this)
      return hook.entry.importId;
  }
  importStub(idx) {
    if (this.abortReason) throw this.abortReason;
    let entry = this.imports[idx];
    return entry || (entry = new ImportTableEntry(this, idx, !1), this.imports[idx] = entry), new RpcImportHook(
      /*isPromise=*/
      !1,
      entry
    );
  }
  importPromise(idx) {
    if (this.abortReason) throw this.abortReason;
    if (this.imports[idx])
      return new ErrorStubHook(new Error(
        "Bug in RPC system: The peer sent a promise reusing an existing export ID."
      ));
    let entry = new ImportTableEntry(this, idx, !0);
    return this.imports[idx] = entry, new RpcImportHook(
      /*isPromise=*/
      !0,
      entry
    );
  }
  getExport(idx) {
    return this.exports[idx]?.hook;
  }
  getPipeReadable(exportId) {
    let entry = this.exports[exportId];
    if (!entry || !entry.pipeReadable)
      throw new Error(`Export ${exportId} is not a pipe or its readable end was already consumed.`);
    let readable = entry.pipeReadable;
    return entry.pipeReadable = void 0, readable;
  }
  createPipe(readable, readableHook) {
    if (this.abortReason) throw this.abortReason;
    this.send(["pipe"]);
    let importId = this.imports.length, entry = new ImportTableEntry(this, importId, !1);
    this.imports.push(entry);
    let hook = new RpcImportHook(
      /*isPromise=*/
      !1,
      entry
    ), writable = streamImpl.createWritableStreamFromHook(hook);
    return readable.pipeTo(writable).catch(() => {
    }).finally(() => readableHook.dispose()), importId;
  }
  // Serializes and sends a message. Returns the byte length of the serialized message.
  send(msg) {
    if (this.abortReason !== void 0)
      return 0;
    let msgText;
    try {
      msgText = JSON.stringify(msg);
    } catch (err) {
      try {
        this.abort(err);
      } catch {
      }
      throw err;
    }
    return this.transport.send(msgText).catch((err) => this.abort(err, !1)), msgText.length;
  }
  sendCall(id, path, args) {
    if (this.abortReason) throw this.abortReason;
    let value = ["pipeline", id, path];
    if (args) {
      let devalue = Devaluator.devaluate(args.value, void 0, this, args);
      value.push(devalue[0]);
    }
    this.send(["push", value]);
    let entry = new ImportTableEntry(this, this.imports.length, !1);
    return this.imports.push(entry), new RpcImportHook(
      /*isPromise=*/
      !0,
      entry
    );
  }
  sendStream(id, path, args) {
    if (this.abortReason) throw this.abortReason;
    let value = ["pipeline", id, path], devalue = Devaluator.devaluate(args.value, void 0, this, args);
    value.push(devalue[0]);
    let size = this.send(["stream", value]), importId = this.imports.length, entry = new ImportTableEntry(
      this,
      importId,
      /*pulling=*/
      !0
    );
    return entry.remoteRefcount = 0, entry.localRefcount = 1, this.imports.push(entry), { promise: entry.awaitResolution().then(
      (p) => {
        p.dispose(), delete this.imports[importId];
      },
      (err) => {
        throw delete this.imports[importId], err;
      }
    ), size };
  }
  sendMap(id, path, captures, instructions) {
    if (this.abortReason) {
      for (let cap of captures)
        cap.dispose();
      throw this.abortReason;
    }
    let devaluedCaptures = captures.map((hook) => {
      let importId = this.getImport(hook);
      return importId !== void 0 ? ["import", importId] : ["export", this.exportStub(hook)];
    }), value = ["remap", id, path, devaluedCaptures, instructions];
    this.send(["push", value]);
    let entry = new ImportTableEntry(this, this.imports.length, !1);
    return this.imports.push(entry), new RpcImportHook(
      /*isPromise=*/
      !0,
      entry
    );
  }
  sendPull(id) {
    if (this.abortReason) throw this.abortReason;
    this.send(["pull", id]);
  }
  sendRelease(id, remoteRefcount) {
    this.abortReason || (this.send(["release", id, remoteRefcount]), delete this.imports[id]);
  }
  abort(error, trySendAbortMessage = !0) {
    if (this.abortReason === void 0) {
      if (this.cancelReadLoop(error), trySendAbortMessage)
        try {
          this.transport.send(JSON.stringify(["abort", Devaluator.devaluate(error, void 0, this)])).catch((err) => {
          });
        } catch {
        }
      if (error === void 0 && (error = "undefined"), this.abortReason = error, this.onBatchDone && this.onBatchDone.reject(error), this.transport.abort)
        try {
          this.transport.abort(error);
        } catch (err) {
          Promise.resolve(err);
        }
      for (let i in this.onBrokenCallbacks)
        try {
          this.onBrokenCallbacks[i](error);
        } catch (err) {
          Promise.resolve(err);
        }
      for (let i in this.imports)
        this.imports[i].abort(error);
      for (let i in this.exports)
        this.exports[i].hook.dispose();
    }
  }
  async readLoop(abortPromise) {
    for (; !this.abortReason; ) {
      let msg = JSON.parse(await Promise.race([this.transport.receive(), abortPromise]));
      if (this.abortReason) break;
      if (msg instanceof Array)
        switch (msg[0]) {
          case "push":
            if (msg.length > 1) {
              let payload = new Evaluator(this).evaluate(msg[1]), hook = new PayloadStubHook(payload);
              hook.ignoreUnhandledRejections(), this.exports.push({ hook, refcount: 1 });
              continue;
            }
            break;
          case "stream": {
            if (msg.length > 1) {
              let payload = new Evaluator(this).evaluate(msg[1]), hook = new PayloadStubHook(payload);
              hook.ignoreUnhandledRejections();
              let exportId = this.exports.length;
              this.exports.push({ hook, refcount: 1, autoRelease: !0 }), this.ensureResolvingExport(exportId);
              continue;
            }
            break;
          }
          case "pipe": {
            let { readable, writable } = new TransformStream(), hook = streamImpl.createWritableStreamHook(writable);
            this.exports.push({ hook, refcount: 1, pipeReadable: readable });
            continue;
          }
          case "pull": {
            let exportId = msg[1];
            if (typeof exportId == "number") {
              this.ensureResolvingExport(exportId);
              continue;
            }
            break;
          }
          case "resolve":
          // ["resolve", ExportId, Expression]
          case "reject": {
            let importId = msg[1];
            if (typeof importId == "number" && msg.length > 2) {
              let imp = this.imports[importId];
              if (imp)
                if (msg[0] == "resolve")
                  imp.resolve(new PayloadStubHook(new Evaluator(this).evaluate(msg[2])));
                else {
                  let payload = new Evaluator(this).evaluate(msg[2]);
                  payload.dispose(), imp.resolve(new ErrorStubHook(payload.value));
                }
              else
                msg[0] == "resolve" && new Evaluator(this).evaluate(msg[2]).dispose();
              continue;
            }
            break;
          }
          case "release": {
            let exportId = msg[1], refcount = msg[2];
            if (typeof exportId == "number" && typeof refcount == "number") {
              this.releaseExport(exportId, refcount);
              continue;
            }
            break;
          }
          case "abort": {
            let payload = new Evaluator(this).evaluate(msg[1]);
            payload.dispose(), this.abort(payload, !1);
            break;
          }
        }
      throw new Error(`bad RPC message: ${JSON.stringify(msg)}`);
    }
  }
  async drain() {
    if (this.abortReason)
      throw this.abortReason;
    if (this.pullCount > 0) {
      let { promise, resolve, reject } = Promise.withResolvers();
      this.onBatchDone = { resolve, reject }, await promise;
    }
  }
  getStats() {
    let result = { imports: 0, exports: 0 };
    for (let i in this.imports)
      ++result.imports;
    for (let i in this.exports)
      ++result.exports;
    return result;
  }
}, RpcSession = class {
  #session;
  #mainStub;
  constructor(transport, localMain, options = {}) {
    let mainHook;
    localMain ? mainHook = new PayloadStubHook(RpcPayload.fromAppReturn(localMain)) : mainHook = new ErrorStubHook(new Error("This connection has no main object.")), this.#session = new RpcSessionImpl(transport, mainHook, options), this.#mainStub = new RpcStub(this.#session.getMainImport());
  }
  getRemoteMain() {
    return this.#mainStub;
  }
  getStats() {
    return this.#session.getStats();
  }
  drain() {
    return this.#session.drain();
  }
};
function newWebSocketRpcSession(webSocket, localMain, options) {
  typeof webSocket == "string" && (webSocket = new WebSocket(webSocket));
  let transport = new WebSocketTransport(webSocket);
  return new RpcSession(transport, localMain, options).getRemoteMain();
}
var WebSocketTransport = class {
  constructor(webSocket) {
    this.#webSocket = webSocket, webSocket.readyState === WebSocket.CONNECTING && (this.#sendQueue = [], webSocket.addEventListener("open", (event) => {
      try {
        for (let message of this.#sendQueue)
          webSocket.send(message);
      } catch (err) {
        this.#receivedError(err);
      }
      this.#sendQueue = void 0;
    })), webSocket.addEventListener("message", (event) => {
      this.#error || (typeof event.data == "string" ? this.#receiveResolver ? (this.#receiveResolver(event.data), this.#receiveResolver = void 0, this.#receiveRejecter = void 0) : this.#receiveQueue.push(event.data) : this.#receivedError(new TypeError("Received non-string message from WebSocket.")));
    }), webSocket.addEventListener("close", (event) => {
      this.#receivedError(new Error(`Peer closed WebSocket: ${event.code} ${event.reason}`));
    }), webSocket.addEventListener("error", (event) => {
      this.#receivedError(new Error("WebSocket connection failed."));
    });
  }
  #webSocket;
  #sendQueue;
  // only if not opened yet
  #receiveResolver;
  #receiveRejecter;
  #receiveQueue = [];
  #error;
  async send(message) {
    this.#sendQueue === void 0 ? this.#webSocket.send(message) : this.#sendQueue.push(message);
  }
  async receive() {
    if (this.#receiveQueue.length > 0)
      return this.#receiveQueue.shift();
    if (this.#error)
      throw this.#error;
    return new Promise((resolve, reject) => {
      this.#receiveResolver = resolve, this.#receiveRejecter = reject;
    });
  }
  abort(reason) {
    let message;
    reason instanceof Error ? message = reason.message : message = `${reason}`, this.#webSocket.close(3e3, message), this.#error || (this.#error = reason);
  }
  #receivedError(reason) {
    this.#error || (this.#error = reason, this.#receiveRejecter && (this.#receiveRejecter(reason), this.#receiveResolver = void 0, this.#receiveRejecter = void 0));
  }
};
var currentMapBuilder, MapBuilder = class {
  context;
  captureMap = /* @__PURE__ */ new Map();
  instructions = [];
  constructor(subject, path) {
    currentMapBuilder ? this.context = {
      parent: currentMapBuilder,
      captures: [],
      subject: currentMapBuilder.capture(subject),
      path
    } : this.context = {
      parent: void 0,
      captures: [],
      subject,
      path
    }, currentMapBuilder = this;
  }
  unregister() {
    currentMapBuilder = this.context.parent;
  }
  makeInput() {
    return new MapVariableHook(this, 0);
  }
  makeOutput(result) {
    let devalued;
    try {
      devalued = Devaluator.devaluate(result.value, void 0, this, result);
    } finally {
      result.dispose();
    }
    return this.instructions.push(devalued), this.context.parent ? (this.context.parent.instructions.push(
      [
        "remap",
        this.context.subject,
        this.context.path,
        this.context.captures.map((cap) => ["import", cap]),
        this.instructions
      ]
    ), new MapVariableHook(this.context.parent, this.context.parent.instructions.length)) : this.context.subject.map(this.context.path, this.context.captures, this.instructions);
  }
  pushCall(hook, path, params) {
    let devalued = Devaluator.devaluate(params.value, void 0, this, params);
    devalued = devalued[0];
    let subject = this.capture(hook.dup());
    return this.instructions.push(["pipeline", subject, path, devalued]), new MapVariableHook(this, this.instructions.length);
  }
  pushGet(hook, path) {
    let subject = this.capture(hook.dup());
    return this.instructions.push(["pipeline", subject, path]), new MapVariableHook(this, this.instructions.length);
  }
  capture(hook) {
    if (hook instanceof MapVariableHook && hook.mapper === this)
      return hook.idx;
    let result = this.captureMap.get(hook);
    if (result === void 0) {
      if (this.context.parent) {
        let parentIdx = this.context.parent.capture(hook);
        this.context.captures.push(parentIdx);
      } else
        this.context.captures.push(hook);
      result = -this.context.captures.length, this.captureMap.set(hook, result);
    }
    return result;
  }
  // ---------------------------------------------------------------------------
  // implements Exporter
  exportStub(hook) {
    throw new Error(
      "Can't construct an RpcTarget or RPC callback inside a mapper function. Try creating a new RpcStub outside the callback first, then using it inside the callback."
    );
  }
  exportPromise(hook) {
    return this.exportStub(hook);
  }
  getImport(hook) {
    return this.capture(hook);
  }
  unexport(ids) {
  }
  createPipe(readable) {
    throw new Error("Cannot send ReadableStream inside a mapper function.");
  }
  onSendError(error) {
  }
};
mapImpl.sendMap = (hook, path, func) => {
  let builder = new MapBuilder(hook, path), result;
  try {
    result = RpcPayload.fromAppReturn(withCallInterceptor(builder.pushCall.bind(builder), () => func(new RpcPromise(builder.makeInput(), []))));
  } finally {
    builder.unregister();
  }
  if (result instanceof Promise)
    throw result.catch((err) => {
    }), new Error("RPC map() callbacks cannot be async.");
  return new RpcPromise(builder.makeOutput(result), []);
};
function throwMapperBuilderUseError() {
  throw new Error(
    "Attempted to use an abstract placeholder from a mapper function. Please make sure your map function has no side effects."
  );
}
var MapVariableHook = class extends StubHook {
  constructor(mapper, idx) {
    super(), this.mapper = mapper, this.idx = idx;
  }
  // We don't have anything we actually need to dispose, so dup() can just return the same hook.
  dup() {
    return this;
  }
  dispose() {
  }
  get(path) {
    if (path.length == 0)
      return this;
    if (currentMapBuilder)
      return currentMapBuilder.pushGet(this, path);
    throwMapperBuilderUseError();
  }
  // Other methods should never be called.
  call(path, args) {
    throwMapperBuilderUseError();
  }
  map(path, captures, instructions) {
    throwMapperBuilderUseError();
  }
  pull() {
    throwMapperBuilderUseError();
  }
  ignoreUnhandledRejections() {
  }
  onBroken(callback) {
    throwMapperBuilderUseError();
  }
}, MapApplicator = class {
  constructor(captures, input) {
    this.captures = captures, this.variables = [input];
  }
  variables;
  dispose() {
    for (let variable of this.variables)
      variable.dispose();
  }
  apply(instructions) {
    try {
      if (instructions.length < 1)
        throw new Error("Invalid empty mapper function.");
      for (let instruction of instructions.slice(0, -1)) {
        let payload = new Evaluator(this).evaluateCopy(instruction);
        if (payload.value instanceof RpcStub) {
          let hook = unwrapStubNoProperties(payload.value);
          if (hook) {
            this.variables.push(hook);
            continue;
          }
        }
        this.variables.push(new PayloadStubHook(payload));
      }
      return new Evaluator(this).evaluateCopy(instructions[instructions.length - 1]);
    } finally {
      for (let variable of this.variables)
        variable.dispose();
    }
  }
  importStub(idx) {
    throw new Error("A mapper function cannot refer to exports.");
  }
  importPromise(idx) {
    return this.importStub(idx);
  }
  getExport(idx) {
    return idx < 0 ? this.captures[-idx - 1] : this.variables[idx];
  }
  getPipeReadable(exportId) {
    throw new Error("A mapper function cannot use pipe readables.");
  }
};
function applyMapToElement(input, parent, owner, captures, instructions) {
  let inputHook = new PayloadStubHook(RpcPayload.deepCopyFrom(input, parent, owner)), mapper = new MapApplicator(captures, inputHook);
  try {
    return mapper.apply(instructions);
  } finally {
    mapper.dispose();
  }
}
mapImpl.applyMap = (input, parent, owner, captures, instructions) => {
  try {
    let result;
    if (input instanceof RpcPromise)
      throw new Error("applyMap() can't be called on RpcPromise");
    if (input instanceof Array) {
      let payloads = [];
      try {
        for (let elem of input)
          payloads.push(applyMapToElement(elem, input, owner, captures, instructions));
      } catch (err) {
        for (let payload of payloads)
          payload.dispose();
        throw err;
      }
      result = RpcPayload.fromArray(payloads);
    } else input == null ? result = RpcPayload.fromAppReturn(input) : result = applyMapToElement(input, parent, owner, captures, instructions);
    return new PayloadStubHook(result);
  } finally {
    for (let cap of captures)
      cap.dispose();
  }
};
var WritableStreamStubHook = class _WritableStreamStubHook extends StubHook {
  state;
  // undefined when disposed
  // Creates a new WritableStreamStubHook that is not duplicated from an existing hook.
  static create(stream) {
    let writer = stream.getWriter();
    return new _WritableStreamStubHook({ refcount: 1, writer, closed: !1 });
  }
  constructor(state, dupFrom) {
    super(), this.state = state, dupFrom && ++state.refcount;
  }
  getState() {
    if (this.state)
      return this.state;
    throw new Error("Attempted to use a WritableStreamStubHook after it was disposed.");
  }
  call(path, args) {
    try {
      let state = this.getState();
      if (path.length !== 1 || typeof path[0] != "string")
        throw new Error("WritableStream stub only supports direct method calls");
      let method = path[0];
      if (method !== "write" && method !== "close" && method !== "abort")
        throw args.dispose(), new Error(`Unknown WritableStream method: ${method}`);
      (method === "close" || method === "abort") && (state.closed = !0);
      let func = state.writer[method], promise = args.deliverCall(func, state.writer);
      return new PromiseStubHook(promise.then((payload) => new PayloadStubHook(payload)));
    } catch (err) {
      return new ErrorStubHook(err);
    }
  }
  map(path, captures, instructions) {
    for (let cap of captures)
      cap.dispose();
    return new ErrorStubHook(new Error("Cannot use map() on a WritableStream"));
  }
  get(path) {
    return new ErrorStubHook(new Error("Cannot access properties on a WritableStream stub"));
  }
  dup() {
    let state = this.getState();
    return new _WritableStreamStubHook(state, this);
  }
  pull() {
    return Promise.reject(new Error("Cannot pull a WritableStream stub"));
  }
  ignoreUnhandledRejections() {
  }
  dispose() {
    let state = this.state;
    this.state = void 0, state && --state.refcount === 0 && (state.closed || state.writer.abort(new Error("WritableStream RPC stub was disposed without calling close()")).catch(() => {
    }), state.writer.releaseLock());
  }
  onBroken(callback) {
  }
}, INITIAL_WINDOW = 256 * 1024, MAX_WINDOW = 1024 * 1024 * 1024, MIN_WINDOW = 64 * 1024, STARTUP_GROWTH_FACTOR = 2, STEADY_GROWTH_FACTOR = 1.25, DECAY_FACTOR = 0.9, STARTUP_EXIT_ROUNDS = 3, FlowController = class {
  constructor(now) {
    this.now = now;
  }
  // The current window size in bytes. The sender blocks when bytesInFlight >= window.
  window = INITIAL_WINDOW;
  // Total bytes currently in flight (sent but not yet acked).
  bytesInFlight = 0;
  // Whether we're still in the startup phase.
  inStartupPhase = !0;
  // ----- BDP estimation state (private) -----
  // Total bytes acked so far.
  delivered = 0;
  // Time of most recent ack.
  deliveredTime = 0;
  // Time when the very first ack was received.
  firstAckTime = 0;
  firstAckDelivered = 0;
  // Global minimum RTT observed (milliseconds).
  minRtt = 1 / 0;
  // For startup exit: count of consecutive RTT rounds where the window didn't meaningfully grow.
  roundsWithoutIncrease = 0;
  // Window size at the start of the current round, for startup exit detection.
  lastRoundWindow = 0;
  // Time when the current round started.
  roundStartTime = 0;
  // Called when a write of `size` bytes is about to be sent. Returns a token that must be
  // passed to onAck() when the ack arrives, and whether the sender should block (window full).
  onSend(size) {
    this.bytesInFlight += size;
    let token = {
      sentTime: this.now(),
      size,
      deliveredAtSend: this.delivered,
      deliveredTimeAtSend: this.deliveredTime,
      windowAtSend: this.window,
      windowFullAtSend: this.bytesInFlight >= this.window
    };
    return { token, shouldBlock: token.windowFullAtSend };
  }
  // Called when a previously-sent write fails. Restores bytesInFlight without updating
  // any BDP estimates.
  onError(token) {
    this.bytesInFlight -= token.size;
  }
  // Called when an ack is received for a previously-sent write. Updates BDP estimates and
  // the window. Returns whether a blocked sender should now unblock.
  onAck(token) {
    let ackTime = this.now();
    this.delivered += token.size, this.deliveredTime = ackTime, this.bytesInFlight -= token.size;
    let rtt = ackTime - token.sentTime;
    if (this.minRtt = Math.min(this.minRtt, rtt), this.firstAckTime === 0)
      this.firstAckTime = ackTime, this.firstAckDelivered = this.delivered;
    else {
      let baseTime, baseDelivered;
      token.deliveredTimeAtSend === 0 ? (baseTime = this.firstAckTime, baseDelivered = this.firstAckDelivered) : (baseTime = token.deliveredTimeAtSend, baseDelivered = token.deliveredAtSend);
      let interval = ackTime - baseTime, bandwidth = (this.delivered - baseDelivered) / interval, growthFactor = this.inStartupPhase ? STARTUP_GROWTH_FACTOR : STEADY_GROWTH_FACTOR, newWindow = bandwidth * this.minRtt * growthFactor;
      newWindow = Math.min(newWindow, token.windowAtSend * growthFactor), token.windowFullAtSend ? newWindow = Math.max(newWindow, token.windowAtSend * DECAY_FACTOR) : newWindow = Math.max(newWindow, this.window), this.window = Math.max(Math.min(newWindow, MAX_WINDOW), MIN_WINDOW), this.inStartupPhase && token.sentTime >= this.roundStartTime && (this.window > this.lastRoundWindow * STEADY_GROWTH_FACTOR ? this.roundsWithoutIncrease = 0 : ++this.roundsWithoutIncrease >= STARTUP_EXIT_ROUNDS && (this.inStartupPhase = !1), this.roundStartTime = ackTime, this.lastRoundWindow = this.window);
    }
    return this.bytesInFlight < this.window;
  }
};
function createWritableStreamFromHook(hook) {
  let pendingError, hookDisposed = !1, fc = new FlowController(() => performance.now()), windowResolve, windowReject, disposeHook = () => {
    hookDisposed || (hookDisposed = !0, hook.dispose());
  };
  return new WritableStream({
    write(chunk, controller) {
      if (pendingError !== void 0)
        throw pendingError;
      let payload = RpcPayload.fromAppParams([chunk]), { promise, size } = hook.stream(["write"], payload);
      if (size === void 0)
        return promise.catch((err) => {
          throw pendingError === void 0 && (pendingError = err), err;
        });
      {
        let { token, shouldBlock } = fc.onSend(size);
        if (promise.then(() => {
          fc.onAck(token) && windowResolve && (windowResolve(), windowResolve = void 0, windowReject = void 0);
        }, (err) => {
          fc.onError(token), pendingError === void 0 && (pendingError = err, controller.error(err), disposeHook()), windowReject && (windowReject(err), windowResolve = void 0, windowReject = void 0);
        }), shouldBlock)
          return new Promise((resolve, reject) => {
            windowResolve = resolve, windowReject = reject;
          });
      }
    },
    async close() {
      if (pendingError !== void 0)
        throw disposeHook(), pendingError;
      let { promise } = hook.stream(["close"], RpcPayload.fromAppParams([]));
      try {
        await promise;
      } catch (err) {
        throw pendingError ?? err;
      } finally {
        disposeHook();
      }
    },
    abort(reason) {
      if (pendingError !== void 0)
        return;
      pendingError = reason ?? new Error("WritableStream was aborted"), windowReject && (windowReject(pendingError), windowResolve = void 0, windowReject = void 0);
      let { promise } = hook.stream(["abort"], RpcPayload.fromAppParams([reason]));
      promise.then(() => disposeHook(), () => disposeHook());
    }
  });
}
var ReadableStreamStubHook = class _ReadableStreamStubHook extends StubHook {
  state;
  // undefined when disposed
  // Creates a new ReadableStreamStubHook.
  static create(stream) {
    return new _ReadableStreamStubHook({ refcount: 1, stream, canceled: !1 });
  }
  constructor(state, dupFrom) {
    super(), this.state = state, dupFrom && ++state.refcount;
  }
  call(path, args) {
    return args.dispose(), new ErrorStubHook(new Error("Cannot call methods on a ReadableStream stub"));
  }
  map(path, captures, instructions) {
    for (let cap of captures)
      cap.dispose();
    return new ErrorStubHook(new Error("Cannot use map() on a ReadableStream"));
  }
  get(path) {
    return new ErrorStubHook(new Error("Cannot access properties on a ReadableStream stub"));
  }
  dup() {
    let state = this.state;
    if (!state)
      throw new Error("Attempted to dup a ReadableStreamStubHook after it was disposed.");
    return new _ReadableStreamStubHook(state, this);
  }
  pull() {
    return Promise.reject(new Error("Cannot pull a ReadableStream stub"));
  }
  ignoreUnhandledRejections() {
  }
  dispose() {
    let state = this.state;
    this.state = void 0, state && --state.refcount === 0 && (state.canceled || (state.canceled = !0, state.stream.locked || state.stream.cancel(
      new Error("ReadableStream RPC stub was disposed without being consumed")
    ).catch(() => {
    })));
  }
  onBroken(callback) {
  }
};
streamImpl.createWritableStreamHook = WritableStreamStubHook.create;
streamImpl.createWritableStreamFromHook = createWritableStreamFromHook;
streamImpl.createReadableStreamHook = ReadableStreamStubHook.create;
var newWebSocketRpcSession2 = newWebSocketRpcSession;

// src/workers/shared/remote-bindings-utils.ts
function throwRemoteRequired(bindingName) {
  throw new Error(`Binding ${bindingName} needs to be run remotely`);
}
function buildAccessBlockResponseBody(bindingName, proxyUrl) {
  return [
    `Cloudflare Access blocked this remote bindings request (binding "${bindingName}").`,
    "",
    `The local remote-bindings proxy client tried to reach ${proxyUrl}, but the`,
    "remote workers.dev proxy server returned a Cloudflare Access block page.",
    "",
    "If your Cloudflare account protects workers.dev with Access, set the",
    "CLOUDFLARE_ACCESS_CLIENT_ID and CLOUDFLARE_ACCESS_CLIENT_SECRET environment",
    "variables (Service Token credentials), or run",
    "  cloudflared access login <your-workers.dev-host>",
    "for interactive authentication.",
    "",
    "See https://developers.cloudflare.com/cloudflare-one/access-controls/service-credentials/service-tokens/"
  ].join(`
`);
}
async function maybeReportCloudflareAccessBlock(response, bindingName, proxyUrl, loopback) {
  if (!loopback || response.status !== 403)
    return response;
  let text;
  try {
    text = await response.clone().text();
  } catch {
    return response;
  }
  return text.includes("Cloudflare Access") ? (await loopback.fetch("http://localhost/core/remote-bindings-access-warning", {
    method: "POST",
    headers: {
      "MF-Binding": bindingName,
      "MF-Proxy-URL": proxyUrl
    }
  }), new Response(buildAccessBlockResponseBody(bindingName, proxyUrl), {
    status: response.status,
    statusText: response.statusText,
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  })) : response;
}
function makeFetch(remoteProxyConnectionString, bindingName, extraHeaders, cfTraceId, loopback) {
  return async (input, init) => {
    remoteProxyConnectionString || throwRemoteRequired(bindingName);
    let request = new Request(input, init), proxiedHeaders = new Headers(extraHeaders);
    for (let [name, value] of request.headers)
      name === "upgrade" ? proxiedHeaders.set(name, value) : proxiedHeaders.set(`MF-Header-${name}`, value);
    proxiedHeaders.set("MF-URL", request.url), proxiedHeaders.set("MF-Binding", bindingName), cfTraceId && (proxiedHeaders.set("cf-trace-id", cfTraceId), proxiedHeaders.set("MF-Header-cf-trace-id", cfTraceId));
    let req = new Request(request, {
      headers: proxiedHeaders
    }), response = await fetch(remoteProxyConnectionString, req);
    return await maybeReportCloudflareAccessBlock(
      response,
      bindingName,
      remoteProxyConnectionString,
      loopback
    );
  };
}
function makeRemoteProxyStub(remoteProxyConnectionString, bindingName, metadata, cfTraceId, loopback) {
  let url = new URL(remoteProxyConnectionString);
  if (url.protocol = url.protocol === "https:" ? "wss:" : "ws:", url.searchParams.set("MF-Binding", bindingName), metadata)
    for (let [key, value] of Object.entries(metadata))
      value !== void 0 && url.searchParams.set(key, value);
  let stub = newWebSocketRpcSession2(url.href), headers = metadata ? new Headers(
    Object.entries(metadata).filter(
      (entry) => entry[1] !== void 0
    )
  ) : void 0;
  return new Proxy(stub, {
    get(_, p) {
      return p === "fetch" ? makeFetch(
        remoteProxyConnectionString,
        bindingName,
        headers,
        cfTraceId,
        loopback
      ) : Reflect.get(stub, p);
    }
  });
}

// src/workers/shared/remote-proxy-client.worker.ts
var Client = class extends WorkerEntrypoint {
  fetch(request) {
    return makeFetch(
      this.env.remoteProxyConnectionString,
      this.env.binding,
      void 0,
      this.env.cfTraceId,
      this.env[SharedBindings.MAYBE_SERVICE_LOOPBACK]
    )(request);
  }
  constructor(ctx, env) {
    super(ctx, env);
    let stub = env.remoteProxyConnectionString ? makeRemoteProxyStub(
      env.remoteProxyConnectionString,
      env.binding,
      void 0,
      env.cfTraceId,
      env[SharedBindings.MAYBE_SERVICE_LOOPBACK]
    ) : void 0;
    return new Proxy(this, {
      get: (target, prop) => Reflect.has(target, prop) ? Reflect.get(target, prop) : (stub || throwRemoteRequired(env.binding), Reflect.get(stub, prop))
    });
  }
};
export {
  Client as default
};
//# sourceMappingURL=remote-proxy-client.worker.js.map
