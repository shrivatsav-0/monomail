var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
));

// ../../node_modules/.pnpm/heap-js@2.5.0/node_modules/heap-js/dist/heap-js.umd.js
var require_heap_js_umd = __commonJS({
  "../../node_modules/.pnpm/heap-js@2.5.0/node_modules/heap-js/dist/heap-js.umd.js"(exports, module) {
    (function(global, factory) {
      typeof exports == "object" && typeof module < "u" ? factory(exports) : typeof define == "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis < "u" ? globalThis : global || self, factory(global.heap = {}));
    })(exports, (function(exports2) {
      "use strict";
      var __awaiter = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator.throw(value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }, __generator$1 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n2) {
          return function(v) {
            return step([n2, v]);
          };
        }
        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          for (; g && (g = 0, op[0] && (_ = 0)), _; ) try {
            if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            switch (y = 0, t && (op = [op[0] & 2, t.value]), op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                return _.label++, { value: op[1], done: !1 };
              case 5:
                _.label++, y = op[1], op = [0];
                continue;
              case 7:
                op = _.ops.pop(), _.trys.pop();
                continue;
              default:
                if (t = _.trys, !(t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1], t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2], _.ops.push(op);
                  break;
                }
                t[2] && _.ops.pop(), _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e], y = 0;
          } finally {
            f = t = 0;
          }
          if (op[0] & 5) throw op[1];
          return { value: op[0] ? op[1] : void 0, done: !0 };
        }
      }, __read$1 = function(o, n2) {
        var m = typeof Symbol == "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r2, ar = [], e;
        try {
          for (; (n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done; ) ar.push(r2.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            r2 && !r2.done && (m = i.return) && m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return ar;
      }, __spreadArray$1 = function(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++)
          (ar || !(i in from)) && (ar || (ar = Array.prototype.slice.call(from, 0, i)), ar[i] = from[i]);
        return to.concat(ar || Array.prototype.slice.call(from));
      }, __values = function(o) {
        var s = typeof Symbol == "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length == "number") return {
          next: function() {
            return o && i >= o.length && (o = void 0), { value: o && o[i++], done: !o };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }, HeapAsync = (
        /** @class */
        (function() {
          function HeapAsync2(compare) {
            compare === void 0 && (compare = HeapAsync2.minComparator);
            var _this = this;
            this.compare = compare, this.heapArray = [], this._limit = 0, this.offer = this.add, this.element = this.peek, this.poll = this.pop, this._invertedCompare = function(a, b) {
              return _this.compare(a, b).then(function(res) {
                return -1 * res;
              });
            };
          }
          return HeapAsync2.getChildrenIndexOf = function(idx) {
            return [idx * 2 + 1, idx * 2 + 2];
          }, HeapAsync2.getParentIndexOf = function(idx) {
            if (idx <= 0)
              return -1;
            var whichChildren = idx % 2 ? 1 : 2;
            return Math.floor((idx - whichChildren) / 2);
          }, HeapAsync2.getSiblingIndexOf = function(idx) {
            if (idx <= 0)
              return -1;
            var whichChildren = idx % 2 ? 1 : -1;
            return idx + whichChildren;
          }, HeapAsync2.minComparator = function(a, b) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator$1(this, function(_a) {
                return a > b ? [2, 1] : a < b ? [2, -1] : [2, 0];
              });
            });
          }, HeapAsync2.maxComparator = function(a, b) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator$1(this, function(_a) {
                return b > a ? [2, 1] : b < a ? [2, -1] : [2, 0];
              });
            });
          }, HeapAsync2.minComparatorNumber = function(a, b) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator$1(this, function(_a) {
                return [2, a - b];
              });
            });
          }, HeapAsync2.maxComparatorNumber = function(a, b) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator$1(this, function(_a) {
                return [2, b - a];
              });
            });
          }, HeapAsync2.defaultIsEqual = function(a, b) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator$1(this, function(_a) {
                return [2, a === b];
              });
            });
          }, HeapAsync2.print = function(heap) {
            function deep(i2) {
              var pi = HeapAsync2.getParentIndexOf(i2);
              return Math.floor(Math.log2(pi + 1));
            }
            function repeat(str, times) {
              for (var out = ""; times > 0; --times)
                out += str;
              return out;
            }
            for (var node = 0, lines = [], maxLines = deep(heap.length - 1) + 2, maxLength = 0; node < heap.length; ) {
              var i = deep(node) + 1;
              node === 0 && (i = 0);
              var nodeText = String(heap.get(node));
              nodeText.length > maxLength && (maxLength = nodeText.length), lines[i] = lines[i] || [], lines[i].push(nodeText), node += 1;
            }
            return lines.map(function(line, i2) {
              var times = Math.pow(2, maxLines - i2) - 1;
              return repeat(" ", Math.floor(times / 2) * maxLength) + line.map(function(el) {
                var half = (maxLength - el.length) / 2;
                return repeat(" ", Math.ceil(half)) + el + repeat(" ", Math.floor(half));
              }).join(repeat(" ", times * maxLength));
            }).join(`
`);
          }, HeapAsync2.heapify = function(arr, compare) {
            return __awaiter(this, void 0, void 0, function() {
              var heap;
              return __generator$1(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return heap = new HeapAsync2(compare), heap.heapArray = arr, [4, heap.init()];
                  case 1:
                    return _a.sent(), [2, heap];
                }
              });
            });
          }, HeapAsync2.heappop = function(heapArr, compare) {
            var heap = new HeapAsync2(compare);
            return heap.heapArray = heapArr, heap.pop();
          }, HeapAsync2.heappush = function(heapArr, item, compare) {
            return __awaiter(this, void 0, void 0, function() {
              var heap;
              return __generator$1(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return heap = new HeapAsync2(compare), heap.heapArray = heapArr, [4, heap.push(item)];
                  case 1:
                    return _a.sent(), [
                      2
                      /*return*/
                    ];
                }
              });
            });
          }, HeapAsync2.heappushpop = function(heapArr, item, compare) {
            var heap = new HeapAsync2(compare);
            return heap.heapArray = heapArr, heap.pushpop(item);
          }, HeapAsync2.heapreplace = function(heapArr, item, compare) {
            var heap = new HeapAsync2(compare);
            return heap.heapArray = heapArr, heap.replace(item);
          }, HeapAsync2.heaptop = function(heapArr, n2, compare) {
            n2 === void 0 && (n2 = 1);
            var heap = new HeapAsync2(compare);
            return heap.heapArray = heapArr, heap.top(n2);
          }, HeapAsync2.heapbottom = function(heapArr, n2, compare) {
            n2 === void 0 && (n2 = 1);
            var heap = new HeapAsync2(compare);
            return heap.heapArray = heapArr, heap.bottom(n2);
          }, HeapAsync2.nlargest = function(n2, iterable, compare) {
            return __awaiter(this, void 0, void 0, function() {
              var heap;
              return __generator$1(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return heap = new HeapAsync2(compare), heap.heapArray = __spreadArray$1([], __read$1(iterable), !1), [4, heap.init()];
                  case 1:
                    return _a.sent(), [2, heap.top(n2)];
                }
              });
            });
          }, HeapAsync2.nsmallest = function(n2, iterable, compare) {
            return __awaiter(this, void 0, void 0, function() {
              var heap;
              return __generator$1(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return heap = new HeapAsync2(compare), heap.heapArray = __spreadArray$1([], __read$1(iterable), !1), [4, heap.init()];
                  case 1:
                    return _a.sent(), [2, heap.bottom(n2)];
                }
              });
            });
          }, HeapAsync2.prototype.add = function(element) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator$1(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return [4, this._sortNodeUp(this.heapArray.push(element) - 1)];
                  case 1:
                    return _a.sent(), this._applyLimit(), [2, !0];
                }
              });
            });
          }, HeapAsync2.prototype.addAll = function(elements) {
            return __awaiter(this, void 0, void 0, function() {
              var i, l, _a;
              return __generator$1(this, function(_b) {
                switch (_b.label) {
                  case 0:
                    i = this.length, (_a = this.heapArray).push.apply(_a, __spreadArray$1([], __read$1(elements), !1)), l = this.length, _b.label = 1;
                  case 1:
                    return i < l ? [4, this._sortNodeUp(i)] : [3, 4];
                  case 2:
                    _b.sent(), _b.label = 3;
                  case 3:
                    return ++i, [3, 1];
                  case 4:
                    return this._applyLimit(), [2, !0];
                }
              });
            });
          }, HeapAsync2.prototype.bottom = function(n2) {
            return n2 === void 0 && (n2 = 1), __awaiter(this, void 0, void 0, function() {
              return __generator$1(this, function(_a) {
                return this.heapArray.length === 0 || n2 <= 0 ? [2, []] : this.heapArray.length === 1 ? [2, [this.heapArray[0]]] : n2 >= this.heapArray.length ? [2, __spreadArray$1([], __read$1(this.heapArray), !1)] : [2, this._bottomN_push(~~n2)];
              });
            });
          }, HeapAsync2.prototype.check = function() {
            return __awaiter(this, void 0, void 0, function() {
              var j, el, children, children_1, children_1_1, ch, e_1_1, e_1, _a;
              return __generator$1(this, function(_b) {
                switch (_b.label) {
                  case 0:
                    j = 0, _b.label = 1;
                  case 1:
                    if (!(j < this.heapArray.length)) return [3, 10];
                    el = this.heapArray[j], children = this.getChildrenOf(j), _b.label = 2;
                  case 2:
                    _b.trys.push([2, 7, 8, 9]), children_1 = (e_1 = void 0, __values(children)), children_1_1 = children_1.next(), _b.label = 3;
                  case 3:
                    return children_1_1.done ? [3, 6] : (ch = children_1_1.value, [4, this.compare(el, ch)]);
                  case 4:
                    if (_b.sent() > 0)
                      return [2, el];
                    _b.label = 5;
                  case 5:
                    return children_1_1 = children_1.next(), [3, 3];
                  case 6:
                    return [3, 9];
                  case 7:
                    return e_1_1 = _b.sent(), e_1 = { error: e_1_1 }, [3, 9];
                  case 8:
                    try {
                      children_1_1 && !children_1_1.done && (_a = children_1.return) && _a.call(children_1);
                    } finally {
                      if (e_1) throw e_1.error;
                    }
                    return [
                      7
                      /*endfinally*/
                    ];
                  case 9:
                    return ++j, [3, 1];
                  case 10:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          }, HeapAsync2.prototype.clear = function() {
            this.heapArray = [];
          }, HeapAsync2.prototype.clone = function() {
            var cloned = new HeapAsync2(this.comparator());
            return cloned.heapArray = this.toArray(), cloned._limit = this._limit, cloned;
          }, HeapAsync2.prototype.comparator = function() {
            return this.compare;
          }, HeapAsync2.prototype.contains = function(o, fn) {
            return fn === void 0 && (fn = HeapAsync2.defaultIsEqual), __awaiter(this, void 0, void 0, function() {
              var _a, _b, el, e_2_1, e_2, _c;
              return __generator$1(this, function(_d) {
                switch (_d.label) {
                  case 0:
                    _d.trys.push([0, 5, 6, 7]), _a = __values(this.heapArray), _b = _a.next(), _d.label = 1;
                  case 1:
                    return _b.done ? [3, 4] : (el = _b.value, [4, fn(el, o)]);
                  case 2:
                    if (_d.sent())
                      return [2, !0];
                    _d.label = 3;
                  case 3:
                    return _b = _a.next(), [3, 1];
                  case 4:
                    return [3, 7];
                  case 5:
                    return e_2_1 = _d.sent(), e_2 = { error: e_2_1 }, [3, 7];
                  case 6:
                    try {
                      _b && !_b.done && (_c = _a.return) && _c.call(_a);
                    } finally {
                      if (e_2) throw e_2.error;
                    }
                    return [
                      7
                      /*endfinally*/
                    ];
                  case 7:
                    return [2, !1];
                }
              });
            });
          }, HeapAsync2.prototype.init = function(array) {
            return __awaiter(this, void 0, void 0, function() {
              var i;
              return __generator$1(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    array && (this.heapArray = __spreadArray$1([], __read$1(array), !1)), i = Math.floor(this.heapArray.length), _a.label = 1;
                  case 1:
                    return i >= 0 ? [4, this._sortNodeDown(i)] : [3, 4];
                  case 2:
                    _a.sent(), _a.label = 3;
                  case 3:
                    return --i, [3, 1];
                  case 4:
                    return this._applyLimit(), [
                      2
                      /*return*/
                    ];
                }
              });
            });
          }, HeapAsync2.prototype.isEmpty = function() {
            return this.length === 0;
          }, HeapAsync2.prototype.leafs = function() {
            if (this.heapArray.length === 0)
              return [];
            var pi = HeapAsync2.getParentIndexOf(this.heapArray.length - 1);
            return this.heapArray.slice(pi + 1);
          }, Object.defineProperty(HeapAsync2.prototype, "length", {
            /**
             * Length of the heap.
             * @return {Number}
             */
            get: function() {
              return this.heapArray.length;
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(HeapAsync2.prototype, "limit", {
            /**
             * Get length limit of the heap.
             * @return {Number}
             */
            get: function() {
              return this._limit;
            },
            /**
             * Set length limit of the heap.
             * @return {Number}
             */
            set: function(_l) {
              this._limit = ~~_l, this._applyLimit();
            },
            enumerable: !1,
            configurable: !0
          }), HeapAsync2.prototype.peek = function() {
            return this.heapArray[0];
          }, HeapAsync2.prototype.pop = function() {
            return __awaiter(this, void 0, void 0, function() {
              var last;
              return __generator$1(this, function(_a) {
                return last = this.heapArray.pop(), this.length > 0 && last !== void 0 ? [2, this.replace(last)] : [2, last];
              });
            });
          }, HeapAsync2.prototype.push = function() {
            for (var elements = [], _i = 0; _i < arguments.length; _i++)
              elements[_i] = arguments[_i];
            return __awaiter(this, void 0, void 0, function() {
              return __generator$1(this, function(_a) {
                return elements.length < 1 ? [2, !1] : elements.length === 1 ? [2, this.add(elements[0])] : [2, this.addAll(elements)];
              });
            });
          }, HeapAsync2.prototype.pushpop = function(element) {
            return __awaiter(this, void 0, void 0, function() {
              var _a;
              return __generator$1(this, function(_b) {
                switch (_b.label) {
                  case 0:
                    return [4, this.compare(this.heapArray[0], element)];
                  case 1:
                    return _b.sent() < 0 ? (_a = __read$1([this.heapArray[0], element], 2), element = _a[0], this.heapArray[0] = _a[1], [4, this._sortNodeDown(0)]) : [3, 3];
                  case 2:
                    _b.sent(), _b.label = 3;
                  case 3:
                    return [2, element];
                }
              });
            });
          }, HeapAsync2.prototype.remove = function(o, fn) {
            return fn === void 0 && (fn = HeapAsync2.defaultIsEqual), __awaiter(this, void 0, void 0, function() {
              var idx, i;
              return __generator$1(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return this.length > 0 ? o !== void 0 ? [3, 2] : [4, this.pop()] : [3, 13];
                  case 1:
                    return _a.sent(), [2, !0];
                  case 2:
                    idx = -1, i = 0, _a.label = 3;
                  case 3:
                    return i < this.heapArray.length ? [4, fn(this.heapArray[i], o)] : [3, 6];
                  case 4:
                    if (_a.sent())
                      return idx = i, [3, 6];
                    _a.label = 5;
                  case 5:
                    return ++i, [3, 3];
                  case 6:
                    return idx >= 0 ? idx !== 0 ? [3, 8] : [4, this.pop()] : [3, 13];
                  case 7:
                    return _a.sent(), [3, 12];
                  case 8:
                    return idx !== this.length - 1 ? [3, 9] : (this.heapArray.pop(), [3, 12]);
                  case 9:
                    return this.heapArray.splice(idx, 1, this.heapArray.pop()), [4, this._sortNodeUp(idx)];
                  case 10:
                    return _a.sent(), [4, this._sortNodeDown(idx)];
                  case 11:
                    _a.sent(), _a.label = 12;
                  case 12:
                    return [2, !0];
                  case 13:
                    return [2, !1];
                }
              });
            });
          }, HeapAsync2.prototype.replace = function(element) {
            return __awaiter(this, void 0, void 0, function() {
              var peek;
              return __generator$1(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return peek = this.heapArray[0], this.heapArray[0] = element, [4, this._sortNodeDown(0)];
                  case 1:
                    return _a.sent(), [2, peek];
                }
              });
            });
          }, HeapAsync2.prototype.size = function() {
            return this.length;
          }, HeapAsync2.prototype.top = function(n2) {
            return n2 === void 0 && (n2 = 1), __awaiter(this, void 0, void 0, function() {
              return __generator$1(this, function(_a) {
                return this.heapArray.length === 0 || n2 <= 0 ? [2, []] : this.heapArray.length === 1 || n2 === 1 ? [2, [this.heapArray[0]]] : n2 >= this.heapArray.length ? [2, __spreadArray$1([], __read$1(this.heapArray), !1)] : [2, this._topN_push(~~n2)];
              });
            });
          }, HeapAsync2.prototype.toArray = function() {
            return __spreadArray$1([], __read$1(this.heapArray), !1);
          }, HeapAsync2.prototype.toString = function() {
            return this.heapArray.toString();
          }, HeapAsync2.prototype.get = function(i) {
            return this.heapArray[i];
          }, HeapAsync2.prototype.getChildrenOf = function(idx) {
            var _this = this;
            return HeapAsync2.getChildrenIndexOf(idx).map(function(i) {
              return _this.heapArray[i];
            }).filter(function(e) {
              return e !== void 0;
            });
          }, HeapAsync2.prototype.getParentOf = function(idx) {
            var pi = HeapAsync2.getParentIndexOf(idx);
            return this.heapArray[pi];
          }, HeapAsync2.prototype[Symbol.iterator] = function() {
            return __generator$1(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return this.length ? [4, this.pop()] : [3, 2];
                case 1:
                  return _a.sent(), [3, 0];
                case 2:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          }, HeapAsync2.prototype.iterator = function() {
            return this;
          }, HeapAsync2.prototype._applyLimit = function() {
            if (this._limit && this._limit < this.heapArray.length)
              for (var rm = this.heapArray.length - this._limit; rm; )
                this.heapArray.pop(), --rm;
          }, HeapAsync2.prototype._bottomN_push = function(n2) {
            return __awaiter(this, void 0, void 0, function() {
              var bottomHeap, startAt, parentStartAt, indices, i, arr, i;
              return __generator$1(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return bottomHeap = new HeapAsync2(this.compare), bottomHeap.limit = n2, bottomHeap.heapArray = this.heapArray.slice(-n2), [4, bottomHeap.init()];
                  case 1:
                    for (_a.sent(), startAt = this.heapArray.length - 1 - n2, parentStartAt = HeapAsync2.getParentIndexOf(startAt), indices = [], i = startAt; i > parentStartAt; --i)
                      indices.push(i);
                    arr = this.heapArray, _a.label = 2;
                  case 2:
                    return indices.length ? (i = indices.shift(), [4, this.compare(arr[i], bottomHeap.peek())]) : [3, 6];
                  case 3:
                    return _a.sent() > 0 ? [4, bottomHeap.replace(arr[i])] : [3, 5];
                  case 4:
                    _a.sent(), i % 2 && indices.push(HeapAsync2.getParentIndexOf(i)), _a.label = 5;
                  case 5:
                    return [3, 2];
                  case 6:
                    return [2, bottomHeap.toArray()];
                }
              });
            });
          }, HeapAsync2.prototype._moveNode = function(j, k) {
            var _a;
            _a = __read$1([this.heapArray[k], this.heapArray[j]], 2), this.heapArray[j] = _a[0], this.heapArray[k] = _a[1];
          }, HeapAsync2.prototype._sortNodeDown = function(i) {
            return __awaiter(this, void 0, void 0, function() {
              var moveIt, self2, getPotentialParent, childrenIdx, bestChildIndex, j, bestChild, _a, _this = this;
              return __generator$1(this, function(_b) {
                switch (_b.label) {
                  case 0:
                    moveIt = i < this.heapArray.length - 1, self2 = this.heapArray[i], getPotentialParent = function(best, j2) {
                      return __awaiter(_this, void 0, void 0, function() {
                        var _a2;
                        return __generator$1(this, function(_b2) {
                          switch (_b2.label) {
                            case 0:
                              return _a2 = this.heapArray.length > j2, _a2 ? [4, this.compare(this.heapArray[j2], this.heapArray[best])] : [3, 2];
                            case 1:
                              _a2 = _b2.sent() < 0, _b2.label = 2;
                            case 2:
                              return _a2 && (best = j2), [2, best];
                          }
                        });
                      });
                    }, _b.label = 1;
                  case 1:
                    if (!moveIt) return [3, 8];
                    childrenIdx = HeapAsync2.getChildrenIndexOf(i), bestChildIndex = childrenIdx[0], j = 1, _b.label = 2;
                  case 2:
                    return j < childrenIdx.length ? [4, getPotentialParent(bestChildIndex, childrenIdx[j])] : [3, 5];
                  case 3:
                    bestChildIndex = _b.sent(), _b.label = 4;
                  case 4:
                    return ++j, [3, 2];
                  case 5:
                    return bestChild = this.heapArray[bestChildIndex], _a = typeof bestChild < "u", _a ? [4, this.compare(self2, bestChild)] : [3, 7];
                  case 6:
                    _a = _b.sent() > 0, _b.label = 7;
                  case 7:
                    return _a ? (this._moveNode(i, bestChildIndex), i = bestChildIndex) : moveIt = !1, [3, 1];
                  case 8:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          }, HeapAsync2.prototype._sortNodeUp = function(i) {
            return __awaiter(this, void 0, void 0, function() {
              var moveIt, pi, _a;
              return __generator$1(this, function(_b) {
                switch (_b.label) {
                  case 0:
                    moveIt = i > 0, _b.label = 1;
                  case 1:
                    return moveIt ? (pi = HeapAsync2.getParentIndexOf(i), _a = pi >= 0, _a ? [4, this.compare(this.heapArray[pi], this.heapArray[i])] : [3, 3]) : [3, 4];
                  case 2:
                    _a = _b.sent() > 0, _b.label = 3;
                  case 3:
                    return _a ? (this._moveNode(i, pi), i = pi) : moveIt = !1, [3, 1];
                  case 4:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          }, HeapAsync2.prototype._topN_push = function(n2) {
            return __awaiter(this, void 0, void 0, function() {
              var topHeap, indices, arr, i;
              return __generator$1(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    topHeap = new HeapAsync2(this._invertedCompare), topHeap.limit = n2, indices = [0], arr = this.heapArray, _a.label = 1;
                  case 1:
                    return indices.length ? (i = indices.shift(), i < arr.length ? topHeap.length < n2 ? [4, topHeap.push(arr[i])] : [3, 3] : [3, 6]) : [3, 7];
                  case 2:
                    return _a.sent(), indices.push.apply(indices, __spreadArray$1([], __read$1(HeapAsync2.getChildrenIndexOf(i)), !1)), [3, 6];
                  case 3:
                    return [4, this.compare(arr[i], topHeap.peek())];
                  case 4:
                    return _a.sent() < 0 ? [4, topHeap.replace(arr[i])] : [3, 6];
                  case 5:
                    _a.sent(), indices.push.apply(indices, __spreadArray$1([], __read$1(HeapAsync2.getChildrenIndexOf(i)), !1)), _a.label = 6;
                  case 6:
                    return [3, 1];
                  case 7:
                    return [2, topHeap.toArray()];
                }
              });
            });
          }, HeapAsync2.prototype._topN_fill = function(n2) {
            return __awaiter(this, void 0, void 0, function() {
              var heapArray, topHeap, branch, indices, i, i;
              return __generator$1(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return heapArray = this.heapArray, topHeap = new HeapAsync2(this._invertedCompare), topHeap.limit = n2, topHeap.heapArray = heapArray.slice(0, n2), [4, topHeap.init()];
                  case 1:
                    for (_a.sent(), branch = HeapAsync2.getParentIndexOf(n2 - 1) + 1, indices = [], i = branch; i < n2; ++i)
                      indices.push.apply(indices, __spreadArray$1([], __read$1(HeapAsync2.getChildrenIndexOf(i).filter(function(l) {
                        return l < heapArray.length;
                      })), !1));
                    (n2 - 1) % 2 && indices.push(n2), _a.label = 2;
                  case 2:
                    return indices.length ? (i = indices.shift(), i < heapArray.length ? [4, this.compare(heapArray[i], topHeap.peek())] : [3, 5]) : [3, 6];
                  case 3:
                    return _a.sent() < 0 ? [4, topHeap.replace(heapArray[i])] : [3, 5];
                  case 4:
                    _a.sent(), indices.push.apply(indices, __spreadArray$1([], __read$1(HeapAsync2.getChildrenIndexOf(i)), !1)), _a.label = 5;
                  case 5:
                    return [3, 2];
                  case 6:
                    return [2, topHeap.toArray()];
                }
              });
            });
          }, HeapAsync2.prototype._topN_heap = function(n2) {
            return __awaiter(this, void 0, void 0, function() {
              var topHeap, result, i, _a, _b;
              return __generator$1(this, function(_c) {
                switch (_c.label) {
                  case 0:
                    topHeap = this.clone(), result = [], i = 0, _c.label = 1;
                  case 1:
                    return i < n2 ? (_b = (_a = result).push, [4, topHeap.pop()]) : [3, 4];
                  case 2:
                    _b.apply(_a, [_c.sent()]), _c.label = 3;
                  case 3:
                    return ++i, [3, 1];
                  case 4:
                    return [2, result];
                }
              });
            });
          }, HeapAsync2.prototype._topIdxOf = function(list) {
            return __awaiter(this, void 0, void 0, function() {
              var idx, top, i, comp;
              return __generator$1(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    if (!list.length)
                      return [2, -1];
                    idx = 0, top = list[idx], i = 1, _a.label = 1;
                  case 1:
                    return i < list.length ? [4, this.compare(list[i], top)] : [3, 4];
                  case 2:
                    comp = _a.sent(), comp < 0 && (idx = i, top = list[i]), _a.label = 3;
                  case 3:
                    return ++i, [3, 1];
                  case 4:
                    return [2, idx];
                }
              });
            });
          }, HeapAsync2.prototype._topOf = function() {
            for (var list = [], _i = 0; _i < arguments.length; _i++)
              list[_i] = arguments[_i];
            return __awaiter(this, void 0, void 0, function() {
              var heap;
              return __generator$1(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return heap = new HeapAsync2(this.compare), [4, heap.init(list)];
                  case 1:
                    return _a.sent(), [2, heap.peek()];
                }
              });
            });
          }, HeapAsync2;
        })()
      ), __generator = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n2) {
          return function(v) {
            return step([n2, v]);
          };
        }
        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          for (; g && (g = 0, op[0] && (_ = 0)), _; ) try {
            if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            switch (y = 0, t && (op = [op[0] & 2, t.value]), op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                return _.label++, { value: op[1], done: !1 };
              case 5:
                _.label++, y = op[1], op = [0];
                continue;
              case 7:
                op = _.ops.pop(), _.trys.pop();
                continue;
              default:
                if (t = _.trys, !(t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1], t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2], _.ops.push(op);
                  break;
                }
                t[2] && _.ops.pop(), _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e], y = 0;
          } finally {
            f = t = 0;
          }
          if (op[0] & 5) throw op[1];
          return { value: op[0] ? op[1] : void 0, done: !0 };
        }
      }, __read = function(o, n2) {
        var m = typeof Symbol == "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r2, ar = [], e;
        try {
          for (; (n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done; ) ar.push(r2.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            r2 && !r2.done && (m = i.return) && m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return ar;
      }, __spreadArray = function(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++)
          (ar || !(i in from)) && (ar || (ar = Array.prototype.slice.call(from, 0, i)), ar[i] = from[i]);
        return to.concat(ar || Array.prototype.slice.call(from));
      }, toInt = function(n2) {
        return ~~n2;
      }, Heap2 = (
        /** @class */
        (function() {
          function Heap3(compare) {
            compare === void 0 && (compare = Heap3.minComparator);
            var _this = this;
            this.compare = compare, this.heapArray = [], this._limit = 0, this.offer = this.add, this.element = this.peek, this.poll = this.pop, this.removeAll = this.clear, this._invertedCompare = function(a, b) {
              return -1 * _this.compare(a, b);
            };
          }
          return Heap3.getChildrenIndexOf = function(idx) {
            return [idx * 2 + 1, idx * 2 + 2];
          }, Heap3.getParentIndexOf = function(idx) {
            if (idx <= 0)
              return -1;
            var whichChildren = idx % 2 ? 1 : 2;
            return Math.floor((idx - whichChildren) / 2);
          }, Heap3.getSiblingIndexOf = function(idx) {
            if (idx <= 0)
              return -1;
            var whichChildren = idx % 2 ? 1 : -1;
            return idx + whichChildren;
          }, Heap3.minComparator = function(a, b) {
            return a > b ? 1 : a < b ? -1 : 0;
          }, Heap3.maxComparator = function(a, b) {
            return b > a ? 1 : b < a ? -1 : 0;
          }, Heap3.minComparatorNumber = function(a, b) {
            return a - b;
          }, Heap3.maxComparatorNumber = function(a, b) {
            return b - a;
          }, Heap3.defaultIsEqual = function(a, b) {
            return a === b;
          }, Heap3.print = function(heap) {
            function deep(i2) {
              var pi = Heap3.getParentIndexOf(i2);
              return Math.floor(Math.log2(pi + 1));
            }
            function repeat(str, times) {
              for (var out = ""; times > 0; --times)
                out += str;
              return out;
            }
            for (var node = 0, lines = [], maxLines = deep(heap.length - 1) + 2, maxLength = 0; node < heap.length; ) {
              var i = deep(node) + 1;
              node === 0 && (i = 0);
              var nodeText = String(heap.get(node));
              nodeText.length > maxLength && (maxLength = nodeText.length), lines[i] = lines[i] || [], lines[i].push(nodeText), node += 1;
            }
            return lines.map(function(line, i2) {
              var times = Math.pow(2, maxLines - i2) - 1;
              return repeat(" ", Math.floor(times / 2) * maxLength) + line.map(function(el) {
                var half = (maxLength - el.length) / 2;
                return repeat(" ", Math.ceil(half)) + el + repeat(" ", Math.floor(half));
              }).join(repeat(" ", times * maxLength));
            }).join(`
`);
          }, Heap3.heapify = function(arr, compare) {
            var heap = new Heap3(compare);
            return heap.heapArray = arr, heap.init(), heap;
          }, Heap3.heappop = function(heapArr, compare) {
            var heap = new Heap3(compare);
            return heap.heapArray = heapArr, heap.pop();
          }, Heap3.heappush = function(heapArr, item, compare) {
            var heap = new Heap3(compare);
            heap.heapArray = heapArr, heap.push(item);
          }, Heap3.heappushpop = function(heapArr, item, compare) {
            var heap = new Heap3(compare);
            return heap.heapArray = heapArr, heap.pushpop(item);
          }, Heap3.heapreplace = function(heapArr, item, compare) {
            var heap = new Heap3(compare);
            return heap.heapArray = heapArr, heap.replace(item);
          }, Heap3.heaptop = function(heapArr, n2, compare) {
            n2 === void 0 && (n2 = 1);
            var heap = new Heap3(compare);
            return heap.heapArray = heapArr, heap.top(n2);
          }, Heap3.heapbottom = function(heapArr, n2, compare) {
            n2 === void 0 && (n2 = 1);
            var heap = new Heap3(compare);
            return heap.heapArray = heapArr, heap.bottom(n2);
          }, Heap3.nlargest = function(n2, iterable, compare) {
            var heap = new Heap3(compare);
            return heap.heapArray = __spreadArray([], __read(iterable), !1), heap.init(), heap.top(n2);
          }, Heap3.nsmallest = function(n2, iterable, compare) {
            var heap = new Heap3(compare);
            return heap.heapArray = __spreadArray([], __read(iterable), !1), heap.init(), heap.bottom(n2);
          }, Heap3.prototype.add = function(element) {
            return this._sortNodeUp(this.heapArray.push(element) - 1), this._applyLimit(), !0;
          }, Heap3.prototype.addAll = function(elements) {
            var _a, i = this.length;
            (_a = this.heapArray).push.apply(_a, __spreadArray([], __read(elements), !1));
            for (var l = this.length; i < l; ++i)
              this._sortNodeUp(i);
            return this._applyLimit(), !0;
          }, Heap3.prototype.bottom = function(n2) {
            return n2 === void 0 && (n2 = 1), this.heapArray.length === 0 || n2 <= 0 ? [] : this.heapArray.length === 1 ? [this.heapArray[0]] : n2 >= this.heapArray.length ? __spreadArray([], __read(this.heapArray), !1) : this._bottomN_push(~~n2);
          }, Heap3.prototype.check = function() {
            var _this = this;
            return this.heapArray.find(function(el, j) {
              return !!_this.getChildrenOf(j).find(function(ch) {
                return _this.compare(el, ch) > 0;
              });
            });
          }, Heap3.prototype.clear = function() {
            this.heapArray = [];
          }, Heap3.prototype.clone = function() {
            var cloned = new Heap3(this.comparator());
            return cloned.heapArray = this.toArray(), cloned._limit = this._limit, cloned;
          }, Heap3.prototype.comparator = function() {
            return this.compare;
          }, Heap3.prototype.contains = function(o, callbackFn) {
            return callbackFn === void 0 && (callbackFn = Heap3.defaultIsEqual), this.indexOf(o, callbackFn) !== -1;
          }, Heap3.prototype.init = function(array) {
            array && (this.heapArray = __spreadArray([], __read(array), !1));
            for (var i = Math.floor(this.heapArray.length); i >= 0; --i)
              this._sortNodeDown(i);
            this._applyLimit();
          }, Heap3.prototype.isEmpty = function() {
            return this.length === 0;
          }, Heap3.prototype.indexOf = function(element, callbackFn) {
            if (callbackFn === void 0 && (callbackFn = Heap3.defaultIsEqual), this.heapArray.length === 0)
              return -1;
            for (var indexes = [], currentIndex = 0; currentIndex < this.heapArray.length; ) {
              var currentElement = this.heapArray[currentIndex];
              if (callbackFn(currentElement, element))
                return currentIndex;
              this.compare(currentElement, element) <= 0 && indexes.push.apply(indexes, __spreadArray([], __read(Heap3.getChildrenIndexOf(currentIndex)), !1)), currentIndex = indexes.shift() || this.heapArray.length;
            }
            return -1;
          }, Heap3.prototype.indexOfEvery = function(element, callbackFn) {
            if (callbackFn === void 0 && (callbackFn = Heap3.defaultIsEqual), this.heapArray.length === 0)
              return [];
            for (var indexes = [], foundIndexes = [], currentIndex = 0; currentIndex < this.heapArray.length; ) {
              var currentElement = this.heapArray[currentIndex];
              callbackFn(currentElement, element) ? (foundIndexes.push(currentIndex), indexes.push.apply(indexes, __spreadArray([], __read(Heap3.getChildrenIndexOf(currentIndex)), !1))) : this.compare(currentElement, element) <= 0 && indexes.push.apply(indexes, __spreadArray([], __read(Heap3.getChildrenIndexOf(currentIndex)), !1)), currentIndex = indexes.shift() || this.heapArray.length;
            }
            return foundIndexes;
          }, Heap3.prototype.leafs = function() {
            if (this.heapArray.length === 0)
              return [];
            var pi = Heap3.getParentIndexOf(this.heapArray.length - 1);
            return this.heapArray.slice(pi + 1);
          }, Object.defineProperty(Heap3.prototype, "length", {
            /**
             * Length of the heap. Aliases: {@link size}.
             * @return {Number}
             * @see size
             */
            get: function() {
              return this.heapArray.length;
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(Heap3.prototype, "limit", {
            /**
             * Get length limit of the heap.
             * Use {@link setLimit} or {@link limit} to set the limit.
             * @return {Number}
             * @see setLimit
             */
            get: function() {
              return this._limit;
            },
            /**
             * Set length limit of the heap. Same as using {@link setLimit}.
             * @description If the heap is longer than the limit, the needed amount of leafs are removed.
             * @param {Number} _l Limit, defaults to 0 (no limit). Negative, Infinity, or NaN values set the limit to 0.
             * @see setLimit
             */
            set: function(_l) {
              _l < 0 || isNaN(_l) ? this._limit = 0 : this._limit = ~~_l, this._applyLimit();
            },
            enumerable: !1,
            configurable: !0
          }), Heap3.prototype.setLimit = function(_l) {
            return this.limit = _l, _l < 0 || isNaN(_l) ? NaN : this._limit;
          }, Heap3.prototype.peek = function() {
            return this.heapArray[0];
          }, Heap3.prototype.pop = function() {
            var last = this.heapArray.pop();
            return this.length > 0 && last !== void 0 ? this.replace(last) : last;
          }, Heap3.prototype.push = function() {
            for (var elements = [], _i = 0; _i < arguments.length; _i++)
              elements[_i] = arguments[_i];
            return elements.length < 1 ? !1 : elements.length === 1 ? this.add(elements[0]) : this.addAll(elements);
          }, Heap3.prototype.pushpop = function(element) {
            var _a;
            return this.compare(this.heapArray[0], element) < 0 && (_a = __read([this.heapArray[0], element], 2), element = _a[0], this.heapArray[0] = _a[1], this._sortNodeDown(0)), element;
          }, Heap3.prototype.remove = function(o, callbackFn) {
            if (callbackFn === void 0 && (callbackFn = Heap3.defaultIsEqual), this.length > 0) {
              if (o === void 0)
                return this.pop(), !0;
              var idx = this.indexOf(o, callbackFn);
              if (idx >= 0)
                return idx === 0 ? this.pop() : idx === this.length - 1 ? this.heapArray.pop() : (this.heapArray.splice(idx, 1, this.heapArray.pop()), this._sortNodeUp(idx), this._sortNodeDown(idx)), !0;
            }
            return !1;
          }, Heap3.prototype.replace = function(element) {
            var peek = this.heapArray[0];
            return this.heapArray[0] = element, this._sortNodeDown(0), peek;
          }, Heap3.prototype.size = function() {
            return this.length;
          }, Heap3.prototype.top = function(n2) {
            return n2 === void 0 && (n2 = 1), this.heapArray.length === 0 || n2 <= 0 ? [] : this.heapArray.length === 1 || n2 === 1 ? [this.heapArray[0]] : n2 >= this.heapArray.length ? __spreadArray([], __read(this.heapArray), !1) : this._topN_push(~~n2);
          }, Heap3.prototype.toArray = function() {
            return __spreadArray([], __read(this.heapArray), !1);
          }, Heap3.prototype.toString = function() {
            return this.heapArray.toString();
          }, Heap3.prototype.get = function(i) {
            return this.heapArray[i];
          }, Heap3.prototype.getChildrenOf = function(idx) {
            var _this = this;
            return Heap3.getChildrenIndexOf(idx).map(function(i) {
              return _this.heapArray[i];
            }).filter(function(e) {
              return e !== void 0;
            });
          }, Heap3.prototype.getParentOf = function(idx) {
            var pi = Heap3.getParentIndexOf(idx);
            return this.heapArray[pi];
          }, Heap3.prototype[Symbol.iterator] = function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return this.length ? [4, this.pop()] : [3, 2];
                case 1:
                  return _a.sent(), [3, 0];
                case 2:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          }, Heap3.prototype.iterator = function() {
            return this.toArray();
          }, Heap3.prototype._applyLimit = function() {
            if (this._limit > 0 && this._limit < this.heapArray.length)
              for (var rm = this.heapArray.length - this._limit; rm; )
                this.heapArray.pop(), --rm;
          }, Heap3.prototype._bottomN_push = function(n2) {
            var bottomHeap = new Heap3(this.compare);
            bottomHeap.limit = n2, bottomHeap.heapArray = this.heapArray.slice(-n2), bottomHeap.init();
            for (var startAt = this.heapArray.length - 1 - n2, parentStartAt = Heap3.getParentIndexOf(startAt), indices = [], i = startAt; i > parentStartAt; --i)
              indices.push(i);
            for (var arr = this.heapArray; indices.length; ) {
              var i = indices.shift();
              this.compare(arr[i], bottomHeap.peek()) > 0 && (bottomHeap.replace(arr[i]), i % 2 && indices.push(Heap3.getParentIndexOf(i)));
            }
            return bottomHeap.toArray();
          }, Heap3.prototype._moveNode = function(j, k) {
            var _a;
            _a = __read([this.heapArray[k], this.heapArray[j]], 2), this.heapArray[j] = _a[0], this.heapArray[k] = _a[1];
          }, Heap3.prototype._sortNodeDown = function(i) {
            for (var _this = this, moveIt = i < this.heapArray.length - 1, self2 = this.heapArray[i], getPotentialParent = function(best, j) {
              return _this.heapArray.length > j && _this.compare(_this.heapArray[j], _this.heapArray[best]) < 0 && (best = j), best;
            }; moveIt; ) {
              var childrenIdx = Heap3.getChildrenIndexOf(i), bestChildIndex = childrenIdx.reduce(getPotentialParent, childrenIdx[0]), bestChild = this.heapArray[bestChildIndex];
              typeof bestChild < "u" && this.compare(self2, bestChild) > 0 ? (this._moveNode(i, bestChildIndex), i = bestChildIndex) : moveIt = !1;
            }
          }, Heap3.prototype._sortNodeUp = function(i) {
            for (var moveIt = i > 0; moveIt; ) {
              var pi = Heap3.getParentIndexOf(i);
              pi >= 0 && this.compare(this.heapArray[pi], this.heapArray[i]) > 0 ? (this._moveNode(i, pi), i = pi) : moveIt = !1;
            }
          }, Heap3.prototype._topN_push = function(n2) {
            var topHeap = new Heap3(this._invertedCompare);
            topHeap.limit = n2;
            for (var indices = [0], arr = this.heapArray; indices.length; ) {
              var i = indices.shift();
              i < arr.length && (topHeap.length < n2 ? (topHeap.push(arr[i]), indices.push.apply(indices, __spreadArray([], __read(Heap3.getChildrenIndexOf(i)), !1))) : this.compare(arr[i], topHeap.peek()) < 0 && (topHeap.replace(arr[i]), indices.push.apply(indices, __spreadArray([], __read(Heap3.getChildrenIndexOf(i)), !1))));
            }
            return topHeap.toArray();
          }, Heap3.prototype._topN_fill = function(n2) {
            var heapArray = this.heapArray, topHeap = new Heap3(this._invertedCompare);
            topHeap.limit = n2, topHeap.heapArray = heapArray.slice(0, n2), topHeap.init();
            for (var branch = Heap3.getParentIndexOf(n2 - 1) + 1, indices = [], i = branch; i < n2; ++i)
              indices.push.apply(indices, __spreadArray([], __read(Heap3.getChildrenIndexOf(i).filter(function(l) {
                return l < heapArray.length;
              })), !1));
            for ((n2 - 1) % 2 && indices.push(n2); indices.length; ) {
              var i = indices.shift();
              i < heapArray.length && this.compare(heapArray[i], topHeap.peek()) < 0 && (topHeap.replace(heapArray[i]), indices.push.apply(indices, __spreadArray([], __read(Heap3.getChildrenIndexOf(i)), !1)));
            }
            return topHeap.toArray();
          }, Heap3.prototype._topN_heap = function(n2) {
            for (var topHeap = this.clone(), result = [], i = 0; i < n2; ++i)
              result.push(topHeap.pop());
            return result;
          }, Heap3.prototype._topIdxOf = function(list) {
            if (!list.length)
              return -1;
            for (var idx = 0, top = list[idx], i = 1; i < list.length; ++i) {
              var comp = this.compare(list[i], top);
              comp < 0 && (idx = i, top = list[i]);
            }
            return idx;
          }, Heap3.prototype._topOf = function() {
            for (var list = [], _i = 0; _i < arguments.length; _i++)
              list[_i] = arguments[_i];
            var heap = new Heap3(this.compare);
            return heap.init(list), heap.peek();
          }, Heap3;
        })()
      );
      exports2.Heap = Heap2, exports2.HeapAsync = HeapAsync, exports2.default = Heap2, exports2.toInt = toInt, Object.defineProperty(exports2, "__esModule", { value: !0 });
    }));
  }
});

// ../workflows-shared/src/engine.ts
import { DurableObject } from "cloudflare:workers";

// ../workflows-shared/src/context.ts
import { RpcTarget as RpcTarget2 } from "cloudflare:workers";

// ../../node_modules/.pnpm/itty-time@2.0.2/node_modules/itty-time/index.mjs
var n = { year: 315576e5, month: 2592e6, week: 6048e5, day: 864e5, hour: 36e5, minute: 6e4, second: 1e3, m: 1 }, r = (e) => {
  if (!isNaN(+e)) return +e;
  let [, t, r2] = e.match(/^([^ ]+) +(\w\w*?)s?$/) || [, e];
  return +t * (n[r2] || 1);
};

// ../workflows-shared/src/instance.ts
var INSTANCE_METADATA = "INSTANCE_METADATA";
function instanceStatusName(status) {
  switch (status) {
    case 0 /* Queued */:
      return "queued";
    case 1 /* Running */:
      return "running";
    case 2 /* Paused */:
      return "paused";
    case 3 /* Errored */:
      return "errored";
    case 4 /* Terminated */:
      return "terminated";
    case 5 /* Complete */:
      return "complete";
    case 6 /* WaitingForPause */:
      return "waitingForPause";
    case 7 /* Waiting */:
      return "waiting";
    default:
      return "unknown";
  }
}
function toInstanceStatus(status) {
  switch (status) {
    case "queued":
      return 0 /* Queued */;
    case "running":
      return 1 /* Running */;
    case "paused":
      return 2 /* Paused */;
    case "errored":
      return 3 /* Errored */;
    case "terminated":
      return 4 /* Terminated */;
    case "complete":
      return 5 /* Complete */;
    case "waitingForPause":
      return 6 /* WaitingForPause */;
    case "waiting":
      return 7 /* Waiting */;
    case "unknown":
      throw new Error("unknown cannot be parsed into a InstanceStatus");
    default:
      throw new Error(
        `${status} was not handled because it's not a valid InstanceStatus`
      );
  }
}

// ../workflows-shared/src/lib/cache.ts
async function computeHash(value) {
  let msgUint8 = new TextEncoder().encode(value), hashBuffer = await crypto.subtle.digest("SHA-1", msgUint8);
  return Array.from(new Uint8Array(hashBuffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

// ../workflows-shared/src/lib/errors.ts
var WorkflowTimeoutError = class extends Error {
  name = "WorkflowTimeoutError";
}, WorkflowInternalError = class extends Error {
  name = "WorkflowInternalError";
}, WorkflowFatalError = class extends Error {
  name = "WorkflowFatalError";
  toJSON() {
    return {
      name: this.name,
      message: this.message
    };
  }
}, PreservedNonRetryableError = class extends WorkflowFatalError {
  name = "NonRetryableError";
  constructor(err) {
    let message = err.name === "NonRetryableError" ? err.message : err.message.replace(/^NonRetryableError:?\s*/, "");
    super(message);
  }
}, WorkflowError = class extends Error {
  name = "WorkflowError";
}, InvalidStepReadableStreamError = class extends Error {
  name = "InvalidStepReadableStreamError";
}, OversizedStreamChunkError = class extends Error {
  name = "OversizedStreamChunkError";
}, UnsupportedStreamChunkError = class extends Error {
  name = "UnsupportedStreamChunkError";
}, StreamOutputStorageLimitError = class extends Error {
  name = "StreamOutputStorageLimitError";
};
function createWorkflowError(message, errorCode) {
  return new WorkflowError(`(${errorCode}) ${message}`);
}
var ABORT_PREFIX = "Aborting engine:", ABORT_REASONS = {
  USER_PAUSE: `${ABORT_PREFIX} User called pause`,
  USER_RESTART: `${ABORT_PREFIX} User called restart`,
  USER_TERMINATE: `${ABORT_PREFIX} User called terminate`,
  NON_RETRYABLE_ERROR: `${ABORT_PREFIX} A step threw a NonRetryableError`,
  NOT_SERIALISABLE: `${ABORT_PREFIX} Value is not serialisable`,
  STORAGE_LIMIT_EXCEEDED: `${ABORT_PREFIX} Storage limit exceeded`,
  GRACE_PERIOD_COMPLETE: `${ABORT_PREFIX} Grace period complete`
}, ABORT_REASON_SET = new Set(
  Object.values(ABORT_REASONS)
);
function getErrorMessage(e) {
  if (e instanceof Error)
    return e.message;
  if (typeof e == "object" && e !== null) {
    let msg = e.message;
    if (typeof msg == "string")
      return msg;
  }
}
function isAbortError(e) {
  let msg = getErrorMessage(e);
  return msg !== void 0 && ABORT_REASON_SET.has(msg);
}
function isUserTriggeredPause(e) {
  return getErrorMessage(e) === ABORT_REASONS.USER_PAUSE;
}
function isUserTriggeredRestart(e) {
  return getErrorMessage(e) === ABORT_REASONS.USER_RESTART;
}
function isUserTriggeredTerminate(e) {
  return getErrorMessage(e) === ABORT_REASONS.USER_TERMINATE;
}
function getCompatFlag(name) {
  return globalThis.Cloudflare?.compatibilityFlags?.[name] ?? !1;
}
function shouldPreserveNonRetryableError() {
  return getCompatFlag("workflows_preserve_non_retryable_error_message");
}
function stepNotFoundError(name) {
  return createWorkflowError(
    `Step "${name}" not found in execution history`,
    "instance.cannot_restart"
  );
}

// ../workflows-shared/src/lib/retries.ts
function calcRetryDuration(config, stepState) {
  let { attemptedCount: attemptCount } = stepState, { retries } = config, delay = r(retries.delay);
  switch (retries.backoff) {
    case "exponential":
      return delay * Math.pow(2, attemptCount - 1);
    case "linear":
      return delay * attemptCount;
    default:
      return delay;
  }
}

// ../../node_modules/.pnpm/zod@3.22.3/node_modules/zod/lib/index.mjs
var util;
(function(util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever, util2.arrayToEnum = (items) => {
    let obj = {};
    for (let item of items)
      obj[item] = item;
    return obj;
  }, util2.getValidEnumValues = (obj) => {
    let validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] != "number"), filtered = {};
    for (let k of validKeys)
      filtered[k] = obj[k];
    return util2.objectValues(filtered);
  }, util2.objectValues = (obj) => util2.objectKeys(obj).map(function(e) {
    return obj[e];
  }), util2.objectKeys = typeof Object.keys == "function" ? (obj) => Object.keys(obj) : (object) => {
    let keys = [];
    for (let key in object)
      Object.prototype.hasOwnProperty.call(object, key) && keys.push(key);
    return keys;
  }, util2.find = (arr, checker) => {
    for (let item of arr)
      if (checker(item))
        return item;
  }, util2.isInteger = typeof Number.isInteger == "function" ? (val) => Number.isInteger(val) : (val) => typeof val == "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val == "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues, util2.jsonStringifyReplacer = (_, value) => typeof value == "bigint" ? value.toString() : value;
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => ({
    ...first,
    ...second
    // second overwrites first
  });
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), getParsedType = (data) => {
  switch (typeof data) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      return Array.isArray(data) ? ZodParsedType.array : data === null ? ZodParsedType.null : data.then && typeof data.then == "function" && data.catch && typeof data.catch == "function" ? ZodParsedType.promise : typeof Map < "u" && data instanceof Map ? ZodParsedType.map : typeof Set < "u" && data instanceof Set ? ZodParsedType.set : typeof Date < "u" && data instanceof Date ? ZodParsedType.date : ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
}, ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), quotelessJson = (obj) => JSON.stringify(obj, null, 2).replace(/"([^"]+)":/g, "$1:"), ZodError = class extends Error {
  constructor(issues) {
    super(), this.issues = [], this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    }, this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    let actualProto = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, actualProto) : this.__proto__ = actualProto, this.name = "ZodError", this.issues = issues;
  }
  get errors() {
    return this.issues;
  }
  format(_mapper) {
    let mapper = _mapper || function(issue) {
      return issue.message;
    }, fieldErrors = { _errors: [] }, processError = (error) => {
      for (let issue of error.issues)
        if (issue.code === "invalid_union")
          issue.unionErrors.map(processError);
        else if (issue.code === "invalid_return_type")
          processError(issue.returnTypeError);
        else if (issue.code === "invalid_arguments")
          processError(issue.argumentsError);
        else if (issue.path.length === 0)
          fieldErrors._errors.push(mapper(issue));
        else {
          let curr = fieldErrors, i = 0;
          for (; i < issue.path.length; ) {
            let el = issue.path[i];
            i === issue.path.length - 1 ? (curr[el] = curr[el] || { _errors: [] }, curr[el]._errors.push(mapper(issue))) : curr[el] = curr[el] || { _errors: [] }, curr = curr[el], i++;
          }
        }
    };
    return processError(this), fieldErrors;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    let fieldErrors = {}, formErrors = [];
    for (let sub of this.issues)
      sub.path.length > 0 ? (fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [], fieldErrors[sub.path[0]].push(mapper(sub))) : formErrors.push(mapper(sub));
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => new ZodError(issues);
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      issue.received === ZodParsedType.undefined ? message = "Required" : message = `Expected ${issue.expected}, received ${issue.received}`;
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = "Invalid input";
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = "Invalid function arguments";
      break;
    case ZodIssueCode.invalid_return_type:
      message = "Invalid function return type";
      break;
    case ZodIssueCode.invalid_date:
      message = "Invalid date";
      break;
    case ZodIssueCode.invalid_string:
      typeof issue.validation == "object" ? "includes" in issue.validation ? (message = `Invalid input: must include "${issue.validation.includes}"`, typeof issue.validation.position == "number" && (message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`)) : "startsWith" in issue.validation ? message = `Invalid input: must start with "${issue.validation.startsWith}"` : "endsWith" in issue.validation ? message = `Invalid input: must end with "${issue.validation.endsWith}"` : util.assertNever(issue.validation) : issue.validation !== "regex" ? message = `Invalid ${issue.validation}` : message = "Invalid";
      break;
    case ZodIssueCode.too_small:
      issue.type === "array" ? message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? "at least" : "more than"} ${issue.minimum} element(s)` : issue.type === "string" ? message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? "at least" : "over"} ${issue.minimum} character(s)` : issue.type === "number" ? message = `Number must be ${issue.exact ? "exactly equal to " : issue.inclusive ? "greater than or equal to " : "greater than "}${issue.minimum}` : issue.type === "date" ? message = `Date must be ${issue.exact ? "exactly equal to " : issue.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(issue.minimum))}` : message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      issue.type === "array" ? message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? "at most" : "less than"} ${issue.maximum} element(s)` : issue.type === "string" ? message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? "at most" : "under"} ${issue.maximum} character(s)` : issue.type === "number" ? message = `Number must be ${issue.exact ? "exactly" : issue.inclusive ? "less than or equal to" : "less than"} ${issue.maximum}` : issue.type === "bigint" ? message = `BigInt must be ${issue.exact ? "exactly" : issue.inclusive ? "less than or equal to" : "less than"} ${issue.maximum}` : issue.type === "date" ? message = `Date must be ${issue.exact ? "exactly" : issue.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(issue.maximum))}` : message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = "Invalid input";
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = "Intersection results could not be merged";
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError, util.assertNever(issue);
  }
  return { message };
}, overrideErrorMap = errorMap;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
var makeIssue = (params) => {
  let { data, path, errorMaps, issueData } = params, fullPath = [...path, ...issueData.path || []], fullIssue = {
    ...issueData,
    path: fullPath
  }, errorMessage = "", maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (let map of maps)
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  return {
    ...issueData,
    path: fullPath,
    message: issueData.message || errorMessage
  };
}, EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  let issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      getErrorMap(),
      errorMap
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(status, results) {
    let arrayValue = [];
    for (let s of results) {
      if (s.status === "aborted")
        return INVALID;
      s.status === "dirty" && status.dirty(), arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    let syncPairs = [];
    for (let pair of pairs)
      syncPairs.push({
        key: await pair.key,
        value: await pair.value
      });
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    let finalObject = {};
    for (let pair of pairs) {
      let { key, value } = pair;
      if (key.status === "aborted" || value.status === "aborted")
        return INVALID;
      key.status === "dirty" && status.dirty(), value.status === "dirty" && status.dirty(), key.value !== "__proto__" && (typeof value.value < "u" || pair.alwaysSet) && (finalObject[key.value] = value.value);
    }
    return { status: status.value, value: finalObject };
  }
}, INVALID = Object.freeze({
  status: "aborted"
}), DIRTY = (value) => ({ status: "dirty", value }), OK = (value) => ({ status: "valid", value }), isAborted = (x) => x.status === "aborted", isDirty = (x) => x.status === "dirty", isValid = (x) => x.status === "valid", isAsync = (x) => typeof Promise < "u" && x instanceof Promise, errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message == "string" ? { message } : message || {}, errorUtil2.toString = (message) => typeof message == "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [], this.parent = parent, this.data = value, this._path = path, this._key = key;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}, handleResult = (ctx, result) => {
  if (isValid(result))
    return { success: !0, data: result.value };
  if (!ctx.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      let error = new ZodError(ctx.common.issues);
      return this._error = error, this._error;
    }
  };
};
function processCreateParams(params) {
  if (!params)
    return {};
  let { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return errorMap2 ? { errorMap: errorMap2, description } : { errorMap: (iss, ctx) => iss.code !== "invalid_type" ? { message: ctx.defaultError } : typeof ctx.data > "u" ? { message: required_error ?? ctx.defaultError } : { message: invalid_type_error ?? ctx.defaultError }, description };
}
var ZodType = class {
  constructor(def) {
    this.spa = this.safeParseAsync, this._def = def, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    let result = this._parse(input);
    if (isAsync(result))
      throw new Error("Synchronous parse encountered promise.");
    return result;
  }
  _parseAsync(input) {
    let result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    let result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a;
    let ctx = {
      common: {
        issues: [],
        async: (_a = params?.async) !== null && _a !== void 0 ? _a : !1,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    }, result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  async parseAsync(data, params) {
    let result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    let ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: !0
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    }, maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx }), result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    let getIssueProperties = (val) => typeof message == "string" || typeof message > "u" ? { message } : typeof message == "function" ? message(val) : message;
    return this._refinement((val, ctx) => {
      let result = check(val), setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      return typeof Promise < "u" && result instanceof Promise ? result.then((data) => data ? !0 : (setError(), !1)) : result ? !0 : (setError(), !1);
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => check(val) ? !0 : (ctx.addIssue(typeof refinementData == "function" ? refinementData(val, ctx) : refinementData), !1));
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this, this._def);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    let defaultValueFunc = typeof def == "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    let catchValueFunc = typeof def == "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    let This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}, cuidRegex = /^c[^\s-]{8,}$/i, cuid2Regex = /^[a-z][a-z0-9]*$/, ulidRegex = /[0-9A-HJKMNP-TV-Z]{26}/, uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, emojiRegex = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, datetimeRegex = (args) => args.precision ? args.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`) : args.precision === 0 ? args.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : args.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function isValidIP(ip, version) {
  return !!((version === "v4" || !version) && ipv4Regex.test(ip) || (version === "v6" || !version) && ipv6Regex.test(ip));
}
var ZodString = class _ZodString extends ZodType {
  constructor() {
    super(...arguments), this._regex = (regex, validation, message) => this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    }), this.nonempty = (message) => this.min(1, errorUtil.errToObj(message)), this.trim = () => new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(input) {
    if (this._def.coerce && (input.data = String(input.data)), this._getType(input) !== ZodParsedType.string) {
      let ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(
        ctx2,
        {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.string,
          received: ctx2.parsedType
        }
        //
      ), INVALID;
    }
    let status = new ParseStatus(), ctx;
    for (let check of this._def.checks)
      if (check.kind === "min")
        input.data.length < check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: check.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: check.message
        }), status.dirty());
      else if (check.kind === "max")
        input.data.length > check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: check.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: check.message
        }), status.dirty());
      else if (check.kind === "length") {
        let tooBig = input.data.length > check.value, tooSmall = input.data.length < check.value;
        (tooBig || tooSmall) && (ctx = this._getOrReturnCtx(input, ctx), tooBig ? addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: check.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: check.message
        }) : tooSmall && addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: check.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: check.message
        }), status.dirty());
      } else if (check.kind === "email")
        emailRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "email",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "emoji")
        emojiRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "emoji",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "uuid")
        uuidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "uuid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "cuid")
        cuidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "cuid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "cuid2")
        cuid2Regex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "cuid2",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "ulid")
        ulidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "ulid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "url")
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          }), status.dirty();
        }
      else check.kind === "regex" ? (check.regex.lastIndex = 0, check.regex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "regex",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty())) : check.kind === "trim" ? input.data = input.data.trim() : check.kind === "includes" ? input.data.includes(check.value, check.position) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: { includes: check.value, position: check.position },
        message: check.message
      }), status.dirty()) : check.kind === "toLowerCase" ? input.data = input.data.toLowerCase() : check.kind === "toUpperCase" ? input.data = input.data.toUpperCase() : check.kind === "startsWith" ? input.data.startsWith(check.value) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: { startsWith: check.value },
        message: check.message
      }), status.dirty()) : check.kind === "endsWith" ? input.data.endsWith(check.value) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: { endsWith: check.value },
        message: check.message
      }), status.dirty()) : check.kind === "datetime" ? datetimeRegex(check).test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: "datetime",
        message: check.message
      }), status.dirty()) : check.kind === "ip" ? isValidIP(input.data, check.version) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "ip",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty()) : util.assertNever(check);
    return { status: status.value, value: input.data };
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    var _a;
    return typeof options == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: options
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision > "u" ? null : options?.precision,
      offset: (_a = options?.offset) !== null && _a !== void 0 ? _a : !1,
      ...errorUtil.errToObj(options?.message)
    });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get minLength() {
    let min = null;
    for (let ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min;
  }
  get maxLength() {
    let max = null;
    for (let ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max;
  }
};
ZodString.create = (params) => {
  var _a;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a = params?.coerce) !== null && _a !== void 0 ? _a : !1,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  let valDecCount = (val.toString().split(".")[1] || "").length, stepDecCount = (step.toString().split(".")[1] || "").length, decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount, valInt = parseInt(val.toFixed(decCount).replace(".", "")), stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce && (input.data = Number(input.data)), this._getType(input) !== ZodParsedType.number) {
      let ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      }), INVALID;
    }
    let ctx, status = new ParseStatus();
    for (let check of this._def.checks)
      check.kind === "int" ? util.isInteger(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: "integer",
        received: "float",
        message: check.message
      }), status.dirty()) : check.kind === "min" ? (check.inclusive ? input.data < check.value : input.data <= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: check.value,
        type: "number",
        inclusive: check.inclusive,
        exact: !1,
        message: check.message
      }), status.dirty()) : check.kind === "max" ? (check.inclusive ? input.data > check.value : input.data >= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: check.value,
        type: "number",
        inclusive: check.inclusive,
        exact: !1,
        message: check.message
      }), status.dirty()) : check.kind === "multipleOf" ? floatSafeRemainder(input.data, check.value) !== 0 && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.not_multiple_of,
        multipleOf: check.value,
        message: check.message
      }), status.dirty()) : check.kind === "finite" ? Number.isFinite(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.not_finite,
        message: check.message
      }), status.dirty()) : util.assertNever(check);
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, !0, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, !1, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, !0, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, !1, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (let ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min;
  }
  get maxValue() {
    let max = null;
    for (let ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (let ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf")
        return !0;
      ch.kind === "min" ? (min === null || ch.value > min) && (min = ch.value) : ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => new ZodNumber({
  checks: [],
  typeName: ZodFirstPartyTypeKind.ZodNumber,
  coerce: params?.coerce || !1,
  ...processCreateParams(params)
});
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce && (input.data = BigInt(input.data)), this._getType(input) !== ZodParsedType.bigint) {
      let ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx2.parsedType
      }), INVALID;
    }
    let ctx, status = new ParseStatus();
    for (let check of this._def.checks)
      check.kind === "min" ? (check.inclusive ? input.data < check.value : input.data <= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        type: "bigint",
        minimum: check.value,
        inclusive: check.inclusive,
        message: check.message
      }), status.dirty()) : check.kind === "max" ? (check.inclusive ? input.data > check.value : input.data >= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        type: "bigint",
        maximum: check.value,
        inclusive: check.inclusive,
        message: check.message
      }), status.dirty()) : check.kind === "multipleOf" ? input.data % check.value !== BigInt(0) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.not_multiple_of,
        multipleOf: check.value,
        message: check.message
      }), status.dirty()) : util.assertNever(check);
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, !0, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, !1, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, !0, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, !1, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (let ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min;
  }
  get maxValue() {
    let max = null;
    for (let ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max;
  }
};
ZodBigInt.create = (params) => {
  var _a;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a = params?.coerce) !== null && _a !== void 0 ? _a : !1,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce && (input.data = !!input.data), this._getType(input) !== ZodParsedType.boolean) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => new ZodBoolean({
  typeName: ZodFirstPartyTypeKind.ZodBoolean,
  coerce: params?.coerce || !1,
  ...processCreateParams(params)
});
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce && (input.data = new Date(input.data)), this._getType(input) !== ZodParsedType.date) {
      let ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      }), INVALID;
    }
    if (isNaN(input.data.getTime())) {
      let ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      }), INVALID;
    }
    let status = new ParseStatus(), ctx;
    for (let check of this._def.checks)
      check.kind === "min" ? input.data.getTime() < check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        message: check.message,
        inclusive: !0,
        exact: !1,
        minimum: check.value,
        type: "date"
      }), status.dirty()) : check.kind === "max" ? input.data.getTime() > check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        message: check.message,
        inclusive: !0,
        exact: !1,
        maximum: check.value,
        type: "date"
      }), status.dirty()) : util.assertNever(check);
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (let ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (let ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => new ZodDate({
  checks: [],
  coerce: params?.coerce || !1,
  typeName: ZodFirstPartyTypeKind.ZodDate,
  ...processCreateParams(params)
});
var ZodSymbol = class extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.symbol) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => new ZodSymbol({
  typeName: ZodFirstPartyTypeKind.ZodSymbol,
  ...processCreateParams(params)
});
var ZodUndefined = class extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.undefined) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => new ZodUndefined({
  typeName: ZodFirstPartyTypeKind.ZodUndefined,
  ...processCreateParams(params)
});
var ZodNull = class extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.null) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => new ZodNull({
  typeName: ZodFirstPartyTypeKind.ZodNull,
  ...processCreateParams(params)
});
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => new ZodAny({
  typeName: ZodFirstPartyTypeKind.ZodAny,
  ...processCreateParams(params)
});
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => new ZodUnknown({
  typeName: ZodFirstPartyTypeKind.ZodUnknown,
  ...processCreateParams(params)
});
var ZodNever = class extends ZodType {
  _parse(input) {
    let ctx = this._getOrReturnCtx(input);
    return addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    }), INVALID;
  }
};
ZodNever.create = (params) => new ZodNever({
  typeName: ZodFirstPartyTypeKind.ZodNever,
  ...processCreateParams(params)
});
var ZodVoid = class extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.undefined) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => new ZodVoid({
  typeName: ZodFirstPartyTypeKind.ZodVoid,
  ...processCreateParams(params)
});
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    let { ctx, status } = this._processInputParams(input), def = this._def;
    if (ctx.parsedType !== ZodParsedType.array)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      }), INVALID;
    if (def.exactLength !== null) {
      let tooBig = ctx.data.length > def.exactLength.value, tooSmall = ctx.data.length < def.exactLength.value;
      (tooBig || tooSmall) && (addIssueToContext(ctx, {
        code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
        minimum: tooSmall ? def.exactLength.value : void 0,
        maximum: tooBig ? def.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: def.exactLength.message
      }), status.dirty());
    }
    if (def.minLength !== null && ctx.data.length < def.minLength.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_small,
      minimum: def.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: def.minLength.message
    }), status.dirty()), def.maxLength !== null && ctx.data.length > def.maxLength.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_big,
      maximum: def.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: def.maxLength.message
    }), status.dirty()), ctx.common.async)
      return Promise.all([...ctx.data].map((item, i) => def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i)))).then((result2) => ParseStatus.mergeArray(status, result2));
    let result = [...ctx.data].map((item, i) => def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => new ZodArray({
  type: schema,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ZodFirstPartyTypeKind.ZodArray,
  ...processCreateParams(params)
});
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    let newShape = {};
    for (let key in schema.shape) {
      let fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else return schema instanceof ZodArray ? new ZodArray({
    ...schema._def,
    type: deepPartialify(schema.element)
  }) : schema instanceof ZodOptional ? ZodOptional.create(deepPartialify(schema.unwrap())) : schema instanceof ZodNullable ? ZodNullable.create(deepPartialify(schema.unwrap())) : schema instanceof ZodTuple ? ZodTuple.create(schema.items.map((item) => deepPartialify(item))) : schema;
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    let shape = this._def.shape(), keys = util.objectKeys(shape);
    return this._cached = { shape, keys };
  }
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.object) {
      let ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      }), INVALID;
    }
    let { status, ctx } = this._processInputParams(input), { shape, keys: shapeKeys } = this._getCached(), extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip"))
      for (let key in ctx.data)
        shapeKeys.includes(key) || extraKeys.push(key);
    let pairs = [];
    for (let key of shapeKeys) {
      let keyValidator = shape[key], value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      let unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough")
        for (let key of extraKeys)
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
      else if (unknownKeys === "strict")
        extraKeys.length > 0 && (addIssueToContext(ctx, {
          code: ZodIssueCode.unrecognized_keys,
          keys: extraKeys
        }), status.dirty());
      else if (unknownKeys !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      let catchall = this._def.catchall;
      for (let key of extraKeys) {
        let value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    return ctx.common.async ? Promise.resolve().then(async () => {
      let syncPairs = [];
      for (let pair of pairs) {
        let key = await pair.key;
        syncPairs.push({
          key,
          value: await pair.value,
          alwaysSet: pair.alwaysSet
        });
      }
      return syncPairs;
    }).then((syncPairs) => ParseStatus.mergeObjectSync(status, syncPairs)) : ParseStatus.mergeObjectSync(status, pairs);
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    return errorUtil.errToObj, new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          var _a, _b, _c, _d;
          let defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
          return issue.code === "unrecognized_keys" ? {
            message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
          } : {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    return new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    let shape = {};
    return util.objectKeys(mask).forEach((key) => {
      mask[key] && this.shape[key] && (shape[key] = this.shape[key]);
    }), new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    let shape = {};
    return util.objectKeys(this.shape).forEach((key) => {
      mask[key] || (shape[key] = this.shape[key]);
    }), new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    let newShape = {};
    return util.objectKeys(this.shape).forEach((key) => {
      let fieldSchema = this.shape[key];
      mask && !mask[key] ? newShape[key] = fieldSchema : newShape[key] = fieldSchema.optional();
    }), new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    let newShape = {};
    return util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key])
        newShape[key] = this.shape[key];
      else {
        let newField = this.shape[key];
        for (; newField instanceof ZodOptional; )
          newField = newField._def.innerType;
        newShape[key] = newField;
      }
    }), new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => new ZodObject({
  shape: () => shape,
  unknownKeys: "strip",
  catchall: ZodNever.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...processCreateParams(params)
});
ZodObject.strictCreate = (shape, params) => new ZodObject({
  shape: () => shape,
  unknownKeys: "strict",
  catchall: ZodNever.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...processCreateParams(params)
});
ZodObject.lazycreate = (shape, params) => new ZodObject({
  shape,
  unknownKeys: "strip",
  catchall: ZodNever.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...processCreateParams(params)
});
var ZodUnion = class extends ZodType {
  _parse(input) {
    let { ctx } = this._processInputParams(input), options = this._def.options;
    function handleResults(results) {
      for (let result of results)
        if (result.result.status === "valid")
          return result.result;
      for (let result of results)
        if (result.result.status === "dirty")
          return ctx.common.issues.push(...result.ctx.common.issues), result.result;
      let unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      }), INVALID;
    }
    if (ctx.common.async)
      return Promise.all(options.map(async (option) => {
        let childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    {
      let dirty, issues = [];
      for (let option of options) {
        let childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        }, result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid")
          return result;
        result.status === "dirty" && !dirty && (dirty = { result, ctx: childCtx }), childCtx.common.issues.length && issues.push(childCtx.common.issues);
      }
      if (dirty)
        return ctx.common.issues.push(...dirty.ctx.common.issues), dirty.result;
      let unionErrors = issues.map((issues2) => new ZodError(issues2));
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      }), INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => new ZodUnion({
  options: types,
  typeName: ZodFirstPartyTypeKind.ZodUnion,
  ...processCreateParams(params)
});
var getDiscriminator = (type) => type instanceof ZodLazy ? getDiscriminator(type.schema) : type instanceof ZodEffects ? getDiscriminator(type.innerType()) : type instanceof ZodLiteral ? [type.value] : type instanceof ZodEnum ? type.options : type instanceof ZodNativeEnum ? Object.keys(type.enum) : type instanceof ZodDefault ? getDiscriminator(type._def.innerType) : type instanceof ZodUndefined ? [void 0] : type instanceof ZodNull ? [null] : null, ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    let { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      }), INVALID;
    let discriminator = this.discriminator, discriminatorValue = ctx.data[discriminator], option = this.optionsMap.get(discriminatorValue);
    return option ? ctx.common.async ? option._parseAsync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }) : option._parseSync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }) : (addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [discriminator]
    }), INVALID);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    let optionsMap = /* @__PURE__ */ new Map();
    for (let type of options) {
      let discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues)
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      for (let value of discriminatorValues) {
        if (optionsMap.has(value))
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  let aType = getParsedType(a), bType = getParsedType(b);
  if (a === b)
    return { valid: !0, data: a };
  if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    let bKeys = util.objectKeys(b), sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1), newObj = { ...a, ...b };
    for (let key of sharedKeys) {
      let sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid)
        return { valid: !1 };
      newObj[key] = sharedValue.data;
    }
    return { valid: !0, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length)
      return { valid: !1 };
    let newArray = [];
    for (let index = 0; index < a.length; index++) {
      let itemA = a[index], itemB = b[index], sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid)
        return { valid: !1 };
      newArray.push(sharedValue.data);
    }
    return { valid: !0, data: newArray };
  } else return aType === ZodParsedType.date && bType === ZodParsedType.date && +a == +b ? { valid: !0, data: a } : { valid: !1 };
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    let { status, ctx } = this._processInputParams(input), handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight))
        return INVALID;
      let merged = mergeValues(parsedLeft.value, parsedRight.value);
      return merged.valid ? ((isDirty(parsedLeft) || isDirty(parsedRight)) && status.dirty(), { status: status.value, value: merged.data }) : (addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_intersection_types
      }), INVALID);
    };
    return ctx.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }),
      this._def.right._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      })
    ]).then(([left, right]) => handleParsed(left, right)) : handleParsed(this._def.left._parseSync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }), this._def.right._parseSync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }));
  }
};
ZodIntersection.create = (left, right, params) => new ZodIntersection({
  left,
  right,
  typeName: ZodFirstPartyTypeKind.ZodIntersection,
  ...processCreateParams(params)
});
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    let { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      }), INVALID;
    if (ctx.data.length < this._def.items.length)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), INVALID;
    !this._def.rest && ctx.data.length > this._def.items.length && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), status.dirty());
    let items = [...ctx.data].map((item, itemIndex) => {
      let schema = this._def.items[itemIndex] || this._def.rest;
      return schema ? schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex)) : null;
    }).filter((x) => !!x);
    return ctx.common.async ? Promise.all(items).then((results) => ParseStatus.mergeArray(status, results)) : ParseStatus.mergeArray(status, items);
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    let { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      }), INVALID;
    let pairs = [], keyType = this._def.keyType, valueType = this._def.valueType;
    for (let key in ctx.data)
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
      });
    return ctx.common.async ? ParseStatus.mergeObjectAsync(status, pairs) : ParseStatus.mergeObjectSync(status, pairs);
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    return second instanceof ZodType ? new _ZodRecord({
      keyType: first,
      valueType: second,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(third)
    }) : new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
}, ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    let { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      }), INVALID;
    let keyType = this._def.keyType, valueType = this._def.valueType, pairs = [...ctx.data.entries()].map(([key, value], index) => ({
      key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
      value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
    }));
    if (ctx.common.async) {
      let finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (let pair of pairs) {
          let key = await pair.key, value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted")
            return INVALID;
          (key.status === "dirty" || value.status === "dirty") && status.dirty(), finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      let finalMap = /* @__PURE__ */ new Map();
      for (let pair of pairs) {
        let key = pair.key, value = pair.value;
        if (key.status === "aborted" || value.status === "aborted")
          return INVALID;
        (key.status === "dirty" || value.status === "dirty") && status.dirty(), finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => new ZodMap({
  valueType,
  keyType,
  typeName: ZodFirstPartyTypeKind.ZodMap,
  ...processCreateParams(params)
});
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    let { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      }), INVALID;
    let def = this._def;
    def.minSize !== null && ctx.data.size < def.minSize.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_small,
      minimum: def.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: def.minSize.message
    }), status.dirty()), def.maxSize !== null && ctx.data.size > def.maxSize.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_big,
      maximum: def.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: def.maxSize.message
    }), status.dirty());
    let valueType = this._def.valueType;
    function finalizeSet(elements2) {
      let parsedSet = /* @__PURE__ */ new Set();
      for (let element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        element.status === "dirty" && status.dirty(), parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    let elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    return ctx.common.async ? Promise.all(elements).then((elements2) => finalizeSet(elements2)) : finalizeSet(elements);
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => new ZodSet({
  valueType,
  minSize: null,
  maxSize: null,
  typeName: ZodFirstPartyTypeKind.ZodSet,
  ...processCreateParams(params)
});
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(input) {
    let { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      }), INVALID;
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    let params = { errorMap: ctx.common.contextualErrorMap }, fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      let me = this;
      return OK(async function(...args) {
        let error = new ZodError([]), parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          throw error.addIssue(makeArgsIssue(args, e)), error;
        }), result = await Reflect.apply(fn, this, parsedArgs);
        return await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          throw error.addIssue(makeReturnsIssue(result, e)), error;
        });
      });
    } else {
      let me = this;
      return OK(function(...args) {
        let parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success)
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        let result = Reflect.apply(fn, this, parsedArgs.data), parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success)
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    return this.parse(func);
  }
  strictImplement(func) {
    return this.parse(func);
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args || ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
}, ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    let { ctx } = this._processInputParams(input);
    return this._def.getter()._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => new ZodLazy({
  getter,
  typeName: ZodFirstPartyTypeKind.ZodLazy,
  ...processCreateParams(params)
});
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      }), INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => new ZodLiteral({
  value,
  typeName: ZodFirstPartyTypeKind.ZodLiteral,
  ...processCreateParams(params)
});
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data != "string") {
      let ctx = this._getOrReturnCtx(input), expectedValues = this._def.values;
      return addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      }), INVALID;
    }
    if (this._def.values.indexOf(input.data) === -1) {
      let ctx = this._getOrReturnCtx(input), expectedValues = this._def.values;
      return addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      }), INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let enumValues = {};
    for (let val of this._def.values)
      enumValues[val] = val;
    return enumValues;
  }
  get Values() {
    let enumValues = {};
    for (let val of this._def.values)
      enumValues[val] = val;
    return enumValues;
  }
  get Enum() {
    let enumValues = {};
    for (let val of this._def.values)
      enumValues[val] = val;
    return enumValues;
  }
  extract(values) {
    return _ZodEnum.create(values);
  }
  exclude(values) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)));
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    let nativeEnumValues = util.getValidEnumValues(this._def.values), ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      let expectedValues = util.objectValues(nativeEnumValues);
      return addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      }), INVALID;
    }
    if (nativeEnumValues.indexOf(input.data) === -1) {
      let expectedValues = util.objectValues(nativeEnumValues);
      return addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      }), INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => new ZodNativeEnum({
  values,
  typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
  ...processCreateParams(params)
});
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    let { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === !1)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      }), INVALID;
    let promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => this._def.type.parseAsync(data, {
      path: ctx.path,
      errorMap: ctx.common.contextualErrorMap
    })));
  }
};
ZodPromise.create = (schema, params) => new ZodPromise({
  type: schema,
  typeName: ZodFirstPartyTypeKind.ZodPromise,
  ...processCreateParams(params)
});
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    let { status, ctx } = this._processInputParams(input), effect = this._def.effect || null, checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg), arg.fatal ? status.abort() : status.dirty();
      },
      get path() {
        return ctx.path;
      }
    };
    if (checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx), effect.type === "preprocess") {
      let processed = effect.transform(ctx.data, checkCtx);
      return ctx.common.issues.length ? {
        status: "dirty",
        value: ctx.data
      } : ctx.common.async ? Promise.resolve(processed).then((processed2) => this._def.schema._parseAsync({
        data: processed2,
        path: ctx.path,
        parent: ctx
      })) : this._def.schema._parseSync({
        data: processed,
        path: ctx.path,
        parent: ctx
      });
    }
    if (effect.type === "refinement") {
      let executeRefinement = (acc) => {
        let result = effect.refinement(acc, checkCtx);
        if (ctx.common.async)
          return Promise.resolve(result);
        if (result instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return acc;
      };
      if (ctx.common.async === !1) {
        let inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        return inner.status === "aborted" ? INVALID : (inner.status === "dirty" && status.dirty(), executeRefinement(inner.value), { status: status.value, value: inner.value });
      } else
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => inner.status === "aborted" ? INVALID : (inner.status === "dirty" && status.dirty(), executeRefinement(inner.value).then(() => ({ status: status.value, value: inner.value }))));
    }
    if (effect.type === "transform")
      if (ctx.common.async === !1) {
        let base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        let result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: status.value, value: result };
      } else
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => isValid(base) ? Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result })) : base);
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => new ZodEffects({
  schema,
  typeName: ZodFirstPartyTypeKind.ZodEffects,
  effect,
  ...processCreateParams(params)
});
ZodEffects.createWithPreprocess = (preprocess, schema, params) => new ZodEffects({
  schema,
  effect: { type: "preprocess", transform: preprocess },
  typeName: ZodFirstPartyTypeKind.ZodEffects,
  ...processCreateParams(params)
});
var ZodOptional = class extends ZodType {
  _parse(input) {
    return this._getType(input) === ZodParsedType.undefined ? OK(void 0) : this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => new ZodOptional({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodOptional,
  ...processCreateParams(params)
});
var ZodNullable = class extends ZodType {
  _parse(input) {
    return this._getType(input) === ZodParsedType.null ? OK(null) : this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => new ZodNullable({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodNullable,
  ...processCreateParams(params)
});
var ZodDefault = class extends ZodType {
  _parse(input) {
    let { ctx } = this._processInputParams(input), data = ctx.data;
    return ctx.parsedType === ZodParsedType.undefined && (data = this._def.defaultValue()), this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => new ZodDefault({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodDefault,
  defaultValue: typeof params.default == "function" ? params.default : () => params.default,
  ...processCreateParams(params)
});
var ZodCatch = class extends ZodType {
  _parse(input) {
    let { ctx } = this._processInputParams(input), newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    }, result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    return isAsync(result) ? result.then((result2) => ({
      status: "valid",
      value: result2.status === "valid" ? result2.value : this._def.catchValue({
        get error() {
          return new ZodError(newCtx.common.issues);
        },
        input: newCtx.data
      })
    })) : {
      status: "valid",
      value: result.status === "valid" ? result.value : this._def.catchValue({
        get error() {
          return new ZodError(newCtx.common.issues);
        },
        input: newCtx.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => new ZodCatch({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodCatch,
  catchValue: typeof params.catch == "function" ? params.catch : () => params.catch,
  ...processCreateParams(params)
});
var ZodNaN = class extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.nan) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      }), INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => new ZodNaN({
  typeName: ZodFirstPartyTypeKind.ZodNaN,
  ...processCreateParams(params)
});
var BRAND = /* @__PURE__ */ Symbol("zod_brand"), ZodBranded = class extends ZodType {
  _parse(input) {
    let { ctx } = this._processInputParams(input), data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
}, ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    let { status, ctx } = this._processInputParams(input);
    if (ctx.common.async)
      return (async () => {
        let inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        return inResult.status === "aborted" ? INVALID : inResult.status === "dirty" ? (status.dirty(), DIRTY(inResult.value)) : this._def.out._parseAsync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      })();
    {
      let inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      return inResult.status === "aborted" ? INVALID : inResult.status === "dirty" ? (status.dirty(), {
        status: "dirty",
        value: inResult.value
      }) : this._def.out._parseSync({
        data: inResult.value,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
}, ZodReadonly = class extends ZodType {
  _parse(input) {
    let result = this._def.innerType._parse(input);
    return isValid(result) && (result.value = Object.freeze(result.value)), result;
  }
};
ZodReadonly.create = (type, params) => new ZodReadonly({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodReadonly,
  ...processCreateParams(params)
});
var custom = (check, params = {}, fatal) => check ? ZodAny.create().superRefine((data, ctx) => {
  var _a, _b;
  if (!check(data)) {
    let p = typeof params == "function" ? params(data) : typeof params == "string" ? { message: params } : params, _fatal = (_b = (_a = p.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : !0, p2 = typeof p == "string" ? { message: p } : p;
    ctx.addIssue({ code: "custom", ...p2, fatal: _fatal });
  }
}) : ZodAny.create(), late = {
  object: ZodObject.lazycreate
}, ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2.ZodString = "ZodString", ZodFirstPartyTypeKind2.ZodNumber = "ZodNumber", ZodFirstPartyTypeKind2.ZodNaN = "ZodNaN", ZodFirstPartyTypeKind2.ZodBigInt = "ZodBigInt", ZodFirstPartyTypeKind2.ZodBoolean = "ZodBoolean", ZodFirstPartyTypeKind2.ZodDate = "ZodDate", ZodFirstPartyTypeKind2.ZodSymbol = "ZodSymbol", ZodFirstPartyTypeKind2.ZodUndefined = "ZodUndefined", ZodFirstPartyTypeKind2.ZodNull = "ZodNull", ZodFirstPartyTypeKind2.ZodAny = "ZodAny", ZodFirstPartyTypeKind2.ZodUnknown = "ZodUnknown", ZodFirstPartyTypeKind2.ZodNever = "ZodNever", ZodFirstPartyTypeKind2.ZodVoid = "ZodVoid", ZodFirstPartyTypeKind2.ZodArray = "ZodArray", ZodFirstPartyTypeKind2.ZodObject = "ZodObject", ZodFirstPartyTypeKind2.ZodUnion = "ZodUnion", ZodFirstPartyTypeKind2.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", ZodFirstPartyTypeKind2.ZodIntersection = "ZodIntersection", ZodFirstPartyTypeKind2.ZodTuple = "ZodTuple", ZodFirstPartyTypeKind2.ZodRecord = "ZodRecord", ZodFirstPartyTypeKind2.ZodMap = "ZodMap", ZodFirstPartyTypeKind2.ZodSet = "ZodSet", ZodFirstPartyTypeKind2.ZodFunction = "ZodFunction", ZodFirstPartyTypeKind2.ZodLazy = "ZodLazy", ZodFirstPartyTypeKind2.ZodLiteral = "ZodLiteral", ZodFirstPartyTypeKind2.ZodEnum = "ZodEnum", ZodFirstPartyTypeKind2.ZodEffects = "ZodEffects", ZodFirstPartyTypeKind2.ZodNativeEnum = "ZodNativeEnum", ZodFirstPartyTypeKind2.ZodOptional = "ZodOptional", ZodFirstPartyTypeKind2.ZodNullable = "ZodNullable", ZodFirstPartyTypeKind2.ZodDefault = "ZodDefault", ZodFirstPartyTypeKind2.ZodCatch = "ZodCatch", ZodFirstPartyTypeKind2.ZodPromise = "ZodPromise", ZodFirstPartyTypeKind2.ZodBranded = "ZodBranded", ZodFirstPartyTypeKind2.ZodPipeline = "ZodPipeline", ZodFirstPartyTypeKind2.ZodReadonly = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params), stringType = ZodString.create, numberType = ZodNumber.create, nanType = ZodNaN.create, bigIntType = ZodBigInt.create, booleanType = ZodBoolean.create, dateType = ZodDate.create, symbolType = ZodSymbol.create, undefinedType = ZodUndefined.create, nullType = ZodNull.create, anyType = ZodAny.create, unknownType = ZodUnknown.create, neverType = ZodNever.create, voidType = ZodVoid.create, arrayType = ZodArray.create, objectType = ZodObject.create, strictObjectType = ZodObject.strictCreate, unionType = ZodUnion.create, discriminatedUnionType = ZodDiscriminatedUnion.create, intersectionType = ZodIntersection.create, tupleType = ZodTuple.create, recordType = ZodRecord.create, mapType = ZodMap.create, setType = ZodSet.create, functionType = ZodFunction.create, lazyType = ZodLazy.create, literalType = ZodLiteral.create, enumType = ZodEnum.create, nativeEnumType = ZodNativeEnum.create, promiseType = ZodPromise.create, effectsType = ZodEffects.create, optionalType = ZodOptional.create, nullableType = ZodNullable.create, preprocessType = ZodEffects.createWithPreprocess, pipelineType = ZodPipeline.create, ostring = () => stringType().optional(), onumber = () => numberType().optional(), oboolean = () => booleanType().optional(), coerce = {
  string: ((arg) => ZodString.create({ ...arg, coerce: !0 })),
  number: ((arg) => ZodNumber.create({ ...arg, coerce: !0 })),
  boolean: ((arg) => ZodBoolean.create({
    ...arg,
    coerce: !0
  })),
  bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: !0 })),
  date: ((arg) => ZodDate.create({ ...arg, coerce: !0 }))
}, NEVER = INVALID, z = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  ZodReadonly,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  enum: enumType,
  function: functionType,
  instanceof: instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  null: nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  undefined: undefinedType,
  union: unionType,
  unknown: unknownType,
  void: voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
});

// ../workflows-shared/src/lib/validators.ts
var MAX_WORKFLOW_INSTANCE_ID_LENGTH = 100, MAX_STEP_NAME_LENGTH = 256, ALLOWED_STRING_ID_PATTERN = "^[a-zA-Z0-9_][a-zA-Z0-9-_]*$", ALLOWED_WORKFLOW_INSTANCE_ID_REGEX = new RegExp(
  ALLOWED_STRING_ID_PATTERN
);
var CONTROL_CHAR_REGEX = new RegExp("[\0-]");
function isValidWorkflowInstanceId(id) {
  return typeof id != "string" || id.length > MAX_WORKFLOW_INSTANCE_ID_LENGTH ? !1 : ALLOWED_WORKFLOW_INSTANCE_ID_REGEX.test(id);
}
function isValidStepName(name) {
  return name.length > MAX_STEP_NAME_LENGTH ? !1 : !CONTROL_CHAR_REGEX.test(name);
}
var STEP_CONFIG_SCHEMA = z.object({
  retries: z.object({
    delay: z.number().gte(0).or(z.string()),
    limit: z.number().gte(0),
    backoff: z.enum(["constant", "linear", "exponential"]).optional()
  }).strict().optional(),
  timeout: z.number().gte(0).or(z.string()).optional()
}).strict();
function isValidStepConfig(stepConfig) {
  let config = STEP_CONFIG_SCHEMA.safeParse(stepConfig);
  return !(!config.success || config.data.retries !== void 0 && Number.isNaN(r(config.data.retries.delay)) || config.data.timeout !== void 0 && (config.data.timeout == 0 || Number.isNaN(r(config.data.timeout))));
}

// ../workflows-shared/src/lib/rollback.ts
var ROLLBACK_CACHE_KEY_PREFIX = "rollback:";
function parseRollbackOptions(stepName, options) {
  if (options === void 0)
    return;
  if (typeof options != "object" || options === null || Array.isArray(options)) {
    let error = new WorkflowFatalError(
      `Rollback options for "${stepName}" must be an object`
    );
    throw error.isUserError = !0, error;
  }
  let rollbackOptions = options;
  if (typeof rollbackOptions.rollback != "function") {
    let error = new WorkflowFatalError(
      `Rollback for "${stepName}" must be a function`
    );
    throw error.isUserError = !0, error;
  }
  if (rollbackOptions.rollbackConfig !== void 0 && !isValidStepConfig(rollbackOptions.rollbackConfig)) {
    let error = new WorkflowFatalError(
      `Rollback config for "${stepName}" is in a invalid format. See https://developers.cloudflare.com/workflows/build/sleeping-and-retrying/`
    );
    throw error.isUserError = !0, error;
  }
  return rollbackOptions;
}
function dupRollbackStub(fn) {
  return fn.dup ? fn.dup() : fn;
}
function disposeRollbackStub(fn) {
  try {
    fn[Symbol.dispose]?.();
  } catch (err) {
    console.warn("Failed to dispose rollback stub", err);
  }
}
function registerRollbackFn(registry, registration) {
  let { cacheKey, fn, stepContext, output, config } = registration, existing = registry.get(cacheKey);
  existing && disposeRollbackStub(existing.fn), registry.set(cacheKey, {
    fn: dupRollbackStub(fn),
    stepContext,
    ..."output" in registration && { output },
    ...config !== void 0 && { config }
  });
}
function clearRollbackRegistry(registry) {
  for (let entry of registry.values())
    disposeRollbackStub(entry.fn);
  registry.clear();
}
function getRollbackRegistryEntriesInExecutionOrder(engine) {
  let entries = [], seen = /* @__PURE__ */ new Set(), stepStartGroupKeysDesc = engine.readStepStartGroupKeysDesc(), rollbackRegistryEntriesDesc = [
    ...engine.rollbackRegistry.entries()
  ].reverse();
  for (let cacheKey of stepStartGroupKeysDesc) {
    let entry = engine.rollbackRegistry.get(cacheKey);
    entry === void 0 || seen.has(cacheKey) || (entries.push([cacheKey, entry]), seen.add(cacheKey));
  }
  for (let [cacheKey, entry] of rollbackRegistryEntriesDesc)
    seen.has(cacheKey) || entries.push([cacheKey, entry]);
  return entries;
}
async function executeRollbacks(engine, triggerError) {
  if (engine.rollbackRegistry.size === 0)
    return { ranAny: !1, allSucceeded: !0 };
  let entries = getRollbackRegistryEntriesInExecutionOrder(engine);
  engine.rollbackRegistry.clear(), engine.writeLog(17 /* ROLLBACK_START */, null, null, {
    triggerError: { name: triggerError.name, message: triggerError.message },
    totalSteps: entries.length
  });
  let allSucceeded = !0, completed = 0, stoppedAt = entries.length;
  for (let [i, [cacheKey, entry]] of entries.entries()) {
    let ctx = engine.createRollbackContext({ cacheKey }), rollbackName = `${entry.stepContext.step.name}-${entry.stepContext.step.count}`;
    try {
      await ctx.do(rollbackName, entry.config ?? {}, async () => {
        await entry.fn({
          ctx: structuredClone(entry.stepContext),
          error: triggerError,
          output: entry.output,
          stepName: rollbackName
        });
      }), completed++;
    } catch {
      allSucceeded = !1, stoppedAt = i + 1;
      break;
    } finally {
      disposeRollbackStub(entry.fn);
    }
  }
  let remainingEntries = entries.slice(stoppedAt);
  for (let [, entry] of remainingEntries)
    disposeRollbackStub(entry.fn);
  return engine.writeLog(
    allSucceeded ? 24 /* ROLLBACK_COMPLETE */ : 25 /* ROLLBACK_FAILED */,
    null,
    null,
    { totalSteps: entries.length, completedSteps: completed }
  ), { ranAny: completed > 0, allSucceeded };
}

// ../workflows-shared/src/lib/streams.ts
var DEFAULT_STREAM_OUTPUT_CHUNK_SIZE = 256 * 1024, STREAM_OUTPUT_META_SUFFIX = "-value-stream-meta", MAX_STREAM_OUTPUT_INPUT_CHUNK_BYTES = 16 * 1024 * 1024, STREAMING_STEP_CHUNKS_TABLE = "streaming_step_chunks";
var DO_STORAGE_LIMIT = 1024 * 1024 * 1024 + 100 * 1024 * 1024, STREAM_OUTPUT_STORAGE_WRITE_HEADROOM_BYTES = 16 * 1024;
var InvalidStoredStreamOutputError = class extends Error {
  name = "InvalidStoredStreamOutputError";
};
function getStreamOutputMetaKey(cacheKey) {
  return `${cacheKey}${STREAM_OUTPUT_META_SUFFIX}`;
}
function isReadableStreamLike(value) {
  return value instanceof ReadableStream;
}
function createInvalidStepReadableStreamError() {
  return new InvalidStepReadableStreamError(
    "Step returned a ReadableStream that is already locked or otherwise unreadable. Return a fresh, unlocked ReadableStream from step.do()."
  );
}
function createOversizedStreamChunkError() {
  return new OversizedStreamChunkError(
    `Step returned a ReadableStream chunk larger than the maximum allowed size of ${MAX_STREAM_OUTPUT_INPUT_CHUNK_BYTES} bytes. Return smaller chunks from step.do().`
  );
}
function normalizeChunkToUint8Array(value) {
  if (value instanceof Uint8Array)
    return value;
  if (value instanceof ArrayBuffer)
    return new Uint8Array(value);
  if (ArrayBuffer.isView(value) && !(value instanceof DataView))
    return new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
  throw new UnsupportedStreamChunkError(
    "Step returned a ReadableStream with unsupported chunk type. Only ArrayBuffer and TypedArray chunks are supported."
  );
}
function takeBufferedBytes(bufferedChunks, byteLength) {
  let output = new Uint8Array(byteLength), offset = 0;
  for (; offset < byteLength; ) {
    let chunk = bufferedChunks[0], remaining = byteLength - offset;
    if (chunk.byteLength <= remaining) {
      output.set(chunk, offset), offset += chunk.byteLength, bufferedChunks.shift();
      continue;
    }
    output.set(chunk.subarray(0, remaining), offset), bufferedChunks[0] = chunk.subarray(remaining), offset += remaining;
  }
  return output;
}
async function* iterateStreamChunks(stream, signal) {
  if (stream.locked)
    throw createInvalidStepReadableStreamError();
  if (signal?.aborted)
    throw signal.reason ?? new DOMException("The operation was aborted.", "AbortError");
  let reader;
  try {
    reader = stream.getReader();
  } catch (error) {
    throw error instanceof TypeError ? createInvalidStepReadableStreamError() : error;
  }
  let onAbort = () => {
    reader.cancel(
      signal?.reason ?? new DOMException("The operation was aborted.", "AbortError")
    ).catch(() => {
    });
  };
  signal?.addEventListener("abort", onAbort, { once: !0 });
  let fullyRead = !1;
  try {
    for (; ; ) {
      let readResult;
      try {
        readResult = await reader.read();
      } catch (readError) {
        throw signal?.aborted ? signal.reason ?? new DOMException("The operation was aborted.", "AbortError") : new InvalidStepReadableStreamError(
          "Failed to read from step ReadableStream output. " + (readError instanceof Error ? readError.message : String(readError))
        );
      }
      if (signal?.aborted)
        throw signal.reason ?? new DOMException("The operation was aborted.", "AbortError");
      if (readResult.done) {
        fullyRead = !0;
        return;
      }
      yield normalizeChunkToUint8Array(readResult.value);
    }
  } finally {
    signal?.removeEventListener("abort", onAbort), fullyRead || await reader.cancel(
      new Error("stream output consumption stopped before completion")
    ).catch(() => {
    });
    try {
      reader.releaseLock();
    } catch {
    }
  }
}
function deleteAttemptChunks(storage, cacheKey, attempt) {
  storage.sql.exec(
    `DELETE FROM ${STREAMING_STEP_CHUNKS_TABLE} WHERE cache_key = ? AND attempt = ?`,
    cacheKey,
    attempt
  );
}
async function deleteMetaForAttempt(storage, cacheKey, attempt) {
  let metaKey = getStreamOutputMetaKey(cacheKey), maybeMeta = await storage.get(metaKey);
  maybeMeta !== void 0 && maybeMeta.attempt === attempt && await storage.delete(metaKey);
}
function getStreamOutputChunkSummary(storage, cacheKey, attempt) {
  let row = storage.sql.exec(
    [
      "SELECT",
      "  COUNT(*) AS chunkCount,",
      "  MIN(chunk_index) AS minChunkIndex,",
      "  MAX(chunk_index) AS maxChunkIndex,",
      "  CAST(COALESCE(SUM(LENGTH(chunk)), 0) AS INTEGER) AS totalBytes",
      `FROM ${STREAMING_STEP_CHUNKS_TABLE}`,
      "WHERE cache_key = ? AND attempt = ?"
    ].join(`
`),
    cacheKey,
    attempt
  ).one();
  if (row === null)
    throw new Error("Expected stream chunk summary query to return a row");
  return row;
}
function getInvalidStoredStreamOutputError(storage, cacheKey, meta) {
  let summary = getStreamOutputChunkSummary(storage, cacheKey, meta.attempt);
  if (meta.chunkCount === 0) {
    if (summary.chunkCount === 0 && summary.totalBytes === 0 && summary.minChunkIndex === null && summary.maxChunkIndex === null)
      return;
  } else if (summary.chunkCount === meta.chunkCount && summary.minChunkIndex === 0 && summary.maxChunkIndex === meta.chunkCount - 1 && summary.totalBytes === meta.totalBytes)
    return;
  return new InvalidStoredStreamOutputError(
    `Stored streamed step output is corrupt or incomplete for cache key ${cacheKey}. Expected ${meta.chunkCount} chunks / ${meta.totalBytes} bytes, found ${summary.chunkCount} chunks / ${summary.totalBytes} bytes with chunk index range ${summary.minChunkIndex ?? "null"}..${summary.maxChunkIndex ?? "null"}.`
  );
}
function readStreamOutputPreviewBytes(options) {
  let { storage, cacheKey, attempt, maxBytes } = options, cursor = storage.sql.exec(
    `SELECT chunk_index, chunk FROM ${STREAMING_STEP_CHUNKS_TABLE} WHERE cache_key = ? AND attempt = ? ORDER BY chunk_index`,
    cacheKey,
    attempt
  ), previewChunks = [], expectedChunkIndex = 0, totalBytes = 0;
  for (; totalBytes < maxBytes; ) {
    let row = cursor.next();
    if (row.done)
      break;
    if (row.value.chunk_index !== expectedChunkIndex)
      throw new InvalidStoredStreamOutputError(
        `Missing chunk ${expectedChunkIndex} for streamed step output`
      );
    if (!(row.value.chunk instanceof ArrayBuffer))
      throw new InvalidStoredStreamOutputError(
        "Invalid chunk type returned from streaming_step_chunks table"
      );
    let chunkBytes = new Uint8Array(row.value.chunk), remainingBytes = maxBytes - totalBytes, previewChunk = chunkBytes.byteLength > remainingBytes ? chunkBytes.subarray(0, remainingBytes) : chunkBytes;
    previewChunks.push(previewChunk), totalBytes += previewChunk.byteLength, expectedChunkIndex++;
  }
  return takeBufferedBytes(previewChunks, totalBytes);
}
function getStoredStreamOutputPreview(options) {
  let { storage, cacheKey, meta, maxChars } = options;
  if (meta.state !== "complete" /* Complete */)
    throw new Error(
      "Cannot preview streamed step output before it is complete"
    );
  let maxPreviewBytes = maxChars * 4, previewBytes = readStreamOutputPreviewBytes({
    storage,
    cacheKey,
    attempt: meta.attempt,
    maxBytes: maxPreviewBytes
  }), previewTruncatedByBytes = meta.totalBytes > previewBytes.byteLength;
  try {
    let decoded = new TextDecoder("utf-8", {
      fatal: !0,
      ignoreBOM: !1
    }).decode(previewBytes, { stream: previewTruncatedByBytes }), previewOutput = decoded.substring(0, maxChars);
    return decoded.length > maxChars || previewTruncatedByBytes ? { type: "text", output: previewOutput + "[truncated output]" } : { type: "text", output: previewOutput };
  } catch {
    return { type: "binary" };
  }
}
async function cleanupPendingStreamOutput(storage, cacheKey) {
  let metaKey = getStreamOutputMetaKey(cacheKey), maybeMeta = await storage.get(metaKey);
  maybeMeta !== void 0 && maybeMeta.state !== "complete" /* Complete */ && await rollbackStreamOutput(storage, cacheKey, maybeMeta.attempt);
}
async function rollbackStreamOutput(storage, cacheKey, attempt) {
  deleteAttemptChunks(storage, cacheKey, attempt), await deleteMetaForAttempt(storage, cacheKey, attempt);
}
async function doWriteStreamOutput(options) {
  let { storage, cacheKey, attempt, stream, signal, skipMetaWrite } = options, chunkSizeBytes = options.chunkSizeBytes ?? DEFAULT_STREAM_OUTPUT_CHUNK_SIZE, metaKey = getStreamOutputMetaKey(cacheKey), maybeInvalidState = (additionalBytes = 0) => {
    if (signal?.aborted)
      return signal.reason ?? new DOMException("The operation was aborted.", "AbortError");
    if (storage.sql.databaseSize + additionalBytes + STREAM_OUTPUT_STORAGE_WRITE_HEADROOM_BYTES > DO_STORAGE_LIMIT)
      return new StreamOutputStorageLimitError(
        "The instance has exceeded the 1GiB storage limit"
      );
  }, initialInvalidState = maybeInvalidState();
  if (initialInvalidState !== void 0)
    throw initialInvalidState;
  let startedAt = Date.now();
  skipMetaWrite || await storage.put(metaKey, {
    version: 1,
    state: "pending" /* Pending */,
    attempt,
    startedAt,
    chunkCount: 0,
    totalBytes: 0,
    committedAt: null
  });
  let chunkCount = 0, totalBytes = 0, bufferedChunks = [], bufferedBytes = 0, outputCommitted = !1, flushChunk = async (bytes) => {
    let invalidState = maybeInvalidState(bytes.byteLength);
    if (invalidState !== void 0)
      throw invalidState;
    storage.sql.exec(
      `INSERT INTO ${STREAMING_STEP_CHUNKS_TABLE} (cache_key, attempt, chunk_index, chunk) VALUES (?, ?, ?, ?)`,
      cacheKey,
      attempt,
      chunkCount,
      bytes
    ), totalBytes += bytes.byteLength, chunkCount++;
  };
  try {
    for await (let bytes of iterateStreamChunks(stream, signal))
      if (bytes.byteLength !== 0) {
        if (bytes.byteLength > MAX_STREAM_OUTPUT_INPUT_CHUNK_BYTES)
          throw createOversizedStreamChunkError();
        for (bufferedChunks.push(bytes), bufferedBytes += bytes.byteLength; bufferedBytes >= chunkSizeBytes; ) {
          let chunk = takeBufferedBytes(bufferedChunks, chunkSizeBytes);
          bufferedBytes -= chunk.byteLength, await flushChunk(chunk);
        }
      }
    bufferedBytes > 0 && (await flushChunk(takeBufferedBytes(bufferedChunks, bufferedBytes)), bufferedBytes = 0);
    let meta = {
      version: 1,
      state: "complete" /* Complete */,
      attempt,
      startedAt,
      chunkCount,
      totalBytes,
      committedAt: Date.now()
    }, invalidState = maybeInvalidState();
    if (invalidState !== void 0)
      throw invalidState;
    return skipMetaWrite || (await storage.put(metaKey, {
      version: 1,
      state: "committing" /* Committing */,
      attempt,
      startedAt,
      chunkCount,
      totalBytes,
      committedAt: null
    }), await storage.put(metaKey, meta)), outputCommitted = !0, meta;
  } catch (error) {
    throw outputCommitted || await rollbackStreamOutput(storage, cacheKey, attempt), error;
  }
}
async function writeStreamOutput(options) {
  let { storage, cacheKey, attempt, timeoutTask, ...writeOptions } = options, writeTask = doWriteStreamOutput({
    storage,
    cacheKey,
    attempt,
    ...writeOptions
  });
  if (timeoutTask === void 0)
    return writeTask;
  try {
    return await Promise.race([writeTask, timeoutTask]);
  } catch (error) {
    if (error instanceof WorkflowTimeoutError) {
      if (options.skipMetaWrite)
        throw writeTask.catch(() => {
        }), error;
      let maybeMeta = await storage.get(
        getStreamOutputMetaKey(cacheKey)
      );
      if (maybeMeta?.attempt === attempt && (maybeMeta.state === "committing" /* Committing */ || maybeMeta.state === "complete" /* Complete */))
        return await writeTask;
      throw writeTask.catch(() => {
      }), error;
    }
    throw error;
  }
}
function createReplayReadableStream(options) {
  let { storage, cacheKey, meta } = options;
  if (meta.state !== "complete" /* Complete */)
    throw new Error("Cannot replay streamed step output before it is complete");
  let chunkCursor = storage.sql.exec(
    `SELECT chunk_index, chunk FROM ${STREAMING_STEP_CHUNKS_TABLE} WHERE cache_key = ? AND attempt = ? ORDER BY chunk_index`,
    cacheKey,
    meta.attempt
  ), index = 0;
  return new ReadableStream({
    pull(controller) {
      if (index >= meta.chunkCount) {
        controller.close();
        return;
      }
      let row = chunkCursor.next();
      if (row.done) {
        controller.error(
          new Error(`Missing chunk ${index} for streamed step output`)
        );
        return;
      }
      if (row.value.chunk_index !== index) {
        controller.error(
          new Error(`Missing chunk ${index} for streamed step output`)
        );
        return;
      }
      if (!(row.value.chunk instanceof ArrayBuffer)) {
        controller.error(
          new Error(
            "Invalid chunk type returned from streaming_step_chunks table"
          )
        );
        return;
      }
      controller.enqueue(new Uint8Array(row.value.chunk)), index++;
    }
  });
}

// ../workflows-shared/src/modifier.ts
import { RpcTarget } from "cloudflare:workers";
var MODIFIER_KEYS = {
  REPLACE_RESULT: "replace-result-",
  MOCK_STEP_ERROR: "mock-step-error-",
  MOCK_EVENT: "mock-event-",
  FORCE_STEP_TIMEOUT: "force-step-timeout-",
  FORCE_EVENT_TIMEOUT: "force-event-timeout-",
  FAILURE_INDEX: "failure-index-",
  DISABLE_SLEEP: "disable-sleep-",
  DISABLE_ALL_SLEEPS: "disableAllSleeps",
  DISABLE_RETRY_DELAY: "disable-retry-delay-",
  DISABLE_ALL_RETRY_DELAYS: "disableAllRetryDelays"
};
var WorkflowInstanceModifier = class extends RpcTarget {
  #engine;
  #state;
  constructor(engine, state) {
    super(), this.#engine = engine, this.#state = state;
  }
  async #getWaitForEventCacheKey(step) {
    let count = 1;
    step.index && (count = step.index);
    let name = `${step.name}-${count}`;
    return `${`${await computeHash(name)}-${count}`}-value`;
  }
  async #getBaseCacheKey(step) {
    let hash = await computeHash(step.name), count = 1;
    return step.index && (count = step.index), `${hash}-${count}`;
  }
  async #getStepCacheKey(step) {
    return `${await this.#getBaseCacheKey(step)}-value`;
  }
  #getAndIncrementCounter = async (valueKey, by) => {
    let counterKey = `${MODIFIER_KEYS.FAILURE_INDEX}${valueKey}`, next = await this.#state.storage.get(counterKey) ?? 1;
    return await this.#state.storage.put(counterKey, next + by), next;
  };
  async #getSleepStepDisableKey(step) {
    let count = 1;
    step.index && (count = step.index);
    let sleepNameCountHash = await computeHash(step.name + count);
    return `${MODIFIER_KEYS.DISABLE_SLEEP}${sleepNameCountHash}`;
  }
  async disableSleeps(steps) {
    if (!steps)
      await this.#state.storage.put(MODIFIER_KEYS.DISABLE_ALL_SLEEPS, !0);
    else
      for (let step of steps) {
        let sleepDisableKey = await this.#getSleepStepDisableKey(step);
        await this.#state.storage.put(sleepDisableKey, !0);
      }
  }
  async disableRetryDelays(steps) {
    if (!steps)
      await this.#state.storage.put(
        MODIFIER_KEYS.DISABLE_ALL_RETRY_DELAYS,
        !0
      );
    else
      for (let step of steps) {
        let valueKey = await this.#getStepCacheKey(step);
        await this.#state.storage.put(
          `${MODIFIER_KEYS.DISABLE_RETRY_DELAY}${valueKey}`,
          !0
        );
      }
  }
  // step.do() flow: It first checks if a result or error is already in the cache and, if so, returns it immediately.
  // If nothing is in the cache, it checks for remaining attempts and runs the user's code against the defined timeout.
  // Since `step.do()` performs this initial cache check, directly changing the `valueKey` would cause it to
  // assume the value was pre-cached, preventing it from writing any logs about the step's execution state.
  // Storing the value under a separate key is crucial because it ensures all execution logs for the step are
  // generated, rather than the step being skipped due to a premature cache hit.
  async mockStepResult(step, stepResult) {
    let valueKey = await this.#getStepCacheKey(step);
    if (await this.#state.storage.get(
      `${MODIFIER_KEYS.REPLACE_RESULT}${valueKey}`
    ))
      throw new Error(
        `[WorkflowIntrospector] Trying to mock step '${step.name}' multiple times!`
      );
    if (isReadableStreamLike(stepResult)) {
      let baseCacheKey = await this.#getBaseCacheKey(step), streamMeta = await writeStreamOutput({
        storage: this.#state.storage,
        cacheKey: baseCacheKey,
        attempt: 0,
        stream: stepResult,
        skipMetaWrite: !0
      });
      await this.#state.storage.put(
        `${MODIFIER_KEYS.REPLACE_RESULT}${valueKey}`,
        {
          __mockStreamOutput: !0,
          cacheKey: baseCacheKey,
          meta: streamMeta
        }
      );
    } else
      await this.#state.storage.put(
        `${MODIFIER_KEYS.REPLACE_RESULT}${valueKey}`,
        stepResult
      );
  }
  // Same logic of `mockStepResult` but stores an error instead of a value.
  async mockStepError(step, error, times) {
    let valueKey = await this.#getStepCacheKey(step), serializableError = {
      name: error.name,
      message: error.message
    };
    if (await this.#state.storage.get(
      `${MODIFIER_KEYS.REPLACE_RESULT}${valueKey}`
    ))
      throw new Error(
        `[WorkflowIntrospector] Trying to mock error on step '${step.name}' after mocking its result!`
      );
    if (times) {
      let start = await this.#getAndIncrementCounter(valueKey, times), mockErrorsPuts = Array.from({ length: times }, (_, i) => {
        let attempt = start + i, mockErrorKey = `${MODIFIER_KEYS.MOCK_STEP_ERROR}${valueKey}-${attempt}`;
        return this.#state.storage.put(mockErrorKey, serializableError);
      });
      await Promise.all(mockErrorsPuts);
    } else {
      let mockErrorKey = `${MODIFIER_KEYS.MOCK_STEP_ERROR}${valueKey}`;
      await this.#state.storage.put(mockErrorKey, serializableError);
    }
  }
  async forceStepTimeout(step, times) {
    let valueKey = await this.#getStepCacheKey(step);
    if (await this.#state.storage.get(
      `${MODIFIER_KEYS.REPLACE_RESULT}${valueKey}`
    ))
      throw new Error(
        `[WorkflowIntrospector] Trying to force timeout on step '${step.name}' after mocking its result!`
      );
    if (times) {
      let start = await this.#getAndIncrementCounter(valueKey, times), forceTimeouts = Array.from({ length: times }, (_, i) => {
        let attempt = start + i, forceStepTimeoutKey = `${MODIFIER_KEYS.FORCE_STEP_TIMEOUT}${valueKey}-${attempt}`;
        return this.#state.storage.put(forceStepTimeoutKey, !0);
      });
      await Promise.all(forceTimeouts);
    } else {
      let forceStepTimeoutKey = `${MODIFIER_KEYS.FORCE_STEP_TIMEOUT}${valueKey}`;
      await this.#state.storage.put(forceStepTimeoutKey, !0);
    }
  }
  async mockEvent(event) {
    let myEvent = {
      timestamp: /* @__PURE__ */ new Date(),
      payload: event.payload,
      type: event.type
    };
    await this.#state.storage.put(
      `${MODIFIER_KEYS.MOCK_EVENT}${event.type}`,
      !0
    ), await this.#engine.receiveEvent(myEvent);
  }
  async forceEventTimeout(step) {
    let waitForEventKey = await this.#getWaitForEventCacheKey(step);
    await this.#state.storage.put(
      `${MODIFIER_KEYS.FORCE_EVENT_TIMEOUT}${waitForEventKey}`,
      !0
    );
  }
};

// ../workflows-shared/src/context.ts
var defaultConfig = {
  retries: {
    limit: 5,
    delay: 1e3,
    backoff: "exponential"
  },
  timeout: "10 minutes"
};
function normalizeForStorage(value, seen = /* @__PURE__ */ new WeakMap()) {
  if (value === null || typeof value != "object")
    return value;
  if (seen.has(value))
    return seen.get(value);
  if (ArrayBuffer.isView(value))
    return buildCompactView(value);
  if (Array.isArray(value)) {
    let result = [];
    seen.set(value, result);
    for (let item of value)
      result.push(normalizeForStorage(item, seen));
    return result;
  }
  if (value instanceof Map) {
    let result = /* @__PURE__ */ new Map();
    seen.set(value, result);
    for (let [k, v] of value)
      result.set(normalizeForStorage(k, seen), normalizeForStorage(v, seen));
    return result;
  }
  if (value instanceof Set) {
    let result = /* @__PURE__ */ new Set();
    seen.set(value, result);
    for (let v of value)
      result.add(normalizeForStorage(v, seen));
    return result;
  }
  let proto = Object.getPrototypeOf(value);
  if (proto === Object.prototype || proto === null) {
    let result = {};
    seen.set(value, result);
    for (let key of Object.keys(value))
      result[key] = normalizeForStorage(
        value[key],
        seen
      );
    return result;
  }
  return value;
}
function buildCompactView(view) {
  let tightBuffer = view.buffer.slice(
    view.byteOffset,
    view.byteOffset + view.byteLength
  );
  return new view.constructor(tightBuffer);
}
var PAUSE_DATETIME = "PAUSE_DATETIME", Context = class extends RpcTarget2 {
  #engine;
  #state;
  #counters = /* @__PURE__ */ new Map();
  #lifetimeStepCounter = 0;
  #rollbackStep;
  constructor(engine, state, rollbackStep) {
    super(), this.#engine = engine, this.#state = state, this.#rollbackStep = rollbackStep;
  }
  async #checkForPendingPause() {
    if (this.#engine.timeoutHandler.isRunningStep())
      return;
    let status = await this.#engine.getStatus();
    if (status === 2 /* Paused */)
      throw new Error(ABORT_REASONS.USER_PAUSE);
    if (status === 6 /* WaitingForPause */) {
      await this.#state.storage.put(PAUSE_DATETIME, /* @__PURE__ */ new Date());
      let metadata = await this.#state.storage.get(INSTANCE_METADATA);
      throw metadata && await this.#engine.setStatus(
        metadata.accountId,
        metadata.instance.id,
        2 /* Paused */
      ), new Error(ABORT_REASONS.USER_PAUSE);
    }
  }
  #getCount(name) {
    let val = this.#counters.get(name) ?? 0;
    return val++, this.#counters.set(name, val), val;
  }
  #registerRollback(options) {
    let { cacheKey, rollbackFn, stepContext, output, rollbackConfig } = options;
    rollbackFn && this.#rollbackStep === void 0 && registerRollbackFn(this.#engine.rollbackRegistry, {
      cacheKey,
      fn: rollbackFn,
      stepContext,
      ..."output" in options && { output },
      ...rollbackConfig !== void 0 && { config: rollbackConfig }
    });
  }
  async do(name, ...rest) {
    let closure, stepConfig, rollbackOptions, first = rest[0];
    if (typeof first == "function")
      closure = first, stepConfig = {}, rollbackOptions = parseRollbackOptions(name, rest[1]);
    else {
      if (stepConfig = first ?? {}, closure = rest[1], typeof closure != "function") {
        let error = new WorkflowFatalError(
          `Step "${name}" requires a callback function`
        );
        throw error.isUserError = !0, error;
      }
      rollbackOptions = parseRollbackOptions(name, rest[2]);
    }
    let { rollback: rollbackFn, rollbackConfig } = rollbackOptions ?? {}, isRollback = this.#rollbackStep !== void 0, events = isRollback ? {
      start: 18 /* ROLLBACK_STEP_START */,
      attemptStart: 19 /* ROLLBACK_ATTEMPT_START */,
      attemptSuccess: 20 /* ROLLBACK_ATTEMPT_SUCCESS */,
      attemptFailure: 21 /* ROLLBACK_ATTEMPT_FAILURE */,
      success: 22 /* ROLLBACK_STEP_SUCCESS */,
      failure: 23 /* ROLLBACK_STEP_FAILURE */
    } : {
      start: 5 /* STEP_START */,
      attemptStart: 10 /* ATTEMPT_START */,
      attemptSuccess: 11 /* ATTEMPT_SUCCESS */,
      attemptFailure: 12 /* ATTEMPT_FAILURE */,
      success: 6 /* STEP_SUCCESS */,
      failure: 7 /* STEP_FAILURE */
    };
    if (!isRollback) {
      this.#lifetimeStepCounter++;
      let stepLimit = this.#engine.stepLimit;
      if (this.#lifetimeStepCounter > stepLimit)
        throw new WorkflowFatalError(
          `The limit of ${stepLimit} steps has been reached. This limit can be changed in your worker configuration.`
        );
    }
    if (!isValidStepName(name)) {
      let error = new WorkflowFatalError(
        `Step name "${name}" exceeds max length (${MAX_STEP_NAME_LENGTH} chars) or invalid characters found`
      );
      throw error.isUserError = !0, error;
    }
    if (!isValidStepConfig(stepConfig)) {
      let error = new WorkflowFatalError(
        `Step config for "${name}" is in a invalid format. See https://developers.cloudflare.com/workflows/build/sleeping-and-retrying/`
      );
      throw error.isUserError = !0, error;
    }
    let config = {
      ...defaultConfig,
      ...stepConfig,
      retries: {
        ...defaultConfig.retries,
        ...stepConfig.retries
      }
    }, cacheKey, count, stepNameWithCounter, rollbackStep = this.#rollbackStep;
    if (rollbackStep !== void 0)
      cacheKey = `${ROLLBACK_CACHE_KEY_PREFIX}${rollbackStep.cacheKey}`, count = 1, stepNameWithCounter = name;
    else {
      let hash = await computeHash(name);
      count = this.#getCount("run-" + name), cacheKey = `${hash}-${count}`, stepNameWithCounter = `${name}-${count}`;
    }
    let valueKey = `${cacheKey}-value`, streamMetaKey = getStreamOutputMetaKey(cacheKey), configKey = `${cacheKey}-config`, errorKey = `${cacheKey}-error`, stepStateKey = `${cacheKey}-metadata`, retryDelayDisableKey = `${MODIFIER_KEYS.DISABLE_RETRY_DELAY}${valueKey}`, maybeMap = await this.#state.storage.get([
      valueKey,
      streamMetaKey,
      configKey,
      errorKey,
      stepStateKey
    ]), maybeStreamMeta = maybeMap.get(streamMetaKey), cachedConfig = maybeMap.get(configKey);
    if (maybeStreamMeta?.state === "complete" /* Complete */) {
      let cachedState = maybeMap.get(stepStateKey);
      if (getInvalidStoredStreamOutputError(
        this.#state.storage,
        cacheKey,
        maybeStreamMeta
      ) !== void 0)
        throw new WorkflowInternalError(
          `Stored output for ${stepNameWithCounter} is corrupt or incomplete.`
        );
      let result2 = createReplayReadableStream({
        storage: this.#state.storage,
        cacheKey,
        meta: maybeStreamMeta
      });
      return this.#registerRollback({
        cacheKey,
        rollbackFn,
        stepContext: {
          step: { name, count },
          attempt: cachedState?.attemptedCount ?? 1,
          config: cachedConfig ?? config
        },
        output: result2,
        rollbackConfig
      }), result2;
    } else maybeStreamMeta != null && await cleanupPendingStreamOutput(this.#state.storage, cacheKey).catch(
      () => {
      }
    );
    let maybeResult = maybeMap.get(valueKey);
    if (maybeResult) {
      let cachedState = maybeMap.get(stepStateKey), result2 = maybeResult.value;
      return this.#registerRollback({
        cacheKey,
        rollbackFn,
        stepContext: {
          step: { name, count },
          attempt: cachedState?.attemptedCount ?? 1,
          config: cachedConfig ?? config
        },
        output: result2,
        rollbackConfig
      }), result2;
    }
    let maybeError = maybeMap.get(
      errorKey
    );
    if (maybeError)
      throw maybeError.isUserError = !0, maybeError;
    cachedConfig === void 0 ? await this.#state.storage.put(configKey, config) : config = cachedConfig;
    let attemptLogs = this.#engine.readLogsFromStep(cacheKey).filter(
      (val) => [
        events.attemptSuccess,
        events.attemptFailure,
        events.attemptStart
      ].includes(val.event)
    );
    if (attemptLogs.length > 0 && attemptLogs.at(-1)?.event === events.attemptStart) {
      let stepState = await this.#state.storage.get(
        stepStateKey
      ) ?? {
        attemptedCount: 1
      }, priorityQueueHash = `${cacheKey}-${stepState.attemptedCount}`, timeoutEntryPQ = this.#engine.priorityQueue.getFirst(
        (a) => a.hash === priorityQueueHash && a.type === "timeout"
      );
      timeoutEntryPQ !== void 0 && this.#engine.priorityQueue.remove(timeoutEntryPQ), this.#engine.writeLog(
        events.attemptFailure,
        cacheKey,
        stepNameWithCounter,
        {
          attempt: stepState.attemptedCount,
          error: {
            name: "WorkflowInternalError",
            message: "Attempt failed due to internal workflows error"
          }
        }
      ), await this.#state.storage.put(stepStateKey, stepState);
    }
    let doWrapper = async (doWrapperClosure) => {
      let stepState = await this.#state.storage.get(
        stepStateKey
      ) ?? {
        attemptedCount: 0
      }, forwardStepContext = () => ({
        step: { name, count },
        attempt: stepState.attemptedCount,
        config
      });
      if (await cleanupPendingStreamOutput(this.#state.storage, cacheKey).catch(
        () => {
        }
      ), await this.#engine.timeoutHandler.acquire(this.#engine), stepState.attemptedCount == 0)
        this.#engine.writeLog(events.start, cacheKey, stepNameWithCounter, {
          config
        });
      else {
        let priorityQueueHash = `${cacheKey}-${stepState.attemptedCount}`, retryEntryPQ = this.#engine.priorityQueue.getFirst(
          (a) => a.hash === priorityQueueHash && a.type === "retry"
        );
        if (retryEntryPQ !== void 0) {
          let disableAllRetryDelays = await this.#state.storage.get(
            MODIFIER_KEYS.DISABLE_ALL_RETRY_DELAYS
          ), disableThisRetryDelay = await this.#state.storage.get(retryDelayDisableKey), disableRetryDelay = disableAllRetryDelays || disableThisRetryDelay;
          await this.#engine.timeoutHandler.release(this.#engine), await scheduler.wait(
            disableRetryDelay ? 0 : retryEntryPQ.targetTimestamp - Date.now()
          ), await this.#engine.timeoutHandler.acquire(this.#engine), this.#engine.priorityQueue.remove({
            hash: priorityQueueHash,
            type: "retry"
          });
        }
      }
      let result2, instanceMetadata = await this.#state.storage.get(INSTANCE_METADATA);
      if (!instanceMetadata)
        throw new Error("instanceMetadata is undefined");
      let { accountId, instance } = instanceMetadata, streamResultSeen = !1, lastStreamMeta, abortController = new AbortController(), stepExecutionSignal = AbortSignal.any([
        abortController.signal,
        this.#engine.engineAbortController.signal
      ]);
      try {
        let timeoutPromise = async () => {
          let priorityQueueHash2 = `${cacheKey}-${stepState.attemptedCount}`, timeout = r(config.timeout);
          forceStepTimeout && (timeout = 0), await this.#engine.priorityQueue.add({
            hash: priorityQueueHash2,
            targetTimestamp: Date.now() + timeout,
            type: "timeout"
          }), await scheduler.wait(timeout), await this.#engine.priorityQueue.remove({
            hash: priorityQueueHash2,
            type: "timeout"
          });
          let error = new WorkflowTimeoutError(
            `Execution timed out after ${timeout}ms`
          );
          throw abortController.abort(error), error;
        };
        this.#engine.writeLog(
          events.attemptStart,
          cacheKey,
          stepNameWithCounter,
          {
            attempt: stepState.attemptedCount + 1
          }
        ), stepState.attemptedCount++, await this.#state.storage.put(stepStateKey, stepState);
        let priorityQueueHash = `${cacheKey}-${stepState.attemptedCount}`, mockErrorKey = `${MODIFIER_KEYS.MOCK_STEP_ERROR}${valueKey}`, persistentMockError = await this.#state.storage.get(mockErrorKey), transientMockError = await this.#state.storage.get(`${mockErrorKey}-${stepState.attemptedCount}`), mockErrorPayload = persistentMockError || transientMockError;
        if (mockErrorPayload) {
          let errorToThrow = new Error(mockErrorPayload.message);
          throw errorToThrow.name = mockErrorPayload.name, errorToThrow;
        }
        let replaceResult = await this.#state.storage.get(
          `${MODIFIER_KEYS.REPLACE_RESULT}${valueKey}`
        ), forceStepTimeoutKey = `${MODIFIER_KEYS.FORCE_STEP_TIMEOUT}${valueKey}`, persistentStepTimeout = await this.#state.storage.get(forceStepTimeoutKey), transientStepTimeout = await this.#state.storage.get(
          `${forceStepTimeoutKey}-${stepState.attemptedCount}`
        ), forceStepTimeout = persistentStepTimeout || transientStepTimeout, timeoutTask, persistStepResult = async (value, activeTimeoutTask) => {
          if (!isReadableStreamLike(value)) {
            let stored = normalizeForStorage(value);
            return await this.#state.storage.put(valueKey, { value: stored }), abortController.abort("step finished"), this.#engine.priorityQueue.remove({
              hash: priorityQueueHash,
              type: "timeout"
            }), value;
          }
          streamResultSeen = !0;
          let streamMeta = await writeStreamOutput({
            storage: this.#state.storage,
            cacheKey,
            attempt: stepState.attemptedCount,
            stream: value,
            signal: stepExecutionSignal,
            timeoutTask: activeTimeoutTask
          });
          return lastStreamMeta = streamMeta, abortController.abort("step finished"), this.#engine.priorityQueue.remove({
            hash: priorityQueueHash,
            type: "timeout"
          }), createReplayReadableStream({
            storage: this.#state.storage,
            cacheKey,
            meta: streamMeta
          });
        };
        if (forceStepTimeout)
          result2 = await timeoutPromise();
        else if (replaceResult)
          if (replaceResult && typeof replaceResult == "object" && replaceResult.__mockStreamOutput) {
            let sentinel = replaceResult;
            result2 = createReplayReadableStream({
              storage: this.#state.storage,
              cacheKey: sentinel.cacheKey,
              meta: sentinel.meta
            });
          } else
            result2 = replaceResult;
        else
          timeoutTask = timeoutPromise(), result2 = await Promise.race([
            doWrapperClosure({
              step: { name, count },
              attempt: stepState.attemptedCount,
              config: structuredClone(config)
            }),
            timeoutTask
          ]);
        try {
          result2 = await persistStepResult(result2, timeoutTask);
        } catch (e) {
          if (abortController.abort("step errored"), this.#engine.priorityQueue.remove({
            hash: priorityQueueHash,
            type: "timeout"
          }), e instanceof WorkflowTimeoutError)
            throw e;
          if (e instanceof InvalidStepReadableStreamError || e instanceof OversizedStreamChunkError || e instanceof UnsupportedStreamChunkError) {
            this.#engine.writeLog(
              events.attemptFailure,
              cacheKey,
              stepNameWithCounter,
              {
                attempt: stepState.attemptedCount,
                error: new WorkflowFatalError(e.message)
              }
            ), this.#engine.writeLog(
              events.failure,
              cacheKey,
              stepNameWithCounter,
              {}
            ), this.#engine.writeLog(3 /* WORKFLOW_FAILURE */, null, null, {
              error: new WorkflowFatalError(
                `The execution of the Workflow instance was terminated, as the step "${name}" returned an invalid ReadableStream output. ${e.message}`
              )
            }), await this.#engine.setStatus(
              accountId,
              instance.id,
              3 /* Errored */
            ), await this.#engine.timeoutHandler.release(this.#engine), await this.#engine.abort(ABORT_REASONS.NOT_SERIALISABLE);
            return;
          }
          if (e instanceof StreamOutputStorageLimitError) {
            this.#engine.writeLog(
              events.attemptFailure,
              cacheKey,
              stepNameWithCounter,
              {
                attempt: stepState.attemptedCount,
                error: new WorkflowFatalError(e.message)
              }
            ), this.#engine.writeLog(
              events.failure,
              cacheKey,
              stepNameWithCounter,
              {}
            ), this.#engine.writeLog(3 /* WORKFLOW_FAILURE */, null, null, {
              error: new WorkflowFatalError(
                "The instance has exceeded the 1GiB storage limit"
              )
            }), await this.#engine.setStatus(
              accountId,
              instance.id,
              3 /* Errored */
            ), await this.#engine.timeoutHandler.release(this.#engine), await this.#engine.abort(ABORT_REASONS.STORAGE_LIMIT_EXCEEDED);
            return;
          }
          if (e instanceof Error && e.name === "DataCloneError")
            this.#engine.writeLog(
              events.attemptFailure,
              cacheKey,
              stepNameWithCounter,
              {
                attempt: stepState.attemptedCount,
                error: new WorkflowFatalError(
                  `Value returned from step "${name}" is not serialisable`
                )
              }
            ), this.#engine.writeLog(
              events.failure,
              cacheKey,
              stepNameWithCounter,
              {}
            ), this.#engine.writeLog(3 /* WORKFLOW_FAILURE */, null, null, {
              error: new WorkflowFatalError(
                `The execution of the Workflow instance was terminated, as the step "${name}" returned a value which is not serialisable`
              )
            }), await this.#engine.setStatus(
              accountId,
              instance.id,
              3 /* Errored */
            ), await this.#engine.timeoutHandler.release(this.#engine), await this.#engine.abort(ABORT_REASONS.NOT_SERIALISABLE);
          else throw e instanceof Error && e.message.includes("string or blob too big: SQLITE_TOOBIG") ? new WorkflowInternalError(
            `Step ${stepNameWithCounter} output is too large. Maximum allowed size is 1MiB.`
          ) : new WorkflowInternalError(
            `Storage failure for ${stepNameWithCounter} due to internal error.`
          );
          return;
        }
        this.#engine.priorityQueue.remove({
          hash: priorityQueueHash,
          type: "timeout"
        }), this.#engine.writeLog(
          events.attemptSuccess,
          cacheKey,
          stepNameWithCounter,
          {
            attempt: stepState.attemptedCount
          }
        );
      } catch (e) {
        let error = e;
        if (this.#engine.priorityQueue.remove({
          hash: `${cacheKey}-${stepState.attemptedCount}`,
          type: "timeout"
        }), streamResultSeen)
          try {
            await rollbackStreamOutput(
              this.#state.storage,
              cacheKey,
              stepState.attemptedCount
            );
          } catch {
          }
        if (e instanceof Error && (error.name === "NonRetryableError" || error.message.startsWith("NonRetryableError"))) {
          let attemptError = shouldPreserveNonRetryableError() ? new PreservedNonRetryableError(e) : new WorkflowFatalError(
            `Step threw a NonRetryableError with message "${e.message}"`
          );
          throw this.#engine.writeLog(
            events.attemptFailure,
            cacheKey,
            stepNameWithCounter,
            {
              attempt: stepState.attemptedCount,
              error: attemptError
            }
          ), this.#engine.writeLog(
            events.failure,
            cacheKey,
            stepNameWithCounter,
            {}
          ), this.#registerRollback({
            cacheKey,
            rollbackFn,
            stepContext: forwardStepContext(),
            rollbackConfig
          }), error;
        }
        if (this.#engine.writeLog(
          events.attemptFailure,
          cacheKey,
          stepNameWithCounter,
          {
            attempt: stepState.attemptedCount,
            error: {
              name: error.name,
              message: error.message
              // TODO (WOR-79): Stacks are all incorrect over RPC and need work
              // stack: error.stack,
            }
          }
        ), await this.#state.storage.put(stepStateKey, stepState), stepState.attemptedCount <= config.retries.limit) {
          let durationMs = calcRetryDuration(config, stepState), disableAllRetryDelays = await this.#state.storage.get(
            MODIFIER_KEYS.DISABLE_ALL_RETRY_DELAYS
          ), disableThisRetryDelay = await this.#state.storage.get(retryDelayDisableKey), effectiveDuration = disableAllRetryDelays || disableThisRetryDelay ? 0 : durationMs, priorityQueueHash = `${cacheKey}-${stepState.attemptedCount}`;
          await this.#engine.priorityQueue.add({
            hash: priorityQueueHash,
            targetTimestamp: Date.now() + effectiveDuration,
            type: "retry"
          }), await this.#engine.timeoutHandler.release(this.#engine);
          {
            let retryPauseSignal = this.#engine.pauseController.signal, pausedDuringRetry = !1;
            await Promise.race([
              scheduler.wait(effectiveDuration),
              new Promise((resolve) => {
                if (retryPauseSignal.aborted) {
                  resolve();
                  return;
                }
                retryPauseSignal.addEventListener("abort", () => resolve(), {
                  once: !0
                });
              })
            ]);
            let retryStatus = await this.#engine.getStatus();
            if ((retryStatus === 2 /* Paused */ || retryStatus === 6 /* WaitingForPause */) && (pausedDuringRetry = !0), pausedDuringRetry)
              throw new Error(ABORT_REASONS.USER_PAUSE);
          }
          return this.#engine.priorityQueue.remove({
            hash: priorityQueueHash,
            type: "retry"
          }), doWrapper(doWrapperClosure);
        } else {
          await this.#engine.timeoutHandler.release(this.#engine);
          try {
            await rollbackStreamOutput(
              this.#state.storage,
              cacheKey,
              stepState.attemptedCount
            );
          } catch {
          }
          throw this.#engine.writeLog(
            events.failure,
            cacheKey,
            stepNameWithCounter,
            {}
          ), this.#registerRollback({
            cacheKey,
            rollbackFn,
            stepContext: forwardStepContext(),
            rollbackConfig
          }), await this.#state.storage.put(errorKey, error), error;
        }
      }
      return this.#engine.writeLog(events.success, cacheKey, stepNameWithCounter, {
        // TODO (WOR-86): Add limits, figure out serialization
        result: lastStreamMeta ? void 0 : result2,
        ...lastStreamMeta && {
          streamOutput: { cacheKey, meta: lastStreamMeta }
        }
      }), this.#registerRollback({
        cacheKey,
        rollbackFn,
        stepContext: forwardStepContext(),
        output: result2,
        rollbackConfig
      }), await this.#engine.timeoutHandler.release(this.#engine), result2;
    }, result = await doWrapper(closure);
    return await this.#checkForPendingPause(), result;
  }
  async sleep(name, duration) {
    typeof duration == "string" && (duration = r(duration));
    let hash = await computeHash(name + duration.toString()), count = this.#getCount("sleep-" + name + duration.toString()), cacheKey = `${hash}-${count}`, sleepNameWithCounter = `${name}-${count}`, sleepKey = `${cacheKey}-value`, sleepLogWrittenKey = `${cacheKey}-log-written`, maybeResult = await this.#state.storage.get(sleepKey), sleepNameCountHash = await computeHash(
      name + this.#getCount("sleep-" + name)
    ), disableThisSleep = await this.#state.storage.get(
      `${MODIFIER_KEYS.DISABLE_SLEEP}${sleepNameCountHash}`
    ), disableSleep = await this.#state.storage.get(
      MODIFIER_KEYS.DISABLE_ALL_SLEEPS
    ) || disableThisSleep;
    if (maybeResult != null) {
      let entryPQ = this.#engine.priorityQueue.getFirst(
        (a) => a.hash === cacheKey && a.type === "sleep"
      );
      entryPQ !== void 0 && (await scheduler.wait(
        disableSleep ? 0 : entryPQ.targetTimestamp - Date.now()
      ), this.#engine.priorityQueue.remove({ hash: cacheKey, type: "sleep" })), await this.#state.storage.get(sleepLogWrittenKey) == null && (this.#engine.writeLog(
        9 /* SLEEP_COMPLETE */,
        cacheKey,
        sleepNameWithCounter,
        {}
      ), await this.#state.storage.put(sleepLogWrittenKey, !0));
      return;
    }
    if (this.#engine.writeLog(
      8 /* SLEEP_START */,
      cacheKey,
      sleepNameWithCounter,
      {
        durationMs: duration
      }
    ), !await this.#state.storage.get(INSTANCE_METADATA))
      throw new Error("instanceMetadata is undefined");
    await this.#state.storage.put(sleepKey, !0), await this.#engine.priorityQueue.add({
      hash: cacheKey,
      targetTimestamp: Date.now() + (disableSleep ? 0 : duration),
      type: "sleep"
    });
    let pauseSignal = this.#engine.pauseController.signal, sleepDuration = disableSleep ? 0 : duration, pausedDuringSleep = !1;
    await Promise.race([
      scheduler.wait(sleepDuration),
      new Promise((resolve) => {
        if (pauseSignal.aborted) {
          resolve();
          return;
        }
        pauseSignal.addEventListener("abort", () => resolve(), {
          once: !0
        });
      })
    ]);
    let statusAfterSleep = await this.#engine.getStatus();
    if ((statusAfterSleep === 2 /* Paused */ || statusAfterSleep === 6 /* WaitingForPause */) && (pausedDuringSleep = !0), pausedDuringSleep)
      throw new Error(ABORT_REASONS.USER_PAUSE);
    this.#engine.writeLog(
      9 /* SLEEP_COMPLETE */,
      cacheKey,
      sleepNameWithCounter,
      {}
    ), await this.#state.storage.put(sleepLogWrittenKey, !0), this.#engine.priorityQueue.remove({ hash: cacheKey, type: "sleep" });
  }
  async sleepUntil(name, timestamp) {
    timestamp instanceof Date && (timestamp = timestamp.valueOf());
    let now = Date.now();
    if (timestamp < now)
      throw new Error(
        "You can't sleep until a time in the past, time-traveler"
      );
    return this.sleep(name, timestamp - now);
  }
  async waitForEvent(name, options) {
    options.timeout || (options.timeout = "24 hours");
    let count = this.#getCount("waitForEvent-" + name), waitForEventNameWithCounter = `${name}-${count}`, cacheKey = `${await computeHash(waitForEventNameWithCounter)}-${count}`, waitForEventKey = `${cacheKey}-value`, errorKey = `${cacheKey}-error`, pendingWaiterRegistered = `${cacheKey}-pending`, timeoutError = new WorkflowTimeoutError(
      `Execution timed out after ${r(options.timeout)}ms`
    ), maybeResult = await this.#state.storage.get(waitForEventKey);
    if (maybeResult)
      return await this.#state.storage.get(waitForEventKey) == null && this.#engine.writeLog(
        15 /* WAIT_COMPLETE */,
        cacheKey,
        waitForEventNameWithCounter,
        maybeResult
      ), maybeResult;
    let maybeError = await this.#state.storage.get(errorKey);
    if (maybeError)
      throw maybeError.isUserError = !0, maybeError;
    await this.#state.storage.get(
      pendingWaiterRegistered
    ) || (this.#engine.writeLog(
      14 /* WAIT_START */,
      cacheKey,
      waitForEventNameWithCounter,
      {
        event: options.type
      }
    ), await this.#state.storage.put(pendingWaiterRegistered, !0));
    let timeoutEntryPQ = this.#engine.priorityQueue.getFirst(
      (a) => a.hash === cacheKey && a.type === "timeout"
    ), forceEventTimeout = await this.#state.storage.get(
      `${MODIFIER_KEYS.FORCE_EVENT_TIMEOUT}${waitForEventKey}`
    );
    if (timeoutEntryPQ === void 0 && this.#engine.priorityQueue !== void 0 && this.#engine.priorityQueue.checkIfExistedInPast({
      hash: cacheKey,
      type: "timeout"
    }) || timeoutEntryPQ !== void 0 && timeoutEntryPQ.targetTimestamp < Date.now() || forceEventTimeout)
      throw this.#engine.writeLog(
        16 /* WAIT_TIMED_OUT */,
        cacheKey,
        waitForEventNameWithCounter,
        {
          name: timeoutError.name,
          message: timeoutError.message
        }
      ), await this.#state.storage.put(errorKey, timeoutError), timeoutError;
    let timeoutPromise = async (timeoutToWait, addToPQ) => {
      let priorityQueueHash = cacheKey;
      addToPQ && await this.#engine.priorityQueue.add({
        hash: priorityQueueHash,
        targetTimestamp: Date.now() + timeoutToWait,
        type: "timeout"
      }), await scheduler.wait(timeoutToWait), this.#engine.priorityQueue.remove({
        hash: priorityQueueHash,
        type: "timeout"
      });
      let error = timeoutError;
      throw error.isUserError = !0, error;
    }, eventPromise = new Promise((resolve) => {
      let eventTypeQueue = this.#engine.eventMap.get(options.type);
      if (eventTypeQueue) {
        let event = eventTypeQueue.shift();
        if (event)
          return this.#engine.eventMap.set(options.type, eventTypeQueue), resolve(event);
      }
      let callbacks = this.#engine.waiters.get(options.type) ?? [];
      callbacks.push([cacheKey, resolve]), this.#engine.waiters.set(options.type, callbacks);
    }), pauseSignal = this.#engine.pauseController.signal, pausePromise = new Promise((resolve) => {
      if (pauseSignal.aborted) {
        resolve();
        return;
      }
      pauseSignal.addEventListener("abort", () => resolve(), {
        once: !0
      });
    }), raceResult = await Promise.race([
      eventPromise,
      timeoutEntryPQ !== void 0 ? timeoutPromise(timeoutEntryPQ.targetTimestamp - Date.now(), !1) : timeoutPromise(r(options.timeout), !0),
      pausePromise
    ]).catch(async (error) => {
      let callbacks = this.#engine.waiters.get(options.type);
      if (callbacks) {
        let idx = callbacks.findIndex(([key]) => key === cacheKey);
        idx !== -1 && callbacks.splice(idx, 1);
      }
      throw this.#engine.writeLog(
        16 /* WAIT_TIMED_OUT */,
        cacheKey,
        waitForEventNameWithCounter,
        error
      ), await this.#state.storage.put(errorKey, error), error;
    });
    if (raceResult === void 0)
      throw new Error(ABORT_REASONS.USER_PAUSE);
    return this.#engine.writeLog(
      15 /* WAIT_COMPLETE */,
      cacheKey,
      waitForEventNameWithCounter,
      raceResult
    ), await this.#state.storage.put(waitForEventKey, raceResult), raceResult;
  }
};

// ../workflows-shared/src/lib/gracePeriodSemaphore.ts
var ENGINE_TIMEOUT = r("5 minutes"), latestGracePeriodTimestamp, GracePeriodSemaphore = class {
  #counter = 0;
  callback;
  timeoutMs;
  #waitingPromises = [];
  #canInitiateSteps = !0;
  #waitingSteps = [];
  constructor(callback, timeoutMs) {
    this.callback = callback, this.timeoutMs = timeoutMs;
  }
  // acquire takes engine to be the same as release
  async acquire(_engine) {
    this.#canInitiateSteps || await new Promise((resolve, reject) => {
      this.#waitingSteps.push({
        resolveCallback: resolve,
        rejectCallback: reject
      });
    }), this.#counter == 0 && (latestGracePeriodTimestamp = void 0), this.#counter += 1;
  }
  async release(engine) {
    if (this.#counter = Math.max(this.#counter - 1, 0), this.#counter == 0) {
      this.callback(engine, this.timeoutMs);
      for (let promise of this.#waitingPromises)
        promise.resolveCallback(void 0);
      this.#waitingPromises = [];
    }
  }
  async waitUntilNothingIsRunning(type, callback) {
    if (this.#canInitiateSteps = !1, this.#counter > 0)
      try {
        await new Promise((resolve, reject) => {
          this.#waitingPromises.push({
            resolveCallback: resolve,
            rejectCallback: reject,
            type
          });
        });
      } catch {
        for (let promise of this.#waitingSteps)
          promise.resolveCallback(void 0);
        this.#waitingSteps = [], this.#canInitiateSteps = !0;
        return;
      }
    await callback();
    for (let promise of this.#waitingSteps)
      promise.resolveCallback(void 0);
    this.#waitingSteps = [], this.#canInitiateSteps = !0;
  }
  cancelWaitingPromisesByType(type) {
    let sameTypePromises = this.#waitingPromises.filter(
      (val) => val.type === type
    );
    if (sameTypePromises.length !== 0) {
      for (let promise of sameTypePromises)
        promise.rejectCallback();
      this.#waitingPromises = this.#waitingPromises.filter(
        (val) => val.type !== type
      ), this.#canInitiateSteps = !0;
      for (let promise of this.#waitingSteps)
        promise.resolveCallback(void 0);
      this.#waitingSteps = [];
    }
  }
  dispose() {
    for (let promise of this.#waitingSteps)
      promise.rejectCallback();
    this.#waitingSteps = [];
    for (let promise of this.#waitingPromises)
      promise.rejectCallback();
    this.#waitingPromises = [], this.#canInitiateSteps = !1;
  }
  isRunningStep() {
    return this.#counter > 0;
  }
}, startGracePeriod = async (engine, timeoutMs) => {
  (async () => {
    let thisTimestamp = (/* @__PURE__ */ new Date()).valueOf();
    if (!(latestGracePeriodTimestamp === void 0 || latestGracePeriodTimestamp < thisTimestamp))
      throw new Error(
        "Can't start grace period since there is already an active one started on " + latestGracePeriodTimestamp
      );
    latestGracePeriodTimestamp = thisTimestamp, await scheduler.wait(timeoutMs), !(thisTimestamp !== latestGracePeriodTimestamp || engine.timeoutHandler.isRunningStep()) && await engine.priorityQueue?.handleNextAlarm();
  })().catch(() => {
  });
};

// ../workflows-shared/src/lib/restart.ts
var EVENT_MAP_PREFIX = "EVENT_MAP", RESTART_FROM_STEP_KEY = "RESTART_FROM_STEP", KV_STEP_SUFFIXES = [
  "-value",
  "-error",
  "-config",
  "-metadata",
  "-log-written",
  "-pending",
  "-value-stream-meta"
];
function resolveGroupKeysToWipe(sql, param) {
  let targetEvent = {
    do: 5 /* STEP_START */,
    sleep: 8 /* SLEEP_START */,
    waitForEvent: 14 /* WAIT_START */
  }[param.type ?? "do"], targetCount = param.count ?? 1, cursor = sql.exec(
    "SELECT event, target, groupKey FROM states WHERE event IN (?, ?, ?) ORDER BY id",
    5 /* STEP_START */,
    8 /* SLEEP_START */,
    14 /* WAIT_START */
  ), nameOccurrence = 0, found = !1, groupKeys = /* @__PURE__ */ new Set();
  for (let row of cursor) {
    if (row.groupKey === null)
      continue;
    let groupKey = String(row.groupKey);
    if (found) {
      groupKeys.add(groupKey);
      continue;
    }
    row.target === null || String(row.target).replace(/-\d+$/, "") !== param.name || row.event === targetEvent && (nameOccurrence++, nameOccurrence === targetCount && (found = !0, groupKeys.add(groupKey)));
  }
  return found ? groupKeys : null;
}
function getMockedEventMapKeys(allKeys) {
  let mockEventTypes = /* @__PURE__ */ new Set();
  for (let key of allKeys.keys())
    key.startsWith(MODIFIER_KEYS.MOCK_EVENT) && mockEventTypes.add(key.slice(MODIFIER_KEYS.MOCK_EVENT.length));
  if (mockEventTypes.size === 0)
    return /* @__PURE__ */ new Set();
  let preserved = /* @__PURE__ */ new Set();
  for (let key of allKeys.keys())
    if (key.startsWith(`${EVENT_MAP_PREFIX}
`)) {
      let eventType = key.split(`
`)[1];
      eventType !== void 0 && mockEventTypes.has(eventType) && preserved.add(key);
    }
  return preserved;
}
async function deleteGroupKeyBatch(storage, batch) {
  let kvKeys = [];
  for (let groupKey of batch) {
    for (let suffix of KV_STEP_SUFFIXES)
      kvKeys.push(`${groupKey}${suffix}`);
    storage.sql.exec("DELETE FROM states WHERE groupKey = ?", groupKey), storage.sql.exec(
      "DELETE FROM streaming_step_chunks WHERE attempt != 0 AND cache_key = ?",
      groupKey
    );
  }
  await storage.delete(kvKeys);
}
async function wipeRestartState(storage, engineStatusKey, pauseDatetimeKey, groupKeysToWipe) {
  if (groupKeysToWipe)
    await deleteGroupKeyBatch(storage, Array.from(groupKeysToWipe)), storage.sql.exec(
      "DELETE FROM states WHERE groupKey IS NULL AND event NOT IN (?, ?)",
      1 /* WORKFLOW_START */,
      0 /* WORKFLOW_QUEUED */
    );
  else {
    let allGroupKeys = [...storage.sql.exec(
      "SELECT DISTINCT groupKey FROM states WHERE groupKey IS NOT NULL"
    )].map((r2) => r2.groupKey);
    allGroupKeys.length > 0 && await deleteGroupKeyBatch(storage, allGroupKeys), storage.sql.exec("DELETE FROM states");
  }
  let keysToDelete = [engineStatusKey, pauseDatetimeKey], allKeys = await storage.list(), preservedEventMapKeys = getMockedEventMapKeys(allKeys);
  for (let key of allKeys.keys())
    key.startsWith(`${EVENT_MAP_PREFIX}
`) && !preservedEventMapKeys.has(key) && keysToDelete.push(key);
  await storage.delete(keysToDelete), storage.sql.exec("DELETE FROM priority_queue");
}
async function readAndClearRestartFromStep(storage) {
  let value = await storage.get(RESTART_FROM_STEP_KEY);
  return await storage.delete(RESTART_FROM_STEP_KEY), value;
}
async function storeRestartFromStep(storage, from) {
  await storage.put(RESTART_FROM_STEP_KEY, from);
}

// ../workflows-shared/src/lib/timePriorityQueue.ts
var import_heap_js = __toESM(require_heap_js_umd()), wakerPriorityEntryComparator = (a, b) => a.targetTimestamp - b.targetTimestamp;
var TimePriorityQueue = class {
  #heap = new import_heap_js.default(wakerPriorityEntryComparator);
  #ctx;
  constructor(ctx, _instanceMetadata) {
    this.#ctx = ctx, this.#heap.init(this.getEntries());
  }
  popPastEntries() {
    if (this.#heap.length === 0)
      return;
    let res = [], currentTimestamp = (/* @__PURE__ */ new Date()).valueOf();
    for (; ; ) {
      let element = this.#heap.peek();
      if (element === void 0 || element.targetTimestamp > currentTimestamp)
        break;
      res.push(element), this.#heap.pop();
    }
    return this.#ctx.storage.transactionSync(() => {
      for (let entry of res)
        this.removeEntryDB(entry);
    }), res;
  }
  /**
   * `add` is ran using a transaction so it's race condition free, if it's ran atomically
   * @param entry
   */
  async add(entry) {
    await this.#ctx.storage.transaction(async () => {
      this.#heap.add(entry), this.addEntryDB(entry);
    });
  }
  /**
   * `remove` is ran using a transaction so it's race condition free, if it's ran atomically
   * @param entry
   */
  remove(entry) {
    this.#ctx.storage.transactionSync(() => {
      this.removeFirst((e) => e.hash === entry.hash && e.type === entry.type);
    });
  }
  offsetAll(offset) {
    this.#ctx.storage.transactionSync(() => {
      let entries = this.#heap.toArray();
      this.#ctx.storage.sql.exec("DELETE FROM priority_queue");
      let newEntries = entries.map((value) => ({
        ...value,
        targetTimestamp: value.targetTimestamp + offset
      }));
      for (let entry of newEntries)
        this.addEntryDB(entry);
      this.#heap = new import_heap_js.default(wakerPriorityEntryComparator), this.#heap.init(newEntries);
    });
  }
  popTypeAll(entryType) {
    this.#ctx.storage.transactionSync(() => {
      this.filter((e) => e.type !== entryType);
    });
  }
  // Idempotent, perhaps name should suggest so
  async handleNextAlarm() {
    this.#heap.peek();
  }
  getFirst(callbackFn) {
    return structuredClone(this.#heap.toArray().find(callbackFn));
  }
  removeFirst(callbackFn) {
    let elements = this.#heap.toArray(), index = elements.findIndex(callbackFn);
    if (index === -1)
      return;
    let removedEntry = elements.splice(index, 1)[0];
    this.removeEntryDB(removedEntry), this.#heap = new import_heap_js.default(wakerPriorityEntryComparator), this.#heap.init(elements);
  }
  filter(callbackFn) {
    let filteredElements = this.#heap.toArray().filter(callbackFn), removedElements = this.#heap.toArray().filter((a) => !callbackFn(a));
    this.#ctx.storage.transactionSync(() => {
      for (let entry of removedElements)
        this.removeEntryDB(entry);
    }), this.#heap = new import_heap_js.default(wakerPriorityEntryComparator), this.#heap.init(filteredElements);
  }
  length() {
    return this.#heap.length;
  }
  getEntries() {
    let entries = [
      ...this.#ctx.storage.sql.exec("SELECT * FROM priority_queue ORDER BY id")
    ], activeEntries = [];
    return entries.forEach((val) => {
      let entryType = toWakerPriorityType(val.entryType);
      if (val.action == 0) {
        let index = activeEntries.findIndex(
          (activeVal) => val.hash == activeVal.hash && entryType == activeVal.type
        );
        index !== -1 && activeEntries.splice(index, 1);
      } else
        activeEntries.findIndex(
          (activeVal) => val.hash == activeVal.hash && entryType == activeVal.type
        ) === -1 && activeEntries.push({
          hash: val.hash,
          targetTimestamp: val.target_timestamp,
          type: entryType
        });
    }), activeEntries;
  }
  removeEntryDB(entry) {
    this.#ctx.storage.sql.exec(
      `
			INSERT INTO priority_queue (target_timestamp, action, entryType, hash)
			VALUES (?, ?, ? ,?)
			`,
      entry.targetTimestamp,
      0 /* FALSE */,
      fromWakerPriorityType(entry.type),
      entry.hash
    );
  }
  checkIfExistedInPast(entry) {
    return this.#ctx.storage.sql.exec(
      "SELECT * FROM priority_queue WHERE entryType = ? AND hash = ? AND action = ?",
      fromWakerPriorityType(entry.type),
      entry.hash,
      0
    ).toArray().length >= 1;
  }
  addEntryDB(entry) {
    this.#ctx.storage.sql.exec(
      `
			INSERT INTO priority_queue (target_timestamp, action, entryType, hash)
			VALUES (?, ?, ? ,?)
			`,
      entry.targetTimestamp,
      1 /* TRUE */,
      fromWakerPriorityType(entry.type),
      entry.hash
    );
  }
}, toWakerPriorityType = (entryType) => {
  switch (entryType) {
    case 0 /* RETRY */:
      return "retry";
    case 1 /* SLEEP */:
      return "sleep";
    case 2 /* TIMEOUT */:
      return "timeout";
  }
}, fromWakerPriorityType = (entryType) => {
  switch (entryType) {
    case "retry":
      return 0 /* RETRY */;
    case "sleep":
      return 1 /* SLEEP */;
    case "timeout":
      return 2 /* TIMEOUT */;
    default:
      throw new Error(`WakerPriorityType "${entryType}" has not been handled`);
  }
};

// ../workflows-shared/src/engine.ts
var ENGINE_STATUS_KEY = "ENGINE_STATUS", EVENT_MAP_PREFIX2 = "EVENT_MAP", DEFAULT_STEP_LIMIT = 1e4, PAUSE_DATETIME2 = "PAUSE_DATETIME";
function binaryReplacer(_key, value) {
  return value instanceof ArrayBuffer ? `[ArrayBuffer(${value.byteLength} bytes)]` : ArrayBuffer.isView(value) && !(value instanceof DataView) ? `[${value.constructor.name}(${value.byteLength} bytes)]` : value;
}
function isStepSuccessEvent(event) {
  return event === 6 /* STEP_SUCCESS */ || event === 22 /* ROLLBACK_STEP_SUCCESS */;
}
var Engine = class extends DurableObject {
  logs = [];
  isRunning = !1;
  accountId;
  instanceId;
  workflowName;
  timeoutHandler;
  priorityQueue;
  stepLimit;
  engineAbortController = new AbortController();
  pauseController = new AbortController();
  waiters = /* @__PURE__ */ new Map();
  eventMap = /* @__PURE__ */ new Map();
  // Not persisted: rollback fns are RPC stubs, dead across DO restarts.
  rollbackRegistry = /* @__PURE__ */ new Map();
  constructor(state, env) {
    super(state, env), this.stepLimit = env.STEP_LIMIT ? JSON.parse(env.STEP_LIMIT) : DEFAULT_STEP_LIMIT, this.ctx.blockConcurrencyWhile(async () => {
      this.ctx.storage.transactionSync(() => {
        try {
          this.ctx.storage.sql.exec(`
						CREATE TABLE IF NOT EXISTS priority_queue (
							id INTEGER PRIMARY KEY NOT NULL,
							created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
							target_timestamp INTEGER NOT NULL,
							action INTEGER NOT NULL, -- should only be 0 or 1 (1 for added, 0 for deleted),
							entryType INTEGER NOT NULL,
							hash TEXT NOT NULL,
							CHECK (action IN (0, 1)), -- guararentee that action can only be 0 or 1
							UNIQUE (action, entryType, hash)
						);
				CREATE TABLE IF NOT EXISTS states (
					id INTEGER PRIMARY KEY NOT NULL,
					timestamp TIMESTAMP DEFAULT (DATETIME('now','subsec')),
					groupKey TEXT,
					target TEXT,
					metadata TEXT,
					event INTEGER NOT NULL
				);
				CREATE TABLE IF NOT EXISTS streaming_step_chunks (
					cache_key TEXT NOT NULL,
					attempt INTEGER NOT NULL,
					chunk_index INTEGER NOT NULL,
					chunk BLOB NOT NULL,
					PRIMARY KEY (cache_key, attempt, chunk_index)
				) WITHOUT ROWID
				`);
        } catch (e) {
          throw console.error(e), e;
        }
      });
    }), this.timeoutHandler = new GracePeriodSemaphore(
      startGracePeriod,
      ENGINE_TIMEOUT
    );
  }
  writeLog(event, group, target = null, metadata) {
    this.ctx.storage.sql.exec(
      "INSERT INTO states (event, groupKey, target, metadata) VALUES (?, ?, ?, ?)",
      event,
      group,
      target,
      JSON.stringify(metadata, binaryReplacer)
    ), group && this.handleStepResultWaiter(group, event, metadata);
  }
  readStepStartGroupKeysDesc() {
    return [
      ...this.ctx.storage.sql.exec(
        "SELECT groupKey FROM states WHERE event = ? AND groupKey IS NOT NULL ORDER BY id DESC",
        5 /* STEP_START */
      )
    ].map(({ groupKey }) => groupKey);
  }
  // Lives here for access to the protected DurableObject `ctx`.
  createRollbackContext(rollbackStep) {
    return new Context(this, this.ctx, rollbackStep);
  }
  readLogsFromStep(_cacheKey) {
    return [];
  }
  readLogs() {
    return {
      logs: [
        ...this.ctx.storage.sql.exec("SELECT event, groupKey, target, metadata FROM states")
      ].map((log) => {
        let metadata = JSON.parse(log.metadata);
        if (!isStepSuccessEvent(log.event) || !metadata.streamOutput)
          return { ...log, metadata, group: log.groupKey };
        let { cacheKey, meta } = metadata.streamOutput;
        try {
          let preview = getStoredStreamOutputPreview({
            storage: this.ctx.storage,
            cacheKey,
            meta,
            maxChars: 1024
          });
          metadata.result = preview.type === "text" ? preview.output : `[ReadableStream (binary): ${meta.totalBytes} bytes]`;
        } catch {
          metadata.result = `[ReadableStream: ${meta.totalBytes} bytes]`;
        }
        return delete metadata.streamOutput, { ...log, metadata, group: log.groupKey };
      })
    };
  }
  /**
   * Returns detailed logs including timestamps, ordered by ID.
   * Used by the local explorer to reconstruct step-level detail.
   */
  readDetailedLogs() {
    return [
      ...this.ctx.storage.sql.exec(
        "SELECT id, timestamp, event, groupKey, target, metadata FROM states ORDER BY id ASC"
      )
    ].map((row) => {
      let metadata = JSON.parse(row.metadata);
      if (!isStepSuccessEvent(row.event) || !metadata.streamOutput)
        return {
          id: row.id,
          timestamp: String(row.timestamp).replace(" ", "T") + "Z",
          event: row.event,
          group: row.groupKey,
          target: row.target,
          metadata
        };
      let { cacheKey, meta } = metadata.streamOutput;
      try {
        let preview = getStoredStreamOutputPreview({
          storage: this.ctx.storage,
          cacheKey,
          meta,
          maxChars: 1024
        });
        metadata.result = preview.type === "text" ? preview.output : `[ReadableStream (binary): ${meta.totalBytes} bytes]`;
      } catch {
        metadata.result = `[ReadableStream: ${meta.totalBytes} bytes]`;
      }
      return delete metadata.streamOutput, {
        id: row.id,
        timestamp: String(row.timestamp).replace(" ", "T") + "Z",
        event: row.event,
        group: row.groupKey,
        target: row.target,
        metadata
      };
    });
  }
  readLogsFromEvent(eventType) {
    return {
      logs: [
        ...this.ctx.storage.sql.exec(
          "SELECT event, groupKey, target, metadata FROM states WHERE event = ?",
          eventType
        )
      ].map((log) => ({
        ...log,
        metadata: JSON.parse(log.metadata),
        group: log.groupKey
      }))
    };
  }
  async getStatus() {
    if (this.accountId === void 0) {
      let metadata = await this.ctx.storage.get(INSTANCE_METADATA);
      if (metadata === void 0)
        throw new Error("Engine was never started");
      this.accountId = metadata.accountId, this.instanceId = metadata.instance.id, this.workflowName = metadata.workflow.name;
    }
    let res = await this.ctx.storage.get(ENGINE_STATUS_KEY);
    return res === void 0 ? 0 /* Queued */ : res;
  }
  // Returns instance metadata for the local explorer.
  async getInstanceMetadata() {
    let status = await this.getStatus(), createdOn = (await this.ctx.storage.get(INSTANCE_METADATA))?.instance?.created_on ?? "";
    if (!createdOn) {
      let queries = [
        "SELECT timestamp AS ts FROM states ORDER BY id ASC LIMIT 1",
        "SELECT created_on AS ts FROM priority_queue ORDER BY id ASC LIMIT 1"
      ];
      for (let query of queries) {
        if (createdOn)
          break;
        try {
          for (let row of this.ctx.storage.sql.exec(query))
            row.ts && (createdOn = String(row.ts).replace(" ", "T") + "Z");
        } catch {
        }
      }
    }
    return {
      instanceId: this.instanceId ?? "",
      status,
      createdOn
    };
  }
  async setStatus(accountId, instanceId, status) {
    await this.ctx.storage.put(ENGINE_STATUS_KEY, status), this.handleStatusWaiter(status);
  }
  statusWaiters = /* @__PURE__ */ new Map();
  async waitForStatus(status) {
    let targetStatus = toInstanceStatus(status), currentStatus = await this.ctx.storage.get(ENGINE_STATUS_KEY);
    if (currentStatus !== targetStatus)
      return new Promise((resolve, reject) => {
        this.statusWaiters.set(targetStatus, { resolve, reject }), this.handleStatusWaiter(currentStatus);
      });
  }
  handleStatusWaiter(status) {
    let waiter = this.statusWaiters.get(status);
    if (waiter) {
      waiter.resolve(), this.statusWaiters.delete(status);
      return;
    }
    switch (status) {
      case 3 /* Errored */: {
        let unreachableStatuses = [
          5 /* Complete */,
          4 /* Terminated */
        ];
        this.rejectUnreachableStatus(status, unreachableStatuses);
        break;
      }
      case 4 /* Terminated */: {
        let unreachableStatuses = [
          5 /* Complete */,
          3 /* Errored */
        ];
        this.rejectUnreachableStatus(status, unreachableStatuses);
        break;
      }
      case 5 /* Complete */: {
        let unreachableStatuses = [
          4 /* Terminated */,
          3 /* Errored */
        ];
        this.rejectUnreachableStatus(status, unreachableStatuses);
        break;
      }
      default:
        break;
    }
  }
  rejectUnreachableStatus(reachedStatus, unreachableStatuses) {
    if (unreachableStatuses)
      for (let unreachableStatus of unreachableStatuses) {
        let waiter = this.statusWaiters.get(unreachableStatus);
        if (waiter) {
          waiter.reject(
            new Error(
              `[WorkflowIntrospector] The Workflow instance ${this.instanceId} has reached status '${instanceStatusName(
                reachedStatus
              )}'. This is a finite status that prevents it from ever reaching the expected status of '${instanceStatusName(
                unreachableStatus
              )}'.`
            )
          ), this.statusWaiters.delete(unreachableStatus);
          return;
        }
      }
  }
  /**
   * Create a replay ReadableStream from stored stream output metadata.
   * Returns undefined if the stream data is not in a valid/complete state.
   */
  replayStreamFromMeta(streamOutput) {
    if (!(streamOutput.meta.state !== "complete" /* Complete */ || getInvalidStoredStreamOutputError(
      this.ctx.storage,
      streamOutput.cacheKey,
      streamOutput.meta
    ) !== void 0))
      return createReplayReadableStream({
        storage: this.ctx.storage,
        cacheKey: streamOutput.cacheKey,
        meta: streamOutput.meta
      });
  }
  stepResultWaiters = /* @__PURE__ */ new Map();
  async waitForStepResult(stepName, stepCount) {
    let cacheKey = `${await computeHash(stepName)}-${stepCount ?? 1}`, rows = [
      ...this.ctx.storage.sql.exec(
        "SELECT event, metadata FROM states WHERE groupKey = ? ORDER BY id DESC LIMIT 1",
        cacheKey
      )
    ];
    if (rows.length > 0) {
      let { event, metadata } = rows[0], parsed = JSON.parse(metadata);
      if (event === 6 /* STEP_SUCCESS */)
        return parsed?.streamOutput ? this.replayStreamFromMeta(parsed.streamOutput) : parsed?.result;
      if (event === 7 /* STEP_FAILURE */)
        throw parsed?.error ?? parsed;
    }
    return new Promise((resolve, reject) => {
      this.stepResultWaiters.set(cacheKey, { resolve, reject });
    });
  }
  handleStepResultWaiter(group, event, metadata) {
    let waiter = this.stepResultWaiters.get(group);
    if (waiter) {
      if (event === 6 /* STEP_SUCCESS */)
        metadata?.streamOutput ? waiter.resolve(
          this.replayStreamFromMeta(
            metadata.streamOutput
          )
        ) : waiter.resolve(metadata?.result), this.stepResultWaiters.delete(group);
      else if (event === 7 /* STEP_FAILURE */) {
        let error = metadata?.error ?? new Error("Step failed");
        waiter.reject(error), this.stepResultWaiters.delete(group);
      }
    }
  }
  async getOutputOrError(isOutput) {
    let status = await this.getStatus();
    if (isOutput) {
      if (status !== 5 /* Complete */)
        throw new Error(
          `Cannot retrieve output: Workflow instance is in status "${instanceStatusName(
            status
          )}" but must be "complete" to have an output available`
        );
      return this.readLogsFromEvent(2 /* WORKFLOW_SUCCESS */).logs.at(0)?.metadata.result;
    } else {
      if (status !== 3 /* Errored */)
        throw new Error(
          `Cannot retrieve error: Workflow instance is in status "${instanceStatusName(
            status
          )}" but must be "errored" to have error information available`
        );
      let log = this.readLogsFromEvent(3 /* WORKFLOW_FAILURE */).logs.at(0);
      if (!log?.metadata.error)
        throw new Error(
          "Cannot retrieve error: No workflow instance failure log found"
        );
      return log.metadata.error;
    }
  }
  async abort(reason) {
    await this.ctx.storage.sync(), this.timeoutHandler.dispose(), this.engineAbortController.abort(new Error(reason)), this.ctx.abort(reason);
  }
  // Called by the dispose function when introspecting the instance in tests
  // TODO: Ideally this abort should be done by `abortAllDurableObjects` from worked called by vitest-pool-workers
  async unsafeAbort(reason) {
    await this.ctx.storage.sync(), await this.ctx.storage.deleteAll(), this.ctx.abort(reason);
  }
  async storeEventMap() {
    await this.ctx.blockConcurrencyWhile(async () => {
      let entries = {};
      for (let [type, events] of this.eventMap.entries())
        for (let i = 0; i < events.length; i++)
          entries[`${EVENT_MAP_PREFIX2}
${type}
${i}`] = events[i];
      Object.keys(entries).length > 0 && await this.ctx.storage.put(entries);
    });
  }
  async restoreEventMap() {
    await this.ctx.blockConcurrencyWhile(async () => {
      let entries = await this.ctx.storage.list({
        prefix: EVENT_MAP_PREFIX2
      });
      for (let [key, value] of entries) {
        let [_, eventType, _idx] = key.split(`
`), eventList = this.eventMap.get(eventType) ?? [];
        eventList.push(value), this.eventMap.set(eventType, eventList);
      }
    });
  }
  async receiveEvent(event) {
    let eventTypeQueue = this.eventMap.get(event.type) ?? [];
    if (eventTypeQueue.push(event), this.eventMap.set(event.type, eventTypeQueue), await this.storeEventMap(), this.isRunning) {
      let callbacks = this.waiters.get(event.type);
      if (callbacks) {
        let entry = callbacks[0];
        if (entry) {
          let [, resolve] = entry;
          resolve(event), callbacks.shift(), this.waiters.set(event.type, callbacks), eventTypeQueue = this.eventMap.get(event.type) ?? [], eventTypeQueue.shift(), this.eventMap.set(event.type, eventTypeQueue);
          return;
        }
      }
    } else {
      if (await this.ctx.storage.get(
        `${MODIFIER_KEYS.MOCK_EVENT}${event.type}`
      ))
        return;
      let metadata = await this.ctx.storage.get(INSTANCE_METADATA);
      if (metadata === void 0)
        throw new Error("Engine was never started");
      this.init(
        metadata.accountId,
        metadata.workflow,
        metadata.version,
        metadata.instance,
        metadata.event
      );
    }
  }
  getInstanceModifier() {
    return new WorkflowInstanceModifier(this, this.ctx);
  }
  async changeInstanceStatus(newStatus, from) {
    let metadata = await this.ctx.storage.get(INSTANCE_METADATA);
    if (metadata === void 0)
      throw createWorkflowError(
        "Instance does not exist",
        "instance.not_found"
      );
    switch (newStatus) {
      case "pause":
        await this.userTriggeredPause();
        break;
      case "resume": {
        let currentStatus = await this.getStatus();
        currentStatus === 6 /* WaitingForPause */ ? (this.timeoutHandler.cancelWaitingPromisesByType("pause"), await this.setStatus(
          metadata.accountId,
          metadata.instance.id,
          1 /* Running */
        )) : currentStatus === 2 /* Paused */ && await this.attemptResume();
        break;
      }
      case "terminate": {
        let currentStatus = await this.getStatus();
        if ([
          4 /* Terminated */,
          5 /* Complete */,
          3 /* Errored */
        ].includes(currentStatus))
          throw createWorkflowError(
            "Cannot terminate instance since its on a finite state",
            "instance.cannot_terminate"
          );
        await this.userTriggeredTerminate();
        break;
      }
      case "restart":
        if (from) {
          if (!resolveGroupKeysToWipe(this.ctx.storage.sql, from))
            throw stepNotFoundError(from.name);
          await storeRestartFromStep(this.ctx.storage, from);
        }
        await this.userTriggeredRestart();
        break;
    }
  }
  async userTriggeredTerminate() {
    let metadata = await this.ctx.storage.get(INSTANCE_METADATA);
    if (metadata === void 0)
      throw createWorkflowError(
        "Instance does not exist",
        "instance.not_found"
      );
    this.writeLog(4 /* WORKFLOW_TERMINATED */, null, null, {
      trigger: {
        source: 0 /* API */
      }
    }), await this.setStatus(
      metadata.accountId,
      metadata.instance.id,
      4 /* Terminated */
    ), await this.abort(ABORT_REASONS.USER_TERMINATE);
  }
  async userTriggeredPause() {
    let status = await this.getStatus();
    if (status === 2 /* Paused */ || status === 6 /* WaitingForPause */ || status !== 1 /* Running */ && status !== 7 /* Waiting */)
      return;
    let metadata = await this.ctx.storage.get(INSTANCE_METADATA);
    if (metadata === void 0)
      throw createWorkflowError(
        "Instance does not exist",
        "instance.not_found"
      );
    await this.setStatus(
      metadata.accountId,
      metadata.instance.id,
      6 /* WaitingForPause */
    ), this.timeoutHandler.waitUntilNothingIsRunning("pause", async () => {
      await this.ctx.storage.put(PAUSE_DATETIME2, /* @__PURE__ */ new Date()), await this.setStatus(
        metadata.accountId,
        metadata.instance.id,
        2 /* Paused */
      ), this.pauseController.abort(ABORT_REASONS.USER_PAUSE);
    }).catch(() => {
    });
  }
  async userTriggeredRestart() {
    await this.abort(ABORT_REASONS.USER_RESTART);
  }
  async attemptRestart() {
    let restartFromStep = await readAndClearRestartFromStep(this.ctx.storage), groupKeysToWipe = null;
    if (restartFromStep && (groupKeysToWipe = resolveGroupKeysToWipe(
      this.ctx.storage.sql,
      restartFromStep
    ), !groupKeysToWipe))
      throw stepNotFoundError(restartFromStep.name);
    await wipeRestartState(
      this.ctx.storage,
      ENGINE_STATUS_KEY,
      PAUSE_DATETIME2,
      groupKeysToWipe
    );
    let metadata = await this.ctx.storage.get(INSTANCE_METADATA);
    if (metadata === void 0)
      throw createWorkflowError(
        "Instance does not exist",
        "instance.not_found"
      );
    let { accountId, workflow, version, instance, event } = metadata;
    groupKeysToWipe || (this.writeLog(0 /* WORKFLOW_QUEUED */, null, null, {
      params: event.payload,
      versionId: version.id,
      trigger: {
        source: 0 /* API */
      }
    }), this.writeLog(1 /* WORKFLOW_START */, null, null, {})), this.init(accountId, workflow, version, instance, event);
  }
  async attemptResume() {
    let metadata = await this.ctx.storage.get(INSTANCE_METADATA);
    if (metadata === void 0)
      throw createWorkflowError(
        "Instance does not exist",
        "instance.not_found"
      );
    if (await this.ctx.storage.get(ENGINE_STATUS_KEY) !== 2 /* Paused */)
      return;
    let pausedDate = await this.ctx.storage.get(PAUSE_DATETIME2);
    if (pausedDate !== void 0) {
      let offset = Date.now() - new Date(pausedDate).valueOf();
      this.priorityQueue ? this.priorityQueue.offsetAll(offset) : new TimePriorityQueue(this.ctx, metadata).offsetAll(offset);
    }
    await this.ctx.storage.delete(PAUSE_DATETIME2);
    let { accountId, workflow, version, instance, event } = metadata;
    await this.ctx.storage.put(ENGINE_STATUS_KEY, 0 /* Queued */), this.pauseController = new AbortController(), this.waiters = /* @__PURE__ */ new Map(), this.eventMap = /* @__PURE__ */ new Map(), clearRollbackRegistry(this.rollbackRegistry), this.init(accountId, workflow, version, instance, event);
  }
  async init(accountId, workflow, version, instance, event) {
    if (this.priorityQueue === void 0 && (this.priorityQueue = new TimePriorityQueue(
      this.ctx,
      // this.env,
      {
        accountId,
        workflow,
        version,
        instance,
        event
      }
    )), this.isRunning)
      return;
    this.priorityQueue.popPastEntries(), await this.priorityQueue.handleNextAlarm(), this.accountId = accountId, this.instanceId = instance.id, this.workflowName = workflow.name;
    let status = await this.getStatus();
    if ([
      3 /* Errored */,
      // TODO (WOR-85): Remove this once upgrade story is done
      4 /* Terminated */,
      5 /* Complete */,
      2 /* Paused */
    ].includes(status))
      return;
    if (status === 6 /* WaitingForPause */) {
      await this.ctx.storage.put(PAUSE_DATETIME2, /* @__PURE__ */ new Date()), await this.setStatus(accountId, instance.id, 2 /* Paused */);
      return;
    }
    if (await this.ctx.storage.get(INSTANCE_METADATA) == null) {
      let instanceMetadata = {
        accountId,
        workflow,
        version,
        instance,
        event
      };
      await this.ctx.storage.put(INSTANCE_METADATA, instanceMetadata), this.writeLog(0 /* WORKFLOW_QUEUED */, null, null, {
        params: event.payload,
        versionId: version.id,
        trigger: {
          source: 0 /* API */
        }
      }), this.writeLog(1 /* WORKFLOW_START */, null, null, {});
    }
    await this.restoreEventMap();
    let stubStep = new Context(this, this.ctx), workflowRunningHandler = async () => {
      await this.ctx.storage.transaction(async () => {
        await this.setStatus(accountId, instance.id, 1 /* Running */);
      });
    };
    this.isRunning = !0, workflowRunningHandler();
    try {
      let result = await this.env.USER_WORKFLOW.run(
        event,
        stubStep
      );
      this.writeLog(2 /* WORKFLOW_SUCCESS */, null, null, {
        result
      }), await this.ctx.storage.transaction(async () => {
        await this.setStatus(accountId, instance.id, 5 /* Complete */);
      }), clearRollbackRegistry(this.rollbackRegistry), this.isRunning = !1;
    } catch (err) {
      if (isAbortError(err)) {
        this.isRunning = !1;
        return;
      }
      try {
        await executeRollbacks(
          this,
          err instanceof Error ? err : new Error(String(err))
        );
      } catch (rollbackErr) {
        console.error("Rollback execution failed:", rollbackErr);
      }
      let error;
      if (err instanceof Error) {
        if (err.name === "NonRetryableError" || err.message.startsWith("NonRetryableError")) {
          let fatalError = shouldPreserveNonRetryableError() ? new PreservedNonRetryableError(err) : new WorkflowFatalError(
            "The execution of the Workflow instance was terminated, as a step threw an NonRetryableError and it was not handled"
          );
          this.writeLog(3 /* WORKFLOW_FAILURE */, null, null, {
            error: fatalError
          }), await this.setStatus(accountId, instance.id, 3 /* Errored */), await this.abort(ABORT_REASONS.NON_RETRYABLE_ERROR), this.isRunning = !1;
          return;
        }
        error = {
          message: err.message,
          name: err.name
        };
      } else
        error = {
          name: "Error",
          message: err
        };
      this.writeLog(3 /* WORKFLOW_FAILURE */, null, null, {
        error
      }), await this.ctx.storage.transaction(async () => {
        await this.setStatus(accountId, instance.id, 3 /* Errored */);
      }), this.isRunning = !1;
    }
    return {
      id: instance.id
    };
  }
};

// ../workflows-shared/src/binding.ts
import { RpcTarget as RpcTarget3, WorkerEntrypoint } from "cloudflare:workers";
var WorkflowBinding = class extends WorkerEntrypoint {
  constructor(ctx, env) {
    super(ctx, env);
  }
  async create({
    id = crypto.randomUUID(),
    params = {}
  } = {}) {
    if (!isValidWorkflowInstanceId(id))
      throw new WorkflowError("Workflow instance has invalid id");
    let stubId = this.env.ENGINE.idFromName(id), stub = this.env.ENGINE.get(stubId), now = (/* @__PURE__ */ new Date()).toISOString(), initPromise = stub.init(
      0,
      // accountId: number,
      {},
      // workflow: DatabaseWorkflow,
      {},
      // version: DatabaseVersion,
      {
        id,
        created_on: now,
        modified_on: now,
        workflow_id: "",
        version_id: "",
        status: 0,
        // InstanceStatus.Queued
        started_on: now,
        ended_on: null
      },
      {
        timestamp: /* @__PURE__ */ new Date(),
        payload: params,
        instanceId: id,
        workflowName: this.env.WORKFLOW_NAME
      }
    ).then((val) => {
      val !== void 0 && val[Symbol.dispose]();
    }).catch(() => {
    });
    return this.ctx.waitUntil(initPromise), {
      id
    };
  }
  async get(id) {
    let stubId = this.env.ENGINE.idFromName(id), stub = this.env.ENGINE.get(stubId), getStub = () => this.env.ENGINE.get(this.env.ENGINE.idFromName(id)), handle = new WorkflowHandle(id, stub, getStub);
    try {
      await handle.status();
    } catch {
      throw new Error("instance.not_found");
    }
    return handle;
  }
  async createBatch(batch) {
    if (batch.length === 0)
      throw new Error(
        "WorkflowError: batchCreate should have at least 1 instance"
      );
    return await Promise.all(
      batch.map(async (val) => await this.create(val))
    );
  }
  async unsafeGetBindingName() {
    return this.env.BINDING_NAME;
  }
  async unsafeGetInstanceModifier(instanceId) {
    let stubId = this.env.ENGINE.idFromName(instanceId);
    return this.env.ENGINE.get(stubId).getInstanceModifier();
  }
  async unsafeWaitForStepResult(instanceId, name, index) {
    let stubId = this.env.ENGINE.idFromName(instanceId);
    return await this.env.ENGINE.get(stubId).waitForStepResult(name, index);
  }
  async unsafeAbort(instanceId, reason) {
    let stubId = this.env.ENGINE.idFromName(instanceId), stub = this.env.ENGINE.get(stubId);
    try {
      await stub.unsafeAbort(reason);
    } catch {
    }
  }
  async unsafeWaitForStatus(instanceId, status) {
    let stubId = this.env.ENGINE.idFromName(instanceId);
    return await this.env.ENGINE.get(stubId).waitForStatus(status);
  }
  async unsafeGetOutputOrError(instanceId, isOutput) {
    let stubId = this.env.ENGINE.idFromName(instanceId);
    return await this.env.ENGINE.get(stubId).getOutputOrError(isOutput);
  }
}, WorkflowHandle = class extends RpcTarget3 {
  constructor(id, stub, getStub) {
    super();
    this.id = id;
    this.getStub = getStub;
    this.stub = stub;
  }
  id;
  getStub;
  stub;
  async pause() {
    try {
      await this.stub.changeInstanceStatus("pause");
    } catch (e) {
      if (!isUserTriggeredPause(e))
        throw e;
    }
  }
  async resume() {
    await this.stub.changeInstanceStatus("resume");
  }
  async terminate() {
    try {
      await this.stub.changeInstanceStatus("terminate");
    } catch (e) {
      if (!isUserTriggeredTerminate(e))
        throw e;
    }
  }
  async restart(options) {
    try {
      await this.stub.changeInstanceStatus("restart", options?.from);
    } catch (e) {
      if (!isUserTriggeredRestart(e))
        throw e;
    }
    this.stub = this.getStub(), await this.stub.attemptRestart();
  }
  async status() {
    let fetchStatusAndLogs = async () => {
      let status = await this.stub.getStatus(), logs2 = await this.stub.readLogs();
      return { status, logs: logs2 };
    }, result;
    try {
      result = await fetchStatusAndLogs();
    } catch {
      this.stub = this.getStub(), result = await fetchStatusAndLogs();
    }
    using logs = result.logs;
    let stepOutputs = logs.logs.filter(
      (log) => log.event === 6 /* STEP_SUCCESS */ || log.event === 15 /* WAIT_COMPLETE */
    ).map(
      (log) => log.event === 6 /* STEP_SUCCESS */ ? log.metadata.result : log.metadata.payload
    ), workflowOutput = logs.logs.find((log) => log.event === 2 /* WORKFLOW_SUCCESS */)?.metadata.result ?? null, workflowError = logs.logs.find(
      (log) => log.event === 3 /* WORKFLOW_FAILURE */
    )?.metadata.error;
    return {
      status: instanceStatusName(result.status),
      __LOCAL_DEV_STEP_OUTPUTS: stepOutputs,
      output: workflowOutput,
      error: workflowError
    };
  }
  async sendEvent(args) {
    await this.stub.receiveEvent({
      payload: args.payload,
      type: args.type,
      timestamp: /* @__PURE__ */ new Date()
    });
  }
};
export {
  Engine,
  WorkflowBinding
};
//# sourceMappingURL=binding.worker.js.map
