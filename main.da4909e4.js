// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../src/js/components/SearchBar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBar = void 0;
var SearchBar = function SearchBar() {
  var app = document.getElementById("app");
  var searchBar = document.createElement("div");
  searchBar.classList.add("flex", "absolute", "bottom-5", "w-[90%]", "max-w-lg", "h-24", "lg:h-28");
  searchBar.innerHTML = "\n    <div class=\"searchBar relative w-[100%] h-[100%] bg-white/40 backdrop-blur-sm rounded-3xl border\"></div>\n    <div class=\"searchBar absolute w-[100%] h-[100%] flex justify-center items-center\n            text-xl font-semibold text-zinc-800\">\n        <div class=\"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-[5%]\">\n        <span class=\"text-zinc-800 text-xl lg:text-2xl\"><i class=\"fa-solid fa-magnifying-glass\"></i></span>\n        </div>\n          <input id=\"search\" type=\"text\" autocomplete=\"off\"\n          class=\"block w-[90%] text-center text-2xl bg-transparent border-b-2 border-zinc-800 placeholder-zinc-700 focus:outline-none lg:text-4xl\" placeholder=\"Search\">\n    </div>\n  ";
  app.appendChild(searchBar);
};
exports.SearchBar = SearchBar;
},{}],"../src/js/components/TimeDate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeDate = void 0;
var TimeDate = function TimeDate() {
  var WidgetContainer = document.getElementById("widget-container");
  var timeDate = document.createElement("div");
  timeDate.classList.add("widget", "flex", "relative", "w-[100%]", "h-24", "lg:h-36");
  timeDate.innerHTML = "\n  <div class=\"relative w-[100%] h-[100%] bg-white/40 backdrop-blur-sm rounded-3xl border\"></div>\n    <div class=\"flex-wrap absolute w-[100%] h-[100%] flex justify-center\n                text-2xl font-semibold text-zinc-800 text-center\n                sm:items-center lg:text-5xl\">\n    <span id=\"time\" class=\"block w-[100%] pt-3 sm:w-[50%] sm:p-0\">\n      <span id=\"date\" class=\"inline-block\"></span>\n      <span id=\"clock\" class=\"inline-block\"></span>\n    </span>\n    <span id=\"location\" class=\"block w-[100%] pb-3 sm:w-[50%] sm:p-0\">\n      <span id=\"city\" class=\"inline-block\">Warszawa</span>\n      <span id=\"country\" class=\"inline-block\">PL</span>\n    </span\n  </div>\n  ";
  WidgetContainer.appendChild(timeDate);
};
exports.TimeDate = TimeDate;
},{}],"../src/js/components/Widgets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Widgets = void 0;
var widgetsArray = ["temperature", "humidity", "windSpeed", "sunrise", "sunset"];
var Widgets = function Widgets() {
  var WidgetContainer = document.getElementById("widget-container");
  for (var i = 0; i < widgetsArray.length; i++) {
    var widget = document.createElement("div");
    widget.classList.add("widget", "flex", "relative", "w-24", "h-24", "lg:w-36", "lg:h-36");
    widget.innerHTML = "\n      <div class=\"relative w-[100%] h-[100%] bg-white/40 backdrop-blur-sm rounded-3xl border\"></div>\n      <div id=\"".concat(widgetsArray[i], "\" class=\"absolute w-[100%] h-[100%] flex justify-center items-center\n      text-xl font-semibold text-zinc-800 lg:text-3xl\">\n      </div>\n      ");
    WidgetContainer.appendChild(widget);
  }
};
exports.Widgets = Widgets;
},{}],"../src/js/components/VidmoWidget.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VidmoWidget = void 0;
var VidmoWidget = function VidmoWidget() {
  var WidgetContainer = document.getElementById("widget-container");
  var widget = document.createElement("div");
  widget.classList.add("widget", "sm:hidden", "relative", "w-24", "h-24", "lg:w-36", "lg:h-36", "order-last");
  WidgetContainer.appendChild(widget);
};
exports.VidmoWidget = VidmoWidget;
},{}],"../src/js/config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
var config = {
  API_KEY: "0fd315853dadfc3d29223b017ceb5bc8"
};
exports.config = config;
},{}],"../src/js/requestAPI.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWeather = void 0;
var _config = require("./config.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var API_KEY = _config.config.API_KEY;
var getWeather = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(QUERRY) {
    var API, APIresponse;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          API = "https://api.openweathermap.org/data/2.5/weather?q=".concat(QUERRY, "&appid=").concat(API_KEY, "&units=metric");
          APIresponse = {};
          _context.next = 4;
          return fetch(API).then(function (response) {
            if (response.ok) {
              return response;
            } else {
              throw new Error("".concat(response.status, " ").concat(response.statusText));
            }
          }).then(function (response) {
            return response.json();
          }).then(function (data) {
            if (data.length < 0) {
              throw new Error("There's no available data for your searching");
            } else {
              var time = new Date().toLocaleString();
              APIresponse = {
                err: false,
                time: time,
                city: data.name,
                country: data.sys.country,
                temperature: Math.floor(data.main.temp),
                weather: data.weather[0].id,
                humidity: data.main.humidity,
                windSpeed: Math.floor(data.wind.speed),
                sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit"
                }),
                sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit"
                })
              };
            }
          }).catch(function (err) {
            APIresponse = {
              err: true,
              message: err.message
            };
          });
        case 4:
          return _context.abrupt("return", APIresponse);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getWeather(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.getWeather = getWeather;
},{"./config.js":"../src/js/config.js"}],"../src/js/attachData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attachData = void 0;
var _promise = require("./promise.js");
var attachData = function attachData() {
  var city = document.getElementById("city");
  var country = document.getElementById("country");
  var temperature = document.getElementById("temperature");
  var humidity = document.getElementById("humidity");
  var windSpeed = document.getElementById("windSpeed");
  var sunrise = document.getElementById("sunrise");
  var sunset = document.getElementById("sunset");
  _promise.fetchingData.then(function (data) {
    if (data.err === false) {
      city.innerHTML = data.city;
      country.innerHTML = data.country;
      temperature.innerHTML = "\n        <i class=\"fa-solid fa-temperature-three-quarters\"></i>\n        &nbsp;".concat(data.temperature, "&#8451;");
      humidity.innerHTML = "\n        <i class=\"fa-solid fa-droplet\"></i>\n        <span>&nbsp;".concat(data.humidity, "&#37;</span>\n        ");
      windSpeed.innerHTML = "\n        <i class=\"fa-solid fa-wind\"></i>\n        <span>&nbsp;".concat(data.windSpeed, "<small>m/s</small></span>\n        ");
      sunrise.innerHTML = "\n        <i class=\"fa-solid fa-sun\"></i>\n        <span>&nbsp;".concat(data.sunrise, "</span>\n        ");
      sunset.innerHTML = "\n        <i class=\"fa-solid fa-moon\"></i>\n        <span>&nbsp;".concat(data.sunset, "</span>\n        ");
    } else {
      throw new Error(data.message);
    }
  }).catch(function (err) {
    console.error(err.message + " | Something went wrong trying displaying widgets, check your entered data and try one more time");
  });
};
exports.attachData = attachData;
},{"./promise.js":"../src/js/promise.js"}],"../src/js/animation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animate = void 0;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var animate = function animate() {
  var elements = document.querySelectorAll(".widget");
  var searchBarElements = document.querySelectorAll(".searchBar");
  var _iterator = _createForOfIteratorHelper(elements),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var element = _step.value;
      element.classList.add("animated");
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  setTimeout(function () {
    var _iterator2 = _createForOfIteratorHelper(searchBarElements),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var searchBarElement = _step2.value;
        searchBarElement.classList.add("animated");
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }, 1100);
};
exports.animate = animate;
},{}],"../src/js/cloack.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Clock = exports.Calendar = void 0;
var Calendar = function Calendar() {
  var date = document.querySelector("#date");
  var currentDate = new Date();
  date.innerHTML = currentDate.toLocaleString([], {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
};
exports.Calendar = Calendar;
var Clock = function Clock() {
  var time = document.getElementById("clock");
  var clock = function clock() {
    var date = new Date();
    time.innerHTML = date.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  clock();
  setInterval(clock, 1000);
};
exports.Clock = Clock;
},{}],"../src/js/components/Popup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popup = void 0;
var Popup = function Popup() {
  var app = document.getElementById("app");
  var popup = document.createElement("div");
  popup.id = "popup";
  popup.className = "fixed top-0 bottom-0 right-0 left-0 bg-transparent/70 transition-opacity duration-500 opacity-1 z-50";
  popup.innerHTML = "\n      <div\n        class=\"relative mt-[70vh] m-auto max-w-[90%] h-fit p-8 bg-slate-200 rounded-xl transition-all duration-[5000]\">\n        <button id=\"close-btn\"\n          class=\"absolute top-1 right-3 transition-all duration-200 text-4xl font-bold text-zinc-800\"\n          href=\"#\">&times;</button>\n        <div class=\"text-xl text-center md:text-3xl\">\n          Niestety, nie mamy w naszej bazie miejsca o takiej nazwie!\n        </div>\n      </div>\n    ";

  // It's for change
  setTimeout(function () {
    var closePopup = function closePopup() {
      popup.remove();
    };
    var closeBtn = document.getElementById("close-btn");
    closeBtn.addEventListener("click", closePopup);
    setTimeout(function () {
      popup.remove();
    }, 8000);
  }, 500);
  //

  app.appendChild(popup);
};
exports.Popup = Popup;
},{}],"../src/js/promise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchingData = void 0;
var _requestAPI = require("./requestAPI.js");
var _attachData = require("./attachData.js");
var _Video = require("./components/Video.js");
var _Widgets = require("./components/Widgets.js");
var _TimeDate = require("./components/TimeDate.js");
var _VidmoWidget = require("./components/VidmoWidget");
var _animation = require("./animation.js");
var _cloack = require("./cloack.js");
var _Popup = require("./components/Popup.js");
var QUERRY = "Warszawa";
var fetchingData = (0, _requestAPI.getWeather)(QUERRY);
exports.fetchingData = fetchingData;
window.addEventListener("DOMContentLoaded", function () {
  var searchInput = document.querySelector("#search");
  searchInput.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      exports.fetchingData = fetchingData = (0, _requestAPI.getWeather)(e.target.value.trim().replace(/[^a-zA-ZąćęłńóśźżłĄĆĘŁŃÓŚŹŻŁ]/g, ""));
      fetchingData.then(function (data) {
        if (data.err === false) {
          if (document.querySelector(".widget") !== null) {
            var widgets = document.querySelectorAll(".widget");
            widgets.forEach(function (widget) {
              widget.remove();
            });
          }
          QUERRY = e.target.value;
          e.target.value = "";
          QUERRY = QUERRY.trim();
          QUERRY = QUERRY.replace(/[^a-zA-ZąćęłńóśźżłĄĆĘŁŃÓŚŹŻŁ]/g, "");
          exports.fetchingData = fetchingData = (0, _requestAPI.getWeather)(QUERRY);
          (0, _Video.Video)();
          (0, _TimeDate.TimeDate)();
          (0, _cloack.Calendar)();
          (0, _cloack.Clock)();
          (0, _Widgets.Widgets)();
          (0, _VidmoWidget.VidmoWidget)();
          (0, _attachData.attachData)();
          setTimeout(_animation.animate, 2000);
        } else {
          (0, _Popup.Popup)();
        }
      });
    }
  });
});
},{"./requestAPI.js":"../src/js/requestAPI.js","./attachData.js":"../src/js/attachData.js","./components/Video.js":"../src/js/components/Video.js","./components/Widgets.js":"../src/js/components/Widgets.js","./components/TimeDate.js":"../src/js/components/TimeDate.js","./components/VidmoWidget":"../src/js/components/VidmoWidget.js","./animation.js":"../src/js/animation.js","./cloack.js":"../src/js/cloack.js","./components/Popup.js":"../src/js/components/Popup.js"}],"../src/js/components/Video.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Video = void 0;
var _promise = require("../promise.js");
var Video = function Video() {
  var windowX = window.innerWidth;
  var size;
  if (windowX < 1024) {
    size = 640;
  } else {
    size = 1920;
  }
  var video = document.querySelector("video");
  _promise.fetchingData.then(function (data) {
    var weather = "";
    if (data.err === false) {
      if (data.weather >= 200 && data.weather < 300) {
        weather = "thunder";
      } else if (data.weather >= 300 && data.weather < 600) {
        weather = "rain";
      } else if (data.weather >= 600 && data.weather < 700) {
        weather = "snowy";
      } else if (data.weather >= 700 && data.weather < 800 || data.weather > 800 && data.weather < 900) {
        weather = "cloudy";
      } else if (data.weather === 800) {
        weather = "sunny";
      }
    } else {
      weather = "sunny";
      throw new Error(data.message);
    }
    video.setAttribute("src", "".concat(weather, "-").concat(size, ".mp4"));
  }).catch(function (err) {
    console.error(err.message + " | Something went wrong trying displaying background video, check your entered data and try one more time");
  });
};
exports.Video = Video;
},{"../promise.js":"../src/js/promise.js"}],"../src/js/components/WidgetContainer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetContainer = void 0;
var WidgetContainer = function WidgetContainer() {
  var app = document.getElementById("app");
  var widgetContainer = document.createElement("div");
  widgetContainer.classList.add("container", "max-w-screen-lg", "absolute", "flex", "flex-wrap", "p-5", "justify-between", "gap-3");
  widgetContainer.setAttribute("id", "widget-container");
  app.appendChild(widgetContainer);
};
exports.WidgetContainer = WidgetContainer;
},{}],"../src/main.js":[function(require,module,exports) {
"use strict";

var _SearchBar = require("./js/components/SearchBar.js");
var _TimeDate = require("./js/components/TimeDate.js");
var _Widgets = require("./js/components/Widgets.js");
var _VidmoWidget = require("./js/components/VidmoWidget.js");
var _Video = require("./js/components/Video.js");
var _WidgetContainer = require("./js/components/WidgetContainer.js");
var _cloack = require("./js/cloack.js");
var _attachData = require("./js/attachData.js");
var _animation = require("./js/animation.js");
// components

// scripts

document.addEventListener("DOMContentLoaded", function () {
  (0, _Video.Video)();
  (0, _WidgetContainer.WidgetContainer)();
  (0, _TimeDate.TimeDate)();
  (0, _cloack.Calendar)();
  (0, _cloack.Clock)();
  (0, _Widgets.Widgets)();
  (0, _VidmoWidget.VidmoWidget)();
  (0, _attachData.attachData)();
  (0, _SearchBar.SearchBar)();
  setTimeout(_animation.animate, 2000);
});
},{"./js/components/SearchBar.js":"../src/js/components/SearchBar.js","./js/components/TimeDate.js":"../src/js/components/TimeDate.js","./js/components/Widgets.js":"../src/js/components/Widgets.js","./js/components/VidmoWidget.js":"../src/js/components/VidmoWidget.js","./js/components/Video.js":"../src/js/components/Video.js","./js/components/WidgetContainer.js":"../src/js/components/WidgetContainer.js","./js/cloack.js":"../src/js/cloack.js","./js/attachData.js":"../src/js/attachData.js","./js/animation.js":"../src/js/animation.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59029" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/main.js"], null)
//# sourceMappingURL=/main.da4909e4.js.map