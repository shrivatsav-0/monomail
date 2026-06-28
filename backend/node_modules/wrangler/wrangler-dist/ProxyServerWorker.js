// ../../node_modules/.pnpm/capnweb@0.5.0/node_modules/capnweb/dist/index-workers.js
import * as cfw from "cloudflare:workers";
var WORKERS_MODULE_SYMBOL = /* @__PURE__ */ Symbol("workers-module");
globalThis[WORKERS_MODULE_SYMBOL] = cfw;
if (!Symbol.dispose) {
  Symbol.dispose = /* @__PURE__ */ Symbol.for("dispose");
}
if (!Symbol.asyncDispose) {
  Symbol.asyncDispose = /* @__PURE__ */ Symbol.for("asyncDispose");
}
if (!Promise.withResolvers) {
  Promise.withResolvers = function() {
    let resolve;
    let reject;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  };
}
var workersModule = globalThis[WORKERS_MODULE_SYMBOL];
var RpcTarget = workersModule ? workersModule.RpcTarget : class {
};
var AsyncFunction = (async function() {
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
  if (value === null) {
    return "primitive";
  }
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
        if (prototype == workersModule.RpcStub.prototype || value instanceof workersModule.ServiceStub) {
          return "rpc-target";
        } else if (prototype == workersModule.RpcPromise.prototype || prototype == workersModule.RpcProperty.prototype) {
          return "rpc-thenable";
        }
      }
      if (value instanceof RpcTarget) {
        return "rpc-target";
      }
      if (value instanceof Error) {
        return "error";
      }
      return "unsupported";
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
};
var StubHook = class {
  // Like call(), but designed for streaming calls (e.g. WritableStream writes). Returns:
  // - promise: A Promise<void> for the completion of the call.
  // - size: If the call was remote, the byte size of the serialized message. For local calls,
  //   undefined is returned, indicating the caller should await the promise to serialize writes
  //   (no overlapping).
  stream(path, args) {
    let hook = this.call(path, args);
    let pulled = hook.pull();
    let promise;
    if (pulled instanceof Promise) {
      promise = pulled.then((p) => {
        p.dispose();
      });
    } else {
      pulled.dispose();
      promise = Promise.resolve();
    }
    return { promise };
  }
};
var ErrorStubHook = class extends StubHook {
  constructor(error) {
    super();
    this.error = error;
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
};
var DISPOSED_HOOK = new ErrorStubHook(
  new Error("Attempted to use RPC stub after it has been disposed.")
);
var doCall = (hook, path, params) => {
  return hook.call(path, params);
};
function withCallInterceptor(interceptor, callback) {
  let oldValue = doCall;
  doCall = interceptor;
  try {
    return callback();
  } finally {
    doCall = oldValue;
  }
}
var RAW_STUB = /* @__PURE__ */ Symbol("realStub");
var PROXY_HANDLERS = {
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
    if (prop === RAW_STUB) {
      return stub;
    } else if (prop in RpcPromise.prototype) {
      return stub[prop];
    } else if (typeof prop === "string") {
      return new RpcPromise(
        stub.hook,
        stub.pathIfPromise ? [...stub.pathIfPromise, prop] : [prop]
      );
    } else if (prop === Symbol.dispose && (!stub.pathIfPromise || stub.pathIfPromise.length == 0)) {
      return () => {
        stub.hook.dispose();
        stub.hook = DISPOSED_HOOK;
      };
    } else {
      return void 0;
    }
  },
  has(target, prop) {
    let stub = target.raw;
    if (prop === RAW_STUB) {
      return true;
    } else if (prop in RpcPromise.prototype) {
      return prop in stub;
    } else if (typeof prop === "string") {
      return true;
    } else if (prop === Symbol.dispose && (!stub.pathIfPromise || stub.pathIfPromise.length == 0)) {
      return true;
    } else {
      return false;
    }
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
    return void 0;
  },
  getPrototypeOf(target) {
    return Object.getPrototypeOf(target.raw);
  },
  isExtensible(target) {
    return false;
  },
  ownKeys(target) {
    return [];
  },
  preventExtensions(target) {
    return true;
  },
  set(target, p, newValue, receiver) {
    throw new Error("Can't assign properties on RPC stubs.");
  },
  setPrototypeOf(target, v) {
    throw new Error("Can't override prototype of RPC stubs.");
  }
};
var RpcStub = class _RpcStub extends RpcTarget {
  // Although `hook` and `path` are declared `public` here, they are effectively hidden by the
  // proxy.
  constructor(hook, pathIfPromise) {
    super();
    if (!(hook instanceof StubHook)) {
      let value = hook;
      if (value instanceof RpcTarget || value instanceof Function) {
        hook = TargetStubHook.create(value, void 0);
      } else {
        hook = new PayloadStubHook(RpcPayload.fromAppReturn(value));
      }
      if (pathIfPromise) {
        throw new TypeError("RpcStub constructor expected one argument, received two.");
      }
    }
    this.hook = hook;
    this.pathIfPromise = pathIfPromise;
    let func = () => {
    };
    func.raw = this;
    return new Proxy(func, PROXY_HANDLERS);
  }
  hook;
  pathIfPromise;
  dup() {
    let target = this[RAW_STUB];
    if (target.pathIfPromise) {
      return new _RpcStub(target.hook.get(target.pathIfPromise));
    } else {
      return new _RpcStub(target.hook.dup());
    }
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
};
var RpcPromise = class extends RpcStub {
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
  if (pathIfPromise && pathIfPromise.length > 0) {
    return hook.get(pathIfPromise);
  } else {
    return hook;
  }
}
function unwrapStubAndDup(stub) {
  let { hook, pathIfPromise } = stub[RAW_STUB];
  if (pathIfPromise) {
    return hook.get(pathIfPromise);
  } else {
    return hook.dup();
  }
}
function unwrapStubNoProperties(stub) {
  let { hook, pathIfPromise } = stub[RAW_STUB];
  if (pathIfPromise && pathIfPromise.length > 0) {
    return void 0;
  }
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
  if (pathIfPromise.length > 0) {
    hook = hook.get(pathIfPromise);
  }
  let payload = await hook.pull();
  return payload.deliverResolve();
}
var RpcPayload = class _RpcPayload {
  // Private constructor; use factory functions above to construct.
  constructor(value, source, hooks, promises) {
    this.value = value;
    this.source = source;
    this.hooks = hooks;
    this.promises = promises;
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
    let hooks = [];
    let promises = [];
    let resultArray = [];
    for (let payload of array) {
      payload.ensureDeepCopied();
      for (let hook of payload.hooks) {
        hooks.push(hook);
      }
      for (let promise of payload.promises) {
        if (promise.parent === payload) {
          promise = {
            parent: resultArray,
            property: resultArray.length,
            promise: promise.promise
          };
        }
        promises.push(promise);
      }
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
    result.value = result.deepCopy(
      value,
      oldParent,
      "value",
      result,
      /*dupStubs=*/
      true,
      owner
    );
    return result;
  }
  // For `source === "return"` payloads only, this tracks any StubHooks created around RpcTargets
  // or WritableStreams found in the payload at the time that it is serialized (or deep-copied) for
  // return, so that we can make sure they are not disposed before the pipeline ends.
  //
  // This is initialized on first use.
  rpcTargets;
  // Get the StubHook representing the given RpcTarget found inside this payload.
  getHookForRpcTarget(target, parent, dupStubs = true) {
    if (this.source === "params") {
      if (dupStubs) {
        let dupable = target;
        if (typeof dupable.dup === "function") {
          target = dupable.dup();
        }
      }
      return TargetStubHook.create(target, parent);
    } else if (this.source === "return") {
      let hook = this.rpcTargets?.get(target);
      if (hook) {
        if (dupStubs) {
          return hook.dup();
        } else {
          this.rpcTargets?.delete(target);
          return hook;
        }
      } else {
        hook = TargetStubHook.create(target, parent);
        if (dupStubs) {
          if (!this.rpcTargets) {
            this.rpcTargets = /* @__PURE__ */ new Map();
          }
          this.rpcTargets.set(target, hook);
          return hook.dup();
        } else {
          return hook;
        }
      }
    } else {
      throw new Error("owned payload shouldn't contain raw RpcTargets");
    }
  }
  // Get the StubHook representing the given WritableStream found inside this payload.
  getHookForWritableStream(stream, parent, dupStubs = true) {
    if (this.source === "params") {
      return streamImpl.createWritableStreamHook(stream);
    } else if (this.source === "return") {
      let hook = this.rpcTargets?.get(stream);
      if (hook) {
        if (dupStubs) {
          return hook.dup();
        } else {
          this.rpcTargets?.delete(stream);
          return hook;
        }
      } else {
        hook = streamImpl.createWritableStreamHook(stream);
        if (dupStubs) {
          if (!this.rpcTargets) {
            this.rpcTargets = /* @__PURE__ */ new Map();
          }
          this.rpcTargets.set(stream, hook);
          return hook.dup();
        } else {
          return hook;
        }
      }
    } else {
      throw new Error("owned payload shouldn't contain raw WritableStreams");
    }
  }
  // Get the StubHook representing the given ReadableStream found inside this payload.
  getHookForReadableStream(stream, parent, dupStubs = true) {
    if (this.source === "params") {
      return streamImpl.createReadableStreamHook(stream);
    } else if (this.source === "return") {
      let hook = this.rpcTargets?.get(stream);
      if (hook) {
        if (dupStubs) {
          return hook.dup();
        } else {
          this.rpcTargets?.delete(stream);
          return hook;
        }
      } else {
        hook = streamImpl.createReadableStreamHook(stream);
        if (dupStubs) {
          if (!this.rpcTargets) {
            this.rpcTargets = /* @__PURE__ */ new Map();
          }
          this.rpcTargets.set(stream, hook);
          return hook.dup();
        } else {
          return hook;
        }
      }
    } else {
      throw new Error("owned payload shouldn't contain raw ReadableStreams");
    }
  }
  deepCopy(value, oldParent, property, parent, dupStubs, owner) {
    let kind = typeForRpc(value);
    switch (kind) {
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
        let array = value;
        let len = array.length;
        let result = new Array(len);
        for (let i = 0; i < len; i++) {
          result[i] = this.deepCopy(array[i], array, i, result, dupStubs, owner);
        }
        return result;
      }
      case "object": {
        let result = {};
        let object = value;
        for (let i in object) {
          result[i] = this.deepCopy(object[i], object, i, result, dupStubs, owner);
        }
        return result;
      }
      case "stub":
      case "rpc-promise": {
        let stub = value;
        let hook;
        if (dupStubs) {
          hook = unwrapStubAndDup(stub);
        } else {
          hook = unwrapStubTakingOwnership(stub);
        }
        if (stub instanceof RpcPromise) {
          let promise = new RpcPromise(hook, []);
          this.promises.push({ parent, property, promise });
          return promise;
        } else {
          this.hooks.push(hook);
          return new RpcStub(hook);
        }
      }
      case "function":
      case "rpc-target": {
        let target = value;
        let hook;
        if (owner) {
          hook = owner.getHookForRpcTarget(target, oldParent, dupStubs);
        } else {
          hook = TargetStubHook.create(target, oldParent);
        }
        this.hooks.push(hook);
        return new RpcStub(hook);
      }
      case "rpc-thenable": {
        let target = value;
        let promise;
        if (owner) {
          promise = new RpcPromise(owner.getHookForRpcTarget(target, oldParent, dupStubs), []);
        } else {
          promise = new RpcPromise(TargetStubHook.create(target, oldParent), []);
        }
        this.promises.push({ parent, property, promise });
        return promise;
      }
      case "writable": {
        let stream = value;
        let hook;
        if (owner) {
          hook = owner.getHookForWritableStream(stream, oldParent, dupStubs);
        } else {
          hook = streamImpl.createWritableStreamHook(stream);
        }
        this.hooks.push(hook);
        return stream;
      }
      case "readable": {
        let stream = value;
        let hook;
        if (owner) {
          hook = owner.getHookForReadableStream(stream, oldParent, dupStubs);
        } else {
          hook = streamImpl.createReadableStreamHook(stream);
        }
        this.hooks.push(hook);
        return stream;
      }
      case "headers":
        return new Headers(value);
      case "request": {
        let req = value;
        if (req.body) {
          this.deepCopy(req.body, req, "body", req, dupStubs, owner);
        }
        return new Request(req);
      }
      case "response": {
        let resp = value;
        if (resp.body) {
          this.deepCopy(resp.body, resp, "body", resp, dupStubs, owner);
        }
        return new Response(resp.body, resp);
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
      this.hooks = [];
      this.promises = [];
      try {
        this.value = this.deepCopy(this.value, void 0, "value", this, dupStubs, this);
      } catch (err) {
        this.hooks = void 0;
        this.promises = void 0;
        throw err;
      }
      this.source = "owned";
      if (this.rpcTargets && this.rpcTargets.size > 0) {
        throw new Error("Not all rpcTargets were accounted for in deep-copy?");
      }
      this.rpcTargets = void 0;
    }
  }
  // Resolve all promises in this payload and then assign the final value into `parent[property]`.
  deliverTo(parent, property, promises) {
    this.ensureDeepCopied();
    if (this.value instanceof RpcPromise) {
      _RpcPayload.deliverRpcPromiseTo(this.value, parent, property, promises);
    } else {
      parent[property] = this.value;
      for (let record of this.promises) {
        _RpcPayload.deliverRpcPromiseTo(record.promise, record.parent, record.property, promises);
      }
    }
  }
  static deliverRpcPromiseTo(promise, parent, property, promises) {
    let hook = unwrapStubNoProperties(promise);
    if (!hook) {
      throw new Error("property promises should have been resolved earlier");
    }
    let inner = hook.pull();
    if (inner instanceof _RpcPayload) {
      inner.deliverTo(parent, property, promises);
    } else {
      promises.push(inner.then((payload) => {
        let subPromises = [];
        payload.deliverTo(parent, property, subPromises);
        if (subPromises.length > 0) {
          return Promise.all(subPromises);
        }
      }));
    }
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
      this.deliverTo(this, "value", promises);
      if (promises.length > 0) {
        await Promise.all(promises);
      }
      let result = Function.prototype.apply.call(func, thisArg, this.value);
      if (result instanceof RpcPromise) {
        return _RpcPayload.fromAppReturn(result);
      } else {
        return _RpcPayload.fromAppReturn(await result);
      }
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
      this.deliverTo(this, "value", promises);
      if (promises.length > 0) {
        await Promise.all(promises);
      }
      let result = this.value;
      if (result instanceof Object) {
        if (!(Symbol.dispose in result)) {
          Object.defineProperty(result, Symbol.dispose, {
            // NOTE: Using `this.dispose.bind(this)` here causes Playwright's build of
            //   Chromium 140.0.7339.16 to fail when the object is assigned to a `using` variable,
            //   with the error:
            //       TypeError: Symbol(Symbol.dispose) is not a function
            //   I cannot reproduce this problem in Chrome 140.0.7339.127 nor in Node or workerd,
            //   so maybe it was a short-lived V8 bug or something. To be safe, though, we use
            //   `() => this.dispose()`, which seems to always work.
            value: () => this.dispose(),
            writable: true,
            enumerable: false,
            configurable: true
          });
        }
      }
      return result;
    } catch (err) {
      this.dispose();
      throw err;
    }
  }
  dispose() {
    if (this.source === "owned") {
      this.hooks.forEach((hook) => hook.dispose());
      this.promises.forEach((promise) => promise.promise[Symbol.dispose]());
    } else if (this.source === "return") {
      this.disposeImpl(this.value, void 0);
      if (this.rpcTargets && this.rpcTargets.size > 0) {
        throw new Error("Not all rpcTargets were accounted for in disposeImpl()?");
      }
    } else ;
    this.source = "owned";
    this.hooks = [];
    this.promises = [];
  }
  // Recursive dispose, called only when `source` is "return".
  disposeImpl(value, parent) {
    let kind = typeForRpc(value);
    switch (kind) {
      case "unsupported":
      case "primitive":
      case "bigint":
      case "bytes":
      case "date":
      case "error":
      case "undefined":
        return;
      case "array": {
        let array = value;
        let len = array.length;
        for (let i = 0; i < len; i++) {
          this.disposeImpl(array[i], array);
        }
        return;
      }
      case "object": {
        let object = value;
        for (let i in object) {
          this.disposeImpl(object[i], object);
        }
        return;
      }
      case "stub":
      case "rpc-promise": {
        let stub = value;
        let hook = unwrapStubNoProperties(stub);
        if (hook) {
          hook.dispose();
        }
        return;
      }
      case "function":
      case "rpc-target": {
        let target = value;
        let hook = this.rpcTargets?.get(target);
        if (hook) {
          hook.dispose();
          this.rpcTargets.delete(target);
        } else {
          disposeRpcTarget(target);
        }
        return;
      }
      case "rpc-thenable":
        return;
      case "headers":
        return;
      case "request": {
        let req = value;
        if (req.body) this.disposeImpl(req.body, req);
        return;
      }
      case "response": {
        let resp = value;
        if (resp.body) this.disposeImpl(resp.body, resp);
        return;
      }
      case "writable": {
        let stream = value;
        let hook = this.rpcTargets?.get(stream);
        if (hook) {
          this.rpcTargets.delete(stream);
        } else {
          hook = streamImpl.createWritableStreamHook(stream);
        }
        hook.dispose();
        return;
      }
      case "readable": {
        let stream = value;
        let hook = this.rpcTargets?.get(stream);
        if (hook) {
          this.rpcTargets.delete(stream);
        } else {
          hook = streamImpl.createReadableStreamHook(stream);
        }
        hook.dispose();
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
    if (this.hooks) {
      this.hooks.forEach((hook) => {
        hook.ignoreUnhandledRejections();
      });
      this.promises.forEach(
        (promise) => unwrapStubOrParent(promise.promise).ignoreUnhandledRejections()
      );
    } else {
      this.ignoreUnhandledRejectionsImpl(this.value);
    }
  }
  ignoreUnhandledRejectionsImpl(value) {
    let kind = typeForRpc(value);
    switch (kind) {
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
        let array = value;
        let len = array.length;
        for (let i = 0; i < len; i++) {
          this.ignoreUnhandledRejectionsImpl(array[i]);
        }
        return;
      }
      case "object": {
        let object = value;
        for (let i in object) {
          this.ignoreUnhandledRejectionsImpl(object[i]);
        }
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
    let kind = typeForRpc(value);
    switch (kind) {
      case "object":
      case "function":
        if (Object.hasOwn(value, part)) {
          value = value[part];
        } else {
          value = void 0;
        }
        break;
      case "array":
        if (Number.isInteger(part) && part >= 0) {
          value = value[part];
        } else {
          value = void 0;
        }
        break;
      case "rpc-target":
      case "rpc-thenable": {
        if (Object.hasOwn(value, part)) {
          throw new TypeError(
            `Attempted to access property '${part}', which is an instance property of the RpcTarget. To avoid leaking private internals, instance properties cannot be accessed over RPC. If you want to make this property available over RPC, define it as a method or getter on the class, instead of an instance property.`
          );
        } else {
          value = value[part];
        }
        owner = null;
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
        if (i === 0) {
          throw new TypeError(`RPC stub points at a non-serializable type.`);
        } else {
          let prefix = path.slice(0, i).join(".");
          let remainder = path.slice(0, i).join(".");
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
      let { value, owner } = this.getValue();
      let followResult = followPath(value, void 0, path, owner);
      if (followResult.hook) {
        return followResult.hook.call(followResult.remainingPath, args);
      }
      if (typeof followResult.value != "function") {
        throw new TypeError(`'${path.join(".")}' is not a function.`);
      }
      let promise = args.deliverCall(followResult.value, followResult.parent);
      return new PromiseStubHook(promise.then((payload) => {
        return new PayloadStubHook(payload);
      }));
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
        ;
      } catch (err) {
        for (let cap of captures) {
          cap.dispose();
        }
        throw err;
      }
      if (followResult.hook) {
        return followResult.hook.map(followResult.remainingPath, captures, instructions);
      }
      return mapImpl.applyMap(
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
      if (path.length === 0 && owner === null) {
        throw new Error("Can't dup an RpcTarget stub as a promise.");
      }
      let followResult = followPath(value, void 0, path, owner);
      if (followResult.hook) {
        return followResult.hook.get(followResult.remainingPath);
      }
      return new PayloadStubHook(RpcPayload.deepCopyFrom(
        followResult.value,
        followResult.parent,
        followResult.owner
      ));
    } catch (err) {
      return new ErrorStubHook(err);
    }
  }
};
var PayloadStubHook = class _PayloadStubHook extends ValueStubHook {
  constructor(payload) {
    super();
    this.payload = payload;
  }
  payload;
  // cleared when disposed
  getPayload() {
    if (this.payload) {
      return this.payload;
    } else {
      throw new Error("Attempted to use an RPC StubHook after it was disposed.");
    }
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
    if (this.payload) {
      this.payload.ignoreUnhandledRejections();
    }
  }
  dispose() {
    if (this.payload) {
      this.payload.dispose();
      this.payload = void 0;
    }
  }
  onBroken(callback) {
    if (this.payload) {
      if (this.payload.value instanceof RpcStub) {
        this.payload.value.onRpcBroken(callback);
      }
    }
  }
};
function disposeRpcTarget(target) {
  if (Symbol.dispose in target) {
    try {
      target[Symbol.dispose]();
    } catch (err) {
      Promise.reject(err);
    }
  }
}
var TargetStubHook = class _TargetStubHook extends ValueStubHook {
  // Constructs a TargetStubHook that is not duplicated from an existing hook.
  //
  // If `value` is a function, `parent` is bound as its "this".
  static create(value, parent) {
    if (typeof value !== "function") {
      parent = void 0;
    }
    return new _TargetStubHook(value, parent);
  }
  constructor(target, parent, dupFrom) {
    super();
    this.target = target;
    this.parent = parent;
    if (dupFrom) {
      if (dupFrom.refcount) {
        this.refcount = dupFrom.refcount;
        ++this.refcount.count;
      }
    } else if (Symbol.dispose in target) {
      this.refcount = { count: 1 };
    }
  }
  target;
  // cleared when disposed
  parent;
  // `this` parameter when calling `target`
  refcount;
  // undefined if not needed (because target has no disposer)
  getTarget() {
    if (this.target) {
      return this.target;
    } else {
      throw new Error("Attempted to use an RPC StubHook after it was disposed.");
    }
  }
  getValue() {
    return { value: this.getTarget(), owner: null };
  }
  dup() {
    return new _TargetStubHook(this.getTarget(), this.parent, this);
  }
  pull() {
    let target = this.getTarget();
    if ("then" in target) {
      return Promise.resolve(target).then((resolution) => {
        return RpcPayload.fromAppReturn(resolution);
      });
    } else {
      return Promise.reject(new Error("Tried to resolve a non-promise stub."));
    }
  }
  ignoreUnhandledRejections() {
  }
  dispose() {
    if (this.target) {
      if (this.refcount) {
        if (--this.refcount.count == 0) {
          disposeRpcTarget(this.target);
        }
      }
      this.target = void 0;
    }
  }
  onBroken(callback) {
  }
};
var PromiseStubHook = class _PromiseStubHook extends StubHook {
  promise;
  resolution;
  constructor(promise) {
    super();
    this.promise = promise.then((res) => {
      this.resolution = res;
      return res;
    });
  }
  call(path, args) {
    args.ensureDeepCopied();
    return new _PromiseStubHook(this.promise.then((hook) => hook.call(path, args)));
  }
  stream(path, args) {
    args.ensureDeepCopied();
    let promise = this.promise.then((hook) => {
      let result = hook.stream(path, args);
      return result.promise;
    });
    return { promise };
  }
  map(path, captures, instructions) {
    return new _PromiseStubHook(this.promise.then(
      (hook) => hook.map(path, captures, instructions),
      (err) => {
        for (let cap of captures) {
          cap.dispose();
        }
        throw err;
      }
    ));
  }
  get(path) {
    return new _PromiseStubHook(this.promise.then((hook) => hook.get(path)));
  }
  dup() {
    if (this.resolution) {
      return this.resolution.dup();
    } else {
      return new _PromiseStubHook(this.promise.then((hook) => hook.dup()));
    }
  }
  pull() {
    if (this.resolution) {
      return this.resolution.pull();
    } else {
      return this.promise.then((hook) => hook.pull());
    }
  }
  ignoreUnhandledRejections() {
    if (this.resolution) {
      this.resolution.ignoreUnhandledRejections();
    } else {
      this.promise.then((res) => {
        res.ignoreUnhandledRejections();
      }, (err) => {
      });
    }
  }
  dispose() {
    if (this.resolution) {
      this.resolution.dispose();
    } else {
      this.promise.then((hook) => {
        hook.dispose();
      }, (err) => {
      });
    }
  }
  onBroken(callback) {
    if (this.resolution) {
      this.resolution.onBroken(callback);
    } else {
      this.promise.then((hook) => {
        hook.onBroken(callback);
      }, callback);
    }
  }
};
var NullExporter = class {
  exportStub(stub) {
    throw new Error("Cannot serialize RPC stubs without an RPC session.");
  }
  exportPromise(stub) {
    throw new Error("Cannot serialize RPC stubs without an RPC session.");
  }
  getImport(hook) {
    return void 0;
  }
  unexport(ids) {
  }
  createPipe(readable) {
    throw new Error("Cannot create pipes without an RPC session.");
  }
  onSendError(error) {
  }
};
var NULL_EXPORTER = new NullExporter();
var ERROR_TYPES = {
  Error,
  EvalError,
  RangeError,
  ReferenceError,
  SyntaxError,
  TypeError,
  URIError,
  AggregateError
  // TODO: DOMError? Others?
};
var Devaluator = class _Devaluator {
  constructor(exporter, source) {
    this.exporter = exporter;
    this.source = source;
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
      if (devaluator.exports) {
        try {
          exporter.unexport(devaluator.exports);
        } catch (err2) {
        }
      }
      throw err;
    }
  }
  exports;
  devaluateImpl(value, parent, depth) {
    if (depth >= 64) {
      throw new Error(
        "Serialization exceeded maximum allowed depth. (Does the message contain cycles?)"
      );
    }
    let kind = typeForRpc(value);
    switch (kind) {
      case "unsupported": {
        let msg;
        try {
          msg = `Cannot serialize value: ${value}`;
        } catch (err) {
          msg = "Cannot serialize value: (couldn't stringify value)";
        }
        throw new TypeError(msg);
      }
      case "primitive":
        if (typeof value === "number" && !isFinite(value)) {
          if (value === Infinity) {
            return ["inf"];
          } else if (value === -Infinity) {
            return ["-inf"];
          } else {
            return ["nan"];
          }
        } else {
          return value;
        }
      case "object": {
        let object = value;
        let result = {};
        for (let key in object) {
          result[key] = this.devaluateImpl(object[key], object, depth + 1);
        }
        return result;
      }
      case "array": {
        let array = value;
        let len = array.length;
        let result = new Array(len);
        for (let i = 0; i < len; i++) {
          result[i] = this.devaluateImpl(array[i], array, depth + 1);
        }
        return [result];
      }
      case "bigint":
        return ["bigint", value.toString()];
      case "date":
        return ["date", value.getTime()];
      case "bytes": {
        let bytes = value;
        if (bytes.toBase64) {
          return ["bytes", bytes.toBase64({ omitPadding: true })];
        } else {
          return [
            "bytes",
            btoa(String.fromCharCode.apply(null, bytes).replace(/=*$/, ""))
          ];
        }
      }
      case "headers":
        return ["headers", [...value]];
      case "request": {
        let req = value;
        let init = {};
        if (req.method !== "GET") init.method = req.method;
        let headers = [...req.headers];
        if (headers.length > 0) {
          init.headers = headers;
        }
        if (req.body) {
          init.body = this.devaluateImpl(req.body, req, depth + 1);
          init.duplex = req.duplex || "half";
        } else if (req.body === void 0 && !["GET", "HEAD", "OPTIONS", "TRACE", "DELETE"].includes(req.method)) {
          let bodyPromise = req.arrayBuffer();
          let readable = new ReadableStream({
            async start(controller) {
              try {
                controller.enqueue(new Uint8Array(await bodyPromise));
                controller.close();
              } catch (err) {
                controller.error(err);
              }
            }
          });
          let hook = streamImpl.createReadableStreamHook(readable);
          let importId = this.exporter.createPipe(readable, hook);
          init.body = ["readable", importId];
          init.duplex = req.duplex || "half";
        }
        if (req.cache && req.cache !== "default") init.cache = req.cache;
        if (req.redirect !== "follow") init.redirect = req.redirect;
        if (req.integrity) init.integrity = req.integrity;
        if (req.mode && req.mode !== "cors") init.mode = req.mode;
        if (req.credentials && req.credentials !== "same-origin") {
          init.credentials = req.credentials;
        }
        if (req.referrer && req.referrer !== "about:client") init.referrer = req.referrer;
        if (req.referrerPolicy) init.referrerPolicy = req.referrerPolicy;
        if (req.keepalive) init.keepalive = req.keepalive;
        let cfReq = req;
        if (cfReq.cf) init.cf = cfReq.cf;
        if (cfReq.encodeResponseBody && cfReq.encodeResponseBody !== "automatic") {
          init.encodeResponseBody = cfReq.encodeResponseBody;
        }
        return ["request", req.url, init];
      }
      case "response": {
        let resp = value;
        let body = this.devaluateImpl(resp.body, resp, depth + 1);
        let init = {};
        if (resp.status !== 200) init.status = resp.status;
        if (resp.statusText) init.statusText = resp.statusText;
        let headers = [...resp.headers];
        if (headers.length > 0) {
          init.headers = headers;
        }
        let cfResp = resp;
        if (cfResp.cf) init.cf = cfResp.cf;
        if (cfResp.encodeBody && cfResp.encodeBody !== "automatic") {
          init.encodeBody = cfResp.encodeBody;
        }
        if (cfResp.webSocket) {
          throw new TypeError("Can't serialize a Response containing a webSocket.");
        }
        return ["response", body, init];
      }
      case "error": {
        let e = value;
        let rewritten = this.exporter.onSendError(e);
        if (rewritten) {
          e = rewritten;
        }
        let result = ["error", e.name, e.message];
        if (rewritten && rewritten.stack) {
          result.push(rewritten.stack);
        }
        return result;
      }
      case "undefined":
        return ["undefined"];
      case "stub":
      case "rpc-promise": {
        if (!this.source) {
          throw new Error("Can't serialize RPC stubs in this context.");
        }
        let { hook, pathIfPromise } = unwrapStubAndPath(value);
        let importId = this.exporter.getImport(hook);
        if (importId !== void 0) {
          if (pathIfPromise) {
            if (pathIfPromise.length > 0) {
              return ["pipeline", importId, pathIfPromise];
            } else {
              return ["pipeline", importId];
            }
          } else {
            return ["import", importId];
          }
        }
        if (pathIfPromise) {
          hook = hook.get(pathIfPromise);
        } else {
          hook = hook.dup();
        }
        return this.devaluateHook(pathIfPromise ? "promise" : "export", hook);
      }
      case "function":
      case "rpc-target": {
        if (!this.source) {
          throw new Error("Can't serialize RPC stubs in this context.");
        }
        let hook = this.source.getHookForRpcTarget(value, parent);
        return this.devaluateHook("export", hook);
      }
      case "rpc-thenable": {
        if (!this.source) {
          throw new Error("Can't serialize RPC stubs in this context.");
        }
        let hook = this.source.getHookForRpcTarget(value, parent);
        return this.devaluateHook("promise", hook);
      }
      case "writable": {
        if (!this.source) {
          throw new Error("Can't serialize WritableStream in this context.");
        }
        let hook = this.source.getHookForWritableStream(value, parent);
        return this.devaluateHook("writable", hook);
      }
      case "readable": {
        if (!this.source) {
          throw new Error("Can't serialize ReadableStream in this context.");
        }
        let ws = value;
        let hook = this.source.getHookForReadableStream(ws, parent);
        let importId = this.exporter.createPipe(ws, hook);
        return ["readable", importId];
      }
      default:
        throw new Error("unreachable");
    }
  }
  devaluateHook(type, hook) {
    if (!this.exports) this.exports = [];
    let exportId = type === "promise" ? this.exporter.exportPromise(hook) : this.exporter.exportStub(hook);
    this.exports.push(exportId);
    return [type, exportId];
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
    return void 0;
  }
  getPipeReadable(exportId) {
    throw new Error("Cannot retrieve pipe readable without an RPC session.");
  }
};
var NULL_IMPORTER = new NullImporter();
function fixBrokenRequestBody(request, body) {
  let promise = new Response(body).arrayBuffer().then((arrayBuffer) => {
    let bytes = new Uint8Array(arrayBuffer);
    let result = new Request(request, { body: bytes });
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
      payload.value = this.evaluateImpl(value, payload, "value");
      return payload;
    } catch (err) {
      payload.dispose();
      throw err;
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
        for (let i = 0; i < result.length; i++) {
          result[i] = this.evaluateImpl(result[i], result, i);
        }
        return result;
      } else switch (value[0]) {
        case "bigint":
          if (typeof value[1] == "string") {
            return BigInt(value[1]);
          }
          break;
        case "date":
          if (typeof value[1] == "number") {
            return new Date(value[1]);
          }
          break;
        case "bytes": {
          let b64 = Uint8Array;
          if (typeof value[1] == "string") {
            if (b64.fromBase64) {
              return b64.fromBase64(value[1]);
            } else {
              let bs = atob(value[1]);
              let len = bs.length;
              let bytes = new Uint8Array(len);
              for (let i = 0; i < len; i++) {
                bytes[i] = bs.charCodeAt(i);
              }
              return bytes;
            }
          }
          break;
        }
        case "error":
          if (value.length >= 3 && typeof value[1] === "string" && typeof value[2] === "string") {
            let cls = ERROR_TYPES[value[1]] || Error;
            let result = new cls(value[2]);
            if (typeof value[3] === "string") {
              result.stack = value[3];
            }
            return result;
          }
          break;
        case "undefined":
          if (value.length === 1) {
            return void 0;
          }
          break;
        case "inf":
          return Infinity;
        case "-inf":
          return -Infinity;
        case "nan":
          return NaN;
        case "headers":
          if (value.length === 2 && value[1] instanceof Array) {
            return new Headers(value[1]);
          }
          break;
        case "request": {
          if (value.length !== 3 || typeof value[1] !== "string") break;
          let url = value[1];
          let init = value[2];
          if (typeof init !== "object" || init === null) break;
          if (init.body) {
            init.body = this.evaluateImpl(init.body, init, "body");
            if (init.body === null || typeof init.body === "string" || init.body instanceof Uint8Array || init.body instanceof ReadableStream) ;
            else {
              throw new TypeError("Request body must be of type ReadableStream.");
            }
          }
          if (init.signal) {
            init.signal = this.evaluateImpl(init.signal, init, "signal");
            if (!(init.signal instanceof AbortSignal)) {
              throw new TypeError("Request siganl must be of type AbortSignal.");
            }
          }
          if (init.headers && !(init.headers instanceof Array)) {
            throw new TypeError("Request headers must be serialized as an array of pairs.");
          }
          let result = new Request(url, init);
          if (init.body instanceof ReadableStream && result.body === void 0) {
            let promise = fixBrokenRequestBody(result, init.body);
            this.promises.push({ promise, parent, property });
            return promise;
          } else {
            return result;
          }
        }
        case "response": {
          if (value.length !== 3) break;
          let body = this.evaluateImpl(value[1], parent, property);
          if (body === null || typeof body === "string" || body instanceof Uint8Array || body instanceof ReadableStream) ;
          else {
            throw new TypeError("Response body must be of type ReadableStream.");
          }
          let init = value[2];
          if (typeof init !== "object" || init === null) break;
          if (init.webSocket) {
            throw new TypeError("Can't deserialize a Response containing a webSocket.");
          }
          if (init.headers && !(init.headers instanceof Array)) {
            throw new TypeError("Request headers must be serialized as an array of pairs.");
          }
          return new Response(body, init);
        }
        case "import":
        case "pipeline": {
          if (value.length < 2 || value.length > 4) {
            break;
          }
          if (typeof value[1] != "number") {
            break;
          }
          let hook = this.importer.getExport(value[1]);
          if (!hook) {
            throw new Error(`no such entry on exports table: ${value[1]}`);
          }
          let isPromise = value[0] == "pipeline";
          let addStub = (hook2) => {
            if (isPromise) {
              let promise = new RpcPromise(hook2, []);
              this.promises.push({ promise, parent, property });
              return promise;
            } else {
              this.hooks.push(hook2);
              return new RpcPromise(hook2, []);
            }
          };
          if (value.length == 2) {
            if (isPromise) {
              return addStub(hook.get([]));
            } else {
              return addStub(hook.dup());
            }
          }
          let path = value[2];
          if (!(path instanceof Array)) {
            break;
          }
          if (!path.every(
            (part) => {
              return typeof part == "string" || typeof part == "number";
            }
          )) {
            break;
          }
          if (value.length == 3) {
            return addStub(hook.get(path));
          }
          let args = value[3];
          if (!(args instanceof Array)) {
            break;
          }
          let subEval = new _Evaluator(this.importer);
          args = subEval.evaluate([args]);
          return addStub(hook.call(path, args));
        }
        case "remap": {
          if (value.length !== 5 || typeof value[1] !== "number" || !(value[2] instanceof Array) || !(value[3] instanceof Array) || !(value[4] instanceof Array)) {
            break;
          }
          let hook = this.importer.getExport(value[1]);
          if (!hook) {
            throw new Error(`no such entry on exports table: ${value[1]}`);
          }
          let path = value[2];
          if (!path.every(
            (part) => {
              return typeof part == "string" || typeof part == "number";
            }
          )) {
            break;
          }
          let captures = value[3].map((cap) => {
            if (!(cap instanceof Array) || cap.length !== 2 || cap[0] !== "import" && cap[0] !== "export" || typeof cap[1] !== "number") {
              throw new TypeError(`unknown map capture: ${JSON.stringify(cap)}`);
            }
            if (cap[0] === "export") {
              return this.importer.importStub(cap[1]);
            } else {
              let exp = this.importer.getExport(cap[1]);
              if (!exp) {
                throw new Error(`no such entry on exports table: ${cap[1]}`);
              }
              return exp.dup();
            }
          });
          let instructions = value[4];
          let resultHook = hook.map(path, captures, instructions);
          let promise = new RpcPromise(resultHook, []);
          this.promises.push({ promise, parent, property });
          return promise;
        }
        case "export":
        case "promise":
          if (typeof value[1] == "number") {
            if (value[0] == "promise") {
              let hook = this.importer.importPromise(value[1]);
              let promise = new RpcPromise(hook, []);
              this.promises.push({ parent, property, promise });
              return promise;
            } else {
              let hook = this.importer.importStub(value[1]);
              this.hooks.push(hook);
              return new RpcStub(hook);
            }
          }
          break;
        case "writable":
          if (typeof value[1] == "number") {
            let hook = this.importer.importStub(value[1]);
            let stream = streamImpl.createWritableStreamFromHook(hook);
            this.hooks.push(hook);
            return stream;
          }
          break;
        case "readable":
          if (typeof value[1] == "number") {
            let stream = this.importer.getPipeReadable(value[1]);
            let hook = streamImpl.createReadableStreamHook(stream);
            this.hooks.push(hook);
            return stream;
          }
          break;
      }
      throw new TypeError(`unknown special value: ${JSON.stringify(value)}`);
    } else if (value instanceof Object) {
      let result = value;
      for (let key in result) {
        if (key in Object.prototype || key === "toJSON") {
          this.evaluateImpl(result[key], result, key);
          delete result[key];
        } else {
          result[key] = this.evaluateImpl(result[key], result, key);
        }
      }
      return result;
    } else {
      return value;
    }
  }
};
var ImportTableEntry = class {
  constructor(session, importId, pulling) {
    this.session = session;
    this.importId = importId;
    if (pulling) {
      this.activePull = Promise.withResolvers();
    }
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
    this.resolution = resolution;
    this.sendRelease();
    if (this.onBrokenRegistrations) {
      for (let i of this.onBrokenRegistrations) {
        let callback = this.session.onBrokenCallbacks[i];
        let endIndex = this.session.onBrokenCallbacks.length;
        resolution.onBroken(callback);
        if (this.session.onBrokenCallbacks[endIndex] === callback) {
          delete this.session.onBrokenCallbacks[endIndex];
        } else {
          delete this.session.onBrokenCallbacks[i];
        }
      }
      this.onBrokenRegistrations = void 0;
    }
    if (this.activePull) {
      this.activePull.resolve();
      this.activePull = void 0;
    }
  }
  async awaitResolution() {
    if (!this.activePull) {
      this.session.sendPull(this.importId);
      this.activePull = Promise.withResolvers();
    }
    await this.activePull.promise;
    return this.resolution.pull();
  }
  dispose() {
    if (this.resolution) {
      this.resolution.dispose();
    } else {
      this.abort(new Error("RPC was canceled because the RpcPromise was disposed."));
      this.sendRelease();
    }
  }
  abort(error) {
    if (!this.resolution) {
      this.resolution = new ErrorStubHook(error);
      if (this.activePull) {
        this.activePull.reject(error);
        this.activePull = void 0;
      }
      this.onBrokenRegistrations = void 0;
    }
  }
  onBroken(callback) {
    if (this.resolution) {
      this.resolution.onBroken(callback);
    } else {
      let index = this.session.onBrokenCallbacks.length;
      this.session.onBrokenCallbacks.push(callback);
      if (!this.onBrokenRegistrations) this.onBrokenRegistrations = [];
      this.onBrokenRegistrations.push(index);
    }
  }
  sendRelease() {
    if (this.remoteRefcount > 0) {
      this.session.sendRelease(this.importId, this.remoteRefcount);
      this.remoteRefcount = 0;
    }
  }
};
var RpcImportHook = class _RpcImportHook extends StubHook {
  // undefined when we're disposed
  // `pulling` is true if we already expect that this import is going to be resolved later, and
  // null if this import is not allowed to be pulled (i.e. it's a stub not a promise).
  constructor(isPromise, entry) {
    super();
    this.isPromise = isPromise;
    ++entry.localRefcount;
    this.entry = entry;
  }
  entry;
  collectPath(path) {
    return this;
  }
  getEntry() {
    if (this.entry) {
      return this.entry;
    } else {
      throw new Error("This RpcImportHook was already disposed.");
    }
  }
  // -------------------------------------------------------------------------------------
  // implements StubHook
  call(path, args) {
    let entry = this.getEntry();
    if (entry.resolution) {
      return entry.resolution.call(path, args);
    } else {
      return entry.session.sendCall(entry.importId, path, args);
    }
  }
  stream(path, args) {
    let entry = this.getEntry();
    if (entry.resolution) {
      return entry.resolution.stream(path, args);
    } else {
      return entry.session.sendStream(entry.importId, path, args);
    }
  }
  map(path, captures, instructions) {
    let entry;
    try {
      entry = this.getEntry();
    } catch (err) {
      for (let cap of captures) {
        cap.dispose();
      }
      throw err;
    }
    if (entry.resolution) {
      return entry.resolution.map(path, captures, instructions);
    } else {
      return entry.session.sendMap(entry.importId, path, captures, instructions);
    }
  }
  get(path) {
    let entry = this.getEntry();
    if (entry.resolution) {
      return entry.resolution.get(path);
    } else {
      return entry.session.sendCall(entry.importId, path);
    }
  }
  dup() {
    return new _RpcImportHook(false, this.getEntry());
  }
  pull() {
    let entry = this.getEntry();
    if (!this.isPromise) {
      throw new Error("Can't pull this hook because it's not a promise hook.");
    }
    if (entry.resolution) {
      return entry.resolution.pull();
    }
    return entry.awaitResolution();
  }
  ignoreUnhandledRejections() {
  }
  dispose() {
    let entry = this.entry;
    this.entry = void 0;
    if (entry) {
      if (--entry.localRefcount === 0) {
        entry.dispose();
      }
    }
  }
  onBroken(callback) {
    if (this.entry) {
      this.entry.onBroken(callback);
    }
  }
};
var RpcMainHook = class extends RpcImportHook {
  session;
  constructor(entry) {
    super(false, entry);
    this.session = entry.session;
  }
  dispose() {
    if (this.session) {
      let session = this.session;
      this.session = void 0;
      session.shutdown();
    }
  }
};
var RpcSessionImpl = class {
  constructor(transport, mainHook, options) {
    this.transport = transport;
    this.options = options;
    this.exports.push({ hook: mainHook, refcount: 1 });
    this.imports.push(new ImportTableEntry(this, 0, false));
    let rejectFunc;
    let abortPromise = new Promise((resolve, reject) => {
      rejectFunc = reject;
    });
    this.cancelReadLoop = rejectFunc;
    this.readLoop(abortPromise).catch((err) => this.abort(err));
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
    this.abort(new Error("RPC session was shut down by disposing the main stub"), false);
  }
  exportStub(hook) {
    if (this.abortReason) throw this.abortReason;
    let existingExportId = this.reverseExports.get(hook);
    if (existingExportId !== void 0) {
      ++this.exports[existingExportId].refcount;
      return existingExportId;
    } else {
      let exportId = this.nextExportId--;
      this.exports[exportId] = { hook, refcount: 1 };
      this.reverseExports.set(hook, exportId);
      return exportId;
    }
  }
  exportPromise(hook) {
    if (this.abortReason) throw this.abortReason;
    let exportId = this.nextExportId--;
    this.exports[exportId] = { hook, refcount: 1 };
    this.reverseExports.set(hook, exportId);
    this.ensureResolvingExport(exportId);
    return exportId;
  }
  unexport(ids) {
    for (let id of ids) {
      this.releaseExport(id, 1);
    }
  }
  releaseExport(exportId, refcount) {
    let entry = this.exports[exportId];
    if (!entry) {
      throw new Error(`no such export ID: ${exportId}`);
    }
    if (entry.refcount < refcount) {
      throw new Error(`refcount would go negative: ${entry.refcount} < ${refcount}`);
    }
    entry.refcount -= refcount;
    if (entry.refcount === 0) {
      delete this.exports[exportId];
      this.reverseExports.delete(entry.hook);
      entry.hook.dispose();
    }
  }
  onSendError(error) {
    if (this.options.onSendError) {
      return this.options.onSendError(error);
    }
  }
  ensureResolvingExport(exportId) {
    let exp = this.exports[exportId];
    if (!exp) {
      throw new Error(`no such export ID: ${exportId}`);
    }
    if (!exp.pull) {
      let resolve = async () => {
        let hook = exp.hook;
        for (; ; ) {
          let payload = await hook.pull();
          if (payload.value instanceof RpcStub) {
            let { hook: inner, pathIfPromise } = unwrapStubAndPath(payload.value);
            if (pathIfPromise && pathIfPromise.length == 0) {
              if (this.getImport(hook) === void 0) {
                hook = inner;
                continue;
              }
            }
          }
          return payload;
        }
      };
      let autoRelease = exp.autoRelease;
      ++this.pullCount;
      exp.pull = resolve().then(
        (payload) => {
          let value = Devaluator.devaluate(payload.value, void 0, this, payload);
          this.send(["resolve", exportId, value]);
          if (autoRelease) this.releaseExport(exportId, 1);
        },
        (error) => {
          this.send(["reject", exportId, Devaluator.devaluate(error, void 0, this)]);
          if (autoRelease) this.releaseExport(exportId, 1);
        }
      ).catch(
        (error) => {
          try {
            this.send(["reject", exportId, Devaluator.devaluate(error, void 0, this)]);
            if (autoRelease) this.releaseExport(exportId, 1);
          } catch (error2) {
            this.abort(error2);
          }
        }
      ).finally(() => {
        if (--this.pullCount === 0) {
          if (this.onBatchDone) {
            this.onBatchDone.resolve();
          }
        }
      });
    }
  }
  getImport(hook) {
    if (hook instanceof RpcImportHook && hook.entry && hook.entry.session === this) {
      return hook.entry.importId;
    } else {
      return void 0;
    }
  }
  importStub(idx) {
    if (this.abortReason) throw this.abortReason;
    let entry = this.imports[idx];
    if (!entry) {
      entry = new ImportTableEntry(this, idx, false);
      this.imports[idx] = entry;
    }
    return new RpcImportHook(
      /*isPromise=*/
      false,
      entry
    );
  }
  importPromise(idx) {
    if (this.abortReason) throw this.abortReason;
    if (this.imports[idx]) {
      return new ErrorStubHook(new Error(
        "Bug in RPC system: The peer sent a promise reusing an existing export ID."
      ));
    }
    let entry = new ImportTableEntry(this, idx, true);
    this.imports[idx] = entry;
    return new RpcImportHook(
      /*isPromise=*/
      true,
      entry
    );
  }
  getExport(idx) {
    return this.exports[idx]?.hook;
  }
  getPipeReadable(exportId) {
    let entry = this.exports[exportId];
    if (!entry || !entry.pipeReadable) {
      throw new Error(`Export ${exportId} is not a pipe or its readable end was already consumed.`);
    }
    let readable = entry.pipeReadable;
    entry.pipeReadable = void 0;
    return readable;
  }
  createPipe(readable, readableHook) {
    if (this.abortReason) throw this.abortReason;
    this.send(["pipe"]);
    let importId = this.imports.length;
    let entry = new ImportTableEntry(this, importId, false);
    this.imports.push(entry);
    let hook = new RpcImportHook(
      /*isPromise=*/
      false,
      entry
    );
    let writable = streamImpl.createWritableStreamFromHook(hook);
    readable.pipeTo(writable).catch(() => {
    }).finally(() => readableHook.dispose());
    return importId;
  }
  // Serializes and sends a message. Returns the byte length of the serialized message.
  send(msg) {
    if (this.abortReason !== void 0) {
      return 0;
    }
    let msgText;
    try {
      msgText = JSON.stringify(msg);
    } catch (err) {
      try {
        this.abort(err);
      } catch (err2) {
      }
      throw err;
    }
    this.transport.send(msgText).catch((err) => this.abort(err, false));
    return msgText.length;
  }
  sendCall(id, path, args) {
    if (this.abortReason) throw this.abortReason;
    let value = ["pipeline", id, path];
    if (args) {
      let devalue = Devaluator.devaluate(args.value, void 0, this, args);
      value.push(devalue[0]);
    }
    this.send(["push", value]);
    let entry = new ImportTableEntry(this, this.imports.length, false);
    this.imports.push(entry);
    return new RpcImportHook(
      /*isPromise=*/
      true,
      entry
    );
  }
  sendStream(id, path, args) {
    if (this.abortReason) throw this.abortReason;
    let value = ["pipeline", id, path];
    let devalue = Devaluator.devaluate(args.value, void 0, this, args);
    value.push(devalue[0]);
    let size = this.send(["stream", value]);
    let importId = this.imports.length;
    let entry = new ImportTableEntry(
      this,
      importId,
      /*pulling=*/
      true
    );
    entry.remoteRefcount = 0;
    entry.localRefcount = 1;
    this.imports.push(entry);
    let promise = entry.awaitResolution().then(
      (p) => {
        p.dispose();
        delete this.imports[importId];
      },
      (err) => {
        delete this.imports[importId];
        throw err;
      }
    );
    return { promise, size };
  }
  sendMap(id, path, captures, instructions) {
    if (this.abortReason) {
      for (let cap of captures) {
        cap.dispose();
      }
      throw this.abortReason;
    }
    let devaluedCaptures = captures.map((hook) => {
      let importId = this.getImport(hook);
      if (importId !== void 0) {
        return ["import", importId];
      } else {
        return ["export", this.exportStub(hook)];
      }
    });
    let value = ["remap", id, path, devaluedCaptures, instructions];
    this.send(["push", value]);
    let entry = new ImportTableEntry(this, this.imports.length, false);
    this.imports.push(entry);
    return new RpcImportHook(
      /*isPromise=*/
      true,
      entry
    );
  }
  sendPull(id) {
    if (this.abortReason) throw this.abortReason;
    this.send(["pull", id]);
  }
  sendRelease(id, remoteRefcount) {
    if (this.abortReason) return;
    this.send(["release", id, remoteRefcount]);
    delete this.imports[id];
  }
  abort(error, trySendAbortMessage = true) {
    if (this.abortReason !== void 0) return;
    this.cancelReadLoop(error);
    if (trySendAbortMessage) {
      try {
        this.transport.send(JSON.stringify(["abort", Devaluator.devaluate(error, void 0, this)])).catch((err) => {
        });
      } catch (err) {
      }
    }
    if (error === void 0) {
      error = "undefined";
    }
    this.abortReason = error;
    if (this.onBatchDone) {
      this.onBatchDone.reject(error);
    }
    if (this.transport.abort) {
      try {
        this.transport.abort(error);
      } catch (err) {
        Promise.resolve(err);
      }
    }
    for (let i in this.onBrokenCallbacks) {
      try {
        this.onBrokenCallbacks[i](error);
      } catch (err) {
        Promise.resolve(err);
      }
    }
    for (let i in this.imports) {
      this.imports[i].abort(error);
    }
    for (let i in this.exports) {
      this.exports[i].hook.dispose();
    }
  }
  async readLoop(abortPromise) {
    while (!this.abortReason) {
      let msg = JSON.parse(await Promise.race([this.transport.receive(), abortPromise]));
      if (this.abortReason) break;
      if (msg instanceof Array) {
        switch (msg[0]) {
          case "push":
            if (msg.length > 1) {
              let payload = new Evaluator(this).evaluate(msg[1]);
              let hook = new PayloadStubHook(payload);
              hook.ignoreUnhandledRejections();
              this.exports.push({ hook, refcount: 1 });
              continue;
            }
            break;
          case "stream": {
            if (msg.length > 1) {
              let payload = new Evaluator(this).evaluate(msg[1]);
              let hook = new PayloadStubHook(payload);
              hook.ignoreUnhandledRejections();
              let exportId = this.exports.length;
              this.exports.push({ hook, refcount: 1, autoRelease: true });
              this.ensureResolvingExport(exportId);
              continue;
            }
            break;
          }
          case "pipe": {
            let { readable, writable } = new TransformStream();
            let hook = streamImpl.createWritableStreamHook(writable);
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
              if (imp) {
                if (msg[0] == "resolve") {
                  imp.resolve(new PayloadStubHook(new Evaluator(this).evaluate(msg[2])));
                } else {
                  let payload = new Evaluator(this).evaluate(msg[2]);
                  payload.dispose();
                  imp.resolve(new ErrorStubHook(payload.value));
                }
              } else {
                if (msg[0] == "resolve") {
                  new Evaluator(this).evaluate(msg[2]).dispose();
                }
              }
              continue;
            }
            break;
          }
          case "release": {
            let exportId = msg[1];
            let refcount = msg[2];
            if (typeof exportId == "number" && typeof refcount == "number") {
              this.releaseExport(exportId, refcount);
              continue;
            }
            break;
          }
          case "abort": {
            let payload = new Evaluator(this).evaluate(msg[1]);
            payload.dispose();
            this.abort(payload, false);
            break;
          }
        }
      }
      throw new Error(`bad RPC message: ${JSON.stringify(msg)}`);
    }
  }
  async drain() {
    if (this.abortReason) {
      throw this.abortReason;
    }
    if (this.pullCount > 0) {
      let { promise, resolve, reject } = Promise.withResolvers();
      this.onBatchDone = { resolve, reject };
      await promise;
    }
  }
  getStats() {
    let result = { imports: 0, exports: 0 };
    for (let i in this.imports) {
      ++result.imports;
    }
    for (let i in this.exports) {
      ++result.exports;
    }
    return result;
  }
};
var RpcSession = class {
  #session;
  #mainStub;
  constructor(transport, localMain, options = {}) {
    let mainHook;
    if (localMain) {
      mainHook = new PayloadStubHook(RpcPayload.fromAppReturn(localMain));
    } else {
      mainHook = new ErrorStubHook(new Error("This connection has no main object."));
    }
    this.#session = new RpcSessionImpl(transport, mainHook, options);
    this.#mainStub = new RpcStub(this.#session.getMainImport());
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
  if (typeof webSocket === "string") {
    webSocket = new WebSocket(webSocket);
  }
  let transport = new WebSocketTransport(webSocket);
  let rpc = new RpcSession(transport, localMain, options);
  return rpc.getRemoteMain();
}
function newWorkersWebSocketRpcResponse(request, localMain, options) {
  if (request.headers.get("Upgrade")?.toLowerCase() !== "websocket") {
    return new Response("This endpoint only accepts WebSocket requests.", { status: 400 });
  }
  let pair = new WebSocketPair();
  let server = pair[0];
  server.accept();
  newWebSocketRpcSession(server, localMain, options);
  return new Response(null, {
    status: 101,
    webSocket: pair[1]
  });
}
var WebSocketTransport = class {
  constructor(webSocket) {
    this.#webSocket = webSocket;
    if (webSocket.readyState === WebSocket.CONNECTING) {
      this.#sendQueue = [];
      webSocket.addEventListener("open", (event) => {
        try {
          for (let message of this.#sendQueue) {
            webSocket.send(message);
          }
        } catch (err) {
          this.#receivedError(err);
        }
        this.#sendQueue = void 0;
      });
    }
    webSocket.addEventListener("message", (event) => {
      if (this.#error) ;
      else if (typeof event.data === "string") {
        if (this.#receiveResolver) {
          this.#receiveResolver(event.data);
          this.#receiveResolver = void 0;
          this.#receiveRejecter = void 0;
        } else {
          this.#receiveQueue.push(event.data);
        }
      } else {
        this.#receivedError(new TypeError("Received non-string message from WebSocket."));
      }
    });
    webSocket.addEventListener("close", (event) => {
      this.#receivedError(new Error(`Peer closed WebSocket: ${event.code} ${event.reason}`));
    });
    webSocket.addEventListener("error", (event) => {
      this.#receivedError(new Error(`WebSocket connection failed.`));
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
    if (this.#sendQueue === void 0) {
      this.#webSocket.send(message);
    } else {
      this.#sendQueue.push(message);
    }
  }
  async receive() {
    if (this.#receiveQueue.length > 0) {
      return this.#receiveQueue.shift();
    } else if (this.#error) {
      throw this.#error;
    } else {
      return new Promise((resolve, reject) => {
        this.#receiveResolver = resolve;
        this.#receiveRejecter = reject;
      });
    }
  }
  abort(reason) {
    let message;
    if (reason instanceof Error) {
      message = reason.message;
    } else {
      message = `${reason}`;
    }
    this.#webSocket.close(3e3, message);
    if (!this.#error) {
      this.#error = reason;
    }
  }
  #receivedError(reason) {
    if (!this.#error) {
      this.#error = reason;
      if (this.#receiveRejecter) {
        this.#receiveRejecter(reason);
        this.#receiveResolver = void 0;
        this.#receiveRejecter = void 0;
      }
    }
  }
};
var BatchServerTransport = class {
  constructor(batch) {
    this.#batchToReceive = batch;
  }
  #batchToSend = [];
  #batchToReceive;
  #allReceived = Promise.withResolvers();
  async send(message) {
    this.#batchToSend.push(message);
  }
  async receive() {
    let msg = this.#batchToReceive.shift();
    if (msg !== void 0) {
      return msg;
    } else {
      this.#allReceived.resolve();
      return new Promise((r) => {
      });
    }
  }
  abort(reason) {
    this.#allReceived.reject(reason);
  }
  whenAllReceived() {
    return this.#allReceived.promise;
  }
  getResponseBody() {
    return this.#batchToSend.join("\n");
  }
};
async function newHttpBatchRpcResponse(request, localMain, options) {
  if (request.method !== "POST") {
    return new Response("This endpoint only accepts POST requests.", { status: 405 });
  }
  let body = await request.text();
  let batch = body === "" ? [] : body.split("\n");
  let transport = new BatchServerTransport(batch);
  let rpc = new RpcSession(transport, localMain, options);
  await transport.whenAllReceived();
  await rpc.drain();
  return new Response(transport.getResponseBody());
}
var currentMapBuilder;
var MapBuilder = class {
  context;
  captureMap = /* @__PURE__ */ new Map();
  instructions = [];
  constructor(subject, path) {
    if (currentMapBuilder) {
      this.context = {
        parent: currentMapBuilder,
        captures: [],
        subject: currentMapBuilder.capture(subject),
        path
      };
    } else {
      this.context = {
        parent: void 0,
        captures: [],
        subject,
        path
      };
    }
    currentMapBuilder = this;
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
    this.instructions.push(devalued);
    if (this.context.parent) {
      this.context.parent.instructions.push(
        [
          "remap",
          this.context.subject,
          this.context.path,
          this.context.captures.map((cap) => ["import", cap]),
          this.instructions
        ]
      );
      return new MapVariableHook(this.context.parent, this.context.parent.instructions.length);
    } else {
      return this.context.subject.map(this.context.path, this.context.captures, this.instructions);
    }
  }
  pushCall(hook, path, params) {
    let devalued = Devaluator.devaluate(params.value, void 0, this, params);
    devalued = devalued[0];
    let subject = this.capture(hook.dup());
    this.instructions.push(["pipeline", subject, path, devalued]);
    return new MapVariableHook(this, this.instructions.length);
  }
  pushGet(hook, path) {
    let subject = this.capture(hook.dup());
    this.instructions.push(["pipeline", subject, path]);
    return new MapVariableHook(this, this.instructions.length);
  }
  capture(hook) {
    if (hook instanceof MapVariableHook && hook.mapper === this) {
      return hook.idx;
    }
    let result = this.captureMap.get(hook);
    if (result === void 0) {
      if (this.context.parent) {
        let parentIdx = this.context.parent.capture(hook);
        this.context.captures.push(parentIdx);
      } else {
        this.context.captures.push(hook);
      }
      result = -this.context.captures.length;
      this.captureMap.set(hook, result);
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
  let builder = new MapBuilder(hook, path);
  let result;
  try {
    result = RpcPayload.fromAppReturn(withCallInterceptor(builder.pushCall.bind(builder), () => {
      return func(new RpcPromise(builder.makeInput(), []));
    }));
  } finally {
    builder.unregister();
  }
  if (result instanceof Promise) {
    result.catch((err) => {
    });
    throw new Error("RPC map() callbacks cannot be async.");
  }
  return new RpcPromise(builder.makeOutput(result), []);
};
function throwMapperBuilderUseError() {
  throw new Error(
    "Attempted to use an abstract placeholder from a mapper function. Please make sure your map function has no side effects."
  );
}
var MapVariableHook = class extends StubHook {
  constructor(mapper, idx) {
    super();
    this.mapper = mapper;
    this.idx = idx;
  }
  // We don't have anything we actually need to dispose, so dup() can just return the same hook.
  dup() {
    return this;
  }
  dispose() {
  }
  get(path) {
    if (path.length == 0) {
      return this;
    } else if (currentMapBuilder) {
      return currentMapBuilder.pushGet(this, path);
    } else {
      throwMapperBuilderUseError();
    }
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
};
var MapApplicator = class {
  constructor(captures, input) {
    this.captures = captures;
    this.variables = [input];
  }
  variables;
  dispose() {
    for (let variable of this.variables) {
      variable.dispose();
    }
  }
  apply(instructions) {
    try {
      if (instructions.length < 1) {
        throw new Error("Invalid empty mapper function.");
      }
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
      for (let variable of this.variables) {
        variable.dispose();
      }
    }
  }
  importStub(idx) {
    throw new Error("A mapper function cannot refer to exports.");
  }
  importPromise(idx) {
    return this.importStub(idx);
  }
  getExport(idx) {
    if (idx < 0) {
      return this.captures[-idx - 1];
    } else {
      return this.variables[idx];
    }
  }
  getPipeReadable(exportId) {
    throw new Error("A mapper function cannot use pipe readables.");
  }
};
function applyMapToElement(input, parent, owner, captures, instructions) {
  let inputHook = new PayloadStubHook(RpcPayload.deepCopyFrom(input, parent, owner));
  let mapper = new MapApplicator(captures, inputHook);
  try {
    return mapper.apply(instructions);
  } finally {
    mapper.dispose();
  }
}
mapImpl.applyMap = (input, parent, owner, captures, instructions) => {
  try {
    let result;
    if (input instanceof RpcPromise) {
      throw new Error("applyMap() can't be called on RpcPromise");
    } else if (input instanceof Array) {
      let payloads = [];
      try {
        for (let elem of input) {
          payloads.push(applyMapToElement(elem, input, owner, captures, instructions));
        }
      } catch (err) {
        for (let payload of payloads) {
          payload.dispose();
        }
        throw err;
      }
      result = RpcPayload.fromArray(payloads);
    } else if (input === null || input === void 0) {
      result = RpcPayload.fromAppReturn(input);
    } else {
      result = applyMapToElement(input, parent, owner, captures, instructions);
    }
    return new PayloadStubHook(result);
  } finally {
    for (let cap of captures) {
      cap.dispose();
    }
  }
};
var WritableStreamStubHook = class _WritableStreamStubHook extends StubHook {
  state;
  // undefined when disposed
  // Creates a new WritableStreamStubHook that is not duplicated from an existing hook.
  static create(stream) {
    let writer = stream.getWriter();
    return new _WritableStreamStubHook({ refcount: 1, writer, closed: false });
  }
  constructor(state, dupFrom) {
    super();
    this.state = state;
    if (dupFrom) {
      ++state.refcount;
    }
  }
  getState() {
    if (this.state) {
      return this.state;
    } else {
      throw new Error("Attempted to use a WritableStreamStubHook after it was disposed.");
    }
  }
  call(path, args) {
    try {
      let state = this.getState();
      if (path.length !== 1 || typeof path[0] !== "string") {
        throw new Error("WritableStream stub only supports direct method calls");
      }
      const method = path[0];
      if (method !== "write" && method !== "close" && method !== "abort") {
        args.dispose();
        throw new Error(`Unknown WritableStream method: ${method}`);
      }
      if (method === "close" || method === "abort") {
        state.closed = true;
      }
      let func = state.writer[method];
      let promise = args.deliverCall(func, state.writer);
      return new PromiseStubHook(promise.then((payload) => new PayloadStubHook(payload)));
    } catch (err) {
      return new ErrorStubHook(err);
    }
  }
  map(path, captures, instructions) {
    for (let cap of captures) {
      cap.dispose();
    }
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
    this.state = void 0;
    if (state) {
      if (--state.refcount === 0) {
        if (!state.closed) {
          state.writer.abort(new Error("WritableStream RPC stub was disposed without calling close()")).catch(() => {
          });
        }
        state.writer.releaseLock();
      }
    }
  }
  onBroken(callback) {
  }
};
var INITIAL_WINDOW = 256 * 1024;
var MAX_WINDOW = 1024 * 1024 * 1024;
var MIN_WINDOW = 64 * 1024;
var STARTUP_GROWTH_FACTOR = 2;
var STEADY_GROWTH_FACTOR = 1.25;
var DECAY_FACTOR = 0.9;
var STARTUP_EXIT_ROUNDS = 3;
var FlowController = class {
  constructor(now) {
    this.now = now;
  }
  // The current window size in bytes. The sender blocks when bytesInFlight >= window.
  window = INITIAL_WINDOW;
  // Total bytes currently in flight (sent but not yet acked).
  bytesInFlight = 0;
  // Whether we're still in the startup phase.
  inStartupPhase = true;
  // ----- BDP estimation state (private) -----
  // Total bytes acked so far.
  delivered = 0;
  // Time of most recent ack.
  deliveredTime = 0;
  // Time when the very first ack was received.
  firstAckTime = 0;
  firstAckDelivered = 0;
  // Global minimum RTT observed (milliseconds).
  minRtt = Infinity;
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
    this.delivered += token.size;
    this.deliveredTime = ackTime;
    this.bytesInFlight -= token.size;
    let rtt = ackTime - token.sentTime;
    this.minRtt = Math.min(this.minRtt, rtt);
    if (this.firstAckTime === 0) {
      this.firstAckTime = ackTime;
      this.firstAckDelivered = this.delivered;
    } else {
      let baseTime;
      let baseDelivered;
      if (token.deliveredTimeAtSend === 0) {
        baseTime = this.firstAckTime;
        baseDelivered = this.firstAckDelivered;
      } else {
        baseTime = token.deliveredTimeAtSend;
        baseDelivered = token.deliveredAtSend;
      }
      let interval = ackTime - baseTime;
      let bytes = this.delivered - baseDelivered;
      let bandwidth = bytes / interval;
      let growthFactor = this.inStartupPhase ? STARTUP_GROWTH_FACTOR : STEADY_GROWTH_FACTOR;
      let newWindow = bandwidth * this.minRtt * growthFactor;
      newWindow = Math.min(newWindow, token.windowAtSend * growthFactor);
      if (token.windowFullAtSend) {
        newWindow = Math.max(newWindow, token.windowAtSend * DECAY_FACTOR);
      } else {
        newWindow = Math.max(newWindow, this.window);
      }
      this.window = Math.max(Math.min(newWindow, MAX_WINDOW), MIN_WINDOW);
      if (this.inStartupPhase && token.sentTime >= this.roundStartTime) {
        if (this.window > this.lastRoundWindow * STEADY_GROWTH_FACTOR) {
          this.roundsWithoutIncrease = 0;
        } else {
          if (++this.roundsWithoutIncrease >= STARTUP_EXIT_ROUNDS) {
            this.inStartupPhase = false;
          }
        }
        this.roundStartTime = ackTime;
        this.lastRoundWindow = this.window;
      }
    }
    return this.bytesInFlight < this.window;
  }
};
function createWritableStreamFromHook(hook) {
  let pendingError = void 0;
  let hookDisposed = false;
  let fc = new FlowController(() => performance.now());
  let windowResolve;
  let windowReject;
  const disposeHook = () => {
    if (!hookDisposed) {
      hookDisposed = true;
      hook.dispose();
    }
  };
  return new WritableStream({
    write(chunk, controller) {
      if (pendingError !== void 0) {
        throw pendingError;
      }
      const payload = RpcPayload.fromAppParams([chunk]);
      const { promise, size } = hook.stream(["write"], payload);
      if (size === void 0) {
        return promise.catch((err) => {
          if (pendingError === void 0) {
            pendingError = err;
          }
          throw err;
        });
      } else {
        let { token, shouldBlock } = fc.onSend(size);
        promise.then(() => {
          let hasCapacity = fc.onAck(token);
          if (hasCapacity && windowResolve) {
            windowResolve();
            windowResolve = void 0;
            windowReject = void 0;
          }
        }, (err) => {
          fc.onError(token);
          if (pendingError === void 0) {
            pendingError = err;
            controller.error(err);
            disposeHook();
          }
          if (windowReject) {
            windowReject(err);
            windowResolve = void 0;
            windowReject = void 0;
          }
        });
        if (shouldBlock) {
          return new Promise((resolve, reject) => {
            windowResolve = resolve;
            windowReject = reject;
          });
        }
      }
    },
    async close() {
      if (pendingError !== void 0) {
        disposeHook();
        throw pendingError;
      }
      const { promise } = hook.stream(["close"], RpcPayload.fromAppParams([]));
      try {
        await promise;
      } catch (err) {
        throw pendingError ?? err;
      } finally {
        disposeHook();
      }
    },
    abort(reason) {
      if (pendingError !== void 0) {
        return;
      }
      pendingError = reason ?? new Error("WritableStream was aborted");
      if (windowReject) {
        windowReject(pendingError);
        windowResolve = void 0;
        windowReject = void 0;
      }
      const { promise } = hook.stream(["abort"], RpcPayload.fromAppParams([reason]));
      promise.then(() => disposeHook(), () => disposeHook());
    }
  });
}
var ReadableStreamStubHook = class _ReadableStreamStubHook extends StubHook {
  state;
  // undefined when disposed
  // Creates a new ReadableStreamStubHook.
  static create(stream) {
    return new _ReadableStreamStubHook({ refcount: 1, stream, canceled: false });
  }
  constructor(state, dupFrom) {
    super();
    this.state = state;
    if (dupFrom) {
      ++state.refcount;
    }
  }
  call(path, args) {
    args.dispose();
    return new ErrorStubHook(new Error("Cannot call methods on a ReadableStream stub"));
  }
  map(path, captures, instructions) {
    for (let cap of captures) {
      cap.dispose();
    }
    return new ErrorStubHook(new Error("Cannot use map() on a ReadableStream"));
  }
  get(path) {
    return new ErrorStubHook(new Error("Cannot access properties on a ReadableStream stub"));
  }
  dup() {
    let state = this.state;
    if (!state) {
      throw new Error("Attempted to dup a ReadableStreamStubHook after it was disposed.");
    }
    return new _ReadableStreamStubHook(state, this);
  }
  pull() {
    return Promise.reject(new Error("Cannot pull a ReadableStream stub"));
  }
  ignoreUnhandledRejections() {
  }
  dispose() {
    let state = this.state;
    this.state = void 0;
    if (state) {
      if (--state.refcount === 0) {
        if (!state.canceled) {
          state.canceled = true;
          if (!state.stream.locked) {
            state.stream.cancel(
              new Error("ReadableStream RPC stub was disposed without being consumed")
            ).catch(() => {
            });
          }
        }
      }
    }
  }
  onBroken(callback) {
  }
};
streamImpl.createWritableStreamHook = WritableStreamStubHook.create;
streamImpl.createWritableStreamFromHook = createWritableStreamFromHook;
streamImpl.createReadableStreamHook = ReadableStreamStubHook.create;
async function newWorkersRpcResponse(request, localMain) {
  if (request.method === "POST") {
    let response = await newHttpBatchRpcResponse(request, localMain);
    response.headers.set("Access-Control-Allow-Origin", "*");
    return response;
  } else if (request.headers.get("Upgrade")?.toLowerCase() === "websocket") {
    return newWorkersWebSocketRpcResponse(request, localMain);
  } else {
    return new Response("This endpoint only accepts POST or WebSocket requests.", { status: 400 });
  }
}

// templates/remoteBindings/ProxyServerWorker.ts
import { EmailMessage } from "cloudflare:email";
var BindingNotFoundError = class extends Error {
  constructor(name) {
    super(`Binding ${name ? `"${name}"` : ""} not found`);
  }
};
function getExposedJSRPCBinding(request, env) {
  const url = new URL(request.url);
  const bindingName = url.searchParams.get("MF-Binding");
  if (!bindingName) {
    throw new BindingNotFoundError();
  }
  const targetBinding = env[bindingName];
  if (!targetBinding) {
    throw new BindingNotFoundError(bindingName);
  }
  if (targetBinding.constructor.name === "SendEmail") {
    return {
      async send(e) {
        if ("EmailMessage::raw" in e) {
          const message = new EmailMessage(
            e.from,
            e.to,
            e["EmailMessage::raw"]
          );
          return targetBinding.send(message);
        } else {
          return targetBinding.send(e);
        }
      }
    };
  }
  if (url.searchParams.has("MF-Dispatch-Namespace-Options")) {
    const { name, args, options } = JSON.parse(
      url.searchParams.get("MF-Dispatch-Namespace-Options")
    );
    return targetBinding.get(name, args, options);
  }
  return targetBinding;
}
function getExposedFetcher(request, env) {
  const bindingName = request.headers.get("MF-Binding");
  if (!bindingName) {
    throw new BindingNotFoundError();
  }
  const targetBinding = env[bindingName];
  if (!targetBinding) {
    throw new BindingNotFoundError(bindingName);
  }
  const dispatchNamespaceOptions = request.headers.get(
    "MF-Dispatch-Namespace-Options"
  );
  if (dispatchNamespaceOptions) {
    const { name, args, options } = JSON.parse(dispatchNamespaceOptions);
    return targetBinding.get(name, args, options);
  }
  return targetBinding;
}
function isJSRPCBinding(request) {
  const url = new URL(request.url);
  return request.headers.has("Upgrade") && url.searchParams.has("MF-Binding");
}
var ProxyServerWorker_default = {
  async fetch(request, env) {
    try {
      if (isJSRPCBinding(request)) {
        return await newWorkersRpcResponse(
          request,
          getExposedJSRPCBinding(request, env)
        );
      } else {
        const fetcher = getExposedFetcher(request, env);
        const originalHeaders = new Headers();
        for (const [name, value] of request.headers) {
          if (name.startsWith("mf-header-")) {
            originalHeaders.set(name.slice("mf-header-".length), value);
          } else if (name === "upgrade") {
            originalHeaders.set(name, value);
          }
        }
        return await fetcher.fetch(
          request.headers.get("MF-URL") ?? "http://example.com",
          new Request(request, {
            redirect: "manual",
            headers: originalHeaders
          })
        );
      }
    } catch (e) {
      if (e instanceof BindingNotFoundError) {
        return new Response(e.message, { status: 400 });
      }
      return new Response(e.message, { status: 500 });
    }
  }
};
export {
  ProxyServerWorker_default as default
};
