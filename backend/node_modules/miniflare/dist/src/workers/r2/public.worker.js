// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/middleware/cors/index.js
var cors = (options) => {
  let opts = {
    ...{
      origin: "*",
      allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
      allowHeaders: [],
      exposeHeaders: []
    },
    ...options
  }, findAllowOrigin = /* @__PURE__ */ ((optsOrigin) => typeof optsOrigin == "string" ? optsOrigin === "*" ? () => optsOrigin : (origin) => optsOrigin === origin ? origin : null : typeof optsOrigin == "function" ? optsOrigin : (origin) => optsOrigin.includes(origin) ? origin : null)(opts.origin), findAllowMethods = ((optsAllowMethods) => typeof optsAllowMethods == "function" ? optsAllowMethods : Array.isArray(optsAllowMethods) ? () => optsAllowMethods : () => [])(opts.allowMethods);
  return async function(c, next) {
    function set(key, value) {
      c.res.headers.set(key, value);
    }
    let allowOrigin = await findAllowOrigin(c.req.header("origin") || "", c);
    if (allowOrigin && set("Access-Control-Allow-Origin", allowOrigin), opts.credentials && set("Access-Control-Allow-Credentials", "true"), opts.exposeHeaders?.length && set("Access-Control-Expose-Headers", opts.exposeHeaders.join(",")), c.req.method === "OPTIONS") {
      opts.origin !== "*" && set("Vary", "Origin"), opts.maxAge != null && set("Access-Control-Max-Age", opts.maxAge.toString());
      let allowMethods = await findAllowMethods(c.req.header("origin") || "", c);
      allowMethods.length && set("Access-Control-Allow-Methods", allowMethods.join(","));
      let headers = opts.allowHeaders;
      if (!headers?.length) {
        let requestHeaders = c.req.header("Access-Control-Request-Headers");
        requestHeaders && (headers = requestHeaders.split(/\s*,\s*/));
      }
      return headers?.length && (set("Access-Control-Allow-Headers", headers.join(",")), c.res.headers.append("Vary", "Access-Control-Request-Headers")), c.res.headers.delete("Content-Length"), c.res.headers.delete("Content-Type"), new Response(null, {
        headers: c.res.headers,
        status: 204,
        statusText: "No Content"
      });
    }
    await next(), opts.origin !== "*" && c.header("Vary", "Origin", { append: !0 });
  };
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => (context, next) => {
  let index = -1;
  return dispatch(0);
  async function dispatch(i) {
    if (i <= index)
      throw new Error("next() called multiple times");
    index = i;
    let res, isError = !1, handler;
    if (middleware[i] ? (handler = middleware[i][0][0], context.req.routeIndex = i) : handler = i === middleware.length && next || void 0, handler)
      try {
        res = await handler(context, () => dispatch(i + 1));
      } catch (err) {
        if (err instanceof Error && onError)
          context.error = err, res = await onError(err, context), isError = !0;
        else
          throw err;
      }
    else
      context.finalized === !1 && onNotFound && (res = await onNotFound(context));
    return res && (context.finalized === !1 || isError) && (context.res = res), context;
  }
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/request/constants.js
var GET_MATCH_RESULT = /* @__PURE__ */ Symbol();

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/utils/body.js
var parseBody = async (request, options = /* @__PURE__ */ Object.create(null)) => {
  let { all = !1, dot = !1 } = options, contentType = (request instanceof HonoRequest ? request.raw.headers : request.headers).get("Content-Type");
  return contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded") ? parseFormData(request, { all, dot }) : {};
};
async function parseFormData(request, options) {
  let formData = await request.formData();
  return formData ? convertFormDataToBodyData(formData, options) : {};
}
function convertFormDataToBodyData(formData, options) {
  let form = /* @__PURE__ */ Object.create(null);
  return formData.forEach((value, key) => {
    options.all || key.endsWith("[]") ? handleParsingAllValues(form, key, value) : form[key] = value;
  }), options.dot && Object.entries(form).forEach(([key, value]) => {
    key.includes(".") && (handleParsingNestedValues(form, key, value), delete form[key]);
  }), form;
}
var handleParsingAllValues = (form, key, value) => {
  form[key] !== void 0 ? Array.isArray(form[key]) ? form[key].push(value) : form[key] = [form[key], value] : key.endsWith("[]") ? form[key] = [value] : form[key] = value;
}, handleParsingNestedValues = (form, key, value) => {
  let nestedForm = form, keys = key.split(".");
  keys.forEach((key2, index) => {
    index === keys.length - 1 ? nestedForm[key2] = value : ((!nestedForm[key2] || typeof nestedForm[key2] != "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) && (nestedForm[key2] = /* @__PURE__ */ Object.create(null)), nestedForm = nestedForm[key2]);
  });
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/utils/url.js
var tryDecode = (str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decoder(match);
      } catch {
        return match;
      }
    });
  }
}, tryDecodeURI = (str) => tryDecode(str, decodeURI), getPath = (request) => {
  let url = request.url, start = url.indexOf("/", url.indexOf(":") + 4), i = start;
  for (; i < url.length; i++) {
    let charCode = url.charCodeAt(i);
    if (charCode === 37) {
      let queryIndex = url.indexOf("?", i), hashIndex = url.indexOf("#", i), end = queryIndex === -1 ? hashIndex === -1 ? void 0 : hashIndex : hashIndex === -1 ? queryIndex : Math.min(queryIndex, hashIndex), path = url.slice(start, end);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63 || charCode === 35)
      break;
  }
  return url.slice(start, i);
};
var getPathNoStrict = (request) => {
  let result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
}, mergePath = (base, sub, ...rest) => (rest.length && (sub = mergePath(sub, ...rest)), `${base?.[0] === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${base?.at(-1) === "/" ? "" : "/"}${sub?.[0] === "/" ? sub.slice(1) : sub}`}`);
var _decodeURI = (value) => /[%+]/.test(value) ? (value.indexOf("+") !== -1 && (value = value.replace(/\+/g, " ")), value.indexOf("%") !== -1 ? tryDecode(value, decodeURIComponent_) : value) : value, _getQueryParam = (url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf("?", 8);
    if (keyIndex2 === -1)
      return;
    for (url.startsWith(key, keyIndex2 + 1) || (keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1)); keyIndex2 !== -1; ) {
      let trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        let valueIndex = keyIndex2 + key.length + 2, endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode))
        return "";
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    if (encoded = /[%+]/.test(url), !encoded)
      return;
  }
  let results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  for (; keyIndex !== -1; ) {
    let nextKeyIndex = url.indexOf("&", keyIndex + 1), valueIndex = url.indexOf("=", keyIndex);
    valueIndex > nextKeyIndex && nextKeyIndex !== -1 && (valueIndex = -1);
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded && (name = _decodeURI(name)), keyIndex = nextKeyIndex, name === "")
      continue;
    let value;
    valueIndex === -1 ? value = "" : (value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex), encoded && (value = _decodeURI(value))), multiple ? (results[name] && Array.isArray(results[name]) || (results[name] = []), results[name].push(value)) : results[name] ??= value;
  }
  return key ? results[key] : results;
}, getQueryParam = _getQueryParam, getQueryParams = (url, key) => _getQueryParam(url, key, !0), decodeURIComponent_ = decodeURIComponent;

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/request.js
var tryDecodeURIComponent = (str) => tryDecode(str, decodeURIComponent_), HonoRequest = class {
  /**
   * `.raw` can get the raw Request object.
   *
   * @see {@link https://hono.dev/docs/api/request#raw}
   *
   * @example
   * ```ts
   * // For Cloudflare Workers
   * app.post('/', async (c) => {
   *   const metadata = c.req.raw.cf?.hostMetadata?
   *   ...
   * })
   * ```
   */
  raw;
  #validatedData;
  // Short name of validatedData
  #matchResult;
  routeIndex = 0;
  /**
   * `.path` can get the pathname of the request.
   *
   * @see {@link https://hono.dev/docs/api/request#path}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const pathname = c.req.path // `/about/me`
   * })
   * ```
   */
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request, this.path = path, this.#matchResult = matchResult, this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    let paramKey = this.#matchResult[0][this.routeIndex][1][key], param = this.#getParamValue(paramKey);
    return param && /\%/.test(param) ? tryDecodeURIComponent(param) : param;
  }
  #getAllDecodedParams() {
    let decoded = {}, keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (let key of keys) {
      let value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      value !== void 0 && (decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value);
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name)
      return this.raw.headers.get(name) ?? void 0;
    let headerData = {};
    return this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    }), headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  #cachedBody = (key) => {
    let { bodyCache, raw: raw2 } = this, cachedBody = bodyCache[key];
    if (cachedBody)
      return cachedBody;
    let anyCachedKey = Object.keys(bodyCache)[0];
    return anyCachedKey ? bodyCache[anyCachedKey].then((body) => (anyCachedKey === "json" && (body = JSON.stringify(body)), new Response(body)[key]())) : bodyCache[key] = raw2[key]();
  };
  /**
   * `.json()` can parse Request body of type `application/json`
   *
   * @see {@link https://hono.dev/docs/api/request#json}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.json()
   * })
   * ```
   */
  json() {
    return this.#cachedBody("text").then((text) => JSON.parse(text));
  }
  /**
   * `.text()` can parse Request body of type `text/plain`
   *
   * @see {@link https://hono.dev/docs/api/request#text}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.text()
   * })
   * ```
   */
  text() {
    return this.#cachedBody("text");
  }
  /**
   * `.arrayBuffer()` parse Request body as an `ArrayBuffer`
   *
   * @see {@link https://hono.dev/docs/api/request#arraybuffer}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.arrayBuffer()
   * })
   * ```
   */
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  /**
   * Parses the request body as a `Blob`.
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.blob();
   * });
   * ```
   * @see https://hono.dev/docs/api/request#blob
   */
  blob() {
    return this.#cachedBody("blob");
  }
  /**
   * Parses the request body as `FormData`.
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.formData();
   * });
   * ```
   * @see https://hono.dev/docs/api/request#formdata
   */
  formData() {
    return this.#cachedBody("formData");
  }
  /**
   * Adds validated data to the request.
   *
   * @param target - The target of the validation.
   * @param data - The validated data to add.
   */
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  /**
   * `.url()` can get the request url strings.
   *
   * @see {@link https://hono.dev/docs/api/request#url}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const url = c.req.url // `http://localhost:8787/about/me`
   *   ...
   * })
   * ```
   */
  get url() {
    return this.raw.url;
  }
  /**
   * `.method()` can get the method name of the request.
   *
   * @see {@link https://hono.dev/docs/api/request#method}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const method = c.req.method // `GET`
   * })
   * ```
   */
  get method() {
    return this.raw.method;
  }
  get [GET_MATCH_RESULT]() {
    return this.#matchResult;
  }
  /**
   * `.matchedRoutes()` can return a matched route in the handler
   *
   * @deprecated
   *
   * Use matchedRoutes helper defined in "hono/route" instead.
   *
   * @see {@link https://hono.dev/docs/api/request#matchedroutes}
   *
   * @example
   * ```ts
   * app.use('*', async function logger(c, next) {
   *   await next()
   *   c.req.matchedRoutes.forEach(({ handler, method, path }, i) => {
   *     const name = handler.name || (handler.length < 2 ? '[handler]' : '[middleware]')
   *     console.log(
   *       method,
   *       ' ',
   *       path,
   *       ' '.repeat(Math.max(10 - path.length, 0)),
   *       name,
   *       i === c.req.routeIndex ? '<- respond from here' : ''
   *     )
   *   })
   * })
   * ```
   */
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  /**
   * `routePath()` can retrieve the path registered within the handler
   *
   * @deprecated
   *
   * Use routePath helper defined in "hono/route" instead.
   *
   * @see {@link https://hono.dev/docs/api/request#routepath}
   *
   * @example
   * ```ts
   * app.get('/posts/:id', (c) => {
   *   return c.json({ path: c.req.routePath })
   * })
   * ```
   */
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/utils/html.js
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
}, raw = (value, callbacks) => {
  let escapedString = new String(value);
  return escapedString.isEscaped = !0, escapedString.callbacks = callbacks, escapedString;
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
  typeof str == "object" && !(str instanceof String) && (str instanceof Promise || (str = str.toString()), str instanceof Promise && (str = await str));
  let callbacks = str.callbacks;
  if (!callbacks?.length)
    return Promise.resolve(str);
  buffer ? buffer[0] += str : buffer = [str];
  let resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, !1, context, buffer))
    ).then(() => buffer[0])
  );
  return preserveCallbacks ? raw(await resStr, callbacks) : resStr;
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8", setDefaultContentType = (contentType, headers) => ({
  "Content-Type": contentType,
  ...headers
}), createResponseInstance = (body, init) => new Response(body, init), Context = class {
  #rawRequest;
  #req;
  /**
   * `.env` can get bindings (environment variables, secrets, KV namespaces, D1 database, R2 bucket etc.) in Cloudflare Workers.
   *
   * @see {@link https://hono.dev/docs/api/context#env}
   *
   * @example
   * ```ts
   * // Environment object for Cloudflare Workers
   * app.get('*', async c => {
   *   const counter = c.env.COUNTER
   * })
   * ```
   */
  env = {};
  #var;
  finalized = !1;
  /**
   * `.error` can get the error object from the middleware if the Handler throws an error.
   *
   * @see {@link https://hono.dev/docs/api/context#error}
   *
   * @example
   * ```ts
   * app.use('*', async (c, next) => {
   *   await next()
   *   if (c.error) {
   *     // do something...
   *   }
   * })
   * ```
   */
  error;
  #status;
  #executionCtx;
  #res;
  #layout;
  #renderer;
  #notFoundHandler;
  #preparedHeaders;
  #matchResult;
  #path;
  /**
   * Creates an instance of the Context class.
   *
   * @param req - The Request object.
   * @param options - Optional configuration options for the context.
   */
  constructor(req, options) {
    this.#rawRequest = req, options && (this.#executionCtx = options.executionCtx, this.env = options.env, this.#notFoundHandler = options.notFoundHandler, this.#path = options.path, this.#matchResult = options.matchResult);
  }
  /**
   * `.req` is the instance of {@link HonoRequest}.
   */
  get req() {
    return this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult), this.#req;
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#event}
   * The FetchEvent associated with the current request.
   *
   * @throws Will throw an error if the context does not have a FetchEvent.
   */
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx)
      return this.#executionCtx;
    throw Error("This context has no FetchEvent");
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#executionctx}
   * The ExecutionContext associated with the current request.
   *
   * @throws Will throw an error if the context does not have an ExecutionContext.
   */
  get executionCtx() {
    if (this.#executionCtx)
      return this.#executionCtx;
    throw Error("This context has no ExecutionContext");
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#res}
   * The Response object for the current request.
   */
  get res() {
    return this.#res ||= createResponseInstance(null, {
      headers: this.#preparedHeaders ??= new Headers()
    });
  }
  /**
   * Sets the Response object for the current request.
   *
   * @param _res - The Response object to set.
   */
  set res(_res) {
    if (this.#res && _res) {
      _res = createResponseInstance(_res.body, _res);
      for (let [k, v] of this.#res.headers.entries())
        if (k !== "content-type")
          if (k === "set-cookie") {
            let cookies = this.#res.headers.getSetCookie();
            _res.headers.delete("set-cookie");
            for (let cookie of cookies)
              _res.headers.append("set-cookie", cookie);
          } else
            _res.headers.set(k, v);
    }
    this.#res = _res, this.finalized = !0;
  }
  /**
   * `.render()` can create a response within a layout.
   *
   * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
   *
   * @example
   * ```ts
   * app.get('/', (c) => {
   *   return c.render('Hello!')
   * })
   * ```
   */
  render = (...args) => (this.#renderer ??= (content) => this.html(content), this.#renderer(...args));
  /**
   * Sets the layout for the response.
   *
   * @param layout - The layout to set.
   * @returns The layout function.
   */
  setLayout = (layout) => this.#layout = layout;
  /**
   * Gets the current layout for the response.
   *
   * @returns The current layout function.
   */
  getLayout = () => this.#layout;
  /**
   * `.setRenderer()` can set the layout in the custom middleware.
   *
   * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
   *
   * @example
   * ```tsx
   * app.use('*', async (c, next) => {
   *   c.setRenderer((content) => {
   *     return c.html(
   *       <html>
   *         <body>
   *           <p>{content}</p>
   *         </body>
   *       </html>
   *     )
   *   })
   *   await next()
   * })
   * ```
   */
  setRenderer = (renderer) => {
    this.#renderer = renderer;
  };
  /**
   * `.header()` can set headers.
   *
   * @see {@link https://hono.dev/docs/api/context#header}
   *
   * @example
   * ```ts
   * app.get('/welcome', (c) => {
   *   // Set headers
   *   c.header('X-Message', 'Hello!')
   *   c.header('Content-Type', 'text/plain')
   *
   *   return c.body('Thank you for coming')
   * })
   * ```
   */
  header = (name, value, options) => {
    this.finalized && (this.#res = createResponseInstance(this.#res.body, this.#res));
    let headers = this.#res ? this.#res.headers : this.#preparedHeaders ??= new Headers();
    value === void 0 ? headers.delete(name) : options?.append ? headers.append(name, value) : headers.set(name, value);
  };
  status = (status) => {
    this.#status = status;
  };
  /**
   * `.set()` can set the value specified by the key.
   *
   * @see {@link https://hono.dev/docs/api/context#set-get}
   *
   * @example
   * ```ts
   * app.use('*', async (c, next) => {
   *   c.set('message', 'Hono is hot!!')
   *   await next()
   * })
   * ```
   */
  set = (key, value) => {
    this.#var ??= /* @__PURE__ */ new Map(), this.#var.set(key, value);
  };
  /**
   * `.get()` can use the value specified by the key.
   *
   * @see {@link https://hono.dev/docs/api/context#set-get}
   *
   * @example
   * ```ts
   * app.get('/', (c) => {
   *   const message = c.get('message')
   *   return c.text(`The message is "${message}"`)
   * })
   * ```
   */
  get = (key) => this.#var ? this.#var.get(key) : void 0;
  /**
   * `.var` can access the value of a variable.
   *
   * @see {@link https://hono.dev/docs/api/context#var}
   *
   * @example
   * ```ts
   * const result = c.var.client.oneMethod()
   * ```
   */
  // c.var.propName is a read-only
  get var() {
    return this.#var ? Object.fromEntries(this.#var) : {};
  }
  #newResponse(data, arg, headers) {
    let responseHeaders = this.#res ? new Headers(this.#res.headers) : this.#preparedHeaders ?? new Headers();
    if (typeof arg == "object" && "headers" in arg) {
      let argHeaders = arg.headers instanceof Headers ? arg.headers : new Headers(arg.headers);
      for (let [key, value] of argHeaders)
        key.toLowerCase() === "set-cookie" ? responseHeaders.append(key, value) : responseHeaders.set(key, value);
    }
    if (headers)
      for (let [k, v] of Object.entries(headers))
        if (typeof v == "string")
          responseHeaders.set(k, v);
        else {
          responseHeaders.delete(k);
          for (let v2 of v)
            responseHeaders.append(k, v2);
        }
    let status = typeof arg == "number" ? arg : arg?.status ?? this.#status;
    return createResponseInstance(data, { status, headers: responseHeaders });
  }
  newResponse = (...args) => this.#newResponse(...args);
  /**
   * `.body()` can return the HTTP response.
   * You can set headers with `.header()` and set HTTP status code with `.status`.
   * This can also be set in `.text()`, `.json()` and so on.
   *
   * @see {@link https://hono.dev/docs/api/context#body}
   *
   * @example
   * ```ts
   * app.get('/welcome', (c) => {
   *   // Set headers
   *   c.header('X-Message', 'Hello!')
   *   c.header('Content-Type', 'text/plain')
   *   // Set HTTP status code
   *   c.status(201)
   *
   *   // Return the response body
   *   return c.body('Thank you for coming')
   * })
   * ```
   */
  body = (data, arg, headers) => this.#newResponse(data, arg, headers);
  /**
   * `.text()` can render text as `Content-Type:text/plain`.
   *
   * @see {@link https://hono.dev/docs/api/context#text}
   *
   * @example
   * ```ts
   * app.get('/say', (c) => {
   *   return c.text('Hello!')
   * })
   * ```
   */
  text = (text, arg, headers) => !this.#preparedHeaders && !this.#status && !arg && !headers && !this.finalized ? new Response(text) : this.#newResponse(
    text,
    arg,
    setDefaultContentType(TEXT_PLAIN, headers)
  );
  /**
   * `.json()` can render JSON as `Content-Type:application/json`.
   *
   * @see {@link https://hono.dev/docs/api/context#json}
   *
   * @example
   * ```ts
   * app.get('/api', (c) => {
   *   return c.json({ message: 'Hello!' })
   * })
   * ```
   */
  json = (object, arg, headers) => this.#newResponse(
    JSON.stringify(object),
    arg,
    setDefaultContentType("application/json", headers)
  );
  html = (html, arg, headers) => {
    let res = (html2) => this.#newResponse(html2, arg, setDefaultContentType("text/html; charset=UTF-8", headers));
    return typeof html == "object" ? resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, !1, {}).then(res) : res(html);
  };
  /**
   * `.redirect()` can Redirect, default status code is 302.
   *
   * @see {@link https://hono.dev/docs/api/context#redirect}
   *
   * @example
   * ```ts
   * app.get('/redirect', (c) => {
   *   return c.redirect('/')
   * })
   * app.get('/redirect-permanently', (c) => {
   *   return c.redirect('/', 301)
   * })
   * ```
   */
  redirect = (location, status) => {
    let locationString = String(location);
    return this.header(
      "Location",
      // Multibyes should be encoded
      // eslint-disable-next-line no-control-regex
      /[^\x00-\xFF]/.test(locationString) ? encodeURI(locationString) : locationString
    ), this.newResponse(null, status ?? 302);
  };
  /**
   * `.notFound()` can return the Not Found Response.
   *
   * @see {@link https://hono.dev/docs/api/context#notfound}
   *
   * @example
   * ```ts
   * app.get('/notfound', (c) => {
   *   return c.notFound()
   * })
   * ```
   */
  notFound = () => (this.#notFoundHandler ??= () => createResponseInstance(), this.#notFoundHandler(this));
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/router.js
var METHOD_NAME_ALL = "ALL", METHOD_NAME_ALL_LOWERCASE = "all", METHODS = ["get", "post", "put", "delete", "options", "patch"];
var UnsupportedPathError = class extends Error {
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/utils/constants.js
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/hono-base.js
var notFoundHandler = (c) => c.text("404 Not Found", 404), errorHandler = (err, c) => {
  if ("getResponse" in err) {
    let res = err.getResponse();
    return c.newResponse(res.body, res);
  }
  return console.error(err), c.text("Internal Server Error", 500);
}, Hono = class _Hono {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  /*
    This class is like an abstract class and does not have a router.
    To use it, inherit the class and implement router in the constructor.
  */
  router;
  getPath;
  // Cannot use `#` because it requires visibility at JavaScript runtime.
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    [...METHODS, METHOD_NAME_ALL_LOWERCASE].forEach((method) => {
      this[method] = (args1, ...args) => (typeof args1 == "string" ? this.#path = args1 : this.#addRoute(method, this.#path, args1), args.forEach((handler) => {
        this.#addRoute(method, this.#path, handler);
      }), this);
    }), this.on = (method, path, ...handlers) => {
      for (let p of [path].flat()) {
        this.#path = p;
        for (let m of [method].flat())
          handlers.map((handler) => {
            this.#addRoute(m.toUpperCase(), this.#path, handler);
          });
      }
      return this;
    }, this.use = (arg1, ...handlers) => (typeof arg1 == "string" ? this.#path = arg1 : (this.#path = "*", handlers.unshift(arg1)), handlers.forEach((handler) => {
      this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
    }), this);
    let { strict, ...optionsWithoutStrict } = options;
    Object.assign(this, optionsWithoutStrict), this.getPath = strict ?? !0 ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    let clone = new _Hono({
      router: this.router,
      getPath: this.getPath
    });
    return clone.errorHandler = this.errorHandler, clone.#notFoundHandler = this.#notFoundHandler, clone.routes = this.routes, clone;
  }
  #notFoundHandler = notFoundHandler;
  // Cannot use `#` because it requires visibility at JavaScript runtime.
  errorHandler = errorHandler;
  /**
   * `.route()` allows grouping other Hono instance in routes.
   *
   * @see {@link https://hono.dev/docs/api/routing#grouping}
   *
   * @param {string} path - base Path
   * @param {Hono} app - other Hono instance
   * @returns {Hono} routed Hono instance
   *
   * @example
   * ```ts
   * const app = new Hono()
   * const app2 = new Hono()
   *
   * app2.get("/user", (c) => c.text("user"))
   * app.route("/api", app2) // GET /api/user
   * ```
   */
  route(path, app2) {
    let subApp = this.basePath(path);
    return app2.routes.map((r) => {
      let handler;
      app2.errorHandler === errorHandler ? handler = r.handler : (handler = async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res, handler[COMPOSED_HANDLER] = r.handler), subApp.#addRoute(r.method, r.path, handler);
    }), this;
  }
  /**
   * `.basePath()` allows base paths to be specified.
   *
   * @see {@link https://hono.dev/docs/api/routing#base-path}
   *
   * @param {string} path - base Path
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * const api = new Hono().basePath('/api')
   * ```
   */
  basePath(path) {
    let subApp = this.#clone();
    return subApp._basePath = mergePath(this._basePath, path), subApp;
  }
  /**
   * `.onError()` handles an error and returns a customized Response.
   *
   * @see {@link https://hono.dev/docs/api/hono#error-handling}
   *
   * @param {ErrorHandler} handler - request Handler for error
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * app.onError((err, c) => {
   *   console.error(`${err}`)
   *   return c.text('Custom Error Message', 500)
   * })
   * ```
   */
  onError = (handler) => (this.errorHandler = handler, this);
  /**
   * `.notFound()` allows you to customize a Not Found Response.
   *
   * @see {@link https://hono.dev/docs/api/hono#not-found}
   *
   * @param {NotFoundHandler} handler - request handler for not-found
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * app.notFound((c) => {
   *   return c.text('Custom 404 Message', 404)
   * })
   * ```
   */
  notFound = (handler) => (this.#notFoundHandler = handler, this);
  /**
   * `.mount()` allows you to mount applications built with other frameworks into your Hono application.
   *
   * @see {@link https://hono.dev/docs/api/hono#mount}
   *
   * @param {string} path - base Path
   * @param {Function} applicationHandler - other Request Handler
   * @param {MountOptions} [options] - options of `.mount()`
   * @returns {Hono} mounted Hono instance
   *
   * @example
   * ```ts
   * import { Router as IttyRouter } from 'itty-router'
   * import { Hono } from 'hono'
   * // Create itty-router application
   * const ittyRouter = IttyRouter()
   * // GET /itty-router/hello
   * ittyRouter.get('/hello', () => new Response('Hello from itty-router'))
   *
   * const app = new Hono()
   * app.mount('/itty-router', ittyRouter.handle)
   * ```
   *
   * @example
   * ```ts
   * const app = new Hono()
   * // Send the request to another application without modification.
   * app.mount('/app', anotherApp, {
   *   replaceRequest: (req) => req,
   * })
   * ```
   */
  mount(path, applicationHandler, options) {
    let replaceRequest, optionHandler;
    options && (typeof options == "function" ? optionHandler = options : (optionHandler = options.optionHandler, options.replaceRequest === !1 ? replaceRequest = (request) => request : replaceRequest = options.replaceRequest));
    let getOptions = optionHandler ? (c) => {
      let options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      let mergedPath = mergePath(this._basePath, path), pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        let url = new URL(request.url);
        return url.pathname = url.pathname.slice(pathPrefixLength) || "/", new Request(url, request);
      };
    })();
    let handler = async (c, next) => {
      let res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res)
        return res;
      await next();
    };
    return this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler), this;
  }
  #addRoute(method, path, handler) {
    method = method.toUpperCase(), path = mergePath(this._basePath, path);
    let r = { basePath: this._basePath, path, method, handler };
    this.router.add(method, path, [handler, r]), this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error)
      return this.errorHandler(err, c);
    throw err;
  }
  #dispatch(request, executionCtx, env, method) {
    if (method === "HEAD")
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env, "GET")))();
    let path = this.getPath(request, { env }), matchResult = this.router.match(method, path), c = new Context(request, {
      path,
      matchResult,
      env,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))
      ).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    let composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        let context = await composed(c);
        if (!context.finalized)
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        return context.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  /**
   * `.fetch()` will be entry point of your app.
   *
   * @see {@link https://hono.dev/docs/api/hono#fetch}
   *
   * @param {Request} request - request Object of request
   * @param {Env} Env - env Object
   * @param {ExecutionContext} - context of execution
   * @returns {Response | Promise<Response>} response of request
   *
   */
  fetch = (request, ...rest) => this.#dispatch(request, rest[1], rest[0], request.method);
  /**
   * `.request()` is a useful method for testing.
   * You can pass a URL or pathname to send a GET request.
   * app will return a Response object.
   * ```ts
   * test('GET /hello is ok', async () => {
   *   const res = await app.request('/hello')
   *   expect(res.status).toBe(200)
   * })
   * ```
   * @see https://hono.dev/docs/api/hono#request
   */
  request = (input, requestInit, Env, executionCtx) => input instanceof Request ? this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx) : (input = input.toString(), this.fetch(
    new Request(
      /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`,
      requestInit
    ),
    Env,
    executionCtx
  ));
  /**
   * `.fire()` automatically adds a global fetch event listener.
   * This can be useful for environments that adhere to the Service Worker API, such as non-ES module Cloudflare Workers.
   * @deprecated
   * Use `fire` from `hono/service-worker` instead.
   * ```ts
   * import { Hono } from 'hono'
   * import { fire } from 'hono/service-worker'
   *
   * const app = new Hono()
   * // ...
   * fire(app)
   * ```
   * @see https://hono.dev/docs/api/hono#fire
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
   * @see https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/
   */
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  };
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/router/pattern-router/router.js
var emptyParams = /* @__PURE__ */ Object.create(null), PatternRouter = class {
  name = "PatternRouter";
  #routes = [];
  add(method, path, handler) {
    let endsWithWildcard = path.at(-1) === "*";
    endsWithWildcard && (path = path.slice(0, -2)), path.at(-1) === "?" && (path = path.slice(0, -1), this.add(method, path.replace(/\/[^/]+$/, ""), handler));
    let parts = (path.match(/\/?(:\w+(?:{(?:(?:{[\d,]+})|[^}])+})?)|\/?[^\/\?]+/g) || []).map(
      (part) => {
        let match = part.match(/^\/:([^{]+)(?:{(.*)})?/);
        return match ? `/(?<${match[1]}>${match[2] || "[^/]+"})` : part === "/*" ? "/[^/]+" : part.replace(/[.\\+*[^\]$()]/g, "\\$&");
      }
    );
    try {
      this.#routes.push([
        new RegExp(`^${parts.join("")}${endsWithWildcard ? "" : "/?$"}`),
        method,
        handler
      ]);
    } catch {
      throw new UnsupportedPathError();
    }
  }
  match(method, path) {
    let handlers = [];
    for (let i = 0, len = this.#routes.length; i < len; i++) {
      let [pattern, routeMethod, handler] = this.#routes[i];
      if (routeMethod === method || routeMethod === METHOD_NAME_ALL) {
        let match = pattern.exec(path);
        match && handlers.push([handler, match.groups || emptyParams]);
      }
    }
    return [handlers];
  }
};

// ../../node_modules/.pnpm/hono@4.12.5/node_modules/hono/dist/preset/tiny.js
var Hono2 = class extends Hono {
  constructor(options = {}) {
    super(options), this.router = new PatternRouter();
  }
};

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
};

// src/workers/r2/public.worker.ts
function objectHeaders(object) {
  let headers = new Headers();
  return object.writeHttpMetadata(headers), headers.set("ETag", object.httpEtag), headers.set("Last-Modified", object.uploaded.toUTCString()), headers.set("Accept-Ranges", "bytes"), headers;
}
var app = new Hono2().basePath(CorePaths.R2_PUBLIC);
app.use(
  cors({ origin: "*", allowMethods: ["GET", "HEAD"], exposeHeaders: ["*"] })
);
app.on(["GET", "HEAD"], "/:bucketId/:key{.+}", async (c) => {
  let bucketId = decodeURIComponent(c.req.param("bucketId")), key = decodeURIComponent(c.req.param("key")), bucket = c.env[bucketId];
  if (bucket === void 0)
    return c.notFound();
  let hasRange = c.req.header("Range") !== void 0, object = await bucket.get(key, {
    onlyIf: c.req.raw.headers,
    range: hasRange && c.req.method === "GET" ? c.req.raw.headers : void 0
  });
  if (object === null)
    return c.notFound();
  let headers = objectHeaders(object);
  if (!("body" in object)) {
    let preconditions;
    for (let name of ["If-Match", "If-Unmodified-Since"]) {
      let value = c.req.raw.headers.get(name);
      value !== null && (preconditions ??= new Headers(), preconditions.set(name, value));
    }
    if (preconditions !== void 0) {
      let recheck = await bucket.get(key, { onlyIf: preconditions });
      if (recheck === null)
        return c.notFound();
      if (!("body" in recheck))
        return c.body(null, { status: 412, headers: objectHeaders(recheck) });
    }
    return c.body(null, { status: 304, headers });
  }
  if (c.req.method === "HEAD")
    return headers.set("Content-Length", `${object.size}`), c.body(null, { headers });
  let range = object.range;
  if (hasRange && range !== void 0 && "offset" in range && "length" in range) {
    let { offset = 0, length = object.size - offset } = range;
    return headers.set(
      "Content-Range",
      `bytes ${offset}-${offset + length - 1}/${object.size}`
    ), headers.set("Content-Length", `${length}`), c.body(object.body, { status: 206, headers });
  }
  return headers.set("Content-Length", `${object.size}`), c.body(object.body, { headers });
});
app.all(
  "/:bucketId/:key{.+}",
  (c) => c.text("Method Not Allowed", 405, { Allow: "GET, HEAD, OPTIONS" })
);
var public_worker_default = app;
export {
  public_worker_default as default
};
//# sourceMappingURL=public.worker.js.map
