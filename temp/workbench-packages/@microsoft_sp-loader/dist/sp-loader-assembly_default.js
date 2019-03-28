window.spModuleLoader = (function() {
  var __IN_ASSEMBLY = true;

  try {
    var spScriptNamePattern = /sp-loader-assembly(_default)?\.js/i;
    var defineCache = {};
    function define(id, deps, factory) {
      defineCache[id] = {
        deps: deps,
        factory: factory
      };
    }
define("1e384972-6346-49b4-93c7-b2e6763938e6_1.7.1", [], function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Polyfill for the URLSearchParams class.
 *
 * MDN documentation: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
 *
 * WhatWG Spec: https://url.spec.whatwg.org/
 */
Object.defineProperty(exports, "__esModule", { value: true });
var isIterable = typeof window === 'undefined' || 'Symbol' in window && 'iterator' in Symbol;
var URLSearchParams = (function () {
    function URLSearchParams(init) {
        this._initialize(init);
    }
    /**
     * Parser following this spec: https://url.spec.whatwg.org/#concept-urlencoded-parser
     */
    URLSearchParams._getParamterPairsFromString = function (str) {
        var strMatches = str.match(/\??(.*)/);
        if (strMatches) {
            str = strMatches[1];
        }
        else {
            // Unexpected format. Return nothing
            return [];
        }
        return (str.split('&') || []).filter(function (token) { return token; }).map(function (token) {
            var splitIndex = token.indexOf('=');
            var key = '';
            var value = '';
            if (splitIndex === -1) {
                // No "=" -> Empty value
                key = token;
            }
            else if (splitIndex === 0) {
                // "=" is the first character -> empty key
                value = token.substr(1);
            }
            else {
                key = token.substring(0, splitIndex);
                value = token.substr(splitIndex + 1);
            }
            // Replace "+" with space
            key = key.replace(/\+/g, ' ');
            value = value.replace(/\+/g, ' ');
            // Decode the key and value
            key = decodeURIComponent(key);
            value = decodeURIComponent(value);
            return { key: key, value: value };
        });
    };
    URLSearchParams.prototype.append = function (key, value) {
        this._queryParameterList.push({ key: key, value: value });
        this._update();
    };
    URLSearchParams.prototype.delete = function (key) {
        for (var i = 0; i < this._queryParameterList.length; i++) {
            if (this._queryParameterList[i].key === key) {
                this._queryParameterList.splice(i, 1);
                i--;
            }
        }
        this._update();
    };
    URLSearchParams.prototype.entries = function () {
        return this._iteratorFor(this._queryParameterList.map(function (pair) { return [pair.key, pair.value]; }));
    };
    URLSearchParams.prototype.get = function (key) {
        for (var i = 0; i < this._queryParameterList.length; i++) {
            if (this._queryParameterList[i].key === key) {
                return this._queryParameterList[i].value;
            }
        }
        return null; // tslint:disable-line:no-null-keyword
    };
    URLSearchParams.prototype.getAll = function (key) {
        var result = [];
        for (var i = 0; i < this._queryParameterList.length; i++) {
            if (this._queryParameterList[i].key === key) {
                result.push(this._queryParameterList[i].value);
            }
        }
        return result;
    };
    URLSearchParams.prototype.has = function (key) {
        for (var i = 0; i < this._queryParameterList.length; i++) {
            if (this._queryParameterList[i].key === key) {
                return true;
            }
        }
        return false; // tslint:disable-line:no-null-keyword
    };
    URLSearchParams.prototype.keys = function () {
        return this._iteratorFor(this._queryParameterList.map(function (pair) { return pair.key; }));
    };
    URLSearchParams.prototype.set = function (key, value) {
        var found = false;
        for (var i = 0; i < this._queryParameterList.length; i++) {
            if (this._queryParameterList[i].key === key) {
                if (found) {
                    // Already found a matching key - remove the rest
                    this._queryParameterList.splice(i, 1);
                    i--;
                }
                else {
                    found = true;
                    this._queryParameterList[i].value = value;
                }
            }
        }
        if (!found) {
            this.append(key, value);
            // No need to call _update() here because append() calls it.
        }
        else {
            this._update();
        }
    };
    URLSearchParams.prototype.sort = function () {
        this._queryParameterList.sort(function (a, b) { return a.key.localeCompare(b.key); });
        this._update();
    };
    URLSearchParams.prototype.toString = function () {
        return this._queryParameterList.map(function (_a) {
            var key = _a.key, value = _a.value;
            return encodeURIComponent(key) + "=" + encodeURIComponent(value);
        }).join('&');
    };
    URLSearchParams.prototype.values = function () {
        return this._iteratorFor(this._queryParameterList.map(function (pair) { return pair.value; }));
    };
    URLSearchParams.prototype._update = function () {
        if (this._url) {
            this._url.search = this.toString();
        }
    };
    URLSearchParams.prototype._initialize = function (init) {
        this._queryParameterList = [];
        if (Array.isArray(init)) {
            // Array
            for (var _i = 0, init_1 = init; _i < init_1.length; _i++) {
                var element = init_1[_i];
                if (!Array.isArray(element) || element.length !== 2) {
                    // Must be an array of two-element arrays
                    throw new TypeError('All elements in init sequence must have exactly two elements');
                }
                else {
                    this._queryParameterList.push({
                        key: element[0],
                        value: element[1]
                    });
                }
            }
        }
        else if (typeof init === 'object') {
            // Dictionary
            for (var key in init) {
                if (init.hasOwnProperty(key)) {
                    this._queryParameterList.push({
                        key: key,
                        value: init[key]
                    });
                }
            }
        }
        else if (typeof init === 'string') {
            // String
            this._queryParameterList = URLSearchParams._getParamterPairsFromString(init);
        }
        else {
            // do nothing
        }
    };
    URLSearchParams.prototype._iteratorFor = function (items) {
        var index = 0;
        var iterator = {
            next: function () {
                var value = items[index++];
                return { done: value === undefined, value: value };
            }
        };
        if (isIterable) {
            iterator[Symbol.iterator] = function () { return iterator; };
        }
        return iterator;
    };
    return URLSearchParams;
}());
exports.default = URLSearchParams;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @copyright Microsoft Corporation. All rights reserved.
// @file This file contains an inventory of all of our framework's polyfills.
// All webpart and application code can rely on these libraries being polyfilled by our framework.
Object.defineProperty(exports, "__esModule", { value: true });
// ES6 Harmony Collections Polyfill
// ES6 Harmony Collections  was added as a polyfill to provide a lightweight unobtrusive shim for
// ES2015 collections. The implementations of Map, Set, and WeakMap provided by this polyfill
// adhere to the ES2015 standard. Functions that abide by the ES2015 standard such as Map.get()
// and Set.has() are guaranteed to run in sublinear time rather than the expected constant time
// for a standard hashmap implementation. (See http://stackoverflow.com/a/31092145) The alternative
// popular library to ES6 Harmony Collections is ES6 shim. After running some samples tests, we have
// determined that ES6 Harmony Collections performs better on a larger set of operations than
// the es6-shim. (Tests were run here: https://jsperf.com/es6-shim-vs-es6-collections/2 ).
// ES6 shim is also a much larger library in size.
// https://github.com/WebReflection/es6-collections
__webpack_require__(3);
// ES6 Promise Polyfill
// Adds an implementation of the ES2015-Promise to the browser. The implementation is a subset
// of rsvp.js.
// (See: https://github.com/tildeio/rsvp.js) ES6 Promise is compliant with Promises/A+
// (See: https://promisesaplus.com/)
// Very useful for using Promise in the Safari/IE/Edge (already supported by Chrome/Firefox)
// https://github.com/jakearchibald/es6-promise
var es6promise = __webpack_require__(4);
es6promise.polyfill();
// Window.Fetch PolyFill
// Adds an implementation of the Fetch standard to the browser.
// Very useful for using the fetch api in the Safari/IE (already supported by Chrome/Firefox/Edge)
// https://github.com/github/fetch
__webpack_require__(7);
// Fill utility for URL types
var UrlFillHelper = __webpack_require__(8);
UrlFillHelper.fillUrlIfNecessary(function () { return __webpack_require__(9).default; });
UrlFillHelper.fillUrlSearchParamsIfNecessary(function () { return __webpack_require__(1).default; });
// TypeScript 2.0 Typings have location.origin and performance as readonly properties.
// This is a polyfill for window.location.origin, which is not supported by the IE browser
if (!window.location.origin) {
    window.location.origin = window.location.protocol // tslint:disable-line:no-any
        + '//'
        + window.location.hostname
        + (window.location.port ? ':' + window.location.port : '');
}
// IE9 doesn't support performance.now(), so we need to polyfill that
if (!window.performance) {
    window.performance = {}; // tslint:disable-line:no-any
}
if (!window.performance.now) {
    // Polyfill performance.now with a function that returns the number of milliseconds since the module loader loaded.
    // Not as accurate as the real performance.now() function, but as accurate as we're able to get with a polyfill.
    var pageLoadTime_1 = Date.now();
    window.performance.now = function () { return Date.now() - pageLoadTime_1; };
}
// ES6 Collection Polyfill does not provide toString function for Set Object, which may cause false negative when
// checking implementation of Set if other polyfill for Set is bundled.
// Check whether toString() is implemented right, if not, provide toString for Set.
if (new Set().toString() === '[object Object]') {
    window.Set.prototype.toString = function () { return '[object Set]'; }; // tslint:disable-line:no-any
}
// Object.assign is not supported by IE11 and needs to be filled for the marksy library.
var ObjectPolyfill = __webpack_require__(11);
ObjectPolyfill.createAssignPolyfill();


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (exports) {'use strict';
  //shared pointer
  var i;
  //shortcuts
  var defineProperty = Object.defineProperty, is = function(a,b) { return (a === b) || (a !== a && b !== b) };


  //Polyfill global objects
  if (typeof WeakMap == 'undefined') {
    exports.WeakMap = createCollection({
      // WeakMap#delete(key:void*):boolean
      'delete': sharedDelete,
      // WeakMap#clear():
      clear: sharedClear,
      // WeakMap#get(key:void*):void*
      get: sharedGet,
      // WeakMap#has(key:void*):boolean
      has: mapHas,
      // WeakMap#set(key:void*, value:void*):void
      set: sharedSet
    }, true);
  }

  if (typeof Map == 'undefined' || typeof ((new Map).values) !== 'function' || !(new Map).values().next) {
    exports.Map = createCollection({
      // WeakMap#delete(key:void*):boolean
      'delete': sharedDelete,
      //:was Map#get(key:void*[, d3fault:void*]):void*
      // Map#has(key:void*):boolean
      has: mapHas,
      // Map#get(key:void*):boolean
      get: sharedGet,
      // Map#set(key:void*, value:void*):void
      set: sharedSet,
      // Map#keys(void):Iterator
      keys: sharedKeys,
      // Map#values(void):Iterator
      values: sharedValues,
      // Map#entries(void):Iterator
      entries: mapEntries,
      // Map#forEach(callback:Function, context:void*):void ==> callback.call(context, key, value, mapObject) === not in specs`
      forEach: sharedForEach,
      // Map#clear():
      clear: sharedClear
    });
  }

  if (typeof Set == 'undefined' || typeof ((new Set).values) !== 'function' || !(new Set).values().next) {
    exports.Set = createCollection({
      // Set#has(value:void*):boolean
      has: setHas,
      // Set#add(value:void*):boolean
      add: sharedAdd,
      // Set#delete(key:void*):boolean
      'delete': sharedDelete,
      // Set#clear():
      clear: sharedClear,
      // Set#keys(void):Iterator
      keys: sharedValues, // specs actually say "the same function object as the initial value of the values property"
      // Set#values(void):Iterator
      values: sharedValues,
      // Set#entries(void):Iterator
      entries: setEntries,
      // Set#forEach(callback:Function, context:void*):void ==> callback.call(context, value, index) === not in specs
      forEach: sharedForEach
    });
  }

  if (typeof WeakSet == 'undefined') {
    exports.WeakSet = createCollection({
      // WeakSet#delete(key:void*):boolean
      'delete': sharedDelete,
      // WeakSet#add(value:void*):boolean
      add: sharedAdd,
      // WeakSet#clear():
      clear: sharedClear,
      // WeakSet#has(value:void*):boolean
      has: setHas
    }, true);
  }


  /**
   * ES6 collection constructor
   * @return {Function} a collection class
   */
  function createCollection(proto, objectOnly){
    function Collection(a){
      if (!this || this.constructor !== Collection) return new Collection(a);
      this._keys = [];
      this._values = [];
      this._itp = []; // iteration pointers
      this.objectOnly = objectOnly;

      //parse initial iterable argument passed
      if (a) init.call(this, a);
    }

    //define size for non object-only collections
    if (!objectOnly) {
      defineProperty(proto, 'size', {
        get: sharedSize
      });
    }

    //set prototype
    proto.constructor = Collection;
    Collection.prototype = proto;

    return Collection;
  }


  /** parse initial iterable argument passed */
  function init(a){
    var i;
    //init Set argument, like `[1,2,3,{}]`
    if (this.add)
      a.forEach(this.add, this);
    //init Map argument like `[[1,2], [{}, 4]]`
    else
      a.forEach(function(a){this.set(a[0],a[1])}, this);
  }


  /** delete */
  function sharedDelete(key) {
    if (this.has(key)) {
      this._keys.splice(i, 1);
      this._values.splice(i, 1);
      // update iteration pointers
      this._itp.forEach(function(p) { if (i < p[0]) p[0]--; });
    }
    // Aurora here does it while Canary doesn't
    return -1 < i;
  };

  function sharedGet(key) {
    return this.has(key) ? this._values[i] : undefined;
  }

  function has(list, key) {
    if (this.objectOnly && key !== Object(key))
      throw new TypeError("Invalid value used as weak collection key");
    //NaN or 0 passed
    if (key != key || key === 0) for (i = list.length; i-- && !is(list[i], key);){}
    else i = list.indexOf(key);
    return -1 < i;
  }

  function setHas(value) {
    return has.call(this, this._values, value);
  }

  function mapHas(value) {
    return has.call(this, this._keys, value);
  }

  /** @chainable */
  function sharedSet(key, value) {
    this.has(key) ?
      this._values[i] = value
      :
      this._values[this._keys.push(key) - 1] = value
    ;
    return this;
  }

  /** @chainable */
  function sharedAdd(value) {
    if (!this.has(value)) this._values.push(value);
    return this;
  }

  function sharedClear() {
    (this._keys || 0).length =
    this._values.length = 0;
  }

  /** keys, values, and iterate related methods */
  function sharedKeys() {
    return sharedIterator(this._itp, this._keys);
  }

  function sharedValues() {
    return sharedIterator(this._itp, this._values);
  }

  function mapEntries() {
    return sharedIterator(this._itp, this._keys, this._values);
  }

  function setEntries() {
    return sharedIterator(this._itp, this._values, this._values);
  }

  function sharedIterator(itp, array, array2) {
    var p = [0], done = false;
    itp.push(p);
    return {
      next: function() {
        var v, k = p[0];
        if (!done && k < array.length) {
          v = array2 ? [array[k], array2[k]]: array[k];
          p[0]++;
        } else {
          done = true;
          itp.splice(itp.indexOf(p), 1);
        }
        return { done: done, value: v };
      }
    };
  }

  function sharedSize() {
    return this._values.length;
  }

  function sharedForEach(callback, context) {
    var it = this.entries();
    for (;;) {
      var r = it.next();
      if (r.done) break;
      callback.call(context, r.value[1], r.value[0], this);
    }
  }

})(typeof exports != 'undefined' && typeof global != 'undefined' ? global : window );

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var require;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.1
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var r = require;
    var vertx = __webpack_require__(6);
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === GET_THEN_ERROR) {
      reject(promise, GET_THEN_ERROR.error);
      GET_THEN_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;

  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = undefined,
      callback = undefined,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
      resolve(promise, value);
    } else if (failed) {
      reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      reject(promise, value);
    }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function Enumerator$1(Constructor, input) {
  this._instanceConstructor = Constructor;
  this.promise = new Constructor(noop);

  if (!this.promise[PROMISE_ID]) {
    makePromise(this.promise);
  }

  if (isArray(input)) {
    this.length = input.length;
    this._remaining = input.length;

    this._result = new Array(this.length);

    if (this.length === 0) {
      fulfill(this.promise, this._result);
    } else {
      this.length = this.length || 0;
      this._enumerate(input);
      if (this._remaining === 0) {
        fulfill(this.promise, this._result);
      }
    }
  } else {
    reject(this.promise, validationError());
  }
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

Enumerator$1.prototype._enumerate = function (input) {
  for (var i = 0; this._state === PENDING && i < input.length; i++) {
    this._eachEntry(input[i], i);
  }
};

Enumerator$1.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$1 = c.resolve;

  if (resolve$$1 === resolve$1) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise$2) {
      var promise = new c(noop);
      handleMaybeThenable(promise, entry, _then);
      this._willSettleAt(promise, i);
    } else {
      this._willSettleAt(new c(function (resolve$$1) {
        return resolve$$1(entry);
      }), i);
    }
  } else {
    this._willSettleAt(resolve$$1(entry), i);
  }
};

Enumerator$1.prototype._settledAt = function (state, i, value) {
  var promise = this.promise;

  if (promise._state === PENDING) {
    this._remaining--;

    if (state === REJECTED) {
      reject(promise, value);
    } else {
      this._result[i] = value;
    }
  }

  if (this._remaining === 0) {
    fulfill(promise, this._result);
  }
};

Enumerator$1.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all$1(entries) {
  return new Enumerator$1(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race$1(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {function} resolver
  Useful for tooling.
  @constructor
*/
function Promise$2(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise$2 ? initializePromise(this, resolver) : needsNew();
  }
}

Promise$2.all = all$1;
Promise$2.race = race$1;
Promise$2.resolve = resolve$1;
Promise$2.reject = reject$1;
Promise$2._setScheduler = setScheduler;
Promise$2._setAsap = setAsap;
Promise$2._asap = asap;

Promise$2.prototype = {
  constructor: Promise$2,

  /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
  
    ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
  
    Chaining
    --------
  
    The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
  
    ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
  
    findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
  
    ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
  
    Assimilation
    ------------
  
    Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
  
    If the assimliated promise rejects, then the downstream promise will also reject.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
  
    Simple Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let result;
  
    try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
  
    Advanced Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let author, books;
  
    try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
  
    function foundBooks(books) {
  
    }
  
    function failure(reason) {
  
    }
  
    findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
  
    @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
  */
  then: then,

  /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
  
    ```js
    function findAuthor(){
      throw new Error('couldn't find that author');
    }
  
    // synchronous
    try {
      findAuthor();
    } catch(reason) {
      // something went wrong
    }
  
    // async with promises
    findAuthor().catch(function(reason){
      // something went wrong
    });
    ```
  
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
  */
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

/*global self*/
function polyfill$1() {
    var local = undefined;

    if (typeof global !== 'undefined') {
        local = global;
    } else if (typeof self !== 'undefined') {
        local = self;
    } else {
        try {
            local = Function('return this')();
        } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
        }
    }

    var P = local.Promise;

    if (P) {
        var promiseToString = null;
        try {
            promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {
            // silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
            return;
        }
    }

    local.Promise = Promise$2;
}

// Strange compat..
Promise$2.polyfill = polyfill$1;
Promise$2.Promise = Promise$2;

return Promise$2;

})));


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 7 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function urlIsPresent() {
    if (typeof window.URL === 'undefined') {
        return false;
    }
    try {
        var url = new window.URL('http://contoso.com?a=b');
        return url.searchParams.get('a') === 'b';
    }
    catch (e) {
        return false;
    }
}
function urlSearchParamsIsPresent() {
    if (typeof window['URLSearchParams'] === 'undefined') {
        return false;
    }
    try {
        new URLSearchParams('?a=b&c=d'); // tslint:disable-line:no-unused-expression
        // tslint:disable:no-string-literal
        return !!(URLSearchParams.prototype['keys'] &&
            URLSearchParams.prototype['values'] &&
            URLSearchParams.prototype['entries']);
        // tslint:enable:no-string-literal
    }
    catch (e) {
        return false;
    }
}
/**
 * Fills the window.URL class if it doesn't already exist or if its implementation is incorrect
 */
function fillUrlIfNecessary(URL) {
    // 'window' isn't defined in mocha test
    if (typeof window !== 'undefined' && (!urlIsPresent() || !urlSearchParamsIsPresent())) {
        window.URL = URL();
    }
}
exports.fillUrlIfNecessary = fillUrlIfNecessary;
/**
 * Fills the window.URLSearchParams class if it doesn't already exist or if its implementation is incorrect
 */
// tslint:disable-next-line:no-any variable-name
function fillUrlSearchParamsIfNecessary(URLSearchParams) {
    if (typeof window !== 'undefined' && (!urlIsPresent() || !urlSearchParamsIsPresent())) {
        window['URLSearchParams'] = URLSearchParams(); // tslint:disable-line:no-string-literal
    }
}
exports.fillUrlSearchParamsIfNecessary = fillUrlSearchParamsIfNecessary;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is an incomplete implementation of a URL polyfill. These things are not supported, or not fully supported:
 *  - baseURLString constructor property
 *      This means that `new URL('http://contoso.com/path/to/something', 'http://fabrikam.com')` will not work,
 *        but the same thing can be accomplished with:
 *      const url = new new URL('http://contoso.com/path/to/something');
 *      url.host = 'fabrikam.com';
 *
 *  - Username
 *      The username property is not supported and will always return the empty string. Setting the username has
 *        no effect.
 *
 *  - Password
 *      The password property is not supported and will always return the empty string. Setting the password has
 *        no effect.
 *
 *  - Setting the pathname property with a value containing encoded values will double-encode the encoded values.
 *      For example. myUrl.pathname = "path%2Bto/resource.json" => myUrl.pathname === "/path%252Bto/resource.json"
 *      To set the pathname to a value that contains a special character, set it with the un-encoded character.
 *      The encoded "/" character (%2F) is not supported
 *
 * MDN documentation: https://developer.mozilla.org/en-US/docs/Web/API/URL
 *
 * WhatWG Spec: https://url.spec.whatwg.org/
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseURL_1 = __webpack_require__(10);
var SPECIAL_SCHEMES_AND_PORTS = {
    'ftp:': '21',
    'gopher:': '70',
    'http:': '80',
    'https:': '443',
    'ws:': '80',
    'wss:': '443'
};
/**
 * Ensures the URL has a scheme
 */
function urlIsValid(url) {
    return !!url.match(/^.+\:/);
}
var URL = (function (_super) {
    __extends(URL, _super);
    function URL(url, baseURLString) {
        var _this = this;
        if (!urlIsValid(url)) {
            throw new TypeError('Invalid URL');
        }
        _this = _super.call(this, url, baseURLString) || this;
        _this._shadowDocument = document.implementation.createHTMLDocument('');
        _this._innerAnchorElement = _this._shadowDocument.createElement('a');
        if (baseURLString) {
            throw new Error('baseURLString parameter is not supported by the URL polyfill.');
        }
        _this._innerAnchorElement.href = url;
        _this._initializeSearchParams();
        return _this;
    }
    Object.defineProperty(URL.prototype, "href", {
        get: function () {
            var result = this._innerAnchorElement.href;
            if (this._hashHashBeenCleared) {
                if (result.match(/\#$/)) {
                    result = result.substr(0, result.length - 1);
                }
                if (this._searchHasBeenCleared && result.match(/\?$/)) {
                    result = result.substr(0, result.length - 1);
                }
            }
            else if (this._searchHasBeenCleared) {
                var firstIndexOfHash = result.indexOf('#');
                if (firstIndexOfHash === -1) {
                    // No fragment
                    if (result.match(/\?$/)) {
                        result = result.substr(0, result.length - 1);
                    }
                }
                else if (result.charAt(firstIndexOfHash - 1) === '?') {
                    result = result.substring(0, firstIndexOfHash - 1) + result.substr(firstIndexOfHash);
                }
            }
            return result;
        },
        set: function (newValue) {
            if (!urlIsValid(newValue)) {
                throw new TypeError('Invalid URL');
            }
            this._invalidate();
            this._innerAnchorElement.href = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(URL.prototype, "origin", {
        get: function () {
            if (SPECIAL_SCHEMES_AND_PORTS.hasOwnProperty(this.protocol)) {
                if (!this.port || SPECIAL_SCHEMES_AND_PORTS[this.protocol] === this.port) {
                    // Standard port, don't serialize the port
                    return this.protocol + "//" + this._innerAnchorElement.hostname;
                }
                else {
                    // Non-standard port, serialize the port
                    return this.protocol + "//" + this._innerAnchorElement.hostname + ":" + this.port;
                }
            }
            else {
                return 'null';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(URL.prototype, "protocol", {
        get: function () {
            return this._innerAnchorElement.protocol;
        },
        set: function (newValue) {
            // Trim the trailing ":" and serialize "null" or "undefined" as a weird caveat of the spec
            var protocolMatches = ("" + newValue).match(/^([^\:]+):?$/);
            if (protocolMatches) {
                this._invalidate();
                this._innerAnchorElement.protocol = protocolMatches[1] + ":";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(URL.prototype, "username", {
        get: function () {
            return ''; // Not supported
        },
        set: function (newValue) {
            // Not supported
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(URL.prototype, "password", {
        get: function () {
            return ''; // Not supported
        },
        set: function (newValue) {
            // Not supported
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(URL.prototype, "host", {
        get: function () {
            return this._innerAnchorElement.host;
        },
        set: function (newValue) {
            this._invalidate();
            this._innerAnchorElement.host = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(URL.prototype, "hostname", {
        get: function () {
            return this._innerAnchorElement.hostname;
        },
        set: function (newValue) {
            this._invalidate();
            this._innerAnchorElement.hostname = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(URL.prototype, "port", {
        get: function () {
            return this._innerAnchorElement.port;
        },
        set: function (newValue) {
            this._invalidate();
            if (newValue) {
                this._innerAnchorElement.port = newValue;
            }
            else {
                this._innerAnchorElement.port = SPECIAL_SCHEMES_AND_PORTS[this.protocol] || newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(URL.prototype, "pathname", {
        get: function () {
            return this._innerAnchorElement.pathname;
        },
        set: function (newValue) {
            this._invalidate();
            this._innerAnchorElement.pathname = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(URL.prototype, "hash", {
        get: function () {
            return this._innerAnchorElement.hash;
        },
        set: function (newValue) {
            this._invalidate();
            this._innerAnchorElement.hash = '';
            // Trim the leading "#" and serialize "null" or "undefined" as a weird caveat of the spec
            var fragmentMatches = ("" + newValue).match(/^#?(.*)/);
            if (fragmentMatches && !!fragmentMatches[1]) {
                this._innerAnchorElement.hash = fragmentMatches[1];
                this._hashHashBeenCleared = false;
            }
            else {
                this._hashHashBeenCleared = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(URL.prototype, "_query", {
        get: function () {
            return this._innerAnchorElement.search;
        },
        set: function (newValue) {
            this._innerAnchorElement.search = '';
            if (!!newValue) {
                this._innerAnchorElement.search = newValue;
                this._searchHasBeenCleared = false;
            }
            else {
                this._searchHasBeenCleared = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    URL.prototype._invalidate = function () { };
    return URL;
}(BaseURL_1.default));
exports.default = URL;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var URLSearchParams_1 = __webpack_require__(1);
// 'window' isn't defined in mocha test
var currentWindowUrl = (typeof window !== 'undefined') ? window.URL : undefined;
/**
 * This class contains functionality that is common between the smaller "URL" class and the experimental
 *  complete "URL" class.
 */
var BaseURL = (function () {
    function BaseURL(url, base) {
    }
    BaseURL.createObjectURL = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (currentWindowUrl && currentWindowUrl.createObjectURL) {
            // Passthrough to the existing currentWindowUrl if the browser supports it
            return currentWindowUrl.createObjectURL.apply(window, args);
        }
        else {
            throw new Error('createObjectURL not supported');
        }
    };
    BaseURL.revokeObjectURL = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (currentWindowUrl && currentWindowUrl.revokeObjectURL) {
            // Passthrough to the existing revokeObjectURL if the browser supports it
            currentWindowUrl.revokeObjectURL.apply(window, args);
        }
        else {
            throw new Error('revokeObjectURL not supported');
        }
    };
    Object.defineProperty(BaseURL.prototype, "search", {
        get: function () {
            return this._query || '';
        },
        set: function (newValue) {
            this._invalidate();
            // Trim the leading "?" and serialize "null" or "undefined" as a weird caveat of the spec
            var queryMatches = ("" + newValue).match(/^\??(.*)/);
            if (queryMatches && !!queryMatches[1]) {
                this._query = queryMatches[1];
            }
            else {
                this._query = null; // tslint:disable-line:no-null-keyword
            }
            var existingSearchParams = this._searchParams.toString();
            if (existingSearchParams !== this.search && "?" + existingSearchParams !== this.search) {
                // Update searchParams
                this._searchParams._initialize(this.search); // tslint:disable-line:no-any
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseURL.prototype, "searchParams", {
        get: function () {
            return this._searchParams;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseURL.prototype, "searchparams", {
        // Need to include this because the TypeScript lib.d.ts typings have the incorrect case
        // Remove when the TS typings are fixed. VSO#339963
        get: function () {
            throw new Error('This function does not exist.');
        },
        enumerable: true,
        configurable: true
    });
    BaseURL.prototype.toJson = function () {
        // Same behavior as "href"
        return this.href;
    };
    BaseURL.prototype._initializeSearchParams = function () {
        this._searchParams = new URLSearchParams_1.default(this.search);
        // Ensure searchParams has a pointer to this object.
        this._searchParams._url = this; // tslint:disable-line:no-any
    };
    return BaseURL;
}());
exports.default = BaseURL;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// based on reference polyfill on MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
function createAssignPolyfill() {
    if (typeof Object.assign !== 'function') {
        Object.defineProperty(Object, 'assign', {
            value: function (target) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                if (!target) {
                    throw new TypeError('Cannot convert undefined or null to object');
                }
                var to = Object(target);
                for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                    var nextSource = args_1[_a];
                    if (nextSource) {
                        for (var nextKey in nextSource) {
                            if (nextSource.hasOwnProperty(nextKey)) {
                                to[nextKey] = nextSource[nextKey];
                            }
                        }
                    }
                }
                return to;
            },
            writable: true,
            configurable: true
        });
    }
}
exports.createAssignPolyfill = createAssignPolyfill;


/***/ })
/******/ ])});;
//# sourceMappingURL=sp-polyfills.js.map


define("1c6c9123-7aac-41f3-a376-3caea41ed83f_1.7.1", ["@ms/sp-telemetry","@microsoft/sp-core-library","@microsoft/sp-lodash-subset","@microsoft/sp-page-context","@microsoft/sp-http","@microsoft/sp-diagnostics","@microsoft/sp-dynamic-data","@microsoft/load-themed-styles"], function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(7),__webpack_require__(3),__webpack_require__(4),__webpack_require__(5),__webpack_require__(6),__webpack_require__(1),__webpack_require__(8),__webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_41__, __WEBPACK_EXTERNAL_MODULE_42__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp1c6c9123_7aac_41f3_a376_3caea41ed83f_1_7_1"];
/******/ 	window["webpackJsonp1c6c9123_7aac_41f3_a376_3caea41ed83f_1_7_1"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"developer-tools"}[chunkId]||chunkId) + "_" + {"0":"a4f69a234b624a5835b7","1":"d89764bb3c296e89fac4","2":"d7357317a128fd03f749"}[chunkId] + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Set the webpack public path
/******/ 	(function () {
/******/ 	  var scripts = document.getElementsByTagName('script');
/******/ 	  var regex = (typeof spScriptNamePattern !== 'undefined') ? spScriptNamePattern : new RegExp('sp-loader_?[a-zA-Z0-9-_]*.js', 'i');
/******/ 	  var publicPath;
/******/ 	
/******/ 	  if (scripts && scripts.length) {
/******/ 	    for (var i = 0; i < scripts.length; i++) {
/******/ 	      if (!scripts[i]) continue;
/******/ 	      var path = scripts[i].getAttribute('src');
/******/ 	      if (path && path.match(regex)) {
/******/ 	        publicPath = path.substring(0, path.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/ 	
/******/ 	  if (!publicPath) {
/******/ 	    for (var global in window.__setWebpackPublicPathLoaderSrcRegistry__) {
/******/ 	      if (global && global.match(regex)) {
/******/ 	        publicPath = global.substring(0, global.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/ 	  __webpack_require__.p = publicPath;
/******/ 	})();
/******/ 	
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_diagnostics__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_diagnostics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__microsoft_sp_diagnostics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__debug_confirmDebugAllowed__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utilities_normalizeComponentId__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SPLoader_resx__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utilities_componentConstants__ = __webpack_require__(6);







var ManifestStore = (function () {
    function ManifestStore() {
        this._manifestVersions = new Map();
        this._manifests = new Map();
        this._pinnedManifests = new Set();
    }
    Object.defineProperty(ManifestStore, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new ManifestStore();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    ManifestStore.prototype.registerPreloadedManifests = function (preloadedData) {
        if (preloadedData && preloadedData.manifests && preloadedData.manifests.length) {
            this.registerManifests(preloadedData.manifests, true);
        }
        var globalManifests = window.g_webPartManifests;
        if (globalManifests && globalManifests.length) {
            this.registerManifests(globalManifests, true);
        }
    };
    ManifestStore.prototype.registerDebugManifests = function (manifests) {
        if (manifests) {
            for (var _i = 0, manifests_1 = manifests; _i < manifests_1.length; _i++) {
                var manifest = manifests_1[_i];
                this._addDebugManifest(manifest);
            }
        }
    };
    ManifestStore.prototype.tryGetManifest = function (id, version, shouldLog) {
        if (shouldLog === void 0) { shouldLog = true; }
        try {
            return this._getManifest(id, version, shouldLog);
        }
        catch (e) {
            return undefined;
        }
    };
    ManifestStore.prototype.getManifest = function (id, version) {
        return this._getManifest(id, version, true);
    };
    ManifestStore.prototype.getRegisteredManifests = function () {
        var _this = this;
        var result = [];
        this._manifests.forEach(function (manifestEntry) {
            var manifest = _this._getManifestFromStoreEntry(manifestEntry);
            if (manifest) {
                result.push(manifest);
            }
        });
        return result;
    };
    ManifestStore.prototype.replaceManifests = function (manifests) {
        this._removeAllManifests();
        this.registerManifests(manifests, false);
    };
    ManifestStore.prototype._getManifestMap = function () {
        return this._manifests;
    };
    ManifestStore.prototype.registerManifests = function (manifests, overwriteExisting) {
        var _this = this;
        manifests.forEach(function (manifest) { return _this._addManifest(manifest, overwriteExisting); });
    };
    ManifestStore.prototype._pinManifest = function (componentId) {
        __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__["Validate"].isNonemptyString(componentId, 'componentId');
        this._pinnedManifests.add(componentId);
    };
    ManifestStore.prototype._unpinManifest = function (componentId) {
        __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__["Validate"].isNonemptyString(componentId, 'componentId');
        this._pinnedManifests.delete(componentId);
    };
    ManifestStore.prototype.requestManifest = function (id, version) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__["Validate"].isNotNullOrUndefined(this._manifestProvider, 'manifestProvider');
        __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_diagnostics__["_TraceLogger"].logVerbose(__WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["g" /* manifestStoreLogSource */], "Requesting manifest with id: \"" + id + "\" and version: \"" + version + "\"");
        return this._manifestProvider.tryGetManifest(id, version).then(function (manifests) {
            _this.registerManifests(manifests, false);
            return _this.getManifest(id, version);
        }).catch(function (error) {
            throw new Error(_this._getManifestNotFoundErrorMessage(id, version));
        });
    };
    ManifestStore.prototype.requestManifests = function (ids) {
        var _this = this;
        var retVal = [];
        __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__["Validate"].isNotNullOrUndefined(this._manifestProvider, 'manifestProvider');
        return this._manifestProvider.tryGetManifests(ids).then(function (manifests) {
            _this.registerManifests(manifests, false);
            ids.forEach(function (id) {
                retVal.push(_this.getManifest(id.id, id.version));
            });
            return retVal;
        });
    };
    ManifestStore.prototype._setManifestProvider = function (manifestProvider) {
        if (!this._manifestProvider) {
            this._manifestProvider = manifestProvider;
        }
    };
    ManifestStore.prototype._isManifestPinned = function (componentId) {
        return this._pinnedManifests.has(componentId);
    };
    ManifestStore.prototype._removeAllManifests = function () {
        var _this = this;
        this._manifests.forEach(function (manifestEntry) { return _this._removeManifest(manifestEntry.id, manifestEntry.version); });
    };
    ManifestStore.prototype._removeManifest = function (id, version) {
        if (this._pinnedManifests.has(id)) {
            return false;
        } 
        if (id === __WEBPACK_IMPORTED_MODULE_6__utilities_componentConstants__["e" /* reactComponentId */] || id === __WEBPACK_IMPORTED_MODULE_6__utilities_componentConstants__["f" /* reactDomComponentId */]) {
            return false;
        }
        var versionObj = __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__["Version"].parse(version);
        var index = this._createIndex(id, versionObj);
        var entry = this._manifests.get(index);
        if (!entry) {
            return false;
        } 
        if (entry.debugManifest) {
            return false;
        } 
        this._manifests.delete(index);
        if (this._manifestVersions.get(id).length === 1) {
            this._manifestVersions.delete(id);
        }
        else {
            this._manifestVersions.set(id, this._manifestVersions.get(id).filter(function (v) { return !v.equals(versionObj); }));
        }
        return true;
    };
    ManifestStore.prototype._getManifest = function (id, version, shouldLog) {
        __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__["Validate"].isNonemptyString(id, 'id');
        var index = this._getExistingIndex(id, version);
        if (!index) {
            var errorMessage = this._getManifestNotFoundErrorMessage(id, version);
            if (shouldLog) {
                __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_diagnostics__["_TraceLogger"].logVerbose(__WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["g" /* manifestStoreLogSource */], errorMessage);
            }
            throw new Error(errorMessage);
        }
        var manifestEntry = this._manifests.get(index);
        if (manifestEntry) {
            var manifest = this._getManifestFromStoreEntry(manifestEntry);
            if (manifest) {
                return manifest;
            }
        }
        throw new Error(this._getManifestNotFoundErrorMessage(id, version));
    };
    ManifestStore.prototype._getManifestNotFoundErrorMessage = function (id, version) {
        if (!version) {
            return __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__["Text"].format(__WEBPACK_IMPORTED_MODULE_5__SPLoader_resx__["a" /* default */].manifestNotFoundByIdError, id);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__["Text"].format(__WEBPACK_IMPORTED_MODULE_5__SPLoader_resx__["a" /* default */].manifestNotFoundError, id, version);
        }
    };
    ManifestStore.prototype._getManifestFromStoreEntry = function (manifestEntry) {
        var allowDebug = Object(__WEBPACK_IMPORTED_MODULE_3__debug_confirmDebugAllowed__["c" /* peekDebugAllowed */])({ manifestsRequested: true, loaderRequested: false });
        if (manifestEntry) {
            if (allowDebug && manifestEntry.debugManifest) {
                return manifestEntry.debugManifest;
            }
            else {
                return manifestEntry.manifest;
            }
        }
        else {
            return undefined;
        }
    };
    ManifestStore.prototype._addManifest = function (manifest, overwriteExisting) {
        this._internalAddManifest(manifest, false, overwriteExisting);
    };
    ManifestStore.prototype._addDebugManifest = function (manifest) {
        this._internalAddManifest(manifest, true);
    };
    ManifestStore.prototype._internalAddManifest = function (manifest, isDebug, overwriteExisting) {
        if (this._isManifestPinned(manifest.id)) {
            return;
        }
        if (!__WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__["_SPFlight"].isDebugFlightEnabled && manifest.isInternal
            && manifest.id !== __WEBPACK_IMPORTED_MODULE_6__utilities_componentConstants__["e" /* reactComponentId */] && manifest.id !== __WEBPACK_IMPORTED_MODULE_6__utilities_componentConstants__["f" /* reactDomComponentId */]) {
            this._pinManifest(manifest.id);
        }
        if (isDebug) {
            manifest._isDebug = true;
        }
        var index = this._getExistingIndex(manifest.id, manifest.version);
        var existingEntry = index ? this._manifests.get(index) : undefined;
        if (existingEntry) {
            if (isDebug) {
                existingEntry.debugManifest = manifest;
            }
            else {
                if (overwriteExisting || !existingEntry.manifest) {
                    existingEntry.manifest = manifest;
                }
            }
        }
        else {
            this._addManifestToVersionsMap(manifest);
            var newIndex = this._createIndexFromManifest(manifest);
            this._manifests.set(newIndex, {
                id: manifest.id,
                version: manifest.version,
                manifest: isDebug ? undefined : manifest,
                debugManifest: isDebug ? manifest : undefined
            });
        }
    };
    ManifestStore.prototype._addManifestToVersionsMap = function (manifest) {
        var version = __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__["Version"].parse(manifest.version);
        if (!this._manifestVersions.has(manifest.id)) {
            this._manifestVersions.set(manifest.id, [version]);
        }
        else {
            var versions = this._manifestVersions.get(manifest.id);
            for (var _i = 0, versions_1 = versions; _i < versions_1.length; _i++) {
                var existingVersion = versions_1[_i];
                if (existingVersion.equals(version)) {
                    return; 
                }
            }
            this._manifestVersions.set(manifest.id, versions.concat(version));
        }
    };
    ManifestStore.prototype._getExistingIndex = function (id, versionString) {
        if (!versionString) {
            return this._getUniqueManifestStoreIndex(id);
        }
        if (this._manifestVersions.has(id)) {
            var versions = this._manifestVersions.get(id);
            var version_1 = __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__["Version"].parse(versionString);
            var validVersions = versions.filter(function (currentVersion) { return currentVersion.satisfies(version_1); });
            if (!validVersions || validVersions.length < 1) {
                return undefined;
            }
            else if (validVersions.length === 1) {
                return this._createIndex(id, validVersions[0]);
            }
            else {
                var debugIndex = this._findDebugIndex(id, validVersions);
                if (debugIndex) {
                    return debugIndex;
                }
                else {
                    var error = new Error(__WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__["Text"].format(__WEBPACK_IMPORTED_MODULE_5__SPLoader_resx__["a" /* default */].tooManyCompatibleVersionsError, validVersions.length, validVersions.join(', '), id, versionString));
                    __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_diagnostics__["_TraceLogger"].logError(__WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["g" /* manifestStoreLogSource */], error);
                    var returnVersion = validVersions.sort(function (version1, version2) {
                        return -1 * __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__["Version"].compare(version1, version2);
                    })[0];
                    return this._createIndex(id, returnVersion);
                }
            }
        }
        return undefined;
    };
    ManifestStore.prototype._getUniqueManifestStoreIndex = function (id) {
        var versions = this._manifestVersions.get(id);
        if (!versions || versions.length < 1) {
            return undefined;
        }
        else if (versions.length === 1) {
            return this._createIndex(id, versions[0]);
        }
        else {
            var debugIndex = this._findDebugIndex(id, versions);
            if (debugIndex) {
                return debugIndex;
            }
            else {
                var error = new Error(__WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__["Text"].format(__WEBPACK_IMPORTED_MODULE_5__SPLoader_resx__["a" /* default */].tooManyManifestsError, versions.length, versions.join(', '), id));
                __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_diagnostics__["_TraceLogger"].logError(__WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["g" /* manifestStoreLogSource */], error);
                return undefined;
            }
        }
    };
    ManifestStore.prototype._createIndexFromManifest = function (manifest) {
        return this._createIndex(manifest.id, __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__["Version"].parse(manifest.version));
    };
    ManifestStore.prototype._createIndex = function (id, version) {
        return Object(__WEBPACK_IMPORTED_MODULE_4__utilities_normalizeComponentId__["a" /* default */])(id, version.toString());
    };
    ManifestStore.prototype._findDebugIndex = function (id, versions) {
        var _this = this;
        return versions.reduce(function (previous, validVersion) {
            var index = _this._createIndex(id, validVersion);
            var manifestStoreEntry = _this._manifests.get(index);
            if (manifestStoreEntry && manifestStoreEntry.debugManifest) {
                return index;
            }
            else {
                return previous;
            }
        }, undefined);
    };
    return ManifestStore;
}());
/* harmony default export */ __webpack_exports__["a"] = (ManifestStore);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var key = '_nQNACBeQ34aV6bVwtFBayA';
var allStrings = ( false) ?
    require("./resx-strings/en-us.json") :
    __webpack_require__(12);
var strings = allStrings[key];
/* harmony default export */ __webpack_exports__["a"] = (strings);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return loadScriptQosScenarioName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loadComponentQosScenarioName; });
/* unused harmony export loadComponentImplQosScenarioName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loadPathDependencyQosScenarioName; });
/* unused harmony export emptyComponentErrorTagName */
/* unused harmony export configureSystemJsErrorTagName */
/* unused harmony export loadComponentDependenciesErrorTagName */
/* unused harmony export loadPathDependenciesErrorTagName */
/* unused harmony export spStarterLogSource */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return startApplicationLogSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loadComponentLogSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return loadScriptLogSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return resolveAddressLogSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return componentStoreLogSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return manifestStoreLogSource; });
var loadScriptQosScenarioName = 'SPComponentLoader.loadScript';
var loadComponentQosScenarioName = 'SPComponentLoader.loadComponent';
var loadComponentImplQosScenarioName = 'SPComponentLoader._loadComponentImpl';
var loadPathDependencyQosScenarioName = 'SPComponentLoader.loadPathDependency';
var emptyComponentErrorTagName = 'EmptyComponent';
var configureSystemJsErrorTagName = 'ConfigureSystemJs';
var loadComponentDependenciesErrorTagName = 'LoadComponentDependencies';
var loadPathDependenciesErrorTagName = 'LoadPathDependencies';
var spStarterLogSource = { id: 'SPStarter.start' };
var startApplicationLogSource = { id: 'SPComponentLoader.startApplication' };
var loadComponentLogSource = { id: 'SPComponentLoader.loadComponent' };
var loadScriptLogSource = { id: 'SPComponentLoader.loadScript' };
var resolveAddressLogSource = { id: 'resolveAddress' };
var componentStoreLogSource = { id: 'ComponentStore' };
var manifestStoreLogSource = { id: 'ManifestStore' };


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_diagnostics__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_diagnostics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__microsoft_sp_diagnostics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities_normalizeComponentId__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SPLoader_resx__ = __webpack_require__(3);






var ComponentStore = (function () {
    function ComponentStore() {
        this._componentMap = new Map(); 
        this._componentReferenceMap = new Map(); 
    }
    Object.defineProperty(ComponentStore, "instance", {
        get: function () {
            if (!ComponentStore._instance) {
                ComponentStore._instance = new ComponentStore();
            }
            return ComponentStore._instance;
        },
        enumerable: true,
        configurable: true
    });
    ComponentStore.prototype.tryGetComponent = function (id, version) {
        __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["Validate"].isNonemptyString(id, 'id');
        __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["Validate"].isNonemptyString(version, 'version');
        return this._componentMap.get(this._getKey(id, version));
    };
    ComponentStore.prototype.tryGetComponentReference = function (id, version) {
        __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["Validate"].isNonemptyString(id, 'id');
        __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["Validate"].isNonemptyString(version, 'version');
        return this._componentReferenceMap.get(this._getKey(id, version));
    };
    ComponentStore.prototype.getAllComponentReferences = function () {
        return this._componentReferenceMap;
    };
    ComponentStore.prototype.tryGetComponentById = function (id, shouldLog) {
        if (shouldLog === void 0) { shouldLog = true; }
        try {
            return this._getComponentById(id, shouldLog);
        }
        catch (e) {
            return undefined;
        }
    };
    ComponentStore.prototype.getComponentById = function (id) {
        return this._getComponentById(id, true);
    };
    ComponentStore.prototype.storeComponent = function (id, version, modulePromise) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["Validate"].isNonemptyString(id, 'id');
        __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["Validate"].isNonemptyString(version, 'version');
        __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["Validate"].isNotNullOrUndefined(modulePromise, 'modulePromise');
        var key = this._getKey(id, version);
        if (!this._componentMap.has(key)) {
            modulePromise.then(function (mod) {
                if (_this._componentMap.has(key)) {
                    _this._componentReferenceMap.set(key, mod);
                }
            });
            this._componentMap.set(key, modulePromise);
        }
    };
    ComponentStore.prototype.storeLoadedComponent = function (id, version, module) {
        __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["Validate"].isNonemptyString(id, 'id');
        __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["Validate"].isNonemptyString(version, 'version');
        __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["Validate"].isNotNullOrUndefined(module, 'module');
        var key = this._getKey(id, version);
        if (!this._componentMap.has(key)) {
            this._componentMap.set(key, Promise.resolve(module));
            this._componentReferenceMap.set(key, module);
        }
    };
    ComponentStore.prototype.deleteComponent = function (id, version) {
        var key = this._getKey(id, version);
        if (this._componentMap.has(key)) {
            __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_diagnostics__["_TraceLogger"].logVerbose(__WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["a" /* componentStoreLogSource */], __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["Text"].format(__WEBPACK_IMPORTED_MODULE_4__SPLoader_resx__["a" /* default */].deleteComponentLog, id, version));
            this._componentMap.delete(key);
        }
        if (this._componentReferenceMap.has(key)) {
            this._componentReferenceMap.delete(key);
        }
    };
    ComponentStore.prototype._getComponentById = function (id, shouldLog) {
        __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["Validate"].isNonemptyString(id, 'id');
        var returnValue = undefined;
        this._componentMap.forEach(function (value, index) {
            if (index.indexOf(id) === 0) {
                if (!returnValue) {
                    returnValue = value;
                }
                else {
                    var error = new Error(__WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["Text"].format(__WEBPACK_IMPORTED_MODULE_4__SPLoader_resx__["a" /* default */].tooManyComponentsError, id));
                    if (shouldLog) {
                        __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_diagnostics__["_TraceLogger"].logError(__WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["a" /* componentStoreLogSource */], error);
                    }
                    throw error;
                }
            }
        });
        if (!returnValue) {
            var error = new Error(__WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["Text"].format(__WEBPACK_IMPORTED_MODULE_4__SPLoader_resx__["a" /* default */].noComponentFoundError, id));
            if (shouldLog) {
                __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_diagnostics__["_TraceLogger"].logError(__WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["a" /* componentStoreLogSource */], error);
            }
            throw error;
        }
        return returnValue;
    };
    ComponentStore.prototype._getKey = function (id, version) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__utilities_normalizeComponentId__["a" /* default */])(id, version);
    };
    return ComponentStore;
}());
/* harmony default export */ __webpack_exports__["a"] = (ComponentStore);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return reactComponentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return reactDomComponentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return spApplicationBaseComponentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return spTelemetryComponentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return listViewHostComponentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return spLoadThemedStylesComponentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classicPagesAppComponentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return spHomeComponentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return react15Version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return react16Version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return spApplicationBaseName; });
var reactComponentId = '0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d';
var reactDomComponentId = 'aa0a46ec-1505-43cd-a44a-93f3a5aa460a';
var spApplicationBaseComponentId = '4df9bb86-ab0a-4aab-ab5f-48bf167048fb';
var spTelemetryComponentId = '8217e442-8ed3-41fd-957d-b112e841286a';
var listViewHostComponentId = 'b1ab4aaa-f779-405c-8683-d3a750b5d18d';
var spLoadThemedStylesComponentId = '229b8d08-79f3-438b-8c21-4613fc877abd';
var classicPagesAppComponentId = 'eb4b666b-5c29-4dad-9a99-23613f21a2b7';
var spHomeComponentId = '1f019ae1-2de1-4f44-b723-00a6ec1d7445';
var react15Version = '15.6.2';
var react16Version = '16.3.2';
var spApplicationBaseName = '@microsoft/sp-application-base';


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_diagnostics__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_diagnostics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__microsoft_sp_diagnostics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SPLoaderError__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SPLoader_resx__ = __webpack_require__(3);




var loadComponentImplEventName = 'loadComponentImpl';
var ErrorBuilder = (function () {
    function ErrorBuilder() {
    }
    ErrorBuilder.buildLoadComponentError = function (manifest, error) {
        return this.buildErrorWithVerboseLog(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["a" /* SPLoaderErrorCode */].loadComponentError, error, false, __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["b" /* loadComponentLogSource */], loadComponentImplEventName, manifest.id, manifest.alias, error.message);
    };
    ErrorBuilder.buildLoadComponentReturnsEmptyError = function (manifest) {
        return this.buildErrorWithVerboseLog(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["a" /* SPLoaderErrorCode */].loadComponentReturnsEmptyError, undefined, false, __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["b" /* loadComponentLogSource */], loadComponentImplEventName, manifest.id, manifest.alias);
    };
    ErrorBuilder.buildLoadComponentReturnsDefaultEmptyError = function (manifest) {
        return this.buildErrorWithVerboseLog(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["a" /* SPLoaderErrorCode */].loadComponentReturnsDefaultEmptyError, undefined, false, __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["b" /* loadComponentLogSource */], loadComponentImplEventName, manifest.id, manifest.alias);
    };
    ErrorBuilder.buildLoadComponentDependencyError = function (manifest, error) {
        return this.buildErrorWithVerboseLog(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["a" /* SPLoaderErrorCode */].loadComponentDependencyError, error, false, __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["b" /* loadComponentLogSource */], loadComponentImplEventName, manifest.id, manifest.alias, error.message);
    };
    ErrorBuilder.buildManifestNotFoundError = function (moduleConfiguration) {
        return this.buildErrorWithVerboseLog(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["a" /* SPLoaderErrorCode */].manifestNotFoundError, undefined, false, __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["b" /* loadComponentLogSource */], undefined, moduleConfiguration.id, moduleConfiguration.version);
    };
    ErrorBuilder.buildLoadPathDependencyBlockedError = function (manifest, name) {
        return this.buildErrorWithVerboseLog(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["a" /* SPLoaderErrorCode */].loadPathDependencyBlockedByAnotherDependencyError, undefined, false, __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["b" /* loadComponentLogSource */], undefined, name, manifest.id, manifest.alias);
    };
    ErrorBuilder.buildModuleHasUndeclaredDependencyError = function (manifest, dependencyName) {
        return this.buildErrorWithErrorLog(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["a" /* SPLoaderErrorCode */].moduleHasUndeclaredDependencyError, undefined, true, 
        __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["b" /* loadComponentLogSource */], undefined, manifest.id, manifest.alias, dependencyName);
    };
    ErrorBuilder.buildLoadEntryPointError = function (manifest, error) {
        return this.buildErrorWithVerboseLog(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["a" /* SPLoaderErrorCode */].loadEntryPointError, error, false, __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["b" /* loadComponentLogSource */], undefined, manifest.id, manifest.alias, error.message);
    };
    ErrorBuilder.buildLoadPathDependencyError = function (manifest, dependencyName, error) {
        return this.buildErrorWithVerboseLog(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["a" /* SPLoaderErrorCode */].loadPathDependencyError, error, false, __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["b" /* loadComponentLogSource */], undefined, dependencyName, manifest.id, manifest.alias, error.message);
    };
    ErrorBuilder.buildMissingPathDependencyError = function (manifest, dependencyName) {
        return this.buildErrorWithVerboseLog(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["a" /* SPLoaderErrorCode */].missingPathDependencyError, undefined, true, __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["b" /* loadComponentLogSource */], undefined, dependencyName, manifest.id, manifest.alias, Object.keys(manifest.loaderConfig.scriptResources).join(__WEBPACK_IMPORTED_MODULE_3__SPLoader_resx__["a" /* default */].listSeparator));
    };
    ErrorBuilder.buildLoadComponentDependencyFailoverPathError = function (manifest, dependencyName, failoverPath, error) {
        return this.buildErrorWithVerboseLog(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["a" /* SPLoaderErrorCode */].loadComponentDependencyFailoverPathError, error, false, __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["b" /* loadComponentLogSource */], undefined, dependencyName, failoverPath, manifest.id, manifest.alias, error.message);
    };
    ErrorBuilder.buildLoadScriptWithStringError = function () {
        return this.buildErrorWithErrorLog(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["a" /* SPLoaderErrorCode */].loadScriptWithStringError, undefined, true, 
        __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["e" /* loadScriptLogSource */], undefined);
    };
    ErrorBuilder.buildUrlStatusLocalhostFileNotFoundError = function (manifest, resourceName, url) {
        return this.buildErrorWithErrorLog(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["a" /* SPLoaderErrorCode */].urlStatusLocalhostFileNotFoundError, undefined, true, 
        __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["e" /* loadScriptLogSource */], undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusFileNotFoundError = function (manifest, resourceName, url) {
        return this.buildErrorWithErrorLog(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["a" /* SPLoaderErrorCode */].urlStatusFileNotFoundError, undefined, true, 
        __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["e" /* loadScriptLogSource */], undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusForbiddenError = function (manifest, resourceName, url) {
        return this.buildErrorWithErrorLog(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["a" /* SPLoaderErrorCode */].urlStatusForbiddenError, undefined, true, 
        __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["e" /* loadScriptLogSource */], undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusClientErrorError = function (manifest, resourceName, url) {
        return this.buildErrorWithErrorLog(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["a" /* SPLoaderErrorCode */].urlStatusClientErrorError, undefined, false, 
        __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["e" /* loadScriptLogSource */], undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusServerErrorError = function (manifest, resourceName, url) {
        return this.buildErrorWithErrorLog(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["a" /* SPLoaderErrorCode */].urlStatusServerErrorError, undefined, false, 
        __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["e" /* loadScriptLogSource */], undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusLocalhostNetworkErrorError = function (manifest, resourceName, url) {
        return this.buildErrorWithErrorLog(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["a" /* SPLoaderErrorCode */].urlStatusLocalhostNetworkErrorError, undefined, true, 
        __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["e" /* loadScriptLogSource */], undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusDocLibNetworkErrorError = function (manifest, resourceName, url) {
        return this.buildErrorWithErrorLog(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["a" /* SPLoaderErrorCode */].urlStatusDocLibNetworkErrorError, undefined, true, 
        __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["e" /* loadScriptLogSource */], undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusHttpsNetworkErrorError = function (manifest, resourceName, url) {
        return this.buildErrorWithErrorLog(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["a" /* SPLoaderErrorCode */].urlStatusHttpsNetworkErrorError, undefined, false, 
        __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["e" /* loadScriptLogSource */], undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusNetworkErrorError = function (manifest, resourceName, url) {
        return this.buildErrorWithErrorLog(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["a" /* SPLoaderErrorCode */].urlStatusNetworkErrorError, undefined, false, 
        __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["e" /* loadScriptLogSource */], undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildUrlStatusUndefinedError = function (manifest, resourceName, url) {
        return this.buildErrorWithErrorLog(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["a" /* SPLoaderErrorCode */].urlStatusUndefinedError, undefined, false, 
        __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["e" /* loadScriptLogSource */], undefined, manifest.id, manifest.alias, resourceName, url);
    };
    ErrorBuilder.buildScriptFailedToCreateGlobalError = function (globalName, scriptUrl) {
        return this.buildErrorWithErrorLog(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["a" /* SPLoaderErrorCode */].failedToCreateGlobalVariable, undefined, false, __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["e" /* loadScriptLogSource */], undefined, globalName, scriptUrl);
    };
    ErrorBuilder.buildModuleHasFailedDependencyError = function (resource, dependency) {
        return this.buildErrorWithErrorLog(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["a" /* SPLoaderErrorCode */].dependencyLoadError, undefined, true, 
        __WEBPACK_IMPORTED_MODULE_2__utilities_telemetryConstants__["e" /* loadScriptLogSource */], undefined, resource, dependency);
    };
    ErrorBuilder.buildErrorWithVerboseLog = function (errorCode, innerError, isExpected, source, eventName) {
        var params = []; 
        for (var _i = 5 
        ; _i < arguments.length 
        ; _i++ 
        ) {
            params[_i - 5] = arguments[_i]; 
        }
        var error = new (__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["b" /* default */].bind.apply(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["b" /* default */], [void 0, errorCode, innerError, isExpected].concat(params)))();
        __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_diagnostics__["_TraceLogger"].logVerbose(source, error.message, eventName);
        return error;
    };
    ErrorBuilder.buildErrorWithErrorLog = function (errorCode, innerError, isExpected, source, eventName) {
        var params = []; 
        for (var _i = 5 
        ; _i < arguments.length 
        ; _i++ 
        ) {
            params[_i - 5] = arguments[_i]; 
        }
        var error = new (__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["b" /* default */].bind.apply(__WEBPACK_IMPORTED_MODULE_1__SPLoaderError__["b" /* default */], [void 0, errorCode, innerError, isExpected].concat(params)))();
        __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_diagnostics__["_TraceLogger"].logError(source, error, eventName);
        return error;
    };
    return ErrorBuilder;
}());
/* harmony default export */ __webpack_exports__["a"] = (ErrorBuilder);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = resolveAddress;
/* harmony export (immutable) */ __webpack_exports__["b"] = resolvePath;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_diagnostics__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_diagnostics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__microsoft_sp_diagnostics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_LocaleStore__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__telemetryConstants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SPLoader_resx__ = __webpack_require__(3);





function resolveAddress(manifest, resourceName) {
    __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["Validate"].isNotNullOrUndefined(manifest, 'manifest');
    __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["Validate"].isNonemptyString(resourceName, 'resourceName');
    if (!manifest.loaderConfig.scriptResources.hasOwnProperty(resourceName)) {
        var error = new Error(__WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["Text"].format(__WEBPACK_IMPORTED_MODULE_4__SPLoader_resx__["a" /* default */].resourceNotFoundError, resourceName, manifest.id, manifest.alias));
        __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_diagnostics__["_TraceLogger"].logError(__WEBPACK_IMPORTED_MODULE_3__telemetryConstants__["h" /* resolveAddressLogSource */], error);
        throw error;
    }
    var moduleConfiguration = manifest.loaderConfig.scriptResources[resourceName];
    var address = resolveModuleConfiguration(resourceName, moduleConfiguration);
    if (!address.match(/^https?\:\/\//i)) {
        var moduleBaseUrl = manifest.loaderConfig.internalModuleBaseUrls[0].replace(/\/+$/, '');
        address = moduleBaseUrl + "/" + address;
    }
    return address;
}
function resolveModuleConfiguration(moduleName, moduleConfiguration) {
    if (moduleConfiguration) {
        switch (moduleConfiguration.type) {
            case 'component':
                var failoverPath = moduleConfiguration.failoverPath;
                if (!failoverPath) {
                    throw new Error(__WEBPACK_IMPORTED_MODULE_4__SPLoader_resx__["a" /* default */].noFailoverPathError);
                }
                return resolvePath(failoverPath);
            case 'path':
                return resolvePath(moduleConfiguration.path);
            case 'localizedPath':
                return resolvePath(resolveLocalizedModuleConfiguration(moduleConfiguration));
            case null: 
            case undefined:
            default:
                return moduleName;
        }
    }
    else {
        return moduleName;
    }
}
function resolvePath(path) {
    if (typeof path === 'string') {
        return path;
    }
    else {
        if (path.debug) {
            return path.debug;
        }
        else {
            return path.default;
        }
    }
}
function resolveLocalizedModuleConfiguration(moduleConfiguration) {
    var currentLocale = __WEBPACK_IMPORTED_MODULE_2__stores_LocaleStore__["a" /* default */].getLocale();
    if (moduleConfiguration.paths) {
        if (currentLocale) {
            for (var locale in moduleConfiguration.paths) {
                if (locale && locale.toUpperCase() === currentLocale.toUpperCase() && moduleConfiguration.paths[locale]) {
                    return moduleConfiguration.paths[locale];
                }
            }
        }
    }
    return moduleConfiguration.defaultPath;
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = setIsSpHome;
/* harmony export (immutable) */ __webpack_exports__["a"] = fixupReactDependency;
/* harmony export (immutable) */ __webpack_exports__["c"] = manifestHasWrongReactDependency;
/* harmony export (immutable) */ __webpack_exports__["b"] = getVersionIfNecessary;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__componentConstants__ = __webpack_require__(6);


var REACT_NAME = 'react';
var isSpHome = false;
function setIsSpHome(value) {
    isSpHome = value;
}
function fixupReactDependency(manifest, moduleConfiguration) {
    if (isSpHome) {
        return; 
    }
    if (manifest.isInternal &&
        (manifest.id !== __WEBPACK_IMPORTED_MODULE_1__componentConstants__["e" /* reactComponentId */] &&
            manifest.id !== __WEBPACK_IMPORTED_MODULE_1__componentConstants__["f" /* reactDomComponentId */]) &&
        manifest.id !== '39c4c1c2-63fa-41be-8cc2-f6c0b49b253d' &&
        (moduleConfiguration.id === __WEBPACK_IMPORTED_MODULE_1__componentConstants__["e" /* reactComponentId */]
            || moduleConfiguration.id === __WEBPACK_IMPORTED_MODULE_1__componentConstants__["f" /* reactDomComponentId */])) {
        if (__WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["_SPFlight"].isEnabled(1187 )) {
            moduleConfiguration.version = __WEBPACK_IMPORTED_MODULE_1__componentConstants__["d" /* react16Version */];
        }
        else {
            moduleConfiguration.version = __WEBPACK_IMPORTED_MODULE_1__componentConstants__["c" /* react15Version */];
        }
    }
}
function manifestHasWrongReactDependency(manifest) {
    if (isSpHome) {
        return false; 
    }
    if (manifest.id === __WEBPACK_IMPORTED_MODULE_1__componentConstants__["a" /* classicPagesAppComponentId */] && !__WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["_SPFlight"].isEnabled(1187 )) {
        return true;
    }
    var scriptResources = manifest.loaderConfig.scriptResources;
    if (!scriptResources.hasOwnProperty(REACT_NAME)) {
        return false;
    }
    if (__WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["_SPFlight"].isEnabled(1187 )) {
        return scriptResources[REACT_NAME].version !== __WEBPACK_IMPORTED_MODULE_1__componentConstants__["d" /* react16Version */];
    }
    else {
        return scriptResources[REACT_NAME].version !== __WEBPACK_IMPORTED_MODULE_1__componentConstants__["c" /* react15Version */];
    }
}
function getVersionIfNecessary(componentId) {
    if (componentId === __WEBPACK_IMPORTED_MODULE_1__componentConstants__["e" /* reactComponentId */] || componentId === __WEBPACK_IMPORTED_MODULE_1__componentConstants__["f" /* reactDomComponentId */]) {
        return __WEBPACK_IMPORTED_MODULE_1__componentConstants__["d" /* react16Version */];
    }
    else {
        return undefined;
    }
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponentId;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__);

function normalizeComponentId(id, version) {
    id = (typeof id === 'string') ? __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["Guid"].parse(id) : id;
    version = (typeof version === 'string') ? __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["Version"].parse(version) : version;
    return id.toString() + "_" + version.toString();
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeName;
/* harmony export (immutable) */ __webpack_exports__["b"] = normalizeFailoverPathName;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_normalizeComponentId__ = __webpack_require__(10);

var _componentBaseUrl = 'https://component-id.invalid/';
function normalizeName(manifest, name) {
    if (name) {
        return _componentBaseUrl + [normalizeManifestId(manifest), name].join('/');
    }
    else {
        return _componentBaseUrl + normalizeManifestId(manifest);
    }
}
function normalizeManifestId(manifest) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__utilities_normalizeComponentId__["a" /* default */])(manifest.id, manifest.version);
}
function normalizeFailoverPathName(name) {
    return _componentBaseUrl + name;
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_lodash_subset__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_lodash_subset___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__microsoft_sp_lodash_subset__);

var SPComponentLoaderProxy = (function () {
    function SPComponentLoaderProxy() {
    }
    SPComponentLoaderProxy._initialize = function (componentLoader) {
        SPComponentLoaderProxy._instance = componentLoader;
    };
    SPComponentLoaderProxy._startApplication = function (preloadedData) {
        return SPComponentLoaderProxy._instance._startApplication(preloadedData);
    };
    SPComponentLoaderProxy.loadCss = function (url) {
        return SPComponentLoaderProxy._instance.loadCss(url);
    };
    SPComponentLoaderProxy.loadScript = function (url, options) {
        return SPComponentLoaderProxy._instance.loadScript(url, options);
    };
    SPComponentLoaderProxy.loadComponent = function (manifest) {
        return SPComponentLoaderProxy._instance.loadComponent(manifest);
    };
    SPComponentLoaderProxy.loadComponentById = function (id, version) {
        return SPComponentLoaderProxy._instance.loadComponentById(id, version);
    };
    SPComponentLoaderProxy.registerManifests = function (manifests) {
        return SPComponentLoaderProxy._instance.registerManifests(manifests);
    };
    SPComponentLoaderProxy._getManifestReferences = function () {
        return SPComponentLoaderProxy._instance._manifestReferences;
    };
    SPComponentLoaderProxy.getManifests = function () {
        var retVal = [];
        SPComponentLoaderProxy._instance._manifestReferences.forEach(function (manifest) {
            retVal.push(Object(__WEBPACK_IMPORTED_MODULE_0__microsoft_sp_lodash_subset__["cloneDeep"])(manifest));
        });
        return retVal;
    };
    SPComponentLoaderProxy.tryGetLoadedComponent = function (manifest) {
        return SPComponentLoaderProxy._instance.tryGetLoadedComponent(manifest);
    };
    SPComponentLoaderProxy.tryGetManifestById = function (id, version) {
        return SPComponentLoaderProxy._instance.tryGetManifestById(id, version);
    };
    SPComponentLoaderProxy._loadDebugManifestsForWorkbench = function (manifestsFileUrl) {
        return SPComponentLoaderProxy._instance._loadDebugManifestsForWorkbench(manifestsFileUrl);
    };
    return SPComponentLoaderProxy;
}());
/* harmony default export */ __webpack_exports__["a"] = (SPComponentLoaderProxy);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SPLoaderErrorCode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SPLoaderErrorCode;
(function (SPLoaderErrorCode) {
    SPLoaderErrorCode[SPLoaderErrorCode["loadComponentMaxRetriesError"] = 0] = "loadComponentMaxRetriesError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadComponentError"] = 1] = "loadComponentError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadComponentReturnsEmptyError"] = 2] = "loadComponentReturnsEmptyError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadComponentReturnsDefaultEmptyError"] = 3] = "loadComponentReturnsDefaultEmptyError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadComponentDependencyError"] = 4] = "loadComponentDependencyError";
    SPLoaderErrorCode[SPLoaderErrorCode["manifestNotFoundError"] = 5] = "manifestNotFoundError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadPathDependencyBlockedByAnotherDependencyError"] = 6] = "loadPathDependencyBlockedByAnotherDependencyError";
    SPLoaderErrorCode[SPLoaderErrorCode["moduleHasUndeclaredDependencyError"] = 7] = "moduleHasUndeclaredDependencyError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadEntryPointError"] = 8] = "loadEntryPointError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadPathDependencyError"] = 9] = "loadPathDependencyError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadComponentDependencyFailoverPathError"] = 10] = "loadComponentDependencyFailoverPathError";
    SPLoaderErrorCode[SPLoaderErrorCode["loadScriptWithStringError"] = 11] = "loadScriptWithStringError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusLocalhostFileNotFoundError"] = 12] = "urlStatusLocalhostFileNotFoundError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusFileNotFoundError"] = 13] = "urlStatusFileNotFoundError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusForbiddenError"] = 14] = "urlStatusForbiddenError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusClientErrorError"] = 15] = "urlStatusClientErrorError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusServerErrorError"] = 16] = "urlStatusServerErrorError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusLocalhostNetworkErrorError"] = 17] = "urlStatusLocalhostNetworkErrorError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusDocLibNetworkErrorError"] = 18] = "urlStatusDocLibNetworkErrorError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusHttpsNetworkErrorError"] = 19] = "urlStatusHttpsNetworkErrorError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusNetworkErrorError"] = 20] = "urlStatusNetworkErrorError";
    SPLoaderErrorCode[SPLoaderErrorCode["urlStatusUndefinedError"] = 21] = "urlStatusUndefinedError";
    SPLoaderErrorCode[SPLoaderErrorCode["failedToCreateGlobalVariable"] = 22] = "failedToCreateGlobalVariable";
    SPLoaderErrorCode[SPLoaderErrorCode["dependencyLoadError"] = 23] = "dependencyLoadError";
    SPLoaderErrorCode[SPLoaderErrorCode["missingPathDependencyError"] = 24] = "missingPathDependencyError";
})(SPLoaderErrorCode = SPLoaderErrorCode || (SPLoaderErrorCode = {}));
var SPLoaderError = (function (_super) {
    __extends(SPLoaderError, _super);
    function SPLoaderError(errorCode, innerError, isExpected) {
        var params = []; 
        for (var _i = 3 
        ; _i < arguments.length 
        ; _i++ 
        ) {
            params[_i - 3] = arguments[_i]; 
        }
        var _this = _super.call(this, SPLoaderErrorCode[errorCode], __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["Text"].format.apply(__WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["Text"], [SPLoaderError._errorCodeToMessageMap.get(errorCode)].concat(params))) || this;
        _this.__proto__ = SPLoaderError.prototype; 
        _this._loaderErrorCode = errorCode;
        _this.innerError = innerError;
        if (_this.innerError instanceof SPLoaderError) {
            _this._isExpected = _this.innerError.isExpected;
        }
        _this._isExpected = _this._isExpected || isExpected || false;
        return _this;
    }
    Object.defineProperty(SPLoaderError.prototype, "id", {
        get: function () {
            return this._loaderErrorCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPLoaderError.prototype, "category", {
        get: function () {
            return 'SPLoaderError';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPLoaderError.prototype, "isExpected", {
        get: function () {
            return this._isExpected;
        },
        enumerable: true,
        configurable: true
    });
    SPLoaderError._errorCodeToMessageMap = new Map([
        [SPLoaderErrorCode.loadComponentMaxRetriesError, __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__["a" /* default */].loadComponentMaxRetriesError],
        [SPLoaderErrorCode.loadComponentError, __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__["a" /* default */].loadComponentError],
        [SPLoaderErrorCode.loadComponentReturnsEmptyError, __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__["a" /* default */].loadComponentReturnsEmptyError],
        [SPLoaderErrorCode.loadComponentReturnsDefaultEmptyError, __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__["a" /* default */].loadComponentReturnsDefaultEmptyError],
        [SPLoaderErrorCode.loadComponentDependencyError, __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__["a" /* default */].loadComponentDependencyError],
        [SPLoaderErrorCode.manifestNotFoundError, __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__["a" /* default */].manifestNotFoundError],
        [SPLoaderErrorCode.loadPathDependencyBlockedByAnotherDependencyError, __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__["a" /* default */].loadPathDependencyBlockedByAnotherDependencyError],
        [SPLoaderErrorCode.moduleHasUndeclaredDependencyError, __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__["a" /* default */].moduleHasUndeclaredDependencyError],
        [SPLoaderErrorCode.loadEntryPointError, __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__["a" /* default */].loadEntryPointError],
        [SPLoaderErrorCode.loadPathDependencyError, __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__["a" /* default */].loadPathDependencyError],
        [SPLoaderErrorCode.loadComponentDependencyFailoverPathError, __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__["a" /* default */].loadComponentDependencyFailoverPathError],
        [SPLoaderErrorCode.loadScriptWithStringError, __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__["a" /* default */].loadScriptWithStringError],
        [SPLoaderErrorCode.urlStatusLocalhostFileNotFoundError, __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__["a" /* default */].urlStatusLocalhostFileNotFoundError],
        [SPLoaderErrorCode.urlStatusFileNotFoundError, __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__["a" /* default */].urlStatusFileNotFoundError],
        [SPLoaderErrorCode.urlStatusForbiddenError, __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__["a" /* default */].urlStatusForbiddenError],
        [SPLoaderErrorCode.urlStatusClientErrorError, __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__["a" /* default */].urlStatusClientErrorError],
        [SPLoaderErrorCode.urlStatusServerErrorError, __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__["a" /* default */].urlStatusServerErrorError],
        [SPLoaderErrorCode.urlStatusLocalhostNetworkErrorError, __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__["a" /* default */].urlStatusLocalhostNetworkErrorError],
        [SPLoaderErrorCode.urlStatusDocLibNetworkErrorError, __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__["a" /* default */].urlStatusNetworkErrorError],
        [SPLoaderErrorCode.urlStatusHttpsNetworkErrorError, __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__["a" /* default */].urlStatusHttpsNetworkErrorError],
        [SPLoaderErrorCode.urlStatusNetworkErrorError, __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__["a" /* default */].urlStatusNetworkErrorError],
        [SPLoaderErrorCode.urlStatusUndefinedError, __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__["a" /* default */].urlStatusUndefinedError],
        [SPLoaderErrorCode.failedToCreateGlobalVariable, __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__["a" /* default */].failedToCreateGlobalVariableError],
        [SPLoaderErrorCode.dependencyLoadError, __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__["a" /* default */].dependencyLoadError],
        [SPLoaderErrorCode.missingPathDependencyError, __WEBPACK_IMPORTED_MODULE_1__SPLoader_resx__["a" /* default */].missingPathDependencyError]
    ] );
    return SPLoaderError;
}(__WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["SPError"]));
/* harmony default export */ __webpack_exports__["b"] = (SPLoaderError);


/***/ }),
/* 16 */
/***/ (function(module, exports) {



/***/ }),
/* 17 */
/***/ (function(module, exports) {



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_diagnostics__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_diagnostics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__microsoft_sp_diagnostics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_ManifestStore__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_AddressStore__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utilities_resolveAddress__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utilities_isCorsEnabled__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__normalizeName__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SPLoader_resx__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utilities_telemetryConstants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utilities_react16RolloutHelper__ = __webpack_require__(9);










var SystemJsLoader = (function () {
    function SystemJsLoader(serviceScope) {
        this._configuredFailoverPaths = [];
        this._initialize();
    }
    SystemJsLoader.prototype.ensure = function (name, module) {
        var system = this._system;
        if (!system.has(name)) {
            system.set(name, system.newModule(module));
        }
    };
    SystemJsLoader.prototype.delete = function (name) {
        var system = this._system;
        if (system.has(name)) {
            system.delete(name);
        }
    };
    SystemJsLoader.prototype.systemConfig = function (config) {
        this._originalSystemConfig.call(this._system, config);
    };
    SystemJsLoader.prototype.systemImport = function (name) {
        try {
            return this._system.import(name);
        }
        catch (error) {
            __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_diagnostics__["_TraceLogger"].logError(__WEBPACK_IMPORTED_MODULE_8__utilities_telemetryConstants__["b" /* loadComponentLogSource */], error, SystemJsLoader.systemImportEventName);
            return Promise.reject(error);
        }
    };
    SystemJsLoader.prototype.systemDelete = function (manifest) {
        this._system.delete(Object(__WEBPACK_IMPORTED_MODULE_6__normalizeName__["a" /* default */])(manifest));
    };
    SystemJsLoader.prototype.configure = function (manifest) {
        var resources = manifest.loaderConfig.scriptResources;
        var depsMap = {};
        var globalDepsMap = {};
        for (var name_1 in resources) {
            if (resources[name_1].type === 'component') {
                var moduleConfiguration = resources[name_1];
                Object(__WEBPACK_IMPORTED_MODULE_9__utilities_react16RolloutHelper__["a" /* fixupReactDependency */])(manifest, moduleConfiguration);
                var resourceManifest = __WEBPACK_IMPORTED_MODULE_2__stores_ManifestStore__["a" /* default */].instance.tryGetManifest(moduleConfiguration.id, moduleConfiguration.version);
                if (resourceManifest) {
                    depsMap[name_1] = Object(__WEBPACK_IMPORTED_MODULE_6__normalizeName__["a" /* default */])(resourceManifest);
                }
                if (moduleConfiguration.failoverPath) {
                    if (this._configuredFailoverPaths.indexOf(name_1) === -1) {
                        var normalizedName = Object(__WEBPACK_IMPORTED_MODULE_6__normalizeName__["b" /* normalizeFailoverPathName */])(name_1);
                        __WEBPACK_IMPORTED_MODULE_3__stores_AddressStore__["a" /* default */].instance.set(normalizedName, Object(__WEBPACK_IMPORTED_MODULE_4__utilities_resolveAddress__["a" /* default */])(manifest, name_1));
                        globalDepsMap[name_1] = normalizedName;
                        this._configuredFailoverPaths.push(name_1);
                    }
                }
            }
            else {
                var normalizedName = void 0;
                if (name_1 === manifest.loaderConfig.entryModuleId) {
                    normalizedName = Object(__WEBPACK_IMPORTED_MODULE_6__normalizeName__["a" /* default */])(manifest);
                }
                else {
                    normalizedName = Object(__WEBPACK_IMPORTED_MODULE_6__normalizeName__["a" /* default */])(manifest, name_1);
                    depsMap[name_1] = normalizedName;
                }
                var address = Object(__WEBPACK_IMPORTED_MODULE_4__utilities_resolveAddress__["a" /* default */])(manifest, name_1);
                __WEBPACK_IMPORTED_MODULE_3__stores_AddressStore__["a" /* default */].instance.set(normalizedName, address);
                var resource = resources[name_1];
                this._configureMetadata(normalizedName, address, resource);
            }
        }
        var packages = {};
        packages[Object(__WEBPACK_IMPORTED_MODULE_6__normalizeName__["a" /* default */])(manifest)] = {
            map: depsMap,
            defaultExtension: false
        };
        var config = {
            packages: packages
        };
        this.systemConfig(config);
        if (Object.keys(globalDepsMap).length) {
            this.systemConfig({
                map: globalDepsMap
            });
        }
    };
    SystemJsLoader.prototype.getDependencies = function (manifest) {
        __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__["Validate"].isNotNullOrUndefined(manifest, 'manifest');
        var defined = this._system.defined; 
        var definedName = this.getDefinedId(manifest);
        var componentDefinition = defined[definedName];
        if (!componentDefinition) {
            return [];
        }
        return componentDefinition.deps;
    };
    SystemJsLoader.prototype._baseSystemConfig = function (pluginName, scriptLoad) {
        var systemConfig = {
            meta: {
                '*': {
                    loader: pluginName,
                    scriptLoad: scriptLoad
                }
            }
        };
        this.systemConfig(systemConfig);
    };
    SystemJsLoader.prototype._initialize = function () {
        this._system = this._loadSystemJs();
        this._setCustomLoader(SystemJsLoader.pluginName, this._system);
        var systemConfig = {
            baseURL: SystemJsLoader._invalidBaseUrl,
            defaultJsExtensions: false
        };
        this.systemConfig(systemConfig);
        this._baseSystemConfig(SystemJsLoader.pluginName, true);
    };
    SystemJsLoader.prototype._loadSystemJs = function () {
        var system = __webpack_require__(33);
        this._originalSystemConfig = system.config;
        system.config = function (config) {
            throw new Error(__WEBPACK_IMPORTED_MODULE_7__SPLoader_resx__["a" /* default */].systemConfigDisabledError);
        };
        return system;
    };
    SystemJsLoader.prototype._setCustomLoader = function (pluginName, system) {
        var loader = {
            locate: function (module) {
                var address = __WEBPACK_IMPORTED_MODULE_3__stores_AddressStore__["a" /* default */].instance.tryGetAddress(module.name);
                if (address) {
                    return address;
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_diagnostics__["_TraceLogger"].logVerbose(__WEBPACK_IMPORTED_MODULE_8__utilities_telemetryConstants__["b" /* loadComponentLogSource */], "Address not found for module name: " + module.name + ". Using it as absolute URL.");
                    return module.name;
                }
            }
        };
        system.set(pluginName, system.newModule(loader));
    };
    SystemJsLoader.prototype.getDefinedId = function (manifest) {
        return SystemJsLoader._invalidBaseUrl + manifest.id + '_' + manifest.version;
    };
    SystemJsLoader.prototype._configureMetadata = function (normalizedName, address, resource) {
        if (__WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__["_SPFlight"].isEnabled(1106 )) {
            var meta = {};
            if (resource.globalName) {
                meta[normalizedName] = {
                    format: 'global',
                    exports: resource.globalName
                };
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_5__utilities_isCorsEnabled__["a" /* default */])(address)) {
                (meta[normalizedName] || (meta[normalizedName] = {})).crossOrigin = 'anonymous';
            }
            var globalConfig = {
                meta: meta
            };
            this.systemConfig(globalConfig);
        }
        else {
            if (resource && resource.globalName) {
                var meta = {};
                meta[normalizedName] = {
                    format: 'global',
                    exports: resource.globalName
                };
                var globalConfig = {
                    meta: meta
                };
                this.systemConfig(globalConfig);
            }
        }
    };
    SystemJsLoader.serviceKey = __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__["ServiceKey"].create('sp-loader:SystemJsLoader', SystemJsLoader);
    SystemJsLoader.pluginName = 'sp-loader-resolver';
    SystemJsLoader.systemImportEventName = 'System.import';
    SystemJsLoader._invalidBaseUrl = 'https://relative-path.invalid/';
    return SystemJsLoader;
}());
/* harmony default export */ __webpack_exports__["a"] = (SystemJsLoader);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var DeveloperToolsLoader_namespaceObject = {};
__webpack_require__.d(DeveloperToolsLoader_namespaceObject, "initialize", function() { return initialize; });
__webpack_require__.d(DeveloperToolsLoader_namespaceObject, "registerDeveloperToolsTab", function() { return registerDeveloperToolsTab; });
__webpack_require__.d(DeveloperToolsLoader_namespaceObject, "toggleDeveloperTools", function() { return toggleDeveloperTools; });

// EXTERNAL MODULE: ./lib/SPComponentLoaderProxy.js
var SPComponentLoaderProxy = __webpack_require__(13);

// CONCATENATED MODULE: ./lib/DeveloperTools/DeveloperToolsProxy.js
var DeveloperToolsProxy = (function () {
    function DeveloperToolsProxy() {
    }
    DeveloperToolsProxy.initialize = function (developerToolsLoader) {
        DeveloperToolsProxy._instance = developerToolsLoader;
        DeveloperToolsProxy._instance.initialize();
    };
    DeveloperToolsProxy.registerDeveloperToolsTab = function (developerToolsTab) {
        DeveloperToolsProxy._instance.registerDeveloperToolsTab(developerToolsTab);
    };
    return DeveloperToolsProxy;
}());
/* harmony default export */ var DeveloperTools_DeveloperToolsProxy = (DeveloperToolsProxy);

// EXTERNAL MODULE: external "@microsoft/sp-core-library"
var sp_core_library_ = __webpack_require__(0);
var sp_core_library__default = /*#__PURE__*/__webpack_require__.n(sp_core_library_);

// EXTERNAL MODULE: external "@ms/sp-telemetry"
var sp_telemetry_ = __webpack_require__(31);
var sp_telemetry__default = /*#__PURE__*/__webpack_require__.n(sp_telemetry_);

// EXTERNAL MODULE: external "@microsoft/sp-diagnostics"
var sp_diagnostics_ = __webpack_require__(1);
var sp_diagnostics__default = /*#__PURE__*/__webpack_require__.n(sp_diagnostics_);

// EXTERNAL MODULE: ./lib/utilities/componentConstants.js
var componentConstants = __webpack_require__(6);

// CONCATENATED MODULE: ./lib/DeveloperTools/DeveloperToolsLoader.js


var F12_KEYCODE = 123;
var MAC_PLATFORM_IDENTIFIER = 'MacIntel';
var _listenerHasBeenRegistered = false;
var _developerTools;
var _developerToolsTabsBacklog = [];
function initialize() {
    if (!_listenerHasBeenRegistered) {
        document.documentElement.addEventListener('keydown', function (event) {
            var isMac = navigator.platform === MAC_PLATFORM_IDENTIFIER;
            if (((event.ctrlKey && !event.metaKey) || (isMac && event.metaKey && !event.ctrlKey)) &&
                !event.altKey &&
                event.keyCode === F12_KEYCODE) {
                toggleDeveloperTools();
                event.preventDefault();
            }
        });
        _listenerHasBeenRegistered = true;
    }
}
function registerDeveloperToolsTab(developerToolsTab) {
    if (_developerTools) {
        _developerTools.registerDeveloperToolsTab(developerToolsTab);
    }
    else {
        _developerToolsTabsBacklog.push(developerToolsTab);
    }
}
function toggleDeveloperTools() {
    if (_developerTools) {
        _developerTools.toggleDeveloperTools();
    }
    else {
        if (true) {
            undefined/*! require.include react */;
            undefined/*! require.include react-dom */;
            var reactPromise = SPComponentLoaderProxy["a" /* default */].loadComponentById(componentConstants["e" /* reactComponentId */]);
            var reactDomPromise = SPComponentLoaderProxy["a" /* default */].loadComponentById(componentConstants["f" /* reactDomComponentId */]);
            Promise.all([reactPromise, reactDomPromise])
                .then(function (results) {
                var react = results[0];
                var reactDom = results[1];
                _injectReactIntoCache(react, reactDom);
                __webpack_require__.e/* require.ensure */(0).then((function (require) {
                    _initializeDeveloperTools(__webpack_require__(185).default);
                }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
            });
        }
        else {
            require.ensure(['./DeveloperTools'], function (require) {
                _initializeDeveloperTools(require('./DeveloperTools').default);
            }, 'developer-tools');
        }
    }
}
function _injectReactIntoCache(react, reactDom) {
    var reactId = /*require.resolve*/(16);
    var reactDomId = /*require.resolve*/(17);
    if (!__webpack_require__.c[reactId]) {
        __webpack_require__.c[reactId] = {
            exports: react
        };
    }
    else {
        __webpack_require__.c[reactId].exports = react;
    }
    if (!__webpack_require__.c[reactDomId]) {
        __webpack_require__.c[reactDomId] = {
            exports: reactDom
        };
    }
    else {
        __webpack_require__.c[reactDomId].exports = reactDom;
    }
}
function _initializeDeveloperTools(developerToolsClass) {
    _developerTools = developerToolsClass.instance;
    _developerTools.initialize();
    _developerToolsTabsBacklog.forEach(function (developerToolsTab) {
        _developerTools.registerDeveloperToolsTab(developerToolsTab);
    });
    _developerTools.showHideDeveloperTools(true);
}

// EXTERNAL MODULE: ./lib/systemjs/SPSystemJsComponentLoader.js + 2 modules
var SPSystemJsComponentLoader = __webpack_require__(32);

// EXTERNAL MODULE: ./lib/BaseComponentLoader.js + 1 modules
var BaseComponentLoader = __webpack_require__(25);

// EXTERNAL MODULE: ./lib/error/ErrorBuilder.js
var ErrorBuilder = __webpack_require__(7);

// EXTERNAL MODULE: ./lib/error/SPLoaderError.js
var SPLoaderError = __webpack_require__(15);

// EXTERNAL MODULE: ./lib/stores/ComponentStore.js
var ComponentStore = __webpack_require__(5);

// CONCATENATED MODULE: ./lib/utilities/LoadComponentExecutor.js
var LoadComponentExecutor = (function () {
    function LoadComponentExecutor(loadFunction) {
        this._isInitialized = false;
        this._pendingLoads = [];
        this._loadFunction = loadFunction;
    }
    LoadComponentExecutor.prototype.setAlternativeExecutor = function (executor) {
        this._alternativeExecutor = executor;
        executor._alternativeExecutor = this;
    };
    LoadComponentExecutor.prototype.loadComponent = function (manifest) {
        var _this = this;
        if (!this._canRunLoad()) {
            return new Promise(function (resolve, reject) {
                _this._pendingLoads.push(function () {
                    _this.loadComponent(manifest).then(resolve, reject);
                });
            });
        }
        this._incrementActiveLoads();
        return this._loadFunction(manifest).then(function (module) {
            _this._decrementActiveLoads();
            return module;
        }, function (error) {
            _this._decrementActiveLoads();
            throw error;
        });
    };
    Object.defineProperty(LoadComponentExecutor.prototype, "isRunning", {
        get: function () {
            return this._activeLoads > 0;
        },
        enumerable: true,
        configurable: true
    });
    LoadComponentExecutor.prototype.processPendingLoads = function () {
        var _loadsToRun = this._pendingLoads;
        this._pendingLoads = [];
        _loadsToRun.forEach(function (load) { return load(); });
    };
    LoadComponentExecutor.prototype._canRunLoad = function () {
        return !this._alternativeExecutor || !this._alternativeExecutor.isRunning;
    };
    LoadComponentExecutor.prototype._incrementActiveLoads = function () {
        this._activeLoads++;
    };
    LoadComponentExecutor.prototype._decrementActiveLoads = function () {
        this._activeLoads--;
        if (this._activeLoads === 0 && this._alternativeExecutor) {
            this._alternativeExecutor.processPendingLoads();
        }
    };
    return LoadComponentExecutor;
}());
/* harmony default export */ var utilities_LoadComponentExecutor = (LoadComponentExecutor);

// EXTERNAL MODULE: ./lib/utilities/telemetryConstants.js
var telemetryConstants = __webpack_require__(4);

// EXTERNAL MODULE: ./lib/stores/ManifestStore.js
var ManifestStore = __webpack_require__(2);

// EXTERNAL MODULE: ./lib/utilities/react16RolloutHelper.js
var react16RolloutHelper = __webpack_require__(9);

// EXTERNAL MODULE: ./lib/utilities/normalizeComponentId.js
var normalizeComponentId = __webpack_require__(10);

// CONCATENATED MODULE: ./lib/requirejs/normalizeName.js

function normalizeName(manifest, name) {
    if (name) {
        return _normalizeManifestId(manifest) + "/" + name;
    }
    else {
        return _normalizeManifestId(manifest);
    }
}
function _normalizeManifestId(manifest) {
    return Object(normalizeComponentId["a" /* default */])(manifest.id, manifest.version);
}
function normalizeFailoverPathName(name) {
    return name;
}

// EXTERNAL MODULE: ./lib/stores/AddressStore.js
var AddressStore = __webpack_require__(22);

// EXTERNAL MODULE: ./lib/utilities/resolveAddress.js
var resolveAddress = __webpack_require__(8);

// EXTERNAL MODULE: ./lib/utilities/isCorsEnabled.js
var isCorsEnabled = __webpack_require__(24);

// CONCATENATED MODULE: ./lib/requirejs/RequireJsLoader.js










var REQUIREJS_LOAD_TIMEOUT_IN_SECONDS = 90;
var RequireJsLoader_RequireJsLoader = (function () {
    function RequireJsLoader(serviceScope) {
        this._configuredFailoverPaths = [];
        this._duplicateModuleNames = new Map();
        this._initialize();
    }
    RequireJsLoader.prototype.ensure = function (name, module) {
        this._requirejs.undef(name);
        this._define(name, [], function () { return module; });
        this._requirejs([name]);
    };
    RequireJsLoader.prototype.requireConfig = function (config) {
        this._requirejs.config(config);
    };
    RequireJsLoader.prototype.requireLoad = function (name, globalName) {
        var _this = this;
        if (this._duplicateModuleNames.has(name)) {
            name = this._duplicateModuleNames.get(name);
        }
        try {
            return this._requirePromise(name).then(function (module) {
                return _this._ensureProperModuleLoaded(name, module, globalName);
            }).catch(function (error) {
                return _this._handleRequireJsError(name, error, globalName);
            });
        }
        catch (error) {
            sp_diagnostics_["_TraceLogger"].logError(telemetryConstants["b" /* loadComponentLogSource */], error, RequireJsLoader._requireEventName);
            return Promise.reject(error);
        }
    };
    RequireJsLoader.prototype.requireDelete = function (manifest) {
        var normalizedName = normalizeName(manifest);
        this._requirejs.undef(normalizedName);
        var scriptTags = document.getElementsByTagName('script');
        for (var i = 0; i < scriptTags.length; i++) {
            var scriptTag = scriptTags[i];
            if (normalizedName === scriptTag.getAttribute('data-requiremodule')) {
                scriptTag.parentNode.removeChild(scriptTag);
                break;
            }
        }
    };
    RequireJsLoader.prototype.getConfiguredUrl = function (name) {
        return this.requireContext.config.paths[name];
    };
    RequireJsLoader.prototype.configure = function (manifest) {
        var resources = manifest.loaderConfig.scriptResources;
        var pathConfig = {};
        var currentMapConfig = {};
        var shimConfig = {};
        for (var name_1 in resources) {
            if (resources.hasOwnProperty(name_1)) {
                this._configureResource(name_1, resources[name_1], manifest, pathConfig, currentMapConfig, shimConfig);
            }
        }
        var normalizedName = normalizeName(manifest);
        var mapConfig = {};
        mapConfig[normalizedName] = currentMapConfig;
        this.requireConfig({
            paths: pathConfig,
            map: mapConfig,
            shim: shimConfig
        });
        if (RequireJsLoader._window.define &&
            RequireJsLoader._window.__spfxPreloadedModules &&
            RequireJsLoader._window.__spfxPreloadedModules.hasOwnProperty(normalizedName)) {
            var args = RequireJsLoader._window.__spfxPreloadedModules[normalizedName];
            RequireJsLoader._window.define(args.id, args.deps, args.f);
            delete RequireJsLoader._window.__spfxPreloadedModules[normalizedName];
        }
    };
    RequireJsLoader.prototype.getMissingDependencies = function (moduleName) {
        var registryEntry = this.requireContext.registry[moduleName];
        var missingDependencies = [];
        if (registryEntry) {
            for (var _i = 0, _a = registryEntry.depMaps; _i < _a.length; _i++) {
                var dependency = _a[_i];
                if (this.requireContext.defined.hasOwnProperty(dependency.id) &&
                    this.requireContext.defined[dependency.id] === undefined) {
                    sp_diagnostics_["_TraceLogger"].logError(telemetryConstants["b" /* loadComponentLogSource */], new Error("Dependency \"" + dependency.id + "\" not found for module \"" + moduleName + "\""), RequireJsLoader._requireEventName);
                    missingDependencies.push(dependency.id);
                }
            }
        }
        return missingDependencies;
    };
    RequireJsLoader.prototype._configureResource = function (name, resource, manifest, pathConfig, mapConfig, shimConfig) {
        if (resource.type === 'component') {
            var componentResource = resource;
            this._configureComponentResource(name, componentResource, manifest, pathConfig, mapConfig, shimConfig);
        }
        else {
            this._configurePathResource(name, resource, manifest, pathConfig, mapConfig, shimConfig);
        }
    };
    RequireJsLoader.prototype._configurePathResource = function (name, resource, manifest, pathConfig, mapConfig, shimConfig) {
        var normalizedName;
        if (name === manifest.loaderConfig.entryModuleId) {
            normalizedName = normalizeName(manifest);
        }
        else {
            normalizedName = normalizeName(manifest, name);
            mapConfig[name] = normalizedName;
        }
        var address = this._resolveAddress(manifest, name);
        var existingNormalizedNameForAddress = AddressStore["a" /* default */].instance.getNormalizedName(address);
        if (existingNormalizedNameForAddress) {
            mapConfig[name] = existingNormalizedNameForAddress;
            this._duplicateModuleNames.set(normalizedName, existingNormalizedNameForAddress);
        }
        else {
            pathConfig[normalizedName] = address;
            AddressStore["a" /* default */].instance.set(normalizedName, address);
        }
        var pathResource = resource;
        if (pathResource) {
            this._fixUpJQueryKnownIssues(name, manifest, pathResource, manifest.loaderConfig.scriptResources);
            this._fixUpYammerKnownIssues(name, manifest, pathResource);
            if (pathResource.globalName) {
                shimConfig[normalizedName] = {
                    exports: pathResource.globalName,
                    deps: pathResource.globalDependencies
                };
            }
        }
    };
    RequireJsLoader.prototype._configureComponentResource = function (name, moduleConfiguration, manifest, pathConfig, mapConfig, shimConfig) {
        Object(react16RolloutHelper["a" /* fixupReactDependency */])(manifest, moduleConfiguration);
        var resourceManifest = ManifestStore["a" /* default */].instance.tryGetManifest(moduleConfiguration.id, moduleConfiguration.version);
        if (resourceManifest) {
            mapConfig[name] = normalizeName(resourceManifest);
        }
        if (moduleConfiguration.failoverPath) {
            if (this._configuredFailoverPaths.indexOf(name) === -1) {
                var normalizedName = normalizeFailoverPathName(name);
                pathConfig[normalizedName] = this._resolveAddress(manifest, name);
                AddressStore["a" /* default */].instance.set(normalizedName, this._resolveAddress(manifest, name));
                this._configuredFailoverPaths.push(name);
            }
        }
    };
    RequireJsLoader.prototype._fixUpJQueryKnownIssues = function (name, manifest, resource, resources) {
        var jqueryString = 'jquery';
        var jQueryString = 'jQuery';
        var jqueryuiString = 'jqueryui';
        this._fixWrongGlobalName(name, jqueryString, jqueryString, jQueryString, manifest, resource);
        if (name.toLowerCase() === jqueryuiString &&
            (!resource.globalDependencies || resource.globalDependencies.length === 0)) {
            sp_diagnostics_["_TraceLogger"].logVerbose(telemetryConstants["b" /* loadComponentLogSource */], "Fixing up JQueryUI path dependency for component \"" + manifest.id + "\" (" + manifest.alias + ")");
            if (resources[jqueryString]) {
                resource.globalDependencies = [jqueryString];
            }
            else if (resources[jQueryString]) {
                resource.globalDependencies = [jQueryString];
            }
            else {
                sp_diagnostics_["_TraceLogger"].logVerbose(telemetryConstants["b" /* loadComponentLogSource */], "Didn't find JQuery path dependency in \"" + manifest.id + "\" (" + manifest.alias + ") to fix JQuery UI");
            }
        }
    };
    RequireJsLoader.prototype._fixUpYammerKnownIssues = function (name, manifest, resource) {
        var yammerString = 'yammer';
        var yamString = 'yam';
        this._fixWrongGlobalName(name, yammerString, yammerString, yamString, manifest, resource);
    };
    RequireJsLoader.prototype._fixWrongGlobalName = function (name, expectedName, knownBadName, expectedGlobalName, manifest, resource) {
        if ((name.toLowerCase() === expectedName && !resource.globalName)
            || resource.globalName === knownBadName) {
            sp_diagnostics_["_TraceLogger"].logVerbose(telemetryConstants["b" /* loadComponentLogSource */], "Fixing up wrong \"" + name + "\" path dependency for component \"" + manifest.id + "\" (" + manifest.alias + ")");
            resource.globalName = expectedGlobalName;
        }
    };
    Object.defineProperty(RequireJsLoader.prototype, "requireContext", {
        get: function () {
            return this._requirejs.s.contexts._; 
        },
        enumerable: true,
        configurable: true
    });
    RequireJsLoader.prototype._requirePromise = function (moduleName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._requirejs([moduleName], function (module) { return resolve(module); }, function (error) { return reject(error); });
        });
    };
    RequireJsLoader.prototype._initialize = function () {
        if (!this._isRequireJsLoaded()) {
            this._loadRequireJs();
        }
        else {
            this._setRequireJsLocalVariables();
        }
        var config = { waitSeconds: REQUIREJS_LOAD_TIMEOUT_IN_SECONDS };
        if (sp_core_library_["_SPFlight"].isEnabled(1106 )) {
            config.onNodeCreated = function (node, c, moduleName, url) {
                if (Object(isCorsEnabled["a" /* default */])(url)) {
                    node.setAttribute('crossorigin', 'anonymous');
                }
            };
        }
        this.requireConfig(config);
    };
    RequireJsLoader.prototype._loadRequireJs = function () {
        var requirejs = __webpack_require__(39);
        RequireJsLoader._window.requirejs = requirejs.requirejs;
        RequireJsLoader._window.require = requirejs.require;
        RequireJsLoader._window.define = requirejs.define;
        var requireJsConfig = {
            baseUrl: RequireJsLoader._invalidBaseUrl
        };
        this._setRequireJsLocalVariables();
        this.requireConfig(requireJsConfig);
    };
    RequireJsLoader.prototype._isRequireJsLoaded = function () {
        return (RequireJsLoader._window.requirejs !== undefined &&
            RequireJsLoader._window.require !== undefined &&
            RequireJsLoader._window.define !== undefined);
    };
    RequireJsLoader.prototype._setRequireJsLocalVariables = function () {
        this._requirejs = RequireJsLoader._window.requirejs;
        this._define = RequireJsLoader._window.define;
    };
    RequireJsLoader.prototype._resolveAddress = function (manifest, resourceName) {
        var address = Object(resolveAddress["a" /* default */])(manifest, resourceName);
        address = address.replace(/.js$/, '');
        return address;
    };
    RequireJsLoader.prototype._ensureProperModuleLoaded = function (moduleName, module, globalName) {
        if (globalName) {
            if (window.hasOwnProperty(globalName)) {
                var returnValue = window[globalName]; 
                this.ensure(moduleName, returnValue);
                return Promise.resolve(returnValue);
            }
            else {
                var error = ErrorBuilder["a" /* default */].buildScriptFailedToCreateGlobalError(globalName, this.getConfiguredUrl(moduleName));
                sp_diagnostics_["_TraceLogger"].logError(telemetryConstants["b" /* loadComponentLogSource */], error);
                sp_core_library_["Log"].warn(telemetryConstants["b" /* loadComponentLogSource */].id, error.message);
                return Promise.resolve({});
            }
        }
        else if (module === undefined && this._isSpfxComponent(moduleName)) {
            return this._requireLoadForDifferentVersion(moduleName);
        }
        else {
            return Promise.resolve(module);
        }
    };
    RequireJsLoader.prototype._handleRequireJsError = function (moduleName, error, globalName) {
        if (globalName && window.hasOwnProperty(globalName)) {
            var returnValue = window[globalName]; 
            this.ensure(moduleName, returnValue);
            return Promise.resolve(returnValue);
        }
        else if (this._isOrphanedVersionLoaded(moduleName)) {
            return this._requireLoadForDifferentVersion(moduleName, error);
        }
        else {
            return Promise.reject(error);
        }
    };
    RequireJsLoader.prototype._isOrphanedVersionLoaded = function (moduleName) {
        var _this = this;
        var componentId = this._extractComponentIdFromModuleName(moduleName);
        var registry = this.requireContext.registry;
        var registryIds = Object.keys(registry);
        return registryIds
            .map(function (id) { return moduleName !== id && id.indexOf(componentId) === 0 && _this._isSpfxComponent(id); })
            .reduce(function (prev, curr) { return prev || curr; }, false);
    };
    RequireJsLoader.prototype._isSpfxComponent = function (moduleName) {
        if (moduleName.split('/').length > 1) {
            return false; 
        }
        var substrings = moduleName.split('_');
        return substrings.length === 2 && sp_core_library_["Guid"].isValid(substrings[0]) && sp_core_library_["Version"].isValid(substrings[1]);
    };
    RequireJsLoader.prototype._extractComponentIdFromModuleName = function (moduleName) {
        return moduleName.split('_')[0];
    };
    RequireJsLoader.prototype._requireLoadForDifferentVersion = function (moduleName, error) {
        var registry = this.requireContext.registry;
        var requirejsInternalConfig = this.requireContext.config;
        var requestedComponentId = this._extractComponentIdFromModuleName(moduleName);
        for (var _i = 0, _a = Object.keys(registry); _i < _a.length; _i++) {
            var loadedModuleName = _a[_i];
            var loadedComponentId = this._extractComponentIdFromModuleName(loadedModuleName);
            if (requestedComponentId === loadedComponentId && moduleName !== loadedModuleName) {
                var map = {}; 
                map[loadedModuleName] = requirejsInternalConfig.map[moduleName];
                var paths = {};
                paths[loadedModuleName] = requirejsInternalConfig.paths[moduleName];
                this._requirejs.config({
                    map: map,
                    paths: paths
                });
                this._requirejs.undef(moduleName);
                this._requirejs.undef(loadedModuleName);
                requirejsInternalConfig.paths[moduleName] = "SPFx: Use " + loadedModuleName + " instead";
                return this._requirePromise(loadedModuleName);
            }
        }
        return Promise.reject(error ? error : new Error("Unknown error when loading module \"" + moduleName + "\""));
    };
    RequireJsLoader.serviceKey = sp_core_library_["ServiceKey"].create('sp-loader:RequireJsLoader', RequireJsLoader);
    RequireJsLoader._requireEventName = 'RequireJS.require';
    RequireJsLoader._invalidBaseUrl = 'https://relative-path.invalid/';
    RequireJsLoader._window = window;
    return RequireJsLoader;
}());
/* harmony default export */ var requirejs_RequireJsLoader = (RequireJsLoader_RequireJsLoader);

// CONCATENATED MODULE: ./lib/requirejs/ComponentOverrider.js






var ComponentOverrider_ComponentOverrider = (function () {
    function ComponentOverrider() {
    }
    ComponentOverrider.overrideComponent = function (componentId, componentModule, serviceScope) {
        sp_core_library_["Validate"].isNonemptyString(componentId, 'componentId');
        sp_core_library_["Validate"].isNotNullOrUndefined(componentModule, 'componentModule');
        var version = Object(react16RolloutHelper["b" /* getVersionIfNecessary */])(componentId);
        var manifest = ManifestStore["a" /* default */].instance.tryGetManifest(componentId, version);
        if (!manifest) {
            return;
        }
        if (Object(react16RolloutHelper["c" /* manifestHasWrongReactDependency */])(manifest)) {
            return;
        }
        var normalizedName = normalizeName(manifest);
        serviceScope.consume(requirejs_RequireJsLoader.serviceKey).ensure(normalizedName, componentModule);
        ComponentStore["a" /* default */].instance.storeComponent(manifest.id, manifest.version, Promise.resolve(componentModule));
    };
    return ComponentOverrider;
}());
/* harmony default export */ var requirejs_ComponentOverrider = (ComponentOverrider_ComponentOverrider);

// EXTERNAL MODULE: external "@microsoft/sp-lodash-subset"
var sp_lodash_subset_ = __webpack_require__(14);
var sp_lodash_subset__default = /*#__PURE__*/__webpack_require__.n(sp_lodash_subset_);

// EXTERNAL MODULE: ./lib/SPLoader.resx.js
var SPLoader_resx = __webpack_require__(3);

// EXTERNAL MODULE: ./lib/utilities/ResourceUrlChecker.js
var ResourceUrlChecker = __webpack_require__(28);

// CONCATENATED MODULE: ./lib/requirejs/loadComponent.js











var FIRST_RETRY = 1;
var MAX_NUMBER_RETRIES = 3;
var LOAD_COMPONENT_IMPL_EVENT_NAME = 'loadComponentImpl';
var _requireJsLoader;
function loadComponent(manifest, requireJsLoader) {
    _requireJsLoader = requireJsLoader;
    if (!manifest) {
        return Promise.reject(new Error(sp_core_library_["Text"].format(SPLoader_resx["a" /* default */].isUndefinedValidateError, 'manifest')));
    }
    var cachedModule = ComponentStore["a" /* default */].instance.tryGetComponent(manifest.id, manifest.version);
    if (cachedModule) {
        return cachedModule;
    }
    var componentPromise = _loadComponentRetryStrategy(manifest, FIRST_RETRY, MAX_NUMBER_RETRIES)
        .catch(function (requireJsError) {
        ComponentStore["a" /* default */].instance.deleteComponent(manifest.id, manifest.version);
        throw requireJsError;
    });
    ComponentStore["a" /* default */].instance.storeComponent(manifest.id, manifest.version, componentPromise);
    return componentPromise;
}
function _loadComponentRetryStrategy(manifest, currentRetryNumber, maxNumberRetries) {
    if (currentRetryNumber === 1) {
        sp_diagnostics_["_TraceLogger"].logVerbose(telemetryConstants["b" /* loadComponentLogSource */], sp_core_library_["Text"].format(SPLoader_resx["a" /* default */].loadComponentLog, manifest.id, manifest.alias, manifest.version));
    }
    else {
        sp_diagnostics_["_TraceLogger"].logVerbose(telemetryConstants["b" /* loadComponentLogSource */], sp_core_library_["Text"].format(SPLoader_resx["a" /* default */].loadComponentRetryLog, manifest.id, manifest.alias, currentRetryNumber, maxNumberRetries));
    }
    return _loadComponentImpl(manifest)
        .then(function (component) {
        sp_diagnostics_["_TraceLogger"].logVerbose(telemetryConstants["b" /* loadComponentLogSource */], sp_core_library_["Text"].format(SPLoader_resx["a" /* default */].loadComponentEndLog, manifest.id, manifest.alias, manifest.version));
        return component;
    })
        .catch(function (error) {
        _requireJsLoader.requireDelete(manifest);
        if (currentRetryNumber < maxNumberRetries) {
            return _loadComponentRetryStrategy(manifest, currentRetryNumber + 1, maxNumberRetries);
        }
        else {
            sp_diagnostics_["_TraceLogger"].logError(telemetryConstants["b" /* loadComponentLogSource */], new Error(sp_core_library_["Text"].format(SPLoader_resx["a" /* default */].loadComponentMaxRetriesError, manifest.id, manifest.alias, maxNumberRetries)));
            throw error;
        }
    });
}
function _loadComponentImpl(manifest) {
    try {
        _requireJsLoader.configure(manifest);
    }
    catch (error) {
        sp_diagnostics_["_TraceLogger"].logVerbose(telemetryConstants["b" /* loadComponentLogSource */], error.message, LOAD_COMPONENT_IMPL_EVENT_NAME);
        return Promise.reject(error);
    }
    var componentDeps = [];
    var pathDeps = [];
    try {
        componentDeps = _loadComponentDependencies(manifest);
    }
    catch (error) {
        sp_diagnostics_["_TraceLogger"].logVerbose(telemetryConstants["b" /* loadComponentLogSource */], error.message, LOAD_COMPONENT_IMPL_EVENT_NAME);
        return Promise.reject(error);
    }
    try {
        pathDeps = _loadPathDependencies(manifest);
    }
    catch (error) {
        sp_diagnostics_["_TraceLogger"].logVerbose(telemetryConstants["b" /* loadComponentLogSource */], error.message, LOAD_COMPONENT_IMPL_EVENT_NAME);
        return Promise.reject(error);
    }
    return Promise.all(componentDeps.concat(pathDeps)).then(function (components) {
        if (!manifest.loaderConfig.entryModuleId) {
            _requireJsLoader.ensure(normalizeName(manifest), {});
            return {};
        }
        return _loadEntryPoint(manifest).then(function (entryPoint) {
            _validateComponentIsNotEmptyOrThrow(entryPoint, manifest);
            return entryPoint;
        });
    }).catch(function (e) {
        throw ErrorBuilder["a" /* default */].buildLoadComponentError(manifest, e);
    });
}
function _validateComponentIsNotEmptyOrThrow(component, manifest) {
    if (Object(sp_lodash_subset_["isEmpty"])(component)) {
        throw ErrorBuilder["a" /* default */].buildLoadComponentReturnsEmptyError(manifest);
    }
    var defaultObject = component.default; 
    if (defaultObject && Object(sp_lodash_subset_["isEmpty"])(defaultObject) && !defaultObject.prototype) {
        throw ErrorBuilder["a" /* default */].buildLoadComponentReturnsDefaultEmptyError(manifest);
    }
}
function _loadComponentDependencies(manifest) {
    var depPromises = [];
    var resources = manifest.loaderConfig.scriptResources;
    var _loop_1 = function (name_1) {
        if (resources[name_1].type === 'component' && !resources[name_1].shouldNotPreload) {
            var moduleConfiguration_1 = resources[name_1];
            var resourceManifest = ManifestStore["a" /* default */].instance.tryGetManifest(moduleConfiguration_1.id, moduleConfiguration_1.version);
            if (resourceManifest) {
                var dep = loadComponent(resourceManifest, _requireJsLoader).catch(function (e) {
                    throw ErrorBuilder["a" /* default */].buildLoadComponentDependencyError(manifest, e);
                });
                depPromises.push(dep);
            }
            else {
                if (moduleConfiguration_1.failoverPath) {
                    var dep = _requireJsLoader.requireLoad(normalizeFailoverPathName(name_1))
                        .catch(function (e) {
                        return _processLoadErrors(manifest, name_1, [ResourceUrlChecker["a" /* default */].checkResourceUrl], function () { return ErrorBuilder["a" /* default */].buildLoadComponentDependencyFailoverPathError(manifest, name_1, Object(resolveAddress["b" /* resolvePath */])(moduleConfiguration_1.failoverPath), e); });
                    });
                    depPromises.push(dep);
                }
                else {
                    var dep = ManifestStore["a" /* default */].instance.requestManifest(moduleConfiguration_1.id, moduleConfiguration_1.version)
                        .then(function (m) { return loadComponent(m, _requireJsLoader); })
                        .catch(function (e) { return Promise.reject(ErrorBuilder["a" /* default */].buildManifestNotFoundError(moduleConfiguration_1)); });
                    depPromises.push(dep);
                }
            }
        }
    };
    for (var name_1 in resources) {
        _loop_1(name_1);
    }
    return depPromises;
}
function _loadPathDependencies(manifest) {
    var resources = manifest.loaderConfig.scriptResources;
    var loadedPathDependencies = new Map();
    for (var name_2 in resources) {
        if ((resources[name_2].type === 'path' || resources[name_2].type === 'localizedPath')
            && !resources[name_2].shouldNotPreload) {
            if (name_2 !== manifest.loaderConfig.entryModuleId) {
                _loadPathDependency(manifest, name_2, loadedPathDependencies);
            }
        }
    }
    var loadedPathDependenciesValues = [];
    loadedPathDependencies.forEach(function (value) {
        loadedPathDependenciesValues.push(value);
    });
    return loadedPathDependenciesValues;
}
function _loadPathDependency(manifest, name, loadedPathDependencies) {
    var loadedPathDependency = loadedPathDependencies.get(name);
    if (loadedPathDependency) {
        return loadedPathDependency;
    }
    var qosMonitor = new sp_diagnostics_["_QosMonitor"](telemetryConstants["d" /* loadPathDependencyQosScenarioName */]);
    var qosExtraData = {
        name: name,
        manifestId: manifest.id,
        version: manifest.version,
        alias: manifest.alias,
        isInternal: manifest.isInternal
    };
    sp_diagnostics_["_TraceLogger"].logVerbose(telemetryConstants["b" /* loadComponentLogSource */], sp_core_library_["Text"].format(SPLoader_resx["a" /* default */].loadPathDependencyLog, name, manifest.id, manifest.alias));
    var resources = manifest.loaderConfig.scriptResources;
    var pathConfig = resources[name];
    if (!pathConfig) {
        return Promise.reject(ErrorBuilder["a" /* default */].buildMissingPathDependencyError(manifest, name));
    }
    var loadPromise;
    if (pathConfig.globalDependencies) {
        var depPromises = pathConfig.globalDependencies.map(function (dep) { return _loadPathDependency(manifest, dep, loadedPathDependencies); });
        loadPromise = Promise.all(depPromises).then(function () {
            return _requireLoadPathDependency(manifest, name);
        }, function () {
            throw ErrorBuilder["a" /* default */].buildLoadPathDependencyBlockedError(manifest, name);
        });
    }
    else {
        loadPromise = _requireLoadPathDependency(manifest, name);
    }
    loadedPathDependencies.set(name, loadPromise);
    return loadPromise.then(function (load) {
        qosMonitor.writeSuccess(qosExtraData);
        return load;
    }, function (error) {
        qosMonitor.writeUnexpectedFailure(undefined, error, qosExtraData);
        throw error;
    });
}
function _requireLoadPathDependency(manifest, name) {
    var globalName = manifest.loaderConfig.scriptResources[name].globalName;
    return _requireJsLoader.requireLoad(normalizeName(manifest, name), globalName)
        .catch(function (e) {
        return _processLoadErrors(manifest, name, [ResourceUrlChecker["a" /* default */].checkResourceUrl,
            checkDependencies], function () { return ErrorBuilder["a" /* default */].buildLoadPathDependencyError(manifest, name, e); });
    });
}
function _loadEntryPoint(manifest) {
    var entryPointModule = _requireJsLoader.requireLoad(normalizeName(manifest)).catch(function (e) {
        return _processLoadErrors(manifest, manifest.loaderConfig.entryModuleId, [ResourceUrlChecker["a" /* default */].checkResourceUrl,
            checkDependencies], function () { return ErrorBuilder["a" /* default */].buildLoadEntryPointError(manifest, e); });
    });
    return entryPointModule.then(function (module) {
        return _getExportFromModule(manifest, module);
    });
}
function _getExportFromModule(manifest, module) {
    var retValue = module;
    if (manifest.loaderConfig.exportName) {
        retValue = module[manifest.loaderConfig.exportName];
    }
    return retValue;
}
function _processLoadErrors(manifest, name, errorProcessors, buildDefaultError) {
    return Promise.all(errorProcessors.map(function (errorProcessor) { return errorProcessor(manifest, name); }))
        .then(
    function () {
        throw buildDefaultError();
    }, function (e) { throw e; });
}
function checkDependencies(manifest, name) {
    var moduleName = normalizeName(manifest, name);
    var missingDependencies = _requireJsLoader.getMissingDependencies(moduleName);
    if (missingDependencies.length > 0) {
        return Promise.reject(ErrorBuilder["a" /* default */].buildModuleHasFailedDependencyError(moduleName, missingDependencies.join(', ')));
    }
    return Promise.resolve();
}

// CONCATENATED MODULE: ./lib/requirejs/SPRequireJsComponentLoader.js
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();











var SPRequireJsComponentLoader_SPRequireJsComponentLoader = (function (_super) {
    __extends(SPRequireJsComponentLoader, _super);
    function SPRequireJsComponentLoader(serviceScope, systemJsFallbackLoader) {
        var _this = _super.call(this, serviceScope) || this;
        _this._requireJsLoader = serviceScope.consume(requirejs_RequireJsLoader.serviceKey);
        _this._systemJsFallbackLoader = systemJsFallbackLoader;
        _this._loadComponentExecutor = new utilities_LoadComponentExecutor(_this._loadComponentWithExecutor.bind(_this));
        _this._loadComponentExecutor.setAlternativeExecutor(systemJsFallbackLoader.executor);
        systemJsFallbackLoader.executor.setAlternativeExecutor(_this._loadComponentExecutor);
        return _this;
    }
    SPRequireJsComponentLoader.prototype.loadScript = function (url, options) {
        try {
            sp_core_library_["Validate"].isNonemptyString(url, 'url');
        }
        catch (error) {
            return Promise.reject(error);
        }
        var qosMonitor = new sp_diagnostics_["_QosMonitor"](telemetryConstants["f" /* loadScriptQosScenarioName */]);
        if (options === undefined) {
            options = {};
        }
        if (typeof options === 'string') {
            var error = ErrorBuilder["a" /* default */].buildLoadScriptWithStringError();
            qosMonitor.writeExpectedFailure('OptionsAsString', error);
            return Promise.reject(error);
        }
        if (options.globalExportsName) {
            this._requireJsLoader.requireConfig({
                shim: (_a = {},
                    _a[url.replace(/\.js$/, '')] = {
                        exports: options.globalExportsName
                    },
                    _a)
            });
        }
        return this._requireJsLoader.requireLoad(url, options.globalExportsName)
            .then(function (module) {
            qosMonitor.writeSuccess();
            return module;
        })
            .catch(function (e) {
            qosMonitor.writeUnexpectedFailure('RequireLoad', e);
            throw e;
        });
        var _a;
    };
    SPRequireJsComponentLoader.prototype.loadComponent = function (manifest) {
        var _this = this;
        var qosMonitor = new sp_diagnostics_["_QosMonitor"](telemetryConstants["c" /* loadComponentQosScenarioName */]);
        var qosExtraData = this._buildQosExtraData(manifest);
        return this._loadComponentExecutor.loadComponent(manifest)
            .then(function (component) {
            qosMonitor.writeSuccess(qosExtraData);
            return component;
        })
            .catch(function (error) {
            return _this._handleLoadComponentError(error, manifest, qosMonitor, qosExtraData);
        });
    };
    SPRequireJsComponentLoader.prototype._overrideComponent = function (componentId, componentModule) {
        requirejs_ComponentOverrider.overrideComponent(componentId, componentModule, this._serviceScope);
    };
    SPRequireJsComponentLoader.prototype._unloadComponent = function (manifest) {
        if (ComponentStore["a" /* default */].instance.tryGetComponent(manifest.id, manifest.version)) {
            ComponentStore["a" /* default */].instance.deleteComponent(manifest.id, manifest.version);
            this._requireJsLoader.requireDelete(manifest);
        }
    };
    SPRequireJsComponentLoader.prototype._loadComponentWithExecutor = function (manifest) {
        var _this = this;
        return loadComponent(manifest, this._requireJsLoader)
            .catch(function (requireJsError) {
            sp_diagnostics_["_TraceLogger"].logVerbose(telemetryConstants["b" /* loadComponentLogSource */], "RequireJS failed to load component \"" + manifest.id + "\". Trying again with SystemJS.");
            ComponentStore["a" /* default */].instance.deleteComponent(manifest.id, manifest.version);
            return _this._systemJsFallbackLoader.loadComponent(manifest).catch(function (systemJsError) {
                throw requireJsError;
            });
        });
    };
    SPRequireJsComponentLoader.prototype._buildQosExtraData = function (manifest) {
        return {
            manifestId: manifest.id,
            version: manifest.version,
            alias: manifest.alias,
            isInternal: manifest.isInternal,
            isDebug: manifest._isDebug,
            loader: 'requirejs'
        };
    };
    SPRequireJsComponentLoader.prototype._handleLoadComponentError = function (error, manifest, qosMonitor, qosExtraData) {
        if (error instanceof SPLoaderError["b" /* default */] && error.isExpected) {
            qosMonitor.writeExpectedFailure(undefined, error, qosExtraData);
        }
        else {
            qosMonitor.writeUnexpectedFailure(undefined, error, qosExtraData);
        }
        ComponentStore["a" /* default */].instance.deleteComponent(manifest.id, manifest.version);
        throw error;
    };
    return SPRequireJsComponentLoader;
}(BaseComponentLoader["a" /* BaseComponentLoader */]));
/* harmony default export */ var requirejs_SPRequireJsComponentLoader = (SPRequireJsComponentLoader_SPRequireJsComponentLoader);

// EXTERNAL MODULE: ./lib/stores/LocaleStore.js
var LocaleStore = __webpack_require__(23);

// CONCATENATED MODULE: ./lib/utilities/BrowserSupport.js


var BrowserSupport_BrowserSupport = (function () {
    function BrowserSupport() {
    }
    BrowserSupport.getBrowserCompatibility = function () {
        var browserInfo = sp_core_library_["_BrowserDetection"].getBrowserInformation();
        if (browserInfo.browser === 4  &&
            browserInfo.browserVersion && browserInfo.browserVersion.major <= 9) {
            return {
                supportLevel: 3 ,
                warning: SPLoader_resx["a" /* default */].ie9OrOlderNotSupportedError
            };
        }
        if (browserInfo.browser === 3  &&
            browserInfo.browserVersion && browserInfo.browserVersion.major <= 43) {
            return {
                supportLevel: 3 ,
                warning: SPLoader_resx["a" /* default */].firefox43OrOlderNotSupportedError
            };
        }
        if (typeof Headers !== 'undefined' &&
            typeof Headers.prototype.forEach === 'undefined') {
            return {
                supportLevel: 3 ,
                warning: undefined
            };
        }
        return {
            supportLevel: 0 ,
            warning: undefined
        };
    };
    return BrowserSupport;
}());
/* harmony default export */ var utilities_BrowserSupport = (BrowserSupport_BrowserSupport);

// CONCATENATED MODULE: ./lib/DeveloperTools/BrowserDeveloperToolsWarning/BrowserDeveloperToolsWarning.resx.js
var BrowserDeveloperToolsWarning_resx_key = '_fwMQe6Xe08yEeCPNxngd+g';
var allStrings = ( false) ?
    require("../../resx-strings/en-us.json") :
    __webpack_require__(12);
var strings = allStrings[BrowserDeveloperToolsWarning_resx_key];
/* harmony default export */ var BrowserDeveloperToolsWarning_resx = (strings);

// CONCATENATED MODULE: ./lib/DeveloperTools/BrowserDeveloperToolsWarning/showBrowserDevToolsWarning.js


var WARNING_URL = 'https://technet.microsoft.com/en-us/library/bb794823.aspx';
function showBrowserDevToolsWarning_showBrowserDevToolsWarning() {
    var browserInfo = sp_core_library_["_BrowserDetection"].getBrowserInformation();
    var warningHeading = BrowserDeveloperToolsWarning_resx.warningHeading;
    var warningLine1 = BrowserDeveloperToolsWarning_resx.warningLine1;
    var warningLine2 = sp_core_library_["Text"].format(BrowserDeveloperToolsWarning_resx.warningLine2, WARNING_URL);
    if (browserInfo.browser === 1  ||
        browserInfo.browser === 3  ||
        browserInfo.browser === 5 ) {
        var stylesCss = __webpack_require__(40);
        var headingCss = (stylesCss.match(/\.heading\s*{([^}]+)}/) || [])[1];
        var otherLinesCss = (stylesCss.match(/\.otherLines\s*{([^}]+)}/) || [])[1];
        console.log("\n%c" + warningHeading + "%c\n" + warningLine1 + "\n\n" + warningLine2 + "\n\n", headingCss, otherLinesCss);
    }
    else {
        console.log("\n" + warningHeading + "\n" + warningLine1 + "\n\n" + warningLine2 + "\n\n");
    }
}

// EXTERNAL MODULE: ./lib/debug/DebugManager.js + 2 modules
var DebugManager = __webpack_require__(26);

// EXTERNAL MODULE: ./lib/systemjs/normalizeName.js
var systemjs_normalizeName = __webpack_require__(11);

// CONCATENATED MODULE: ./lib/requirejs/SystemJsFallbackLoader.js




var SystemJsFallbackLoader_SystemJsFallbackLoader = (function () {
    function SystemJsFallbackLoader(serviceScope) {
        this._isInitialized = false;
        this._serviceScope = serviceScope;
        this._executor = new utilities_LoadComponentExecutor(this._loadComponentImpl.bind(this));
    }
    Object.defineProperty(SystemJsFallbackLoader.prototype, "executor", {
        get: function () {
            return this._executor;
        },
        enumerable: true,
        configurable: true
    });
    SystemJsFallbackLoader.prototype.setRequireJsComponentLoader = function (requireJsComponentLoader) {
        this._requireJsComponentLoader = requireJsComponentLoader;
    };
    SystemJsFallbackLoader.prototype.loadComponent = function (manifest) {
        return this._executor.loadComponent(manifest);
    };
    SystemJsFallbackLoader.prototype._loadComponentImpl = function (manifest) {
        var _this = this;
        return this._ensureInitialized().then(function () {
            ComponentStore["a" /* default */].instance.getAllComponentReferences().forEach(function (value, key) {
                _this._systemJsLoader.ensure(Object(systemjs_normalizeName["b" /* normalizeFailoverPathName */])(key), value);
            });
            ManifestStore["a" /* default */].instance.getRegisteredManifests().forEach(function (m) {
                _this._systemJsLoader.configure(m);
            });
            return _this._systemJsComponentLoader.loadComponent(manifest).then(function (module) {
                _this._restoreGlobals();
                return module;
            }, function (error) {
                _this._restoreGlobals();
                throw error;
            });
        });
    };
    SystemJsFallbackLoader.prototype._ensureInitialized = function () {
        var _this = this;
        if (this._isInitialized) {
            return Promise.resolve();
        }
        this._saveGlobals();
        return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 186)).then(function (module) {
            _this._systemJsComponentLoader = new module.SPSystemJsComponentLoader(_this._serviceScope);
            _this._systemJsLoader = _this._serviceScope.consume(module.SystemJsLoader.serviceKey);
            _this._restoreGlobals();
            _this._isInitialized = true;
        });
    };
    SystemJsFallbackLoader.prototype._saveGlobals = function () {
        this.requirejs = SystemJsFallbackLoader._window.requirejs;
        this.require = SystemJsFallbackLoader._window.require;
        this.define = SystemJsFallbackLoader._window.define;
    };
    SystemJsFallbackLoader.prototype._restoreGlobals = function () {
        SystemJsFallbackLoader._window.requirejs = this.requirejs;
        SystemJsFallbackLoader._window.require = this.require;
        SystemJsFallbackLoader._window.define = this.define;
    };
    SystemJsFallbackLoader._window = window;
    return SystemJsFallbackLoader;
}());
/* harmony default export */ var requirejs_SystemJsFallbackLoader = (SystemJsFallbackLoader_SystemJsFallbackLoader);

// EXTERNAL MODULE: external "@microsoft/sp-dynamic-data"
var sp_dynamic_data_ = __webpack_require__(41);
var sp_dynamic_data__default = /*#__PURE__*/__webpack_require__.n(sp_dynamic_data_);

// EXTERNAL MODULE: external "@microsoft/sp-page-context"
var sp_page_context_ = __webpack_require__(29);
var sp_page_context__default = /*#__PURE__*/__webpack_require__.n(sp_page_context_);

// EXTERNAL MODULE: external "@microsoft/sp-http"
var sp_http_ = __webpack_require__(30);
var sp_http__default = /*#__PURE__*/__webpack_require__.n(sp_http_);

// CONCATENATED MODULE: ./lib/utilities/RootServiceScopeBuilder.js
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};





var RootServiceScopeBuilder_RootServiceScopeBuilder = (function () {
    function RootServiceScopeBuilder() {
    }
    RootServiceScopeBuilder.build = function (preloadedData) {
        var serviceScope = sp_core_library_["ServiceScope"].startNewRoot();
        serviceScope.provide(sp_diagnostics_["_logSourceServiceKey"], RootServiceScopeBuilder._logSource);
        serviceScope.createDefaultAndProvide(sp_page_context_["PageContext"].serviceKey);
        serviceScope.createDefaultAndProvide(sp_http_["HttpClient"].serviceKey);
        serviceScope.createDefaultAndProvide(sp_http_["SPHttpClient"].serviceKey);
        serviceScope.createDefaultAndProvide(sp_dynamic_data_["_DynamicDataManager"].serviceKey);
        var _graphContext = serviceScope.createDefaultAndProvide(sp_http_["_GraphHttpClientContext"].serviceKey);
        var digestCache = serviceScope.createDefaultAndProvide(sp_http_["DigestCache"].serviceKey);
        serviceScope.finish();
        this._initializeGraphHttpClient(_graphContext, preloadedData);
        this._initializeDigestCache(digestCache, preloadedData);
        return serviceScope;
    };
    RootServiceScopeBuilder._initializeGraphHttpClient = function (graphContext, preloadedData) {
        if (true && sp_core_library_["Environment"].type !== sp_core_library_["EnvironmentType"].Local) {
            graphContext.initialize(preloadedData.spPageContextInfo.webServerRelativeUrl, preloadedData.spPageContextInfo.msGraphEndpointUrl);
            try {
                var redirectPartialUri = window.location.origin + '/_forms/';
                var defaultAadConfiguration = {
                    aadInstanceUrl: preloadedData.spPageContextInfo.aadInstanceUrl,
                    aadTenantId: preloadedData.spPageContextInfo.aadTenantId,
                    aadUserId: preloadedData.spPageContextInfo.aadUserId,
                    redirectUri: redirectPartialUri + sp_http_["_AadConstants"].SPFX_SINGLE_SIGN_ON_REPLY_URL,
                    servicePrincipalId: ''
                };
                var preconfiguredAppConfiguration = __assign({}, defaultAadConfiguration, { servicePrincipalId: sp_http_["_AadConstants"].PRE_AUTHORIZED_APP_PRINCIPAL_ID });
                sp_http_["_AadTokenProviders"]._initialize(new sp_http_["AadTokenProvider"](__assign({}, defaultAadConfiguration, { servicePrincipalId: preloadedData.spPageContextInfo.spfx3rdPartyServicePrincipalId })), preconfiguredAppConfiguration);
            }
            catch (e) {
                sp_diagnostics_["_TraceLogger"].logVerbose(this._logSource, 'AadTokenProviders: Failed to initialize');
            }
        }
    };
    RootServiceScopeBuilder._initializeDigestCache = function (digestCache, preloadedData) {
        sp_core_library_["Validate"].isNotNullOrUndefined(preloadedData, 'preloadedData');
        sp_core_library_["Validate"].isNotNullOrUndefined(preloadedData.spPageContextInfo, 'preloadedData.spPageContextInfo');
        sp_diagnostics_["_TraceLogger"].logVerbose(this._logSource, 'ServiceScopeBuilder: Added preloaded FormDigestValue to cache');
        if (preloadedData.spPageContextInfo) {
            var expirationTimestamp = (1000 * preloadedData.spPageContextInfo.formDigestTimeoutSeconds) -
                this.PRELOAD_DIGEST_EXPIRATION_SLOP_MS;
            if (expirationTimestamp < 0) {
                expirationTimestamp = 0;
            }
            digestCache.addDigestToCache(preloadedData.spPageContextInfo.webServerRelativeUrl, preloadedData.spPageContextInfo.formDigestValue, expirationTimestamp);
            digestCache.addDigestToCache(preloadedData.spPageContextInfo.webAbsoluteUrl, preloadedData.spPageContextInfo.formDigestValue, expirationTimestamp);
        }
    };
    RootServiceScopeBuilder._logSource = sp_diagnostics_["_LogSource"].create('RootServiceScope');
    RootServiceScopeBuilder.PRELOAD_DIGEST_EXPIRATION_SLOP_MS = 30000; 
    return RootServiceScopeBuilder;
}());
/* harmony default export */ var utilities_RootServiceScopeBuilder = (RootServiceScopeBuilder_RootServiceScopeBuilder);

// CONCATENATED MODULE: ./lib/stores/ManifestProvider.js




var ManifestProvider_ManifestProvider = (function () {
    function ManifestProvider(serviceScope, webAbsoluteUrl) {
        sp_core_library_["Validate"].isNotNullOrUndefined(serviceScope, 'serviceScope');
        this._logSource = sp_diagnostics_["_LogSource"].create('ManifestProvider');
        this._webAbsoluteUrl = webAbsoluteUrl;
        this._pageContext = serviceScope.consume(sp_page_context_["PageContext"].serviceKey);
        this._httpClient = serviceScope.consume(sp_http_["SPHttpClient"].serviceKey);
    }
    ManifestProvider.prototype.tryGetManifest = function (componentId, version) {
        var _this = this;
        if (!sp_core_library_["_SPKillSwitch"].isActivated(sp_core_library_["Guid"].parse('d961dd52-8860-4231-b655-5640fa363d3f'), '2018/10/09', 'Improve reliability of SP requests')) {
            return this.tryGetManifests([{ id: componentId, version: version }]);
        }
        else {
            var webUrl = (this._pageContext.web && this._pageContext.web.absoluteUrl) || this._webAbsoluteUrl;
            return this._httpClient.post(webUrl + ManifestProvider._restApiUrl, sp_http_["SPHttpClient"].configurations.v1, {
                body: JSON.stringify(this._buildRequest(componentId, version))
            }).then(function (response) {
                if (!response.ok) {
                    throw new Error("GetClientSideComponents failed with HTTP status " + response.status);
                }
                return response.json().then(_this._extractManifests);
            }).catch(function (error) {
                sp_diagnostics_["_TraceLogger"].logError(_this._logSource, error);
                throw error;
            });
        }
    };
    ManifestProvider.prototype.tryGetManifests = function (ids) {
        var _this = this;
        var qosMonitor = new sp_diagnostics_["_QosMonitor"]('ManifestProvider.tryGetManifests');
        var webUrl = (this._pageContext.web && this._pageContext.web.absoluteUrl) || this._webAbsoluteUrl;
        return this._httpClient.post(webUrl + ManifestProvider._restApiUrl, sp_http_["SPHttpClient"].configurations.v1, {
            body: JSON.stringify({ components: ids })
        }).then(function (response) {
            if (!response.ok) {
                var error = new Error("GetClientSideComponents failed with HTTP status " + response.status);
                qosMonitor.writeUnexpectedFailure('UnsuccessfulResponse', error, { statusCode: response.status, correlationId: response.correlationId });
                throw error;
            }
            qosMonitor.writeSuccess({ correlationId: response.correlationId });
            return response.json().then(_this._extractManifests);
        }).catch(function (error) {
            sp_diagnostics_["_TraceLogger"].logError(_this._logSource, error);
            qosMonitor.writeUnexpectedFailure(undefined, error);
            throw error;
        });
    };
    ManifestProvider.prototype._buildRequest = function (componentId, version) {
        return {
            components: [
                {
                    id: componentId,
                    version: version
                }
            ]
        };
    };
    ManifestProvider.prototype._extractManifests = function (response) {
        return response.value
            .filter(function (qr) { return qr.Status === 0 && !!qr.Manifest; }) 
            .map(function (qr) { return JSON.parse(qr.Manifest); }); 
    };
    ManifestProvider._restApiUrl = '/_api/web/GetClientSideComponents';
    return ManifestProvider;
}());
/* harmony default export */ var stores_ManifestProvider = (ManifestProvider_ManifestProvider);

// CONCATENATED MODULE: ./lib/SPStarter.js


















if (false) {
    showBrowserDevToolsWarning();
}
var REQUIREJS_FLIGHT_ID = 125;
var ARIA_DISABLE_TELEMETRY_LOGGING_FLIGHT_ID = 1190;
var DEBUG_FLIGHTS_QUERY_PARAM = 'debugFlights';
var DEBUG_KILLSWITCHES_QUERY_PARAM = 'debugKillSwitches';
var COMPONENT_LOADER_GLOBAL_VARIABLE = '_spComponentLoader';
var startQosScenarioName = 'SPComponentLoader.start';
var SPStarter_SPStarter = (function () {
    function SPStarter() {
    }
    SPStarter._setBundledComponents = function (bundledComponents) {
        if (!SPStarter._bundledComponents) {
            SPStarter._bundledComponents = bundledComponents;
        }
        else {
            throw new Error('Bundled components can be only set once'); 
        }
    };
    SPStarter.start = function (preloadedData, handleFailure, debugData) {
        var _this = this;
        sp_telemetry_["_PerformanceLogger"].devMark('SPStarter.start');
        if (!preloadedData || !preloadedData.spPageContextInfo) {
            var error = new Error(SPLoader_resx["a" /* default */].invalidPreloadedDataError);
            handleFailure({
                error: error,
                message: SPLoader_resx["a" /* default */].loaderUserFriendlyError,
                operationName: 'InvalidPreloadedData'
            });
            return Promise.reject(error);
        }
        var correlationId = preloadedData.spPageContextInfo.CorrelationId;
        var browserCompatibility = SPStarter.getBrowserCompatibility();
        if (browserCompatibility.supportLevel === 3 ) {
            return this.handleError(new Error(browserCompatibility.warning), SPLoader_resx["a" /* default */].browserNotSupportedError, 'BrowserNotSupported', correlationId, preloadedData);
        }
        this._initializeFlightsAndKillswitches(preloadedData);
        if (!sp_core_library_["_SPKillSwitch"].isActivated(sp_core_library_["Guid"].parse('73c82d72-e671-400d-a6bb-6215bd84b649'), '2018/10/11', 'SPHome does not flight React16')) {
            Object(react16RolloutHelper["d" /* setIsSpHome */])(preloadedData.clientSideApplicationId === componentConstants["i" /* spHomeComponentId */]);
        }
        var serviceScope = utilities_RootServiceScopeBuilder.build(preloadedData);
        ManifestStore["a" /* default */].instance._setManifestProvider(new stores_ManifestProvider(serviceScope, preloadedData.spPageContextInfo.webAbsoluteUrl));
        var spLoader = __webpack_require__(19);
        var componentLoader = this._useRequireJs(preloadedData)
            ? new requirejs_SPRequireJsComponentLoader(serviceScope, new requirejs_SystemJsFallbackLoader(serviceScope))
            : new SPSystemJsComponentLoader["a" /* default */](serviceScope);
        var qosMonitor = undefined;
        try {
            sp_core_library_["Log"]._initialize(new sp_telemetry_["_SPTelemetryLogHandler"]());
            SPStarter._initializeEnvironment(preloadedData);
            sp_core_library_["Session"]._initialize({ applicationId: preloadedData.spPageContextInfo.CorrelationId });
            SPStarter._initializeTelemetry(preloadedData);
            sp_telemetry_["_PerformanceLogger"].markSpLoaderStart();
            if (sp_core_library_["_SPKillSwitch"].isActivated(SPStarter.enableDeferredLogging, '11/27/2017', 'enableCircularBufferLogging')) {
                SPStarter._logDataInRealTime();
            }
            else {
                window.setTimeout(function () {
                    SPStarter._logDataInRealTime();
                }, SPStarter._realTimeProcessingWaitTime);
            }
            qosMonitor = new sp_diagnostics_["_QosMonitor"](startQosScenarioName);
            LocaleStore["a" /* default */].setLocale(preloadedData.spPageContextInfo.currentUICultureName);
            componentLoader._initialize(preloadedData, SPStarter._getBundledComponents(), !!(debugData || {}).debugLoader);
            spLoader.SPComponentLoader._initialize(componentLoader);
            window[COMPONENT_LOADER_GLOBAL_VARIABLE] = spLoader.SPComponentLoader;
        }
        catch (error) {
            return Promise.reject(error);
        }
        if (sp_core_library_["_SPFlight"].isEnabled(1086 )) {
            var queryParams = new sp_core_library_["UrlQueryParameterCollection"](window.location.href);
            var debugLayout = queryParams.getValue('debugLayout');
            if (debugLayout && preloadedData.item) {
                preloadedData.item['PageLayoutType'] = debugLayout;
            }
        }
        return DebugManager["a" /* DebugManager */].initialize(componentLoader, debugData).then(function (debugLoadResult) {
            if (debugLoadResult.debugLoader) {
                componentLoader._unloadComponents();
                return debugLoadResult.debugLoader.start(preloadedData, handleFailure, debugLoadResult);
            }
            spLoader.DeveloperTools.initialize(DeveloperToolsLoader_namespaceObject);
            if (preloadedData.clientSideApplicationId) {
                return spLoader.SPComponentLoader._startApplication(preloadedData).then(function (application) {
                    qosMonitor.writeSuccess();
                    return application;
                }).catch(function (error) {
                    if (error.message === 'Out of stack space') {
                        qosMonitor.writeExpectedFailure('ConflictingPolyfill', error);
                    }
                    else {
                        qosMonitor.writeUnexpectedFailure('StartApplication', error);
                    }
                    return _this.handleError(error, SPLoader_resx["a" /* default */].loaderUserFriendlyError, 'StartApplication', correlationId, preloadedData);
                });
            }
            else {
                qosMonitor.writeSuccess();
                return Promise.resolve();
            }
        }).then(function (application) {
            SPStarter._logDataInRealTime();
            return application;
        }).catch(function (error) {
            if (qosMonitor) {
                qosMonitor.writeUnexpectedFailure(undefined, error);
            }
            SPStarter._logDataInRealTime();
            return _this.handleError(error, SPLoader_resx["a" /* default */].loaderUserFriendlyError, sp_telemetry_["_Telemetry"].isInitialized ? 'ClientError' : 'ClientErrorBeforeTelemetry', correlationId, preloadedData);
        });
    };
    SPStarter.getBrowserCompatibility = function () {
        return utilities_BrowserSupport.getBrowserCompatibility();
    };
    SPStarter._logDataInRealTime = function () {
        if (!SPStarter._isTelemetryDisabled() && !SPStarter._isTelemetryLoggingInRealTime) {
            sp_telemetry_["_Telemetry"].startRealTimeProcessing();
            SPStarter._isTelemetryLoggingInRealTime = true;
        }
    };
    SPStarter._getBundledComponents = function () {
        sp_core_library_["Validate"].isNotNullOrUndefined(SPStarter._bundledComponents, 'bundledComponents');
        return SPStarter._bundledComponents;
    };
    SPStarter._initializeEnvironment = function (preloadedData) {
        var type;
        if (window.location.hostname === 'localhost' ||
            window['ENVIRONMENTTYPE'] &&
                window['ENVIRONMENTTYPE'] === 'Local') {
            type = sp_core_library_["EnvironmentType"].Local;
        }
        else if (preloadedData.clientSideApplicationId === 'eb4b666b-5c29-4dad-9a99-23613f21a2b7') {
            type = sp_core_library_["EnvironmentType"].ClassicSharePoint;
        }
        else {
            type = sp_core_library_["EnvironmentType"].SharePoint;
        }
        sp_core_library_["Environment"]._initialize({ type: type });
    };
    SPStarter._initializeTelemetry = function (preloadedData) {
        if (SPStarter._isTelemetryDisabled()) {
            return;
        }
        var clientSideApplicationId = preloadedData.clientSideApplicationId, item = preloadedData.item, manifests = preloadedData.manifests, spPageContextInfo = preloadedData.spPageContextInfo;
        var pageContextInfo = spPageContextInfo;
        var completenessUrls = pageContextInfo.completenessUrls, CorrelationId = pageContextInfo.CorrelationId, currentUICultureName = pageContextInfo.currentUICultureName, env = pageContextInfo.env, farmLabel = pageContextInfo.farmLabel, listId = pageContextInfo.listId, siteId = pageContextInfo.siteId, siteSubscriptionId = pageContextInfo.siteSubscriptionId, systemUserKey = pageContextInfo.systemUserKey, userLoginName = pageContextInfo.userLoginName, webId = pageContextInfo.webId;
        var listItemUniqueId = item && item.UniqueId;
        sp_telemetry_["_Telemetry"].initialize(manifests[0].alias, {
            environment: env,
            farmLabel: farmLabel,
            clientSideApplicationId: clientSideApplicationId || '',
            siteSubscriptionId: siteSubscriptionId,
            version:  true ? 'sp-client-npm-build-artifacts_20181217.001' : manifests[0].version,
            loginName: userLoginName,
            systemUserKey: systemUserKey,
            currentUICultureName: currentUICultureName,
            correlationId: CorrelationId,
            enableConsoleLog: SPStarter._isConsoleLogEnabled(),
            siteId: siteId,
            webId: webId,
            completenessCallbackEndpoint: this._extractCompletenessCallbackEndpoint(completenessUrls),
            listId: listId,
            listItemUniqueId: listItemUniqueId
        });
        sp_diagnostics_["_Diagnostics"].initialize({
            enableConsoleLog: SPStarter._isConsoleLogEnabled(),
            siteId: siteId,
            webId: webId,
            listId: listId,
            listItemUniqueId: listItemUniqueId
        });
    };
    SPStarter._initializeFlightsAndKillswitches = function (preloadedData) {
        sp_core_library_["_SPFlight"].initialize(preloadedData.spPageContextInfo.ExpFeatures);
        sp_core_library_["_SPKillSwitch"].initialize(preloadedData.spPageContextInfo.killSwitches);
        var allowDebugQueryParameter = sp_core_library_["_SPFlight"].isDebugFlightEnabled
            || sp_core_library_["Environment"].type === sp_core_library_["EnvironmentType"].Local;
        if (allowDebugQueryParameter) {
            var queryParams = new sp_core_library_["UrlQueryParameterCollection"](window.location.href);
            sp_core_library_["_SPFlight"].setDebugFlights(queryParams.getValue(DEBUG_FLIGHTS_QUERY_PARAM));
            sp_core_library_["_SPKillSwitch"].setDebugKillswitches(queryParams.getValue(DEBUG_KILLSWITCHES_QUERY_PARAM));
        }
    };
    SPStarter._isQueryParameterTrue = function (name) {
        var parameterValue;
        try {
            var queryParams = new sp_core_library_["UrlQueryParameterCollection"](window.location.href);
            parameterValue = queryParams.getValue(name) === 'true';
        }
        catch (error) {
            parameterValue = false;
        }
        return parameterValue;
    };
    SPStarter._isConsoleLogEnabled = function () {
        return SPStarter._isQueryParameterTrue('enableConsoleLog');
    };
    SPStarter._isTelemetryDisabled = function () {
        var ariaDisabled = SPStarter._isQueryParameterTrue('disableTelemetry');
        if (!sp_core_library_["_SPKillSwitch"].isActivated(SPStarter.ariaTelemetryKillSwitch, '2018/08/17', 'Disabeling aria telemetry')) {
            ariaDisabled = ariaDisabled || (sp_core_library_["_SPFlight"].isEnabled(ARIA_DISABLE_TELEMETRY_LOGGING_FLIGHT_ID) &&
                (navigator.userAgent.indexOf('SharePointDesktop') !== -1));
        }
        return ariaDisabled;
    };
    SPStarter._useRequireJs = function (preloadedData) {
        var isFlightEnabled = sp_core_library_["_SPFlight"].isEnabled(REQUIREJS_FLIGHT_ID);
        var isListViewApplication = preloadedData.clientSideApplicationId === componentConstants["b" /* listViewHostComponentId */];
        return isFlightEnabled || isListViewApplication;
    };
    SPStarter.handleError = function (error, userFriendlyMessage, operationName, correlationId, preloadedData) {
        var errorInformation = {
            message: userFriendlyMessage,
            correlationId: correlationId,
            error: error,
            operationName: operationName
        };
        if (this._isRedirectDisabled(preloadedData)) {
            this._consoleErrorHandleFailure(errorInformation);
        }
        else {
            this._errorAspxHandleFailure(errorInformation);
        }
        return Promise.reject(error);
    };
    SPStarter._isRedirectDisabled = function (preloadedData) {
        return SPStarter._isQueryParameterTrue('noredir') ||
            sp_core_library_["Environment"].type === sp_core_library_["EnvironmentType"].ClassicSharePoint ||
            sp_core_library_["Environment"].type === sp_core_library_["EnvironmentType"].Local ||
            preloadedData.clientSideApplicationId === componentConstants["b" /* listViewHostComponentId */]; 
    };
    SPStarter._consoleErrorHandleFailure = function (errorInformation) {
        console.error(errorInformation.message);
        if (errorInformation.correlationId) {
            console.error("Correlation Id: " + errorInformation.correlationId);
        }
        if (errorInformation.operationName) {
            console.error("Operation name: " + errorInformation.operationName);
        }
        if (errorInformation.error) {
            console.error(errorInformation.error.message);
            console.error("CALL STACK: " + errorInformation.error.stack);
        }
    };
    SPStarter._errorAspxHandleFailure = function (errorInformation) {
        window.location.href =
            '_layouts/15/error.aspx' +
                '?ErrorCorrelationId=' + encodeURIComponent(errorInformation.correlationId || '') +
                '&ErrorText=' + encodeURIComponent(errorInformation.message) +
                '&ErrorDetails=' + encodeURIComponent(errorInformation.error ? errorInformation.error.toString() : '') +
                '&Name=' + encodeURIComponent(errorInformation.operationName || 'DefaultOperation') +
                '&ErrorCategory=spfx';
    };
    SPStarter._extractCompletenessCallbackEndpoint = function (completenessUrls) {
        if (completenessUrls && completenessUrls.length > 0) {
            return completenessUrls[0] + "/api/collection";
        }
        else {
            return undefined;
        }
    };
    SPStarter._bundledComponents = undefined;
    SPStarter._isTelemetryLoggingInRealTime = false;
    SPStarter._realTimeProcessingWaitTime = 1 * 1000; 
    SPStarter.enableDeferredLogging = sp_core_library_["Guid"].parse('4b6e1a58-3e0c-43e2-b9cb-1a470f6fe402');
    SPStarter.ariaTelemetryKillSwitch = sp_core_library_["Guid"].parse('177EA1AE-7501-4DB9-9EFB-9A179BC70E52');
    return SPStarter;
}());
/* harmony default export */ var lib_SPStarter = (SPStarter_SPStarter);

// EXTERNAL MODULE: ./lib/utilities/SPLoaderFlights.js
var SPLoaderFlights = __webpack_require__(27);

// CONCATENATED MODULE: ./lib/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SPComponentLoader", function() { return SPComponentLoaderProxy["a" /* default */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DeveloperTools", function() { return DeveloperTools_DeveloperToolsProxy; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_SPStarter", function() { return lib_SPStarter; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_SPLoaderFlights", function() { return SPLoaderFlights["a" /* default */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_ManifestStore", function() { return ManifestStore["a" /* default */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_ManifestProvider", function() { return stores_ManifestProvider; });








/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = confirmDebugAllowed;
/* harmony export (immutable) */ __webpack_exports__["b"] = dangerouslyEnableDebug;
/* harmony export (immutable) */ __webpack_exports__["c"] = peekDebugAllowed;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ensureDebugComponents__ = __webpack_require__(21);

var _loaderResponse =  true ? true : undefined;
var _manifestsResponse =  true ? true : undefined;
var _debugAllowedPromise;
function confirmDebugAllowed(options) {
    if (_requiresPrompt(options)) {
        if (!_debugAllowedPromise) {
            _debugAllowedPromise = new Promise(function (resolve) {
                Object(__WEBPACK_IMPORTED_MODULE_0__ensureDebugComponents__["a" /* default */])().then(function (debugComponents) {
                    return debugComponents.showDebugPrompt(options).then(function (allowed) {
                        _debugAllowedPromise = undefined;
                        if (options.loaderRequested) {
                            _loaderResponse = allowed;
                        }
                        if (options.manifestsRequested) {
                            _manifestsResponse = allowed;
                        }
                        resolve(allowed);
                    });
                });
            });
            return _debugAllowedPromise;
        }
        else {
            throw new Error('Debug prompt is currently being shown and cannot be shown again until it has been dismissed.');
        }
    }
    else {
        return Promise.resolve(peekDebugAllowed(options));
    }
}
function dangerouslyEnableDebug() {
    _loaderResponse = true;
    _manifestsResponse = true;
}
function peekDebugAllowed(options) {
    return ((!options.loaderRequested || _loaderResponse === true) &&
        (!options.manifestsRequested || _manifestsResponse === true));
}
function _requiresPrompt(options) {
    return ((options.loaderRequested && _loaderResponse === undefined) ||
        (options.manifestsRequested && _manifestsResponse === undefined));
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ensureDebugComponents;
var _debugComponentsPromise;
function ensureDebugComponents() {
    if (!_debugComponentsPromise) {
        _debugComponentsPromise = __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 43));
    }
    return _debugComponentsPromise;
}


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var AddressStore = (function () {
    function AddressStore() {
        this._addressMap = new Map();
        this._reverseAddressMap = new Map();
    }
    Object.defineProperty(AddressStore, "instance", {
        get: function () {
            if (!AddressStore._instance) {
                AddressStore._instance = new AddressStore();
            }
            return AddressStore._instance;
        },
        enumerable: true,
        configurable: true
    });
    AddressStore.prototype.tryGetAddress = function (normalizedName) {
        return this._addressMap.get(normalizedName);
    };
    AddressStore.prototype.getNormalizedName = function (address) {
        if (this._reverseAddressMap.has(address)) {
            return this._reverseAddressMap.get(address);
        }
        else {
            return undefined;
        }
    };
    AddressStore.prototype.set = function (normalizedName, address) {
        if (!this._addressMap.has(normalizedName)) {
            this._addressMap.set(normalizedName, address);
        }
        if (!this._reverseAddressMap.has(address)) {
            this._reverseAddressMap.set(address, normalizedName);
        }
    };
    return AddressStore;
}());
/* harmony default export */ __webpack_exports__["a"] = (AddressStore);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var LocaleStore = (function () {
    function LocaleStore() {
    }
    LocaleStore.getLocale = function () {
        return LocaleStore._locale;
    };
    LocaleStore.setLocale = function (locale) {
        LocaleStore._locale = locale;
    };
    LocaleStore._locale = undefined;
    return LocaleStore;
}());
/* harmony default export */ __webpack_exports__["a"] = (LocaleStore);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isCorsEnabled;
function isCorsEnabled(src) {
    if (!src) {
        return false;
    }
    var host = new URL(src).host;
    var AKAMAI_HOST_ENDS_WITH = '.akamaihd.net';
    return host.substring(host.length - AKAMAI_HOST_ENDS_WITH.length, host.length) ===
        AKAMAI_HOST_ENDS_WITH;
}


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@microsoft/sp-core-library"
var sp_core_library_ = __webpack_require__(0);
var sp_core_library__default = /*#__PURE__*/__webpack_require__.n(sp_core_library_);

// EXTERNAL MODULE: external "@microsoft/sp-diagnostics"
var sp_diagnostics_ = __webpack_require__(1);
var sp_diagnostics__default = /*#__PURE__*/__webpack_require__.n(sp_diagnostics_);

// EXTERNAL MODULE: ./lib/debug/DebugManager.js + 2 modules
var DebugManager = __webpack_require__(26);

// EXTERNAL MODULE: ./lib/SPComponentLoaderProxy.js
var SPComponentLoaderProxy = __webpack_require__(13);

// EXTERNAL MODULE: ./lib/SPLoader.resx.js
var SPLoader_resx = __webpack_require__(3);

// EXTERNAL MODULE: ./lib/stores/ComponentStore.js
var ComponentStore = __webpack_require__(5);

// EXTERNAL MODULE: ./lib/stores/ManifestStore.js
var ManifestStore = __webpack_require__(2);

// EXTERNAL MODULE: ./lib/utilities/componentConstants.js
var componentConstants = __webpack_require__(6);

// EXTERNAL MODULE: ./lib/utilities/SPLoaderFlights.js
var SPLoaderFlights = __webpack_require__(27);

// CONCATENATED MODULE: ./lib/PlatformLoader.js








var TIMEOUT_IN_MILLISECONDS = 10000;
var startApplicationQosScenarioName = 'SPApplicationLoader.startApplication';
var platformFailedToLoadFailure = 'PlatformFailedToLoad';
var invalidPlatformFailure = 'InvalidPlatform';
var applicationManagerStartFailure = 'ApplicationManager.Start';
var navigatorFailure = 'Navigator.navigateToApplication';
var timeoutExpectedFailure = 'Timeout';
var startLogSource = sp_diagnostics_["_LogSource"].create('SPApplicationLoader.start');
var PlatformLoader_PlatformLoader = (function () {
    function PlatformLoader() {
    }
    PlatformLoader.startApplication = function (preloadedData, serviceScope) {
        sp_core_library_["Validate"].isNonemptyString(preloadedData.clientSideApplicationId, 'preloadedData.clientSideApplicationId');
        var qosMonitor = new sp_diagnostics_["_QosMonitor"](startApplicationQosScenarioName);
        setTimeout(function () {
            if (!qosMonitor.hasEnded) {
                qosMonitor.writeExpectedFailure(timeoutExpectedFailure);
            }
        }, TIMEOUT_IN_MILLISECONDS);
        return PlatformLoader._startApplication(preloadedData, serviceScope, qosMonitor);
    };
    PlatformLoader._startApplication = function (preloadedData, serviceScope, qosMonitor) {
        var _this = this;
        function error(message, failureId) {
            var err = new Error(message);
            sp_diagnostics_["_TraceLogger"].logError(startLogSource, err);
            qosMonitor.writeUnexpectedFailure(failureId, err);
            throw err;
        }
        try {
            if (!sp_core_library_["_SPKillSwitch"].isActivated(sp_core_library_["Guid"].parse('fa9cc715-c765-4161-a202-dff5e2a3e0af'), '2018/2/26', 'Load platform synchronously')) {
                var spAppBaseManifest = ManifestStore["a" /* default */].instance.tryGetManifest(componentConstants["g" /* spApplicationBaseComponentId */]);
                if (spAppBaseManifest) {
                    var assemblySpAppBase = ComponentStore["a" /* default */].instance.tryGetComponentReference(spAppBaseManifest.id, spAppBaseManifest.version);
                    if (assemblySpAppBase) {
                        return this._executePlatformCode(assemblySpAppBase, preloadedData, serviceScope, qosMonitor, error);
                    }
                }
            }
            return this._loadSpApplicationBase(error).then(function (spApplicationBase) {
                return _this._executePlatformCode(spApplicationBase, preloadedData, serviceScope, qosMonitor, error);
            }, function (err) {
                return error(sp_core_library_["Text"].format(SPLoader_resx["a" /* default */].platformFailedToLoadError, componentConstants["g" /* spApplicationBaseComponentId */], componentConstants["h" /* spApplicationBaseName */]), platformFailedToLoadFailure);
            });
        }
        catch (error) {
            qosMonitor.writeUnexpectedFailure('SyncError', error);
            return Promise.reject(error);
        }
    };
    PlatformLoader._executePlatformCode = function (spApplicationBase, preloadedData, serviceScope, qosMonitor, error) {
        if (SPLoaderFlights["a" /* default */]._useNewBootSequence()) {
            return this._navigateToApplication(spApplicationBase, preloadedData, serviceScope, qosMonitor, error);
        }
        else {
            return this._runApplicationManager(spApplicationBase, preloadedData, serviceScope, qosMonitor, error);
        }
    };
    PlatformLoader._runApplicationManager = function (spApplicationBase, preloadedData, serviceScope, qosMonitor, error) {
        if (spApplicationBase && spApplicationBase._ApplicationManager) {
            var applicationManager = new spApplicationBase._ApplicationManager(serviceScope);
            return applicationManager.startApplication(preloadedData).then(function (result) {
                qosMonitor.writeSuccess();
                return result;
            }).catch(function (e) {
                var err = new Error(sp_core_library_["Text"].format(SPLoader_resx["a" /* default */].applicationFailedToInitializeError, e));
                sp_diagnostics_["_TraceLogger"].logError(startLogSource, err);
                qosMonitor.writeExpectedFailure(applicationManagerStartFailure, err);
                throw err;
            });
        }
        else {
            return Promise.resolve().then(function () { return error(sp_core_library_["Text"].format(SPLoader_resx["a" /* default */].platformFailedToLoadError, componentConstants["g" /* spApplicationBaseComponentId */], componentConstants["h" /* spApplicationBaseName */]), invalidPlatformFailure); });
        }
    };
    PlatformLoader._navigateToApplication = function (spApplicationBase, preloadedData, serviceScope, qosMonitor, error) {
        if (spApplicationBase && spApplicationBase._Navigator) {
            var applicationManager = new spApplicationBase._Navigator(serviceScope);
            return applicationManager.navigateToApplication(preloadedData).then(function (result) {
                qosMonitor.writeSuccess();
                return result;
            }).catch(function (e) {
                var err = new Error(sp_core_library_["Text"].format(SPLoader_resx["a" /* default */].applicationFailedToInitializeError, e));
                sp_diagnostics_["_TraceLogger"].logError(startLogSource, err);
                qosMonitor.writeExpectedFailure(navigatorFailure, err);
                throw err;
            });
        }
        else {
            return Promise.resolve().then(function () { return error(sp_core_library_["Text"].format(SPLoader_resx["a" /* default */].platformFailedToLoadError, componentConstants["g" /* spApplicationBaseComponentId */], componentConstants["h" /* spApplicationBaseName */]), invalidPlatformFailure); });
        }
    };
    PlatformLoader._loadSpApplicationBase = function (error) {
        return SPComponentLoaderProxy["a" /* default */].loadComponentById(componentConstants["g" /* spApplicationBaseComponentId */])
            .catch(function (e) {
            return error(sp_core_library_["Text"].format(SPLoader_resx["a" /* default */].platformFailedToLoadWithMessageError, componentConstants["g" /* spApplicationBaseComponentId */], componentConstants["h" /* spApplicationBaseName */], e.message), platformFailedToLoadFailure);
        });
    };
    return PlatformLoader;
}());
/* harmony default export */ var lib_PlatformLoader = (PlatformLoader_PlatformLoader);

// EXTERNAL MODULE: ./lib/utilities/telemetryConstants.js
var telemetryConstants = __webpack_require__(4);

// CONCATENATED MODULE: ./lib/BaseComponentLoader.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponentLoader_BaseComponentLoader; });








var BaseComponentLoader_BaseComponentLoader = (function () {
    function BaseComponentLoader(serviceScope) {
        this._isInitialized = false;
        if (!BaseComponentLoader._headElement) {
            BaseComponentLoader._headElement = document.getElementsByTagName('head')[0];
        }
        this._serviceScope = serviceScope;
    }
    BaseComponentLoader.prototype._startApplication = function (preloadedData) {
        var _this = this;
        var waitingPromise = Promise.resolve(); 
        if (preloadedData.clientSideApplicationId !== componentConstants["i" /* spHomeComponentId */]) {
            if (sp_core_library_["_SPFlight"].isEnabled(1187 )) {
                if (!ManifestStore["a" /* default */].instance.tryGetManifest(componentConstants["e" /* reactComponentId */], componentConstants["d" /* react16Version */])) {
                    sp_diagnostics_["_TraceLogger"].logVerbose(telemetryConstants["i" /* startApplicationLogSource */], 'Requesting React 16 manifests to the server');
                    waitingPromise =
                        ManifestStore["a" /* default */].instance.requestManifests([
                            { id: componentConstants["e" /* reactComponentId */], version: componentConstants["d" /* react16Version */] },
                            { id: componentConstants["f" /* reactDomComponentId */], version: componentConstants["d" /* react16Version */] }
                        ]).catch(function () {
                            return ManifestStore["a" /* default */].instance.requestManifests([
                                { id: componentConstants["e" /* reactComponentId */], version: componentConstants["d" /* react16Version */] },
                                { id: componentConstants["f" /* reactDomComponentId */], version: componentConstants["d" /* react16Version */] }
                            ]);
                        });
                }
            }
            else {
                if (!ManifestStore["a" /* default */].instance.tryGetManifest(componentConstants["e" /* reactComponentId */], componentConstants["c" /* react15Version */])) {
                    sp_diagnostics_["_TraceLogger"].logVerbose(telemetryConstants["i" /* startApplicationLogSource */], 'Requesting React 15 manifests to the server');
                    waitingPromise =
                        ManifestStore["a" /* default */].instance.requestManifests([
                            { id: componentConstants["e" /* reactComponentId */], version: componentConstants["c" /* react15Version */] },
                            { id: componentConstants["f" /* reactDomComponentId */], version: componentConstants["c" /* react15Version */] }
                        ]).catch(function () {
                            return ManifestStore["a" /* default */].instance.requestManifests([
                                { id: componentConstants["e" /* reactComponentId */], version: componentConstants["c" /* react15Version */] },
                                { id: componentConstants["f" /* reactDomComponentId */], version: componentConstants["c" /* react15Version */] }
                            ]);
                        });
                }
            }
        }
        return waitingPromise.then(function () { return lib_PlatformLoader.startApplication(preloadedData, _this._serviceScope).then(function (application) {
            if (window['_spLoaderCallback']) {
                var _spLoaderCallback = window['_spLoaderCallback'];
                _spLoaderCallback(application);
            }
            return application;
        }); });
    };
    BaseComponentLoader.prototype._initialize = function (preloadedData, bundledComponents, isDebugLoader) {
        if (this._isInitialized) {
            return;
        }
        this._isInitialized = true;
        ManifestStore["a" /* default */].instance.registerPreloadedManifests(preloadedData);
        if (true) {
            __webpack_require__(34).initializeNpmModule();
        }
        this._listViewHostWorkaround(preloadedData);
        if (!isDebugLoader) {
            this._pinBundledComponents(bundledComponents);
        }
        this._overrideComponents(bundledComponents);
    };
    BaseComponentLoader.prototype.tryGetLoadedComponent = function (manifest) {
        sp_core_library_["Validate"].isNotNullOrUndefined(manifest, 'manifest');
        return ComponentStore["a" /* default */].instance.tryGetComponentReference(manifest.id, manifest.version);
    };
    BaseComponentLoader.prototype.loadComponentById = function (id, version) {
        var _this = this;
        var parsedId;
        try {
            sp_core_library_["Validate"].isNonemptyString(id, 'id');
            parsedId = sp_core_library_["Guid"].parse(id).toString();
        }
        catch (error) {
            return Promise.reject(error);
        }
        var manifest = ManifestStore["a" /* default */].instance.tryGetManifest(parsedId, version);
        if (manifest) {
            return this.loadComponent(manifest);
        }
        else {
            return ManifestStore["a" /* default */].instance.requestManifest(parsedId, version)
                .then(function (newManifest) { return _this.loadComponent(newManifest); });
        }
    };
    BaseComponentLoader.prototype.registerManifests = function (manifests) {
        ManifestStore["a" /* default */].instance.registerManifests(manifests, false);
    };
    Object.defineProperty(BaseComponentLoader.prototype, "_manifestReferences", {
        get: function () {
            return ManifestStore["a" /* default */].instance.getRegisteredManifests();
        },
        enumerable: true,
        configurable: true
    });
    BaseComponentLoader.prototype.loadCss = function (url) {
        sp_core_library_["Validate"].isNonemptyString(url, 'url');
        var linkTag = document.createElement('link');
        linkTag.rel = 'stylesheet';
        linkTag.type = 'text/css';
        linkTag.href = url;
        BaseComponentLoader._headElement.appendChild(linkTag);
    };
    BaseComponentLoader.prototype._loadDebugManifestsForWorkbench = function (manifestsFileUrl) {
        return DebugManager["a" /* DebugManager */].loadAndRegisterManifestsFile(this, manifestsFileUrl,  true).then();
    };
    BaseComponentLoader.prototype.tryGetManifestById = function (id, version) {
        sp_core_library_["Validate"].isNonemptyString(id, 'id');
        var parsedId = sp_core_library_["Guid"].parse(id).toString();
        return ManifestStore["a" /* default */].instance.tryGetManifest(parsedId, version);
    };
    BaseComponentLoader.prototype._unloadComponents = function () {
        var _this = this;
        ManifestStore["a" /* default */].instance.getRegisteredManifests().forEach(function (manifest) {
            _this._unloadComponent(manifest);
        });
    };
    BaseComponentLoader.prototype._listViewHostWorkaround = function (preloadedData) {
    };
    BaseComponentLoader.prototype._pinBundledComponents = function (bundledComponents) {
        for (var id in bundledComponents) {
            if (bundledComponents.hasOwnProperty(id) && id !== componentConstants["e" /* reactComponentId */] && id !== componentConstants["f" /* reactDomComponentId */]) {
                ManifestStore["a" /* default */].instance._pinManifest(id);
            }
        }
    };
    BaseComponentLoader.prototype._overrideComponents = function (bundledComponents) {
        var _this = this;
        Object.keys(bundledComponents).forEach(function (key) {
            _this._overrideComponent(key, bundledComponents[key]);
        });
    };
    return BaseComponentLoader;
}());



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@microsoft/sp-core-library"
var sp_core_library_ = __webpack_require__(0);
var sp_core_library__default = /*#__PURE__*/__webpack_require__.n(sp_core_library_);

// EXTERNAL MODULE: ./lib/debug/confirmDebugAllowed.js
var confirmDebugAllowed = __webpack_require__(20);

// EXTERNAL MODULE: ./lib/stores/ManifestStore.js
var ManifestStore = __webpack_require__(2);

// EXTERNAL MODULE: ./lib/debug/ensureDebugComponents.js
var ensureDebugComponents = __webpack_require__(21);

// CONCATENATED MODULE: ./lib/debug/showDebugError.js

function showDebugError(innerError, errorText, title) {
    return Object(ensureDebugComponents["a" /* default */])().then(function (debugComponents) {
        debugComponents.showError(innerError, errorText, title);
    });
}

// CONCATENATED MODULE: ./lib/debug/DebugManager.resx.js
var key = '_FmFyAWZ1md7Z1R+V8t2S2Q';
var allStrings = ( false) ?
    require("../resx-strings/en-us.json") :
    __webpack_require__(12);
var strings = allStrings[key];
/* harmony default export */ var DebugManager_resx = (strings);

// CONCATENATED MODULE: ./lib/debug/DebugManager.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DebugManager_DebugManager; });





var SPFX_DEBUG_SESSION_VAR_ID = 'spfx-debug';
var DEBUG_MANIFESTS_FILE_QUERY_PARAM_NAME = 'debugManifestsFile';
var LOADER_QUERY_PARAM_NAME = 'loader';
var RESET_QUERY_PARAM_NAME = 'reset';
var LOADER_EXPORTS_NAME = 'spModuleLoader';
var EMPTY_DEBUG_LOAD_RESULT = {
    debugLoader: undefined,
    debugManifests: undefined,
    registerAsNonDebug: false
};
var DebugManager_DebugManager = (function () {
    function DebugManager() {
    }
    DebugManager.initialize = function (componentLoader, debugData) {
        if (debugData) {
            Object(confirmDebugAllowed["b" /* dangerouslyEnableDebug */])();
            DebugManager._registerManifests(debugData.debugManifests || [], debugData.registerAsNonDebug);
            return Promise.resolve(EMPTY_DEBUG_LOAD_RESULT);
        }
        if (!DebugManager._initializationPromise) {
            var spfxDebugSessionVarData_1 = {};
            var isSpfxDebugEnabled = sp_core_library_["_SPFlight"].isDebugFlightEnabled;
            var queryParameters = new URL(window.location.href).searchParams;
            try {
                spfxDebugSessionVarData_1 = JSON.parse(sessionStorage.getItem(SPFX_DEBUG_SESSION_VAR_ID) || '{}');
            }
            catch (e) {
            }
            DebugManager._initializationPromise = DebugManager._handleDebugParameters(componentLoader, spfxDebugSessionVarData_1, queryParameters, isSpfxDebugEnabled).then(function (debugLoadResult) {
                spfxDebugSessionVarData_1.loaderUrl = DebugManager._debugLoaderUrl;
                spfxDebugSessionVarData_1.manifestsFileUrl = DebugManager._debugManifestsFileUrl;
                try {
                    var serializedDebugSessionData = JSON.stringify(spfxDebugSessionVarData_1);
                    if (serializedDebugSessionData !== '{}') {
                        sessionStorage.setItem(SPFX_DEBUG_SESSION_VAR_ID, serializedDebugSessionData);
                    }
                    else {
                        sessionStorage.removeItem(SPFX_DEBUG_SESSION_VAR_ID);
                    }
                }
                catch (e) {
                }
                return debugLoadResult;
            });
        }
        return DebugManager._initializationPromise;
    };
    DebugManager.loadAndRegisterManifestsFile = function (componentLoader, manifestsFileUrl, registerAsNonDebug) {
        return componentLoader.loadScript(manifestsFileUrl).then(function (manifestScript) {
            var manifests = manifestScript.getManifests();
            DebugManager._registerManifests(manifests, registerAsNonDebug);
            return manifests;
        });
    };
    DebugManager._handleDebugParameters = function (componentLoader, spfxDebugSessionVarData, queryParameters, isSpfxDebugEnabled) {
        return new Promise(function (resolve) {
            if (queryParameters.get(RESET_QUERY_PARAM_NAME) !== null) {
                spfxDebugSessionVarData.testMode = undefined;
                sessionStorage.removeItem(SPFX_DEBUG_SESSION_VAR_ID);
                resolve(EMPTY_DEBUG_LOAD_RESULT);
            }
            else if (isSpfxDebugEnabled && spfxDebugSessionVarData.testMode) {
                Object(confirmDebugAllowed["b" /* dangerouslyEnableDebug */])();
                DebugManager._debugManifestsFileUrl = spfxDebugSessionVarData.manifestsFileUrl;
                DebugManager._debugLoaderUrl = spfxDebugSessionVarData.loaderUrl;
                DebugManager._getDebugScripts(componentLoader, resolve,  false);
            }
            else {
                DebugManager._handleNonTestModeDebugParameters(componentLoader, spfxDebugSessionVarData, queryParameters, isSpfxDebugEnabled, resolve);
            }
        });
    };
    DebugManager._handleNonTestModeDebugParameters = function (componentLoader, spfxDebugSessionVarData, queryParameters, isSpfxDebugEnabled, resolve) {
        var debugManifestsFileUrl = queryParameters.get(DEBUG_MANIFESTS_FILE_QUERY_PARAM_NAME) ||
            spfxDebugSessionVarData.manifestsFileUrl ||
            undefined;
        var debugLoaderUrl = isSpfxDebugEnabled
            ? (queryParameters.get(LOADER_QUERY_PARAM_NAME) || spfxDebugSessionVarData.loaderUrl || undefined)
            : undefined;
        if (debugLoaderUrl || debugManifestsFileUrl) {
            Object(confirmDebugAllowed["a" /* confirmDebugAllowed */])({
                loaderRequested: !!debugLoaderUrl,
                manifestsRequested: !!debugManifestsFileUrl
            }).then(function (allowed) {
                if (allowed) {
                    DebugManager._debugLoaderUrl = debugLoaderUrl;
                    DebugManager._debugManifestsFileUrl = debugManifestsFileUrl;
                    DebugManager._getDebugScripts(componentLoader, resolve,  false);
                }
                else {
                    resolve(EMPTY_DEBUG_LOAD_RESULT);
                }
            });
        }
        else {
            resolve(EMPTY_DEBUG_LOAD_RESULT);
        }
    };
    DebugManager._getDebugScripts = function (componentLoader, resolve, registerAsNonDebug) {
        var loaderUrl = DebugManager._debugLoaderUrl;
        var manifestFileUrl = DebugManager._debugManifestsFileUrl;
        var debugLoaderPromise = loaderUrl
            ? DebugManager._loadLoader(componentLoader, loaderUrl)
            : Promise.resolve(undefined);
        var debugManifestsFilePromise = manifestFileUrl
            ? DebugManager.loadAndRegisterManifestsFile(componentLoader, manifestFileUrl, registerAsNonDebug)
            : Promise.resolve(undefined);
        debugLoaderPromise = debugLoaderPromise.catch(function (error) {
            throw { errorSource: 'loader', error: error };
        });
        debugManifestsFilePromise = debugManifestsFilePromise.catch(function (error) {
            throw { errorSource: 'manifestsFile', error: error };
        });
        Promise.all([debugLoaderPromise, debugManifestsFilePromise])
            .then(function (_a) {
            var debugLoader = _a[0], debugManifests = _a[1];
            resolve({ debugLoader: debugLoader, debugManifests: debugManifests, registerAsNonDebug: registerAsNonDebug });
        })
            .catch(function (error) {
            if (error instanceof Error) {
                showDebugError(error, DebugManager_resx.errorLoadingDebugScriptUnknown, DebugManager_resx.errorLoadingUnknownTitle);
            }
            else {
                var errorText = DebugManager_resx.errorLoadingDebugScriptUnknown;
                var title = DebugManager_resx.errorLoadingUnknownTitle;
                switch (error.errorSource) {
                    case 'loader':
                        errorText = DebugManager._getUrlErrorText(loaderUrl || '', LOADER_QUERY_PARAM_NAME);
                        title = DebugManager_resx.errorLoadingDebugLoaderTitle;
                        break;
                    case 'manifestsFile':
                        errorText = DebugManager._getUrlErrorText(manifestFileUrl || '', DEBUG_MANIFESTS_FILE_QUERY_PARAM_NAME);
                        title = DebugManager_resx.errorLoadingDebugManifestTitle;
                        break;
                }
                showDebugError(error.error, errorText, title);
            }
        });
    };
    DebugManager._loadLoader = function (componentLoader, loaderUrl) {
        delete window[LOADER_EXPORTS_NAME];
        return componentLoader.loadScript(loaderUrl, { globalExportsName: LOADER_EXPORTS_NAME });
    };
    DebugManager._getUrlErrorText = function (url, paramName) {
        var isMalformed = !url.match(/^https?\:\/\//);
        var isHttps = !isMalformed && !!url.match(/^https/);
        return isMalformed
            ? sp_core_library_["Text"].format(DebugManager_resx.errorLoadingDebugScriptMalformed, url)
            : sp_core_library_["Text"].format(isHttps ? DebugManager_resx.errorLoadingDebugScriptHTTPS : DebugManager_resx.errorLoadingDebugScriptHTTP, paramName);
    };
    DebugManager._registerManifests = function (manifests, registerAsNonDebug) {
        if (registerAsNonDebug) {
            ManifestStore["a" /* default */].instance.registerManifests(manifests, false);
        }
        else {
            ManifestStore["a" /* default */].instance.registerDebugManifests(manifests);
        }
    };
    return DebugManager;
}());



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__);

var SPLoaderFlights = (function () {
    function SPLoaderFlights() {
    }
    SPLoaderFlights._useNewBootSequence = function () {
        return __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["_SPFlight"].isEnabled(182 );
    };
    return SPLoaderFlights;
}());
/* harmony default export */ __webpack_exports__["a"] = (SPLoaderFlights);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_diagnostics__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_diagnostics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__microsoft_sp_diagnostics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resolveAddress__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_ErrorBuilder__ = __webpack_require__(7);




var UrlStatus;
(function (UrlStatus) {
    UrlStatus[UrlStatus["Undefined"] = 0] = "Undefined";
    UrlStatus[UrlStatus["OK"] = 1] = "OK";
    UrlStatus[UrlStatus["FileNotFound"] = 2] = "FileNotFound";
    UrlStatus[UrlStatus["Forbidden"] = 3] = "Forbidden";
    UrlStatus[UrlStatus["ClientError"] = 4] = "ClientError";
    UrlStatus[UrlStatus["ServerError"] = 5] = "ServerError";
    UrlStatus[UrlStatus["NetworkError"] = 6] = "NetworkError";
})(UrlStatus || (UrlStatus = {}));
var ResourceUrlChecker = (function () {
    function ResourceUrlChecker() {
    }
    ResourceUrlChecker.checkResourceUrl = function (manifest, name) {
        __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["Validate"].isNotNullOrUndefined(manifest, 'manifest');
        __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_core_library__["Validate"].isNonemptyString(name, 'name');
        var url = Object(__WEBPACK_IMPORTED_MODULE_2__resolveAddress__["a" /* default */])(manifest, name);
        return ResourceUrlChecker._getUrlStatus(url).then(function (urlStatus) {
            if (urlStatus !== UrlStatus.OK) {
                return ResourceUrlChecker._throwUrlStatusError(urlStatus, manifest, name, url);
            }
            return Promise.resolve();
        });
    };
    ResourceUrlChecker._throwUrlStatusError = function (urlStatus, manifest, resourceName, url) {
        switch (urlStatus) {
            case UrlStatus.FileNotFound:
                if (url.match(ResourceUrlChecker.localhostUrlRegex)) {
                    throw __WEBPACK_IMPORTED_MODULE_3__error_ErrorBuilder__["a" /* default */].buildUrlStatusLocalhostFileNotFoundError(manifest, resourceName, url);
                }
                else {
                    throw __WEBPACK_IMPORTED_MODULE_3__error_ErrorBuilder__["a" /* default */].buildUrlStatusFileNotFoundError(manifest, resourceName, url);
                }
            case UrlStatus.Forbidden:
                throw __WEBPACK_IMPORTED_MODULE_3__error_ErrorBuilder__["a" /* default */].buildUrlStatusForbiddenError(manifest, resourceName, url);
            case UrlStatus.ClientError:
                throw __WEBPACK_IMPORTED_MODULE_3__error_ErrorBuilder__["a" /* default */].buildUrlStatusClientErrorError(manifest, resourceName, url);
            case UrlStatus.ServerError:
                throw __WEBPACK_IMPORTED_MODULE_3__error_ErrorBuilder__["a" /* default */].buildUrlStatusServerErrorError(manifest, resourceName, url);
            case UrlStatus.NetworkError:
                if (url.match(ResourceUrlChecker.localhostUrlRegex)) {
                    throw __WEBPACK_IMPORTED_MODULE_3__error_ErrorBuilder__["a" /* default */].buildUrlStatusLocalhostNetworkErrorError(manifest, resourceName, url);
                }
                else if (url.match(ResourceUrlChecker.tenantUrlRegex)) {
                    throw __WEBPACK_IMPORTED_MODULE_3__error_ErrorBuilder__["a" /* default */].buildUrlStatusDocLibNetworkErrorError(manifest, resourceName, url);
                }
                else if (url.match(ResourceUrlChecker.httpsUrlRegex)) {
                    throw __WEBPACK_IMPORTED_MODULE_3__error_ErrorBuilder__["a" /* default */].buildUrlStatusHttpsNetworkErrorError(manifest, resourceName, url);
                }
                else {
                    throw __WEBPACK_IMPORTED_MODULE_3__error_ErrorBuilder__["a" /* default */].buildUrlStatusNetworkErrorError(manifest, resourceName, url);
                }
            case UrlStatus.Undefined:
            default:
                throw __WEBPACK_IMPORTED_MODULE_3__error_ErrorBuilder__["a" /* default */].buildUrlStatusUndefinedError(manifest, resourceName, url);
        }
    };
    ResourceUrlChecker._getUrlStatus = function (url) {
        var requestInit = {
            method: 'HEAD',
            mode: 'cors'
        };
        var request = new Request(url, requestInit);
        return window.fetch(request).then(function (response) {
            var httpStatusCode = response.status;
            if (httpStatusCode >= 200 && httpStatusCode < 300) {
                return UrlStatus.OK;
            }
            if (httpStatusCode === 404) {
                return UrlStatus.FileNotFound;
            }
            if (httpStatusCode === 403) {
                return UrlStatus.Forbidden;
            }
            if (httpStatusCode >= 400 && httpStatusCode < 500) {
                return UrlStatus.ClientError;
            }
            if (httpStatusCode >= 500 && httpStatusCode < 600) {
                return UrlStatus.ServerError;
            }
            return UrlStatus.Undefined;
        }).catch(function (error) {
            __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_diagnostics__["_TraceLogger"].logError(ResourceUrlChecker._logSource, error);
            return UrlStatus.NetworkError;
        });
    };
    ResourceUrlChecker._logSource = __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_diagnostics__["_LogSource"].create('ResourceUrlChecker');
    ResourceUrlChecker.localhostUrlRegex = /^http[s]?:\/\/localhost/;
    ResourceUrlChecker.tenantUrlRegex = /^http[s]?:\/\/[a-zA-Z0-9]+.sharepoint.com/;
    ResourceUrlChecker.httpsUrlRegex = /^https:\/\//;
    return ResourceUrlChecker;
}());
/* harmony default export */ __webpack_exports__["a"] = (ResourceUrlChecker);


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@microsoft/sp-core-library"
var sp_core_library_ = __webpack_require__(0);
var sp_core_library__default = /*#__PURE__*/__webpack_require__.n(sp_core_library_);

// EXTERNAL MODULE: ./lib/systemjs/SystemJsLoader.js
var SystemJsLoader = __webpack_require__(18);

// EXTERNAL MODULE: ./lib/BaseComponentLoader.js + 1 modules
var BaseComponentLoader = __webpack_require__(25);

// EXTERNAL MODULE: external "@microsoft/sp-diagnostics"
var sp_diagnostics_ = __webpack_require__(1);
var sp_diagnostics__default = /*#__PURE__*/__webpack_require__.n(sp_diagnostics_);

// EXTERNAL MODULE: external "@microsoft/sp-lodash-subset"
var sp_lodash_subset_ = __webpack_require__(14);
var sp_lodash_subset__default = /*#__PURE__*/__webpack_require__.n(sp_lodash_subset_);

// EXTERNAL MODULE: ./lib/error/ErrorBuilder.js
var ErrorBuilder = __webpack_require__(7);

// EXTERNAL MODULE: ./lib/error/SPLoaderError.js
var SPLoaderError = __webpack_require__(15);

// EXTERNAL MODULE: ./lib/SPLoader.resx.js
var SPLoader_resx = __webpack_require__(3);

// EXTERNAL MODULE: ./lib/stores/ComponentStore.js
var ComponentStore = __webpack_require__(5);

// EXTERNAL MODULE: ./lib/stores/ManifestStore.js
var ManifestStore = __webpack_require__(2);

// EXTERNAL MODULE: ./lib/utilities/resolveAddress.js
var resolveAddress = __webpack_require__(8);

// EXTERNAL MODULE: ./lib/utilities/ResourceUrlChecker.js
var ResourceUrlChecker = __webpack_require__(28);

// EXTERNAL MODULE: ./lib/utilities/telemetryConstants.js
var telemetryConstants = __webpack_require__(4);

// EXTERNAL MODULE: ./lib/systemjs/normalizeName.js
var normalizeName = __webpack_require__(11);

// CONCATENATED MODULE: ./lib/systemjs/loadComponent.js












var FIRST_RETRY = 1;
var MAX_NUMBER_RETRIES = 3;
var loadComponentImplEventName = 'loadComponentImpl';
var _systemJsLoader;
function loadComponent(manifest, systemJsLoader) {
    _systemJsLoader = systemJsLoader;
    sp_core_library_["Validate"].isNotNullOrUndefined(manifest, 'manifest');
    var cachedModule = ComponentStore["a" /* default */].instance.tryGetComponent(manifest.id, manifest.version);
    if (cachedModule) {
        return cachedModule;
    }
    var qosMonitor = new sp_diagnostics_["_QosMonitor"](telemetryConstants["c" /* loadComponentQosScenarioName */]);
    var qosExtraData = _buildQosExtraData(manifest);
    var componentPromise = _loadComponentRetryStrategy(manifest, FIRST_RETRY, MAX_NUMBER_RETRIES)
        .then(function (component) {
        qosMonitor.writeSuccess(qosExtraData);
        return component;
    })
        .catch(function (error) {
        if (error instanceof SPLoaderError["b" /* default */] && error.isExpected) {
            qosMonitor.writeExpectedFailure(undefined, error, qosExtraData);
        }
        else {
            qosMonitor.writeUnexpectedFailure(undefined, error, qosExtraData);
        }
        ComponentStore["a" /* default */].instance.deleteComponent(manifest.id, manifest.version);
        throw error;
    });
    ComponentStore["a" /* default */].instance.storeComponent(manifest.id, manifest.version, componentPromise);
    return componentPromise;
}
function _loadComponentRetryStrategy(manifest, currentRetryNumber, maxNumberRetries) {
    if (currentRetryNumber === 1) {
        sp_diagnostics_["_TraceLogger"].logVerbose(telemetryConstants["b" /* loadComponentLogSource */], sp_core_library_["Text"].format(SPLoader_resx["a" /* default */].loadComponentLog, manifest.id, manifest.alias, manifest.version));
    }
    else {
        sp_diagnostics_["_TraceLogger"].logVerbose(telemetryConstants["b" /* loadComponentLogSource */], sp_core_library_["Text"].format(SPLoader_resx["a" /* default */].loadComponentRetryLog, manifest.id, manifest.alias, currentRetryNumber, maxNumberRetries));
    }
    return _loadComponentImpl(manifest)
        .then(function (component) {
        sp_diagnostics_["_TraceLogger"].logVerbose(telemetryConstants["b" /* loadComponentLogSource */], sp_core_library_["Text"].format(SPLoader_resx["a" /* default */].loadComponentEndLog, manifest.id, manifest.alias, manifest.version));
        return component;
    })
        .catch(function (error) {
        _systemJsLoader.systemDelete(manifest);
        if (currentRetryNumber < maxNumberRetries) {
            return _loadComponentRetryStrategy(manifest, currentRetryNumber + 1, maxNumberRetries);
        }
        else {
            sp_diagnostics_["_TraceLogger"].logError(telemetryConstants["b" /* loadComponentLogSource */], new Error(sp_core_library_["Text"].format(SPLoader_resx["a" /* default */].loadComponentMaxRetriesError, manifest.id, manifest.alias, maxNumberRetries)));
            throw error;
        }
    });
}
function _loadComponentImpl(manifest) {
    try {
        _systemJsLoader.configure(manifest);
    }
    catch (error) {
        sp_diagnostics_["_TraceLogger"].logVerbose(telemetryConstants["b" /* loadComponentLogSource */], error.message, loadComponentImplEventName);
        return Promise.reject(error);
    }
    var componentDeps = [];
    var pathDeps = [];
    try {
        componentDeps = _loadComponentDependencies(manifest);
    }
    catch (error) {
        sp_diagnostics_["_TraceLogger"].logVerbose(telemetryConstants["b" /* loadComponentLogSource */], error.message, loadComponentImplEventName);
        return Promise.reject(error);
    }
    try {
        pathDeps = _loadPathDependencies(manifest);
    }
    catch (error) {
        sp_diagnostics_["_TraceLogger"].logVerbose(telemetryConstants["b" /* loadComponentLogSource */], error.message, loadComponentImplEventName);
        return Promise.reject(error);
    }
    return Promise.all(componentDeps.concat(pathDeps)).then(function (components) {
        if (!manifest.loaderConfig.entryModuleId) {
            _systemJsLoader.ensure(Object(normalizeName["a" /* default */])(manifest), {});
            return {};
        }
        return _loadEntryPoint(manifest).then(function (entryPoint) {
            _validateComponentIsNotEmptyOrThrow(entryPoint, manifest);
            return entryPoint;
        });
    }).catch(function (e) {
        throw ErrorBuilder["a" /* default */].buildLoadComponentError(manifest, e);
    });
}
function _validateComponentIsNotEmptyOrThrow(component, manifest) {
    if (Object(sp_lodash_subset_["isEmpty"])(component)) {
        throw ErrorBuilder["a" /* default */].buildLoadComponentReturnsEmptyError(manifest);
    }
    var defaultObject = component.default; 
    if (defaultObject && Object(sp_lodash_subset_["isEmpty"])(defaultObject) && !defaultObject.prototype) {
        throw ErrorBuilder["a" /* default */].buildLoadComponentReturnsDefaultEmptyError(manifest);
    }
}
function _loadComponentDependencies(manifest) {
    var depPromises = [];
    var resources = manifest.loaderConfig.scriptResources;
    var _loop_1 = function (name_1) {
        if (resources[name_1].type === 'component' && !resources[name_1].shouldNotPreload) {
            var moduleConfiguration_1 = resources[name_1];
            var resourceManifest = ManifestStore["a" /* default */].instance.tryGetManifest(moduleConfiguration_1.id, moduleConfiguration_1.version);
            if (resourceManifest) {
                var dep = loadComponent(resourceManifest, _systemJsLoader).catch(function (e) {
                    throw ErrorBuilder["a" /* default */].buildLoadComponentDependencyError(manifest, e);
                });
                depPromises.push(dep);
            }
            else {
                if (moduleConfiguration_1.failoverPath) {
                    var dep = _systemJsLoader.systemImport(Object(normalizeName["b" /* normalizeFailoverPathName */])(name_1))
                        .catch(function (e) {
                        return _processSystemImportErrors(manifest, name_1, [ResourceUrlChecker["a" /* default */].checkResourceUrl], function () { return ErrorBuilder["a" /* default */].buildLoadComponentDependencyFailoverPathError(manifest, name_1, Object(resolveAddress["b" /* resolvePath */])(moduleConfiguration_1.failoverPath), e); });
                    });
                    depPromises.push(dep);
                }
                else {
                    var dep = ManifestStore["a" /* default */].instance.requestManifest(moduleConfiguration_1.id, moduleConfiguration_1.version)
                        .then(function (m) { return loadComponent(m, _systemJsLoader); })
                        .catch(function (e) { return Promise.reject(ErrorBuilder["a" /* default */].buildManifestNotFoundError(moduleConfiguration_1)); });
                    depPromises.push(dep);
                }
            }
        }
    };
    for (var name_1 in resources) {
        _loop_1(name_1);
    }
    return depPromises;
}
function _loadPathDependencies(manifest) {
    var resources = manifest.loaderConfig.scriptResources;
    var loadedPathDependencies = new Map();
    for (var name_2 in resources) {
        if ((resources[name_2].type === 'path' || resources[name_2].type === 'localizedPath')
            && !resources[name_2].shouldNotPreload) {
            if (name_2 !== manifest.loaderConfig.entryModuleId) {
                _loadPathDependency(manifest, name_2, loadedPathDependencies);
            }
        }
    }
    var loadedPathDependenciesValues = [];
    loadedPathDependencies.forEach(function (value) {
        loadedPathDependenciesValues.push(value);
    });
    return loadedPathDependenciesValues;
}
function _loadPathDependency(manifest, name, loadedPathDependencies) {
    var loadedPathDependency = loadedPathDependencies.get(name);
    if (loadedPathDependency) {
        return loadedPathDependency;
    }
    var qosMonitor = new sp_diagnostics_["_QosMonitor"](telemetryConstants["d" /* loadPathDependencyQosScenarioName */]);
    var qosExtraData = {
        name: name,
        manifestId: manifest.id,
        version: manifest.version,
        alias: manifest.alias,
        isInternal: manifest.isInternal
    };
    sp_diagnostics_["_TraceLogger"].logVerbose(telemetryConstants["b" /* loadComponentLogSource */], sp_core_library_["Text"].format(SPLoader_resx["a" /* default */].loadPathDependencyLog, name, manifest.id, manifest.alias));
    var resources = manifest.loaderConfig.scriptResources;
    var pathConfig = resources[name];
    var loadPromise;
    if (pathConfig && pathConfig.globalDependencies) {
        var depPromises = pathConfig.globalDependencies.map(function (dep) { return _loadPathDependency(manifest, dep, loadedPathDependencies); });
        loadPromise = Promise.all(depPromises).then(function () {
            return _systemImportPathDependency(manifest, name);
        }, function () {
            throw ErrorBuilder["a" /* default */].buildLoadPathDependencyBlockedError(manifest, name);
        });
    }
    else {
        loadPromise = _systemImportPathDependency(manifest, name);
    }
    loadedPathDependencies.set(name, loadPromise);
    return loadPromise.then(function (load) {
        qosMonitor.writeSuccess(qosExtraData);
        return load;
    }, function (error) {
        qosMonitor.writeUnexpectedFailure(undefined, error, qosExtraData);
        throw error;
    });
}
function _systemImportPathDependency(manifest, name) {
    return _systemJsLoader.systemImport(Object(normalizeName["a" /* default */])(manifest, name)).catch(function (e) {
        return _processSystemImportErrors(manifest, name, [ResourceUrlChecker["a" /* default */].checkResourceUrl], function () { return ErrorBuilder["a" /* default */].buildLoadPathDependencyError(manifest, name, e); });
    });
}
function _loadEntryPoint(manifest) {
    var entryPointModule = _systemJsLoader.systemImport(Object(normalizeName["a" /* default */])(manifest)).catch(function (e) {
        return _processSystemImportErrors(manifest, manifest.loaderConfig.entryModuleId, [ResourceUrlChecker["a" /* default */].checkResourceUrl, _checkEntryPointDependenciesError], function () { return ErrorBuilder["a" /* default */].buildLoadEntryPointError(manifest, e); });
    });
    return entryPointModule.then(function (module) {
        return _getExportFromModule(manifest, module);
    });
}
function _processSystemImportErrors(manifest, name, errorProcessors, buildDefaultError) {
    return Promise.all(errorProcessors.map(function (errorProcessor) { return errorProcessor(manifest, name); }))
        .then(
    function () {
        throw buildDefaultError();
    }, function (e) { throw e; });
}
function _checkEntryPointDependenciesError(manifest, name) {
    var dependencies = _systemJsLoader.getDependencies(manifest);
    var resources = manifest.loaderConfig.scriptResources;
    dependencies.forEach(function (depName) {
        if (!resources[depName]) {
            throw ErrorBuilder["a" /* default */].buildModuleHasUndeclaredDependencyError(manifest, depName);
        }
    });
    return Promise.resolve();
}
function _getExportFromModule(manifest, module) {
    var retValue = module;
    if (manifest.loaderConfig.exportName) {
        retValue = module[manifest.loaderConfig.exportName];
        _systemJsLoader.ensure(Object(normalizeName["a" /* default */])(manifest, manifest.loaderConfig.exportName), retValue);
    }
    return retValue;
}
function _buildQosExtraData(manifest) {
    return {
        manifestId: manifest.id,
        version: manifest.version,
        alias: manifest.alias,
        isInternal: manifest.isInternal,
        isDebug: manifest._isDebug,
        loader: 'systemjs'
    };
}

// EXTERNAL MODULE: ./lib/utilities/react16RolloutHelper.js
var react16RolloutHelper = __webpack_require__(9);

// CONCATENATED MODULE: ./lib/systemjs/ComponentOverrider.js






var ComponentOverrider_ComponentOverrider = (function () {
    function ComponentOverrider() {
    }
    ComponentOverrider.overrideComponent = function (componentId, componentModule, serviceScope) {
        sp_core_library_["Validate"].isNotNullOrUndefined(componentModule, 'componentModule');
        var version = Object(react16RolloutHelper["b" /* getVersionIfNecessary */])(componentId);
        var manifest = ManifestStore["a" /* default */].instance.tryGetManifest(componentId, version);
        if (!manifest) {
            return;
        }
        if (Object(react16RolloutHelper["c" /* manifestHasWrongReactDependency */])(manifest)) {
            return;
        }
        var normalizedName = Object(normalizeName["a" /* default */])(manifest);
        serviceScope.consume(SystemJsLoader["a" /* default */].serviceKey).ensure(normalizedName, componentModule);
        ComponentStore["a" /* default */].instance.storeLoadedComponent(manifest.id, manifest.version, componentModule);
    };
    return ComponentOverrider;
}());
/* harmony default export */ var systemjs_ComponentOverrider = (ComponentOverrider_ComponentOverrider);

// CONCATENATED MODULE: ./lib/systemjs/SPSystemJsComponentLoader.js
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var SPSystemJsComponentLoader_SPSystemJsComponentLoader = (function (_super) {
    __extends(SPSystemJsComponentLoader, _super);
    function SPSystemJsComponentLoader(serviceScope) {
        var _this = _super.call(this, serviceScope) || this;
        _this._systemJsLoader = serviceScope.consume(SystemJsLoader["a" /* default */].serviceKey);
        return _this;
    }
    SPSystemJsComponentLoader.prototype.loadScript = function (url, options) {
        sp_core_library_["Validate"].isNonemptyString(url, 'url');
        if (typeof options === 'string') {
            throw ErrorBuilder["a" /* default */].buildLoadScriptWithStringError();
        }
        var globalMetaConfig = {
            meta: {}
        };
        globalMetaConfig.meta[url] = {
            scriptLoad: false
        };
        if (options) {
            if (options.globalExportsName) {
                globalMetaConfig.meta[url] = {
                    format: 'global',
                    exports: options.globalExportsName
                };
            }
        }
        this._systemJsLoader.systemConfig(globalMetaConfig);
        return this._systemJsLoader.systemImport(url);
    };
    SPSystemJsComponentLoader.prototype.loadComponent = function (manifest) {
        return loadComponent(manifest, this._systemJsLoader);
    };
    SPSystemJsComponentLoader.prototype._overrideComponent = function (componentId, componentModule) {
        systemjs_ComponentOverrider.overrideComponent(componentId, componentModule, this._serviceScope);
    };
    SPSystemJsComponentLoader.prototype._unloadComponent = function (manifest) {
        if (ComponentStore["a" /* default */].instance.tryGetComponent(manifest.id, manifest.version)) {
            ComponentStore["a" /* default */].instance.deleteComponent(manifest.id, manifest.version);
            this._systemJsLoader.systemDelete(manifest);
        }
    };
    SPSystemJsComponentLoader.prototype._listViewHostWorkaround = function (preloadedData) {
        if (preloadedData.clientSideApplicationId === 'b1ab4aaa-f779-405c-8683-d3a750b5d18d') {
            this._systemJsLoader._baseSystemConfig(SystemJsLoader["a" /* default */].pluginName,  false);
        }
    };
    return SPSystemJsComponentLoader;
}(BaseComponentLoader["a" /* BaseComponentLoader */]));
/* harmony default export */ var systemjs_SPSystemJsComponentLoader = __webpack_exports__["a"] = (SPSystemJsComponentLoader_SPSystemJsComponentLoader);


/***/ }),
/* 33 */
/***/ (function(module, exports) {

(function (global) {
  eval('/*\r\n * SystemJS v0.19.25\r\n */\r\n!function(){function e(){!function(e){function t(e,n){if("string"!=typeof e)throw new TypeError("URL must be a string");var r=String(e).replace(/^\\s+|\\s+$/g,"").match(/^([^:\\/?#]+:)?(?:\\/\\/(?:([^:@\\/?#]*)(?::([^:@\\/?#]*))?@)?(([^:\\/?#]*)(?::(\\d*))?))?([^?#]*)(\\?[^#]*)?(#[\\s\\S]*)?/);if(!r)throw new RangeError("Invalid URL format");var a=r[1]||"",o=r[2]||"",s=r[3]||"",i=r[4]||"",l=r[5]||"",u=r[6]||"",d=r[7]||"",c=r[8]||"",f=r[9]||"";if(void 0!==n){var m=n instanceof t?n:new t(n),p=!a&&!i&&!o;!p||d||c||(c=m.search),p&&"/"!==d[0]&&(d=d?(!m.host&&!m.username||m.pathname?"":"/")+m.pathname.slice(0,m.pathname.lastIndexOf("/")+1)+d:m.pathname);var h=[];d.replace(/^(\\.\\.?(\\/|$))+/,"").replace(/\\/(\\.(\\/|$))+/g,"/").replace(/\\/\\.\\.$/,"/../").replace(/\\/?[^\\/]*/g,function(e){"/.."===e?h.pop():h.push(e)}),d=h.join("").replace(/^\\//,"/"===d[0]?"/":""),p&&(u=m.port,l=m.hostname,i=m.host,s=m.password,o=m.username),a||(a=m.protocol)}"file:"==a&&(d=d.replace(/\\\\/g,"/")),this.origin=i?a+(""!==a||""!==i?"//":"")+i:"",this.href=a+(a&&i||"file:"==a?"//":"")+(""!==o?o+(""!==s?":"+s:"")+"@":"")+i+d+c+f,this.protocol=a,this.username=o,this.password=s,this.host=i,this.hostname=l,this.port=u,this.pathname=d,this.search=c,this.hash=f}e.URLPolyfill=t}("undefined"!=typeof self?self:global),function(e){function t(e,t){return e instanceof Error?(e.message=t+"\\n	"+e.message,Error.call(e,e.message)):e=t+"\\n	"+e,e}function n(e,n,r){try{new Function(e).call(r)}catch(a){throw t(a,"Evaluating "+n)}}function r(){}function a(t){this._loader={loaderObj:this,loads:[],modules:{},importPromises:{},moduleRecords:{}},z(this,"global",{get:function(){return e}})}function o(){a.call(this),this.paths={}}function s(e,t){var n,r="",a=0;for(var o in e){var s=o.split("*");if(s.length>2)throw new TypeError("Only one wildcard in a path is permitted");if(1==s.length){if(t==o)return e[o];if(t.substr(0,o.length-1)==o.substr(0,o.length-1)&&(t.length<o.length||t[o.length-1]==o[o.length-1])&&"/"==e[o][e[o].length-1])return e[o].substr(0,e[o].length-1)+(t.length>o.length?"/"+t.substr(o.length):"")}else{var i=s[0].length;i>=a&&t.substr(0,s[0].length)==s[0]&&t.substr(t.length-s[1].length)==s[1]&&(a=i,r=o,n=t.substr(s[0].length,t.length-s[1].length-s[0].length))}}var l=e[r];return"string"==typeof n&&(l=l.replace("*",n)),l}function i(){}function l(){o.call(this),J.call(this)}function u(){}function d(e,t){l.prototype[e]=t(l.prototype[e]||function(){})}function c(e){J=e(J||function(){})}function f(e){for(var t=[],n=[],r=0,a=e.length;a>r;r++){var o=I.call(t,e[r]);-1===o?(t.push(e[r]),n.push([r])):n[o].push(r)}return{names:t,indices:n}}function m(e){var t={};if("object"==typeof e||"function"==typeof e)if(C){var n;for(var r in e)(n=Object.getOwnPropertyDescriptor(e,r))&&z(t,r,n)}else{var a=e&&e.hasOwnProperty;for(var r in e)(!a||e.hasOwnProperty(r))&&(t[r]=e[r])}return t["default"]=e,z(t,"__useDefault",{value:!0}),t}function p(e,t,n){for(var r in t)n&&r in e||(e[r]=t[r]);return e}function h(e,t,n){for(var r in t){var a=t[r];r in e?a instanceof Array&&e[r]instanceof Array?e[r]=[].concat(n?a:e[r]).concat(n?e[r]:a):"object"==typeof a&&null!==a&&"object"==typeof e[r]?e[r]=p(p({},e[r]),a,n):n||(e[r]=a):e[r]=a}}function g(e){this.warnings&&"undefined"!=typeof console&&console.warn}function v(e,t){for(var n=e.split(".");n.length;)t=t[n.shift()];return t}function y(){if(H[this.baseURL])return H[this.baseURL];"/"!=this.baseURL[this.baseURL.length-1]&&(this.baseURL+="/");var e=new F(this.baseURL,L);return this.baseURL=e.href,H[this.baseURL]=e}function b(e,t){var n,r=0;for(var a in e)if(t.substr(0,a.length)==a&&(t.length==a.length||"/"==t[a.length])){var o=a.split("/").length;if(r>=o)continue;n=a,r=o}return n}function w(e){this.set("@system-env",this.newModule({browser:O,node:!!this._nodeRequire,production:e,"default":!0}))}function x(e){return("."!=e[0]||!!e[1]&&"/"!=e[1]&&"."!=e[1])&&"/"!=e[0]&&!e.match(B)}function S(e,t){return t&&(t=t.replace(/#/g,"%05")),new F(e,t||X).href.replace(/%05/g,"#")}function E(e,t){return new F(t,y.call(e)).href}function j(e,t){if(!x(e))return S(e,t);var n=b(this.map,e);if(n&&(e=this.map[n]+e.substr(n.length),!x(e)))return S(e);if(this.has(e))return e;if("@node/"==e.substr(0,6)&&-1!=Z.indexOf(e.substr(6))){if(!this._nodeRequire)throw new TypeError("Error loading "+e+". Can only load node core modules in Node.");return this.set(e,this.newModule(m(this._nodeRequire(e.substr(6))))),e}var r=s(this.paths,e);return r&&!x(r)?S(r):E(this,r||e)}function _(e){var t=e.match(V);return t&&"System.register"==e.substr(t[0].length,15)}function k(){return{name:null,deps:null,originalIndices:null,declare:null,execute:null,executingRequire:!1,declarative:!1,normalizedDeps:null,groupIndex:null,evaluated:!1,module:null,esModule:null,esmExports:!1}}function P(t){if("string"==typeof t)return v(t,e);if(!(t instanceof Array))throw new Error("Global exports must be a string or array.");for(var n={},r=!0,a=0;a<t.length;a++){var o=v(t[a],e);r&&(n["default"]=o,r=!1),n[t[a].split(".").pop()]=o}return n}var R="undefined"==typeof window&&"undefined"!=typeof self&&"undefined"!=typeof importScripts,O="undefined"!=typeof window&&"undefined"!=typeof document,M="undefined"!=typeof process&&"undefined"!=typeof process.platform&&!!process.platform.match(/^win/);e.console||(e.console={assert:function(){}});var z,I=Array.prototype.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1};!function(){try{Object.defineProperty({},"a",{})&&(z=Object.defineProperty)}catch(e){z=function(e,t,n){try{e[t]=n.value||n.get.call(e)}catch(r){}}}}();var L;if("undefined"!=typeof document&&document.getElementsByTagName){if(L=document.baseURI,!L){var A=document.getElementsByTagName("base");L=A[0]&&A[0].href||window.location.href}L=L.split("#")[0].split("?")[0],L=L.substr(0,L.lastIndexOf("/")+1)}else if("undefined"!=typeof process&&process.cwd)L="file://"+(M?"/":"")+process.cwd()+"/",M&&(L=L.replace(/\\\\/g,"/"));else{if("undefined"==typeof location)throw new TypeError("No environment baseURI");L=e.location.href}var F=e.URLPolyfill||e.URL;z(r.prototype,"toString",{value:function(){return"Module"}}),function(){function o(e){return{status:"loading",name:e,linkSets:[],dependencies:[],metadata:{}}}function s(e,t,n){return new Promise(c({step:n.address?"fetch":"locate",loader:e,moduleName:t,moduleMetadata:n&&n.metadata||{},moduleSource:n.source,moduleAddress:n.address}))}function i(e,t,n,r){return new Promise(function(a,o){a(e.loaderObj.normalize(t,n,r))}).then(function(t){var n;if(e.modules[t])return n=o(t),n.status="linked",n.module=e.modules[t],n;for(var r=0,a=e.loads.length;a>r;r++)if(n=e.loads[r],n.name==t)return n;return n=o(t),e.loads.push(n),l(e,n),n})}function l(e,t){u(e,t,Promise.resolve().then(function(){return e.loaderObj.locate({name:t.name,metadata:t.metadata})}))}function u(e,t,n){d(e,t,n.then(function(n){return"loading"==t.status?(t.address=n,e.loaderObj.fetch({name:t.name,metadata:t.metadata,address:n})):void 0}))}function d(t,r,a){a.then(function(a){return"loading"==r.status?Promise.resolve(t.loaderObj.translate({name:r.name,metadata:r.metadata,address:r.address,source:a})).then(function(e){return r.source=e,t.loaderObj.instantiate({name:r.name,metadata:r.metadata,address:r.address,source:e})}).then(function(a){if(void 0===a)return r.address=r.address||"<Anonymous Module "+ ++j+">",r.isDeclarative=!0,E.call(t.loaderObj,r).then(function(t){var a=e.System,o=a.register;a.register=function(e,t,n){"string"!=typeof e&&(n=t,t=e),r.declare=n,r.depsList=t},n(t,r.address,{}),a.register=o});if("object"!=typeof a)throw TypeError("Invalid instantiate return value");r.depsList=a.deps||[],r.execute=a.execute,r.isDeclarative=!1}).then(function(){r.dependencies=[];for(var e=r.depsList,n=[],a=0,o=e.length;o>a;a++)(function(e,a){n.push(i(t,e,r.name,r.address).then(function(t){if(r.dependencies[a]={key:e,value:t.name},"linked"!=t.status)for(var n=r.linkSets.concat([]),o=0,s=n.length;s>o;o++)m(n[o],t)}))})(e[a],a);return Promise.all(n)}).then(function(){r.status="loaded";for(var e=r.linkSets.concat([]),t=0,n=e.length;n>t;t++)h(e[t],r)}):void 0})["catch"](function(e){r.status="failed",r.exception=e;for(var t=r.linkSets.concat([]),n=0,a=t.length;a>n;n++)g(t[n],r,e)})}function c(e){return function(t,n){var r=e.loader,a=e.moduleName,s=e.step;if(r.modules[a])throw new TypeError(\'"\'+a+\'" already exists in the module table\');for(var i,c=0,m=r.loads.length;m>c;c++)if(r.loads[c].name==a&&(i=r.loads[c],"translate"!=s||i.source||(i.address=e.moduleAddress,d(r,i,Promise.resolve(e.moduleSource))),i.linkSets.length&&i.linkSets[0].loads[0].name==i.name))return i.linkSets[0].done.then(function(){t(i)});var p=i||o(a);p.metadata=e.moduleMetadata;var h=f(r,p);r.loads.push(p),t(h.done),"locate"==s?l(r,p):"fetch"==s?u(r,p,Promise.resolve(e.moduleAddress)):(p.address=e.moduleAddress,d(r,p,Promise.resolve(e.moduleSource)))}}function f(e,t){var n={loader:e,loads:[],startingLoad:t,loadingCount:0};return n.done=new Promise(function(e,t){n.resolve=e,n.reject=t}),m(n,t),n}function m(e,t){if("failed"!=t.status){for(var n=0,r=e.loads.length;r>n;n++)if(e.loads[n]==t)return;e.loads.push(t),t.linkSets.push(e),"loaded"!=t.status&&e.loadingCount++;for(var a=e.loader,n=0,r=t.dependencies.length;r>n;n++)if(t.dependencies[n]){var o=t.dependencies[n].value;if(!a.modules[o])for(var s=0,i=a.loads.length;i>s;s++)if(a.loads[s].name==o){m(e,a.loads[s]);break}}}}function p(e){var t=!1;try{w(e,function(n,r){g(e,n,r),t=!0})}catch(n){g(e,null,n),t=!0}return t}function h(e,t){if(e.loadingCount--,!(e.loadingCount>0)){var n=e.startingLoad;if(e.loader.loaderObj.execute===!1){for(var r=[].concat(e.loads),a=0,o=r.length;o>a;a++){var t=r[a];t.module=t.isDeclarative?{name:t.name,module:_({}),evaluated:!0}:{module:_({})},t.status="linked",v(e.loader,t)}return e.resolve(n)}var s=p(e);s||e.resolve(n)}}function g(e,n,r){var a=e.loader;e:if(n)if(e.loads[0].name==n.name)r=t(r,"Error loading "+n.name);else{for(var o=0;o<e.loads.length;o++)for(var s=e.loads[o],i=0;i<s.dependencies.length;i++){var l=s.dependencies[i];if(l.value==n.name){r=t(r,"Error loading "+n.name+\' as "\'+l.key+\'" from \'+s.name);break e}}r=t(r,"Error loading "+n.name+" from "+e.loads[0].name)}else r=t(r,"Error linking "+e.loads[0].name);for(var u=e.loads.concat([]),o=0,d=u.length;d>o;o++){var n=u[o];a.loaderObj.failed=a.loaderObj.failed||[],-1==I.call(a.loaderObj.failed,n)&&a.loaderObj.failed.push(n);var c=I.call(n.linkSets,e);if(n.linkSets.splice(c,1),0==n.linkSets.length){var f=I.call(e.loader.loads,n);-1!=f&&e.loader.loads.splice(f,1)}}e.reject(r)}function v(e,t){if(e.loaderObj.trace){e.loaderObj.loads||(e.loaderObj.loads={});var n={};t.dependencies.forEach(function(e){n[e.key]=e.value}),e.loaderObj.loads[t.name]={name:t.name,deps:t.dependencies.map(function(e){return e.key}),depMap:n,address:t.address,metadata:t.metadata,source:t.source,kind:t.isDeclarative?"declarative":"dynamic"}}t.name&&(e.modules[t.name]=t.module);var r=I.call(e.loads,t);-1!=r&&e.loads.splice(r,1);for(var a=0,o=t.linkSets.length;o>a;a++)r=I.call(t.linkSets[a].loads,t),-1!=r&&t.linkSets[a].loads.splice(r,1);t.linkSets.splice(0,t.linkSets.length)}function y(e,t,n){try{var a=t.execute()}catch(o){return void n(t,o)}return a&&a instanceof r?a:void n(t,new TypeError("Execution must define a Module instance"))}function b(e,t,n){var r=e._loader.importPromises;return r[t]=n.then(function(e){return r[t]=void 0,e},function(e){throw r[t]=void 0,e})}function w(e,t){var n=e.loader;if(e.loads.length)for(var r=e.loads.concat([]),a=0;a<r.length;a++){var o=r[a],s=y(e,o,t);if(!s)return;o.module={name:o.name,module:s},o.status="linked",v(n,o)}}function x(e,t){return t.module.module}function S(){}function E(){throw new TypeError("ES6 transpilation is only provided in the dev module loader build.")}var j=0;a.prototype={constructor:a,define:function(e,t,n){if(this._loader.importPromises[e])throw new TypeError("Module is already loading.");return b(this,e,new Promise(c({step:"translate",loader:this._loader,moduleName:e,moduleMetadata:n&&n.metadata||{},moduleSource:t,moduleAddress:n&&n.address})))},"delete":function(e){var t=this._loader;return delete t.importPromises[e],delete t.moduleRecords[e],t.modules[e]?delete t.modules[e]:!1},get:function(e){return this._loader.modules[e]?(S(this._loader.modules[e],[],this),this._loader.modules[e].module):void 0},has:function(e){return!!this._loader.modules[e]},"import":function(e,t,n){"object"==typeof t&&(t=t.name);var r=this;return Promise.resolve(r.normalize(e,t)).then(function(e){var t=r._loader;return t.modules[e]?(S(t.modules[e],[],t._loader),t.modules[e].module):t.importPromises[e]||b(r,e,s(t,e,{}).then(function(n){return delete t.importPromises[e],x(t,n)}))})},load:function(e){var t=this._loader;return t.modules[e]?Promise.resolve():t.importPromises[e]||b(this,e,new Promise(c({step:"locate",loader:t,moduleName:e,moduleMetadata:{},moduleSource:void 0,moduleAddress:void 0})).then(function(){delete t.importPromises[e]}))},module:function(e,t){var n=o();n.address=t&&t.address;var r=f(this._loader,n),a=Promise.resolve(e),s=this._loader,i=r.done.then(function(){return x(s,n)});return d(s,n,a),i},newModule:function(e){if("object"!=typeof e)throw new TypeError("Expected object");var t=new r,n=[];if(Object.getOwnPropertyNames&&null!=e)n=Object.getOwnPropertyNames(e);else for(var a in e)n.push(a);for(var o=0;o<n.length;o++)(function(n){z(t,n,{configurable:!1,enumerable:!0,get:function(){return e[n]},set:function(){throw new Error("Module exports cannot be changed externally.")}})})(n[o]);return Object.freeze&&Object.freeze(t),t},set:function(e,t){if(!(t instanceof r))throw new TypeError("Loader.set("+e+", module) must be a module");this._loader.modules[e]={module:t}},normalize:function(e,t,n){return e},locate:function(e){return e.name},fetch:function(e){},translate:function(e){return e.source},instantiate:function(e){}};var _=a.prototype.newModule}();var D;i.prototype=a.prototype,o.prototype=new i;var T;if("undefined"!=typeof XMLHttpRequest)T=function(e,t,n,r){function a(){n(s.responseText)}function o(){r(new Error("XHR error"+(s.status?" ("+s.status+(s.statusText?" "+s.statusText:"")+")":"")+" loading "+e))}var s=new XMLHttpRequest,i=!0,l=!1;if(!("withCredentials"in s)){var u=/^(\\w+:)?\\/\\/([^\\/]+)/.exec(e);u&&(i=u[2]===window.location.host,u[1]&&(i&=u[1]===window.location.protocol))}i||"undefined"==typeof XDomainRequest||(s=new XDomainRequest,s.onload=a,s.onerror=o,s.ontimeout=o,s.onprogress=function(){},s.timeout=0,l=!0),s.onreadystatechange=function(){4===s.readyState&&(0==s.status?s.responseText?a():(s.addEventListener("error",o),s.addEventListener("load",a)):200===s.status?a():o())},s.open("GET",e,!0),s.setRequestHeader&&(s.setRequestHeader("Accept","application/x-es-module, */*"),t&&("string"==typeof t&&s.setRequestHeader("Authorization",t),s.withCredentials=!0)),l?setTimeout(function(){s.send()},0):s.send(null)};else if("undefined"!=typeof require&&"undefined"!=typeof process){var q;T=function(e,t,n,r){if("file:///"!=e.substr(0,8))throw new Error(\'Unable to fetch "\'+e+\'". Only file URLs of the form file:/// allowed running in Node.\');return q=q||require("fs"),e=M?e.replace(/\\//g,"\\\\").substr(8):e.substr(7),q.readFile(e,function(e,t){if(e)return r(e);var a=t+"";"\\ufeff"===a[0]&&(a=a.substr(1)),n(a)})}}else{if("undefined"==typeof self||"undefined"==typeof self.fetch)throw new TypeError("No environment fetch API available.");T=function(e,t,n,r){var a={headers:{Accept:"application/x-es-module, */*"}};t&&("string"==typeof t&&(a.headers.Authorization=t),a.credentials="include"),fetch(e,a).then(function(e){if(e.ok)return e.text();throw new Error("Fetch error: "+e.status+" "+e.statusText)}).then(n,r)}}o.prototype.fetch=function(e){return new Promise(function(t,n){T(e.address,void 0,t,n)})};(function(){function t(t){var r=this;return Promise.resolve(e["typescript"==r.transpiler?"ts":r.transpiler]||(r.pluginLoader||r)["import"](r.transpiler)).then(function(e){e.__useDefault&&(e=e["default"]);var a;return a=e.Compiler?n:e.createLanguageService?s:o,"(function(__moduleName){"+a.call(r,t,e)+\'\\n})("\'+t.name+\'");\\n//# sourceURL=\'+t.address+"!transpiled"})}function n(e,t){var n=this.traceurOptions||{};n.modules="instantiate",n.script=!1,void 0===n.sourceMaps&&(n.sourceMaps="inline"),n.filename=e.address,n.inputSourceMap=e.metadata.sourceMap,n.moduleName=!1;var a=new t.Compiler(n);return r(e.source,a,n.filename)}function r(e,t,n){try{return t.compile(e,n)}catch(r){if(r.length)throw r[0];throw r}}function o(e,t){var n=this.babelOptions||{};return n.modules="system",void 0===n.sourceMap&&(n.sourceMap="inline"),n.inputSourceMap=e.metadata.sourceMap,n.filename=e.address,n.code=!0,n.ast=!1,t.transform(e.source,n).code}function s(e,t){var n=this.typescriptOptions||{};return n.target=n.target||t.ScriptTarget.ES5,void 0===n.sourceMap&&(n.sourceMap=!0),n.sourceMap&&n.inlineSourceMap!==!1&&(n.inlineSourceMap=!0),n.module=t.ModuleKind.System,t.transpile(e.source,n,e.address)}return a.prototype.transpiler="traceur",t})();u.prototype=o.prototype,l.prototype=new u,l.prototype.constructor=l,l.prototype.instantiate=function(){};var J,C=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(U){C=!1}var N,$=["main","format","defaultExtension","meta","map","basePath","depCache"];!function(){function n(e){var t=e.source.lastIndexOf("\\n"),n="global"!=e.metadata.format,r=e.metadata.sourceMap;if(r){if("object"!=typeof r)throw new TypeError("load.metadata.sourceMap must be set to an object.");r=JSON.stringify(r)}return(n?"(function(System, SystemJS, require) {":"")+e.source+(n?"\\n})(System, System);":"")+("\\n//# sourceURL="!=e.source.substr(t,15)?"\\n//# sourceURL="+e.address+(r?"!transpiled":""):"")+(r&&i&&"\\n//# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(r)))||"")}function r(t,n){s=n,0==u++&&(l=e.System),e.System=e.SystemJS=t}function a(){0==--u&&(e.System=e.SystemJS=l),s=void 0}function o(e){m||(m=document.head||document.body||document.documentElement);var o=document.createElement("script");o.text=n(e,!1);var s,i=window.onerror;if(window.onerror=function(n){s=t(n,"Evaluating "+e.address)},r(this,e),e.metadata.integrity&&o.setAttribute("integrity",e.metadata.integrity),e.metadata.nonce&&o.setAttribute("nonce",e.metadata.nonce),m.appendChild(o),m.removeChild(o),a(),window.onerror=i,s)throw s}var s,i="undefined"!=typeof btoa;d("pushRegister_",function(){return function(e){return s?(this.reduceRegister_(s,e),!0):!1}});var l,u=0;N=function(e){if(e.source){if((e.metadata.integrity||e.metadata.nonce)&&c)return o.call(this,e);try{r(this,e),s=e,(0,eval)(n(e)),a()}catch(i){throw a(),t(i,"Evaluating "+e.address)}}};var c=!1;if(O&&"undefined"!=typeof document&&document.getElementsByTagName){var f=document.getElementsByTagName("script");$__curScript=f[f.length-1],window.chrome&&window.chrome.extension||navigator.userAgent.match(/^Node\\.js/)||(c=!0)}var m}();var B=/^[^\\/]+:\\/\\//,H={},X=new F(L);c(function(e){return function(){e.call(this),this.baseURL=L.substr(0,L.lastIndexOf("/")+1),this.map={},this.paths={},this.warnings=!1,this.defaultJSExtensions=!1,this.pluginFirst=!1,this.loaderErrorStack=!1,this.set("@empty",this.newModule({})),w.call(this,!1)}}),"undefined"==typeof require||"undefined"==typeof process||process.browser||(l.prototype._nodeRequire=require);var Z=["assert","buffer","child_process","cluster","console","constants","crypto","dgram","dns","domain","events","fs","http","https","module","net","os","path","process","punycode","querystring","readline","repl","stream","string_decoder","sys","timers","tls","tty","url","util","vm","zlib"];d("normalize",function(e){return function(e,t,n){var r=j.call(this,e,t);return n||!this.defaultJSExtensions||".js"==r.substr(r.length-3,3)||x(r)||(r+=".js"),r}});var G="undefined"!=typeof XMLHttpRequest;d("locate",function(e){return function(t){return Promise.resolve(e.call(this,t)).then(function(e){return G?e.replace(/#/g,"%23"):e})}}),d("fetch",function(){return function(e){return new Promise(function(t,n){T(e.address,e.metadata.authorization,t,n)})}}),d("import",function(e){return function(t,n,r){return n&&n.name&&g.call(this,"SystemJS.import(name, { name: parentName }) is deprecated for SystemJS.import(name, parentName), while importing "+t+" from "+n.name),e.call(this,t,n,r).then(function(e){return e.__useDefault?e["default"]:e})}}),d("translate",function(e){return function(t){return"detect"==t.metadata.format&&(t.metadata.format=void 0),e.call(this,t)}}),d("instantiate",function(e){return function(e){if("json"==e.metadata.format&&!this.builder){var t=e.metadata.entry=k();t.deps=[],t.execute=function(){try{return JSON.parse(e.source)}catch(t){throw new Error("Invalid JSON file "+e.name)}}}}}),l.prototype.env="development";var W;l.prototype.config=function(e){function t(e){for(var t in e)if(hasOwnProperty.call(e,t))return!0}var n=this;if("loaderErrorStack"in e&&(W=$__curScript,e.loaderErrorStack?$__curScript=void 0:$__curScript=W),"warnings"in e&&(n.warnings=e.warnings),e.transpilerRuntime===!1&&(n._loader.loadedTranspilerRuntime=!0),e.baseURL){if(t(n.packages)||t(n.meta)||t(n.depCache)||t(n.bundles)||t(n.packageConfigPaths))throw new TypeError("Incorrect configuration order. The baseURL must be configured with the first SystemJS.config call.");n.baseURL=e.baseURL,y.call(n)}if(e.defaultJSExtensions&&(n.defaultJSExtensions=e.defaultJSExtensions,g.call(n,"The defaultJSExtensions configuration option is deprecated, use packages configuration instead.")),e.pluginFirst&&(n.pluginFirst=e.pluginFirst),e.production&&w.call(n,!0),e.paths)for(var r in e.paths)n.paths[r]=e.paths[r];if(e.map){var a="";for(var r in e.map){var o=e.map[r];if("string"!=typeof o){a+=(a.length?", ":"")+\'"\'+r+\'"\';var s=n.defaultJSExtensions&&".js"!=r.substr(r.length-3,3),i=n.decanonicalize(r);s&&".js"==i.substr(i.length-3,3)&&(i=i.substr(0,i.length-3));var l="";for(var u in n.packages)i.substr(0,u.length)==u&&(!i[u.length]||"/"==i[u.length])&&l.split("/").length<u.split("/").length&&(l=u);l&&n.packages[l].main&&(i=i.substr(0,i.length-n.packages[l].main.length-1));var u=n.packages[i]=n.packages[i]||{};u.map=o}else n.map[r]=o}a&&g.call(n,"The map configuration for "+a+\' uses object submaps, which is deprecated in global map.\\nUpdate this to use package contextual map with configs like SystemJS.config({ packages: { "\'+r+\'": { map: {...} } } }).\')}if(e.packageConfigPaths){for(var d=[],c=0;c<e.packageConfigPaths.length;c++){var f=e.packageConfigPaths[c],m=Math.max(f.lastIndexOf("*")+1,f.lastIndexOf("/")),s=n.defaultJSExtensions&&".js"!=f.substr(m-3,3),p=n.decanonicalize(f.substr(0,m));s&&".js"==p.substr(p.length-3,3)&&(p=p.substr(0,p.length-3)),d[c]=p+f.substr(m)}n.packageConfigPaths=d}if(e.bundles)for(var r in e.bundles){for(var v=[],c=0;c<e.bundles[r].length;c++){var s=n.defaultJSExtensions&&".js"!=e.bundles[r][c].substr(e.bundles[r][c].length-3,3),b=n.decanonicalize(e.bundles[r][c]);s&&".js"==b.substr(b.length-3,3)&&(b=b.substr(0,b.length-3)),v.push(b)}n.bundles[r]=v}if(e.packages)for(var r in e.packages){if(r.match(/^([^\\/]+:)?\\/\\/$/))throw new TypeError(\'"\'+r+\'" is not a valid package name.\');var i=j.call(n,r);"/"==i[i.length-1]&&(i=i.substr(0,i.length-1)),n.packages[i]=n.packages[i]||{};var u=e.packages[r];u.modules&&(g.call(n,"Package "+r+\' is configured with "modules", which is deprecated as it has been renamed to "meta".\'),u.meta=u.modules,delete u.modules),"object"==typeof u.main&&(u.map=u.map||{},u.map["./@main"]=u.main,u.main["default"]=u.main["default"]||"./",u.main="@main");for(var S in u)-1==I.call($,S)&&g.call(n,\'"\'+S+\'" is not a valid package configuration option in package \'+r);h(n.packages[i],u)}for(var E in e){var o=e[E];if("baseURL"!=E&&"map"!=E&&"packages"!=E&&"bundles"!=E&&"paths"!=E&&"warnings"!=E&&"packageConfigPaths"!=E&&"loaderErrorStack"!=E)if("object"!=typeof o||o instanceof Array)n[E]=o;else{n[E]=n[E]||{};for(var r in o)if("meta"==E&&"*"==r[0])n[E][r]=o[r];else if("meta"==E){var _=j.call(n,r);n.defaultJSExtensions&&".js"!=_.substr(_.length-3,3)&&!x(_)&&(_+=".js"),n[E][_]=o[r]}else if("depCache"==E){var s=n.defaultJSExtensions&&".js"!=r.substr(r.length-3,3),i=n.decanonicalize(r);s&&".js"==i.substr(i.length-3,3)&&(i=i.substr(0,i.length-3)),n[E][i]=o[r]}else n[E][r]=o[r]}}},function(){function e(e,t){var n,r,a=0;for(var o in e.packages)t.substr(0,o.length)!==o||t.length!==o.length&&"/"!==t[o.length]||(r=o.split("/").length,r>a&&(n=o,a=r));return n}function t(e,t,n,r,a){if(!r||"/"==r[r.length-1]||a||t.defaultExtension===!1)return r;if(r.match(interpolationRegEx))return r;var o=!1;if(t.meta&&p(t.meta,r,function(e,t,n){return 0==n||e.lastIndexOf("*")!=e.length-1?o=!0:void 0}),!o&&e.meta&&p(e.meta,n+"/"+r,function(e,t,n){return 0==n||e.lastIndexOf("*")!=e.length-1?o=!0:void 0}),o)return r;var s="."+(t.defaultExtension||"js");return r.substr(r.length-s.length)!=s?r+s:r}function n(e,n,r,o,s){if(!o){if(!n.main)return r+(e.defaultJSExtensions?".js":"");o="./"==n.main.substr(0,2)?n.main.substr(2):n.main}if(n.map){var i="./"+o,l=b(n.map,i);if(l||(i="./"+t(e,n,r,o,s),i!="./"+o&&(l=b(n.map,i))),l)return a(e,n,r,l,i,s)}return r+"/"+t(e,n,r,o,s)}function r(e,t,n){if("."==e)throw new Error("Package "+n+\' has a map entry for "." which is not permitted.\');if(t.substr(0,e.length)==e&&"/"!=e[e.length-1]&&"/"==t[e.length])throw new Error("Package "+n+\' has a recursive map for "\'+e+\'" which is not permitted.\')}function a(e,n,a,o,s,i){var l=n.map[o];if("object"==typeof l)throw new Error("Synchronous conditional normalization not supported sync normalizing "+o+" in "+a);if(r(o,l,a),"string"!=typeof l&&(l=o=s),r(o,l,a),"."==l)l=a;else if("./"==l.substr(0,2))return a+"/"+t(e,n,a,l.substr(2)+s.substr(o.length),i);return e.normalizeSync(l+s.substr(o.length),a+"/")}function o(e,n,r,a,o){if(!a){if(!n.main)return Promise.resolve(r+(e.defaultJSExtensions?".js":""));a="./"==n.main.substr(0,2)?n.main.substr(2):n.main}var s,l;return n.map&&(s="./"+a,l=b(n.map,s),l||(s="./"+t(e,n,r,a,o),s!="./"+a&&(l=b(n.map,s)))),(l?i(e,n,r,l,s,o):Promise.resolve()).then(function(s){return s?Promise.resolve(s):Promise.resolve(r+"/"+t(e,n,r,a,o))})}function s(e,n,r,a,o,s,i){if("."==o)o=r;else if("./"==o.substr(0,2))return Promise.resolve(r+"/"+t(e,n,r,o.substr(2)+s.substr(a.length),i)).then(function(t){return interpolateConditional.call(e,t,r+"/")});return e.normalize(o+s.substr(a.length),r+"/")}function i(e,t,n,a,o,i){var l=t.map[a];return"string"==typeof l?(r(a,l,n),s(e,t,n,a,l,o,i)):e.builder?Promise.resolve(n+"/#:"+o):e["import"](t.map["@env"]||"@system-env",n).then(function(e){for(var t in l){var n="~"==t[0],r=v(n?t.substr(1):t,e);if(!n&&r||n&&!r)return l[t]}}).then(function(l){if(l){if("string"!=typeof l)throw new Error("Unable to map a package conditional to a package conditional.");return r(a,l,n),s(e,t,n,a,l,o,i)}})}function u(e){var t=e.lastIndexOf("*"),n=Math.max(t+1,e.lastIndexOf("/"));return{length:n,regEx:new RegExp("^("+e.substr(0,n).replace(/[.+?^${}()|[\\]\\\\]/g,"\\\\$&").replace(/\\*/g,"[^\\\\/]+")+")(\\\\/|$)"),wildcard:-1!=t}}function f(e,t){for(var n,r,a=!1,o=0;o<e.packageConfigPaths.length;o++){var s=e.packageConfigPaths[o],i=y[s]||(y[s]=u(s));if(!(t.length<i.length)){var l=t.match(i.regEx);!l||n&&(a&&i.wildcard||!(n.length<l[1].length))||(n=l[1],a=!i.wildcard,r=n+s.substr(i.length))}}return n?{packageName:n,configPath:r}:void 0}function m(e,t,n){var r=e.pluginLoader||e;return(r.meta[n]=r.meta[n]||{}).format="json",r.load(n).then(function(){var a=r.get(n)["default"];a.systemjs&&(a=a.systemjs),a.modules&&(a.meta=a.modules,g.call(e,"Package config file "+n+\' is configured with "modules", which is deprecated as it has been renamed to "meta".\'));for(var o in a)-1==I.call($,o)&&delete a[o];var s=e.packages[t]=e.packages[t]||{};if(h(s,a,!0),a.depCache){for(var i in a.depCache){var l;l="./"==i.substr(0,2)?t+"/"+i.substr(2):j.call(e,i),e.depCache[l]=(e.depCache[l]||[]).concat(a.depCache[i])}delete a.depCache}return"object"==typeof s.main&&(s.map=s.map||{},s.map["./@main"]=s.main,s.main["default"]=s.main["default"]||"./",s.main="@main"),s})}function p(e,t,n){var r;for(var a in e){var o="./"==a.substr(0,2)?"./":"";if(o&&(a=a.substr(2)),r=a.indexOf("*"),-1!==r&&a.substr(0,r)==t.substr(0,r)&&a.substr(r+1)==t.substr(t.length-a.length+r+1)&&n(a,e[o+a],a.split("/").length))return}var s=e[t]&&e.hasOwnProperty&&e.hasOwnProperty(t)?e[t]:e["./"+t];s&&n(s,s,0)}c(function(e){return function(){e.call(this),this.packages={},this.packageConfigPaths=[]}}),l.prototype.normalizeSync=l.prototype.decanonicalize=l.prototype.normalize,d("decanonicalize",function(t){return function(n,r){if(this.builder)return t.call(this,n,r,!0);var a=t.call(this,n,r);if(!this.defaultJSExtensions)return a;var o=e(this,a),s=this.packages[o],i=s&&s.defaultExtension;return void 0==i&&s&&s.meta&&p(s.meta,a.substr(o),function(e,t,n){return 0==n||e.lastIndexOf("*")!=e.length-1?(i=!1,!0):void 0}),(i===!1||i&&".js"!=i)&&".js"!=n.substr(n.length-3,3)&&".js"==a.substr(a.length-3,3)&&(a=a.substr(0,a.length-3)),a}}),d("normalizeSync",function(t){return function(r,o,s){g.call(this,"SystemJS.normalizeSync has been deprecated for SystemJS.decanonicalize.");var i=this;if(s=s===!0,o)var l=e(i,o)||i.defaultJSExtensions&&".js"==o.substr(o.length-3,3)&&e(i,o.substr(0,o.length-3));var u=l&&i.packages[l];if(u&&"."!=r[0]){var d=u.map,c=d&&b(d,r);if(c&&"string"==typeof d[c])return a(i,u,l,c,r,s)}var m=i.defaultJSExtensions&&".js"!=r.substr(r.length-3,3),p=t.call(i,r,o);m&&".js"!=p.substr(p.length-3,3)&&(m=!1),m&&(p=p.substr(0,p.length-3));var h=f(i,p),v=h&&h.packageName||e(i,p);if(!v)return p+(m?".js":"");var y=p.substr(v.length+1);return n(i,i.packages[v]||{},v,y,s)}}),d("normalize",function(t){return function(n,r,a){var s=this;return a=a===!0,Promise.resolve().then(function(){if(r)var t=e(s,r)||s.defaultJSExtensions&&".js"==r.substr(r.length-3,3)&&e(s,r.substr(0,r.length-3));var o=t&&s.packages[t];if(o&&"./"!=n.substr(0,2)){var l=o.map,u=l&&b(l,n);if(u)return i(s,o,t,u,n,a)}return Promise.resolve()}).then(function(i){if(i)return i;var l=s.defaultJSExtensions&&".js"!=n.substr(n.length-3,3),u=t.call(s,n,r);l&&".js"!=u.substr(u.length-3,3)&&(l=!1),l&&(u=u.substr(0,u.length-3));var d=f(s,u),c=d&&d.packageName||e(s,u);if(!c)return Promise.resolve(u+(l?".js":""));var p=s.packages[c],h=p&&(p.configured||!d);return(h?Promise.resolve(p):m(s,c,d.configPath)).then(function(e){var t=u.substr(c.length+1);return o(s,e,c,t,a)})})}});var y={};d("locate",function(t){return function(n){var r=this;return Promise.resolve(t.call(this,n)).then(function(t){var a=e(r,n.name);if(a){var o=r.packages[a],s=n.name.substr(a.length+1);o.format&&(n.metadata.format=n.metadata.format||o.format);var i={};if(o.meta){var l=0;p(o.meta,s,function(e,t,n){n>l&&(l=n),h(i,t,n&&l>n)}),h(n.metadata,i)}}return t})}})}(),function(){function t(){if(s&&"interactive"===s.script.readyState)return s.load;for(var e=0;e<u.length;e++)if("interactive"==u[e].script.readyState)return s=u[e],s.load}function n(e,t){return new Promise(function(e,n){t.metadata.integrity&&n(new Error("Subresource integrity checking is not supported in web workers.")),i=t;try{importScripts(t.address)}catch(r){i=null,n(r)}i=null,t.metadata.entry||n(new Error(t.address+" did not call System.register or AMD define")),e("")})}if("undefined"!=typeof document)var r=document.getElementsByTagName("head")[0];var a,o,s,i=null,l=r&&function(){var e=document.createElement("script"),t="undefined"!=typeof opera&&"[object Opera]"===opera.toString();return e.attachEvent&&!(e.attachEvent.toString&&e.attachEvent.toString().indexOf("[native code")<0)&&!t}(),u=[],c=0,f=[];d("pushRegister_",function(e){return function(n){return e.call(this,n)?!1:(i?this.reduceRegister_(i,n):l?this.reduceRegister_(t(),n):c?f.push(n):this.reduceRegister_(null,n),!0)}}),d("fetch",function(t){return function(i){var d=this;return"json"!=i.metadata.format&&i.metadata.scriptLoad&&(O||R)?R?n(d,i):new Promise(function(t,n){function m(e){if(!g.readyState||"loaded"==g.readyState||"complete"==g.readyState){\r\nif(c--,i.metadata.entry||f.length){if(!l){for(var r=0;r<f.length;r++)d.reduceRegister_(i,f[r]);f=[]}}else d.reduceRegister_(i);h(),i.metadata.entry||i.metadata.bundle||n(new Error(i.name+" did not call System.register or AMD define. If loading a global module configure the global name via the meta exports property for script injection support.")),t("")}}function p(e){h(),n(new Error("Unable to load script "+i.address))}function h(){if(e.System=a,e.require=o,g.detachEvent){g.detachEvent("onreadystatechange",m);for(var t=0;t<u.length;t++)u[t].script==g&&(s&&s.script==g&&(s=null),u.splice(t,1))}else g.removeEventListener("load",m,!1),g.removeEventListener("error",p,!1);r.removeChild(g)}var g=document.createElement("script");g.async=!0,i.metadata.crossOrigin&&(g.crossOrigin=i.metadata.crossOrigin),i.metadata.integrity&&g.setAttribute("integrity",i.metadata.integrity),l?(g.attachEvent("onreadystatechange",m),u.push({script:g,load:i})):(g.addEventListener("load",m,!1),g.addEventListener("error",p,!1)),c++,a=e.System,o=e.require,g.src=i.address,r.appendChild(g)}):t.call(this,i)}})}();var V=/^(\\s*\\/\\*[^\\*]*(\\*(?!\\/)[^\\*]*)*\\*\\/|\\s*\\/\\/[^\\n]*|\\s*"[^"]+"\\s*;?|\\s*\'[^\']+\'\\s*;?)*\\s*/;!function(){function t(e,n,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==I.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var a=0,o=e.normalizedDeps.length;o>a;a++){var s=e.normalizedDeps[a],i=n.defined[s];if(i&&!i.evaluated){var l=e.groupIndex+(i.declarative!=e.declarative);if(null===i.groupIndex||i.groupIndex<l){if(null!==i.groupIndex&&(r[i.groupIndex].splice(I.call(r[i.groupIndex],i),1),0==r[i.groupIndex].length))throw new Error("Mixed dependency cycle detected");i.groupIndex=l}t(i,n,r)}}}}function n(e,n){var r=n.defined[e];if(!r.module){r.groupIndex=0;var a=[];t(r,n,a);for(var o=!!r.declarative==a.length%2,i=a.length-1;i>=0;i--){for(var l=a[i],d=0;d<l.length;d++){var c=l[d];o?s(c,n):u(c,n)}o=!o}}}function a(){}function o(e,t){return t[e]||(t[e]={name:e,dependencies:[],exports:new a,importers:[]})}function s(t,n){if(!t.module){var r=n._loader.moduleRecords,a=t.module=o(t.name,r),i=t.module.exports,l=t.declare.call(e,function(e,t){if(a.locked=!0,"object"==typeof e)for(var n in e)i[n]=e[n];else i[e]=t;for(var r=0,o=a.importers.length;o>r;r++){var s=a.importers[r];if(!s.locked){var l=I.call(s.dependencies,a);s.setters[l](i)}}return a.locked=!1,t},{id:t.name});if(a.setters=l.setters,a.execute=l.execute,!a.setters||!a.execute)throw new TypeError("Invalid System.register form for "+t.name);for(var u=0,d=t.normalizedDeps.length;d>u;u++){var c,f=t.normalizedDeps[u],m=n.defined[f],p=r[f];p?c=p.exports:m&&!m.declarative?c=m.esModule:m?(s(m,n),p=m.module,c=p.exports):c=n.get(f),p&&p.importers?(p.importers.push(a),a.dependencies.push(p)):a.dependencies.push(null);for(var h=t.originalIndices[u],g=0,v=h.length;v>g;++g){var y=h[g];a.setters[y]&&a.setters[y](c)}}}}function i(e,t){var n,r=t.defined[e];if(r)r.declarative?p(e,[],t):r.evaluated||u(r,t),n=r.module.exports;else if(n=t.get(e),!n)throw new Error("Unable to load dependency "+e+".");return(!r||r.declarative)&&n&&n.__useDefault?n["default"]:n}function u(t,n){if(!t.module){var a={},o=t.module={exports:a,id:t.name};if(!t.executingRequire)for(var s=0,l=t.normalizedDeps.length;l>s;s++){var d=t.normalizedDeps[s],c=n.defined[d];c&&u(c,n)}t.evaluated=!0;var f=t.execute.call(e,function(e){for(var r=0,a=t.deps.length;a>r;r++)if(t.deps[r]==e)return i(t.normalizedDeps[r],n);var o=n.normalizeSync(e,t.name);if(-1!=I.call(t.normalizedDeps,o))return i(o,n);throw new Error("Module "+e+" not declared as a dependency of "+t.name)},a,o);f&&(o.exports=f),a=o.exports,a&&(a.__esModule||a instanceof r)?t.esModule=a:t.esmExports&&a!==e?t.esModule=m(a):t.esModule={"default":a}}}function p(t,n,r){var a=r.defined[t];if(a&&!a.evaluated&&a.declarative){n.push(t);for(var o=0,s=a.normalizedDeps.length;s>o;o++){var i=a.normalizedDeps[o];-1==I.call(n,i)&&(r.defined[i]?p(i,n,r):r.get(i))}a.evaluated||(a.evaluated=!0,a.module.execute.call(e))}}l.prototype.register=function(e,t,n){if("string"!=typeof e&&(n=t,t=e,e=null),"boolean"==typeof n)return this.registerDynamic.apply(this,arguments);var r=k();r.name=e&&(this.decanonicalize||this.normalize).call(this,e),r.declarative=!0,r.deps=t,r.declare=n,this.pushRegister_({amd:!1,entry:r})},l.prototype.registerDynamic=function(e,t,n,r){"string"!=typeof e&&(r=n,n=t,t=e,e=null);var a=k();a.name=e&&(this.decanonicalize||this.normalize).call(this,e),a.deps=t,a.execute=r,a.executingRequire=n,this.pushRegister_({amd:!1,entry:a})},d("reduceRegister_",function(){return function(e,t){if(t){var n=t.entry,r=e&&e.metadata;if(n.name&&(n.name in this.defined||(this.defined[n.name]=n),r&&(r.bundle=!0)),!n.name||e&&n.name==e.name){if(!r)throw new TypeError("Invalid System.register call. Anonymous System.register calls can only be made by modules loaded by SystemJS.import and not via script tags.");if(r.entry)throw"register"==r.format?new Error("Multiple anonymous System.register calls in module "+e.name+". If loading a bundle, ensure all the System.register calls are named."):new Error("Module "+e.name+" interpreted as "+r.format+" module format, but called System.register.");r.format||(r.format="register"),r.entry=n}}}}),c(function(e){return function(){e.call(this),this.defined={},this._loader.moduleRecords={}}}),z(a,"toString",{value:function(){return"Module"}}),d("delete",function(e){return function(t){return delete this._loader.moduleRecords[t],delete this.defined[t],e.call(this,t)}}),d("fetch",function(e){return function(t){return this.defined[t.name]?(t.metadata.format="defined",""):(t.metadata.deps=t.metadata.deps||[],e.call(this,t))}}),d("translate",function(e){return function(t){return t.metadata.deps=t.metadata.deps||[],Promise.resolve(e.call(this,t)).then(function(e){return("register"==t.metadata.format||!t.metadata.format&&_(t.source))&&(t.metadata.format="register"),e})}}),d("instantiate",function(e){return function(t){"detect"==t.metadata.format&&(t.metadata.format=void 0),e.call(this,t);var r,a=this;if(a.defined[t.name])r=a.defined[t.name],r.declarative||(r.deps=r.deps.concat(t.metadata.deps));else if(t.metadata.entry)r=t.metadata.entry,r.deps=r.deps.concat(t.metadata.deps);else if(!(a.builder&&t.metadata.bundle||"register"!=t.metadata.format&&"esm"!=t.metadata.format&&"es6"!=t.metadata.format)){if("undefined"!=typeof N&&N.call(a,t),!t.metadata.entry&&!t.metadata.bundle)throw new Error(t.name+" detected as "+t.metadata.format+" but didn\'t execute.");r=t.metadata.entry,r&&t.metadata.deps&&(r.deps=r.deps.concat(t.metadata.deps))}r||(r=k(),r.deps=t.metadata.deps,r.execute=function(){}),a.defined[t.name]=r;var o=f(r.deps);r.deps=o.names,r.originalIndices=o.indices,r.name=t.name,r.esmExports=t.metadata.esmExports!==!1;for(var s=[],i=0,l=r.deps.length;l>i;i++)s.push(Promise.resolve(a.normalize(r.deps[i],t.name)));return Promise.all(s).then(function(e){return r.normalizedDeps=e,{deps:r.deps,execute:function(){return n(t.name,a),p(t.name,[],a),a.defined[t.name]=void 0,a.newModule(r.declarative?r.module.exports:r.esModule)}}})}})}();var K="undefined"!=typeof self?"self":"global";d("fetch",function(e){return function(t){return t.metadata.exports&&!t.metadata.format&&(t.metadata.format="global"),e.call(this,t)}}),d("instantiate",function(e){return function(t){var n=this;if(t.metadata.format||(t.metadata.format="global"),"global"==t.metadata.format&&!t.metadata.registered){var r=k();t.metadata.entry=r,r.deps=[];for(var a in t.metadata.globals){var o=t.metadata.globals[a];o&&r.deps.push(o)}r.execute=function(e,r,a){var o;if(t.metadata.globals){o={};for(var s in t.metadata.globals)t.metadata.globals[s]&&(o[s]=e(t.metadata.globals[s]))}var i=t.metadata.exports;i&&(t.source+="\\n"+K+\'["\'+i+\'"] = \'+i+";");var l=n.get("@@global-helpers").prepareGlobal(a.id,i,o);try{N.call(n,t)}catch(u){throw l(),u}return l()}}return e.call(this,t)}}),d("reduceRegister_",function(e){return function(t,n){if(n||!t.metadata.exports)return e.call(this,t,n);t.metadata.format="global";var r=t.metadata.entry=k();r.deps=t.metadata.deps;var a=P(t.metadata.exports);r.execute=function(){return a}}}),c(function(t){return function(){function n(t){if(Object.keys)Object.keys(e).forEach(t);else for(var n in e)s.call(e,n)&&t(n)}function r(t){n(function(n){if(-1==I.call(i,n)){try{var r=e[n]}catch(a){i.push(n)}t(n,r)}})}var a=this;t.call(a);var o,s=Object.prototype.hasOwnProperty,i=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];a.set("@@global-helpers",a.newModule({prepareGlobal:function(t,n,a){var s=e.define;e.define=void 0;var i;if(a){i={};for(var l in a)i[l]=e[l],e[l]=a[l]}return n||(o={},r(function(e,t){o[e]=t})),function(){var t;if(n)t=P(n);else{t={};var a,l;r(function(e,n){o[e]!==n&&"undefined"!=typeof n&&(t[e]=n,"undefined"!=typeof a?l||a===n||(l=!0):a=n)}),t=l?t:a}if(i)for(var u in i)e[u]=i[u];return e.define=s,t}}}))}}),function(){function t(e){function t(e,t){for(var n=0;n<e.length;n++)if(e[n][0]<t.index&&e[n][1]>t.index)return!0;return!1}r.lastIndex=a.lastIndex=o.lastIndex=0;var n,s=[],i=[],l=[];if(e.length/e.split("\\n").length<200){for(;n=o.exec(e);)i.push([n.index,n.index+n[0].length]);for(;n=a.exec(e);)t(i,n)||l.push([n.index,n.index+n[0].length])}for(;n=r.exec(e);)if(!t(i,n)&&!t(l,n)){var u=n[1].substr(1,n[1].length-2);if(u.match(/"|\'/))continue;"/"==u[u.length-1]&&(u=u.substr(0,u.length-1)),s.push(u)}return s}var n=/(?:^\\uFEFF?|[^$_a-zA-Z\\xA0-\\uFFFF.])(exports\\s*(\\[[\'"]|\\.)|module(\\.exports|\\[\'exports\'\\]|\\["exports"\\])\\s*(\\[[\'"]|[=,\\.]))/,r=/(?:^\\uFEFF?|[^$_a-zA-Z\\xA0-\\uFFFF."\'])require\\s*\\(\\s*("[^"\\\\]*(?:\\\\.[^"\\\\]*)*"|\'[^\'\\\\]*(?:\\\\.[^\'\\\\]*)*\')\\s*\\)/g,a=/(^|[^\\\\])(\\/\\*([\\s\\S]*?)\\*\\/|([^:]|^)\\/\\/(.*)$)/gm,o=/("[^"\\\\\\n\\r]*(\\\\.[^"\\\\\\n\\r]*)*"|\'[^\'\\\\\\n\\r]*(\\\\.[^\'\\\\\\n\\r]*)*\')/g,s=/^\\#\\!.*/;d("instantiate",function(a){return function(o){var i=this;if(o.metadata.format||(n.lastIndex=0,r.lastIndex=0,(r.exec(o.source)||n.exec(o.source))&&(o.metadata.format="cjs")),"cjs"==o.metadata.format){var l=o.metadata.deps,u=o.metadata.cjsRequireDetection===!1?[]:t(o.source);for(var d in o.metadata.globals)o.metadata.globals[d]&&u.push(o.metadata.globals[d]);var c=k();o.metadata.entry=c,c.deps=u,c.executingRequire=!0,c.execute=function(t,n,r){function a(e){return"/"==e[e.length-1]&&(e=e.substr(0,e.length-1)),t.apply(this,arguments)}if(a.resolve=function(e){return i.get("@@cjs-helpers").requireResolve(e,r.id)},!o.metadata.cjsDeferDepsExecute)for(var u=0;u<l.length;u++)a(l[u]);var d=i.get("@@cjs-helpers").getPathVars(r.id),c={exports:n,args:[a,n,r,d.filename,d.dirname,e,e]},f="(function(require, exports, module, __filename, __dirname, global, GLOBAL";if(o.metadata.globals)for(var m in o.metadata.globals)c.args.push(a(o.metadata.globals[m])),f+=", "+m;var p=e.define;e.define=void 0,e.__cjsWrapper=c,o.source=f+") {"+o.source.replace(s,"")+"\\n}).apply(__cjsWrapper.exports, __cjsWrapper.args);",N.call(i,o),e.__cjsWrapper=void 0,e.define=p}}return a.call(i,o)}})}(),c(function(e){return function(){function t(e){return"file:///"==e.substr(0,8)?e.substr(7+!!M):r&&e.substr(0,r.length)==r?e.substr(r.length):e}var n=this;if(e.call(n),"undefined"!=typeof window&&"undefined"!=typeof document&&window.location)var r=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");n.set("@@cjs-helpers",n.newModule({requireResolve:function(e,r){return t(n.normalizeSync(e,r))},getPathVars:function(e){var n,r=e.lastIndexOf("!");n=-1!=r?e.substr(0,r):e;var a=n.split("/");return a.pop(),a=a.join("/"),{filename:t(n),dirname:t(a)}}}))}}),d("fetch",function(t){return function(n){return n.metadata.scriptLoad&&O&&(e.define=this.amdDefine),t.call(this,n)}}),c(function(t){return function(){function n(e,t){e=e.replace(s,"");var n=e.match(u),r=(n[1].split(",")[t]||"require").replace(c,""),a=f[r]||(f[r]=new RegExp(i+r+l,"g"));a.lastIndex=0;for(var o,d=[];o=a.exec(e);)d.push(o[2]||o[3]);return d}function r(e,t,n,a){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof t&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var s=o.defaultJSExtensions&&".js"!=e.substr(e.length-3,3),i=o.decanonicalize(e,a);s&&".js"==i.substr(i.length-3,3)&&(i=i.substr(0,i.length-3));var l=o.get(i);if(!l)throw new Error(\'Module not already loaded loading "\'+e+\'" as \'+i+(a?\' from "\'+a+\'".\':"."));return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var u=[],d=0;d<e.length;d++)u.push(o["import"](e[d],a));Promise.all(u).then(function(e){t&&t.apply(null,e)},n)}function a(t,a,s){function i(t,n,i){function c(e,n,a){return"string"==typeof e&&"function"!=typeof n?t(e):r.call(o,e,n,a,i.id)}for(var f=[],m=0;m<a.length;m++)f.push(t(a[m]));i.uri=i.id,i.config=function(){},-1!=d&&f.splice(d,0,i),-1!=u&&f.splice(u,0,n),-1!=l&&(c.toUrl=function(e){var t=o.defaultJSExtensions&&".js"!=e.substr(e.length-3,3),n=o.decanonicalize(e,i.id);return t&&".js"==n.substr(n.length-3,3)&&(n=n.substr(0,n.length-3)),n},f.splice(l,0,c));var p=e.require;e.require=r;var h=s.apply(-1==u?e:n,f);return e.require=p,"undefined"==typeof h&&i&&(h=i.exports),"undefined"!=typeof h?h:void 0}"string"!=typeof t&&(s=a,a=t,t=null),a instanceof Array||(s=a,a=["require","exports","module"].splice(0,s.length)),"function"!=typeof s&&(s=function(e){return function(){return e}}(s)),void 0===a[a.length-1]&&a.pop();var l,u,d;-1!=(l=I.call(a,"require"))&&(a.splice(l,1),t||(a=a.concat(n(s.toString(),l)))),-1!=(u=I.call(a,"exports"))&&a.splice(u,1),-1!=(d=I.call(a,"module"))&&a.splice(d,1);var c=k();c.name=t&&(o.decanonicalize||o.normalize).call(o,t),c.deps=a,c.execute=i,o.pushRegister_({amd:!0,entry:c})}var o=this;t.call(this);var s=/(\\/\\*([\\s\\S]*?)\\*\\/|([^:]|^)\\/\\/(.*)$)/gm,i="(?:^|[^$_a-zA-Z\\\\xA0-\\\\uFFFF.])",l="\\\\s*\\\\(\\\\s*(\\"([^\\"]+)\\"|\'([^\']+)\')\\\\s*\\\\)",u=/\\(([^\\)]*)\\)/,c=/^\\s+|\\s+$/g,f={};a.amd={},d("reduceRegister_",function(e){return function(t,n){if(!n||!n.amd)return e.call(this,t,n);var r=t&&t.metadata,a=n.entry;if(r&&(r.format="amd"),a.name)r&&(r.entry||r.bundle?r.entry&&r.entry.name&&(r.entry=void 0):r.entry=a,r.bundle=!0),a.name in this.defined||(this.defined[a.name]=a);else{if(!r)throw new TypeError("Unexpected anonymous AMD define.");if(r.entry&&!r.entry.name)throw new Error("Multiple anonymous defines in module "+t.name);r.entry=a}}}),o.amdDefine=a,o.amdRequire=r}}),function(){var t=/(?:^\\uFEFF?|[^$_a-zA-Z\\xA0-\\uFFFF.])define\\s*\\(\\s*("[^"]+"\\s*,\\s*|\'[^\']+\'\\s*,\\s*)?\\s*(\\[(\\s*(("[^"]+"|\'[^\']+\')\\s*,|\\/\\/.*\\r?\\n|\\/\\*(.|\\s)*?\\*\\/))*(\\s*("[^"]+"|\'[^\']+\')\\s*,?)?(\\s*(\\/\\/.*\\r?\\n|\\/\\*(.|\\s)*?\\*\\/))*\\s*\\]|function\\s*|{|[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*\\))/;d("instantiate",function(n){return function(r){var a=this;if("amd"==r.metadata.format||!r.metadata.format&&r.source.match(t))if(r.metadata.format="amd",a.builder||a.execute===!1)r.metadata.execute=function(){return r.metadata.builderExecute.apply(this,arguments)};else{var o=e.define;e.define=this.amdDefine;try{N.call(a,r)}finally{e.define=o}if(!r.metadata.entry&&!r.metadata.bundle)throw new TypeError("AMD module "+r.name+" did not define")}return n.call(a,r)}})}(),function(){function e(e,t){if(t){var n;if(e.pluginFirst){if(-1!=(n=t.lastIndexOf("!")))return t.substr(n+1)}else if(-1!=(n=t.indexOf("!")))return t.substr(0,n);return t}}function t(e,t){var n,r,a=t.lastIndexOf("!");return-1!=a?(e.pluginFirst?(n=t.substr(a+1),r=t.substr(0,a)):(n=t.substr(0,a),r=t.substr(a+1)||n.substr(n.lastIndexOf(".")+1)),{argument:n,plugin:r}):void 0}function n(e,t,n,r){return r&&".js"==t.substr(t.length-3,3)&&(t=t.substr(0,t.length-3)),e.pluginFirst?n+"!"+t:t+"!"+n}function r(e,t){return e.defaultJSExtensions&&".js"!=t.substr(t.length-3,3)}function a(a){return function(o,s,i){var l=this;s=e(this,s);var u=t(l,o);if(!u)return a.call(this,o,s,i);var d=l.normalizeSync(u.argument,s,!0),c=l.normalizeSync(u.plugin,s,!0);return n(l,d,c,r(l,u.argument))}}d("decanonicalize",a),d("normalizeSync",a),d("normalize",function(a){return function(o,s,i){var l=this;s=e(this,s);var u=t(l,o);return u?Promise.all([l.normalize(u.argument,s,!0),l.normalize(u.plugin,s)]).then(function(e){return n(l,e[0],e[1],r(l,u.argument))}):a.call(l,o,s,i)}}),d("locate",function(e){return function(t){var n,r=this,a=t.name;return r.pluginFirst?-1!=(n=a.indexOf("!"))&&(t.metadata.loader=a.substr(0,n),t.name=a.substr(n+1)):-1!=(n=a.lastIndexOf("!"))&&(t.metadata.loader=a.substr(n+1),t.name=a.substr(0,n)),e.call(r,t).then(function(e){return-1==n&&t.metadata.loader?r.normalize(t.metadata.loader,t.name).then(function(n){return t.metadata.loader=n,e}):e}).then(function(e){var n=t.metadata.loader;if(!n)return e;if(t.name==n)throw new Error("Plugin "+n+" cannot load itself, make sure it is excluded from any wildcard meta configuration via a custom loader: false rule.");if(r.defined&&r.defined[a])return e;var o=r.pluginLoader||r;return o["import"](n).then(function(n){return t.metadata.loaderModule=n,t.address=e,n.locate?n.locate.call(r,t):e})})}}),d("fetch",function(e){return function(t){var n=this;return t.metadata.loaderModule&&t.metadata.loaderModule.fetch&&"defined"!=t.metadata.format?(t.metadata.scriptLoad=!1,t.metadata.loaderModule.fetch.call(n,t,function(t){return e.call(n,t)})):e.call(n,t)}}),d("translate",function(e){return function(t){var n=this;return t.metadata.loaderModule&&t.metadata.loaderModule.translate&&"defined"!=t.metadata.format?Promise.resolve(t.metadata.loaderModule.translate.call(n,t)).then(function(r){var a=t.metadata.sourceMap;if(a){if("object"!=typeof a)throw new Error("load.metadata.sourceMap must be set to an object.");var o=t.name.split("!")[0];a.file=o+"!transpiled",(!a.sources||a.sources.length<=1)&&(a.sources=[o])}return"string"==typeof r?t.source=r:g.call(this,"Plugin "+t.metadata.loader+" should return the source in translate, instead of setting load.source directly. This support will be deprecated."),e.call(n,t)}):e.call(n,t)}}),d("instantiate",function(e){return function(t){var n=this,r=!1;return t.metadata.loaderModule&&t.metadata.loaderModule.instantiate&&!n.builder&&"defined"!=t.metadata.format?Promise.resolve(t.metadata.loaderModule.instantiate.call(n,t,function(t){if(r)throw new Error("Instantiate must only be called once.");return r=!0,e.call(n,t)})).then(function(a){return r?a:(t.metadata.entry=k(),t.metadata.entry.execute=function(){return a},t.metadata.entry.deps=t.metadata.deps,t.metadata.format="defined",e.call(n,t))}):e.call(n,t)}})}(),function(){d("fetch",function(e){return function(t){var n=t.metadata.alias,r=t.metadata.deps||[];if(n){t.metadata.format="defined";var a=k();return this.defined[t.name]=a,a.declarative=!0,a.deps=r.concat([n]),a.declare=function(e){return{setters:[function(t){for(var n in t)e(n,t[n]);t.__useDefault&&(a.module.exports.__useDefault=!0)}],execute:function(){}}},""}return e.call(this,t)}})}(),function(){function e(e,t,n){for(var r,a=t.split(".");a.length>1;)r=a.shift(),e=e[r]=e[r]||{};r=a.shift(),r in e||(e[r]=n)}c(function(e){return function(){this.meta={},e.call(this)}}),d("locate",function(e){return function(t){var n,r=this.meta,a=t.name,o=0;for(var s in r)if(n=s.indexOf("*"),-1!==n&&s.substr(0,n)===a.substr(0,n)&&s.substr(n+1)===a.substr(a.length-s.length+n+1)){var i=s.split("/").length;i>o&&(o=i),h(t.metadata,r[s],o!=i)}return r[a]&&h(t.metadata,r[a]),e.call(this,t)}});var t=/^(\\s*\\/\\*[^\\*]*(\\*(?!\\/)[^\\*]*)*\\*\\/|\\s*\\/\\/[^\\n]*|\\s*"[^"]+"\\s*;?|\\s*\'[^\']+\'\\s*;?)+/,n=/\\/\\*[^\\*]*(\\*(?!\\/)[^\\*]*)*\\*\\/|\\/\\/[^\\n]*|"[^"]+"\\s*;?|\'[^\']+\'\\s*;?/g;d("translate",function(r){return function(a){var o=a.source.match(t);if(o)for(var s=o[0].match(n),i=0;i<s.length;i++){var l=s[i],u=l.length,d=l.substr(0,1);if(";"==l.substr(u-1,1)&&u--,\'"\'==d||"\'"==d){var c=l.substr(1,l.length-3),f=c.substr(0,c.indexOf(" "));if(f){var m=c.substr(f.length+1,c.length-f.length-1);"[]"==f.substr(f.length-2,2)?(f=f.substr(0,f.length-2),a.metadata[f]=a.metadata[f]||[],a.metadata[f].push(m)):a.metadata[f]instanceof Array?(g.call(this,"Module "+a.name+\' contains deprecated "deps \'+m+\'" meta syntax.\\nThis should be updated to "deps[] \'+m+\'" for pushing to array meta.\'),a.metadata[f].push(m)):e(a.metadata,f,m)}else a.metadata[c]=!0}}return r.call(this,a)}})}(),function(){c(function(e){return function(){e.call(this),this.depCache={}}}),d("locate",function(e){return function(t){var n=this,r=n.depCache[t.name];if(r)for(var a=0;a<r.length;a++)n["import"](r[a],t.name);return e.call(n,t)}})}(),D=new l,e.SystemJS=D,D.version="0.19.25 for SPFx","object"==typeof exports&&(module.exports=a),e.Reflect=e.Reflect||{},e.Reflect.Loader=e.Reflect.Loader||a,e.Reflect.global=e.Reflect.global||e,e.LoaderPolyfill=a,D||(D=new o,D.constructor=o),"object"==typeof exports&&(module.exports=D),e.System=D}("undefined"!=typeof self?self:global)}var t="undefined"==typeof Promise;if("undefined"!=typeof document){var n=document.getElementsByTagName("script");if($__curScript=n[n.length-1],t){var r=$__curScript.src,a=r.substr(0,r.lastIndexOf("/")+1);window.systemJSBootstrap=e,document.write(\'<script type="text/javascript" src="\'+a+\'system-polyfills.js"></script>\')}else e()}else if("undefined"!=typeof importScripts){var a="";try{throw new Error("_")}catch(o){o.stack.replace(/(?:at|@).*(http.+):[\\d]+:[\\d]+/,function(e,t){$__curScript={src:t},a=t.replace(/\\/[^\\/]*$/,"/")})}t&&importScripts(a+"system-polyfills.js"),e()}else $__curScript="undefined"!=typeof __filename?{src:__filename}:null,e()}();\r\n');
}.call(exports, (function() { return this; }())))

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["initializeNpmModule"] = initializeNpmModule;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_ManifestStore__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__componentConstants__ = __webpack_require__(6);


function initializeNpmModule() {
    var spTelemetryComponentId = __WEBPACK_IMPORTED_MODULE_1__componentConstants__["k" /* spTelemetryComponentId */];
    var spLoadThemedStylesComponentId = __WEBPACK_IMPORTED_MODULE_1__componentConstants__["j" /* spLoadThemedStylesComponentId */];
    __WEBPACK_IMPORTED_MODULE_0__stores_ManifestStore__["a" /* default */].instance.registerManifests([
        __webpack_require__(35)("./" + spTelemetryComponentId + ".manifest.json"),
        __webpack_require__(37)("./" + spLoadThemedStylesComponentId + ".manifest.json")
    ], false);
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./8217e442-8ed3-41fd-957d-b112e841286a.manifest.json": 36
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 35;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = {"id":"8217e442-8ed3-41fd-957d-b112e841286a","alias":"SPTelemetry","componentType":"Library","version":"0.2.2","manifestVersion":2,"loaderConfig":{"entryModuleId":"sp-telemetry","internalModuleBaseUrls":["https://localhost:4321/"],"scriptResources":{"sp-telemetry":{"type":"path","path":"dist/sp-telemetry.js"},"@microsoft/sp-diagnostics":{"type":"component","version":"1.7.1","id":"78359e4b-07c2-43c6-8d0b-d060b4d577e8"},"@ms/odsp-utilities-bundle":{"type":"component","version":"4.5.1","id":"cc2cc925-b5be-41bb-880a-f0f8030c6aff"},"@microsoft/sp-core-library":{"type":"component","version":"1.7.1","id":"7263c7d0-1d6a-45ec-8d85-d4d1d234171b"},"@microsoft/sp-lodash-subset":{"type":"component","version":"1.7.1","id":"73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"}}},"isInternal":true}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./229b8d08-79f3-438b-8c21-4613fc877abd.manifest.json": 38
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 37;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = {"id":"229b8d08-79f3-438b-8c21-4613fc877abd","alias":"SPLoadThemedStyles","componentType":"Library","version":"0.1.2","manifestVersion":2,"loaderConfig":{"entryModuleId":"sp-load-themed-styles","internalModuleBaseUrls":["http://localhost:4321/"],"scriptResources":{"sp-load-themed-styles":{"type":"path","path":"dist/sp-load-themed-styles.js"}}},"isInternal":true}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/*
 RequireJS 2.1.20 Copyright (c) 2010-2015, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
var requirejs,require,define;
(function(ba){function G(b){return"[object Function]"===K.call(b)}function H(b){return"[object Array]"===K.call(b)}function v(b,c){if(b){var d;for(d=0;d<b.length&&(!b[d]||!c(b[d],d,b));d+=1);}}function T(b,c){if(b){var d;for(d=b.length-1;-1<d&&(!b[d]||!c(b[d],d,b));d-=1);}}function t(b,c){return fa.call(b,c)}function n(b,c){return t(b,c)&&b[c]}function A(b,c){for(var d in b)if(t(b,d)&&c(b[d],d))break}function U(b,c,d,e){c&&A(c,function(c,i){if(d||!t(b,i))e&&"object"===typeof c&&c&&!H(c)&&!G(c)&&!(c instanceof
RegExp)?(b[i]||(b[i]={}),U(b[i],c,d,e)):b[i]=c});return b}function u(b,c){return function(){return c.apply(b,arguments)}}function ca(b){throw b;}function da(b){if(!b)return b;var c=ba;v(b.split("."),function(b){c=c[b]});return c}function B(b,c,d,e){c=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+b);c.requireType=b;c.requireModules=e;d&&(c.originalError=d);return c}function ga(b){function c(a,j,b){var f,l,c,d,h,e,g,i,j=j&&j.split("/"),p=k.map,m=p&&p["*"];if(a){a=a.split("/");l=a.length-1;k.nodeIdCompat&&
Q.test(a[l])&&(a[l]=a[l].replace(Q,""));"."===a[0].charAt(0)&&j&&(l=j.slice(0,j.length-1),a=l.concat(a));l=a;for(c=0;c<l.length;c++)if(d=l[c],"."===d)l.splice(c,1),c-=1;else if(".."===d&&!(0===c||1===c&&".."===l[2]||".."===l[c-1])&&0<c)l.splice(c-1,2),c-=2;a=a.join("/")}if(b&&p&&(j||m)){l=a.split("/");c=l.length;a:for(;0<c;c-=1){h=l.slice(0,c).join("/");if(j)for(d=j.length;0<d;d-=1)if(b=n(p,j.slice(0,d).join("/")))if(b=n(b,h)){f=b;e=c;break a}!g&&(m&&n(m,h))&&(g=n(m,h),i=c)}!f&&g&&(f=g,e=i);f&&(l.splice(0,
e,f),a=l.join("/"))}return(f=n(k.pkgs,a))?f:a}function d(a){z&&v(document.getElementsByTagName("script"),function(j){if(j.getAttribute("data-requiremodule")===a&&j.getAttribute("data-requirecontext")===h.contextName)return j.parentNode.removeChild(j),!0})}function p(a){var j=n(k.paths,a);if(j&&H(j)&&1<j.length)return j.shift(),h.require.undef(a),h.makeRequire(null,{skipMap:!0})([a]),!0}function g(a){var j,c=a?a.indexOf("!"):-1;-1<c&&(j=a.substring(0,c),a=a.substring(c+1,a.length));return[j,a]}function i(a,
j,b,f){var l,d,e=null,i=j?j.name:null,k=a,p=!0,m="";a||(p=!1,a="_@r"+(K+=1));a=g(a);e=a[0];a=a[1];e&&(e=c(e,i,f),d=n(q,e));a&&(e?m=d&&d.normalize?d.normalize(a,function(a){return c(a,i,f)}):-1===a.indexOf("!")?c(a,i,f):a:(m=c(a,i,f),a=g(m),e=a[0],m=a[1],b=!0,l=h.nameToUrl(m)));b=e&&!d&&!b?"_unnormalized"+(O+=1):"";return{prefix:e,name:m,parentMap:j,unnormalized:!!b,url:l,originalName:k,isDefine:p,id:(e?e+"!"+m:m)+b}}function r(a){var j=a.id,b=n(m,j);b||(b=m[j]=new h.Module(a));return b}function s(a,
j,b){var f=a.id,c=n(m,f);if(t(q,f)&&(!c||c.defineEmitComplete))"defined"===j&&b(q[f]);else if(c=r(a),c.error&&"error"===j)b(c.error);else c.on(j,b)}function w(a,b){var c=a.requireModules,f=!1;if(b)b(a);else if(v(c,function(b){if(b=n(m,b))b.error=a,b.events.error&&(f=!0,b.emit("error",a))}),!f)e.onError(a)}function x(){R.length&&(v(R,function(a){var b=a[0];"string"===typeof b&&(h.defQueueMap[b]=!0);C.push(a)}),R=[])}function y(a){delete m[a];delete V[a]}function F(a,b,c){var f=a.map.id;a.error?a.emit("error",
a.error):(b[f]=!0,v(a.depMaps,function(f,d){var e=f.id,h=n(m,e);h&&(!a.depMatched[d]&&!c[e])&&(n(b,e)?(a.defineDep(d,q[e]),a.check()):F(h,b,c))}),c[f]=!0)}function D(){var a,b,c=(a=1E3*k.waitSeconds)&&h.startTime+a<(new Date).getTime(),f=[],l=[],e=!1,i=!0;if(!W){W=!0;A(V,function(a){var h=a.map,g=h.id;if(a.enabled&&(h.isDefine||l.push(a),!a.error))if(!a.inited&&c)p(g)?e=b=!0:(f.push(g),d(g));else if(!a.inited&&(a.fetched&&h.isDefine)&&(e=!0,!h.prefix))return i=!1});if(c&&f.length)return a=B("timeout",
"Load timeout for modules: "+f,null,f),a.contextName=h.contextName,w(a);i&&v(l,function(a){F(a,{},{})});if((!c||b)&&e)if((z||ea)&&!X)X=setTimeout(function(){X=0;D()},50);W=!1}}function E(a){t(q,a[0])||r(i(a[0],null,!0)).init(a[1],a[2])}function I(a){var a=a.currentTarget||a.srcElement,b=h.onScriptLoad;a.detachEvent&&!Y?a.detachEvent("onreadystatechange",b):a.removeEventListener("load",b,!1);b=h.onScriptError;(!a.detachEvent||Y)&&a.removeEventListener("error",b,!1);return{node:a,id:a&&a.getAttribute("data-requiremodule")}}
function J(){var a;for(x();C.length;){a=C.shift();if(null===a[0])return w(B("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));E(a)}h.defQueueMap={}}var W,Z,h,L,X,k={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},m={},V={},$={},C=[],q={},S={},aa={},K=1,O=1;L={require:function(a){return a.require?a.require:a.require=h.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?q[a.map.id]=a.exports:a.exports=q[a.map.id]={}},
module:function(a){return a.module?a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){return n(k.config,a.map.id)||{}},exports:a.exports||(a.exports={})}}};Z=function(a){this.events=n($,a.id)||{};this.map=a;this.shim=n(k.shim,a.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};Z.prototype={init:function(a,b,c,f){f=f||{};if(!this.inited){this.factory=b;if(c)this.on("error",c);else this.events.error&&(c=u(this,function(a){this.emit("error",a)}));
this.depMaps=a&&a.slice(0);this.errback=c;this.inited=!0;this.ignore=f.ignore;f.enabled||this.enabled?this.enable():this.check()}},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){if(!this.fetched){this.fetched=!0;h.startTime=(new Date).getTime();var a=this.map;if(this.shim)h.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],u(this,function(){return a.prefix?this.callPlugin():this.load()}));else return a.prefix?
this.callPlugin():this.load()}},load:function(){var a=this.map.url;S[a]||(S[a]=!0,h.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,b,c=this.map.id;b=this.depExports;var f=this.exports,l=this.factory;if(this.inited)if(this.error)this.emit("error",this.error);else{if(!this.defining){this.defining=!0;if(1>this.depCount&&!this.defined){if(G(l)){if(this.events.error&&this.map.isDefine||e.onError!==ca)try{f=h.execCb(c,l,b,f)}catch(d){a=d}else f=h.execCb(c,l,b,f);this.map.isDefine&&
void 0===f&&((b=this.module)?f=b.exports:this.usingExports&&(f=this.exports));if(a)return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?"define":"require",w(this.error=a)}else f=l;this.exports=f;if(this.map.isDefine&&!this.ignore&&(q[c]=f,e.onResourceLoad))e.onResourceLoad(h,this.map,this.depMaps);y(c);this.defined=!0}this.defining=!1;this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=
!0)}}else t(h.defQueueMap,c)||this.fetch()}},callPlugin:function(){var a=this.map,b=a.id,d=i(a.prefix);this.depMaps.push(d);s(d,"defined",u(this,function(f){var l,d;d=n(aa,this.map.id);var g=this.map.name,P=this.map.parentMap?this.map.parentMap.name:null,p=h.makeRequire(a.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){if(f.normalize&&(g=f.normalize(g,function(a){return c(a,P,!0)})||""),f=i(a.prefix+"!"+g,this.map.parentMap),s(f,"defined",u(this,function(a){this.init([],function(){return a},
null,{enabled:!0,ignore:!0})})),d=n(m,f.id)){this.depMaps.push(f);if(this.events.error)d.on("error",u(this,function(a){this.emit("error",a)}));d.enable()}}else d?(this.map.url=h.nameToUrl(d),this.load()):(l=u(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),l.error=u(this,function(a){this.inited=!0;this.error=a;a.requireModules=[b];A(m,function(a){0===a.map.id.indexOf(b+"_unnormalized")&&y(a.map.id)});w(a)}),l.fromText=u(this,function(f,c){var d=a.name,g=i(d),P=M;c&&(f=c);P&&
(M=!1);r(g);t(k.config,b)&&(k.config[d]=k.config[b]);try{e.exec(f)}catch(m){return w(B("fromtexteval","fromText eval for "+b+" failed: "+m,m,[b]))}P&&(M=!0);this.depMaps.push(g);h.completeLoad(d);p([d],l)}),f.load(a.name,p,l,k))}));h.enable(d,this);this.pluginMaps[d.id]=d},enable:function(){V[this.map.id]=this;this.enabling=this.enabled=!0;v(this.depMaps,u(this,function(a,b){var c,f;if("string"===typeof a){a=i(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);this.depMaps[b]=a;if(c=
n(L,a.id)){this.depExports[b]=c(this);return}this.depCount+=1;s(a,"defined",u(this,function(a){this.undefed||(this.defineDep(b,a),this.check())}));this.errback?s(a,"error",u(this,this.errback)):this.events.error&&s(a,"error",u(this,function(a){this.emit("error",a)}))}c=a.id;f=m[c];!t(L,c)&&(f&&!f.enabled)&&h.enable(a,this)}));A(this.pluginMaps,u(this,function(a){var b=n(m,a.id);b&&!b.enabled&&h.enable(a,this)}));this.enabling=!1;this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=
[]);c.push(b)},emit:function(a,b){v(this.events[a],function(a){a(b)});"error"===a&&delete this.events[a]}};h={config:k,contextName:b,registry:m,defined:q,urlFetched:S,defQueue:C,defQueueMap:{},Module:Z,makeModuleMap:i,nextTick:e.nextTick,onError:w,configure:function(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");var b=k.shim,c={paths:!0,bundles:!0,config:!0,map:!0};A(a,function(a,b){c[b]?(k[b]||(k[b]={}),U(k[b],a,!0,!0)):k[b]=a});a.bundles&&A(a.bundles,function(a,b){v(a,
function(a){a!==b&&(aa[a]=b)})});a.shim&&(A(a.shim,function(a,c){H(a)&&(a={deps:a});if((a.exports||a.init)&&!a.exportsFn)a.exportsFn=h.makeShimExports(a);b[c]=a}),k.shim=b);a.packages&&v(a.packages,function(a){var b,a="string"===typeof a?{name:a}:a;b=a.name;a.location&&(k.paths[b]=a.location);k.pkgs[b]=a.name+"/"+(a.main||"main").replace(ha,"").replace(Q,"")});A(m,function(a,b){!a.inited&&!a.map.unnormalized&&(a.map=i(b,null,!0))});if(a.deps||a.callback)h.require(a.deps||[],a.callback)},makeShimExports:function(a){return function(){var b;
a.init&&(b=a.init.apply(ba,arguments));return b||a.exports&&da(a.exports)}},makeRequire:function(a,j){function g(c,d,p){var k,n;j.enableBuildCallback&&(d&&G(d))&&(d.__requireJsBuild=!0);if("string"===typeof c){if(G(d))return w(B("requireargs","Invalid require call"),p);if(a&&t(L,c))return L[c](m[a.id]);if(e.get)return e.get(h,c,a,g);k=i(c,a,!1,!0);k=k.id;return!t(q,k)?w(B("notloaded",'Module name "'+k+'" has not been loaded yet for context: '+b+(a?"":". Use require([])"))):q[k]}J();h.nextTick(function(){J();
n=r(i(null,a));n.skipMap=j.skipMap;n.init(c,d,p,{enabled:!0});D()});return g}j=j||{};U(g,{isBrowser:z,toUrl:function(b){var d,e=b.lastIndexOf("."),j=b.split("/")[0];if(-1!==e&&(!("."===j||".."===j)||1<e))d=b.substring(e,b.length),b=b.substring(0,e);return h.nameToUrl(c(b,a&&a.id,!0),d,!0)},defined:function(b){return t(q,i(b,a,!1,!0).id)},specified:function(b){b=i(b,a,!1,!0).id;return t(q,b)||t(m,b)}});a||(g.undef=function(b){x();var c=i(b,a,!0),e=n(m,b);e.undefed=!0;d(b);delete q[b];delete S[c.url];
delete $[b];T(C,function(a,c){a[0]===b&&C.splice(c,1)});delete h.defQueueMap[b];e&&(e.events.defined&&($[b]=e.events),y(b))});return g},enable:function(a){n(m,a.id)&&r(a).enable()},completeLoad:function(a){var b,c,d=n(k.shim,a)||{},e=d.exports;for(x();C.length;){c=C.shift();if(null===c[0]){c[0]=a;if(b)break;b=!0}else c[0]===a&&(b=!0);E(c)}h.defQueueMap={};c=n(m,a);if(!b&&!t(q,a)&&c&&!c.inited){if(k.enforceDefine&&(!e||!da(e)))return p(a)?void 0:w(B("nodefine","No define call for "+a,null,[a]));E([a,
d.deps||[],d.exportsFn])}D()},nameToUrl:function(a,b,c){var d,g,i;(d=n(k.pkgs,a))&&(a=d);if(d=n(aa,a))return h.nameToUrl(d,b,c);if(e.jsExtRegExp.test(a))d=a+(b||"");else{d=k.paths;a=a.split("/");for(g=a.length;0<g;g-=1)if(i=a.slice(0,g).join("/"),i=n(d,i)){H(i)&&(i=i[0]);a.splice(0,g,i);break}d=a.join("/");d+=b||(/^data\:|\?/.test(d)||c?"":".js");d=("/"===d.charAt(0)||d.match(/^[\w\+\.\-]+:/)?"":k.baseUrl)+d}return k.urlArgs?d+((-1===d.indexOf("?")?"?":"&")+k.urlArgs):d},load:function(a,b){e.load(h,
a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if("load"===a.type||ia.test((a.currentTarget||a.srcElement).readyState))N=null,a=I(a),h.completeLoad(a.id)},onScriptError:function(a){var b=I(a);if(!p(b.id))return w(B("scripterror","Script error for: "+b.id,a,[b.id]))}};h.require=h.makeRequire();return h}var e,x,y,D,I,E,N,J,r,O,ja=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,ka=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,Q=/\.js$/,ha=/^\.\//;x=Object.prototype;var K=
x.toString,fa=x.hasOwnProperty,z=!!("undefined"!==typeof window&&"undefined"!==typeof navigator&&window.document),ea=!z&&"undefined"!==typeof importScripts,ia=z&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,Y="undefined"!==typeof opera&&"[object Opera]"===opera.toString(),F={},s={},R=[],M=!1;if("undefined"===typeof define){if("undefined"!==typeof requirejs){if(G(requirejs))return;s=requirejs;requirejs=void 0}"undefined"!==typeof require&&!G(require)&&(s=require,require=
void 0);e=requirejs=function(b,c,d,p){var g,i="_";!H(b)&&"string"!==typeof b&&(g=b,H(c)?(b=c,c=d,d=p):b=[]);g&&g.context&&(i=g.context);(p=n(F,i))||(p=F[i]=e.s.newContext(i));g&&p.configure(g);return p.require(b,c,d)};e.config=function(b){return e(b)};e.nextTick="undefined"!==typeof setTimeout?function(b){setTimeout(b,4)}:function(b){b()};require||(require=e);e.version="2.1.20";e.jsExtRegExp=/^\/|:|\?|\.js$/;e.isBrowser=z;x=e.s={contexts:F,newContext:ga};e({});v(["toUrl","undef","defined","specified"],
function(b){e[b]=function(){var c=F._;return c.require[b].apply(c,arguments)}});if(z&&(y=x.head=document.getElementsByTagName("head")[0],D=document.getElementsByTagName("base")[0]))y=x.head=D.parentNode;e.onError=ca;e.createNode=function(b){var c=b.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");c.type=b.scriptType||"text/javascript";c.charset="utf-8";c.async=!0;return c};e.load=function(b,c,d){var p=b&&b.config||{},g;if(z){g=e.createNode(p,
c,d);if(p.onNodeCreated)p.onNodeCreated(g,p,c,d);g.setAttribute("data-requirecontext",b.contextName);g.setAttribute("data-requiremodule",c);g.attachEvent&&!(g.attachEvent.toString&&0>g.attachEvent.toString().indexOf("[native code"))&&!Y?(M=!0,g.attachEvent("onreadystatechange",b.onScriptLoad)):(g.addEventListener("load",b.onScriptLoad,!1),g.addEventListener("error",b.onScriptError,!1));g.src=d;J=g;D?y.insertBefore(g,D):y.appendChild(g);J=null;return g}if(ea)try{importScripts(d),b.completeLoad(c)}catch(i){b.onError(B("importscripts",
"importScripts failed for "+c+" at "+d,i,[c]))}};z&&!s.skipDataMain&&T(document.getElementsByTagName("script"),function(b){y||(y=b.parentNode);if(I=b.getAttribute("data-main"))return r=I,s.baseUrl||(E=r.split("/"),r=E.pop(),O=E.length?E.join("/")+"/":"./",s.baseUrl=O),r=r.replace(Q,""),e.jsExtRegExp.test(r)&&(r=I),s.deps=s.deps?s.deps.concat(r):[r],!0});define=function(b,c,d){var e,g;"string"!==typeof b&&(d=c,c=b,b=null);H(c)||(d=c,c=null);!c&&G(d)&&(c=[],d.length&&(d.toString().replace(ja,"").replace(ka,
function(b,d){c.push(d)}),c=(1===d.length?["require"]:["require","exports","module"]).concat(c)));if(M){if(!(e=J))N&&"interactive"===N.readyState||T(document.getElementsByTagName("script"),function(b){if("interactive"===b.readyState)return N=b}),e=N;e&&(b||(b=e.getAttribute("data-requiremodule")),g=F[e.getAttribute("data-requirecontext")])}g?(g.defQueue.push([b,c,d]),g.defQueueMap[b]=!0):R.push([b,c,d])};define.amd={jQuery:!0};e.exec=function(b){return eval(b)};e(s)}})(this);


/*** EXPORTS FROM exports-loader ***/
exports["requirejs"] = (requirejs);
exports["require"] = (require);
exports["define"] = (define);

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = ".heading{font-size:70px;font-family:Helvetica,Arial,sans-serif;font-weight:700;color:red;-webkit-text-stroke:2px #000}.otherLines{font-size:15px;font-family:Helvetica,Arial,sans-serif;font-weight:700}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiRzdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUNFLFVBQVcsS0FDWCxZQUFhLFNBQVMsQ0FBRSxLQUFLLENBQUUsV0FDL0IsWUFBYSxJQUNiLE1BQU8sSUFDUCxvQkFBcUIsSUFBSSxLQUUzQixZQUNFLFVBQVcsS0FDWCxZQUFhLFNBQVMsQ0FBRSxLQUFLLENBQUUsV0FDL0IsWUFBYSJ9 */"

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_41__;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_42__;

/***/ })
/******/ ])}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Can't load the application on this page. Use the browser Back button to retry. If the problem persists, contact the administrator of the site and give them the information in Technical Details.",
      "platformFailedToLoadError": "***Platform failed to load. Id: \"{0}\", name: \"{1}\"",
      "platformFailedToLoadWithMessageError": "***Platform failed to load. Id: \"{0}\", name: \"{1}\".\r\nError: {2}",
      "applicationFailedToInitializeError": "***Error initializing application. Error: {0}",
      "invalidPreloadedDataError": "***Invalid preloaded data.",
      "manifestNotFoundByIdError": "***Manifest not found for component id \"{0}\".",
      "manifestNotFoundError": "***Manifest not found for component id \"{0}\" and version \"{1}\".",
      "systemConfigDisabledError": "***System.config() is not supported. Use a manifest to specify the configuration.",
      "loadComponentLog": "***Loading component \"{0}\" ({1}).",
      "loadComponentEndLog": "***Component \"{0}\" ({1}) loaded.",
      "loadComponentRetryLog": "***Loading component \"{0}\" ({1}). Attempt {2} of {3}.",
      "loadComponentError": "***Failed to load component \"{0}\" ({1}).\r\nOriginal error: {2}",
      "loadComponentMaxRetriesError": "***Attempted to load component \"{0}\" ({1}) {2} times without success.",
      "loadComponentDependencyError": "***Failed to load component dependency \"{0}\" from component \"{1}\" ({2}).\r\nOriginal error: {3}",
      "loadComponentDependencyFailoverPathError": "***Failed to load component dependency \"{0}\" with failover path \"{1}\" from component \"{2}\" ({3}).\r\nOriginal error: {4}",
      "loadPathDependencyLog": "***Loading path dependency \"{0}\" from component \"{1}\" ({2})",
      "loadPathDependencyError": "***Failed to load path dependency \"{0}\" from component \"{1}\" ({2}).\r\nOriginal error: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "***Failed to load path dependency \"{0}\" from component \"{1}\" ({2}) due to another dependency that failed to load.",
      "loadEntryPointError": "***Failed to load entry point from component \"{0}\" ({1}).\r\nOriginal error: {2}",
      "loadComponentReturnsEmptyError": "***loadComponent() returned an empty object for component \"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "***loadComponent() returned an object with an empty default property for component \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "***The entry point for component \"{0}\" ({1}) has a dependency on \"{2}\" that is not declared in the manifest.",
      "loadScriptWithStringError": "***loadScript function doesn't allow a string as 2nd parameter. Use ILoadScriptOptions instead.",
      "tooManyManifestsError": "***{0} manifests (versions {1}) found for component \"{2}\".",
      "tooManyCompatibleVersionsError": "***{0} compatible versions ({1}) found for component \"{2}\" version \"{3}\".",
      "tooManyComponentsError": "***Too many components found for id \"{0}\".",
      "noComponentFoundError": "***No component found for id \"{0}\".",
      "deleteComponentLog": "***Deleting component \"{0}\" version \"{1}\" from the store.",
      "browserNotSupportedError": "***This version of your browser is not supported.\r\nPlease update your browser to the latest version.",
      "ie9OrOlderNotSupportedError": "***This page does not support Internet Explorer releases older than version 10. Please update your web browser.",
      "firefox43OrOlderNotSupportedError": "***This page does not support Mozilla Firefox releases older than version 44. Please update your web browser.",
      "resourceNotFoundError": "***Resource \"{0}\" not found in loader configuration of manifest for component \"{1}\" ({2}).",
      "noFailoverPathError": "***Cannot call resolveAddress() on a component with no failover path",
      "urlStatusLocalhostFileNotFoundError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The file was not found in the server.\r\nMake sure that you are running 'gulp serve'.",
      "urlStatusFileNotFoundError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The file was not found in the server.",
      "urlStatusForbiddenError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The access to the file is forbidden.",
      "urlStatusClientErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was an error requesting the file.",
      "urlStatusServerErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a problem in the server.",
      "urlStatusLocalhostNetworkErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.\r\nMake sure that you are running 'gulp serve' and you have run 'gulp trust-dev-cert'.",
      "urlStatusHttpsNetworkErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.\r\nThis may be a problem with a HTTPS certificate. Make sure you have the right certificate.",
      "urlStatusNetworkErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.",
      "urlStatusUndefinedError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}) because of unknown problems.",
      "isUndefinedValidateError": "***The value for \"{0}\" must not be undefined",
      "failedToCreateGlobalVariableError": "***Failed to create global variable \"{0}\" from script \"{1}\"",
      "dependencyLoadError": "***Failed to load module '{0}' because dependency {1} was not loaded",
      "missingPathDependencyError": "***Missing path dependency \"{0}\" from component \"{1}\" ({2}). Existing path dependencies: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "***Error loading debug script. Ensure the server is running and the \"{0}\" parameter URL is correct.",
      "errorLoadingDebugScriptHTTP": "***Error loading debug script. Ensure the server is running, the \"{0}\" parameter URL is correct, and loading unsafe scripts is allowed. Also consider using a development certificate and serving debug scripts over HTTPS.",
      "errorLoadingDebugScriptMalformed": "***Error loading debug script. The debug URL ({0}) appears to be malformed.",
      "errorLoadingDebugScriptUnknown": "***Unknown error loading a debug script.",
      "errorLoadingDebugLoaderTitle": "***Error loading debug loader.",
      "errorLoadingDebugManifestTitle": "***Error loading debug manifests.",
      "errorLoadingUnknownTitle": "***Error loading debug scripts."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "***Missing component or initializer function.",
      "closeDeveloperToolsAriaLabel": "***Close developer tools."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Warning!",
      "warningLine1": "Use of this tool exposes you to potential security threats which can result in others gaining access to your personal Office 365 data (documents, emails, conversations and more). Make sure you trust the person or organization that asked you to access this tool before proceeding.",
      "warningLine2": "Learn more here: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "***An error occured loading debug manifests.",
      "debugManifestErrorDismissButtonText": "***Dismiss"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Allow debug scripts?",
      "allowDebugLoaderTitle": "***Allow debug loader?",
      "allowDebugLoaderAndManifestsTitle": "Allow debug loader and debug scripts?",
      "debugManifestLoadingWarning": "WARNING: This page contains unsafe scripts that, if loaded, could potentially harm your computer. Do not proceed unless you trust the developer and understand the risks.",
      "debugManifestLoadingWarning2": "If you are unsure, click {0}.",
      "debugManifestLoadingConfirm": "Load debug scripts",
      "debugManifestLoadingCancel": "Don't load debug scripts",
      "debugManifestLoadingCalloutText": "If you don't know what to do, click here."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "***Loading...",
      "developerToolsTabLoadingUnknownError": "***Unknown error loading developer tools module."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Performance",
      "ErrorAccessingPerfDataErrorMessage": "Unable to retrieve performance data: object is null or undefined.",
      "ErrorAccessingRedirectDataErrorMessage": "There was a problem accessing the HTTP redirect performance data.",
      "ErrorParsingPercievedLatencyErrorMessage": "An error was caught when parsing the percieved latency data.",
      "ErrorParsingApiDataErrorMessage": "An error was caught when parsing the API data.",
      "UnkownPerformanceDataErrorMessage": "An unknown error has occured: {0}",
      "DefaultWebPartName": "Web Part",
      "ServerResponseLabel": "Server Response",
      "ApplicationInitializationLabel": "Application Initialization",
      "ScriptFetchEvalLabel": "Script fetch and evaluation",
      "SpLoaderStartLabel": "SPFx initialization",
      "PageRenderLabel": "Page Render",
      "LeftNavRenderLabel": "Left Navigation Render",
      "CanvasRenderLabel": "Canvas Render",
      "LayoutRenderLabel": "Layout Render",
      "RedirectResponseLabel": "Redirect Response",
      "AppLoadLabel": "Application Load",
      "RenderWebPartsLabel": "Web Parts Render",
      "TotalRenderTimeLabel": "Total",
      "GeneralErrorMessage": "Sorry, something went wrong while retrieving the performance data.",
      "ErrorMessagePrefix": "Error Message: {0}",
      "PerformanceDataHint": "Note: After adding or removing a web part, refresh the page to see updated performance data.",
      "ModulesLoadedLegendLabel": "Modules Loaded",
      "InitializationLegendLabel": "Initialization",
      "RenderTimeLegendLabel": "Render Time",
      "InitializationTimeLabel": "***Initialization time",
      "ModuleLoadingTimeLabel": "***Module loading time",
      "ModuleLazyLoadingDelayLabel": "***Module loading delayed",
      "DataFetchTimeLabel": "***Data fetch time",
      "DataFetchLegendLabel": "Data Fetch",
      "ItemsColumnHeader": "Items",
      "DurationColumnHeader": "Duration",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "N/A"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifests",
      "noManifestSelected": "No manifest selected"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Trace",
      "EmptyTraceData": "No traces loaded.",
      "ExportCSVButtonLabel": "Export CSV",
      "LevelHeaderLabel": "Level",
      "MessageHeaderLabel": "Message",
      "ScopeHeaderLabel": "Scope",
      "SourceHeaderLabel": "Source",
      "TimestampHeaderLabel": "Timestamp",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "There was a problem accessing the trace data."
    }
  };

  strings.default = strings;
  return strings;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ })
/******/ ])});;
//# sourceMappingURL=sp-loader_en-us.js.map
(function(){
if (!window.__setWebpackPublicPathLoaderSrcRegistry__) window.__setWebpackPublicPathLoaderSrcRegistry__={};
var scripts = document.getElementsByTagName('script');
if (scripts && scripts.length) {
  for (var i = 0; i < scripts.length; i++) {
    if (!scripts[i]) continue;
    var path = scripts[i].getAttribute('src');
    if (path) window.__setWebpackPublicPathLoaderSrcRegistry__[path]=true;
  }
}
})();


define("7263c7d0-1d6a-45ec-8d85-d4d1d234171b_1.7.1", ["@microsoft/sp-lodash-subset"], function(__WEBPACK_EXTERNAL_MODULE_2__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1),__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./lib/SPCoreLibraryStrings.resx.js
var key = '_gIErrcTokcw+/VVwa+ReIA';
var allStrings = ( false) ?
    require("./resx-strings/en-us.json") :
    __webpack_require__(1);
var strings = allStrings[key];
/* harmony default export */ var SPCoreLibraryStrings_resx = (strings);

// CONCATENATED MODULE: ./lib/Text.js

var Text_Text = (function () {
    function Text() {
    }
    Text.format = function (s) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        if (s === null) {
            throw new Error(SPCoreLibraryStrings_resx.isNullValidateError.replace('{0}', 's'));
        }
        if (s === undefined) {
            throw new Error(SPCoreLibraryStrings_resx.isUndefinedValidateError.replace('{0}', 's'));
        }
        return s.replace(Text.FORMAT_REGEX, function (match) {
            var matchId = parseInt(match.replace(Text.FORMAT_ARGS_REGEX, ''), 10);
            var matchValue = values[matchId];
            if (matchId >= values.length || matchId < 0) {
                matchValue = match;
            }
            if (matchValue === null) {
                matchValue = 'null';
            }
            else if (matchValue === undefined) {
                matchValue = 'undefined';
            }
            return matchValue;
        });
    };
    Text.replaceAll = function (input, searchValue, replaceValue) {
        return input.split(searchValue).join(replaceValue);
    };
    Text.FORMAT_REGEX = /\{\d+\}/g;
    Text.FORMAT_ARGS_REGEX = /[\{\}]/g;
    return Text;
}());
/* harmony default export */ var lib_Text = (Text_Text);

// CONCATENATED MODULE: ./lib/Validate.js


var Validate_Validate = (function () {
    function Validate() {
    }
    Validate.isTrue = function (value, variableName) {
        if (!value) {
            throw new Error(lib_Text.format(SPCoreLibraryStrings_resx.isFalseValidateError, variableName));
        }
    };
    Validate.isNotNullOrUndefined = function (value, variableName) {
        if (value === null) {
            throw new Error(lib_Text.format(SPCoreLibraryStrings_resx.isNullValidateError, variableName));
        }
        if (value === undefined) {
            throw new Error(lib_Text.format(SPCoreLibraryStrings_resx.isUndefinedValidateError, variableName));
        }
    };
    Validate.isNonemptyString = function (value, variableName) {
        Validate.isNotNullOrUndefined(value, variableName);
        if (!value || value && value.length === 0) {
            throw new Error(lib_Text.format(SPCoreLibraryStrings_resx.isEmptyStringValidateError, variableName));
        }
    };
    Validate.isNotDisposed = function (value, className) {
        if (value.isDisposed) {
            throw new Error(lib_Text.format(SPCoreLibraryStrings_resx.isDisposedValidateError, className));
        }
    };
    return Validate;
}());
/* harmony default export */ var lib_Validate = (Validate_Validate);

// CONCATENATED MODULE: ./lib/Version.js



var Version_Version = (function () {
    function Version(major, minor, patch, revision) {
        this._major = major;
        this._minor = minor;
        this._patch = patch;
        this._revision = revision;
    }
    Version.isValid = function (versionString) {
        return Version.tryParse(versionString) !== undefined;
    };
    Version.parse = function (versionString) {
        var version = Version.tryParse(versionString);
        if (version) {
            return version;
        }
        throw new Error(lib_Text.format(SPCoreLibraryStrings_resx.invalidVersionStringError, versionString));
    };
    Version.tryParse = function (versionString) {
        if (versionString) {
            var versionRegex = /^([0-9]+)\.([0-9]+)(?:\.([0-9]+)(?:\.([0-9]+))?)?$/g;
            var regexExecRes = versionRegex.exec(versionString);
            if (regexExecRes) {
                return new Version(parseInt(regexExecRes[1], 10), parseInt(regexExecRes[2], 10), regexExecRes[3] !== undefined ? parseInt(regexExecRes[3], 10) : undefined, regexExecRes[4] !== undefined ? parseInt(regexExecRes[4], 10) : undefined);
            }
        }
        return undefined;
    };
    Version.compare = function (v1, v2) {
        lib_Validate.isNotNullOrUndefined(v1, 'v1');
        lib_Validate.isNotNullOrUndefined(v2, 'v2');
        if (v1.major !== v2.major) {
            return v1.major > v2.major ? 1 : -1;
        }
        if (v1.minor !== v2.minor) {
            return v1.minor > v2.minor ? 1 : -1;
        }
        if ((v1.patch || 0) !== (v2.patch || 0)) {
            return (v1.patch || 0) > (v2.patch || 0) ? 1 : -1;
        }
        if ((v1.revision || 0) !== (v2.revision || 0)) {
            return (v1.revision || 0) > (v2.revision || 0) ? 1 : -1;
        }
        return 0;
    };
    Object.defineProperty(Version.prototype, "major", {
        get: function () {
            return this._major;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "minor", {
        get: function () {
            return this._minor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "patch", {
        get: function () {
            return this._patch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "revision", {
        get: function () {
            return this._revision;
        },
        enumerable: true,
        configurable: true
    });
    Version.prototype.lessThan = function (compareWith) {
        return Version.compare(this, compareWith) < 0;
    };
    Version.prototype.greaterThan = function (compareWith) {
        return Version.compare(this, compareWith) > 0;
    };
    Version.prototype.equals = function (compareWith) {
        return Version.compare(this, compareWith) === 0;
    };
    Version.prototype.satisfies = function (compareWith) {
        lib_Validate.isNotNullOrUndefined(compareWith, 'compareWith');
        return this.major === compareWith.major && !this.lessThan(compareWith);
    };
    Version.prototype.toString = function () {
        var str = this.major + "." + this.minor;
        if (this.patch !== undefined) {
            str += "." + this.patch;
            if (this.revision !== undefined) {
                str += "." + this.revision;
            }
        }
        return str;
    };
    return Version;
}());
/* harmony default export */ var lib_Version = (Version_Version);

// CONCATENATED MODULE: ./lib/BrowserDetection.js

var BrowserDetection_BrowserDetection = (function () {
    function BrowserDetection() {
    }
    BrowserDetection.getBrowserInformation = function (userAgent) {
        var agent = userAgent || BrowserDetection.getUserAgent();
        return BrowserDetection.buildBrowserInformation(agent);
    };
    BrowserDetection.getUserAgent = function () {
        return (window && window.navigator && navigator.userAgent) || '';
    };
    BrowserDetection.buildBrowserInformation = function (userAgent) {
        var agent = userAgent.toLowerCase();
        var browserInfo = {
            browser: 0 ,
            browserVersion: undefined,
            os: 0 ,
            osVersion: undefined,
            userAgent: userAgent
        };
        browserInfo = BrowserDetection.fillBrowser(browserInfo, agent);
        browserInfo = BrowserDetection.fillOS(browserInfo, agent);
        return browserInfo;
    };
    BrowserDetection.fillBrowser = function (browserInfo, userAgent) {
        var browser = 0 ;
        var browserVersion = undefined;
        var match;
        if (match = /msie (\d+)([\d.]*)/.exec(userAgent)) {
            browser = 4 ;
        }
        else if (match = /trident.*rv:(\d+)([\d.]*)/.exec(userAgent)) {
            browser = 4 ;
        }
        else if (match = /edge\/(\d+)([\d.]*)/.exec(userAgent)) {
            browser = 2 ;
        }
        else if (match = /(?:firefox|fxios)\/(\d+)([\d.]*)/.exec(userAgent)) {
            browser = 3 ;
        }
        else if (match = /(?:chrome|crios)\/(\d+)([\d.]*)/.exec(userAgent)) {
            browser = 1 ;
        }
        else if (match = /safari\/(\d+)/.exec(userAgent)) {
            browser = 5 ;
            match = /version\/(\d+)([\d.]*)/.exec(userAgent);
        }
        if (match) {
            var browserMajor = parseInt(match[1], 10) || 0;
            var browserMinor = '0';
            var browserMinorVersion = match[2];
            if (browserMinorVersion) {
                var minorStart = browserMinorVersion.indexOf('.');
                if (minorStart >= 0 && minorStart < browserMinorVersion.length - 1) {
                    browserMinor = browserMinorVersion.substr(minorStart + 1);
                }
            }
            browserVersion = lib_Version.parse(browserMajor + "." + browserMinor);
        }
        browserInfo.browser = browser;
        browserInfo.browserVersion = browserVersion;
        return browserInfo;
    };
    BrowserDetection.fillOS = function (browserInfo, userAgent) {
        var os = 0 ;
        var osVersion = undefined;
        var osVersionMatch = /[\s\(](os|os x|windows phone|windows nt|android) ([\d._]+)/.exec(userAgent);
        osVersion = osVersionMatch ? osVersionMatch[2] : undefined;
        var deviceMatch = userAgent.match(/windows phone|wpdesktop/) || userAgent.match(/ipad|iphone|ipod|android/);
        if (deviceMatch) {
            var device = deviceMatch[0];
            if (device === 'windows phone' || device === 'wpdesktop') {
                os = 6 ;
            }
            if (device === 'android') {
                os = 1 ;
            }
            if (device === 'ipad' || device === 'ipod' || device === 'iphone') {
                os = 2 ;
            }
        }
        else {
            if (userAgent.indexOf('macintosh') !== -1) {
                os = 4 ;
            }
            if (userAgent.indexOf('windows nt') !== -1) {
                os = 5 ;
            }
            if (/(windows 8\.1|windows nt 6\.3)/.test(userAgent)) {
                os = 5 ;
                osVersion = '8.1';
            }
            if (userAgent.indexOf('windows nt 10') !== -1) {
                os = 5 ;
                osVersion = '10';
            }
            if (userAgent.indexOf('windows nt 6.1') !== -1) {
                os = 5 ;
                osVersion = '7';
            }
        }
        browserInfo.os = os;
        browserInfo.osVersion = osVersion;
        return browserInfo;
    };
    return BrowserDetection;
}());
/* harmony default export */ var lib_BrowserDetection = (BrowserDetection_BrowserDetection);

// CONCATENATED MODULE: ./lib/DisplayMode.js
var DisplayMode;
(function (DisplayMode) {
    DisplayMode[DisplayMode["Read"] = 1] = "Read";
    DisplayMode[DisplayMode["Edit"] = 2] = "Edit";
})(DisplayMode || (DisplayMode = {}));
/* harmony default export */ var lib_DisplayMode = (DisplayMode);

// CONCATENATED MODULE: ./lib/Guid.js



var Guid_Guid = (function () {
    function Guid(guid) {
        this._guid = guid;
    }
    Guid.newGuid = function (randomNumberGenerator) {
        return new Guid(Guid._generateGuid(randomNumberGenerator));
    };
    Guid.parse = function (guidString) {
        var guid = Guid.tryParse(guidString);
        if (!guid) {
            throw new Error(lib_Text.format(SPCoreLibraryStrings_resx.invalidGuidStringError, guidString));
        }
        return guid;
    };
    Guid.tryParse = function (guid) {
        if (guid) {
            guid = Guid._normalize(guid);
            if (Guid._guidRegEx.test(guid)) {
                return new Guid(guid);
            }
        }
        return undefined;
    };
    Guid.isValid = function (guid) {
        if (guid) {
            guid = Guid._normalize(guid);
            if (Guid._guidRegEx.test(guid)) {
                return true;
            }
        }
        return false;
    };
    Guid._normalize = function (guid) {
        lib_Validate.isNonemptyString(guid, 'guid');
        var result = /^Guid\((.*)\)/i.exec(guid); 
        if (result) {
            guid = result[1];
        }
        if (guid.length === 38) {
            guid = guid.substr(1, 36);
        }
        return guid.toLowerCase();
    };
    Guid._generateGuid = function (randomNumberGenerator) {
        return 'AAAAAAAA-AAAA-4AAA-BAAA-AAAAAAAAAAAA'.replace(/[AB]/g, 
        function (character) {
            var randomNumber = randomNumberGenerator ? randomNumberGenerator.generate() : Math.random();
            var num = randomNumber * 16 | 0;
            var masked = character === 'A' ? num : (num & 0x3 | 0x8);
            return masked.toString(16);
        });
    };
    Guid.prototype.equals = function (guid) {
        lib_Validate.isNotNullOrUndefined(guid, 'guid');
        return guid && this._guid.toString() === guid.toString();
    };
    Guid.prototype.toString = function () {
        return this._guid;
    };
    Guid.empty = new Guid('00000000-0000-0000-0000-000000000000');
    Guid._guidRegEx = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return Guid;
}());
/* harmony default export */ var lib_Guid = (Guid_Guid);

// CONCATENATED MODULE: ./lib/JsonUtilities.js
var JsonUtilities = (function () {
    function JsonUtilities() {
    }
    JsonUtilities.encode = function (json) {
        if (!json) {
            return undefined;
        }
        JsonUtilities._escapableChars.lastIndex = 0;
        return JsonUtilities._escapableChars.test(json) ? json.replace(this._escapableChars, function (a) {
            var c = JsonUtilities._substibuteChars[a];
            return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) : json;
    };
    JsonUtilities._escapableChars = /[\\\"\'\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    JsonUtilities._substibuteChars = {
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"': '\\"',
        '\'': '\\\'',
        '\\': '\\\\'
    };
    return JsonUtilities;
}());
/* harmony default export */ var lib_JsonUtilities = (JsonUtilities);

// EXTERNAL MODULE: external "@microsoft/sp-lodash-subset"
var sp_lodash_subset_ = __webpack_require__(2);
var sp_lodash_subset__default = /*#__PURE__*/__webpack_require__.n(sp_lodash_subset_);

// CONCATENATED MODULE: ./lib/url/UrlUtilities.js


var URL_PROTOCOL_REGEX = /^\w+\:\/\//;
var BASE64_IMAGE_REGEX = /^data:(\w+\/\w+)?(;charset=[\w-]+)?(;base64)?,.*/i;
var UrlUtilities_UrlUtilities = (function () {
    function UrlUtilities() {
    }
    UrlUtilities.resolve = function (url, baseUrl) {
        lib_Validate.isNonemptyString(url, 'url');
        lib_Validate.isNonemptyString(baseUrl, 'baseUrl');
        var isRelativeUrl = !url.match(URL_PROTOCOL_REGEX);
        if (isRelativeUrl) {
            return UrlUtilities.removeEndSlash(baseUrl) + "/" + UrlUtilities.removeLeadingSlash(url);
        }
        else {
            return url;
        }
    };
    UrlUtilities.removeEndSlash = function (url) {
        return sp_lodash_subset_["trimEnd"](url, '/');
    };
    UrlUtilities.removeLeadingSlash = function (url) {
        return sp_lodash_subset_["trimStart"](url, '/');
    };
    UrlUtilities.convertToODataStringLiteral = function (value) {
        lib_Validate.isNotNullOrUndefined(value, 'value');
        value = value.replace(/'/g, "''");
        value = "'" + value + "'";
        return value;
    };
    UrlUtilities.isDataUrl = function (url) {
        lib_Validate.isNotNullOrUndefined(url, 'url');
        return !!url.match(BASE64_IMAGE_REGEX);
    };
    return UrlUtilities;
}());
/* harmony default export */ var url_UrlUtilities = (UrlUtilities_UrlUtilities);

// CONCATENATED MODULE: ./lib/url/UrlQueryParameterCollection.js
var UrlQueryParameterCollection = (function () {
    function UrlQueryParameterCollection(url) {
        this._queryParameterList = this._getUrlQueryParameterArray(url);
    }
    UrlQueryParameterCollection.prototype.getValue = function (param) {
        for (var _i = 0, _a = this._queryParameterList; _i < _a.length; _i++) {
            var queryParam = _a[_i];
            if (param === undefined) {
                if (queryParam.key === undefined) {
                    return queryParam.value;
                }
                continue;
            }
            else if (param.toUpperCase() === queryParam.key) {
                return queryParam.value;
            }
        }
        return undefined;
    };
    UrlQueryParameterCollection.prototype.getValues = function (param) {
        var queryParams = [];
        for (var _i = 0, _a = this._queryParameterList; _i < _a.length; _i++) {
            var queryParam = _a[_i];
            if (param === undefined) {
                if (queryParam.key === undefined) {
                    queryParams.push(queryParam.value);
                }
                continue;
            }
            else if (param.toUpperCase() === queryParam.key) {
                queryParams.push(queryParam.value);
            }
        }
        return queryParams.length > 0 ? queryParams : undefined;
    };
    UrlQueryParameterCollection.prototype._getUrlQueryParameterArray = function (url) {
        var queryParameterList = [];
        var urlParser = document.createElement('a');
        urlParser.href = url;
        var queryParams = urlParser.search.substring(1).split('&');
        for (var _i = 0, queryParams_1 = queryParams; _i < queryParams_1.length; _i++) {
            var queryParam = queryParams_1[_i];
            if (queryParam !== '') {
                var equalsIndex = queryParam.indexOf('=');
                var key = void 0;
                var value = void 0;
                if (equalsIndex < 0) {
                    key = queryParam;
                    value = undefined;
                }
                else if (equalsIndex === 0) {
                    key = '';
                    value = queryParam.length === 1 ? '' : queryParam.substring(1);
                }
                else {
                    key = queryParam.substring(0, equalsIndex);
                    value =
                        queryParam.substring(equalsIndex).length === 1 ?
                            '' :
                            queryParam.substring(equalsIndex + 1);
                }
                queryParameterList.push({
                    key: decodeURIComponent(key.toUpperCase()),
                    value: value
                });
            }
            else {
                queryParameterList.push({
                    key: undefined,
                    value: undefined
                });
            }
        }
        return queryParameterList;
    };
    return UrlQueryParameterCollection;
}());
/* harmony default export */ var url_UrlQueryParameterCollection = (UrlQueryParameterCollection);

// CONCATENATED MODULE: ./lib/serviceScope/ServiceKey.js


var SERVICEKEY_LASTID_WINDOW_VAR = '_SPFX_ServiceKey_lastId';
var ServiceKey_ServiceKey = (function () {
    function ServiceKey(id, name, defaultCreator) {
        this.id = id;
        this.name = name;
        this.defaultCreator = defaultCreator;
    }
    ServiceKey.create = function (name, serviceClass) {
        lib_Validate.isNotNullOrUndefined(serviceClass, 'serviceClass');
        return ServiceKey.createCustom(name, function (serviceScope) {
            return new serviceClass(serviceScope);
        });
    };
    ServiceKey.createCustom = function (name, defaultCreator) {
        lib_Validate.isNonemptyString(name, 'name');
        lib_Validate.isNotNullOrUndefined(defaultCreator, 'defaultCreator');
        var numericId;
        var lastId = window[SERVICEKEY_LASTID_WINDOW_VAR];
        if (lastId !== undefined && typeof (lastId) === 'number') {
            numericId = lastId + 1;
            if (numericId === lastId) {
                throw new Error('ServiceKey.createCustom() counter overflow');
            }
        }
        else {
            numericId = 1;
        }
        window[SERVICEKEY_LASTID_WINDOW_VAR] = numericId;
        var id = lib_Text.replaceAll(name, ' ', '') + '_' + numericId;
        return new ServiceKey(id, name, defaultCreator);
    };
    return ServiceKey;
}());
/* harmony default export */ var serviceScope_ServiceKey = (ServiceKey_ServiceKey);

// CONCATENATED MODULE: ./lib/serviceScope/provider/TimeProvider.js

var TimeProvider_TimeProvider = (function () {
    function TimeProvider(serviceScope) {
    }
    TimeProvider.prototype.getDate = function () {
        return new Date();
    };
    TimeProvider.prototype.getTimestamp = function () {
        return performance.now();
    };
    TimeProvider.serviceKey = serviceScope_ServiceKey.create('sp-core-library:TimeProvider', TimeProvider);
    return TimeProvider;
}());
/* harmony default export */ var provider_TimeProvider = (TimeProvider_TimeProvider);

// CONCATENATED MODULE: ./lib/serviceScope/provider/RandomNumberGenerator.js

var RandomNumberGenerator_RandomNumberGenerator = (function () {
    function RandomNumberGenerator(serviceScope) {
    }
    RandomNumberGenerator.prototype.generate = function () {
        return Math.random();
    };
    RandomNumberGenerator.serviceKey = serviceScope_ServiceKey.create('sp-core-library:RandomNumberGenerator', RandomNumberGenerator);
    return RandomNumberGenerator;
}());
/* harmony default export */ var provider_RandomNumberGenerator = (RandomNumberGenerator_RandomNumberGenerator);

// CONCATENATED MODULE: ./lib/serviceScope/ServiceScope.js


var ServiceScope_ServiceScope = (function () {
    function ServiceScope(parent) {
        this._parent = parent;
        this._registrations = {};
        this._pendingCallbacks = [];
        this._finished = false;
        this._autocreating = false;
    }
    ServiceScope.startNewRoot = function () {
        return new ServiceScope(undefined);
    };
    ServiceScope.prototype.createAndProvide = function (serviceKey, simpleServiceClass) {
        return this.provide(serviceKey, new simpleServiceClass(this));
    };
    ServiceScope.prototype.createDefaultAndProvide = function (serviceKey) {
        var service = serviceKey.defaultCreator(this);
        return this.provide(serviceKey, service);
    };
    ServiceScope.prototype.consume = function (serviceKey) {
        if (!this._finished) {
            throw new Error(SPCoreLibraryStrings_resx.serviceScopeConsumingBeforeFinished);
        }
        if (this._autocreating) {
            throw new Error(SPCoreLibraryStrings_resx.serviceScopeConsumingDuringAutoCreation);
        }
        var registration = this._registrations[serviceKey.id];
        if (registration) {
            return registration.service;
        }
        if (this._parent) {
            return this._parent.consume(serviceKey);
        }
        var autocreatedService = undefined;
        this._autocreating = true;
        try {
            autocreatedService = serviceKey.defaultCreator(this);
            this._registerService(serviceKey, autocreatedService);
        }
        finally {
            this._autocreating = false;
        }
        if (autocreatedService === undefined) {
            throw Error('ServiceKey must have an type');
        }
        this._processPendingCallbacks();
        return autocreatedService;
    };
    ServiceScope.prototype.finish = function () {
        if (this._finished) {
            throw new Error(SPCoreLibraryStrings_resx.serviceScopeAlreadyFinishedError);
        }
        this._finished = true;
        this._processPendingCallbacks();
    };
    ServiceScope.prototype.getParent = function () {
        return this._parent;
    };
    ServiceScope.prototype.whenFinished = function (callback) {
        if (this._finished && !this._autocreating) {
            callback();
        }
        else {
            this._pendingCallbacks.push(callback);
        }
    };
    ServiceScope.prototype.provide = function (serviceKey, service) {
        if (this._finished) {
            throw new Error(SPCoreLibraryStrings_resx.serviceScopeProvideServiceAfterFinishedError);
        }
        if (this._registrations[serviceKey.id]) {
            throw new Error(lib_Text.format(SPCoreLibraryStrings_resx.serviceScopeProvideServiceThatAlreadyExists, serviceKey.name));
        }
        this._registerService(serviceKey, service);
        return service;
    };
    ServiceScope.prototype.startNewChild = function () {
        return new ServiceScope(this);
    };
    ServiceScope.prototype._registerService = function (serviceKey, service) {
        this._registrations[serviceKey.id] = { serviceKey: serviceKey, service: service };
    };
    ServiceScope.prototype._processPendingCallbacks = function () {
        var pendingCallbacks = this._pendingCallbacks;
        this._pendingCallbacks = [];
        for (var _i = 0, pendingCallbacks_1 = pendingCallbacks; _i < pendingCallbacks_1.length; _i++) {
            var pendingCallback = pendingCallbacks_1[_i];
            pendingCallback();
        }
    };
    return ServiceScope;
}());
/* harmony default export */ var serviceScope_ServiceScope = (ServiceScope_ServiceScope);

// CONCATENATED MODULE: ./lib/log/DefaultLogHandler.js


var DefaultLogHandler_DefaultLogHandler = (function () {
    function DefaultLogHandler() {
    }
    DefaultLogHandler.prototype.verbose = function (source, message, scope) {
        if (true) {
            console.log(lib_Text.format(SPCoreLibraryStrings_resx.logVerboseLevelMessage, source));
        }
    };
    DefaultLogHandler.prototype.info = function (source, message, scope) {
        if (true) {
            console.info(lib_Text.format(SPCoreLibraryStrings_resx.logInfoLevelMessage, source));
        }
    };
    DefaultLogHandler.prototype.warn = function (source, message, scope) {
        if (true) {
            console.warn(lib_Text.format(SPCoreLibraryStrings_resx.logWarningLevelMessage, source));
        }
    };
    DefaultLogHandler.prototype.error = function (source, error, scope) {
        if (true) {
            console.error(lib_Text.format(SPCoreLibraryStrings_resx.logErrorLevelMessage, source, error.message));
        }
    };
    return DefaultLogHandler;
}());
/* harmony default export */ var log_DefaultLogHandler = (DefaultLogHandler_DefaultLogHandler);

// CONCATENATED MODULE: ./lib/log/Log.js

var Log_Log = (function () {
    function Log() {
    }
    Log._initialize = function (logHandler) {
        Log._logHandler = logHandler;
    };
    Log.verbose = function (source, message, scope) {
        Log._logHandler.verbose(source, message, scope);
    };
    Log.info = function (source, message, scope) {
        Log._logHandler.info(source, message, scope);
    };
    Log.warn = function (source, message, scope) {
        Log._logHandler.warn(source, message, scope);
    };
    Log.error = function (source, error, scope) {
        Log._logHandler.error(source, error, scope);
    };
    Log._logHandler = new log_DefaultLogHandler();
    return Log;
}());
/* harmony default export */ var log_Log = (Log_Log);

// CONCATENATED MODULE: ./lib/Session.js



var Session_Session = (function () {
    function Session() {
    }
    Session._initialize = function (data) {
        lib_Validate.isNotNullOrUndefined(data, 'data');
        Session._applicationId = lib_Guid.tryParse(data.applicationId) || lib_Guid.empty;
        var pageIdGuid = lib_Guid.tryParse(data.pageId);
        if (!pageIdGuid) {
            log_Log.warn('Session', 'The pageId parameter was undefined or invalid. Generating a new Guid');
            pageIdGuid = lib_Guid.newGuid();
        }
        Session._pageId = pageIdGuid;
    };
    Session._changePage = function () {
        Session._pageId = lib_Guid.newGuid();
    };
    Object.defineProperty(Session, "applicationId", {
        get: function () {
            return this._applicationId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session, "pageId", {
        get: function () {
            return this._pageId;
        },
        enumerable: true,
        configurable: true
    });
    return Session;
}());
/* harmony default export */ var lib_Session = (Session_Session);

// CONCATENATED MODULE: ./lib/Environment.js


var EnvironmentType;
(function (EnvironmentType) {
    EnvironmentType[EnvironmentType["Test"] = 0] = "Test";
    EnvironmentType[EnvironmentType["Local"] = 1] = "Local";
    EnvironmentType[EnvironmentType["SharePoint"] = 2] = "SharePoint";
    EnvironmentType[EnvironmentType["ClassicSharePoint"] = 3] = "ClassicSharePoint";
})(EnvironmentType = EnvironmentType || (EnvironmentType = {}));
var Environment_Environment = (function () {
    function Environment() {
    }
    Environment._initialize = function (data) {
        lib_Validate.isNotNullOrUndefined(data, 'data');
        Environment._type = data.type;
        lib_Validate.isNotNullOrUndefined(Environment._type, 'environmentType');
        if (!EnvironmentType.hasOwnProperty(data.type.toString())) {
            throw new Error(SPCoreLibraryStrings_resx.invalidEnvironmentTypeError);
        }
    };
    Object.defineProperty(Environment, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    return Environment;
}());
/* harmony default export */ var lib_Environment = (Environment_Environment);

// CONCATENATED MODULE: ./lib/SPFlight.js
var DISABLED_FLIGHT_PREFIX = '!';
var SPFX_DEBUG_FLIGHT_ID = 205;
var SPFlight = (function () {
    function SPFlight() {
    }
    SPFlight.initialize = function (flights) {
        this._isInitialized = true;
        this._enabledFlightsMap = flights || [];
        this._forceEnabledFlights = [];
        this._forceDisabledFlights = [];
    };
    Object.defineProperty(SPFlight, "isDebugFlightEnabled", {
        get: function () {
            return SPFlight.isEnabled(SPFX_DEBUG_FLIGHT_ID);
        },
        enumerable: true,
        configurable: true
    });
    SPFlight.setDebugFlights = function (debugFlights) {
        if (!this._isInitialized) {
            throw new Error('Flights are not initialized. Can\'t set debug flights.');
        }
        if (debugFlights && debugFlights.length > 0) {
            try {
                var debugFlightStrings = debugFlights.split(',');
                this._forceEnabledFlights = debugFlightStrings
                    .filter(function (value) { return value[0] !== DISABLED_FLIGHT_PREFIX; })
                    .map(function (value) { return parseInt(value, 10); })
                    .filter(function (value) { return !isNaN(value); });
                this._forceDisabledFlights = debugFlightStrings
                    .filter(function (value) { return value[0] === DISABLED_FLIGHT_PREFIX; })
                    .map(function (value) { return parseInt(value.slice(1), 10); })
                    .filter(function (value) { return !isNaN(value); });
                console.log("Debug flights are enabled.");
                if (this._forceEnabledFlights.length > 0) {
                    console.log("Enabled flights: " + this._forceEnabledFlights.join(', '));
                }
                if (this._forceDisabledFlights.length > 0) {
                    console.log("Disabled flights: " + this._forceDisabledFlights.join(', '));
                }
            }
            catch (error) {
                this._forceEnabledFlights = [];
                this._forceDisabledFlights = [];
                console.log("Error parsing debugFlights query string parameter: " + error);
            }
        }
        this._validateDebugFlights();
    };
    SPFlight.isEnabled = function (flight) {
        if (!this._isInitialized && !false) {
            throw new Error("Flights are not initialized. Flight requested: " + flight);
        }
        if (!flight || flight < 0) {
            return false;
        }
        if (this._forceEnabledFlights.indexOf(flight) !== -1) {
            return true;
        }
        if (this._forceDisabledFlights.indexOf(flight) !== -1) {
            return false;
        }
        var enabledFlightsIndex = flight >> 5;
        if (enabledFlightsIndex < 0 || enabledFlightsIndex >= this._enabledFlightsMap.length) {
            return false;
        }
        var bitMask = 1 << (flight & 31);
        return (this._enabledFlightsMap[enabledFlightsIndex] & bitMask) !== 0;
    };
    SPFlight._validateDebugFlights = function () {
        var debugFlightsSet = new Set(this._forceEnabledFlights.concat(this._forceDisabledFlights));
        if (debugFlightsSet.size < (this._forceEnabledFlights.length + this._forceDisabledFlights.length)) {
            throw new Error('There are flights that are forced to be both enabled and disabled');
        }
    };
    SPFlight._isInitialized = false;
    SPFlight._forceEnabledFlights = [];
    SPFlight._forceDisabledFlights = [];
    SPFlight._enabledFlightsMap = [];
    return SPFlight;
}());
/* harmony default export */ var lib_SPFlight = (SPFlight);

// CONCATENATED MODULE: ./lib/SPKillSwitch.js

var SPKillSwitch_SPKillSwitch = (function () {
    function SPKillSwitch() {
    }
    SPKillSwitch.initialize = function (killSwitchGuids) {
        this._isInitialized = true;
        this._activatedKillSwitches = new Map();
        if (killSwitchGuids) {
            for (var _i = 0, _a = Object.keys(killSwitchGuids); _i < _a.length; _i++) {
                var killSwitchGuid = _a[_i];
                var normalizedKillSwitchGuid = lib_Guid.tryParse(killSwitchGuid);
                if (normalizedKillSwitchGuid) {
                    this._activatedKillSwitches.set(normalizedKillSwitchGuid.toString(), true);
                }
            }
        }
    };
    SPKillSwitch.setDebugKillswitches = function (debugKillswitches) {
        if (!this._isInitialized && !false) {
            throw new Error('Killswitches are not initialized. Can\'t set debug killswitched.');
        }
        if (debugKillswitches && debugKillswitches.length) {
            try {
                for (var _i = 0, _a = debugKillswitches.split(',').map(function (value) { return lib_Guid.tryParse(value); }); _i < _a.length; _i++) {
                    var killSwitch = _a[_i];
                    if (killSwitch) {
                        this._activatedKillSwitches.set(killSwitch.toString(), true);
                    }
                }
            }
            catch (error) {
                console.log("Error parsing killSwitches query string parameter: " + error);
            }
        }
    };
    SPKillSwitch.isActivated = function (killSwitchGuid, date, featureName) {
        if (!this._isInitialized && !false) {
            throw new Error("Killswitches are not initialized. Killswitch requested: " + killSwitchGuid);
        }
        if (!killSwitchGuid) {
            return false;
        }
        return !!this._activatedKillSwitches.get(killSwitchGuid.toString());
    };
    SPKillSwitch._isInitialized = false;
    SPKillSwitch._activatedKillSwitches = new Map();
    return SPKillSwitch;
}());
/* harmony default export */ var lib_SPKillSwitch = (SPKillSwitch_SPKillSwitch);

// CONCATENATED MODULE: ./lib/SPError.js
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SPError_SPError = (function (_super) {
    __extends(SPError, _super);
    function SPError(errorCode, message, logProperties) {
        var _this = _super.call(this, message) || this;
        _this.__proto__ = SPError.prototype; 
        lib_Validate.isNonemptyString(errorCode, 'errorCode');
        lib_Validate.isNonemptyString(message, 'message');
        _this._errorCode = errorCode;
        _this.message = message;
        _this._logProperties = logProperties;
        _this.stack = (new Error()).stack || SPError._generateErrorStackForIE();
        return _this;
    }
    Object.defineProperty(SPError.prototype, "id", {
        get: function () {
            return -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPError.prototype, "category", {
        get: function () {
            return 'SPError';
        },
        enumerable: true,
        configurable: true
    });
    SPError._generateErrorStackForIE = function () {
        try {
            throw new Error();
        }
        catch (e) {
            return e.stack;
        }
    };
    SPError.prototype.toStringForUI = function () {
        return this._toString(true);
    };
    SPError.prototype.toString = function () {
        return this._toString();
    };
    SPError.prototype._toString = function (logDebug) {
        if (!this._errorString) {
            var errorMessageArray = [
                "[" + this.category + "." + this._errorCode + "]:",
                "" + this.message,
                ''
            ];
            if (logDebug || true) {
                if (this.innerError) {
                    errorMessageArray = errorMessageArray.concat([
                        SPCoreLibraryStrings_resx.spErrorInnerErrorText,
                        this.innerError.message
                    ]);
                }
                if (this.stack) {
                    errorMessageArray = errorMessageArray.concat([
                        SPCoreLibraryStrings_resx.spErrorCallStackText,
                        this.stack
                    ]);
                }
                if (this._logProperties) {
                    errorMessageArray = errorMessageArray.concat([
                        SPCoreLibraryStrings_resx.spErrorLogPropertiesText,
                        JSON.stringify(this._logProperties)
                    ]);
                }
            }
            this._errorString = errorMessageArray.join('\r\n');
        }
        return this._errorString;
    };
    return SPError;
}(Error));
/* harmony default export */ var lib_SPError = (SPError_SPError);

// CONCATENATED MODULE: ./lib/events/SPEventManager.js



var SPEventManager_SPEventManager = (function () {
    function SPEventManager() {
        this._listeners = new Map();
        this._raisedEvents = new Map();
    }
    Object.defineProperty(SPEventManager, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new SPEventManager();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    SPEventManager.prototype.raiseEvent = function (eventName, eventArgs) {
        lib_Validate.isNonemptyString(eventName, 'eventName');
        lib_Validate.isNotNullOrUndefined(eventArgs, 'eventArgs');
        return this._raiseEventInternal(eventName, eventArgs);
    };
    SPEventManager.prototype.raiseStickyEvent = function (eventName, eventArgs) {
        lib_Validate.isNonemptyString(eventName, 'eventName');
        lib_Validate.isNotNullOrUndefined(eventArgs, 'eventArgs');
        this._raisedEvents.set(eventName, eventArgs);
        return this._raiseEventInternal(eventName, eventArgs);
    };
    SPEventManager.prototype.registerEvent = function (eventName, observer, eventHandler) {
        lib_Validate.isNonemptyString(eventName, 'eventName');
        lib_Validate.isNotNullOrUndefined(observer, 'component');
        lib_Validate.isNotNullOrUndefined(eventHandler, 'eventHandler');
        if (!this._listeners.has(eventName)) {
            this._listeners.set(eventName, []);
        }
        this._listeners.get(eventName).push({ observer: observer, eventHandler: eventHandler });
        if (this._raisedEvents.has(eventName)) {
            eventHandler.call(observer, this._raisedEvents.get(eventName));
        }
    };
    SPEventManager.prototype.unregisterEvent = function (eventName, observer, eventHandler) {
        lib_Validate.isNonemptyString(eventName, 'eventName');
        lib_Validate.isNotNullOrUndefined(observer, 'component');
        lib_Validate.isNotNullOrUndefined(eventHandler, 'eventHandler');
        if (!this._listeners.has(eventName)) {
            return;
        }
        var listeners = this._listeners.get(eventName);
        var filteredListeners = listeners.filter(function (el) { return el.observer !== observer || el.eventHandler !== eventHandler; });
        if (filteredListeners.length === listeners.length) {
            var errorMessage = lib_Text.format(
            'Failed to remove event handler for component "{0}". Event handler was not registered.', observer.componentId);
            log_Log.error(SPEventManager._logSource, new Error(errorMessage));
        }
        this._listeners.set(eventName, filteredListeners);
    };
    SPEventManager.prototype.removeEvent = function (eventName) {
        lib_Validate.isNonemptyString(eventName, 'eventName');
        this._listeners.delete(eventName);
    };
    SPEventManager.prototype.removeEventsByPrefix = function (eventNamePrefix) {
        var _this = this;
        lib_Validate.isNonemptyString(eventNamePrefix, 'eventNamePrefix');
        var matchedKeys = [];
        this._listeners.forEach(function (value, key) {
            if (key.indexOf(eventNamePrefix) === 0) {
                matchedKeys.push(key);
            }
        });
        matchedKeys.forEach(function (key) { return _this._listeners.delete(key); });
    };
    SPEventManager.prototype._listenerCount = function (eventName) {
        if (!this._listeners.has(eventName)) {
            return 0;
        }
        return this._listeners.get(eventName).length;
    };
    SPEventManager.prototype._raiseEventInternal = function (eventName, eventArgs) {
        var _this = this;
        if (!this._listeners.has(eventName)) {
            return;
        }
        this._listeners.get(eventName).forEach(function (listener) {
            if (listener.observer.isDisposed) {
                _this.unregisterEvent(eventName, listener.observer, listener.eventHandler);
            }
            else {
                try {
                    listener.eventHandler.call(listener.observer, eventArgs);
                }
                catch (e) {
                    var errorMessage = lib_Text.format(
                    'Failed to execute event handler for component "{0}"', listener.observer.componentId);
                    log_Log.error(SPEventManager._logSource, new Error(errorMessage));
                }
            }
        });
    };
    SPEventManager._logSource = 'SPEventManager';
    return SPEventManager;
}());
/* harmony default export */ var events_SPEventManager = (SPEventManager_SPEventManager);

// CONCATENATED MODULE: ./lib/events/SPEvent.js


var SPEvent_SPEvent = (function () {
    function SPEvent(name) {
        lib_Validate.isNonemptyString(name, 'name');
        this._name = name;
    }
    SPEvent.prototype.add = function (observer, eventHandler) {
        lib_Validate.isNotNullOrUndefined(observer, 'component');
        lib_Validate.isNotNullOrUndefined(eventHandler, 'eventHandler');
        events_SPEventManager.instance.registerEvent(this._name, observer, eventHandler);
    };
    SPEvent.prototype.remove = function (observer, eventHandler) {
        lib_Validate.isNotNullOrUndefined(observer, 'component');
        lib_Validate.isNotNullOrUndefined(eventHandler, 'eventHandler');
        events_SPEventManager.instance.unregisterEvent(this._name, observer, eventHandler);
    };
    SPEvent.prototype._listenerCount = function () {
        return events_SPEventManager.instance._listenerCount(this._name);
    };
    return SPEvent;
}());
/* harmony default export */ var events_SPEvent = (SPEvent_SPEvent);

// CONCATENATED MODULE: ./lib/events/SPEventArgs.js
var SPEventArgs = (function () {
    function SPEventArgs() {
    }
    return SPEventArgs;
}());
/* harmony default export */ var events_SPEventArgs = (SPEventArgs);

// CONCATENATED MODULE: ./lib/deferredClass/DeferredClass.js
var DeferredClass = (function () {
    function DeferredClass() {
        var _this = this;
        this._onAfterLoadPromise = new Promise(function (resolve) { return _this._resolveOnAfterLoadCallbacks = resolve; });
    }
    DeferredClass._getInstance = function () {
        if (!this._internalInstance) {
            this._internalInstance = new this();
        }
        return this._internalInstance;
    };
    Object.defineProperty(DeferredClass.prototype, "isLoaded", {
        get: function () {
            return !!this._classType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeferredClass.prototype, "shouldLoad", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    DeferredClass.prototype.load = function () {
        var _this = this;
        if (!this._loadPromise) {
            if (this.shouldLoad) {
                this._loadPromise = this._internalLoad();
                this._loadPromise.then(function (type) {
                    _this._classType = type;
                    _this._resolveOnAfterLoadCallbacks();
                });
            }
            else {
                this._loadPromise = Promise.reject(new Error('shouldLoad returns false'));
            }
        }
        return this._loadPromise;
    };
    DeferredClass.prototype.onAfterLoad = function () {
        return this._onAfterLoadPromise;
    };
    return DeferredClass;
}());
/* harmony default export */ var deferredClass_DeferredClass = (DeferredClass);

// CONCATENATED MODULE: ./lib/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventArgs", function() { return EventArgs; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_BrowserDetection", function() { return lib_BrowserDetection; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DisplayMode", function() { return lib_DisplayMode; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Guid", function() { return lib_Guid; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "JsonUtilities", function() { return lib_JsonUtilities; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Text", function() { return lib_Text; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Version", function() { return lib_Version; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Validate", function() { return lib_Validate; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UrlUtilities", function() { return url_UrlUtilities; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UrlQueryParameterCollection", function() { return url_UrlQueryParameterCollection; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TimeProvider", function() { return provider_TimeProvider; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "RandomNumberGenerator", function() { return provider_RandomNumberGenerator; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ServiceKey", function() { return serviceScope_ServiceKey; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ServiceScope", function() { return serviceScope_ServiceScope; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Session", function() { return lib_Session; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Environment", function() { return lib_Environment; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "EnvironmentType", function() { return EnvironmentType; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_SPFlight", function() { return lib_SPFlight; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_SPKillSwitch", function() { return lib_SPKillSwitch; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SPError", function() { return lib_SPError; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Log", function() { return log_Log; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SPEvent", function() { return events_SPEvent; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SPEventArgs", function() { return events_SPEventArgs; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_SPEventManager", function() { return events_SPEventManager; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_DeferredClass", function() { return deferredClass_DeferredClass; });
var lib___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
























var Event = (function (_super) {
    lib___extends(Event, _super);
    function Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Event;
}(events_SPEvent));

var EventArgs = (function (_super) {
    lib___extends(EventArgs, _super);
    function EventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EventArgs;
}(events_SPEventArgs));




/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ })
/******/ ])}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
  var strings = {
    "_gIErrcTokcw+/VVwa+ReIA": {
      "invalidEnvironmentTypeError": "***EnvironmentType is invalid",
      "invalidGuidStringError": "***Invalid GUID string: \"{0}\"",
      "isFalseValidateError": "***The value for \"{0}\" is false",
      "isNullValidateError": "***The value for \"{0}\" must not be null",
      "isUndefinedValidateError": "***The value for \"{0}\" must not be undefined",
      "isEmptyStringValidateError": "***The value for \"{0}\" must not be an empty string",
      "isDisposedValidateError": "***The \"{0}\" object cannot be used because it has been disposed.",
      "invalidVersionStringError": "***Invalid version string: \"{0}\"",
      "logVerboseLevelMessage": "***{0}: VERBOSE {1}",
      "logInfoLevelMessage": "***{0}: {1}",
      "logWarningLevelMessage": "***{0}: WARNING {1}",
      "logErrorLevelMessage": "***{0}: ERROR: {1}",
      "serviceScopeConsumingBeforeFinished": "***Cannot consume services because the scope is not finished yet",
      "serviceScopeConsumingDuringAutoCreation": "***Cannot consume services during ServiceScope autocreation",
      "serviceScopeAlreadyFinishedError": "***The ServiceScope is already finished",
      "serviceScopeProvideServiceAfterFinishedError": "***Cannot register service because the scope is already finished",
      "serviceScopeProvideServiceThatAlreadyExists": "***The service key \"{0}\" has already been registered in this scope",
      "spErrorInnerErrorText": "***INNERERROR:",
      "spErrorCallStackText": "***CALLSTACK:",
      "spErrorLogPropertiesText": "***LOGPROPERTIES:",
      "dynamicDataManagerSourceAlreadyExists": "***A source with id \"{0}\" already exists.",
      "dynamicDataManagerSourceDoesntExist": "***No source with id \"{0}\" found."
    }
  };

  strings.default = strings;
  return strings;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ })
/******/ ])});;
//# sourceMappingURL=sp-core-library_en-us.js.map


define("73e1dc6c-8441-42cc-ad47-4bd3659f8a3a_1.7.1", [], function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function apply(e,r,t){switch(t.length){case 0:return e.call(r);case 1:return e.call(r,t[0]);case 2:return e.call(r,t[0],t[1]);case 3:return e.call(r,t[0],t[1],t[2])}return e.apply(r,t)}function arrayAggregator(e,r,t,n){for(var a=-1,s=null==e?0:e.length;++a<s;){var i=e[a];r(n,i,t(i),e)}return n}function arrayEach(e,r){for(var t=-1,n=null==e?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}function arrayFilter(e,r){for(var t=-1,n=null==e?0:e.length,a=0,s=[];++t<n;){var i=e[t];r(i,t,e)&&(s[a++]=i)}return s;
}function arrayIncludes(e,r){return!!(null==e?0:e.length)&&baseIndexOf(e,r,0)>-1}function arrayIncludesWith(e,r,t){for(var n=-1,a=null==e?0:e.length;++n<a;)if(t(r,e[n]))return!0;return!1}function arrayMap(e,r){for(var t=-1,n=null==e?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a}function arrayPush(e,r){for(var t=-1,n=r.length,a=e.length;++t<n;)e[a+t]=r[t];return e}function arrayReduce(e,r,t,n){var a=-1,s=null==e?0:e.length;for(n&&s&&(t=e[++a]);++a<s;)t=r(t,e[a],a,e);return t}function arraySome(e,r){
for(var t=-1,n=null==e?0:e.length;++t<n;)if(r(e[t],t,e))return!0;return!1}function asciiToArray(e){return e.split("")}function asciiWords(e){return e.match(reAsciiWord)||[]}function baseFindKey(e,r,t){var n;return t(e,function(e,t,a){if(r(e,t,a))return n=t,!1}),n}function baseFindIndex(e,r,t,n){for(var a=e.length,s=t+(n?1:-1);n?s--:++s<a;)if(r(e[s],s,e))return s;return-1}function baseIndexOf(e,r,t){return r===r?strictIndexOf(e,r,t):baseFindIndex(e,baseIsNaN,t)}function baseIsNaN(e){return e!==e}function baseProperty(e){
return function(r){return null==r?undefined:r[e]}}function basePropertyOf(e){return function(r){return null==e?undefined:e[r]}}function baseSortBy(e,r){var t=e.length;for(e.sort(r);t--;)e[t]=e[t].c;return e}function baseSum(e,r){for(var t,n=-1,a=e.length;++n<a;){var s=r(e[n]);s!==undefined&&(t=t===undefined?s:t+s)}return t}function baseTimes(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}function baseToPairs(e,r){return arrayMap(r,function(r){return[r,e[r]]})}function baseUnary(e){return function(r){
return e(r)}}function baseValues(e,r){return arrayMap(r,function(r){return e[r]})}function cacheHas(e,r){return e.has(r)}function charsStartIndex(e,r){for(var t=-1,n=e.length;++t<n&&baseIndexOf(r,e[t],0)>-1;);return t}function charsEndIndex(e,r){for(var t=e.length;t--&&baseIndexOf(r,e[t],0)>-1;);return t}function getValue(e,r){return null==e?undefined:e[r]}function hasUnicode(e){return reHasUnicode.test(e)}function hasUnicodeWord(e){return reHasUnicodeWord.test(e)}function iteratorToArray(e){for(var r,t=[];!(r=e.next()).done;)t.push(r.value);
return t}function mapToArray(e){var r=-1,t=Array(e.size);return e.forEach(function(e,n){t[++r]=[n,e]}),t}function overArg(e,r){return function(t){return e(r(t))}}function safeGet(e,r){return"__proto__"==r?undefined:e[r]}function setToArray(e){var r=-1,t=Array(e.size);return e.forEach(function(e){t[++r]=e}),t}function setToPairs(e){var r=-1,t=Array(e.size);return e.forEach(function(e){t[++r]=[e,e]}),t}function strictIndexOf(e,r,t){for(var n=t-1,a=e.length;++n<a;)if(e[n]===r)return n;return-1}function stringSize(e){
return hasUnicode(e)?unicodeSize(e):asciiSize(e)}function stringToArray(e){return hasUnicode(e)?unicodeToArray(e):asciiToArray(e)}function unicodeSize(e){for(var r=reUnicode.lastIndex=0;reUnicode.test(e);)++r;return r}function unicodeToArray(e){return e.match(reUnicode)||[]}function unicodeWords(e){return e.match(reUnicodeWord)||[]}function lodash(){}function Hash(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{},
this.size=0}function hashDelete(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}function hashGet(e){var r=this.__data__;if(nativeCreate){var t=r[e];return t===HASH_UNDEFINED?undefined:t}return hasOwnProperty.call(r,e)?r[e]:undefined}function hashHas(e){var r=this.__data__;return nativeCreate?r[e]!==undefined:hasOwnProperty.call(r,e)}function hashSet(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=nativeCreate&&r===undefined?HASH_UNDEFINED:r,this}function ListCache(e){
var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}function listCacheClear(){this.__data__=[],this.size=0}function listCacheDelete(e){var r=this.__data__,t=assocIndexOf(r,e);return!(t<0)&&(t==r.length-1?r.pop():splice.call(r,t,1),--this.size,!0)}function listCacheGet(e){var r=this.__data__,t=assocIndexOf(r,e);return t<0?undefined:r[t][1]}function listCacheHas(e){return assocIndexOf(this.__data__,e)>-1}function listCacheSet(e,r){var t=this.__data__,n=assocIndexOf(t,e);
return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this}function MapCache(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}function mapCacheClear(){this.size=0,this.__data__={hash:new Hash,map:new(Map||ListCache),string:new Hash}}function mapCacheDelete(e){var r=getMapData(this,e).delete(e);return this.size-=r?1:0,r}function mapCacheGet(e){return getMapData(this,e).get(e)}function mapCacheHas(e){return getMapData(this,e).has(e)}function mapCacheSet(e,r){var t=getMapData(this,e),n=t.size;
return t.set(e,r),this.size+=t.size==n?0:1,this}function SetCache(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new MapCache;++r<t;)this.add(e[r])}function setCacheAdd(e){return this.__data__.set(e,HASH_UNDEFINED),this}function setCacheHas(e){return this.__data__.has(e)}function Stack(e){this.size=(this.__data__=new ListCache(e)).size}function stackClear(){this.__data__=new ListCache,this.size=0}function stackDelete(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function stackGet(e){
return this.__data__.get(e)}function stackHas(e){return this.__data__.has(e)}function stackSet(e,r){var t=this.__data__;if(t instanceof ListCache){var n=t.__data__;if(!Map||n.length<LARGE_ARRAY_SIZE-1)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new MapCache(n)}return t.set(e,r),this.size=t.size,this}function arrayLikeKeys(e,r){var t=isArray(e),n=!t&&isArguments(e),a=!t&&!n&&isBuffer(e),s=!t&&!n&&!a&&isTypedArray(e),i=t||n||a||s,o=i?baseTimes(e.length,String):[],u=o.length;for(var c in e)!r&&!hasOwnProperty.call(e,c)||i&&("length"==c||a&&("offset"==c||"parent"==c)||s&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||isIndex(c,u))||o.push(c);
return o}function assignMergeValue(e,r,t){(t===undefined||eq(e[r],t))&&(t!==undefined||r in e)||baseAssignValue(e,r,t)}function assignValue(e,r,t){var n=e[r];hasOwnProperty.call(e,r)&&eq(n,t)&&(t!==undefined||r in e)||baseAssignValue(e,r,t)}function assocIndexOf(e,r){for(var t=e.length;t--;)if(eq(e[t][0],r))return t;return-1}function baseAggregator(e,r,t,n){return baseEach(e,function(e,a,s){r(n,e,t(e),s)}),n}function baseAssign(e,r){return e&&copyObject(r,keys(r),e)}function baseAssignIn(e,r){return e&&copyObject(r,keysIn(r),e);
}function baseAssignValue(e,r,t){"__proto__"==r&&defineProperty?defineProperty(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}function baseClone(e,r,t,n,a,s){var i,o=r&CLONE_DEEP_FLAG,u=r&CLONE_FLAT_FLAG,c=r&CLONE_SYMBOLS_FLAG;if(t&&(i=a?t(e,n,a,s):t(e)),i!==undefined)return i;if(!isObject(e))return e;var l=isArray(e);if(l){if(i=initCloneArray(e),!o)return copyArray(e,i)}else{var f=getTag(e),g=f==funcTag||f==genTag;if(isBuffer(e))return cloneBuffer(e,o);if(f==objectTag||f==argsTag||g&&!a){
if(i=u||g?{}:initCloneObject(e),!o)return u?copySymbolsIn(e,baseAssignIn(i,e)):copySymbols(e,baseAssign(i,e))}else{if(!cloneableTags[f])return a?e:{};i=initCloneByTag(e,f,o)}}s||(s=new Stack);var d=s.get(e);if(d)return d;if(s.set(e,i),isSet(e))return e.forEach(function(n){i.add(baseClone(n,r,t,n,e,s))}),i;if(isMap(e))return e.forEach(function(n,a){i.set(a,baseClone(n,r,t,a,e,s))}),i;var y=c?u?getAllKeysIn:getAllKeys:u?keysIn:keys,p=l?undefined:y(e);return arrayEach(p||e,function(n,a){p&&(a=n,n=e[a]),
assignValue(i,a,baseClone(n,r,t,a,e,s))}),i}function baseDifference(e,r,t,n){var a=-1,s=arrayIncludes,i=!0,o=e.length,u=[],c=r.length;if(!o)return u;t&&(r=arrayMap(r,baseUnary(t))),n?(s=arrayIncludesWith,i=!1):r.length>=LARGE_ARRAY_SIZE&&(s=cacheHas,i=!1,r=new SetCache(r));e:for(;++a<o;){var l=e[a],f=null==t?l:t(l);if(l=n||0!==l?l:0,i&&f===f){for(var g=c;g--;)if(r[g]===f)continue e;u.push(l)}else s(r,f,n)||u.push(l)}return u}function baseFlatten(e,r,t,n,a){var s=-1,i=e.length;for(t||(t=isFlattenable),
a||(a=[]);++s<i;){var o=e[s];r>0&&t(o)?r>1?baseFlatten(o,r-1,t,n,a):arrayPush(a,o):n||(a[a.length]=o)}return a}function baseForOwn(e,r){return e&&baseFor(e,r,keys)}function baseGet(e,r){r=castPath(r,e);for(var t=0,n=r.length;null!=e&&t<n;)e=e[toKey(r[t++])];return t&&t==n?e:undefined}function baseGetAllKeys(e,r,t){var n=r(e);return isArray(e)?n:arrayPush(n,t(e))}function baseGetTag(e){return null==e?e===undefined?undefinedTag:nullTag:symToStringTag&&symToStringTag in Object(e)?getRawTag(e):objectToString(e);
}function baseHas(e,r){return null!=e&&hasOwnProperty.call(e,r)}function baseHasIn(e,r){return null!=e&&r in Object(e)}function baseIntersection(e,r,t){for(var n=t?arrayIncludesWith:arrayIncludes,a=e[0].length,s=e.length,i=s,o=Array(s),u=1/0,c=[];i--;){var l=e[i];i&&r&&(l=arrayMap(l,baseUnary(r))),u=nativeMin(l.length,u),o[i]=!t&&(r||a>=120&&l.length>=120)?new SetCache(i&&l):undefined}l=e[0];var f=-1,g=o[0];e:for(;++f<a&&c.length<u;){var d=l[f],y=r?r(d):d;if(d=t||0!==d?d:0,!(g?cacheHas(g,y):n(c,y,t))){
for(i=s;--i;){var p=o[i];if(!(p?cacheHas(p,y):n(e[i],y,t)))continue e}g&&g.push(y),c.push(d)}}return c}function baseInverter(e,r,t,n){return baseForOwn(e,function(e,a,s){r(n,t(e),a,s)}),n}function baseIsArguments(e){return isObjectLike(e)&&baseGetTag(e)==argsTag}function baseIsEqual(e,r,t,n,a){return e===r||(null==e||null==r||!isObjectLike(e)&&!isObjectLike(r)?e!==e&&r!==r:baseIsEqualDeep(e,r,t,n,baseIsEqual,a))}function baseIsEqualDeep(e,r,t,n,a,s){var i=isArray(e),o=isArray(r),u=i?arrayTag:getTag(e),c=o?arrayTag:getTag(r);
u=u==argsTag?objectTag:u,c=c==argsTag?objectTag:c;var l=u==objectTag,f=c==objectTag,g=u==c;if(g&&isBuffer(e)){if(!isBuffer(r))return!1;i=!0,l=!1}if(g&&!l)return s||(s=new Stack),i||isTypedArray(e)?equalArrays(e,r,t,n,a,s):equalByTag(e,r,u,t,n,a,s);if(!(t&COMPARE_PARTIAL_FLAG)){var d=l&&hasOwnProperty.call(e,"__wrapped__"),y=f&&hasOwnProperty.call(r,"__wrapped__");if(d||y){var p=d?e.value():e,b=y?r.value():r;return s||(s=new Stack),a(p,b,t,n,s)}}return!!g&&(s||(s=new Stack),equalObjects(e,r,t,n,a,s));
}function baseIsMap(e){return isObjectLike(e)&&getTag(e)==mapTag}function baseIsMatch(e,r,t,n){var a=t.length,s=a,i=!n;if(null==e)return!s;for(e=Object(e);a--;){var o=t[a];if(i&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++a<s;){o=t[a];var u=o[0],c=e[u],l=o[1];if(i&&o[2]){if(c===undefined&&!(u in e))return!1}else{var f=new Stack;if(n)var g=n(c,l,u,e,r,f);if(!(g===undefined?baseIsEqual(l,c,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG,n,f):g))return!1}}return!0}function baseIsNative(e){return!(!isObject(e)||isMasked(e))&&(isFunction(e)?reIsNative:reIsHostCtor).test(toSource(e));
}function baseIsRegExp(e){return isObjectLike(e)&&baseGetTag(e)==regexpTag}function baseIsSet(e){return isObjectLike(e)&&getTag(e)==setTag}function baseIsTypedArray(e){return isObjectLike(e)&&isLength(e.length)&&!!typedArrayTags[baseGetTag(e)]}function baseIteratee(e){return"function"==typeof e?e:null==e?identity:"object"==typeof e?isArray(e)?baseMatchesProperty(e[0],e[1]):baseMatches(e):property(e)}function baseKeys(e){if(!isPrototype(e))return nativeKeys(e);var r=[];for(var t in Object(e))hasOwnProperty.call(e,t)&&"constructor"!=t&&r.push(t);
return r}function baseKeysIn(e){if(!isObject(e))return nativeKeysIn(e);var r=isPrototype(e),t=[];for(var n in e)("constructor"!=n||!r&&hasOwnProperty.call(e,n))&&t.push(n);return t}function baseMap(e,r){var t=-1,n=isArrayLike(e)?Array(e.length):[];return baseEach(e,function(e,a,s){n[++t]=r(e,a,s)}),n}function baseMatches(e){var r=getMatchData(e);return 1==r.length&&r[0][2]?matchesStrictComparable(r[0][0],r[0][1]):function(t){return t===e||baseIsMatch(t,e,r)}}function baseMatchesProperty(e,r){return isKey(e)&&isStrictComparable(r)?matchesStrictComparable(toKey(e),r):function(t){
var n=get(t,e);return n===undefined&&n===r?hasIn(t,e):baseIsEqual(r,n,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG)}}function baseMerge(e,r,t,n,a){e!==r&&baseFor(r,function(s,i){if(isObject(s))a||(a=new Stack),baseMergeDeep(e,r,i,t,baseMerge,n,a);else{var o=n?n(safeGet(e,i),s,i+"",e,r,a):undefined;o===undefined&&(o=s),assignMergeValue(e,i,o)}},keysIn)}function baseMergeDeep(e,r,t,n,a,s,i){var o=safeGet(e,t),u=safeGet(r,t),c=i.get(u);if(c)return assignMergeValue(e,t,c),undefined;var l=s?s(o,u,t+"",e,r,i):undefined,f=l===undefined;
if(f){var g=isArray(u),d=!g&&isBuffer(u),y=!g&&!d&&isTypedArray(u);l=u,g||d||y?isArray(o)?l=o:isArrayLikeObject(o)?l=copyArray(o):d?(f=!1,l=cloneBuffer(u,!0)):y?(f=!1,l=cloneTypedArray(u,!0)):l=[]:isPlainObject(u)||isArguments(u)?(l=o,isArguments(o)?l=toPlainObject(o):(!isObject(o)||n&&isFunction(o))&&(l=initCloneObject(u))):f=!1}f&&(i.set(u,l),a(l,u,n,s,i),i.delete(u)),assignMergeValue(e,t,l)}function baseOrderBy(e,r,t){var n=-1;return r=arrayMap(r.length?r:[identity],baseUnary(getIteratee())),baseSortBy(baseMap(e,function(e,t,a){
return{a:arrayMap(r,function(r){return r(e)}),b:++n,c:e}}),function(e,r){return compareMultiple(e,r,t)})}function basePropertyDeep(e){return function(r){return baseGet(r,e)}}function baseRandom(e,r){return e+nativeFloor(nativeRandom()*(r-e+1))}function baseRest(e,r){return setToString(overRest(e,r,identity),e+"")}function baseSet(e,r,t,n){if(!isObject(e))return e;r=castPath(r,e);for(var a=-1,s=r.length,i=s-1,o=e;null!=o&&++a<s;){var u=toKey(r[a]),c=t;if(a!=i){var l=o[u];c=n?n(l,u,o):undefined,c===undefined&&(c=isObject(l)?l:isIndex(r[a+1])?[]:{});
}assignValue(o,u,c),o=o[u]}return e}function baseSlice(e,r,t){var n=-1,a=e.length;r<0&&(r=-r>a?0:a+r),t=t>a?a:t,t<0&&(t+=a),a=r>t?0:t-r>>>0,r>>>=0;for(var s=Array(a);++n<a;)s[n]=e[n+r];return s}function baseToString(e){if("string"==typeof e)return e;if(isArray(e))return arrayMap(e,baseToString)+"";if(isSymbol(e))return symbolToString?symbolToString.call(e):"";var r=e+"";return"0"==r&&1/e==-INFINITY?"-0":r}function baseUniq(e,r,t){var n=-1,a=arrayIncludes,s=e.length,i=!0,o=[],u=o;if(t)i=!1,a=arrayIncludesWith;else if(s>=LARGE_ARRAY_SIZE){
var c=r?null:createSet(e);if(c)return setToArray(c);i=!1,a=cacheHas,u=new SetCache}else u=r?[]:o;e:for(;++n<s;){var l=e[n],f=r?r(l):l;if(l=t||0!==l?l:0,i&&f===f){for(var g=u.length;g--;)if(u[g]===f)continue e;r&&u.push(f),o.push(l)}else a(u,f,t)||(u!==o&&u.push(f),o.push(l))}return o}function baseUnset(e,r){return r=castPath(r,e),e=parent(e,r),null==e||delete e[toKey(last(r))]}function baseUpdate(e,r,t,n){return baseSet(e,r,t(baseGet(e,r)),n)}function castArrayLikeObject(e){return isArrayLikeObject(e)?e:[];
}function castFunction(e){return"function"==typeof e?e:identity}function castPath(e,r){return isArray(e)?e:isKey(e,r)?[e]:stringToPath(toString(e))}function castSlice(e,r,t){var n=e.length;return t=t===undefined?n:t,!r&&t>=n?e:baseSlice(e,r,t)}function cloneBuffer(e,r){if(r)return e.slice();var t=e.length,n=allocUnsafe?allocUnsafe(t):new e.constructor(t);return e.copy(n),n}function cloneArrayBuffer(e){var r=new e.constructor(e.byteLength);return new Uint8Array(r).set(new Uint8Array(e)),r}function cloneDataView(e,r){
return new e.constructor(r?cloneArrayBuffer(e.buffer):e.buffer,e.byteOffset,e.byteLength)}function cloneRegExp(e){var r=new e.constructor(e.source,reFlags.exec(e));return r.lastIndex=e.lastIndex,r}function cloneSymbol(e){return symbolValueOf?Object(symbolValueOf.call(e)):{}}function cloneTypedArray(e,r){return new e.constructor(r?cloneArrayBuffer(e.buffer):e.buffer,e.byteOffset,e.length)}function compareAscending(e,r){if(e!==r){var t=e!==undefined,n=null===e,a=e===e,s=isSymbol(e),i=r!==undefined,o=null===r,u=r===r,c=isSymbol(r);
if(!o&&!c&&!s&&e>r||s&&i&&u&&!o&&!c||n&&i&&u||!t&&u||!a)return 1;if(!n&&!s&&!c&&e<r||c&&t&&a&&!n&&!s||o&&t&&a||!i&&a||!u)return-1}return 0}function compareMultiple(e,r,t){for(var n=-1,a=e.a,s=r.a,i=a.length,o=t.length;++n<i;){var u=compareAscending(a[n],s[n]);if(u){if(n>=o)return u;return u*("desc"==t[n]?-1:1)}}return e.b-r.b}function copyArray(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}function copyObject(e,r,t,n){var a=!t;t||(t={});for(var s=-1,i=r.length;++s<i;){var o=r[s],u=n?n(t[o],e[o],o,t,e):undefined;
u===undefined&&(u=e[o]),a?baseAssignValue(t,o,u):assignValue(t,o,u)}return t}function copySymbols(e,r){return copyObject(e,getSymbols(e),r)}function copySymbolsIn(e,r){return copyObject(e,getSymbolsIn(e),r)}function createAggregator(e,r){return function(t,n){var a=isArray(t)?arrayAggregator:baseAggregator,s=r?r():{};return a(t,e,getIteratee(n,2),s)}}function createAssigner(e){return baseRest(function(r,t){var n=-1,a=t.length,s=a>1?t[a-1]:undefined,i=a>2?t[2]:undefined;for(s=e.length>3&&"function"==typeof s?(a--,
s):undefined,i&&isIterateeCall(t[0],t[1],i)&&(s=a<3?undefined:s,a=1),r=Object(r);++n<a;){var o=t[n];o&&e(r,o,n,s)}return r})}function createBaseEach(e,r){return function(t,n){if(null==t)return t;if(!isArrayLike(t))return e(t,n);for(var a=t.length,s=r?a:-1,i=Object(t);(r?s--:++s<a)&&n(i[s],s,i)!==!1;);return t}}function createBaseFor(e){return function(r,t,n){for(var a=-1,s=Object(r),i=n(r),o=i.length;o--;){var u=i[e?o:++a];if(t(s[u],u,s)===!1)break}return r}}function createCaseFirst(e){return function(r){
r=toString(r);var t=hasUnicode(r)?stringToArray(r):undefined,n=t?t[0]:r.charAt(0),a=t?castSlice(t,1).join(""):r.slice(1);return n[e]()+a}}function createCompounder(e){return function(r){return arrayReduce(words(deburr(r).replace(reApos,"")),e,"")}}function createFind(e){return function(r,t,n){var a=Object(r);if(!isArrayLike(r)){var s=getIteratee(t,3);r=keys(r),t=function(e){return s(a[e],e,a)}}var i=e(r,t,n);return i>-1?a[s?r[i]:i]:undefined}}function createInverter(e,r){return function(t,n){return baseInverter(t,e,r(n),{});
}}function createRound(e){var r=Math[e];return function(e,t){if(e=toNumber(e),t=null==t?0:nativeMin(toInteger(t),292)){var n=(toString(e)+"e").split("e");return n=(toString(r(n[0]+"e"+(+n[1]+t)))+"e").split("e"),+(n[0]+"e"+(+n[1]-t))}return r(e)}}function createToPairs(e){return function(r){var t=getTag(r);return t==mapTag?mapToArray(r):t==setTag?setToPairs(r):baseToPairs(r,e(r))}}function equalArrays(e,r,t,n,a,s){var i=t&COMPARE_PARTIAL_FLAG,o=e.length,u=r.length;if(o!=u&&!(i&&u>o))return!1;var c=s.get(e);
if(c&&s.get(r))return c==r;var l=-1,f=!0,g=t&COMPARE_UNORDERED_FLAG?new SetCache:undefined;for(s.set(e,r),s.set(r,e);++l<o;){var d=e[l],y=r[l];if(n)var p=i?n(y,d,l,r,e,s):n(d,y,l,e,r,s);if(p!==undefined){if(p)continue;f=!1;break}if(g){if(!arraySome(r,function(e,r){if(!cacheHas(g,r)&&(d===e||a(d,e,t,n,s)))return g.push(r)})){f=!1;break}}else if(d!==y&&!a(d,y,t,n,s)){f=!1;break}}return s.delete(e),s.delete(r),f}function equalByTag(e,r,t,n,a,s,i){switch(t){case dataViewTag:if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;
e=e.buffer,r=r.buffer;case arrayBufferTag:return!(e.byteLength!=r.byteLength||!s(new Uint8Array(e),new Uint8Array(r)));case boolTag:case dateTag:case numberTag:return eq(+e,+r);case errorTag:return e.name==r.name&&e.message==r.message;case regexpTag:case stringTag:return e==r+"";case mapTag:var o=mapToArray;case setTag:var u=n&COMPARE_PARTIAL_FLAG;if(o||(o=setToArray),e.size!=r.size&&!u)return!1;var c=i.get(e);if(c)return c==r;n|=COMPARE_UNORDERED_FLAG,i.set(e,r);var l=equalArrays(o(e),o(r),n,a,s,i);
return i.delete(e),l;case symbolTag:if(symbolValueOf)return symbolValueOf.call(e)==symbolValueOf.call(r)}return!1}function equalObjects(e,r,t,n,a,s){var i=t&COMPARE_PARTIAL_FLAG,o=getAllKeys(e),u=o.length;if(u!=getAllKeys(r).length&&!i)return!1;for(var c=u;c--;){var l=o[c];if(!(i?l in r:hasOwnProperty.call(r,l)))return!1}var f=s.get(e);if(f&&s.get(r))return f==r;var g=!0;s.set(e,r),s.set(r,e);for(var d=i;++c<u;){l=o[c];var y=e[l],p=r[l];if(n)var b=i?n(p,y,l,r,e,s):n(y,p,l,e,r,s);if(!(b===undefined?y===p||a(y,p,t,n,s):b)){
g=!1;break}d||(d="constructor"==l)}if(g&&!d){var h=e.constructor,T=r.constructor;h!=T&&"constructor"in e&&"constructor"in r&&!("function"==typeof h&&h instanceof h&&"function"==typeof T&&T instanceof T)&&(g=!1)}return s.delete(e),s.delete(r),g}function getAllKeys(e){return baseGetAllKeys(e,keys,getSymbols)}function getAllKeysIn(e){return baseGetAllKeys(e,keysIn,getSymbolsIn)}function getIteratee(){var e=lodash.iteratee||iteratee;return e=e===iteratee?baseIteratee:e,arguments.length?e(arguments[0],arguments[1]):e;
}function getMapData(e,r){var t=e.__data__;return isKeyable(r)?t["string"==typeof r?"string":"hash"]:t.map}function getMatchData(e){for(var r=keys(e),t=r.length;t--;){var n=r[t],a=e[n];r[t]=[n,a,isStrictComparable(a)]}return r}function getNative(e,r){var t=getValue(e,r);return baseIsNative(t)?t:undefined}function getRawTag(e){var r=hasOwnProperty.call(e,symToStringTag),t=e[symToStringTag];try{e[symToStringTag]=undefined;var n=!0}catch(e){}var a=nativeObjectToString.call(e);return n&&(r?e[symToStringTag]=t:delete e[symToStringTag]),
a}function hasPath(e,r,t){r=castPath(r,e);for(var n=-1,a=r.length,s=!1;++n<a;){var i=toKey(r[n]);if(!(s=null!=e&&t(e,i)))break;e=e[i]}return s||++n!=a?s:(a=null==e?0:e.length,!!a&&isLength(a)&&isIndex(i,a)&&(isArray(e)||isArguments(e)))}function initCloneArray(e){var r=e.length,t=new e.constructor(r);return r&&"string"==typeof e[0]&&hasOwnProperty.call(e,"index")&&(t.index=e.index,t.input=e.input),t}function initCloneObject(e){return"function"!=typeof e.constructor||isPrototype(e)?{}:baseCreate(getPrototype(e));
}function initCloneByTag(e,r,t){var n=e.constructor;switch(r){case arrayBufferTag:return cloneArrayBuffer(e);case boolTag:case dateTag:return new n(+e);case dataViewTag:return cloneDataView(e,t);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(e,t);case mapTag:return new n;case numberTag:case stringTag:return new n(e);case regexpTag:return cloneRegExp(e);case setTag:return new n;case symbolTag:
return cloneSymbol(e)}}function isFlattenable(e){return isArray(e)||isArguments(e)||!!(spreadableSymbol&&e&&e[spreadableSymbol])}function isIndex(e,r){var t=typeof e;return r=null==r?MAX_SAFE_INTEGER:r,!!r&&("number"==t||"symbol"!=t&&reIsUint.test(e))&&e>-1&&e%1==0&&e<r}function isIterateeCall(e,r,t){if(!isObject(t))return!1;var n=typeof r;return!!("number"==n?isArrayLike(t)&&isIndex(r,t.length):"string"==n&&r in t)&&eq(t[r],e)}function isKey(e,r){if(isArray(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!isSymbol(e))||(reIsPlainProp.test(e)||!reIsDeepProp.test(e)||null!=r&&e in Object(r));
}function isKeyable(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e}function isMasked(e){return!!maskSrcKey&&maskSrcKey in e}function isPrototype(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||objectProto)}function isStrictComparable(e){return e===e&&!isObject(e)}function matchesStrictComparable(e,r){return function(t){return null!=t&&(t[e]===r&&(r!==undefined||e in Object(t)))}}function memoizeCapped(e){var r=memoize(e,function(e){
return t.size===MAX_MEMOIZE_SIZE&&t.clear(),e}),t=r.cache;return r}function nativeKeysIn(e){var r=[];if(null!=e)for(var t in Object(e))r.push(t);return r}function objectToString(e){return nativeObjectToString.call(e)}function overRest(e,r,t){return r=nativeMax(r===undefined?e.length-1:r,0),function(){for(var n=arguments,a=-1,s=nativeMax(n.length-r,0),i=Array(s);++a<s;)i[a]=n[r+a];a=-1;for(var o=Array(r+1);++a<r;)o[a]=n[a];return o[r]=t(i),apply(e,this,o)}}function parent(e,r){return r.length<2?e:baseGet(e,baseSlice(r,0,-1));
}function shortOut(e){var r=0,t=0;return function(){var n=nativeNow(),a=HOT_SPAN-(n-t);if(t=n,a>0){if(++r>=HOT_COUNT)return arguments[0]}else r=0;return e.apply(undefined,arguments)}}function toKey(e){if("string"==typeof e||isSymbol(e))return e;var r=e+"";return"0"==r&&1/e==-INFINITY?"-0":r}function toSource(e){if(null!=e){try{return funcToString.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function chunk(e,r,t){r=(t?isIterateeCall(e,r,t):r===undefined)?1:nativeMax(toInteger(r),0);var n=null==e?0:e.length;
if(!n||r<1)return[];for(var a=0,s=0,i=Array(nativeCeil(n/r));a<n;)i[s++]=baseSlice(e,a,a+=r);return i}function findIndex(e,r,t){var n=null==e?0:e.length;if(!n)return-1;var a=null==t?0:toInteger(t);return a<0&&(a=nativeMax(n+a,0)),baseFindIndex(e,getIteratee(r,3),a)}function flatten(e){return(null==e?0:e.length)?baseFlatten(e,1):[]}function fromPairs(e){for(var r=-1,t=null==e?0:e.length,n={};++r<t;){var a=e[r];n[a[0]]=a[1]}return n}function last(e){var r=null==e?0:e.length;return r?e[r-1]:undefined;
}function uniq(e){return e&&e.length?baseUniq(e):[]}function uniqBy(e,r){return e&&e.length?baseUniq(e,getIteratee(r,2)):[]}function forEach(e,r){return(isArray(e)?arrayEach:baseEach)(e,getIteratee(r,3))}function before(e,r){var t;if("function"!=typeof r)throw new TypeError(FUNC_ERROR_TEXT);return e=toInteger(e),function(){return--e>0&&(t=r.apply(this,arguments)),e<=1&&(r=undefined),t}}function debounce(e,r,t){function n(r){var t=g,n=d;return g=d=undefined,T=r,p=e.apply(n,t)}function a(e){return T=e,
b=setTimeout(o,r),A?n(e):p}function s(e){var t=e-h,n=e-T,a=r-t;return m?nativeMin(a,y-n):a}function i(e){var t=e-h,n=e-T;return h===undefined||t>=r||t<0||m&&n>=y}function o(){var e=now();return i(e)?u(e):(b=setTimeout(o,s(e)),undefined)}function u(e){return b=undefined,v&&g?n(e):(g=d=undefined,p)}function c(){b!==undefined&&clearTimeout(b),T=0,g=h=d=b=undefined}function l(){return b===undefined?p:u(now())}function f(){var e=now(),t=i(e);if(g=arguments,d=this,h=e,t){if(b===undefined)return a(h);if(m)return b=setTimeout(o,r),
n(h)}return b===undefined&&(b=setTimeout(o,r)),p}var g,d,y,p,b,h,T=0,A=!1,m=!1,v=!0;if("function"!=typeof e)throw new TypeError(FUNC_ERROR_TEXT);return r=toNumber(r)||0,isObject(t)&&(A=!!t.leading,m="maxWait"in t,y=m?nativeMax(toNumber(t.maxWait)||0,r):y,v="trailing"in t?!!t.trailing:v),f.cancel=c,f.flush=l,f}function memoize(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError(FUNC_ERROR_TEXT);var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],s=t.cache;if(s.has(a))return s.get(a);
var i=e.apply(this,n);return t.cache=s.set(a,i)||s,i};return t.cache=new(memoize.Cache||MapCache),t}function once(e){return before(2,e)}function throttle(e,r,t){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError(FUNC_ERROR_TEXT);return isObject(t)&&(n="leading"in t?!!t.leading:n,a="trailing"in t?!!t.trailing:a),debounce(e,r,{leading:n,maxWait:r,trailing:a})}function clone(e){return baseClone(e,CLONE_SYMBOLS_FLAG)}function cloneDeep(e){return baseClone(e,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG)}
function cloneDeepWith(e,r){return r="function"==typeof r?r:undefined,baseClone(e,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG,r)}function eq(e,r){return e===r||e!==e&&r!==r}function isArrayLike(e){return null!=e&&isLength(e.length)&&!isFunction(e)}function isArrayLikeObject(e){return isObjectLike(e)&&isArrayLike(e)}function isElement(e){return isObjectLike(e)&&1===e.nodeType&&!isPlainObject(e)}function isEmpty(e){if(null==e)return!0;if(isArrayLike(e)&&(isArray(e)||"string"==typeof e||"function"==typeof e.splice||isBuffer(e)||isTypedArray(e)||isArguments(e)))return!e.length;
var r=getTag(e);if(r==mapTag||r==setTag)return!e.size;if(isPrototype(e))return!baseKeys(e).length;for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0}function isEqual(e,r){return baseIsEqual(e,r)}function isFunction(e){if(!isObject(e))return!1;var r=baseGetTag(e);return r==funcTag||r==genTag||r==asyncTag||r==proxyTag}function isLength(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=MAX_SAFE_INTEGER}function isObject(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)}function isObjectLike(e){
return null!=e&&"object"==typeof e}function isPlainObject(e){if(!isObjectLike(e)||baseGetTag(e)!=objectTag)return!1;var r=getPrototype(e);if(null===r)return!0;var t=hasOwnProperty.call(r,"constructor")&&r.constructor;return"function"==typeof t&&t instanceof t&&funcToString.call(t)==objectCtorString}function isString(e){return"string"==typeof e||!isArray(e)&&isObjectLike(e)&&baseGetTag(e)==stringTag}function isSymbol(e){return"symbol"==typeof e||isObjectLike(e)&&baseGetTag(e)==symbolTag}function toArray(e){
if(!e)return[];if(isArrayLike(e))return isString(e)?stringToArray(e):copyArray(e);if(symIterator&&e[symIterator])return iteratorToArray(e[symIterator]());var r=getTag(e);return(r==mapTag?mapToArray:r==setTag?setToArray:values)(e)}function toFinite(e){if(!e)return 0===e?e:0;if(e=toNumber(e),e===INFINITY||e===-INFINITY){return(e<0?-1:1)*MAX_INTEGER}return e===e?e:0}function toInteger(e){var r=toFinite(e),t=r%1;return r===r?t?r-t:r:0}function toNumber(e){if("number"==typeof e)return e;if(isSymbol(e))return NAN;
if(isObject(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=isObject(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(reTrim,"");var t=reIsBinary.test(e);return t||reIsOctal.test(e)?freeParseInt(e.slice(2),t?2:8):reIsBadHex.test(e)?NAN:+e}function toPlainObject(e){return copyObject(e,keysIn(e))}function toString(e){return null==e?"":baseToString(e)}function findKey(e,r){return baseFindKey(e,getIteratee(r,3),baseForOwn)}function forIn(e,r){return null==e?e:baseFor(e,getIteratee(r,3),keysIn);
}function get(e,r,t){var n=null==e?undefined:baseGet(e,r);return n===undefined?t:n}function has(e,r){return null!=e&&hasPath(e,r,baseHas)}function hasIn(e,r){return null!=e&&hasPath(e,r,baseHasIn)}function keys(e){return isArrayLike(e)?arrayLikeKeys(e):baseKeys(e)}function keysIn(e){return isArrayLike(e)?arrayLikeKeys(e,!0):baseKeysIn(e)}function set(e,r,t){return null==e?e:baseSet(e,r,t)}function unset(e,r){return null==e||baseUnset(e,r)}function update(e,r,t){return null==e?e:baseUpdate(e,r,castFunction(t));
}function values(e){return null==e?[]:baseValues(e,keys(e))}function random(e,r,t){if(t&&"boolean"!=typeof t&&isIterateeCall(e,r,t)&&(r=t=undefined),t===undefined&&("boolean"==typeof r?(t=r,r=undefined):"boolean"==typeof e&&(t=e,e=undefined)),e===undefined&&r===undefined?(e=0,r=1):(e=toFinite(e),r===undefined?(r=e,e=0):r=toFinite(r)),e>r){var n=e;e=r,r=n}if(t||e%1||r%1){var a=nativeRandom();return nativeMin(e+a*(r-e+freeParseFloat("1e-"+((a+"").length-1))),r)}return baseRandom(e,r)}function capitalize(e){
return upperFirst(toString(e).toLowerCase())}function deburr(e){return e=toString(e),e&&e.replace(reLatin,deburrLetter).replace(reComboMark,"")}function escape(e){return e=toString(e),e&&reHasUnescapedHtml.test(e)?e.replace(reUnescapedHtml,escapeHtmlChar):e}function escapeRegExp(e){return e=toString(e),e&&reHasRegExpChar.test(e)?e.replace(reRegExpChar,"\\$&"):e}function trimEnd(e,r,t){if(e=toString(e),e&&(t||r===undefined))return e.replace(reTrimEnd,"");if(!e||!(r=baseToString(r)))return e;var n=stringToArray(e);
return castSlice(n,0,charsEndIndex(n,stringToArray(r))+1).join("")}function trimStart(e,r,t){if(e=toString(e),e&&(t||r===undefined))return e.replace(reTrimStart,"");if(!e||!(r=baseToString(r)))return e;var n=stringToArray(e);return castSlice(n,charsStartIndex(n,stringToArray(r))).join("")}function truncate(e,r){var t=DEFAULT_TRUNC_LENGTH,n=DEFAULT_TRUNC_OMISSION;if(isObject(r)){var a="separator"in r?r.separator:a;t="length"in r?toInteger(r.length):t,n="omission"in r?baseToString(r.omission):n}e=toString(e);
var s=e.length;if(hasUnicode(e)){var i=stringToArray(e);s=i.length}if(t>=s)return e;var o=t-stringSize(n);if(o<1)return n;var u=i?castSlice(i,0,o).join(""):e.slice(0,o);if(a===undefined)return u+n;if(i&&(o+=u.length-o),isRegExp(a)){if(e.slice(o).search(a)){var c,l=u;for(a.global||(a=RegExp(a.source,toString(reFlags.exec(a))+"g")),a.lastIndex=0;c=a.exec(l);)var f=c.index;u=u.slice(0,f===undefined?o:f)}}else if(e.indexOf(baseToString(a),o)!=o){var g=u.lastIndexOf(a);g>-1&&(u=u.slice(0,g))}return u+n;
}function unescape(e){return e=toString(e),e&&reHasEscapedHtml.test(e)?e.replace(reEscapedHtml,unescapeHtmlChar):e}function words(e,r,t){return e=toString(e),r=t?undefined:r,r===undefined?hasUnicodeWord(e)?unicodeWords(e):asciiWords(e):e.match(r)||[]}function constant(e){return function(){return e}}function identity(e){return e}function iteratee(e){return baseIteratee("function"==typeof e?e:baseClone(e,CLONE_DEEP_FLAG))}function noop(){}function property(e){return isKey(e)?baseProperty(toKey(e)):basePropertyDeep(e);
}function stubArray(){return[]}function stubFalse(){return!1}function times(e,r){if(e=toInteger(e),e<1||e>MAX_SAFE_INTEGER)return[];var t=MAX_ARRAY_LENGTH,n=nativeMin(e,MAX_ARRAY_LENGTH);r=getIteratee(r),e-=MAX_ARRAY_LENGTH;for(var a=baseTimes(n,r);++t<e;)r(t);return a}function sumBy(e,r){return e&&e.length?baseSum(e,getIteratee(r,2)):0}var tempModule=module,exports=undefined,module=undefined,global=undefined,undefined,VERSION="4.17.5",LARGE_ARRAY_SIZE=200,FUNC_ERROR_TEXT="Expected a function",HASH_UNDEFINED="__lodash_hash_undefined__",MAX_MEMOIZE_SIZE=500,CLONE_DEEP_FLAG=1,CLONE_FLAT_FLAG=2,CLONE_SYMBOLS_FLAG=4,COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2,DEFAULT_TRUNC_LENGTH=30,DEFAULT_TRUNC_OMISSION="...",HOT_COUNT=800,HOT_SPAN=16,INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991,MAX_INTEGER=1.7976931348623157e308,NAN=NaN,MAX_ARRAY_LENGTH=4294967295,argsTag="[object Arguments]",arrayTag="[object Array]",asyncTag="[object AsyncFunction]",boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",funcTag="[object Function]",genTag="[object GeneratorFunction]",mapTag="[object Map]",numberTag="[object Number]",nullTag="[object Null]",objectTag="[object Object]",promiseTag="[object Promise]",proxyTag="[object Proxy]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",symbolTag="[object Symbol]",undefinedTag="[object Undefined]",weakMapTag="[object WeakMap]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",reEscapedHtml=/&(?:amp|lt|gt|quot|#39);/g,reUnescapedHtml=/[&<>"']/g,reHasEscapedHtml=RegExp(reEscapedHtml.source),reHasUnescapedHtml=RegExp(reUnescapedHtml.source),reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reHasRegExpChar=RegExp(reRegExpChar.source),reTrim=/^\s+|\s+$/g,reTrimStart=/^\s+/,reTrimEnd=/\s+$/,reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,reEscapeChar=/\\(\\)?/g,reFlags=/\w*$/,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsHostCtor=/^\[object .+?Constructor\]$/,reIsOctal=/^0o[0-7]+$/i,reIsUint=/^(?:0|[1-9]\d*)$/,reLatin=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,rsAstralRange="\\ud800-\\udfff",rsComboMarksRange="\\u0300-\\u036f",reComboHalfMarksRange="\\ufe20-\\ufe2f",rsComboSymbolsRange="\\u20d0-\\u20ff",rsComboRange=rsComboMarksRange+reComboHalfMarksRange+rsComboSymbolsRange,rsDingbatRange="\\u2700-\\u27bf",rsLowerRange="a-z\\xdf-\\xf6\\xf8-\\xff",rsMathOpRange="\\xac\\xb1\\xd7\\xf7",rsNonCharRange="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",rsPunctuationRange="\\u2000-\\u206f",rsSpaceRange=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",rsUpperRange="A-Z\\xc0-\\xd6\\xd8-\\xde",rsVarRange="\\ufe0e\\ufe0f",rsBreakRange=rsMathOpRange+rsNonCharRange+rsPunctuationRange+rsSpaceRange,rsApos="['\u2019]",rsAstral="["+rsAstralRange+"]",rsBreak="["+rsBreakRange+"]",rsCombo="["+rsComboRange+"]",rsDigits="\\d+",rsDingbat="["+rsDingbatRange+"]",rsLower="["+rsLowerRange+"]",rsMisc="[^"+rsAstralRange+rsBreakRange+rsDigits+rsDingbatRange+rsLowerRange+rsUpperRange+"]",rsFitz="\\ud83c[\\udffb-\\udfff]",rsModifier="(?:"+rsCombo+"|"+rsFitz+")",rsNonAstral="[^"+rsAstralRange+"]",rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",rsUpper="["+rsUpperRange+"]",rsZWJ="\\u200d",rsMiscLower="(?:"+rsLower+"|"+rsMisc+")",rsMiscUpper="(?:"+rsUpper+"|"+rsMisc+")",rsOptContrLower="(?:"+rsApos+"(?:d|ll|m|re|s|t|ve))?",rsOptContrUpper="(?:"+rsApos+"(?:D|LL|M|RE|S|T|VE))?",reOptMod=rsModifier+"?",rsOptVar="["+rsVarRange+"]?",rsOptJoin="(?:"+rsZWJ+"(?:"+[rsNonAstral,rsRegional,rsSurrPair].join("|")+")"+rsOptVar+reOptMod+")*",rsOrdLower="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rsOrdUpper="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",rsSeq=rsOptVar+reOptMod+rsOptJoin,rsEmoji="(?:"+[rsDingbat,rsRegional,rsSurrPair].join("|")+")"+rsSeq,rsSymbol="(?:"+[rsNonAstral+rsCombo+"?",rsCombo,rsRegional,rsSurrPair,rsAstral].join("|")+")",reApos=RegExp(rsApos,"g"),reComboMark=RegExp(rsCombo,"g"),reUnicode=RegExp(rsFitz+"(?="+rsFitz+")|"+rsSymbol+rsSeq,"g"),reUnicodeWord=RegExp([rsUpper+"?"+rsLower+"+"+rsOptContrLower+"(?="+[rsBreak,rsUpper,"$"].join("|")+")",rsMiscUpper+"+"+rsOptContrUpper+"(?="+[rsBreak,rsUpper+rsMiscLower,"$"].join("|")+")",rsUpper+"?"+rsMiscLower+"+"+rsOptContrLower,rsUpper+"+"+rsOptContrUpper,rsOrdUpper,rsOrdLower,rsDigits,rsEmoji].join("|"),"g"),reHasUnicode=RegExp("["+rsZWJ+rsAstralRange+rsComboRange+rsVarRange+"]"),reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,typedArrayTags={};
typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=!0,typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=!1;
var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=!0,
cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=!1;var deburredLetters={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O",
"\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d",
"\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L",
"\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T",
"\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"},htmlEscapes={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
},htmlUnescapes={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},freeParseFloat=parseFloat,freeParseInt=parseInt,freeGlobal="object"==typeof global&&global&&global.Object===Object&&global,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")(),freeExports="object"==typeof exports&&exports&&!exports.nodeType&&exports,freeModule=freeExports&&"object"==typeof module&&module&&!module.nodeType&&module,moduleExports=freeModule&&freeModule.exports===freeExports,freeProcess=moduleExports&&freeGlobal.process,nodeUtil=function(){
try{return freeProcess&&freeProcess.binding&&freeProcess.binding("util")}catch(e){}}(),nodeIsMap=nodeUtil&&nodeUtil.isMap,nodeIsRegExp=nodeUtil&&nodeUtil.isRegExp,nodeIsSet=nodeUtil&&nodeUtil.isSet,nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray,asciiSize=baseProperty("length"),deburrLetter=basePropertyOf(deburredLetters),escapeHtmlChar=basePropertyOf(htmlEscapes),unescapeHtmlChar=basePropertyOf(htmlUnescapes),arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype,coreJsData=root["__core-js_shared__"],funcToString=funcProto.toString,hasOwnProperty=objectProto.hasOwnProperty,maskSrcKey=function(){
var e=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),nativeObjectToString=objectProto.toString,objectCtorString=funcToString.call(Object),reIsNative=RegExp("^"+funcToString.call(hasOwnProperty).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Buffer=moduleExports?root.Buffer:undefined,Symbol=root.Symbol,Uint8Array=root.Uint8Array,allocUnsafe=Buffer?Buffer.allocUnsafe:undefined,getPrototype=overArg(Object.getPrototypeOf,Object),objectCreate=Object.create,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice,spreadableSymbol=Symbol?Symbol.isConcatSpreadable:undefined,symIterator=Symbol?Symbol.iterator:undefined,symToStringTag=Symbol?Symbol.toStringTag:undefined,defineProperty=function(){
try{var e=getNative(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),nativeCeil=Math.ceil,nativeFloor=Math.floor,nativeGetSymbols=Object.getOwnPropertySymbols,nativeIsBuffer=Buffer?Buffer.isBuffer:undefined,nativeKeys=overArg(Object.keys,Object),nativeMax=Math.max,nativeMin=Math.min,nativeNow=Date.now,nativeRandom=Math.random,DataView=getNative(root,"DataView"),Map=getNative(root,"Map"),Promise=getNative(root,"Promise"),Set=getNative(root,"Set"),WeakMap=getNative(root,"WeakMap"),nativeCreate=getNative(Object,"create"),realNames={},dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap),symbolProto=Symbol?Symbol.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined,symbolToString=symbolProto?symbolProto.toString:undefined,baseCreate=function(){
function e(){}return function(r){if(!isObject(r))return{};if(objectCreate)return objectCreate(r);e.prototype=r;var t=new e;return e.prototype=undefined,t}}();Hash.prototype.clear=hashClear,Hash.prototype.delete=hashDelete,Hash.prototype.get=hashGet,Hash.prototype.has=hashHas,Hash.prototype.set=hashSet,ListCache.prototype.clear=listCacheClear,ListCache.prototype.delete=listCacheDelete,ListCache.prototype.get=listCacheGet,ListCache.prototype.has=listCacheHas,ListCache.prototype.set=listCacheSet,MapCache.prototype.clear=mapCacheClear,
MapCache.prototype.delete=mapCacheDelete,MapCache.prototype.get=mapCacheGet,MapCache.prototype.has=mapCacheHas,MapCache.prototype.set=mapCacheSet,SetCache.prototype.add=SetCache.prototype.push=setCacheAdd,SetCache.prototype.has=setCacheHas,Stack.prototype.clear=stackClear,Stack.prototype.delete=stackDelete,Stack.prototype.get=stackGet,Stack.prototype.has=stackHas,Stack.prototype.set=stackSet;var baseEach=createBaseEach(baseForOwn),baseFor=createBaseFor(),baseSetToString=defineProperty?function(e,r){
return defineProperty(e,"toString",{configurable:!0,enumerable:!1,value:constant(r),writable:!0})}:identity,createSet=Set&&1/setToArray(new Set([,-0]))[1]==INFINITY?function(e){return new Set(e)}:noop,getSymbols=nativeGetSymbols?function(e){return null==e?[]:(e=Object(e),arrayFilter(nativeGetSymbols(e),function(r){return propertyIsEnumerable.call(e,r)}))}:stubArray,getSymbolsIn=nativeGetSymbols?function(e){for(var r=[];e;)arrayPush(r,getSymbols(e)),e=getPrototype(e);return r}:stubArray,getTag=baseGetTag;
(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map)!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set)!=setTag||WeakMap&&getTag(new WeakMap)!=weakMapTag)&&(getTag=function(e){var r=baseGetTag(e),t=r==objectTag?e.constructor:undefined,n=t?toSource(t):"";if(n)switch(n){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:
return weakMapTag}return r});var setToString=shortOut(baseSetToString),stringToPath=memoizeCapped(function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(rePropName,function(e,t,n,a){r.push(n?a.replace(reEscapeChar,"$1"):t||e)}),r}),difference=baseRest(function(e,r){return isArrayLikeObject(e)?baseDifference(e,baseFlatten(r,1,isArrayLikeObject,!0)):[]}),differenceBy=baseRest(function(e,r){var t=last(r);return isArrayLikeObject(t)&&(t=undefined),isArrayLikeObject(e)?baseDifference(e,baseFlatten(r,1,isArrayLikeObject,!0),getIteratee(t,2)):[];
}),differenceWith=baseRest(function(e,r){var t=last(r);return isArrayLikeObject(t)&&(t=undefined),isArrayLikeObject(e)?baseDifference(e,baseFlatten(r,1,isArrayLikeObject,!0),undefined,t):[]}),intersection=baseRest(function(e){var r=arrayMap(e,castArrayLikeObject);return r.length&&r[0]===e[0]?baseIntersection(r):[]}),without=baseRest(function(e,r){return isArrayLikeObject(e)?baseDifference(e,r):[]}),find=createFind(findIndex),groupBy=createAggregator(function(e,r,t){hasOwnProperty.call(e,t)?e[t].push(r):baseAssignValue(e,t,[r]);
}),sortBy=baseRest(function(e,r){if(null==e)return[];var t=r.length;return t>1&&isIterateeCall(e,r[0],r[1])?r=[]:t>2&&isIterateeCall(r[0],r[1],r[2])&&(r=[r[0]]),baseOrderBy(e,baseFlatten(r,1),[])}),now=function(){return root.Date.now()};memoize.Cache=MapCache;var isArguments=baseIsArguments(function(){return arguments}())?baseIsArguments:function(e){return isObjectLike(e)&&hasOwnProperty.call(e,"callee")&&!propertyIsEnumerable.call(e,"callee")},isArray=Array.isArray,isBuffer=nativeIsBuffer||stubFalse,isMap=nodeIsMap?baseUnary(nodeIsMap):baseIsMap,isRegExp=nodeIsRegExp?baseUnary(nodeIsRegExp):baseIsRegExp,isSet=nodeIsSet?baseUnary(nodeIsSet):baseIsSet,isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray,assign=createAssigner(function(e,r){
if(isPrototype(r)||isArrayLike(r))return copyObject(r,keys(r),e),undefined;for(var t in r)hasOwnProperty.call(r,t)&&assignValue(e,t,r[t])}),assignIn=createAssigner(function(e,r){copyObject(r,keysIn(r),e)}),invert=createInverter(function(e,r,t){null!=r&&"function"!=typeof r.toString&&(r=nativeObjectToString.call(r)),e[r]=t},constant(identity)),merge=createAssigner(function(e,r,t){baseMerge(e,r,t)}),toPairs=createToPairs(keys),camelCase=createCompounder(function(e,r,t){return r=r.toLowerCase(),e+(t?capitalize(r):r);
}),upperFirst=createCaseFirst("toUpperCase"),round=createRound("round");lodash.assign=assign,lodash.assignIn=assignIn,lodash.before=before,lodash.chunk=chunk,lodash.constant=constant,lodash.debounce=debounce,lodash.difference=difference,lodash.differenceBy=differenceBy,lodash.differenceWith=differenceWith,lodash.flatten=flatten,lodash.fromPairs=fromPairs,lodash.groupBy=groupBy,lodash.intersection=intersection,lodash.invert=invert,lodash.iteratee=iteratee,lodash.keys=keys,lodash.keysIn=keysIn,lodash.memoize=memoize,
lodash.merge=merge,lodash.once=once,lodash.property=property,lodash.set=set,lodash.sortBy=sortBy,lodash.throttle=throttle,lodash.toArray=toArray,lodash.toPairs=toPairs,lodash.toPlainObject=toPlainObject,lodash.uniq=uniq,lodash.uniqBy=uniqBy,lodash.unset=unset,lodash.update=update,lodash.values=values,lodash.without=without,lodash.words=words,lodash.entries=toPairs,lodash.extend=assignIn,lodash.camelCase=camelCase,lodash.capitalize=capitalize,lodash.clone=clone,lodash.cloneDeep=cloneDeep,lodash.cloneDeepWith=cloneDeepWith,
lodash.deburr=deburr,lodash.eq=eq,lodash.escape=escape,lodash.escapeRegExp=escapeRegExp,lodash.find=find,lodash.findIndex=findIndex,lodash.findKey=findKey,lodash.forEach=forEach,lodash.forIn=forIn,lodash.get=get,lodash.has=has,lodash.hasIn=hasIn,lodash.identity=identity,lodash.isArguments=isArguments,lodash.isArray=isArray,lodash.isArrayLike=isArrayLike,lodash.isArrayLikeObject=isArrayLikeObject,lodash.isBuffer=isBuffer,lodash.isElement=isElement,lodash.isEmpty=isEmpty,lodash.isEqual=isEqual,lodash.isFunction=isFunction,
lodash.isLength=isLength,lodash.isMap=isMap,lodash.isObject=isObject,lodash.isObjectLike=isObjectLike,lodash.isPlainObject=isPlainObject,lodash.isRegExp=isRegExp,lodash.isSet=isSet,lodash.isString=isString,lodash.isSymbol=isSymbol,lodash.isTypedArray=isTypedArray,lodash.last=last,lodash.stubArray=stubArray,lodash.stubFalse=stubFalse,lodash.noop=noop,lodash.now=now,lodash.random=random,lodash.round=round,lodash.sumBy=sumBy,lodash.times=times,lodash.toFinite=toFinite,lodash.toInteger=toInteger,lodash.toNumber=toNumber,
lodash.toString=toString,lodash.trimEnd=trimEnd,lodash.trimStart=trimStart,lodash.truncate=truncate,lodash.unescape=unescape,lodash.upperFirst=upperFirst,lodash.each=forEach,lodash.VERSION=VERSION,lodash.each(Object.keys(lodash),function(e){tempModule.exports[e]=lodash[e]});


/***/ })
/******/ ])});;
//# sourceMappingURL=sp-lodash-subset.js.map


define("78359e4b-07c2-43c6-8d0b-d060b4d577e8_1.7.1", ["@microsoft/sp-core-library","@microsoft/sp-lodash-subset"], function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@microsoft/sp-core-library"
var sp_core_library_ = __webpack_require__(0);
var sp_core_library__default = /*#__PURE__*/__webpack_require__.n(sp_core_library_);

// CONCATENATED MODULE: ./lib/Api/LogSource.js

var LogSource_LogSource = (function () {
    function LogSource(id) {
        sp_core_library_["Validate"].isNotNullOrUndefined(id, 'id');
        this._id = id;
    }
    LogSource.create = function (id) {
        return new LogSource(id);
    };
    Object.defineProperty(LogSource.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    LogSource.prototype.isEmpty = function () {
        return this._id.length === 0;
    };
    return LogSource;
}());
/* harmony default export */ var Api_LogSource = (LogSource_LogSource);
var logSourceServiceKey = sp_core_library_["ServiceKey"].createCustom('sp-client-base:LogSource', function (serviceScope) {
    return LogSource_LogSource.create('');
});

// CONCATENATED MODULE: ./lib/Api/LogManager/CircularBuffer.js
var CircularBuffer = (function () {
    function CircularBuffer(size) {
        this._head = -1;
        this._count = 0;
        this._isIterating = false;
        if (size <= 0) {
            throw new Error('Size must be positive');
        }
        this._size = size;
        this._buffer = new Array(size);
    }
    Object.defineProperty(CircularBuffer.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    CircularBuffer.prototype.push = function (item) {
        this._ensureNotIterating();
        this._head++;
        this._count++;
        if (this._head === this._size) {
            this._head = 0;
        }
        this._buffer[this._head] = item;
    };
    CircularBuffer.prototype.forEach = function (handle) {
        if (this._count === 0) {
            return;
        }
        this._isIterating = true;
        try {
            var current = this._tail;
            for (var i = 0; i < this._size; i++) {
                handle(this._buffer[current]);
                if (current === this._head) {
                    break;
                }
                current = this._getNext(current);
            }
        }
        finally {
            this._isIterating = false;
        }
    };
    CircularBuffer.prototype.removeAll = function () {
        this._ensureNotIterating();
        this._head = -1;
        this._count = 0;
    };
    Object.defineProperty(CircularBuffer.prototype, "_tail", {
        get: function () {
            if (this._isNotWrapped()) {
                return 0;
            }
            return this._getNext(this._head);
        },
        enumerable: true,
        configurable: true
    });
    CircularBuffer.prototype._isNotWrapped = function () {
        return this._count === (this._head + 1);
    };
    CircularBuffer.prototype._getNext = function (index) {
        var nextIndex = index + 1;
        if (nextIndex === this._size) {
            nextIndex = 0;
        }
        return nextIndex;
    };
    CircularBuffer.prototype._ensureNotIterating = function () {
        if (this._isIterating) {
            throw new Error('Circular buffer cannot be modified during iteration');
        }
    };
    return CircularBuffer;
}());
/* harmony default export */ var LogManager_CircularBuffer = (CircularBuffer);

// CONCATENATED MODULE: ./lib/Api/LogManager/LogManager.js

var LogManager_LogManager = (function () {
    function LogManager(initialHandler) {
        this._shouldLogInRealTime = [];
        this._handlers = [];
        this._events = new LogManager_CircularBuffer(LogManager._maxVerboseLog);
        if (initialHandler) {
            this.addHandler(initialHandler);
        }
    }
    Object.defineProperty(LogManager, "_maxVerboseLog", {
        get: function () {
            return 5000;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogManager.prototype, "events", {
        get: function () {
            return this._events;
        },
        enumerable: true,
        configurable: true
    });
    LogManager.prototype.addHandler = function (handler) {
        if (!this._containsHandler(handler)) {
            this._handlers.push(handler);
            this._shouldLogInRealTime.push(false);
        }
    };
    LogManager.prototype.log = function (event) {
        Object.freeze(event);
        this._events.push(event);
        this._processLogEvent(event);
    };
    LogManager.prototype.removeHandler = function (handler) {
        var index = this._handlers.indexOf(handler);
        if (index > -1) {
            this._handlers.splice(index, 1);
            this._shouldLogInRealTime.splice(index, 1);
        }
    };
    LogManager.prototype.reset = function () {
        this._handlers = [];
        this._shouldLogInRealTime = [];
        this._events.removeAll();
    };
    LogManager.prototype.processAll = function (handler) {
        if (this._handlers.indexOf(handler) > -1) {
            this._processAllEvents(handler);
        }
    };
    LogManager.prototype._containsHandler = function (handler) {
        for (var _i = 0, _a = this._handlers; _i < _a.length; _i++) {
            var existingHandler = _a[_i];
            if (existingHandler === handler) {
                return true;
            }
        }
        return false;
    };
    LogManager.prototype._processAllEvents = function (handler) {
        this._events.forEach(function (event) {
            if (event) {
                try {
                    handler(event);
                }
                catch (e) {
                    console.error('failed to handle event:' + e.toString());
                }
            }
        });
        this._shouldLogInRealTime[this._handlers.indexOf(handler)] = true;
    };
    LogManager.prototype._processLogEvent = function (event) {
        for (var i = 0; i < this._handlers.length; i++) {
            if (this._shouldLogInRealTime[i] && event) {
                try {
                    this._handlers[i](event);
                }
                catch (e) {
                    console.error('failed to handle event:' + e.toString());
                }
            }
        }
    };
    return LogManager;
}());
/* harmony default export */ var Api_LogManager_LogManager = (LogManager_LogManager);

// CONCATENATED MODULE: ./lib/Api/Trace/LogEvent.js


var LogEvent_LogEvent = (function () {
    function LogEvent(source, data, level, serviceScope) {
        this._validate(source, data);
        this._timestamp = new Date().getTime();
        this._scope = this._getScope(serviceScope);
        this._source = source.substr(0, this._maxSourceLength);
        this._setData(data);
        this._level = level;
        this._prefix = this._getPrefix();
    }
    LogEvent.log = function (source, data, level, serviceScope) {
        var event = new LogEvent(source, data, level, serviceScope);
        LogEvent.logManager.log(event);
        return event;
    };
    LogEvent.prototype.toString = function () {
        var timedPrefix = "[" + this._timestamp + "][" + this._prefix + "]";
        if (this._message) {
            return timedPrefix + " " + this._message;
        }
        else if (this._error) {
            return timedPrefix + " " + this._error.toString();
        }
        else {
            return timedPrefix;
        }
    };
    Object.defineProperty(LogEvent.prototype, "timestamp", {
        get: function () {
            return this._timestamp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogEvent.prototype, "level", {
        get: function () {
            return this._level;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogEvent.prototype, "prefix", {
        get: function () {
            return this._prefix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogEvent.prototype, "scope", {
        get: function () {
            return this._scope;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogEvent.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogEvent.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogEvent.prototype, "error", {
        get: function () {
            return this._error;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogEvent.prototype, "_maxSourceLength", {
        get: function () {
            return 30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogEvent.prototype, "_maxMessageLength", {
        get: function () {
            return 150;
        },
        enumerable: true,
        configurable: true
    });
    LogEvent.prototype._validate = function (source, data) {
        if (!source) {
            throw new Error('source cannot be undefined or null for Logger');
        }
        if (!data) {
            throw new Error('data cannot be undefined or null');
        }
    };
    LogEvent.prototype._setData = function (data) {
        if (typeof data === 'string') {
            this._message = data.substr(0, this._maxMessageLength);
        }
        else if (data instanceof Error) {
            this._error = data;
        }
    };
    LogEvent.prototype._getPrefix = function () {
        var prefix = "" + this._source;
        if (this._scope && !this._scope.isEmpty()) {
            prefix = this._scope.id.substr(0, this._maxSourceLength) + "." + prefix;
        }
        return "" + prefix;
    };
    LogEvent.prototype._getScope = function (serviceScope) {
        var parentSource;
        if (serviceScope) {
            serviceScope.whenFinished(function () {
                parentSource = serviceScope.consume(logSourceServiceKey);
            });
        }
        return parentSource;
    };
    LogEvent.logManager = new Api_LogManager_LogManager();
    return LogEvent;
}());
/* harmony default export */ var Trace_LogEvent = (LogEvent_LogEvent);

// CONCATENATED MODULE: ./lib/Api/LogLevel.js
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Verbose"] = 1] = "Verbose";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Warning"] = 3] = "Warning";
    LogLevel[LogLevel["Error"] = 4] = "Error";
})(LogLevel = LogLevel || (LogLevel = {}));

// CONCATENATED MODULE: ./lib/Api/Trace/DefaultTraceHandler.js
var DefaultTraceHandler = (function () {
    function DefaultTraceHandler() {
    }
    DefaultTraceHandler.prototype.log = function (traceLogEvent) {
        if (true) {
            console.log("Error: " + traceLogEvent.data + ", " +
                ("Event Name: " + traceLogEvent.eventName + ", ") +
                ("Result Code: " + traceLogEvent.resultCode));
        }
    };
    DefaultTraceHandler.prototype.verbose = function (verboseTraceEvent) {
        if (true) {
            console.log("Error: " + verboseTraceEvent.data + ", Event Name: " + verboseTraceEvent.eventName);
        }
    };
    return DefaultTraceHandler;
}());
/* harmony default export */ var Trace_DefaultTraceHandler = (DefaultTraceHandler);

// CONCATENATED MODULE: ./lib/Api/Trace/TraceLogger.js





var TraceLogger_TraceLogger = (function () {
    function TraceLogger() {
    }
    TraceLogger._addHandler = function (logger) {
        TraceLogger._logManager.addHandler(logger.log);
        TraceLogger._logManager.processAll(logger.log);
        TraceLogger._verboseLogManager.addHandler(logger.verbose);
        TraceLogger._verboseLogManager.processAll(logger.verbose);
    };
    TraceLogger.logError = function (source, error, eventName, resultCode) {
        sp_core_library_["Validate"].isNotNullOrUndefined(error, 'error');
        this._log(source, error, eventName, true, resultCode);
    };
    TraceLogger.logErrorData = function (data) {
        sp_core_library_["Validate"].isNotNullOrUndefined(data.error, 'error');
        var errorInfo = data.logEntry ? data.logEntry.toString() : data.error;
        this._log(data.source, errorInfo, data.eventName, true, data.resultCode, data.serviceScope);
    };
    TraceLogger.logVerbose = function (source, message, eventName) {
        sp_core_library_["Validate"].isNonemptyString(message, 'message');
        this._log(source, message, eventName, false, undefined);
    };
    TraceLogger.logVerboseData = function (data) {
        var message = data.logEntry ? data.logEntry.toString() : data.message;
        this._log(data.source, message, data.eventName, false, undefined, data.serviceScope);
    };
    TraceLogger.logErrorWithLogEntry = function (source, logEntry, eventName, resultCode) {
        sp_core_library_["Validate"].isNotNullOrUndefined(source, 'source');
        sp_core_library_["Validate"].isNotNullOrUndefined(logEntry, 'logEntry');
        this._log(source, logEntry.toString(), eventName, true, resultCode);
    };
    Object.defineProperty(TraceLogger, "shouldWriteToConsole", {
        get: function () { return TraceLogger._shouldWriteToConsole; },
        set: function (shouldWrite) {
            if (TraceLogger._shouldWriteToConsole && !shouldWrite) {
                TraceLogger._logManager.removeHandler(TraceLogger._defaultLogger.log);
                TraceLogger._verboseLogManager.removeHandler(TraceLogger._defaultLogger.verbose);
            }
            else if (!TraceLogger._shouldWriteToConsole && shouldWrite) {
                TraceLogger._logManager.addHandler(TraceLogger._defaultLogger.log);
                TraceLogger._verboseLogManager.addHandler(TraceLogger._defaultLogger.verbose);
            }
            TraceLogger._shouldWriteToConsole = shouldWrite;
        },
        enumerable: true,
        configurable: true
    });
    TraceLogger.logVerboseWithLogEntry = function (source, logEntry, eventName) {
        sp_core_library_["Validate"].isNotNullOrUndefined(logEntry, 'LogEntry');
        this._log(source, logEntry.toString(), eventName, false, undefined);
    };
    TraceLogger._log = function (source, data, eventName, isError, resultCode, serviceScope) {
        var enhancedEventName = this._addEventPrefix(source, eventName);
        var logEvent;
        if (isError) {
            logEvent = Trace_LogEvent.log(enhancedEventName, data, LogLevel.Error, serviceScope);
            TraceLogger._logManager.log({ data: data, eventName: logEvent.prefix, resultCode: resultCode });
        }
        else {
            logEvent = Trace_LogEvent.log(enhancedEventName, data.toString(), LogLevel.Verbose, serviceScope);
            TraceLogger._verboseLogManager.log({ data: data, eventName: logEvent.prefix });
        }
        if (TraceLogger.shouldWriteToConsole || (true && !false)) {
            this._writeToConsole(logEvent, isError, resultCode);
        }
    };
    TraceLogger._addEventPrefix = function (source, eventName) {
        if (!eventName) {
            return source.id;
        }
        else {
            return source.id + "." + eventName;
        }
    };
    TraceLogger._writeToConsole = function (logEvent, isError, resultCode) {
        var errorString = logEvent.toString();
        if (resultCode) {
            errorString += ". resultCode: " + resultCode;
        }
        if (isError) {
            console.error(errorString);
        }
        else {
            console.log(errorString);
        }
    };
    TraceLogger._logManager = new Api_LogManager_LogManager();
    TraceLogger._verboseLogManager = new Api_LogManager_LogManager();
    TraceLogger._defaultLogger = new Trace_DefaultTraceHandler();
    TraceLogger._shouldWriteToConsole = false;
    return TraceLogger;
}());
/* harmony default export */ var Trace_TraceLogger = (TraceLogger_TraceLogger);

// CONCATENATED MODULE: ./lib/Api/LogFeature.js
var LogFeature = (function () {
    function LogFeature() {
    }
    LogFeature.None = 'None';
    return LogFeature;
}());
/* harmony default export */ var Api_LogFeature = (LogFeature);

// CONCATENATED MODULE: ./lib/Api/LogType.js
var LogType;
(function (LogType) {
    LogType[LogType["Trace"] = 1] = "Trace";
    LogType[LogType["Event"] = 2] = "Event";
    LogType[LogType["Error"] = 3] = "Error";
})(LogType || (LogType = {}));
/* harmony default export */ var Api_LogType = (LogType);

// CONCATENATED MODULE: ./lib/Api/LogEntry.js


var LogEntry_LogEntry = (function () {
    function LogEntry(moduleName, logFeature, logType, logProperties) {
        if (logFeature === void 0) { logFeature = Api_LogFeature.None; }
        if (logType === void 0) { logType = Api_LogType.Trace; }
        if (moduleName) {
            this.moduleName = moduleName;
            this.logFeature = logFeature;
            this.logType = logType;
            this.logProperties = logProperties;
        }
        else {
            throw new Error('moduleName is invalid');
        }
    }
    LogEntry.prototype.toString = function () {
        var serializedLogProps = undefined;
        if (this.logProperties) {
            try {
                serializedLogProps = JSON.stringify(this.logProperties);
            }
            catch (e) {
                console.log('Error happens in toString():' + e);
            }
        }
        return this.moduleName + " | " + this.logFeature + " | " + this.logType + " | " + serializedLogProps;
    };
    return LogEntry;
}());
/* harmony default export */ var Api_LogEntry = (LogEntry_LogEntry);

// EXTERNAL MODULE: external "@microsoft/sp-lodash-subset"
var sp_lodash_subset_ = __webpack_require__(2);
var sp_lodash_subset__default = /*#__PURE__*/__webpack_require__.n(sp_lodash_subset_);

// CONCATENATED MODULE: ./lib/DiagnosticsSettingsManager.js


var DiagnosticsSettingsManager_DiagnosticsSettingsManager = (function () {
    function DiagnosticsSettingsManager() {
    }
    DiagnosticsSettingsManager.initialize = function (settings) {
        this.settings = Object(sp_lodash_subset_["cloneDeep"])(settings);
        this._initialized = true;
        this._normalizeContextIds();
    };
    DiagnosticsSettingsManager.updateSettings = function (settings) {
        this.settings = Object(sp_lodash_subset_["merge"])(this.settings, settings);
        this._normalizeContextIds();
    };
    Object.defineProperty(DiagnosticsSettingsManager, "isInitialized", {
        get: function () {
            return this._initialized;
        },
        enumerable: true,
        configurable: true
    });
    DiagnosticsSettingsManager.shouldUseBuffer = function () {
        var shouldUse = !sp_core_library_["_SPKillSwitch"].isActivated(DiagnosticsSettingsManager.enableCircularBufferLogging, '11/27/2017', 'enableCircularBufferLogging');
        return shouldUse;
    };
    DiagnosticsSettingsManager._normalizeId = function (id) {
        var guid = sp_core_library_["Guid"].tryParse(id);
        return guid ? guid.toString() : id;
    };
    DiagnosticsSettingsManager._normalizeContextIds = function () {
        this.settings.siteId = this._normalizeId(this.settings.siteId);
        this.settings.webId = this._normalizeId(this.settings.webId);
        if (this.settings.listId) {
            this.settings.listId = this._normalizeId(this.settings.listId);
            if (this.settings.listItemUniqueId) {
                this.settings.listItemUniqueId = this._normalizeId(this.settings.listItemUniqueId);
            }
        }
    };
    DiagnosticsSettingsManager.enableCircularBufferLogging = sp_core_library_["Guid"].parse('4b6e1a58-3e0c-43e2-b9cb-1a470f6fe402');
    DiagnosticsSettingsManager._initialized = false;
    return DiagnosticsSettingsManager;
}());
/* harmony default export */ var lib_DiagnosticsSettingsManager = (DiagnosticsSettingsManager_DiagnosticsSettingsManager);

// CONCATENATED MODULE: ./lib/Diagnostics.js



var Diagnostics_Diagnostics = (function () {
    function Diagnostics() {
    }
    Diagnostics.initialize = function (settings) {
        if (!Diagnostics._isInitialized) {
            lib_DiagnosticsSettingsManager.initialize(settings);
            Trace_TraceLogger.shouldWriteToConsole = settings.enableConsoleLog;
            Trace_TraceLogger._addHandler({
                log: function (traceEvent) {
                    sp_core_library_["Log"].info(traceEvent.data.toString(), "EventName:" + traceEvent.eventName + ", ResultCome: " + traceEvent.resultCode);
                },
                verbose: function (traceEvent) {
                    sp_core_library_["Log"].verbose(traceEvent.data.toString(), traceEvent.eventName);
                }
            });
            Diagnostics._isInitialized = true;
        }
    };
    Object.defineProperty(Diagnostics, "isInitialized", {
        get: function () {
            return this._isInitialized;
        },
        enumerable: true,
        configurable: true
    });
    Diagnostics.updateSettings = function (settings) {
        lib_DiagnosticsSettingsManager.updateSettings(settings);
    };
    Diagnostics._isInitialized = false;
    return Diagnostics;
}());
/* harmony default export */ var lib_Diagnostics = (Diagnostics_Diagnostics);

// CONCATENATED MODULE: ./lib/Api/Engagement/DefaultEngagementHandler.js
var DefaultEngagementHandler = (function () {
    function DefaultEngagementHandler() {
    }
    DefaultEngagementHandler.prototype.logData = function (data) {
        console.log("TagName: " + data.name + ", Action Name: " + data.extraData);
    };
    return DefaultEngagementHandler;
}());
/* harmony default export */ var Engagement_DefaultEngagementHandler = (DefaultEngagementHandler);

// CONCATENATED MODULE: ./lib/Api/Engagement/EngagementLogger.js



var EngagementLogger_EngagementLogger = (function () {
    function EngagementLogger() {
    }
    EngagementLogger._addHandler = function (logger) {
        if (lib_DiagnosticsSettingsManager.shouldUseBuffer()) {
            EngagementLogger._handler = function (e) { logger.logData(e); };
            EngagementLogger._logManager.addHandler(EngagementLogger._handler);
        }
        else {
            EngagementLogger._logger = logger;
        }
    };
    EngagementLogger.startRealTimeProcessing = function () {
        if (!this._shouldProcessInRealTime) {
            EngagementLogger._logManager.processAll(EngagementLogger._handler);
            this._shouldProcessInRealTime = true;
        }
    };
    EngagementLogger.log = function (engagementData) {
        EngagementLogger._logEngagementData(engagementData);
    };
    EngagementLogger.logEvent = function (tagName, actionName) {
        var logData = { name: tagName };
        if (actionName && actionName.length !== 0) {
            logData.extraData = { action: actionName };
        }
        EngagementLogger._logEngagementData(logData);
    };
    EngagementLogger.logEventWithLogEntry = function (logEntry) {
        var logData = {
            name: logEntry.moduleName + '.' + logEntry.logFeature,
            extraData: logEntry.logProperties
        };
        EngagementLogger._logEngagementData(logData, true);
    };
    EngagementLogger._logEngagementData = function (engagementData, isLogEntry) {
        if (isLogEntry === void 0) { isLogEntry = false; }
        if (!engagementData.name || engagementData.name.length === 0) {
            throw new Error('LogEntry is invalid');
        }
        EngagementLogger._checkValidTagName(engagementData, isLogEntry);
        EngagementLogger._addContextData(engagementData);
        if (lib_DiagnosticsSettingsManager.shouldUseBuffer()) {
            EngagementLogger._logManager.log(engagementData);
        }
        else {
            EngagementLogger._logger.logData(engagementData);
        }
    };
    EngagementLogger._checkValidTagName = function (engagementData, isLogEntry) {
        if (isLogEntry === void 0) { isLogEntry = false; }
        if (!isLogEntry) {
            var tagNameRegex = /(\w+)\.(\w+).(\w+)/ig;
            if (tagNameRegex.test(engagementData.name) === false) {
                throw new Error(engagementData.name + " tagName does not follow AppName.ControlName.ActionName pattern");
            }
        }
    };
    EngagementLogger._addContextData = function (data) {
        if (lib_DiagnosticsSettingsManager.isInitialized) {
            var _a = lib_DiagnosticsSettingsManager.settings, listId = _a.listId, listItemUniqueId = _a.listItemUniqueId, siteId = _a.siteId, webId = _a.webId;
            data.siteId = siteId;
            data.webId = webId;
            if (listId) {
                data.listId = listId;
                if (listItemUniqueId) {
                    data.listItemUniqueId = listItemUniqueId;
                }
            }
        }
    };
    EngagementLogger._logManager = new Api_LogManager_LogManager();
    EngagementLogger._logger = new Engagement_DefaultEngagementHandler();
    return EngagementLogger;
}());
/* harmony default export */ var Engagement_EngagementLogger = (EngagementLogger_EngagementLogger);

// CONCATENATED MODULE: ./lib/Api/ExecutionQueue.js
var ExecutionQueue = (function () {
    function ExecutionQueue() {
        this._shouldExecuteInRealTime = false;
        this._handlers = {}; 
        this._executionEntries = [];
    }
    Object.defineProperty(ExecutionQueue.prototype, "shouldExecuteInRealTime", {
        get: function () {
            return this._shouldExecuteInRealTime;
        },
        set: function (executeInRealTime) {
            this._shouldExecuteInRealTime = executeInRealTime;
            if (this._shouldExecuteInRealTime) {
                this.flush();
            }
        },
        enumerable: true,
        configurable: true
    });
    ExecutionQueue.prototype.addHandler = function (key, handler) {
        if (this._containsHandler(key, handler)) {
            return;
        }
        this._initializeHandlerArrayForKey(key);
        var handlers = this._handlers[key]; 
        if (handlers.indexOf(handler) === -1) {
            handlers.push(handler);
        }
    };
    ExecutionQueue.prototype.addExecutionEntry = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        Object.freeze(args);
        if (this._shouldExecuteInRealTime) {
            this._processExecutionEntry(key, args);
        }
        else {
            this._executionEntries.push({ key: key, args: args });
        }
    };
    ExecutionQueue.prototype.removeHandler = function (key, handler) {
        var index = this._handlers[key].indexOf(handler);
        if (index > -1) {
            this._handlers[key].splice(index, 1);
        }
    };
    ExecutionQueue.prototype.reset = function () {
        this._handlers = {};
        this._executionEntries = [];
    };
    ExecutionQueue.prototype.flush = function () {
        this._processAllExecutionEntries();
        this._executionEntries = [];
    };
    ExecutionQueue.prototype._containsHandler = function (key, handler) {
        if (this._handlers[key] !== null && this._handlers[key] !== undefined) {
            return this._handlers[key].indexOf(handler) > -1;
        }
        return false;
    };
    ExecutionQueue.prototype._initializeHandlerArrayForKey = function (key) {
        if (this._handlers[key] === null || this._handlers[key] === undefined) {
            this._handlers[key] = [];
        }
    };
    ExecutionQueue.prototype._processAllExecutionEntries = function () {
        var _this = this;
        this._executionEntries.forEach(function (entry) {
            if (entry && _this._handlers[entry.key]) {
                try {
                    _this._handlers[entry.key].forEach(function (handler) {
                        handler.apply(_this, entry.args);
                    });
                }
                catch (e) {
                    console.error('failed to process execution entry:' + e.toString());
                }
            }
        });
    };
    ExecutionQueue.prototype._processExecutionEntry = function (key, args) {
        for (var i = 0; i < this._handlers[key].length; i++) {
            try {
                this._handlers[key][i].apply(this, args);
            }
            catch (e) {
                console.error('failed to process execution entry:' + e.toString());
            }
        }
    };
    return ExecutionQueue;
}());
/* harmony default export */ var Api_ExecutionQueue = (ExecutionQueue);

// CONCATENATED MODULE: ./lib/Api/Qos/QosLogger.js


var QosLogger_QosLogger = (function () {
    function QosLogger() {
        this._qosEvents = new Map();
        this._deferExecutor = new Api_ExecutionQueue();
        this._shouldProcessInRealTime = false;
        this.initializeLogger();
    }
    Object.defineProperty(QosLogger, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new QosLogger();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QosLogger.prototype, "shouldProcessInRealTime", {
        get: function () {
            return this._shouldProcessInRealTime;
        },
        set: function (processInRealTime) {
            this._shouldProcessInRealTime = processInRealTime;
            this._deferExecutor.shouldExecuteInRealTime = processInRealTime;
        },
        enumerable: true,
        configurable: true
    });
    QosLogger.prototype.setLogger = function (qosLogger) {
        this._qosLogger = qosLogger;
    };
    QosLogger.prototype.getQosEvent = function (key) {
        return this._qosEvents.get(key);
    };
    QosLogger.prototype.startQosMonitor = function (key, startData) {
        if (!this._qosEvents.has(key)) {
            if (lib_DiagnosticsSettingsManager.shouldUseBuffer()) {
                this._deferExecutor.addExecutionEntry('start', key, startData);
            }
            else {
                this._startMonitor(key, startData);
            }
        }
    };
    QosLogger.prototype.writeQosEndResult = function (key, endData) {
        if (lib_DiagnosticsSettingsManager.shouldUseBuffer()) {
            this._deferExecutor.addExecutionEntry('end', key, endData);
        }
        else {
            this._endMonitor(key, endData);
        }
    };
    QosLogger.prototype._startMonitor = function (key, event) {
        if (this._qosLogger) {
            this._qosEvents.set(key, new this._qosLogger(event)); 
        }
    };
    QosLogger.prototype._endMonitor = function (key, event) {
        if (this._qosEvents.has(key)) {
            this._qosEvents.get(key).end(event); 
            this._qosEvents.delete(key);
        }
    };
    QosLogger.prototype.initializeLogger = function () {
        var _this = this;
        var startHandler = function (key, e) { _this._startMonitor(key, e); }; 
        var endHandler = function (key, e) { _this._endMonitor(key, e); }; 
        this._deferExecutor.addHandler('start', startHandler);
        this._deferExecutor.addHandler('end', endHandler);
    };
    return QosLogger;
}());
/* harmony default export */ var Qos_QosLogger = (QosLogger_QosLogger);

// CONCATENATED MODULE: ./lib/Api/Qos/QosMonitor.js





var QosMonitor_QosMonitor = (function () {
    function QosMonitor(scenarioName, copyToEngagement) {
        if (copyToEngagement === void 0) { copyToEngagement = false; }
        this._qosResultTypeValue = (_a = {},
            _a[0 ] = 'Success',
            _a[1 ] = 'Failure',
            _a[2 ] = 'ExpectedFailure',
            _a);
        sp_core_library_["Validate"].isNonemptyString(scenarioName, 'scenarioName');
        this._id = sp_core_library_["Guid"].newGuid().toString();
        Qos_QosLogger.instance.startQosMonitor(this._id, { name: scenarioName });
        this._scenarioName = scenarioName;
        this._hasEnded = false;
        this._copyToEngagement = copyToEngagement;
        var _a;
    }
    QosMonitor.startRealTimeProcessing = function () {
        if (!Qos_QosLogger.instance.shouldProcessInRealTime) {
            this._shouldProcessInRealTime(true);
        }
    };
    QosMonitor._shouldProcessInRealTime = function (processInRealTime) {
        Qos_QosLogger.instance.shouldProcessInRealTime = processInRealTime;
    };
    Object.defineProperty(QosMonitor.prototype, "name", {
        get: function () {
            return lib_DiagnosticsSettingsManager.shouldUseBuffer() ? this._scenarioName : Qos_QosLogger.instance.getQosEvent(this._id).data.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QosMonitor.prototype, "shortEventName", {
        get: function () {
            return lib_DiagnosticsSettingsManager.shouldUseBuffer() ? 'Qos' : Qos_QosLogger.instance.getQosEvent(this._id).shortEventName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QosMonitor.prototype, "resultCode", {
        get: function () {
            return lib_DiagnosticsSettingsManager.shouldUseBuffer() ? this._endResultCode : Qos_QosLogger.instance.getQosEvent(this._id).data.resultCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QosMonitor.prototype, "resultType", {
        get: function () {
            return lib_DiagnosticsSettingsManager.shouldUseBuffer() ? this._endResult : Qos_QosLogger.instance.getQosEvent(this._id).data.resultType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QosMonitor.prototype, "extraData", {
        get: function () {
            return lib_DiagnosticsSettingsManager.shouldUseBuffer() ? this._endExtraData : Qos_QosLogger.instance.getQosEvent(this._id).data.extraData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QosMonitor.prototype, "hasEnded", {
        get: function () {
            return this._hasEnded;
        },
        enumerable: true,
        configurable: true
    });
    QosMonitor.prototype.writeSuccess = function (extraData) {
        this._writeQosEnd(0 , undefined, undefined, extraData);
    };
    QosMonitor.prototype.writeUnexpectedFailure = function (tagNameSuffix, ex, extraData) {
        if (tagNameSuffix === void 0) { tagNameSuffix = 'DefaultUnexpected'; }
        this._writeQosEnd(1 , tagNameSuffix, ex, extraData);
    };
    QosMonitor.prototype.writeExpectedFailure = function (tagNameSuffix, ex, extraData) {
        if (tagNameSuffix === void 0) { tagNameSuffix = 'DefaultExpected'; }
        this._writeQosEnd(2 , tagNameSuffix, ex, extraData);
    };
    QosMonitor.prototype._writeQosEnd = function (resultType, tagNameSuffix, ex, extraData) {
        if (!Qos_QosLogger.instance.getQosEvent(this._id) && !lib_DiagnosticsSettingsManager.shouldUseBuffer()) {
            throw new Error('monitor instance is null or undefined');
        }
        if (!this._shouldSkip(resultType)) {
            this._endResultCode = tagNameSuffix;
            this._endExtraData = extraData;
            this._endResult = resultType;
            var endData = {
                resultCode: this._endResultCode,
                resultType: this._endResult,
                error: ex ? ex.message : undefined,
                extraData: this._endExtraData
            };
            Qos_QosLogger.instance.writeQosEndResult(this._id, endData);
            this._writeToEngagement();
        }
    };
    QosMonitor.prototype._shouldSkip = function (result) {
        if (this._hasEnded && (this._endResult !== undefined)) {
            var message = sp_core_library_["Text"].format(QosMonitor.qosMonitorHasEndedErrorString, this.name, this._qosResultTypeValue[this._endResult], this._qosResultTypeValue[result]);
            if (this._endResult !== result) {
                Trace_TraceLogger.logError(QosMonitor.logSource, new Error(message));
            }
            if (true) {
                Trace_TraceLogger.logVerbose(QosMonitor.logSource, message, 'skipEnd');
            }
            return true;
        }
        else {
            this._hasEnded = true;
            return false;
        }
    };
    QosMonitor.prototype._writeToEngagement = function () {
        if (this._shouldWriteToEngagement()) {
            var engagementData = {
                name: 'Spfx.Qos.ToEngagement',
                extraData: this.extraData || {}
            };
            engagementData.extraData['qosName'] = this.name;
            if (this.resultType) {
                engagementData.extraData['qosResultType'] = this._qosResultTypeValue[this.resultType];
            }
            if (this.resultCode) {
                engagementData.extraData['qosResultCode'] = this.resultCode;
            }
            Engagement_EngagementLogger.log(engagementData);
        }
    };
    QosMonitor.prototype._shouldWriteToEngagement = function () {
        var shouldWriteEngagement = this._copyToEngagement &&
            (lib_DiagnosticsSettingsManager.shouldUseBuffer() || !!Qos_QosLogger.instance.getQosEvent(this._id).data);
        return shouldWriteEngagement;
    };
    QosMonitor.logSource = {
        id: 'QosMonitor'
    };
    QosMonitor.qosMonitorHasEndedErrorString = 'QoS monitor \'{0}\' has ended with \'{1}\' already. Ignoring \'{2}\' tag.';
    return QosMonitor;
}());
/* harmony default export */ var Qos_QosMonitor = (QosMonitor_QosMonitor);

// CONCATENATED MODULE: ./lib/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_TraceLogger", function() { return Trace_TraceLogger; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_LogEntry", function() { return Api_LogEntry; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_LogFeature", function() { return Api_LogFeature; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_LogSource", function() { return Api_LogSource; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_logSourceServiceKey", function() { return logSourceServiceKey; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_LogType", function() { return Api_LogType; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_Diagnostics", function() { return lib_Diagnostics; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_LogEvent", function() { return Trace_LogEvent; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_LogLevel", function() { return LogLevel; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_CircularBuffer", function() { return LogManager_CircularBuffer; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_LogManager", function() { return Api_LogManager_LogManager; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_EngagementLogger", function() { return Engagement_EngagementLogger; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_QosMonitor", function() { return Qos_QosMonitor; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_QosLogger", function() { return Qos_QosLogger; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_ExecutionQueue", function() { return Api_ExecutionQueue; });
















/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ })
/******/ ])});;
//# sourceMappingURL=sp-diagnostics.js.map


define("1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8_1.7.1", ["@microsoft/sp-core-library","@microsoft/sp-diagnostics","@microsoft/sp-dynamic-data"], function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1),__webpack_require__(2),__webpack_require__(3),__webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@microsoft/sp-core-library"
var sp_core_library_ = __webpack_require__(0);
var sp_core_library__default = /*#__PURE__*/__webpack_require__.n(sp_core_library_);

// CONCATENATED MODULE: ./lib/Page.js

var Page_Page = (function () {
    function Page(data) {
        this._validate(data);
        this._socialBarEnabled = data.socialBarEnabled || false;
    }
    Object.defineProperty(Page.prototype, "socialBarEnabled", {
        get: function () {
            return this._socialBarEnabled;
        },
        enumerable: true,
        configurable: true
    });
    Page.prototype._validate = function (data) {
        sp_core_library_["Validate"].isNotNullOrUndefined(data, 'IPage object');
    };
    return Page;
}());
/* harmony default export */ var lib_Page = (Page_Page);

// EXTERNAL MODULE: external "@microsoft/sp-diagnostics"
var sp_diagnostics_ = __webpack_require__(2);
var sp_diagnostics__default = /*#__PURE__*/__webpack_require__.n(sp_diagnostics_);

// EXTERNAL MODULE: external "@microsoft/sp-dynamic-data"
var sp_dynamic_data_ = __webpack_require__(3);
var sp_dynamic_data__default = /*#__PURE__*/__webpack_require__.n(sp_dynamic_data_);

// CONCATENATED MODULE: ./lib/AzureActiveDirectoryInfo.js

var AzureActiveDirectoryInfo_AzureActiveDirectoryInfo = (function () {
    function AzureActiveDirectoryInfo(data) {
        this._validate(data);
        this._instanceUrl = data.instanceUrl ? data.instanceUrl : '';
        this._tenantId = sp_core_library_["Guid"].parse(data.tenantId);
        this._userId = sp_core_library_["Guid"].parse(data.userId);
    }
    AzureActiveDirectoryInfo.prototype._serialize = function () {
        return {
            tenantId: this.tenantId.toString(),
            userId: this.userId.toString(),
            instanceUrl: this.instanceUrl
        };
    };
    Object.defineProperty(AzureActiveDirectoryInfo.prototype, "instanceUrl", {
        get: function () {
            return this._instanceUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AzureActiveDirectoryInfo.prototype, "tenantId", {
        get: function () {
            return this._tenantId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AzureActiveDirectoryInfo.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        enumerable: true,
        configurable: true
    });
    AzureActiveDirectoryInfo.prototype._validate = function (data) {
        sp_core_library_["Validate"].isNotNullOrUndefined(data, 'IAzureActiveDirectoryInfo object');
        sp_core_library_["Validate"].isNotNullOrUndefined(sp_core_library_["Guid"].tryParse(data.tenantId), 'tenantId');
        sp_core_library_["Validate"].isNotNullOrUndefined(sp_core_library_["Guid"].tryParse(data.userId), 'userId');
    };
    return AzureActiveDirectoryInfo;
}());
/* harmony default export */ var lib_AzureActiveDirectoryInfo = (AzureActiveDirectoryInfo_AzureActiveDirectoryInfo);

// CONCATENATED MODULE: ./lib/CultureInfo.js

var CultureInfo_CultureInfo = (function () {
    function CultureInfo(data) {
        this._validate(data);
        this._currentCultureName = data.currentCultureName;
        this._currentUICultureName = data.currentUICultureName;
        this._isRightToLeft = data.isRightToLeft;
    }
    CultureInfo.prototype._serialize = function () {
        return {
            currentCultureName: this.currentCultureName,
            currentUICultureName: this.currentUICultureName,
            isRightToLeft: this.isRightToLeft
        };
    };
    Object.defineProperty(CultureInfo.prototype, "currentCultureName", {
        get: function () {
            return this._currentCultureName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CultureInfo.prototype, "currentUICultureName", {
        get: function () {
            return this._currentUICultureName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CultureInfo.prototype, "isRightToLeft", {
        get: function () {
            return this._isRightToLeft;
        },
        enumerable: true,
        configurable: true
    });
    CultureInfo.prototype._validate = function (data) {
        sp_core_library_["Validate"].isNotNullOrUndefined(data, 'ICultureInfoData object');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.currentCultureName, 'currentCultureName');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.currentUICultureName, 'currentUICultureName');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.isRightToLeft, 'isRightToLeft');
    };
    return CultureInfo;
}());
/* harmony default export */ var lib_CultureInfo = (CultureInfo_CultureInfo);

// CONCATENATED MODULE: ./lib/SPPermission.js
var SPPermission = (function () {
    function SPPermission(value) {
        if (!value || value.High === undefined || value.Low === undefined) {
            throw new Error('Must use an object with a Low and High number value');
        }
        this._value = value;
    }
    SPPermission.prototype._serialize = function () {
        return {
            value: this.value
        };
    };
    Object.defineProperty(SPPermission.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    SPPermission.prototype.hasAnyPermissions = function () {
        var _this = this;
        var requestedPerms = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            requestedPerms[_i] = arguments[_i];
        }
        return (requestedPerms || []).some(function (permission) {
            return _this.hasPermission(permission);
        });
    };
    SPPermission.prototype.hasAllPermissions = function () {
        var _this = this;
        var requestedPerms = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            requestedPerms[_i] = arguments[_i];
        }
        return (requestedPerms || []).every(function (permission) {
            return _this.hasPermission(permission);
        });
    };
    SPPermission.prototype.hasPermission = function (requestedPerm) {
        return requestedPerm &&
            ((requestedPerm.value.Low & this.value.Low) === requestedPerm.value.Low) &&
            ((requestedPerm.value.High & this.value.High) === requestedPerm.value.High);
    };
    SPPermission.emptyMask = new SPPermission({ High: 0x0, Low: 0x0 });
    SPPermission.viewListItems = new SPPermission({ High: 0x0, Low: 0x1 });
    SPPermission.addListItems = new SPPermission({ High: 0x0, Low: 0x2 });
    SPPermission.editListItems = new SPPermission({ High: 0x0, Low: 0x4 });
    SPPermission.deleteListItems = new SPPermission({ High: 0x0, Low: 0x8 });
    SPPermission.approveItems = new SPPermission({ High: 0x0, Low: 0x10 });
    SPPermission.openItems = new SPPermission({ High: 0x0, Low: 0x20 });
    SPPermission.viewVersions = new SPPermission({ High: 0x0, Low: 0x40 });
    SPPermission.deleteVersions = new SPPermission({ High: 0x0, Low: 0x80 });
    SPPermission.cancelCheckout = new SPPermission({ High: 0x0, Low: 0x100 });
    SPPermission.managePersonalViews = new SPPermission({ High: 0x0, Low: 0x200 });
    SPPermission.manageLists = new SPPermission({ High: 0x0, Low: 0x800 });
    SPPermission.viewFormPages = new SPPermission({ High: 0x0, Low: 0x1000 });
    SPPermission.open = new SPPermission({ High: 0x0, Low: 0x20000 });
    SPPermission.viewPages = new SPPermission({ High: 0x0, Low: 0x20000 });
    SPPermission.layoutsPage = new SPPermission({ High: 0x0, Low: 0x21000 });
    SPPermission.addAndCustomizePages = new SPPermission({ High: 0x0, Low: 0x40000 });
    SPPermission.applyThemeAndBorder = new SPPermission({ High: 0x0, Low: 0x80000 });
    SPPermission.applyStyleSheets = new SPPermission({ High: 0x0, Low: 0x100000 });
    SPPermission.viewUsageData = new SPPermission({ High: 0x0, Low: 0x200000 });
    SPPermission.createSSCSite = new SPPermission({ High: 0x0, Low: 0x400000 });
    SPPermission.manageSubwebs = new SPPermission({ High: 0x0, Low: 0x800000 });
    SPPermission.createGroups = new SPPermission({ High: 0x0, Low: 0x1000000 });
    SPPermission.managePermissions = new SPPermission({ High: 0x0, Low: 0x2000000 });
    SPPermission.browseDirectories = new SPPermission({ High: 0x0, Low: 0x4000000 });
    SPPermission.browserUserInfo = new SPPermission({ High: 0x0, Low: 0x8000000 });
    SPPermission.addDelPrivateWebParts = new SPPermission({ High: 0x0, Low: 0x10000000 });
    SPPermission.updatePersonalWebParts = new SPPermission({ High: 0x0, Low: 0x20000000 });
    SPPermission.manageWeb = new SPPermission({ High: 0x0, Low: 0x40000000 });
    SPPermission.useClientIntegration = new SPPermission({ High: 0x10, Low: 0x0 });
    SPPermission.useRemoteAPIs = new SPPermission({ High: 0x20, Low: 0x0 });
    SPPermission.manageAlerts = new SPPermission({ High: 0x40, Low: 0x0 });
    SPPermission.createAlerts = new SPPermission({ High: 0x80, Low: 0x0 });
    SPPermission.editMyUserInfo = new SPPermission({ High: 0x100, Low: 0x0 });
    SPPermission.enumeratePermissions = new SPPermission({ High: 0x40000000, Low: 0x0 });
    SPPermission.fullMask = new SPPermission({ High: 0x7FFFFFFF, Low: 0xFFFFFFFF });
    return SPPermission;
}());
/* harmony default export */ var lib_SPPermission = (SPPermission);

// CONCATENATED MODULE: ./lib/SPList.js


var SPList_SPList = (function () {
    function SPList(data) {
        this._validate(data);
        this._baseTemplate = data.baseTemplate;
        this._id = sp_core_library_["Guid"].parse(data.id);
        this._permissions = new lib_SPPermission(data.permissions);
        this._serverRelativeUrl = data.serverRelativeUrl;
        this._title = data.title;
    }
    SPList.prototype._serialize = function () {
        return {
            id: this.id.toString(),
            title: this.title,
            permissions: this.permissions._serialize(),
            serverRelativeUrl: this.serverRelativeUrl
        };
    };
    Object.defineProperty(SPList.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPList.prototype, "permissions", {
        get: function () {
            return this._permissions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPList.prototype, "serverRelativeUrl", {
        get: function () {
            return this._serverRelativeUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPList.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    SPList.prototype._validate = function (data) {
        sp_core_library_["Validate"].isNotNullOrUndefined(data, 'ISPListData object');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.baseTemplate, 'baseTemplate');
        sp_core_library_["Validate"].isNotNullOrUndefined(sp_core_library_["Guid"].tryParse(data.id), 'id');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.permissions, 'permissions');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.serverRelativeUrl, 'serverRelativeUrl');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.title, 'title');
    };
    return SPList;
}());
/* harmony default export */ var lib_SPList = (SPList_SPList);

// CONCATENATED MODULE: ./lib/SPListItem.js

var SPListItem_SPListItem = (function () {
    function SPListItem(data) {
        this._validate(data);
        this._id = data.id;
    }
    SPListItem.prototype._serialize = function () {
        return {
            id: this.id
        };
    };
    Object.defineProperty(SPListItem.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    SPListItem.prototype._validate = function (data) {
        sp_core_library_["Validate"].isNotNullOrUndefined(data, 'ISPListItemData object');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.id, 'id');
    };
    return SPListItem;
}());
/* harmony default export */ var lib_SPListItem = (SPListItem_SPListItem);

// CONCATENATED MODULE: ./lib/O365GroupAssociation.js

var O365GroupAssociationType;
(function (O365GroupAssociationType) {
    O365GroupAssociationType[O365GroupAssociationType["Unknown"] = 0] = "Unknown";
    O365GroupAssociationType[O365GroupAssociationType["Private"] = 1] = "Private";
    O365GroupAssociationType[O365GroupAssociationType["Public"] = 2] = "Public";
})(O365GroupAssociationType = O365GroupAssociationType || (O365GroupAssociationType = {}));
var O365GroupAssociation_O365GroupAssociation = (function () {
    function O365GroupAssociation(data) {
        this._validate(data);
        this._id = sp_core_library_["Guid"].parse(data.id);
        switch (data.type) {
            case 'Private':
                this._type = O365GroupAssociationType.Private;
                break;
            case 'Public':
                this._type = O365GroupAssociationType.Public;
                break;
            default:
                this._type = O365GroupAssociationType.Unknown;
                break;
        }
    }
    O365GroupAssociation.prototype._serialize = function () {
        return {
            id: this.id.toString(),
            type: this.type
        };
    };
    Object.defineProperty(O365GroupAssociation.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(O365GroupAssociation.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    O365GroupAssociation.prototype._validate = function (data) {
        sp_core_library_["Validate"].isNotNullOrUndefined(data, 'IO365GroupData object');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.id, 'data.id');
    };
    return O365GroupAssociation;
}());
/* harmony default export */ var lib_O365GroupAssociation = (O365GroupAssociation_O365GroupAssociation);

// CONCATENATED MODULE: ./lib/SPSite.js


var SPSite_SPSite = (function () {
    function SPSite(data) {
        this._validate(data);
        this._absoluteUrl = data.absoluteUrl;
        this._cdnPrefix = data.cdnPrefix || '';
        this._classification = data.classification;
        this._correlationId = sp_core_library_["Guid"].parse(data.correlationId);
        this._group = data.group ? new lib_O365GroupAssociation(data.group) : undefined;
        this._id = sp_core_library_["Guid"].parse(data.id);
        this._isNoScriptEnabled = data.isNoScriptEnabled;
        this._recycleBinItemCount = data.recycleBinItemCount;
        this._serverRelativeUrl = data.serverRelativeUrl;
        this._serverRequestPath = data.serverRequestPath;
        this._sitePagesEnabled = data.sitePagesEnabled;
        this._sitePagesFeatureVersion = data.sitePagesFeatureVersion ? data.sitePagesFeatureVersion : 0;
    }
    SPSite.prototype._serialize = function () {
        return {
            absoluteUrl: this.absoluteUrl,
            cdnPrefix: this.cdnPrefix,
            classification: this.classification,
            correlationId: this.correlationId.toString(),
            group: this.group ? this.group._serialize() : undefined,
            id: this.id.toString(),
            isNoScriptEnabled: this.isNoScriptEnabled,
            recycleBinItemCount: this.recycleBinItemCount,
            serverRelativeUrl: this.serverRelativeUrl,
            serverRequestPath: this.serverRequestPath,
            sitePagesEnabled: this.sitePagesEnabled
        };
    };
    Object.defineProperty(SPSite.prototype, "absoluteUrl", {
        get: function () {
            return this._absoluteUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPSite.prototype, "cdnPrefix", {
        get: function () {
            return this._cdnPrefix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPSite.prototype, "classification", {
        get: function () {
            return this._classification;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPSite.prototype, "correlationId", {
        get: function () {
            return this._correlationId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPSite.prototype, "group", {
        get: function () {
            return this._group;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPSite.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPSite.prototype, "isNoScriptEnabled", {
        get: function () {
            return this._isNoScriptEnabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPSite.prototype, "recycleBinItemCount", {
        get: function () {
            return this._recycleBinItemCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPSite.prototype, "serverRelativeUrl", {
        get: function () {
            return this._serverRelativeUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPSite.prototype, "serverRequestPath", {
        get: function () {
            return this._serverRequestPath;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPSite.prototype, "sitePagesEnabled", {
        get: function () {
            return this._sitePagesEnabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPSite.prototype, "sitePagesFeatureVersion", {
        get: function () {
            return this._sitePagesFeatureVersion;
        },
        enumerable: true,
        configurable: true
    });
    SPSite.prototype._validate = function (data) {
        sp_core_library_["Validate"].isNotNullOrUndefined(data, 'ISPSiteData object');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.absoluteUrl, 'absoluteUrl');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.classification, 'classification');
        sp_core_library_["Validate"].isNotNullOrUndefined(sp_core_library_["Guid"].tryParse(data.correlationId), 'correlationId');
        sp_core_library_["Validate"].isNotNullOrUndefined(sp_core_library_["Guid"].tryParse(data.id), 'id');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.isNoScriptEnabled, 'isNoScriptEnabled');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.recycleBinItemCount, 'recycleBinItemCount');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.serverRequestPath, 'serverRequestPath');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.serverRelativeUrl, 'serverRelativeUrl');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.sitePagesEnabled, 'sitePagesEnabled');
    };
    return SPSite;
}());
/* harmony default export */ var lib_SPSite = (SPSite_SPSite);

// CONCATENATED MODULE: ./lib/SPTimeZone.js

var SPTimeZone_SPTimeZone = (function () {
    function SPTimeZone(data) {
        this._validate(data);
        this._daylightDate = data.daylightDate;
        this._daylightOffset = data.daylightOffset;
        this._description = data.description;
        this._id = data.id;
        this._offset = data.offset;
        this._standardDate = data.standardDate;
        this._standardOffset = data.standardOffset;
    }
    Object.defineProperty(SPTimeZone.prototype, "daylightDate", {
        get: function () {
            return this._daylightDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPTimeZone.prototype, "daylightOffset", {
        get: function () {
            return this._daylightOffset;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPTimeZone.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPTimeZone.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPTimeZone.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPTimeZone.prototype, "standardDate", {
        get: function () {
            return this._standardDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPTimeZone.prototype, "standardOffset", {
        get: function () {
            return this._standardOffset;
        },
        enumerable: true,
        configurable: true
    });
    SPTimeZone.prototype._validate = function (data) {
        sp_core_library_["Validate"].isNotNullOrUndefined(data, 'ISPTimeZoneData object');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.daylightDate, 'daylightDate');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.daylightOffset, 'daylightOffset');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.description, 'description');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.id, 'id');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.offset, 'offset');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.standardDate, 'standardDate');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.standardOffset, 'standardOffset');
    };
    return SPTimeZone;
}());
/* harmony default export */ var lib_SPTimeZone = (SPTimeZone_SPTimeZone);

// CONCATENATED MODULE: ./lib/SPUser.js


var SPUser_SPUser = (function () {
    function SPUser(data) {
        this._validate(data);
        this._displayName = data.displayName || '';
        this._email = data.email || '';
        this._isAnonymousGuestUser = data.isAnonymousGuestUser;
        this._isExternalGuestUser = data.isExternalGuestUser;
        this._loginName = data.loginName || '';
        this._preferUserTimeZone = data.preferUserTimeZone || false;
        this._timeZone = data.timeZoneInfo ?
            new lib_SPTimeZone(data.timeZoneInfo) : undefined;
        this._firstDayOfWeek = data.firstDayOfWeek;
    }
    SPUser.prototype._serialize = function () {
        return {
            loginName: this.loginName,
            displayName: this.displayName,
            email: this.email,
            isAnonymousGuestUser: this.isAnonymousGuestUser,
            firstDayOfWeek: this.firstDayOfWeek,
            isExternalGuestUser: this.isExternalGuestUser,
            preferUserTimeZone: this.preferUserTimeZone
        };
    };
    Object.defineProperty(SPUser.prototype, "displayName", {
        get: function () {
            return this._displayName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPUser.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPUser.prototype, "isAnonymousGuestUser", {
        get: function () {
            return this._isAnonymousGuestUser;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPUser.prototype, "isExternalGuestUser", {
        get: function () {
            return this._isExternalGuestUser;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPUser.prototype, "loginName", {
        get: function () {
            return this._loginName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPUser.prototype, "preferUserTimeZone", {
        get: function () {
            return this._preferUserTimeZone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPUser.prototype, "timeZoneInfo", {
        get: function () {
            return this._timeZone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPUser.prototype, "firstDayOfWeek", {
        get: function () {
            return this._firstDayOfWeek;
        },
        enumerable: true,
        configurable: true
    });
    SPUser.prototype._validate = function (data) {
        sp_core_library_["Validate"].isNotNullOrUndefined(data, 'ISPUserData object');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.isAnonymousGuestUser, 'isAnonymousGuestUser');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.isExternalGuestUser, 'isExternalGuestUser');
    };
    return SPUser;
}());
/* harmony default export */ var lib_SPUser = (SPUser_SPUser);

// CONCATENATED MODULE: ./lib/SPWeb.js



var SPWeb_SPWeb = (function () {
    function SPWeb(data) {
        this._validate(data);
        this._absoluteUrl = data.absoluteUrl;
        this._id = sp_core_library_["Guid"].parse(data.id);
        this._isAppWeb = data.isAppWeb;
        this._language = data.language;
        this._logoUrl = data.logoUrl;
        this._permissions = new lib_SPPermission(data.permissions);
        this._timeZone = data.timeZoneInfo ?
            new lib_SPTimeZone(data.timeZoneInfo) : undefined;
        this._firstDayOfWeek = data.firstDayOfWeek;
        this._serverRelativeUrl = data.serverRelativeUrl;
        this._templateName = data.templateName || '';
        this._title = data.title || '';
        this._description = data.description || '';
    }
    SPWeb.prototype._serialize = function () {
        return {
            id: this.id.toString(),
            title: this.title,
            description: this.description,
            serverRelativeUrl: this.serverRelativeUrl,
            absoluteUrl: this.absoluteUrl,
            isAppWeb: this.isAppWeb,
            language: this.language,
            logoUrl: this.logoUrl,
            permissions: this.permissions._serialize(),
            templateName: this.templateName
        };
    };
    Object.defineProperty(SPWeb.prototype, "absoluteUrl", {
        get: function () {
            return this._absoluteUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPWeb.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPWeb.prototype, "isAppWeb", {
        get: function () {
            return this._isAppWeb;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPWeb.prototype, "language", {
        get: function () {
            return this._language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPWeb.prototype, "logoUrl", {
        get: function () {
            return this._logoUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPWeb.prototype, "permissions", {
        get: function () {
            return this._permissions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPWeb.prototype, "timeZoneInfo", {
        get: function () {
            return this._timeZone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPWeb.prototype, "firstDayOfWeek", {
        get: function () {
            return this._firstDayOfWeek;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPWeb.prototype, "serverRelativeUrl", {
        get: function () {
            return this._serverRelativeUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPWeb.prototype, "templateName", {
        get: function () {
            return this._templateName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPWeb.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPWeb.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    SPWeb.prototype._validate = function (data) {
        sp_core_library_["Validate"].isNotNullOrUndefined(data, 'ISPWebData object');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.absoluteUrl, 'absoluteUrl');
        sp_core_library_["Validate"].isNotNullOrUndefined(sp_core_library_["Guid"].tryParse(data.id), 'id');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.isAppWeb, 'isAppWeb');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.language, 'language');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.logoUrl, 'logoUrl');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.permissions, 'permissions');
        sp_core_library_["Validate"].isNotNullOrUndefined(data.serverRelativeUrl, 'serverRelativeUrl');
    };
    return SPWeb;
}());
/* harmony default export */ var lib_SPWeb = (SPWeb_SPWeb);

// CONCATENATED MODULE: ./lib/loc/Strings.resx.js
var key = '_/GZrHjuQO4erDQbBRI2XSA';
var allStrings = ( false) ?
    require("../resx-strings/en-us.json") :
    __webpack_require__(4);
var strings = allStrings[key];
/* harmony default export */ var Strings_resx = (strings);

// CONCATENATED MODULE: ./lib/PageContext.js











var PageContext_PageContext = (function () {
    function PageContext(serviceScope) {
        var _this = this;
        this._urlParser = document.createElement('a');
        this._isInitialized = false;
        this._serviceScope = serviceScope;
        this._serviceScope.whenFinished(function () {
            _this._pageContextDataSource = new sp_dynamic_data_["_PageContextDataSource"](serviceScope);
            _this._pageContextDataSource.addPropertyHandler({
                id: PageContext._pageContextInfoId,
                dynamicDataFunctions: {
                    getPropertyDefinitions: function () { return [
                        {
                            id: PageContext._pageContextSiteDataDynamicProperty,
                            title: Strings_resx.ddpSiteDataTitle
                        },
                        {
                            id: PageContext._pageContextUserDynamicProperty,
                            title: Strings_resx.ddpUserDataTitle
                        },
                        {
                            id: PageContext._pageContextUrlDataDynamicProperty,
                            title: Strings_resx.ddpUrlDataTitle
                        }
                    ]; },
                    getPropertyValue: _this._getPropertyValue.bind(_this),
                    getAnnotatedPropertyValue: _this._getAnnotatedPropertyValue.bind(_this),
                    allowedEvents: function () { return []; }
                }
            });
        });
        this._getPropertyValue = this._getPropertyValue.bind(this);
    }
    PageContext.prototype.initialize = function (options, legacyPageContext) {
        var _this = this;
        sp_core_library_["Validate"].isNotNullOrUndefined(options, 'options');
        try {
            this._aadInfo = options.aadInfo ? new lib_AzureActiveDirectoryInfo(options.aadInfo) : undefined;
            this._cultureInfo = new lib_CultureInfo(options.cultureInfo);
            this._list = options.list ? new lib_SPList(options.list) : undefined;
            this._listItem = options.listItem ? new lib_SPListItem(options.listItem) : undefined;
            this._site = new lib_SPSite(options.site);
            this._teamsContext = options.teams || undefined;
            this._user = new lib_SPUser(options.user);
            this._web = new lib_SPWeb(options.web);
            this._legacyPageContext = legacyPageContext;
        }
        catch (e) {
            sp_diagnostics_["_TraceLogger"].logError(PageContext._logSource, e, 'initialize');
            throw e;
        }
        this._serviceScope.whenFinished(function () {
            _this._pageContextDataSource.notifyPropertyChanged(PageContext._pageContextUserDynamicProperty);
            _this._pageContextDataSource.notifyPropertyChanged(PageContext._pageContextSiteDataDynamicProperty);
            _this._pageContextDataSource.notifyPropertyChanged(PageContext._pageContextUserDynamicProperty);
        });
        this._isInitialized = true;
    };
    PageContext.prototype._serialize = function () {
        return {
            aadInfo: this.aadInfo ? this.aadInfo._serialize() : undefined,
            cultureInfo: this.cultureInfo._serialize(),
            list: this.list ? this.list._serialize() : undefined,
            listItem: this.listItem ? this.listItem._serialize() : undefined,
            site: this.site._serialize(),
            user: this.user._serialize(),
            web: this.web._serialize()
        };
    };
    Object.defineProperty(PageContext.prototype, "aadInfo", {
        get: function () {
            return this._aadInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageContext.prototype, "cultureInfo", {
        get: function () {
            return this._cultureInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageContext.prototype, "list", {
        get: function () {
            return this._list;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageContext.prototype, "listItem", {
        get: function () {
            return this._listItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageContext.prototype, "page", {
        get: function () {
            return this._page;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageContext.prototype, "site", {
        get: function () {
            return this._site;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageContext.prototype, "teams", {
        get: function () {
            return this._teamsContext;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageContext.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageContext.prototype, "web", {
        get: function () {
            return this._web;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageContext.prototype, "legacyPageContext", {
        get: function () {
            return this._legacyPageContext;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageContext.prototype, "isInitialized", {
        get: function () {
            return this._isInitialized;
        },
        enumerable: true,
        configurable: true
    });
    PageContext.prototype._getPropertyValue = function (propertyId) {
        switch (propertyId) {
            case PageContext._pageContextUserDynamicProperty:
                return {
                    userName: this.user.displayName,
                    userEmail: this.user.email,
                    userLogin: this.user.loginName
                };
            case PageContext._pageContextSiteDataDynamicProperty:
                return {
                    siteUrl: this.web.absoluteUrl,
                    siteCollectionUrl: this.site.absoluteUrl,
                    listUrl: document && document.location && this.list && document.location.origin + this.list.serverRelativeUrl,
                    itemId: this.listItem && this.listItem.id,
                    siteClassification: this.site.classification,
                    siteTitle: this.web.title,
                    siteDescription: this.web.description,
                    siteLogoUrl: document && document.location && document.location.origin + this.web.logoUrl
                };
            case PageContext._pageContextUrlDataDynamicProperty:
                return {
                    queryParameters: this._getUrlQueryParameterCollection(),
                    fragment: this._getUrlFragmentIdentifier()
                };
            default:
                return undefined;
        }
    };
    PageContext.prototype._getAnnotatedPropertyValue = function (propertyId) {
        var propMetadata = {};
        switch (propertyId) {
            case PageContext._pageContextUserDynamicProperty:
                propMetadata = {
                    userName: {
                        title: Strings_resx.ddvUserName,
                        description: Strings_resx.ddvUserNameDesc
                    },
                    userEmail: {
                        title: Strings_resx.ddvUserEmail,
                        description: Strings_resx.ddvUserEmailDesc
                    },
                    userLogin: {
                        title: Strings_resx.ddvUserLogin,
                        description: Strings_resx.ddvUserLoginDesc
                    }
                };
                break;
            case PageContext._pageContextSiteDataDynamicProperty:
                propMetadata = {
                    siteUrl: {
                        title: Strings_resx.ddvSiteUrl,
                        description: Strings_resx.ddvSiteUrlDesc
                    },
                    siteCollectionUrl: {
                        title: Strings_resx.ddvSiteCollectionUrl,
                        description: Strings_resx.ddvSiteCollectionUrlDesc
                    },
                    listUrl: {
                        title: Strings_resx.ddvListUrl,
                        description: Strings_resx.ddvListUrlDesc
                    },
                    itemId: {
                        title: Strings_resx.ddvItemId,
                        description: Strings_resx.ddvItemIdDesc
                    },
                    siteClassification: {
                        title: Strings_resx.ddvSiteClassification,
                        description: Strings_resx.ddvSiteClassificationDesc
                    },
                    siteTitle: {
                        title: Strings_resx.ddvSiteTitle,
                        description: Strings_resx.ddvSiteTitleDesc
                    },
                    siteDescription: {
                        title: Strings_resx.ddvSiteDescription,
                        description: Strings_resx.ddvSiteDescriptionDesc
                    },
                    siteLogoUrl: {
                        title: Strings_resx.ddvSiteLogoUrl,
                        description: Strings_resx.ddvSiteLogoUrlDesc
                    }
                };
                break;
            case PageContext._pageContextUrlDataDynamicProperty:
                propMetadata = {
                    queryParameters: {
                        title: Strings_resx.ddvQueryParameters,
                        description: Strings_resx.ddvQueryParametersDesc
                    },
                    fragment: {
                        title: Strings_resx.ddvFragment,
                        description: Strings_resx.ddvFragmentDesc
                    }
                };
                break;
        }
        return {
            sampleValue: this._getPropertyValue(propertyId),
            metadata: propMetadata
        };
    };
    PageContext.prototype._getUrlQueryParameterCollection = function () {
        this._urlParser.href = window.location.href;
        var queryParams = this._urlParser.search.substring(1).split('&');
        var queryParamCollection = {};
        for (var _i = 0, queryParams_1 = queryParams; _i < queryParams_1.length; _i++) {
            var queryParam = queryParams_1[_i];
            if (queryParam !== '') {
                var params = queryParam.split('=');
                queryParamCollection[decodeURIComponent(params[0])] = decodeURIComponent(params[1] || '');
            }
        }
        return queryParamCollection;
    };
    PageContext.prototype._getUrlFragmentIdentifier = function () {
        this._urlParser.href = window.location.href;
        return this._urlParser.hash.substring(1); 
    };
    PageContext.serviceKey = sp_core_library_["ServiceKey"].create('sp-page-context:PageContext', PageContext);
    PageContext._logSource = sp_diagnostics_["_LogSource"].create('PageContext');
    PageContext._pageContextInfoId = 'PageContextInfoProperties';
    PageContext._pageContextUserDynamicProperty = 'UserData';
    PageContext._pageContextSiteDataDynamicProperty = 'SiteData';
    PageContext._pageContextUrlDataDynamicProperty = 'UrlData';
    return PageContext;
}());
/* harmony default export */ var lib_PageContext = (PageContext_PageContext);

// CONCATENATED MODULE: ./lib/SPField.js


var SPField_SPField = (function () {
    function SPField(data) {
        this._validate(data);
        this._id = sp_core_library_["Guid"].parse(data.id);
        this._internalName = data.internalName || '';
        this._fieldType = data.fieldType || '';
        this._required = data.isRequired;
        this._displayName = data.displayName || '';
        this._clientSideComponentId = sp_core_library_["Guid"].tryParse(data.clientSideComponentId);
        this._clientSideComponentProperties = data.clientSideComponentProperties || '';
    }
    Object.defineProperty(SPField.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPField.prototype, "internalName", {
        get: function () {
            return this._internalName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPField.prototype, "fieldType", {
        get: function () {
            return this._fieldType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPField.prototype, "isRequired", {
        get: function () {
            return this._required;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPField.prototype, "displayName", {
        get: function () {
            return this._displayName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPField.prototype, "clientSideComponentId", {
        get: function () {
            return this._clientSideComponentId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPField.prototype, "clientSideComponentProperties", {
        get: function () {
            return this._clientSideComponentProperties;
        },
        enumerable: true,
        configurable: true
    });
    SPField.prototype._validate = function (data) {
        sp_core_library_["Validate"].isNotNullOrUndefined(data, 'ISPFieldData object');
    };
    return SPField;
}());
/* harmony default export */ var lib_SPField = (SPField_SPField);

// CONCATENATED MODULE: ./lib/pageManager/SharePointPageContextDataProvider.js
var SharePointPageContextDataProvider = (function () {
    function SharePointPageContextDataProvider() {
    }
    SharePointPageContextDataProvider._createPageContextData = function (spPageContextInfo) {
        var pageContextData = {
            aadInfo: !!spPageContextInfo.aadInstanceUrl && !!spPageContextInfo.aadTenantId &&
                !!spPageContextInfo.aadUserId ? {
                instanceUrl: spPageContextInfo.aadInstanceUrl,
                tenantId: spPageContextInfo.aadTenantId,
                userId: spPageContextInfo.aadUserId
            } : undefined,
            cultureInfo: {
                currentCultureName: spPageContextInfo.currentCultureName,
                currentUICultureName: spPageContextInfo.currentUICultureName,
                isRightToLeft: document.documentElement.dir === 'rtl' ?
                    true :
                    false
            },
            list: spPageContextInfo.listId && spPageContextInfo.listId !== '' ? {
                baseTemplate: spPageContextInfo.listBaseTemplate,
                id: spPageContextInfo.listId,
                permissions: spPageContextInfo.listPermsMask,
                serverRelativeUrl: spPageContextInfo.listUrl,
                title: spPageContextInfo.listTitle
            } : undefined,
            listItem: spPageContextInfo.pageItemId && spPageContextInfo.pageItemId !== -1 ? {
                id: spPageContextInfo.pageItemId
            } : undefined,
            page: spPageContextInfo.socialBarEnabled ? {
                socialBarEnabled: spPageContextInfo.socialBarEnabled
            } : {},
            site: {
                absoluteUrl: spPageContextInfo.siteAbsoluteUrl,
                cdnPrefix: spPageContextInfo.cdnPrefix,
                classification: spPageContextInfo.siteClassification,
                correlationId: spPageContextInfo.CorrelationId,
                group: spPageContextInfo.groupId && spPageContextInfo.groupId !== '' ? {
                    id: spPageContextInfo.groupId,
                    type: spPageContextInfo.groupType
                } : undefined,
                id: spPageContextInfo.siteId,
                isNoScriptEnabled: spPageContextInfo.isNoScriptEnabled,
                recycleBinItemCount: spPageContextInfo.RecycleBinItemCount,
                serverRelativeUrl: spPageContextInfo.siteServerRelativeUrl,
                serverRequestPath: spPageContextInfo.serverRequestPath,
                sitePagesEnabled: spPageContextInfo.sitePagesEnabled
            },
            user: {
                isAnonymousGuestUser: spPageContextInfo.isAnonymousGuestUser,
                isExternalGuestUser: spPageContextInfo.isExternalGuestUser,
                displayName: spPageContextInfo.userDisplayName,
                email: spPageContextInfo.userEmail,
                loginName: spPageContextInfo.userLoginName,
                preferUserTimeZone: spPageContextInfo.preferUserTimeZone,
                timeZoneInfo: spPageContextInfo.userTimeZoneData ? {
                    daylightDate: spPageContextInfo.userTimeZoneData.DaylightDate,
                    daylightOffset: spPageContextInfo.userTimeZoneData.DaylightBias,
                    description: spPageContextInfo.userTimeZoneData.Description,
                    id: spPageContextInfo.userTimeZoneData.Id,
                    offset: spPageContextInfo.userTimeZoneData.Bias,
                    standardDate: spPageContextInfo.userTimeZoneData.StandardDate,
                    standardOffset: spPageContextInfo.userTimeZoneData.StandardBias
                } : undefined,
                firstDayOfWeek: typeof spPageContextInfo.userFirstDayOfWeek === 'number'
                    ? spPageContextInfo.userFirstDayOfWeek : undefined
            },
            web: {
                absoluteUrl: spPageContextInfo.webAbsoluteUrl,
                id: spPageContextInfo.webId,
                isAppWeb: spPageContextInfo.isAppWeb,
                language: spPageContextInfo.webLanguage,
                logoUrl: spPageContextInfo.webLogoUrl,
                permissions: spPageContextInfo.webPermMasks,
                serverRelativeUrl: spPageContextInfo.webServerRelativeUrl,
                templateName: spPageContextInfo.webTemplate,
                description: spPageContextInfo.webDescription,
                timeZoneInfo: spPageContextInfo.webTimeZoneData ? {
                    daylightDate: spPageContextInfo.webTimeZoneData.DaylightDate,
                    daylightOffset: spPageContextInfo.webTimeZoneData.DaylightBias,
                    description: spPageContextInfo.webTimeZoneData.Description,
                    id: spPageContextInfo.webTimeZoneData.Id,
                    offset: spPageContextInfo.webTimeZoneData.Bias,
                    standardDate: spPageContextInfo.webTimeZoneData.StandardDate,
                    standardOffset: spPageContextInfo.webTimeZoneData.StandardBias
                } : undefined,
                firstDayOfWeek: typeof spPageContextInfo.webFirstDayOfWeek === 'number'
                    ? spPageContextInfo.webFirstDayOfWeek : undefined,
                title: spPageContextInfo.webTitle
            }
        };
        pageContextData.site.sitePagesFeatureVersion = spPageContextInfo.sitePagesFeatureVersion;
        return pageContextData;
    };
    return SharePointPageContextDataProvider;
}());
/* harmony default export */ var pageManager_SharePointPageContextDataProvider = (SharePointPageContextDataProvider);

// CONCATENATED MODULE: ./lib/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Page", function() { return lib_Page; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PageContext", function() { return lib_PageContext; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SPWeb", function() { return lib_SPWeb; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SPSite", function() { return lib_SPSite; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SPUser", function() { return lib_SPUser; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SPField", function() { return lib_SPField; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SPList", function() { return lib_SPList; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SPListItem", function() { return lib_SPListItem; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CultureInfo", function() { return lib_CultureInfo; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "O365GroupAssociation", function() { return lib_O365GroupAssociation; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "O365GroupAssociationType", function() { return O365GroupAssociationType; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SPPermission", function() { return lib_SPPermission; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SharePointPageContextDataProvider", function() { return pageManager_SharePointPageContextDataProvider; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SPTimeZone", function() { return lib_SPTimeZone; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "AzureActiveDirectoryInfo", function() { return lib_AzureActiveDirectoryInfo; });
















/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ })
/******/ ])}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
  var strings = {
    "_/GZrHjuQO4erDQbBRI2XSA": {
      "ddpSiteDataTitle": "Site properties",
      "ddpUserDataTitle": "Current user information",
      "ddpUrlDataTitle": "Query string",
      "ddvUserName": "***User name",
      "ddvUserNameDesc": "***The name of the user",
      "ddvUserEmail": "***User email",
      "ddvUserEmailDesc": "***The email of the current user",
      "ddvUserLogin": "***Login name",
      "ddvUserLoginDesc": "***The name that the user logged in with",
      "ddvSiteUrl": "Site link",
      "ddvSiteUrlDesc": "***The URL of the current site",
      "ddvSiteCollectionUrl": "Site collection link",
      "ddvSiteCollectionUrlDesc": "***The URL of the current site collection",
      "ddvListUrl": "List link",
      "ddvListUrlDesc": "***The URL of the current list",
      "ddvItemId": "***Item id",
      "ddvItemIdDesc": "***The id of the current item",
      "ddvSiteClassification": "***Site classification",
      "ddvSiteClassificationDesc": "***The classification of the current site",
      "ddvSiteTitle": "***Site title",
      "ddvSiteTitleDesc": "***The title of the current site",
      "ddvSiteDescription": "***Site description",
      "ddvSiteDescriptionDesc": "***The description of the current site",
      "ddvSiteLogoUrl": "***Site logo",
      "ddvSiteLogoUrlDesc": "***The URL of the site logo",
      "ddvQueryParameters": "***Query parameters",
      "ddvQueryParametersDesc": "***The different query strings that are on the current URL",
      "ddvFragment": "***URL fragment",
      "ddvFragmentDesc": "***The part of the current URL that is after the #"
    }
  };

  strings.default = strings;
  return strings;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })
/******/ ])});;
//# sourceMappingURL=sp-page-context_en-us.js.map


define("e40f8203-b39d-425a-a957-714852e33b79_1.7.1", ["@microsoft/sp-core-library","@microsoft/sp-diagnostics","@microsoft/sp-lodash-subset"], function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1),__webpack_require__(2),__webpack_require__(3),__webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./lib/DynamicDataReference.js
var DynamicDataReference = (function () {
    function DynamicDataReference(reference) {
        var split = reference.split(':');
        if (split.length < 2) {
            throw new Error("Data id is malformed. Data id: \"" + reference + "\"");
        }
        this._reference = reference;
        this._sourceId = split[0];
        this._property = split[1];
        this._propertyPath = split[2];
    }
    Object.defineProperty(DynamicDataReference.prototype, "reference", {
        get: function () {
            return this._reference;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicDataReference.prototype, "sourceId", {
        get: function () {
            return this._sourceId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicDataReference.prototype, "property", {
        get: function () {
            return this._property;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicDataReference.prototype, "propertyPath", {
        get: function () {
            return this._propertyPath;
        },
        enumerable: true,
        configurable: true
    });
    return DynamicDataReference;
}());
/* harmony default export */ var lib_DynamicDataReference = (DynamicDataReference);

// EXTERNAL MODULE: external "@microsoft/sp-core-library"
var sp_core_library_ = __webpack_require__(1);
var sp_core_library__default = /*#__PURE__*/__webpack_require__.n(sp_core_library_);

// EXTERNAL MODULE: external "@microsoft/sp-diagnostics"
var sp_diagnostics_ = __webpack_require__(2);
var sp_diagnostics__default = /*#__PURE__*/__webpack_require__.n(sp_diagnostics_);

// CONCATENATED MODULE: ./lib/loc/Strings.resx.js
var key = '_/GZrHjuQO4erDQbBRI2XSA';
var allStrings = ( false) ?
    require("../resx-strings/en-us.json") :
    __webpack_require__(3);
var strings = allStrings[key];
/* harmony default export */ var Strings_resx = (strings);

// CONCATENATED MODULE: ./lib/DynamicDataManager.js



var ANY_PROPERTY_EVENT_PREFIX = 'DynamicData_AnyPropertyChanged';
var PROPERTY_EVENT_PREFIX = 'DynamicData_PropertyChanged';
var ALL_PROPERTIES_EVENT_PREFIX = 'DynamicData_AllPropertiesChanged';
var SOURCES_CHANGED_EVENT_NAME = 'DynamicData_SourcesChanged';
var EVENT_NAME_SEPARATOR = '_';
var QOS_MONITOR_PREFIX = 'DynamicData.DynamicDataManager';
var LOG_SOURCE = sp_diagnostics_["_LogSource"].create('DynamicDataManager');
var DynamicDataManager_DynamicDataManager = (function () {
    function DynamicDataManager(serviceScope) {
        this._sources = new Map();
        this._sourcesChangedEvent = new sp_core_library_["SPEvent"](SOURCES_CHANGED_EVENT_NAME);
        this._getPropertyChangedEventName = this._getPropertyChangedEventName.bind(this);
    }
    Object.defineProperty(DynamicDataManager.prototype, "sourcesChangedEvent", {
        get: function () {
            return this._sourcesChangedEvent;
        },
        enumerable: true,
        configurable: true
    });
    DynamicDataManager.prototype.notifySourceChanged = function (sourceId) {
        var qosMonitor = new sp_diagnostics_["_QosMonitor"](QOS_MONITOR_PREFIX + '.notifySourceChanged');
        try {
            sp_core_library_["Validate"].isNonemptyString(sourceId, 'sourceId');
            sp_core_library_["_SPEventManager"].instance.raiseEvent(this._getAllPropertiesChangedEventName(sourceId), {});
            sp_core_library_["_SPEventManager"].instance.raiseEvent(this._getAnyPropertyChangedEventName(sourceId), {});
            qosMonitor.writeSuccess();
        }
        catch (e) {
            qosMonitor.writeUnexpectedFailure(e);
            throw e;
        }
    };
    DynamicDataManager.prototype.notifyPropertyChanged = function (sourceId, propertyId) {
        var qosMonitor = new sp_diagnostics_["_QosMonitor"](QOS_MONITOR_PREFIX + '.notifyPropertyChanged');
        try {
            sp_core_library_["Validate"].isNonemptyString(sourceId, 'sourceId');
            sp_core_library_["Validate"].isNonemptyString(propertyId, 'propertyId');
            sp_core_library_["_SPEventManager"].instance.raiseEvent(this._getPropertyChangedEventName(sourceId, propertyId), {});
            sp_core_library_["_SPEventManager"].instance.raiseEvent(this._getAnyPropertyChangedEventName(sourceId), {});
            qosMonitor.writeSuccess();
        }
        catch (e) {
            qosMonitor.writeUnexpectedFailure(e);
            throw e;
        }
    };
    DynamicDataManager.prototype.registerSourceChanged = function (sourceId, observer, callback) {
        var qosMonitor = new sp_diagnostics_["_QosMonitor"](QOS_MONITOR_PREFIX + '.registerSourceChanged');
        try {
            sp_core_library_["Validate"].isNonemptyString(sourceId, 'sourceId');
            sp_core_library_["Validate"].isNotNullOrUndefined(observer, 'observer');
            sp_core_library_["Validate"].isNotNullOrUndefined(callback, 'callback');
            if (!this._sources.has(sourceId)) {
                throw new Error(sp_core_library_["Text"].format(Strings_resx.dynamicDataManagerSourceDoesntExist, sourceId));
            }
            sp_core_library_["_SPEventManager"].instance.registerEvent(this._getAllPropertiesChangedEventName(sourceId), observer, callback);
            sp_core_library_["_SPEventManager"].instance.registerEvent(this._getAnyPropertyChangedEventName(sourceId), observer, callback);
            qosMonitor.writeSuccess();
        }
        catch (e) {
            qosMonitor.writeUnexpectedFailure(e);
            throw e;
        }
    };
    DynamicDataManager.prototype.unregisterSourceChanged = function (sourceId, observer, callback) {
        var qosMonitor = new sp_diagnostics_["_QosMonitor"](QOS_MONITOR_PREFIX + '.unregisterSourceChanged');
        try {
            sp_core_library_["Validate"].isNonemptyString(sourceId, 'sourceId');
            sp_core_library_["Validate"].isNotNullOrUndefined(observer, 'observer');
            sp_core_library_["Validate"].isNotNullOrUndefined(callback, 'callback');
            if (!this._sources.has(sourceId)) {
                throw new Error(sp_core_library_["Text"].format(Strings_resx.dynamicDataManagerSourceDoesntExist, sourceId));
            }
            sp_core_library_["_SPEventManager"].instance.unregisterEvent(this._getAllPropertiesChangedEventName(sourceId), observer, callback);
            sp_core_library_["_SPEventManager"].instance.unregisterEvent(this._getAnyPropertyChangedEventName(sourceId), observer, callback);
            qosMonitor.writeSuccess();
        }
        catch (e) {
            qosMonitor.writeUnexpectedFailure(e);
            throw e;
        }
    };
    DynamicDataManager.prototype.registerPropertyChanged = function (sourceId, propertyId, observer, callback) {
        var qosMonitor = new sp_diagnostics_["_QosMonitor"](QOS_MONITOR_PREFIX + '.registerPropertyChanged');
        try {
            sp_core_library_["Validate"].isNonemptyString(sourceId, 'sourceId');
            sp_core_library_["Validate"].isNonemptyString(propertyId, 'propertyId');
            sp_core_library_["Validate"].isNotNullOrUndefined(observer, 'observer');
            sp_core_library_["Validate"].isNotNullOrUndefined(callback, 'callback');
            if (!this._sources.has(sourceId)) {
                throw new Error(sp_core_library_["Text"].format(Strings_resx.dynamicDataManagerSourceDoesntExist, sourceId));
            }
            sp_core_library_["_SPEventManager"].instance.registerEvent(this._getPropertyChangedEventName(sourceId, propertyId), observer, callback);
            sp_core_library_["_SPEventManager"].instance.registerEvent(this._getAllPropertiesChangedEventName(sourceId), observer, callback);
            qosMonitor.writeSuccess();
        }
        catch (e) {
            qosMonitor.writeUnexpectedFailure(e);
            throw e;
        }
    };
    DynamicDataManager.prototype.unregisterPropertyChanged = function (sourceId, propertyId, observer, callback) {
        var qosMonitor = new sp_diagnostics_["_QosMonitor"](QOS_MONITOR_PREFIX + '.unregisterPropertyChanged');
        try {
            sp_core_library_["Validate"].isNonemptyString(sourceId, 'sourceId');
            sp_core_library_["Validate"].isNonemptyString(propertyId, 'propertyId');
            sp_core_library_["Validate"].isNotNullOrUndefined(observer, 'observer');
            sp_core_library_["Validate"].isNotNullOrUndefined(callback, 'callback');
            if (!this._sources.has(sourceId)) {
                throw new Error(sp_core_library_["Text"].format(Strings_resx.dynamicDataManagerSourceDoesntExist, sourceId));
            }
            sp_core_library_["_SPEventManager"].instance.unregisterEvent(this._getPropertyChangedEventName(sourceId, propertyId), observer, callback);
            sp_core_library_["_SPEventManager"].instance.unregisterEvent(this._getAllPropertiesChangedEventName(sourceId), observer, callback);
            qosMonitor.writeSuccess();
        }
        catch (e) {
            qosMonitor.writeUnexpectedFailure(e);
            throw e;
        }
    };
    DynamicDataManager.prototype.getSources = function () {
        var sources = [];
        this._sources.forEach(function (source) { return sources.push(source); });
        return sources;
    };
    DynamicDataManager.prototype.tryGetSource = function (sourceId) {
        sp_core_library_["Validate"].isNotNullOrUndefined(sourceId, 'sourceId');
        return this._sources.get(sourceId);
    };
    DynamicDataManager.prototype.addSource = function (source) {
        var qosMonitor = new sp_diagnostics_["_QosMonitor"](QOS_MONITOR_PREFIX + '.addSource');
        try {
            this._validateSource(source);
            if (this._sources.has(source.id)) {
                sp_diagnostics_["_TraceLogger"].logVerbose(LOG_SOURCE, sp_core_library_["Text"].format(Strings_resx.dynamicDataManagerSourceAlreadyExists, source.id));
            }
            this._sources.set(source.id, source);
            this._raiseSourcesChangedEvent();
            qosMonitor.writeSuccess();
        }
        catch (e) {
            qosMonitor.writeUnexpectedFailure(e);
            throw e;
        }
    };
    DynamicDataManager.prototype.removeSource = function (sourceId) {
        var qosMonitor = new sp_diagnostics_["_QosMonitor"](QOS_MONITOR_PREFIX + '.removeSource');
        try {
            sp_core_library_["Validate"].isNonemptyString(sourceId, 'sourceId');
            if (this._sources.has(sourceId)) {
                sp_core_library_["_SPEventManager"].instance.removeEvent(this._getAllPropertiesChangedEventName(sourceId));
                sp_core_library_["_SPEventManager"].instance.removeEvent(this._getAnyPropertyChangedEventName(sourceId));
                sp_core_library_["_SPEventManager"].instance.removeEventsByPrefix(this._getPropertyChangedEventPrefix(sourceId));
                this._sources.delete(sourceId);
                this._raiseSourcesChangedEvent();
            }
            qosMonitor.writeSuccess();
        }
        catch (e) {
            qosMonitor.writeUnexpectedFailure(e);
            throw e;
        }
    };
    DynamicDataManager.prototype._validateSource = function (source) {
        sp_core_library_["Validate"].isNotNullOrUndefined(source, 'source');
        if (source.id.indexOf(EVENT_NAME_SEPARATOR) > -1) {
            throw new Error("Source id contains invalid characters, like \"" + EVENT_NAME_SEPARATOR + "\". Id: \"" + source.id + "\".");
        }
        var regex = /^[a-zA-Z0-9\-_]+$/;
        source.getPropertyDefinitions().forEach(function (def) {
            if (!regex.test(def.id)) {
                throw new Error("Source contains invalid property \"" + def.id + "\".");
            }
        });
    };
    DynamicDataManager.prototype._raiseSourcesChangedEvent = function () {
        sp_core_library_["_SPEventManager"].instance.raiseStickyEvent(SOURCES_CHANGED_EVENT_NAME, {});
    };
    DynamicDataManager.prototype._getAllPropertiesChangedEventName = function (sourceId) {
        return [ALL_PROPERTIES_EVENT_PREFIX, sourceId].join(EVENT_NAME_SEPARATOR);
    };
    DynamicDataManager.prototype._getAnyPropertyChangedEventName = function (sourceId) {
        return [ANY_PROPERTY_EVENT_PREFIX, sourceId].join(EVENT_NAME_SEPARATOR);
    };
    DynamicDataManager.prototype._getPropertyChangedEventPrefix = function (sourceId) {
        return [PROPERTY_EVENT_PREFIX, sourceId].join(EVENT_NAME_SEPARATOR);
    };
    DynamicDataManager.prototype._getPropertyChangedEventName = function (sourceId, propertyId) {
        return [this._getPropertyChangedEventPrefix(sourceId), propertyId].join(EVENT_NAME_SEPARATOR);
    };
    DynamicDataManager.serviceKey = sp_core_library_["ServiceKey"].create('sp-core-library:DynamicDataManager', DynamicDataManager);
    return DynamicDataManager;
}());
/* harmony default export */ var lib_DynamicDataManager = (DynamicDataManager_DynamicDataManager);

// EXTERNAL MODULE: external "@microsoft/sp-lodash-subset"
var sp_lodash_subset_ = __webpack_require__(4);
var sp_lodash_subset__default = /*#__PURE__*/__webpack_require__.n(sp_lodash_subset_);

// CONCATENATED MODULE: ./lib/PageContextDataSource.js



var PageContextDataSource_PageContextDataSource = (function () {
    function PageContextDataSource(serviceScope) {
        var _this = this;
        this._propertyDefinitions = {};
        this._eventDefinitions = {};
        this._serviceScope = serviceScope;
        this._serviceScope.whenFinished(function () {
            _this._dynamicDataManager = serviceScope.consume(lib_DynamicDataManager.serviceKey);
            _this._dynamicDataManager.addSource({
                id: PageContextDataSource._pageContextDataSourceId,
                metadata: {
                    title: Strings_resx.pageContextDataSourceTitle,
                    description: Strings_resx.pageContextDataSourceDescription,
                    componentId: '1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8',
                    alias: PageContextDataSource._pageContextDataSourceAlias
                },
                getPropertyDefinitions: _this.getPropertyDefinitions.bind(_this),
                getAnnotatedPropertyValue: _this.getAnnotatedPropertyValue.bind(_this),
                getPropertyValue: _this.getPropertyValue.bind(_this),
                allowedEvents: _this.allowedEvents.bind(_this),
                sendEvent: _this.sendEvent.bind(_this)
            });
        });
    }
    PageContextDataSource.prototype.addPropertyHandler = function (propInfo) {
        var _this = this;
        propInfo.dynamicDataFunctions.getPropertyDefinitions().forEach(function (propertyDefinition) {
            _this._propertyDefinitions[propertyDefinition.id] = {
                propertyCollectionId: propInfo.id,
                annotatedPropertyValueFunction: propInfo.dynamicDataFunctions.getAnnotatedPropertyValue,
                propertyValueFunction: propInfo.dynamicDataFunctions.getPropertyValue,
                definition: propertyDefinition
            };
        });
        if (propInfo.dynamicDataFunctions.allowedEvents) {
            propInfo.dynamicDataFunctions.allowedEvents().forEach(function (event) {
                if (propInfo.dynamicDataFunctions.sendEvent) {
                    _this._eventDefinitions[event.name] = {
                        propertyCollectionId: propInfo.id,
                        sendEvent: propInfo.dynamicDataFunctions.sendEvent,
                        definition: event
                    };
                }
            });
        }
        this._dynamicDataManager.notifySourceChanged(PageContextDataSource._pageContextDataSourceId);
    };
    PageContextDataSource.prototype.notifyPropertyChanged = function (propertyId) {
        this._dynamicDataManager.notifyPropertyChanged(PageContextDataSource._pageContextDataSourceId, propertyId);
    };
    PageContextDataSource.prototype.removePropertyHandler = function (id) {
        for (var prop in this._propertyDefinitions) {
            if (this._propertyDefinitions.hasOwnProperty(prop)) {
                if (this._propertyDefinitions[prop].propertyCollectionId === id) {
                    delete this._propertyDefinitions[prop];
                }
            }
        }
        for (var prop in this._eventDefinitions) {
            if (this._eventDefinitions.hasOwnProperty(prop)) {
                if (this._eventDefinitions[prop].propertyCollectionId === id) {
                    delete this._eventDefinitions[prop];
                }
            }
        }
        this._dynamicDataManager.notifySourceChanged('PageContext');
    };
    PageContextDataSource.prototype.getPropertyDefinitions = function () {
        var retVal = [];
        for (var prop in this._propertyDefinitions) {
            if (this._propertyDefinitions.hasOwnProperty(prop)) {
                retVal.push(this._propertyDefinitions[prop].definition);
            }
        }
        return Object(sp_lodash_subset_["cloneDeep"])(retVal);
    };
    PageContextDataSource.prototype.getPropertyValue = function (propertyId) {
        if (this._propertyDefinitions[propertyId]) {
            return Object(sp_lodash_subset_["cloneDeep"])(this._propertyDefinitions[propertyId].propertyValueFunction(propertyId));
        }
        return undefined;
    };
    PageContextDataSource.prototype.getAnnotatedPropertyValue = function (propertyId) {
        if (this._propertyDefinitions[propertyId]) {
            return Object(sp_lodash_subset_["cloneDeep"])(this._propertyDefinitions[propertyId].annotatedPropertyValueFunction(propertyId));
        }
        else {
            return { sampleValue: undefined };
        }
    };
    PageContextDataSource.prototype.allowedEvents = function () {
        var retVal = [];
        for (var prop in this._eventDefinitions) {
            if (this._eventDefinitions.hasOwnProperty(prop)) {
                retVal.push(this._eventDefinitions[prop].definition);
            }
        }
        return Object(sp_lodash_subset_["cloneDeep"])(retVal);
    };
    PageContextDataSource.prototype.sendEvent = function (eventName, data) {
        if (this._eventDefinitions[eventName]) {
            this._eventDefinitions[eventName].sendEvent(eventName, data);
        }
    };
    PageContextDataSource._pageContextDataSourceId = 'PageContext';
    PageContextDataSource._pageContextDataSourceAlias = 'Page Context';
    return PageContextDataSource;
}());
/* harmony default export */ var lib_PageContextDataSource = (PageContextDataSource_PageContextDataSource);

// CONCATENATED MODULE: ./lib/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DynamicDataReference", function() { return lib_DynamicDataReference; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_PageContextDataSource", function() { return lib_PageContextDataSource; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_DynamicDataManager", function() { return lib_DynamicDataManager; });





/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ })
/******/ ])}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
  var strings = {
    "_/GZrHjuQO4erDQbBRI2XSA": {
      "dynamicDataManagerSourceAlreadyExists": "***A source with id \"{0}\" already exists.",
      "dynamicDataManagerSourceDoesntExist": "***No source with id \"{0}\" found.",
      "pageContextDataSourceTitle": "Page environment",
      "pageContextDataSourceDescription": "***This includes some metadata about the page"
    }
  };

  strings.default = strings;
  return strings;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ })
/******/ ])});;
//# sourceMappingURL=sp-dynamic-data_en-us.js.map


define("c07208f0-ea3b-4c1a-9965-ac1b825211a6_1.7.1", ["@microsoft/sp-core-library","@microsoft/sp-diagnostics"], function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1),__webpack_require__(2),__webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonpc07208f0_ea3b_4c1a_9965_ac1b825211a6_1_7_1"];
/******/ 	window["webpackJsonpc07208f0_ea3b_4c1a_9965_ac1b825211a6_1_7_1"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + ({}[chunkId]||chunkId) + "_" + {"0":"d38d3036c6ab91dcb853","1":"0b63b1e086ce19369202"}[chunkId] + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Set the webpack public path
/******/ 	(function () {
/******/ 	  var scripts = document.getElementsByTagName('script');
/******/ 	  var regex = (typeof spScriptNamePattern !== 'undefined') ? spScriptNamePattern : new RegExp('sp-http_?[a-zA-Z0-9-_]*.js', 'i');
/******/ 	  var publicPath;
/******/ 	
/******/ 	  if (scripts && scripts.length) {
/******/ 	    for (var i = 0; i < scripts.length; i++) {
/******/ 	      if (!scripts[i]) continue;
/******/ 	      var path = scripts[i].getAttribute('src');
/******/ 	      if (path && path.match(regex)) {
/******/ 	        publicPath = path.substring(0, path.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/ 	
/******/ 	  if (!publicPath) {
/******/ 	    for (var global in window.__setWebpackPublicPathLoaderSrcRegistry__) {
/******/ 	      if (global && global.match(regex)) {
/******/ 	        publicPath = global.substring(0, global.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/ 	  __webpack_require__.p = publicPath;
/******/ 	})();
/******/ 	
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@microsoft/sp-core-library"
var sp_core_library_ = __webpack_require__(0);
var sp_core_library__default = /*#__PURE__*/__webpack_require__.n(sp_core_library_);

// CONCATENATED MODULE: ./lib/httpClient/FetchProvider.js

var FetchProvider = (function () {
    function FetchProvider(serviceScope) {
    }
    FetchProvider.prototype.fetch = function (request) {
        return window.fetch(request);
    };
    return FetchProvider;
}());
/* harmony default export */ var httpClient_FetchProvider = (FetchProvider);
var fetchProviderServiceKey = sp_core_library_["ServiceKey"].create('sp-client-base:FetchProvider', FetchProvider);

// CONCATENATED MODULE: ./lib/httpClient/HttpClientConfiguration.js
var HttpClientConfiguration = (function () {
    function HttpClientConfiguration(flags, overrideFlags) {
        this.flags = {};
        this.initializeFlags();
        this._mergeFlags(flags);
        if (overrideFlags) {
            this._mergeFlags(overrideFlags);
        }
    }
    HttpClientConfiguration.prototype.overrideWith = function (sourceFlags) {
        return new HttpClientConfiguration(this.flags, sourceFlags);
    };
    HttpClientConfiguration.prototype.initializeFlags = function () {
    };
    HttpClientConfiguration.prototype._mergeFlags = function (source) {
        for (var _i = 0, _a = Object.keys(this.flags); _i < _a.length; _i++) {
            var key = _a[_i];
            if (source.hasOwnProperty(key)) {
                if (source[key] !== undefined) {
                    this.flags[key] = source[key];
                }
            }
        }
    };
    return HttpClientConfiguration;
}());
/* harmony default export */ var httpClient_HttpClientConfiguration = (HttpClientConfiguration);
var predefinedConfigurations = {
    v1: new HttpClientConfiguration({})
};

// CONCATENATED MODULE: ./lib/httpClient/HttpClientResponse.js
var HttpClientResponse = (function () {
    function HttpClientResponse(response) {
        this.nativeResponse = response;
    }
    Object.defineProperty(HttpClientResponse.prototype, "body", {
        get: function () { return this.nativeResponse.body; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpClientResponse.prototype, "bodyUsed", {
        get: function () { return this.nativeResponse.bodyUsed; },
        enumerable: true,
        configurable: true
    });
    HttpClientResponse.prototype.arrayBuffer = function () { return this.nativeResponse.arrayBuffer(); };
    HttpClientResponse.prototype.blob = function () { return this.nativeResponse.blob(); };
    HttpClientResponse.prototype.formData = function () { return this.nativeResponse.formData; }; 
    HttpClientResponse.prototype.json = function () { return this.nativeResponse.json(); };
    HttpClientResponse.prototype.text = function () { return this.nativeResponse.text(); };
    Object.defineProperty(HttpClientResponse.prototype, "type", {
        get: function () { return this.nativeResponse.type; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpClientResponse.prototype, "url", {
        get: function () { return this.nativeResponse.url; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpClientResponse.prototype, "status", {
        get: function () { return this.nativeResponse.status; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpClientResponse.prototype, "ok", {
        get: function () { return this.nativeResponse.ok; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpClientResponse.prototype, "statusText", {
        get: function () { return this.nativeResponse.statusText; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpClientResponse.prototype, "headers", {
        get: function () { return this.nativeResponse.headers; },
        enumerable: true,
        configurable: true
    });
    HttpClientResponse.prototype.clone = function () {
        return new HttpClientResponse(this.nativeResponse.clone());
    };
    return HttpClientResponse;
}());
/* harmony default export */ var httpClient_HttpClientResponse = (HttpClientResponse);

// EXTERNAL MODULE: external "@microsoft/sp-diagnostics"
var sp_diagnostics_ = __webpack_require__(1);
var sp_diagnostics__default = /*#__PURE__*/__webpack_require__.n(sp_diagnostics_);

// CONCATENATED MODULE: ./lib/httpClient/HttpClientHelper.js

var HttpClientHelper_HttpClientHelper = (function () {
    function HttpClientHelper() {
    }
    HttpClientHelper.overrideHttpMethod = function (options, httpRequestMethod) {
        var modifiedOptions = Object.assign({}, options);
        modifiedOptions.method = httpRequestMethod;
        return modifiedOptions;
    };
    HttpClientHelper.fetchCore = function (configuration, request, serviceScope, fetchProvider, logSource) {
        return new Promise(function (resolve, reject) {
            sp_diagnostics_["_TraceLogger"].logVerbose(sp_diagnostics_["_LogSource"].create(logSource), request.method + " " + request.url);
            return fetchProvider.fetch(request).then(resolve, reject);
        });
    };
    return HttpClientHelper;
}());
/* harmony default export */ var httpClient_HttpClientHelper = (HttpClientHelper_HttpClientHelper);

// CONCATENATED MODULE: ./lib/httpClient/HttpClient.js





var HttpClient_HttpClient = (function () {
    function HttpClient(serviceScope) {
        var _this = this;
        this._serviceScope = serviceScope;
        serviceScope.whenFinished(function () {
            _this._fetchProvider = serviceScope.consume(fetchProviderServiceKey);
        });
    }
    HttpClient.prototype.fetch = function (url, configuration, options) {
        return httpClient_HttpClientHelper.fetchCore(configuration, new Request(url, options), this._serviceScope, this._fetchProvider, HttpClient._className).then(function (response) {
            return new httpClient_HttpClientResponse(response);
        });
    };
    HttpClient.prototype.get = function (url, configuration, options) {
        return this.fetch(url, configuration, httpClient_HttpClientHelper.overrideHttpMethod(options, 'GET'));
    };
    HttpClient.prototype.post = function (url, configuration, options) {
        return this.fetch(url, configuration, httpClient_HttpClientHelper.overrideHttpMethod(options, 'POST'));
    };
    HttpClient.configurations = predefinedConfigurations;
    HttpClient.serviceKey = sp_core_library_["ServiceKey"].create('sp-http:HttpClient', HttpClient);
    HttpClient._className = 'HttpClient';
    return HttpClient;
}());
/* harmony default export */ var httpClient_HttpClient = (HttpClient_HttpClient);

// CONCATENATED MODULE: ./lib/spHttpClient/DigestCache.js



var DigestCache_DigestCache = (function () {
    function DigestCache(serviceScope) {
        var _this = this;
        this._digestsByUrl = new Map();
        serviceScope.whenFinished(function () {
            _this._fetchProvider = serviceScope.consume(fetchProviderServiceKey);
            _this._timeProvider = serviceScope.consume(sp_core_library_["TimeProvider"].serviceKey);
        });
    }
    DigestCache.prototype.fetchDigest = function (webUrl) {
        var _this = this;
        var normalizedWebUrl = sp_core_library_["UrlUtilities"].removeEndSlash(webUrl);
        var cachedDigest = this._digestsByUrl.get(normalizedWebUrl);
        if (cachedDigest) {
            var timestamp = this._timeProvider.getTimestamp();
            if (timestamp < cachedDigest.expirationTimestamp) {
                sp_diagnostics_["_TraceLogger"].logVerbose(DigestCache._logSource, 'DigestCache: Reusing cached digest.  Expiration: ' + cachedDigest.expirationTimestamp);
                return Promise.resolve(cachedDigest.value);
            }
        }
        var digestUrl = normalizedWebUrl + '/_api/contextinfo';
        var rawRequest = new Request(digestUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json;odata=verbose;charset=utf-8'
            },
            credentials: 'same-origin',
            cache: 'no-cache'
        });
        var preFetchDigestTime = this._timeProvider.getTimestamp();
        return this._fetchProvider.fetch(rawRequest).then(function (response) {
            return response.json();
        }).then(function (responseObject) {
            var digestValue = responseObject.FormDigestValue;
            var seconds = responseObject.FormDigestTimeoutSeconds;
            var expirationTimeMs = preFetchDigestTime +
                (1000 * seconds) -
                DigestCache.REST_EXPIRATION_SLOP_MS;
            _this.addDigestToCache(normalizedWebUrl, digestValue, expirationTimeMs);
            sp_diagnostics_["_TraceLogger"].logVerbose(DigestCache._logSource, 'DigestCache: Fetched new digest');
            return digestValue;
        });
    };
    DigestCache.prototype.addDigestToCache = function (webUrl, digestValue, expirationTimestamp) {
        var normalizedWebUrl = sp_core_library_["UrlUtilities"].removeEndSlash(webUrl);
        var newCachedDigest = {
            value: digestValue,
            expirationTimestamp: expirationTimestamp
        };
        this._digestsByUrl.set(normalizedWebUrl, newCachedDigest);
    };
    DigestCache.prototype.clearDigest = function (webUrl) {
        var normalizedWebUrl = sp_core_library_["UrlUtilities"].removeEndSlash(webUrl);
        var found = this._digestsByUrl.delete(normalizedWebUrl);
        sp_diagnostics_["_TraceLogger"].logVerbose(DigestCache._logSource, "DigestCache: Requested to clear cache entry: " + (found ? 'found' : 'not found'));
        return found;
    };
    DigestCache.prototype.clearAllDigests = function () {
        this._digestsByUrl.clear();
    };
    DigestCache.serviceKey = sp_core_library_["ServiceKey"].create('sp-client-base:DigestCache', DigestCache);
    DigestCache.REST_EXPIRATION_SLOP_MS = 15000; 
    DigestCache._logSource = sp_diagnostics_["_LogSource"].create('DigestCache');
    return DigestCache;
}());
/* harmony default export */ var spHttpClient_DigestCache = (DigestCache_DigestCache);

// CONCATENATED MODULE: C:/agent/1/_work/108/s/common/temp/node_modules/.onedrive.pkgs.visualstudio.com/tslib/1.8.1/node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

// CONCATENATED MODULE: ./lib/spHttpClient/SPHttpClientCommonConfiguration.js


var SPHttpClientCommonConfiguration_SPHttpClientCommonConfiguration = (function (_super) {
    __extends(SPHttpClientCommonConfiguration, _super);
    function SPHttpClientCommonConfiguration(flags, overrideFlags) {
        return _super.call(this, flags, overrideFlags) || this;
    }
    SPHttpClientCommonConfiguration.prototype.overrideWith = function (sourceFlags) {
        return new SPHttpClientCommonConfiguration(this.flags, sourceFlags);
    };
    Object.defineProperty(SPHttpClientCommonConfiguration.prototype, "jsonRequest", {
        get: function () {
            return this.flags.jsonRequest;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPHttpClientCommonConfiguration.prototype, "jsonResponse", {
        get: function () {
            return this.flags.jsonResponse;
        },
        enumerable: true,
        configurable: true
    });
    SPHttpClientCommonConfiguration.prototype.initializeFlags = function () {
        _super.prototype.initializeFlags.call(this);
        this.flags.jsonRequest = false;
        this.flags.jsonResponse = false;
    };
    return SPHttpClientCommonConfiguration;
}(httpClient_HttpClientConfiguration));
/* harmony default export */ var spHttpClient_SPHttpClientCommonConfiguration = (SPHttpClientCommonConfiguration_SPHttpClientCommonConfiguration);

// CONCATENATED MODULE: ./lib/spHttpClient/ODataVersion.js
var ODataVersion = (function () {
    function ODataVersion(versionString) {
        this._versionString = versionString;
    }
    ODataVersion.tryParseFromHeaders = function (headers) {
        var oDataVersion;
        headers.forEach(function (value, name) {
            if (name.toUpperCase() === 'ODATA-VERSION') {
                oDataVersion = value.trim();
            }
        });
        if (oDataVersion === '3.0') {
            return ODataVersion.v3;
        }
        else if (oDataVersion === '4.0') {
            return ODataVersion.v4;
        }
        else if (oDataVersion) {
            throw new Error('Unsupported OData-Version header: ' + oDataVersion);
        }
        return undefined;
    };
    ODataVersion.prototype.toString = function () {
        return this._versionString;
    };
    ODataVersion.v3 = new ODataVersion('3.0');
    ODataVersion.v4 = new ODataVersion('4.0');
    return ODataVersion;
}());
/* harmony default export */ var spHttpClient_ODataVersion = (ODataVersion);

// CONCATENATED MODULE: ./lib/spHttpClient/SPHttpClientConfiguration.js




var SPHttpClientConfiguration_SPHttpClientConfiguration = (function (_super) {
    __extends(SPHttpClientConfiguration, _super);
    function SPHttpClientConfiguration(flags, overrideFlags) {
        return _super.call(this, flags, overrideFlags) || this;
    }
    SPHttpClientConfiguration.prototype.overrideWith = function (sourceFlags) {
        return new SPHttpClientConfiguration(this.flags, sourceFlags);
    };
    Object.defineProperty(SPHttpClientConfiguration.prototype, "defaultSameOriginCredentials", {
        get: function () {
            return this.flags.defaultSameOriginCredentials;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPHttpClientConfiguration.prototype, "defaultODataVersion", {
        get: function () {
            return this.flags.defaultODataVersion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPHttpClientConfiguration.prototype, "requestDigest", {
        get: function () {
            return this.flags.requestDigest;
        },
        enumerable: true,
        configurable: true
    });
    SPHttpClientConfiguration.prototype.initializeFlags = function () {
        _super.prototype.initializeFlags.call(this);
        this.flags.defaultSameOriginCredentials = false;
        this.flags.defaultODataVersion = spHttpClient_ODataVersion.v3;
        this.flags.requestDigest = false;
    };
    return SPHttpClientConfiguration;
}(spHttpClient_SPHttpClientCommonConfiguration));
/* harmony default export */ var spHttpClient_SPHttpClientConfiguration = (SPHttpClientConfiguration_SPHttpClientConfiguration);
var SPHttpClientConfiguration_predefinedConfigurations = {
    v1: new SPHttpClientConfiguration_SPHttpClientConfiguration(httpClient_HttpClient.configurations.v1, {
        jsonRequest: true,
        jsonResponse: true,
        defaultSameOriginCredentials: true,
        defaultODataVersion: spHttpClient_ODataVersion.v4,
        requestDigest: true
    })
};

// CONCATENATED MODULE: ./lib/spHttpClient/SPHttpClientResponse.js



var SPHttpClientResponse_SPHttpClientResponse = (function (_super) {
    __extends(SPHttpClientResponse, _super);
    function SPHttpClientResponse(response) {
        return _super.call(this, response) || this;
    }
    SPHttpClientResponse.prototype.clone = function () {
        return new SPHttpClientResponse(this.nativeResponse.clone());
    };
    Object.defineProperty(SPHttpClientResponse.prototype, "correlationId", {
        get: function () {
            if (!this._correlationId) {
                this._correlationId = sp_core_library_["Guid"].tryParse(this.headers.get("SPRequestGuid" ));
            }
            return this._correlationId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPHttpClientResponse.prototype, "statusMessage", {
        get: function () {
            var correlationId = this.headers.get('sprequestguid') || '';
            var spVersion = this.headers.get('microsoftsharepointteamservices') || '';
            return "[HTTP]:" + this.status + " - " + this.statusText + " [CorrelationId]:" + correlationId + " [Version]:" + spVersion;
        },
        enumerable: true,
        configurable: true
    });
    return SPHttpClientResponse;
}(httpClient_HttpClientResponse));
/* harmony default export */ var spHttpClient_SPHttpClientResponse = (SPHttpClientResponse_SPHttpClientResponse);

// CONCATENATED MODULE: ./lib/spHttpClient/BatchedRequest.js
var BatchedRequest = (function () {
    function BatchedRequest(request) {
        var _this = this;
        this.response = undefined;
        this.request = request;
        this.promise = new Promise(
        function (resolve, reject) {
            _this._resolveCallback = resolve;
            _this._rejectCallback = reject;
        });
    }
    BatchedRequest.prototype.resolvePromise = function (response) {
        if (!this._resolveCallback) {
            throw new Error('The promise was already settled');
        }
        this.response = response;
        this._resolveCallback(response);
        this._resolveCallback = undefined;
        this._rejectCallback = undefined;
    };
    BatchedRequest.prototype.rejectPromiseIfNotResolved = function (error) {
        if (this.response) {
            return;
        }
        if (!this._rejectCallback) {
            throw new Error('The promise was already settled');
        }
        this._rejectCallback(error);
        this._resolveCallback = undefined;
        this._rejectCallback = undefined;
    };
    return BatchedRequest;
}());
/* harmony default export */ var spHttpClient_BatchedRequest = (BatchedRequest);

// CONCATENATED MODULE: ./lib/spHttpClient/SPHttpClientHelper.js



var SPHttpClientHelper_SPHttpClientHelper = (function (_super) {
    __extends(SPHttpClientHelper, _super);
    function SPHttpClientHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SPHttpClientHelper.cloneHeaders = function (options) {
        var clonedHeaders = new Headers();
        var temp = new Request('', { headers: options.headers || {} });
        temp.headers.forEach(function (value, name) {
            clonedHeaders.append(name, value); 
        });
        return clonedHeaders;
    };
    SPHttpClientHelper.applyDefaultHeaders = function (headers, configuration, options, oDataVersion) {
        if (configuration.jsonRequest) {
            if (options.method && options.method.toUpperCase() !== 'GET') {
                if (!headers.has('Content-Type')) {
                    if (oDataVersion === spHttpClient_ODataVersion.v3) {
                        headers.append('Content-Type', 'application/json;odata=verbose;charset=utf-8');
                    }
                    else if (oDataVersion === spHttpClient_ODataVersion.v4) {
                        headers.append('Content-Type', 'application/json;charset=utf-8');
                    }
                    else {
                        throw new Error('ISPHttpClientConfiguration.jsonRequest is enabled, which requires'
                            + ' the "OData-Version" header to be 3.0 or 4.0');
                    }
                }
            }
        }
        if (configuration.jsonResponse) {
            if (!headers.has('Accept')) {
                if (oDataVersion === spHttpClient_ODataVersion.v3) {
                    headers.append('Accept', 'application/json');
                }
                else if (oDataVersion === spHttpClient_ODataVersion.v4) {
                    headers.append('Accept', 'application/json;odata.metadata=minimal');
                }
                else {
                    throw new Error('ISPHttpClientConfiguration.jsonResponse is enabled, which requires'
                        + ' the "OData-Version" header to be 3.0 or 4.0');
                }
            }
        }
    };
    SPHttpClientHelper.handleAuthenticationErrors = function (promise, webUrl, digestCache) {
        return promise.then(function (response) {
            if (response.status === 403) {
                digestCache.clearDigest(webUrl);
            }
            return response;
        });
    };
    return SPHttpClientHelper;
}(httpClient_HttpClientHelper));
/* harmony default export */ var spHttpClient_SPHttpClientHelper = (SPHttpClientHelper_SPHttpClientHelper);

// CONCATENATED MODULE: ./lib/spHttpClient/SPHttpClientBatchConfiguration.js



var SPHttpClientBatchConfiguration_SPHttpClientBatchConfiguration = (function (_super) {
    __extends(SPHttpClientBatchConfiguration, _super);
    function SPHttpClientBatchConfiguration(flags, overrideFlags) {
        return _super.call(this, flags, overrideFlags) || this;
    }
    SPHttpClientBatchConfiguration.prototype.overrideWith = function (sourceFlags) {
        return new SPHttpClientBatchConfiguration(this.flags, sourceFlags);
    };
    SPHttpClientBatchConfiguration.prototype.initializeFlags = function () {
        _super.prototype.initializeFlags.call(this);
    };
    return SPHttpClientBatchConfiguration;
}(spHttpClient_SPHttpClientCommonConfiguration));
/* harmony default export */ var spHttpClient_SPHttpClientBatchConfiguration = (SPHttpClientBatchConfiguration_SPHttpClientBatchConfiguration);
var SPHttpClientBatchConfiguration_predefinedConfigurations = {
    v1: new SPHttpClientBatchConfiguration_SPHttpClientBatchConfiguration(httpClient_HttpClient.configurations.v1, {
        jsonRequest: true,
        jsonResponse: true
    })
};

// CONCATENATED MODULE: ./lib/spHttpClient/SPHttpClientBatch.js









var SPHttpClientBatch_SPHttpClientBatch = (function () {
    function SPHttpClientBatch(serviceScope, batchCreationOptions) {
        var _this = this;
        this._batchCreationOptions = batchCreationOptions || {};
        this._batchedRequests = [];
        serviceScope.whenFinished(function () {
            _this._fetchProvider = serviceScope.consume(fetchProviderServiceKey);
            _this._randomNumberGenerator = serviceScope.consume(sp_core_library_["RandomNumberGenerator"].serviceKey);
            _this._digestCache = serviceScope.consume(spHttpClient_DigestCache.serviceKey);
        });
    }
    SPHttpClientBatch.prototype.fetch = function (url, configuration, options) {
        if (!options) {
            options = {};
        }
        var modifiedOptions = Object.assign({}, options);
        modifiedOptions.headers = spHttpClient_SPHttpClientHelper.cloneHeaders(options);
        spHttpClient_SPHttpClientHelper.applyDefaultHeaders(modifiedOptions.headers, configuration, options, spHttpClient_ODataVersion.v4);
        var request = new Request(url, modifiedOptions);
        var requestUrl = request.url;
        if (!this._webUrl) {
            this._webUrl = spHttpClient_SPHttpClient.getWebUrlFromRequestUrl(requestUrl);
        }
        var batchedRequest = new spHttpClient_BatchedRequest(request);
        this._batchedRequests.push(batchedRequest);
        return batchedRequest.promise;
    };
    SPHttpClientBatch.prototype.get = function (url, configuration, options) {
        var modifiedOptions = Object.assign({}, options);
        modifiedOptions.method = 'GET';
        return this.fetch(url, configuration, modifiedOptions);
    };
    SPHttpClientBatch.prototype.post = function (url, configuration, options) {
        var modifiedOptions = Object.assign({}, options);
        modifiedOptions.method = 'POST';
        return this.fetch(url, configuration, modifiedOptions);
    };
    SPHttpClientBatch.prototype.execute = function () {
        var _this = this;
        var batchBody = '\n';
        var batchGuid = sp_core_library_["Guid"].newGuid(this._randomNumberGenerator);
        var chain = Promise.resolve();
        this._batchedRequests.forEach(function (batchedRequest) {
            chain = chain.then(function () {
                return batchedRequest.request.text();
            }).then(function (requestText) {
                var request = batchedRequest.request;
                batchBody += "--batch_" + batchGuid.toString() + "\n";
                batchBody += "Content-type: application/http\n"
                    + "Content-Transfer-Encoding: binary\n\n";
                batchBody += request.method + " " + request.url + " HTTP/1.1\n";
                request.headers.forEach(function (value, name) {
                    batchBody += name + ": " + value + "\n";
                });
                batchBody += '\n';
                batchBody += requestText;
                batchBody += '\n\n';
            });
        });
        return chain.then(function () {
            batchBody += "--batch_" + batchGuid + "--\n\n";
            return _this._digestCache.fetchDigest(_this._webUrl);
        }).then(function (digest) {
            var headers = new Headers();
            headers.append('Accept', 'application/json');
            headers.append('OData-Version', '4.0');
            headers.append('Content-Type', "multipart/mixed; boundary=batch_" + batchGuid);
            headers.append('Content-Length', batchBody.length.toString());
            headers.append('X-RequestDigest', digest);
            var request = new Request(_this._webUrl + '/_api/$batch', {
                method: 'POST',
                headers: headers,
                body: batchBody,
                credentials: 'same-origin',
                cache: 'no-cache'
            });
            var promise = _this._fetchProvider.fetch(request);
            return spHttpClient_SPHttpClientHelper.handleAuthenticationErrors(promise, _this._webUrl, _this._digestCache);
        }).then(function (response) {
            if (!response.ok) {
                throw new Error('SPHttpClientBatch: The batch request failed: ' + response.statusText);
            }
            return response.text();
        }).then(function (text) {
            var responses = _this._parseResponsesFromBody(text);
            if (responses.length !== _this._batchedRequests.length) {
                throw new Error("SPHttpClientBatch: Expecting " + _this._batchedRequests.length + " responses");
            }
            for (var i = 0; i < _this._batchedRequests.length; ++i) {
                var request = _this._batchedRequests[i];
                request.resolvePromise(new spHttpClient_SPHttpClientResponse(responses[i]));
            }
            return _this;
        }).catch(function (executeError) {
            var fetchError = new TypeError('This request was part of an SPHttpClientBatch that failed');
            for (var _i = 0, _a = _this._batchedRequests; _i < _a.length; _i++) {
                var request = _a[_i];
                request.rejectPromiseIfNotResolved(fetchError);
            }
            return Promise.reject(executeError);
        });
    };
    SPHttpClientBatch.prototype._parseResponsesFromBody = function (text) {
        var responses = [];
        var header = '--batchresponse_';
        var statusRegExp = new RegExp('^HTTP/[0-9.]+ +([0-9]+) +(.*)', 'i');
        var lines = text.split('\n');
        var parserState = 'batch';
        var batchStatus;
        var batchStatusText;
        for (var i = 0; i < lines.length; ++i) {
            var line = lines[i];
            switch (parserState) {
                case 'batch':
                    if (line.substr(0, header.length) === header) {
                        parserState = 'batchHeaders';
                    }
                    else {
                        if (line.trim() !== '') {
                            throw new Error('SPHttpClientBatch: Invalid response, line ' + i);
                        }
                    }
                    break;
                case 'batchHeaders':
                    if (line.trim() === '') {
                        parserState = 'status';
                    }
                    break;
                case 'status':
                    var parts = statusRegExp.exec(line);
                    if (!parts || parts && parts.length !== 3) {
                        throw new Error('SPHttpClientBatch: Invalid status, line ' + i);
                    }
                    batchStatus = parseInt(parts[1], 10);
                    batchStatusText = parts[2];
                    parserState = 'statusHeaders';
                    break;
                case 'statusHeaders':
                    if (line.trim() === '') {
                        parserState = 'body';
                    }
                    break;
                case 'body':
                    var response = new Response(line, { status: batchStatus, statusText: batchStatusText });
                    responses.push(response);
                    parserState = 'batch';
                    break;
            }
        }
        if (parserState !== 'status') {
            throw new Error('SPHttpClientBatch: Unexpected end of input');
        }
        return responses;
    };
    SPHttpClientBatch.configurations = SPHttpClientBatchConfiguration_predefinedConfigurations;
    return SPHttpClientBatch;
}());
/* harmony default export */ var spHttpClient_SPHttpClientBatch = (SPHttpClientBatch_SPHttpClientBatch);

// CONCATENATED MODULE: ./lib/spHttpClient/SPHttpClient.js









var SPHttpClient_SPHttpClient = (function () {
    function SPHttpClient(serviceScope) {
        var _this = this;
        this._serviceScope = serviceScope;
        this._serviceScope.whenFinished(function () {
            _this._digestCache = serviceScope.consume(spHttpClient_DigestCache.serviceKey);
            _this._parentSource = serviceScope.consume(sp_diagnostics_["_logSourceServiceKey"]);
            _this._fetchProvider = serviceScope.consume(fetchProviderServiceKey);
        });
    }
    SPHttpClient.getWebUrlFromRequestUrl = function (requestUrl) {
        var segmentIndex = -1;
        var upperCaseUrl = requestUrl.toUpperCase();
        for (var _i = 0, _a = SPHttpClient._reservedUrlSegments; _i < _a.length; _i++) {
            var reservedUrlSegment = _a[_i];
            segmentIndex = upperCaseUrl.indexOf(reservedUrlSegment);
            if (segmentIndex >= 0) {
                return requestUrl.substr(0, segmentIndex);
            }
        }
        throw new Error('Unable to determine web URL');
    };
    SPHttpClient.prototype.fetch = function (url, configuration, options) {
        var _this = this;
        if (!options) {
            options = {};
        }
        var modifiedOptions = Object.assign({}, options);
        if (configuration.defaultSameOriginCredentials) {
            if (!options.credentials) {
                modifiedOptions.credentials = 'same-origin';
            }
        }
        var headers = spHttpClient_SPHttpClientHelper.cloneHeaders(options);
        modifiedOptions.headers = headers;
        if (configuration.defaultODataVersion) {
            if (!headers.has('OData-Version')) {
                headers.append('OData-Version', configuration.defaultODataVersion.toString());
            }
        }
        var oDataVersion = spHttpClient_ODataVersion.tryParseFromHeaders(headers);
        spHttpClient_SPHttpClientHelper.applyDefaultHeaders(headers, configuration, options, oDataVersion);
        if (configuration.requestDigest) {
            if (options.method) {
                var method = options.method.toUpperCase();
                if (method !== 'GET' && method !== 'HEAD' && method !== 'OPTIONS') {
                    if (!headers.has('X-RequestDigest')) {
                        var webUrl = options.webUrl || SPHttpClient.getWebUrlFromRequestUrl(url);
                        var promise = this._digestCache.fetchDigest(webUrl)
                            .then(function (digest) {
                            headers.append('X-RequestDigest', digest);
                            return _this._fetchWithInstrumentation(configuration, new Request(url, modifiedOptions));
                        });
                        return spHttpClient_SPHttpClientHelper.handleAuthenticationErrors(promise, webUrl, this._digestCache)
                            .then(function (response) {
                            return new spHttpClient_SPHttpClientResponse(response);
                        });
                    }
                }
            }
        }
        return this._fetchWithInstrumentation(configuration, new Request(url, modifiedOptions))
            .then(function (response) {
            return new spHttpClient_SPHttpClientResponse(response);
        });
    };
    SPHttpClient.prototype.get = function (url, configuration, options) {
        return this.fetch(url, configuration, spHttpClient_SPHttpClientHelper.overrideHttpMethod(options, 'GET'));
    };
    SPHttpClient.prototype.post = function (url, configuration, options) {
        return this.fetch(url, configuration, spHttpClient_SPHttpClientHelper.overrideHttpMethod(options, 'POST'));
    };
    SPHttpClient.prototype.beginBatch = function (batchCreationOptions) {
        return new spHttpClient_SPHttpClientBatch(this._serviceScope, batchCreationOptions);
    };
    SPHttpClient.prototype._fetchWithInstrumentation = function (configuration, request) {
        var _this = this;
        var qosMonitor = new sp_diagnostics_["_QosMonitor"](SPHttpClient._className);
        return spHttpClient_SPHttpClientHelper.fetchCore(configuration, request, this._serviceScope, this._fetchProvider, SPHttpClient._className).then(function (response) {
            if (response.status >= 200 && response.status <= 299) {
                qosMonitor.writeSuccess({ source: _this._logSourceId });
            }
            else if (response.status >= 300 && response.status <= 499) {
                qosMonitor.writeExpectedFailure('Fetch', undefined, { source: _this._logSourceId, responseStatus: response.status });
            }
            else {
                qosMonitor.writeUnexpectedFailure('Fetch', undefined, { source: _this._logSourceId, responseStatus: response.status });
            }
            return response;
        }).catch(function (error) {
            qosMonitor.writeUnexpectedFailure('Fetch', error, { source: _this._logSourceId });
            throw error;
        });
    };
    Object.defineProperty(SPHttpClient.prototype, "_logSourceId", {
        get: function () {
            if (this._parentSource.isEmpty()) {
                return SPHttpClient._logSource.id;
            }
            return this._parentSource.id;
        },
        enumerable: true,
        configurable: true
    });
    SPHttpClient.configurations = SPHttpClientConfiguration_predefinedConfigurations;
    SPHttpClient.serviceKey = sp_core_library_["ServiceKey"].create('sp-http:SPHttpClient', SPHttpClient);
    SPHttpClient._className = 'SPHttpClient';
    SPHttpClient._logSource = sp_diagnostics_["_LogSource"].create('spHttpClient');
    SPHttpClient._reservedUrlSegments = [
        '/_API/',
        '/_LAYOUTS/',
        '/_VTI_BIN/'
    ];
    return SPHttpClient;
}());
/* harmony default export */ var spHttpClient_SPHttpClient = (SPHttpClient_SPHttpClient);

// CONCATENATED MODULE: C:/agent/1/_work/108/s/libraries/sp-client-shared/lib/tokenUtility/Constants.js
var Constants = (function () {
    function Constants() {
    }
    Constants.tokenCacheSessionStorageId = 'tokenCache';
    Constants.aboutToExpireIntervalSeconds = 600;
    Constants.apiUrl = '/_api/SP.OAuth.Token/Acquire';
    Constants.retries = 3;
    Constants.retriableErrorCodes = [
        10006,
        10008
    ];
    Constants.unexpectedErrorCodeFormat = 'Expected error code format is <numericCode>, <exception class name>';
    Constants.unexpectedTokenMessageFormat = 'Your token request succeedeed but the token could not be parsed from the response.' +
        'This is most probably caused by a change in the server response format';
    Constants.npmPackageVersion = '0.1.5';
    return Constants;
}());
/* harmony default export */ var tokenUtility_Constants = (Constants);

// CONCATENATED MODULE: C:/agent/1/_work/108/s/libraries/sp-client-shared/lib/tokenUtility/OAuthUtilityError.js
var OAuthUtilityError___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var OAuthUtilityErrorType;
(function (OAuthUtilityErrorType) {
    OAuthUtilityErrorType[OAuthUtilityErrorType["unknownError"] = 0] = "unknownError";
    OAuthUtilityErrorType[OAuthUtilityErrorType["malformedResponseBody"] = 1] = "malformedResponseBody";
    OAuthUtilityErrorType[OAuthUtilityErrorType["serverError"] = 2] = "serverError";
})(OAuthUtilityErrorType = OAuthUtilityErrorType || (OAuthUtilityErrorType = {}));
var OAuthUtilityError = (function (_super) {
    OAuthUtilityError___extends(OAuthUtilityError, _super);
    function OAuthUtilityError(type, context) {
        var _this = _super.call(this, context.message) || this;
        _this.__proto__ = OAuthUtilityError.prototype; 
        _this._type = type;
        _this._httpResponseStatus = context.httpResponseStatus;
        _this._cultureName = context.cultureName;
        _this._message = context.message;
        _this._serverErrorCode = context.serverErrorCode;
        _this._correlationId = context.correlationId;
        _this._redirectUrl = context.redirectUrl;
        return _this;
    }
    Object.defineProperty(OAuthUtilityError.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthUtilityError.prototype, "serverErrorCode", {
        get: function () {
            if (this.type !== OAuthUtilityErrorType.serverError) {
                throw new Error('ServerErrorCode can only be obtained for errors of type serverError');
            }
            return this._serverErrorCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthUtilityError.prototype, "httpResponseStatus", {
        get: function () {
            return this._httpResponseStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthUtilityError.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthUtilityError.prototype, "cultureName", {
        get: function () {
            return this._cultureName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthUtilityError.prototype, "correlationId", {
        get: function () {
            return this._correlationId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthUtilityError.prototype, "redirectUrl", {
        get: function () {
            return this._redirectUrl;
        },
        enumerable: true,
        configurable: true
    });
    return OAuthUtilityError;
}(Error));
/* harmony default export */ var tokenUtility_OAuthUtilityError = (OAuthUtilityError);

// CONCATENATED MODULE: C:/agent/1/_work/108/s/libraries/sp-client-shared/lib/tokenUtility/OAuthUtility.js


var OAuthUtility_OAuthUtility = (function () {
    function OAuthUtility(context) {
        var _this = this;
        this._context = context;
        this._dispose = this._dispose.bind(this);
        window.addEventListener('unload', this._dispose);
        var mediaTokenCallback = '_spPageOnMediaTokenReceived';
        window[mediaTokenCallback] = function () {
            _this._receiveMediaServiceFlushedToken();
        };
        var mediaTokenCallbackV2 = '_spMSBTLoaded';
        window[mediaTokenCallbackV2] = function () {
            _this._receiveMediaServiceFlushedToken();
        };
    }
    OAuthUtility._getCorrelationId = function (response) {
        return response.headers.get('sprequestguid');
    };
    OAuthUtility._extractRealError = function (errorResponse) {
        var isNested = errorResponse.hasOwnProperty('error');
        return isNested ? errorResponse.error : errorResponse;
    };
    OAuthUtility.prototype.getOAuthToken = function (resource, webUrl) {
        var _this = this;
        this._receiveMediaServiceFlushedToken();
        var cachedData = this._getCachedTokenData(resource);
        if (cachedData && !this._isExpiring(cachedData)) {
            return Promise.resolve({
                token: cachedData.accessToken,
                isGuest: false,
                expirationTimeMs: cachedData.expiresOn
            });
        }
        return this._retriableFetchWithDigest(resource, tokenUtility_Constants.retries, webUrl)
            .then(function (responseData) {
            _this._storeTokenData(resource, responseData);
            return {
                token: responseData.accessToken,
                isGuest: false,
                expirationTimeMs: responseData.expiresOn
            };
        });
    };
    OAuthUtility.prototype.clearCachedToken = function (resource) {
        var key = this._getCacheKey(resource);
        window.sessionStorage.removeItem(key);
        var index = this._resourceKeys.indexOf(key);
        if (!isNaN(index) && index > -1) {
            this._resourceKeys.splice(index);
        }
    };
    Object.defineProperty(OAuthUtility.prototype, "_resourceKeys", {
        get: function () {
            if (!this._keysToDispose) {
                this._keysToDispose = new Array();
            }
            return this._keysToDispose;
        },
        enumerable: true,
        configurable: true
    });
    OAuthUtility.prototype._retriableFetchWithDigest = function (resource, retriesLeft, webUrl) {
        var _this = this;
        var monitor = this._context.qosMonitor();
        return this._context.fetchWithDigest(this._buildTokenRequest(resource, webUrl))
            .then(function (response) {
            if (response.status !== 200) {
                _this._context.logger.logError('fetchWithDigest failed. Server responded with ' + response.statusText);
                var error = new tokenUtility_OAuthUtilityError(OAuthUtilityErrorType.unknownError, {
                    httpResponseStatus: response.status,
                    message: response.statusText,
                    correlationId: OAuthUtility._getCorrelationId(response)
                });
                if (response.status !== 400) {
                    monitor.writeUnexpectedFailure('UnknownError', error);
                    return Promise.reject(error);
                }
                return response.json().then(function (mixedErrorResponse) {
                    var errorResponse = OAuthUtility._extractRealError(mixedErrorResponse);
                    var errorCode = _this._getErrorCodeFromResponseCode(errorResponse);
                    if (!_this._isRetriableError(errorCode) || (retriesLeft === 0)) {
                        var oAuthError = _this._buildErrorFromResponse(errorResponse);
                        monitor.writeUnexpectedFailure('SharepointServerError', oAuthError);
                        return Promise.reject(oAuthError);
                    }
                    _this._context.logger.logError('fetchWithDigest failed. Retrying. Retries left: ' + retriesLeft);
                    return _this._retriableFetchWithDigest(resource, retriesLeft - 1, webUrl);
                });
            }
            return _this._instrumentedParseResponseData(response, monitor);
        });
    };
    OAuthUtility.prototype._getCachedTokenData = function (resource) {
        return JSON.parse(window.sessionStorage.getItem(this._getCacheKey(resource)));
    };
    OAuthUtility.prototype._storeTokenData = function (resource, data) {
        window.sessionStorage.setItem(this._getCacheKey(resource), JSON.stringify(data));
    };
    OAuthUtility.prototype._getCacheKey = function (resource) {
        var key = ['sp-client-shared', tokenUtility_Constants.npmPackageVersion, 'OAuthUtility', resource].join(';');
        var index = this._resourceKeys.indexOf(key);
        if (index === -1) {
            this._resourceKeys.push(key);
        }
        return key;
    };
    OAuthUtility.prototype._isExpiring = function (tokenRequestData) {
        return (tokenRequestData.expiresOn - Date.now() / 1000) < tokenUtility_Constants.aboutToExpireIntervalSeconds;
    };
    OAuthUtility.prototype._isRetriableError = function (errorCode) {
        return tokenUtility_Constants.retriableErrorCodes.indexOf(errorCode) !== -1;
    };
    OAuthUtility.prototype._buildTokenRequest = function (resource, webUrl) {
        var requestHeaders = new Headers();
        requestHeaders.append('Content-Type', 'application/json; charset=utf-8');
        requestHeaders.append('Odata-Version', '4.0');
        requestHeaders.append('Accept', 'application/json;odata.metadata=minimal');
        var request = {
            method: 'POST',
            headers: requestHeaders,
            body: JSON.stringify(this._buildRequestBody(resource))
        };
        var webUrlNoEndingSlash = webUrl;
        if (webUrlNoEndingSlash && webUrlNoEndingSlash.lastIndexOf('/') === webUrlNoEndingSlash.length - 1) {
            webUrlNoEndingSlash = webUrlNoEndingSlash.substr(0, webUrlNoEndingSlash.length - 1);
        }
        return new Request(webUrlNoEndingSlash + tokenUtility_Constants.apiUrl, request);
    };
    OAuthUtility.prototype._buildRequestBody = function (resource) {
        return {
            resource: resource
        };
    };
    OAuthUtility.prototype._buildErrorFromResponse = function (serverErrorResponse) {
        var errorCode = this._getErrorCodeFromResponseCode(serverErrorResponse);
        if (errorCode === undefined) {
            return new tokenUtility_OAuthUtilityError(OAuthUtilityErrorType.malformedResponseBody, {
                httpResponseStatus: 400,
                message: tokenUtility_Constants.unexpectedErrorCodeFormat,
                correlationId: serverErrorResponse.correlationId
            });
        }
        var message;
        var cultureName;
        if (serverErrorResponse.message) {
            if (typeof serverErrorResponse.message === 'string') {
                message = serverErrorResponse.message;
            }
            else {
                message = serverErrorResponse.message.value;
                cultureName = serverErrorResponse.message.lang;
            }
        }
        var redirectUrlKey = 'error.redirectUrl';
        return new tokenUtility_OAuthUtilityError(OAuthUtilityErrorType.serverError, {
            httpResponseStatus: 400,
            message: message,
            cultureName: cultureName,
            serverErrorCode: errorCode,
            correlationId: serverErrorResponse.correlationId,
            redirectUrl: serverErrorResponse[redirectUrlKey] || serverErrorResponse["@" + redirectUrlKey]
        });
    };
    OAuthUtility.prototype._getErrorCodeFromResponseCode = function (serverErrorResponse) {
        var responseErrorCode = serverErrorResponse.code;
        var errorCode = Number(responseErrorCode);
        if (isNaN(errorCode) && typeof serverErrorResponse.message === 'string') {
            var firstCommaIndex = responseErrorCode.indexOf(',');
            if (firstCommaIndex !== -1) {
                errorCode = Number(responseErrorCode.substr(0, firstCommaIndex));
            }
        }
        return errorCode;
    };
    OAuthUtility.prototype._instrumentedParseResponseData = function (response, monitor) {
        try {
            return response.json().then(function (responseBody) {
                monitor.writeSuccess();
                return {
                    accessToken: responseBody.access_token,
                    expiresOn: Number(responseBody.expires_on),
                    notBefore: Number(responseBody.not_before),
                    resource: responseBody.resource,
                    tokenType: responseBody.token_type
                };
            });
        }
        catch (error) {
            monitor.writeUnexpectedFailure('ResponseParseError', error);
            return Promise.reject(new tokenUtility_OAuthUtilityError(OAuthUtilityErrorType.malformedResponseBody, {
                httpResponseStatus: 200,
                message: tokenUtility_Constants.unexpectedTokenMessageFormat,
                correlationId: OAuthUtility._getCorrelationId(response)
            }));
        }
    };
    OAuthUtility.prototype._dispose = function (ev) {
        window.removeEventListener('unload', this._dispose);
        for (var _i = 0, _a = this._resourceKeys; _i < _a.length; _i++) {
            var key = _a[_i];
            window.sessionStorage.removeItem(key);
        }
    };
    OAuthUtility.prototype._receiveMediaServiceFlushedToken = function () {
        var tokenKey = '_spMSBT';
        if (window[tokenKey]) {
            var responseData = {
                tokenType: window[tokenKey].TokenType,
                expiresOn: window[tokenKey].ExpiresOn,
                notBefore: undefined,
                resource: window[tokenKey].Resource,
                accessToken: window[tokenKey].AccessToken
            };
            this._storeTokenData(responseData.resource, responseData);
            window[tokenKey] = undefined;
        }
    };
    return OAuthUtility;
}());
/* harmony default export */ var tokenUtility_OAuthUtility = (OAuthUtility_OAuthUtility);

// CONCATENATED MODULE: C:/agent/1/_work/108/s/libraries/sp-client-shared/lib/index.js



// CONCATENATED MODULE: ./lib/oauthTokenProvider/OAuthUtilityContext.js


var OAuthUtilityContext_TokenUtilityLogger = (function () {
    function TokenUtilityLogger() {
    }
    TokenUtilityLogger.prototype.logInfo = function (message) {
        sp_diagnostics_["_TraceLogger"].logVerbose(TokenUtilityLogger.logSource, message);
    };
    TokenUtilityLogger.prototype.logError = function (message) {
        sp_diagnostics_["_TraceLogger"].logError(TokenUtilityLogger.logSource, new Error(message));
    };
    TokenUtilityLogger.prototype.logWarning = function (message) {
        sp_diagnostics_["_TraceLogger"].logVerbose(TokenUtilityLogger.logSource, 'Warning: ' + message);
    };
    TokenUtilityLogger.logSource = sp_diagnostics_["_LogSource"].create('TokenUtility');
    return TokenUtilityLogger;
}());
var OAuthUtilityContext_OAuthUtilityContext = (function () {
    function OAuthUtilityContext(serviceScope) {
        var _this = this;
        serviceScope.whenFinished(function () {
            _this._spHttpClient = serviceScope.consume(spHttpClient_SPHttpClient.serviceKey);
            _this._logger = new OAuthUtilityContext_TokenUtilityLogger();
        });
    }
    Object.defineProperty(OAuthUtilityContext.prototype, "logger", {
        get: function () {
            return this._logger;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthUtilityContext.prototype, "webUrl", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    OAuthUtilityContext.prototype.fetchWithDigest = function (request) {
        var _this = this;
        return request.blob().then(function (requestBody) {
            return _this._spHttpClient.fetch(request.url, spHttpClient_SPHttpClient.configurations.v1, {
                method: request.method,
                headers: request.headers,
                body: requestBody
            });
        });
    };
    OAuthUtilityContext.prototype.qosMonitor = function () {
        return new sp_diagnostics_["_QosMonitor"](OAuthUtilityContext.qosName);
    };
    OAuthUtilityContext.qosName = 'OAuthTokenProvider';
    return OAuthUtilityContext;
}());
/* harmony default export */ var oauthTokenProvider_OAuthUtilityContext = (OAuthUtilityContext_OAuthUtilityContext);

// CONCATENATED MODULE: ./lib/oauthTokenProvider/OAuthTokenProvider.js



var OAuthTokenProvider_OAuthTokenProvider = (function () {
    function OAuthTokenProvider(serviceScope) {
        this._tokenUtility = new tokenUtility_OAuthUtility(new oauthTokenProvider_OAuthUtilityContext(serviceScope));
    }
    OAuthTokenProvider.prototype.getOAuthToken = function (resource, webUrl) {
        sp_core_library_["Validate"].isNotNullOrUndefined(resource, 'resource');
        sp_core_library_["Validate"].isNonemptyString(resource, 'resource');
        return this._tokenUtility.getOAuthToken(resource, webUrl);
    };
    OAuthTokenProvider.prototype.clearCachedToken = function (resource) {
        sp_core_library_["Validate"].isNotNullOrUndefined(resource, 'resource');
        sp_core_library_["Validate"].isNonemptyString(resource, 'resource');
        this._tokenUtility.clearCachedToken(resource);
    };
    OAuthTokenProvider.serviceKey = sp_core_library_["ServiceKey"].create('sp-client-shared:OAuthTokenProvider', OAuthTokenProvider);
    return OAuthTokenProvider;
}());
/* harmony default export */ var oauthTokenProvider_OAuthTokenProvider = (OAuthTokenProvider_OAuthTokenProvider);

// CONCATENATED MODULE: ./lib/SPHttpStrings.resx.js
var SPHttpStrings_resx_key = '_+tvmKa3YEOqWGKKXzwjtaw';
var allStrings = ( false) ?
    require("./resx-strings/en-us.json") :
    __webpack_require__(3);
var strings = allStrings[SPHttpStrings_resx_key];
/* harmony default export */ var SPHttpStrings_resx = (strings);

// CONCATENATED MODULE: ./lib/oauthTokenProvider/MockAadTokenProvider.js


var MockAadTokenProvider_MockAadTokenProvider = (function () {
    function MockAadTokenProvider() {
        this._tokenAcquisitionEvent = new sp_core_library_["SPEvent"](MockAadTokenProvider._tokenAcquisitionEventId);
    }
    MockAadTokenProvider.prototype.getToken = function (resourceEndpoint, configuration) {
        return Promise.reject(new Error(SPHttpStrings_resx.servicePrincipalNotAvaliableError));
    };
    Object.defineProperty(MockAadTokenProvider.prototype, "tokenAcquisitionEvent", {
        get: function () {
            return this._tokenAcquisitionEvent;
        },
        enumerable: true,
        configurable: true
    });
    MockAadTokenProvider._tokenAcquisitionEventId = 'tokenAcquisitionFailure';
    return MockAadTokenProvider;
}());
/* harmony default export */ var oauthTokenProvider_MockAadTokenProvider = (MockAadTokenProvider_MockAadTokenProvider);

// CONCATENATED MODULE: ./lib/oauthTokenProvider/AadTokenProviders.js

var AadTokenProviders_AadTokenProviders = (function () {
    function AadTokenProviders() {
    }
    AadTokenProviders._initialize = function (configurable, preAuthorizedConfig) {
        AadTokenProviders._configurableTokenProvider = configurable;
        AadTokenProviders._preAuthorizedConfiguration = preAuthorizedConfig;
    };
    Object.defineProperty(AadTokenProviders, "configurable", {
        get: function () {
            return AadTokenProviders._configurableTokenProvider;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AadTokenProviders, "preAuthorizedConfiguration", {
        get: function () {
            return this._preAuthorizedConfiguration;
        },
        enumerable: true,
        configurable: true
    });
    AadTokenProviders._configurableTokenProvider = new oauthTokenProvider_MockAadTokenProvider();
    return AadTokenProviders;
}());
/* harmony default export */ var oauthTokenProvider_AadTokenProviders = (AadTokenProviders_AadTokenProviders);

// CONCATENATED MODULE: ./lib/oauthTokenProvider/AadConstants.js
var AadConstants = (function () {
    function AadConstants() {
    }
    AadConstants.SINGLE_SIGN_ON_REPLY_URL = 'singlesignon.aspx';
    AadConstants.SPFX_SINGLE_SIGN_ON_REPLY_URL = 'spfxsinglesignon.aspx';
    AadConstants.REDIRECT_QUERY_PARAM = 'redirect';
    AadConstants.PRE_AUTHORIZED_APP_PRINCIPAL_ID = '08e18876-6177-487e-b8b5-cf950c1e598c';
    AadConstants.CONFIGURABLE_APP_PRINCIPAL_ID = 'c58637bb-e2e1-4312-8a00-04b5ffcd3403';
    AadConstants.APP_DID_NOT_CONSENT_ERROR_CODE = 'AADSTS65001';
    return AadConstants;
}());
/* harmony default export */ var oauthTokenProvider_AadConstants = (AadConstants);

// CONCATENATED MODULE: ./lib/graphHttpClient/GraphHttpClientResponse.js



var GraphHttpClientResponse_GraphHttpClientResponse = (function (_super) {
    __extends(GraphHttpClientResponse, _super);
    function GraphHttpClientResponse(response) {
        return _super.call(this, response) || this;
    }
    GraphHttpClientResponse.prototype.clone = function () {
        return new GraphHttpClientResponse(this.nativeResponse.clone());
    };
    Object.defineProperty(GraphHttpClientResponse.prototype, "correlationId", {
        get: function () {
            if (!this._correlationId) {
                this._correlationId = sp_core_library_["Guid"].tryParse(this.headers.get('request-id'));
            }
            return this._correlationId;
        },
        enumerable: true,
        configurable: true
    });
    return GraphHttpClientResponse;
}(httpClient_HttpClientResponse));
/* harmony default export */ var graphHttpClient_GraphHttpClientResponse = (GraphHttpClientResponse_GraphHttpClientResponse);

// CONCATENATED MODULE: ./lib/graphHttpClient/GraphHttpClientConfiguration.js



var GraphHttpClientConfiguration_GraphHttpClientConfiguration = (function (_super) {
    __extends(GraphHttpClientConfiguration, _super);
    function GraphHttpClientConfiguration(flags, overrideFlags) {
        return _super.call(this, flags, overrideFlags) || this;
    }
    return GraphHttpClientConfiguration;
}(httpClient_HttpClientConfiguration));
/* harmony default export */ var graphHttpClient_GraphHttpClientConfiguration = (GraphHttpClientConfiguration_GraphHttpClientConfiguration);
var GraphHttpClientConfiguration_predefinedConfigurations = {
    v1: new GraphHttpClientConfiguration_GraphHttpClientConfiguration(httpClient_HttpClient.configurations.v1)
};

// CONCATENATED MODULE: ./lib/graphHttpClient/GraphHttpClientContext.js

var GraphHttpClientContext_GraphHttpClientContext = (function () {
    function GraphHttpClientContext(serviceScope) {
    }
    GraphHttpClientContext.prototype.initialize = function (webServerRelativeUrl, graphEndpointUrl) {
        if (this._isInitialized) {
            throw new Error('GraphHttpClientContext has already been initialized.');
        }
        this._isInitialized = true;
        this._webServerRelativeUrl = webServerRelativeUrl;
        this._graphEndpointUrl = graphEndpointUrl;
    };
    GraphHttpClientContext.prototype.getGraphEndpointUrl = function () {
        if (!this._isInitialized) {
            throw new Error('This operation cannot be performed until the GraphHttpClientContext is initialized.');
        }
        return this._graphEndpointUrl;
    };
    GraphHttpClientContext.prototype.getWebServerRelativeUrl = function () {
        if (!this._isInitialized) {
            throw new Error('This operation cannot be performed until the GraphHttpClientContext is initialized.');
        }
        return this._webServerRelativeUrl;
    };
    GraphHttpClientContext.serviceKey = sp_core_library_["ServiceKey"].create('sp-http:GraphHttpClientContext', GraphHttpClientContext);
    return GraphHttpClientContext;
}());
/* harmony default export */ var graphHttpClient_GraphHttpClientContext = (GraphHttpClientContext_GraphHttpClientContext);

// CONCATENATED MODULE: ./lib/graphHttpClient/GraphHttpClient.js









var GraphHttpClient_GraphHttpClient = (function () {
    function GraphHttpClient(serviceScope) {
        var _this = this;
        this._serviceScope = serviceScope;
        this._serviceScope.whenFinished(function () {
            _this._tokenProvider = serviceScope.consume(oauthTokenProvider_OAuthTokenProvider.serviceKey);
            _this._parentSource = serviceScope.consume(sp_diagnostics_["_logSourceServiceKey"]);
            _this._graphContext = serviceScope.consume(graphHttpClient_GraphHttpClientContext.serviceKey);
            _this._fetchProvider = serviceScope.consume(fetchProviderServiceKey);
        });
    }
    GraphHttpClient.prototype.fetch = function (url, configuration, options) {
        var _this = this;
        this._validateGraphRelativeUrl(url);
        return this._getOAuthToken().then(function () {
            if (!options) {
                options = {};
            }
            var modifiedOptions = Object.assign({}, options);
            var defaultHeaders = new Headers();
            defaultHeaders.append('Accept', 'application/json');
            defaultHeaders.append('Authorization', 'Bearer ' + _this._token);
            defaultHeaders.append('Content-Type', 'application/json; charset=utf-8');
            var userHeaders = spHttpClient_SPHttpClientHelper.cloneHeaders(options);
            modifiedOptions.headers = _this._mergeUserHeaders(defaultHeaders, userHeaders);
            return _this._fetchWithInstrumentation(configuration, new Request(_this._graphContext.getGraphEndpointUrl() + '/' + url, modifiedOptions)).then(function (response) {
                return new graphHttpClient_GraphHttpClientResponse(response);
            });
        });
    };
    GraphHttpClient.prototype.get = function (url, configuration, options) {
        return this.fetch(url, configuration, httpClient_HttpClientHelper.overrideHttpMethod(options, 'GET'));
    };
    GraphHttpClient.prototype.post = function (url, configuration, options) {
        return this.fetch(url, configuration, httpClient_HttpClientHelper.overrideHttpMethod(options, 'POST'));
    };
    GraphHttpClient.prototype._fetchWithInstrumentation = function (configuration, request) {
        var _this = this;
        var qosMonitor = new sp_diagnostics_["_QosMonitor"]('GraphHttpClient.Fetch');
        return httpClient_HttpClientHelper.fetchCore(configuration, request, this._serviceScope, this._fetchProvider, GraphHttpClient._className).then(function (response) {
            _this._writeQosMonitorUpdate(response, qosMonitor, 'Fetch');
            return response;
        }).catch(function (error) {
            qosMonitor.writeUnexpectedFailure('Fetch', error, { source: _this._logSourceId });
            return Promise.reject(error);
        });
    };
    GraphHttpClient.prototype._getOAuthToken = function () {
        var _this = this;
        var qosMonitor = new sp_diagnostics_["_QosMonitor"]('GraphHttpClient.FetchGraphToken');
        return this._tokenProvider.getOAuthToken(this._graphContext.getGraphEndpointUrl(), this._graphContext.getWebServerRelativeUrl()).then(function (response) {
            _this._writeQosMonitorUpdate(response, qosMonitor, 'FetchGraphToken');
            _this._token = response.token;
        })
            .catch(function (error) {
            qosMonitor.writeUnexpectedFailure('FetchGraphToken', error, { source: _this._logSourceId });
            return Promise.reject(error);
        });
    };
    Object.defineProperty(GraphHttpClient.prototype, "_logSourceId", {
        get: function () {
            if (this._parentSource.isEmpty()) {
                return GraphHttpClient._logSource.id;
            }
            return this._parentSource.id;
        },
        enumerable: true,
        configurable: true
    });
    GraphHttpClient.prototype._mergeUserHeaders = function (defaultHeaders, userHeaders) {
        userHeaders.forEach(function (value, name) {
            defaultHeaders.set(name, value); 
        });
        return defaultHeaders;
    };
    GraphHttpClient.prototype._writeQosMonitorUpdate = function (response, qosMonitor, operation) {
        if (response.status >= 200 && response.status <= 299) {
            qosMonitor.writeSuccess({ source: this._logSourceId });
        }
        else if (response.status >= 300 && response.status <= 499) {
            qosMonitor.writeExpectedFailure(operation, undefined, { source: this._logSourceId, responseStatus: response.status });
        }
        else {
            qosMonitor.writeUnexpectedFailure(operation, undefined, { source: this._logSourceId, responseStatus: response.status });
        }
    };
    GraphHttpClient.prototype._validateGraphRelativeUrl = function (url) {
        sp_core_library_["Validate"].isNotNullOrUndefined(url, 'url');
        if (url.charAt(0) === '/') {
            throw new Error('GraphHttpClient requests cannot begin with a / character');
        }
        if (url.indexOf('http://', 0) === 0) {
            throw new Error('GraphHttpClient requests cannot specify a different graph server with the url.');
        }
        if (url.indexOf('https://', 0) === 0) {
            throw new Error('GraphHttpClient requests cannot specify a different graph server with the url.');
        }
    };
    GraphHttpClient.configurations = GraphHttpClientConfiguration_predefinedConfigurations;
    GraphHttpClient.serviceKey = sp_core_library_["ServiceKey"].create('sp-http:GraphHttpClient', GraphHttpClient);
    GraphHttpClient._className = 'GraphHttpClient';
    GraphHttpClient._logSource = sp_diagnostics_["_LogSource"].create('graphHttpClient');
    return GraphHttpClient;
}());
/* harmony default export */ var graphHttpClient_GraphHttpClient = (GraphHttpClient_GraphHttpClient);

// CONCATENATED MODULE: ./lib/oauthTokenProvider/AdalAuthContext.js





var AdalAuthContext_AdalAuthContext = (function () {
    function AdalAuthContext(authContext, aadUserId) {
        this.servicePrincipalId = authContext.config.clientId;
        this._aadUserId = aadUserId || '';
        this._patchAdalAuthContext(authContext);
        this._authContext = authContext;
    }
    AdalAuthContext.prototype.getToken = function (resourceEndpoint) {
        var _this = this;
        return this._getIdToken().then(function () { return _this._getAccessToken(resourceEndpoint); });
    };
    AdalAuthContext.prototype._patchAdalAuthContext = function (authContext) {
        var _this = this;
        Object.getPrototypeOf(authContext)._singletonInstance = undefined;
        authContext._addAdalFrame = function (iframeId) {
            return _this._addAdalFrame(authContext, iframeId);
        };
    };
    AdalAuthContext.prototype._getIdToken = function () {
        var _this = this;
        var cachedToken = this._authContext.getCachedToken(this.servicePrincipalId);
        if (cachedToken && this._aadUserId) {
            var user = this._authContext.getCachedUser();
            if (user &&
                user.profile &&
                user.profile.oid === this._aadUserId &&
                user.profile.aud === this._authContext.config.clientId) {
                this._authContext._user = user;
                return Promise.resolve(cachedToken); 
            }
        }
        return this._fetchIdTokenSilent(this.servicePrincipalId, this._authContext.config.redirectUri)
            .then(function (token) {
            _this._authContext._user = _this._authContext._createUser(token);
            return Promise.resolve(token);
        });
    };
    AdalAuthContext.prototype._getAccessToken = function (resourceEndpoint) {
        var cachedToken = this._authContext.getCachedToken(resourceEndpoint);
        if (cachedToken) {
            return Promise.resolve(cachedToken); 
        }
        return this._fetchAccessTokenSilent(resourceEndpoint);
    };
    AdalAuthContext.prototype._fetchIdTokenSilent = function (servicePrincipalId, redirectUri) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var acquireIdTokenMonitor = new sp_diagnostics_["_QosMonitor"]('AadTokenProvider.AcquireIdTokenSilent');
            var acquireIdTokenTagNameSuffix = 'AcquireIdTokenSilent';
            _this._authContext._renewIdToken(function (message, token) {
                if (!token) {
                    var err = new Error(message);
                    acquireIdTokenMonitor.writeUnexpectedFailure(acquireIdTokenTagNameSuffix, err);
                    reject(err);
                }
                else {
                    acquireIdTokenMonitor.writeSuccess();
                    resolve(token);
                }
            });
        });
    };
    AdalAuthContext.prototype._fetchAccessTokenSilent = function (resourceEndpoint) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var acquireAccessTokenQosMonitor = new sp_diagnostics_["_QosMonitor"]('AadTokenProvider.AcquireAccessToken');
            _this._authContext.acquireToken(resourceEndpoint, function (message, token) {
                if (!token) {
                    if (_this._authContext._getItem(_this._authContext.CONSTANTS.STORAGE.ERROR) === 'interaction_required' &&
                        message.indexOf(oauthTokenProvider_AadConstants.APP_DID_NOT_CONSENT_ERROR_CODE) < 0) {
                        var urlNavigate = _this._authContext._getNavigateUrl(_this._authContext.RESPONSE_TYPE.TOKEN, resourceEndpoint) +
                            '&prompt=select_account';
                        sp_core_library_["_SPEventManager"].instance.raiseEvent(oauthTokenProvider_AadTokenProvider._tokenAcquisitionEventId, new AadTokenProvider_TokenAcquisitionEventArgs(SPHttpStrings_resx.additionalCredentialsWarning, urlNavigate));
                    }
                    reject(new Error(message));
                }
                else {
                    acquireAccessTokenQosMonitor.writeSuccess();
                    resolve(token);
                }
            });
        });
    };
    AdalAuthContext.prototype._addAdalFrame = function (authContext, iframeId) {
        if (typeof iframeId === 'undefined') {
            return;
        }
        authContext.info('Add adal frame to document:' + iframeId);
        var adalFrame = document.getElementById(iframeId);
        var sandboxAttributes = 'allow-same-origin allow-scripts allow-forms allow-pointer-lock';
        if (!adalFrame) {
            if (document.createElement && document.documentElement &&
                (window.opera || window.navigator.userAgent.indexOf('MSIE 5.0') === -1)) {
                var ifr = document.createElement('iframe');
                ifr.setAttribute('id', iframeId);
                ifr.setAttribute('aria-hidden', 'true');
                ifr.setAttribute('sandbox', sandboxAttributes);
                ifr.style.visibility = 'hidden';
                ifr.style.position = 'absolute';
                ifr.style.width = ifr.style.height = ifr.borderWidth = '0px';
                adalFrame = document.getElementsByTagName('body')[0].appendChild(ifr);
            }
            else if (document.body && document.body.insertAdjacentHTML) {
                document.body.insertAdjacentHTML('beforeEnd', '<iframe sandbox="' + sandboxAttributes + '" name="' +
                    iframeId + '" id="' + iframeId + '" style="display:none"></iframe>');
            }
            if (window.frames && window.frames[iframeId]) {
                adalFrame = window.frames[iframeId];
            }
        }
        return adalFrame;
    };
    return AdalAuthContext;
}());
/* harmony default export */ var oauthTokenProvider_AdalAuthContext = (AdalAuthContext_AdalAuthContext);

// CONCATENATED MODULE: ./lib/oauthTokenProvider/AdalAuthContextManager.js


var AdalAuthContextManager_AdalAuthContextManager = (function () {
    function AdalAuthContextManager() {
        this._loadAdalJsModulePromise = undefined;
        this._authContextDictionary = new Map();
    }
    AdalAuthContextManager.convertTokenParametersToConfig = function (tokenProviderParameters) {
        return {
            clientId: tokenProviderParameters.servicePrincipalId,
            redirectUri: tokenProviderParameters.redirectUri,
            instance: sp_core_library_["UrlUtilities"].removeEndSlash(tokenProviderParameters.aadInstanceUrl) + '/',
            tenant: tokenProviderParameters.aadTenantId,
            navigateToLoginRequestUrl: false
        };
    };
    AdalAuthContextManager.prototype.getAuthContext = function (tokenProviderConfiguration) {
        var _this = this;
        if (!this._loadAdalJsModulePromise) {
            this._loadAdalJsModulePromise = this._loadAdalJs();
        }
        return this._loadAdalJsModulePromise.then(function (adalModule) {
            if (!_this._authContextDictionary.has(tokenProviderConfiguration.servicePrincipalId)) {
                var authContext = new oauthTokenProvider_AdalAuthContext(adalModule.inject(AdalAuthContextManager.convertTokenParametersToConfig(tokenProviderConfiguration)), tokenProviderConfiguration.aadUserId);
                _this._authContextDictionary.set(tokenProviderConfiguration.servicePrincipalId, authContext);
            }
            return Promise.resolve(_this._authContextDictionary.get(tokenProviderConfiguration.servicePrincipalId));
        });
    };
    AdalAuthContextManager.prototype._loadAdalJs = function () {
        return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 5));
    };
    return AdalAuthContextManager;
}());
/* harmony default export */ var oauthTokenProvider_AdalAuthContextManager = (AdalAuthContextManager_AdalAuthContextManager);

// CONCATENATED MODULE: ./lib/oauthTokenProvider/AadTokenProvider.js




var AadTokenProvider_TokenAcquisitionEventArgs = (function (_super) {
    __extends(TokenAcquisitionEventArgs, _super);
    function TokenAcquisitionEventArgs(message, redirectUrl) {
        var _this = _super.call(this) || this;
        _this.message = message;
        _this.redirectUrl = redirectUrl;
        return _this;
    }
    return TokenAcquisitionEventArgs;
}(sp_core_library_["SPEventArgs"]));

var AadTokenProvider_AadTokenProvider = (function () {
    function AadTokenProvider(configuration) {
        sp_core_library_["Validate"].isNonemptyString(configuration.aadInstanceUrl, 'aadInstanceUrl');
        sp_core_library_["Validate"].isNonemptyString(configuration.aadTenantId, 'aadTenantId');
        sp_core_library_["Validate"].isNonemptyString(configuration.redirectUri, 'redirectUri');
        sp_core_library_["Validate"].isNonemptyString(configuration.servicePrincipalId, 'servicePrincipalId');
        this._defaultConfiguration = configuration;
        this._fetchQueue = Promise.resolve();
        this._tokenAcquisitionEvent = new sp_core_library_["SPEvent"](AadTokenProvider._tokenAcquisitionEventId);
    }
    AadTokenProvider.prototype.getToken = function (resourceEndpoint) {
        if (this._defaultConfiguration.servicePrincipalId === sp_core_library_["Guid"].empty.toString()) {
            return Promise.reject(new Error(SPHttpStrings_resx.servicePrincipalNotAvaliableError));
        }
        return this._getTokenInternal(resourceEndpoint, this._defaultConfiguration);
    };
    AadTokenProvider.prototype._getTokenInternal = function (resourceEndpoint, configuration) {
        var _this = this;
        var tokenProviderConfig = configuration || this._defaultConfiguration;
        if (!this._authContextManager) {
            this._authContextManager = new oauthTokenProvider_AdalAuthContextManager();
        }
        var getAuthContextPromise = function () { return _this._authContextManager.getAuthContext(tokenProviderConfig); };
        this._fetchQueue =
            this._fetchQueue
                .then(getAuthContextPromise, getAuthContextPromise)
                .then(function (authContext) { return authContext.getToken(resourceEndpoint); });
        return this._fetchQueue;
    };
    Object.defineProperty(AadTokenProvider.prototype, "tokenAcquisitionEvent", {
        get: function () {
            return this._tokenAcquisitionEvent;
        },
        enumerable: true,
        configurable: true
    });
    AadTokenProvider._tokenAcquisitionEventId = 'tokenAcquisitionFailure';
    return AadTokenProvider;
}());
/* harmony default export */ var oauthTokenProvider_AadTokenProvider = (AadTokenProvider_AadTokenProvider);

// CONCATENATED MODULE: ./lib/aadHttpClient/AadHttpClientConfiguration.js



var AadHttpClientConfiguration_AadHttpClientConfiguration = (function (_super) {
    __extends(AadHttpClientConfiguration, _super);
    function AadHttpClientConfiguration(flags, overrideFlags) {
        return _super.call(this, flags, overrideFlags) || this;
    }
    AadHttpClientConfiguration.prototype.overrideWith = function (sourceFlags) {
        return new AadHttpClientConfiguration(this.flags, sourceFlags);
    };
    return AadHttpClientConfiguration;
}(httpClient_HttpClientConfiguration));
/* harmony default export */ var aadHttpClient_AadHttpClientConfiguration = (AadHttpClientConfiguration_AadHttpClientConfiguration);
var AadHttpClientConfiguration_predefinedConfigurations = {
    v1: new AadHttpClientConfiguration_AadHttpClientConfiguration(httpClient_HttpClient.configurations.v1)
};

// CONCATENATED MODULE: ./lib/aadHttpClient/AadHttpClient.js






var AadHttpClient_AadHttpClient = (function () {
    function AadHttpClient(serviceScope, resourceEndpoint, options) {
        var _this = this;
        sp_core_library_["Validate"].isNotNullOrUndefined(serviceScope, 'serviceScope');
        sp_core_library_["Validate"].isNotNullOrUndefined(resourceEndpoint, 'resourceUrl');
        this._resourceUrl = resourceEndpoint;
        this._serviceScope = serviceScope;
        this._aadTokenProvider = options && options.tokenProvider || oauthTokenProvider_AadTokenProviders.configurable;
        this._aadTokenConfiguration = options && options.configuration;
        serviceScope.whenFinished(function () {
            _this._fetchProvider = serviceScope.consume(fetchProviderServiceKey);
        });
    }
    AadHttpClient.prototype.fetch = function (url, configuration, options) {
        var _this = this;
        var tokenFetchPromise = this._aadTokenConfiguration ?
            this._aadTokenProvider._getTokenInternal(this._resourceUrl, this._aadTokenConfiguration) :
            this._aadTokenProvider.getToken(this._resourceUrl);
        return tokenFetchPromise.then(function (token) {
            if (!options.headers) {
                options.headers = new Headers();
            }
            options.headers.append('Authorization', 'Bearer ' + token);
            return httpClient_HttpClientHelper.fetchCore(configuration, new Request(url, options), _this._serviceScope, _this._fetchProvider, AadHttpClient._className);
        }).then(function (value) {
            return new httpClient_HttpClientResponse(value);
        });
    };
    AadHttpClient.prototype.get = function (url, configuration, options) {
        return this.fetch(url, configuration, httpClient_HttpClientHelper.overrideHttpMethod(options, 'GET'));
    };
    AadHttpClient.prototype.post = function (url, configuration, options) {
        return this.fetch(url, configuration, httpClient_HttpClientHelper.overrideHttpMethod(options, 'POST'));
    };
    AadHttpClient.configurations = AadHttpClientConfiguration_predefinedConfigurations;
    AadHttpClient._className = 'AadHttpClient';
    return AadHttpClient;
}());
/* harmony default export */ var aadHttpClient_AadHttpClient = (AadHttpClient_AadHttpClient);

// CONCATENATED MODULE: ./lib/aadHttpClient/AadHttpClientFactory.js



var AadHttpClientFactory_AadHttpClientFactory = (function () {
    function AadHttpClientFactory(serviceScope) {
        this._serviceScope = serviceScope;
    }
    AadHttpClientFactory.prototype.getClient = function (resourceEndpoint) {
        return Promise.resolve(new aadHttpClient_AadHttpClient(this._serviceScope, resourceEndpoint));
    };
    AadHttpClientFactory.prototype._getStandardClient = function (resourceEndpoint) {
        return Promise.resolve(new aadHttpClient_AadHttpClient(this._serviceScope, resourceEndpoint, { configuration: oauthTokenProvider_AadTokenProviders.preAuthorizedConfiguration }));
    };
    AadHttpClientFactory.serviceKey = sp_core_library_["ServiceKey"].create('sp-http:AadHttpClientFactory', AadHttpClientFactory);
    return AadHttpClientFactory;
}());
/* harmony default export */ var aadHttpClient_AadHttpClientFactory = (AadHttpClientFactory_AadHttpClientFactory);

// CONCATENATED MODULE: ./lib/oauthTokenProvider/AadTokenProviderFactory.js


var AadTokenProviderFactory_AadTokenProviderFactory = (function () {
    function AadTokenProviderFactory() {
    }
    AadTokenProviderFactory.prototype.getTokenProvider = function () {
        return Promise.resolve(oauthTokenProvider_AadTokenProviders.configurable);
    };
    AadTokenProviderFactory.serviceKey = sp_core_library_["ServiceKey"].create('sp-http:AadTokenProviderFactory', AadTokenProviderFactory);
    return AadTokenProviderFactory;
}());
/* harmony default export */ var oauthTokenProvider_AadTokenProviderFactory = (AadTokenProviderFactory_AadTokenProviderFactory);

// CONCATENATED MODULE: ./lib/msGraphClient/MSGraphClient.js





var MSGraphClient_MSGraphClient = (function () {
    function MSGraphClient(serviceScope) {
        var _this = this;
        serviceScope.whenFinished(function () {
            MSGraphClient._graphBaseUrl = serviceScope.consume(graphHttpClient_GraphHttpClientContext.serviceKey).getGraphEndpointUrl();
            if (!MSGraphClient._instance) {
                MSGraphClient._instance = _this._createGraphClientInstance(oauthTokenProvider_AadTokenProviders.configurable);
            }
        });
    }
    MSGraphClient.prototype.api = function (path, config) {
        sp_core_library_["Validate"].isNonemptyString(path, 'path');
        MSGraphClient._instance.config = Object.assign({}, MSGraphClient._originalConfig);
        if (config) {
            for (var key in config) {
                if (config[key]) {
                    MSGraphClient._instance.config[key] = config[key];
                }
            }
        }
        return MSGraphClient._instance.api(path);
    };
    MSGraphClient.prototype._createGraphClientInstance = function (tokenProvider) {
        var _this = this;
        var graphClientModule;
        if (!(MSGraphClient._window.MicrosoftGraph && MSGraphClient._window.MicrosoftGraph.Client)) {
            throw new Error(SPHttpStrings_resx.graphClientInitializationError);
        }
        else {
            graphClientModule = MSGraphClient._window.MicrosoftGraph.Client;
            MSGraphClient._window.MicrosoftGraph = undefined;
        }
        var graphClient = graphClientModule.init({
            authProvider: function (done) {
                _this._getOAuthToken(tokenProvider).then(function (token) {
                    done(undefined , token);
                }).catch(function (e) {
                    done(e, '');
                });
            },
            baseUrl: MSGraphClient._graphBaseUrl
        });
        MSGraphClient._originalConfig = graphClient.config;
        return graphClient;
    };
    MSGraphClient.prototype._getOAuthToken = function (tokenProvider) {
        var qosMonitor = new sp_diagnostics_["_QosMonitor"]('MSGraphClient.FetchGraphToken');
        return tokenProvider.getToken(MSGraphClient._graphBaseUrl).then(function (response) {
            qosMonitor.writeSuccess();
            return response;
        }).catch(function (error) {
            qosMonitor.writeUnexpectedFailure('FetchGraphToken', error);
            throw error;
        });
    };
    MSGraphClient._window = window;
    return MSGraphClient;
}());
/* harmony default export */ var msGraphClient_MSGraphClient = (MSGraphClient_MSGraphClient);

// CONCATENATED MODULE: ./lib/msGraphClient/MSGraphClientFactory.js


var MSGraphClientFactory_MSGraphClientFactory = (function () {
    function MSGraphClientFactory(serviceScope) {
        this._serviceScope = serviceScope;
    }
    MSGraphClientFactory.prototype.getClient = function () {
        var _this = this;
        if (!msGraphClient_MSGraphClient._instance) {
            return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 6))
                .then(function () {
                return new msGraphClient_MSGraphClient(_this._serviceScope);
            });
        }
        else {
            return Promise.resolve(new msGraphClient_MSGraphClient(this._serviceScope));
        }
    };
    MSGraphClientFactory.serviceKey = sp_core_library_["ServiceKey"].create('sp-http:MSGraphClientFactory', MSGraphClientFactory);
    return MSGraphClientFactory;
}());
/* harmony default export */ var msGraphClient_MSGraphClientFactory = (MSGraphClientFactory_MSGraphClientFactory);

// CONCATENATED MODULE: ./lib/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "HttpClient", function() { return httpClient_HttpClient; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "HttpClientConfiguration", function() { return httpClient_HttpClientConfiguration; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "HttpClientResponse", function() { return httpClient_HttpClientResponse; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DigestCache", function() { return spHttpClient_DigestCache; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SPHttpClient", function() { return spHttpClient_SPHttpClient; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SPHttpClientCommonConfiguration", function() { return spHttpClient_SPHttpClientCommonConfiguration; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SPHttpClientConfiguration", function() { return spHttpClient_SPHttpClientConfiguration; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SPHttpClientResponse", function() { return spHttpClient_SPHttpClientResponse; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SPHttpClientBatchConfiguration", function() { return spHttpClient_SPHttpClientBatchConfiguration; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SPHttpClientBatch", function() { return spHttpClient_SPHttpClientBatch; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ODataVersion", function() { return spHttpClient_ODataVersion; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "OAuthTokenProvider", function() { return oauthTokenProvider_OAuthTokenProvider; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_AadTokenProviders", function() { return oauthTokenProvider_AadTokenProviders; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_AadConstants", function() { return oauthTokenProvider_AadConstants; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "GraphHttpClient", function() { return graphHttpClient_GraphHttpClient; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "GraphHttpClientResponse", function() { return graphHttpClient_GraphHttpClientResponse; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "GraphHttpClientConfiguration", function() { return graphHttpClient_GraphHttpClientConfiguration; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_GraphHttpClientContext", function() { return graphHttpClient_GraphHttpClientContext; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "AadTokenProvider", function() { return oauthTokenProvider_AadTokenProvider; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TokenAcquisitionEventArgs", function() { return AadTokenProvider_TokenAcquisitionEventArgs; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "AadHttpClient", function() { return aadHttpClient_AadHttpClient; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "AadHttpClientConfiguration", function() { return aadHttpClient_AadHttpClientConfiguration; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "AadHttpClientFactory", function() { return aadHttpClient_AadHttpClientFactory; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "AadTokenProviderFactory", function() { return oauthTokenProvider_AadTokenProviderFactory; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MSGraphClient", function() { return msGraphClient_MSGraphClient; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "GraphRequest", function() { return /* Cannot get final name for export "GraphRequest" in "./lib/msGraphClient/MSGraphClient.js" (known exports: default, known reexports: ) */ undefined; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MSGraphClientFactory", function() { return msGraphClient_MSGraphClientFactory; });



























/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ })
/******/ ])}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
  var strings = {
    "_+tvmKa3YEOqWGKKXzwjtaw": {
      "additionalCredentialsWarning": "Additional credentials are required to show this page correctly.",
      "servicePrincipalNotAvaliableError": "The SharePoint Online Web Application Service Principal hasn't been provisioned yet. Please contact your Tenant Administrator.",
      "graphClientInitializationError": "MSGraphClient cannot be constructed due to an unknown failure"
    }
  };

  strings.default = strings;
  return strings;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })
/******/ ])});;
//# sourceMappingURL=sp-http_en-us.js.map
(function(){
if (!window.__setWebpackPublicPathLoaderSrcRegistry__) window.__setWebpackPublicPathLoaderSrcRegistry__={};
var scripts = document.getElementsByTagName('script');
if (scripts && scripts.length) {
  for (var i = 0; i < scripts.length; i++) {
    if (!scripts[i]) continue;
    var path = scripts[i].getAttribute('src');
    if (path) window.__setWebpackPublicPathLoaderSrcRegistry__[path]=true;
  }
}
})();


define("8217e442-8ed3-41fd-957d-b112e841286a_0.2.2", ["@microsoft/sp-diagnostics","@ms/odsp-utilities-bundle","@microsoft/sp-core-library","@microsoft/sp-lodash-subset"], function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp8217e442_8ed3_41fd_957d_b112e841286a_0_2_2"];
/******/ 	window["webpackJsonp8217e442_8ed3_41fd_957d_b112e841286a_0_2_2"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + ({}[chunkId]||chunkId) + "_" + {"0":"043d5fc453f27e016515","1":"cd7aa09f1aa462b74a51"}[chunkId] + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Set the webpack public path
/******/ 	(function () {
/******/ 	  var scripts = document.getElementsByTagName('script');
/******/ 	  var regex = (typeof spScriptNamePattern !== 'undefined') ? spScriptNamePattern : new RegExp('sp-telemetry_?[a-zA-Z0-9-_]*.js', 'i');
/******/ 	  var publicPath;
/******/ 	
/******/ 	  if (scripts && scripts.length) {
/******/ 	    for (var i = 0; i < scripts.length; i++) {
/******/ 	      if (!scripts[i]) continue;
/******/ 	      var path = scripts[i].getAttribute('src');
/******/ 	      if (path && path.match(regex)) {
/******/ 	        publicPath = path.substring(0, path.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/ 	
/******/ 	  if (!publicPath) {
/******/ 	    for (var global in window.__setWebpackPublicPathLoaderSrcRegistry__) {
/******/ 	      if (global && global.match(regex)) {
/******/ 	        publicPath = global.substring(0, global.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/ 	  __webpack_require__.p = publicPath;
/******/ 	})();
/******/ 	
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@microsoft/sp-diagnostics"
var sp_diagnostics_ = __webpack_require__(0);
var sp_diagnostics__default = /*#__PURE__*/__webpack_require__.n(sp_diagnostics_);

// EXTERNAL MODULE: external "@ms/odsp-utilities-bundle"
var odsp_utilities_bundle_ = __webpack_require__(1);
var odsp_utilities_bundle__default = /*#__PURE__*/__webpack_require__.n(odsp_utilities_bundle_);

// EXTERNAL MODULE: external "@microsoft/sp-core-library"
var sp_core_library_ = __webpack_require__(2);
var sp_core_library__default = /*#__PURE__*/__webpack_require__.n(sp_core_library_);

// CONCATENATED MODULE: ./lib/Api/PageMetricsLogger.js


var PageMetricsLogger_PageMetricsLogger = (function () {
    function PageMetricsLogger() {
    }
    PageMetricsLogger.reset = function (scenarioId, fullPageLoad) {
        var _this = this;
        this._fullPageLoad = fullPageLoad;
        this._scenarioId = scenarioId;
        this._metricsMap.clear();
        if (PageMetricsLogger._timeoutId) {
            clearTimeout(PageMetricsLogger._timeoutId);
        }
        PageMetricsLogger._timeoutId = setTimeout(function () {
            try {
                _this._collectPageMetrics();
            }
            catch (e) {
                console.error(e);
            }
            PageMetricsLogger._timeoutId = undefined;
        }, 6000);
    };
    PageMetricsLogger.recordMetric = function (metricName, count) {
        if (count === void 0) { count = 1; }
        count = count + (this._metricsMap.get(metricName) || 0);
        this._metricsMap.set(metricName, count);
    };
    PageMetricsLogger.overwriteScenarioId = function (scenarioId) {
        this._scenarioId = scenarioId;
    };
    PageMetricsLogger._collectPageMetrics = function () {
        var data = Performance_DeferredPerformanceLogger.getPerformanceData();
        var logEvents = {
            'ScenarioId': this._scenarioId,
            'IsFullPageLoad': this._fullPageLoad.toString(),
            'ViewportHeight': (window.innerHeight),
            'ViewportWidth': (window.innerWidth),
            'EUPL': (data && data.EUPL)
        };
        this._metricsMap.forEach(function (value, key) {
            logEvents[key] = value;
        });
        var logEntry = new sp_diagnostics_["_LogEntry"](PageMetricsLogger._logEntryName, this._scenarioId, sp_diagnostics_["_LogType"].Event, logEvents);
        sp_diagnostics_["_EngagementLogger"].logEventWithLogEntry(logEntry);
    };
    PageMetricsLogger._logEntryName = 'PageMetrics';
    PageMetricsLogger._metricsMap = new Map();
    return PageMetricsLogger;
}());
/* harmony default export */ var Api_PageMetricsLogger = (PageMetricsLogger_PageMetricsLogger);

// CONCATENATED MODULE: ./lib/Api/Performance/BasePerformanceLogger.js




var PERFORMANCE_LOGGER;
var BasePerformanceLogger_BasePerformanceLogger = (function () {
    function BasePerformanceLogger() {
    }
    BasePerformanceLogger.setLogger = function (logger) {
        PERFORMANCE_LOGGER = logger;
    };
    BasePerformanceLogger.hasLogger = function () {
        return PERFORMANCE_LOGGER !== undefined;
    };
    BasePerformanceLogger.initializeApplication = function (applicationName, fullPageLoad, serverVersion, approvedControls) {
        if (fullPageLoad === void 0) { fullPageLoad = true; }
        if (fullPageLoad === false) {
            if (this.isRunning()) {
                var serverUrl = this._logger.getPerformanceDataPropertyValue('ServerUrl');
                sp_diagnostics_["_TraceLogger"].logVerbose(this._logSource, "Performance data could not be collected for current page " + serverUrl + " before resetting");
            }
            this._logger.resetLogger();
            this._rumOneData = {};
            this._tempData = {};
            delete this._approvedControls;
        }
        Api_PageMetricsLogger.reset(applicationName, fullPageLoad);
        this._addEnabledFlights();
        this.fullPageLoad = fullPageLoad;
        this._reset(applicationName);
        this._approvedControls = approvedControls;
        if (serverVersion) {
            this._logger.writeServerVersion(serverVersion);
        }
        this._notifyListeners();
    };
    Object.defineProperty(BasePerformanceLogger, "fullPageLoad", {
        get: function () {
            var pageTransitionType = this._logger.getPerformanceDataPropertyValue('PageTransitionType');
            if (pageTransitionType !== undefined) {
                return pageTransitionType === 4 ;
            }
            return true;
        },
        set: function (isFullPageLoad) {
            var pageTransitionType = isFullPageLoad ? 4  :
                0 ;
            this._logger.writePageTransitionType(pageTransitionType, true); 
            this._notifyListeners();
        },
        enumerable: true,
        configurable: true
    });
    BasePerformanceLogger.addKeyMetric = function (keyMetric) {
        if (this._logger.isRunning()) {
            this._logger.addExpectedKeyMetric(keyMetric);
        }
    };
    BasePerformanceLogger.addComponent = function (tag) {
        if (!this._shouldRunComponent(tag)) {
            return;
        }
        this._logger.addExpectedControl(tag);
        this._notifyListeners();
    };
    BasePerformanceLogger.startMarkForComponent = function (tag, startTime) {
        if (startTime === void 0) { startTime = this.now(); }
        if (!this._shouldRunComponent(tag)) {
            return;
        }
        this.saveTempData(tag + this._componentStartTimeKey, startTime);
        this._logger.addEUPLBreakdown(tag + ".start", startTime);
        this._notifyListeners();
    };
    BasePerformanceLogger.endMarkForComponent = function (tag, endTime) {
        if (endTime === void 0) { endTime = this.now(); }
        return BasePerformanceLogger.endMarkForComponentWithTimestamp(tag, endTime);
    };
    BasePerformanceLogger.logPerformanceMetricToConsole = function (tag, label, componentId, alias) {
        var curStartTime = this.getComponentStartTime(tag);
        var curEndTime = this.getComponentEndTime(tag);
        var duration = curEndTime - curStartTime;
        sp_diagnostics_["_TraceLogger"].logVerbose(this._logSource, sp_core_library_["Text"].format('{0} for component {1} ({2}) took {3} ms', label, componentId, alias, duration));
    };
    BasePerformanceLogger.endMarkForComponentWithTimestamp = function (tag, endTime, overwrite) {
        if (!this._shouldRunComponent(tag)) {
            return;
        }
        if (!this.readTempData(tag + this._componentEndTimeKey) || overwrite) {
            var controlStartTime = this.getComponentStartTime(tag);
            this.reportControlData(tag, controlStartTime, endTime);
            this.saveTempData(tag + this._componentEndTimeKey, endTime);
            this._markComponentCore(tag, 'end', endTime);
            this._notifyListeners();
        }
    };
    BasePerformanceLogger.markComponent = function (tag, name, timeStamp) {
        if (timeStamp === void 0) { timeStamp = this.now(); }
        if (!this._shouldRunComponent(tag)) {
            return;
        }
        if (this._markComponentCore(tag, name, timeStamp)) {
            this._notifyListeners();
        }
    };
    BasePerformanceLogger.markComponentModuleLoaded = function (tag, timeStamp) {
        if (timeStamp === void 0) { timeStamp = this.now(); }
        if (!this._shouldRunComponent(tag)) {
            return;
        }
        var nowTime = this._markComponentCore(tag, 'modulesLoaded', timeStamp);
        if (nowTime === null || nowTime === undefined) {
            return;
        }
        if (!this._lastModuleLoadedDuration || nowTime > this._lastModuleLoadedDuration) {
            this._lastModuleLoadedDuration = nowTime;
            this._logger.addEUPLBreakdown('lastModuleLoaded', nowTime, true);
            this._logger.setPerformanceDataPropertyValue('lastModuleLoaded', nowTime);
        }
        this._notifyListeners();
    };
    BasePerformanceLogger.getLastModuleLoadedDuration = function () {
        return this._lastModuleLoadedDuration;
    };
    BasePerformanceLogger.skipComponent = function (name) {
        this._componentsToSkip.add(name);
    };
    BasePerformanceLogger.clearComponentToSkip = function (name) {
        this._componentsToSkip.delete(name);
    };
    BasePerformanceLogger.clearComponentsToSkip = function () {
        this._componentsToSkip.clear();
    };
    BasePerformanceLogger.shouldSkipComponent = function (tag) {
        var shouldSkipTag = false;
        this._componentsToSkip.forEach(function (name) {
            shouldSkipTag = shouldSkipTag || (tag.lastIndexOf(name, 0) === 0);
        });
        return shouldSkipTag;
    };
    BasePerformanceLogger.startMarkForApi = function (tag, startTime) {
        if (startTime === void 0) { startTime = this.now(); }
        if (!this.isRunning()) {
            return;
        }
        this.saveTempData(tag + this._apiStartTimeKey, startTime);
        this._notifyListeners();
    };
    BasePerformanceLogger.endMarkForApi = function (tag, name, requestUrl, response, endTime) {
        if (endTime === void 0) { endTime = this.now(); }
        if (!this.isRunning()) {
            return;
        }
        var startTime = this.getApiStartTime(tag);
        if (startTime === undefined) {
            return;
        }
        var apiData = {
            url: requestUrl,
            duration: endTime - startTime,
            correlationId: response.headers.get('SPRequestGuid'),
            status: response.status,
            startTime: startTime.toString(),
            endTime: endTime.toString(),
            name: name
        };
        this._logger.writeAPICallPerformanceData(apiData);
        this.saveTempData(tag + this._apiEndTimeKey, endTime);
        BasePerformanceLogger._updateDataFetch(startTime, endTime);
        this._notifyListeners();
    };
    BasePerformanceLogger._getMaxDataFetchTime = function () {
        return this._logger.getPerformanceDataPropertyValue('DataFetch');
    };
    BasePerformanceLogger.mark = function (tag, ignoreMarkKey) {
        if (ignoreMarkKey === void 0) { ignoreMarkKey = false; }
        this._mark(tag, ignoreMarkKey);
    };
    BasePerformanceLogger.markSpLoaderStart = function (startTime) {
        if (startTime === void 0) { startTime = this.now(); }
        this._logger.addEUPLBreakdown(this._spLoaderStartKey, startTime, true);
        this._logger.setPerformanceDataPropertyValue(this._spLoaderStartKey, startTime);
    };
    BasePerformanceLogger.markApplicationStart = function (startTime) {
        if (startTime === void 0) { startTime = this.now(); }
        this._mark(this._applicationStartKey);
        this._logger.addEUPLBreakdown(this._applicationStartKey, startTime, true);
        this._logger.setPerformanceDataPropertyValue(this._applicationStartKey, startTime);
    };
    BasePerformanceLogger.getApplicationStartTime = function () {
        return this._getMark(this._applicationStartKey);
    };
    BasePerformanceLogger.getComponentStartTime = function (tag) {
        return this.readTempData(tag + this._componentStartTimeKey);
    };
    BasePerformanceLogger.getComponentEndTime = function (tag) {
        return this.readTempData(tag + this._componentEndTimeKey);
    };
    BasePerformanceLogger.getApiStartTime = function (tag) {
        return this.readTempData(tag + this._apiStartTimeKey);
    };
    BasePerformanceLogger.getApiEndTime = function (tag) {
        return this.readTempData(tag + this._apiEndTimeKey);
    };
    BasePerformanceLogger.getPerformanceData = function () {
        return this._logger.getPerformanceData();
    };
    BasePerformanceLogger.addListener = function (onDataCallback) {
        this._listeners.push(onDataCallback);
    };
    BasePerformanceLogger.removeListener = function (onDataCallback) {
        var index = this._listeners.indexOf(onDataCallback);
        if (index > -1) {
            this._listeners.splice(index, 1);
        }
    };
    BasePerformanceLogger.now = function () {
        var navStartOffset = this.readTempData(this._navigationStartOffsetKey) || 0;
        if (!!window.performance && window.performance.now && typeof window.performance.now === 'function') {
            return (Math.round(window.performance.now()) - navStartOffset);
        }
        else if (!!window.performance && window.performance.timing && window.performance.timing.navigationStart) {
            return (Date.now() - window.performance.timing.navigationStart - navStartOffset);
        }
        sp_diagnostics_["_TraceLogger"].logVerbose(this._logSource, "High resolution performance API not supported");
        var perfStartTime = this.readTempData('perfStartTime') || 0;
        return (Date.now() - perfStartTime);
    };
    Object.defineProperty(BasePerformanceLogger, "scenarioId", {
        get: function () {
            return this._scenarioId;
        },
        set: function (scenarioId) {
            if (this.isRunning()) {
                this._scenarioId = scenarioId;
                this._logger.writeScenarioId(this._scenarioId, true);
                Api_PageMetricsLogger.overwriteScenarioId(this._scenarioId);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePerformanceLogger, "waitOnAddingExpectedControl", {
        set: function (shouldWait) {
            this._logger.waitOnAddingExpectedControl = shouldWait;
        },
        enumerable: true,
        configurable: true
    });
    BasePerformanceLogger.isRunning = function () {
        return this._logger.isRunning();
    };
    BasePerformanceLogger.writeDataFetchTime = function (dataFetchTime) {
        this._logger.writeDataFetchTime(dataFetchTime);
    };
    BasePerformanceLogger.writeServerSideLatency = function (duration, iisLatency) {
        this._logger.writeServerSideLatency(duration, iisLatency);
    };
    BasePerformanceLogger.writeServerCorrelationId = function (correlationId) {
        this._logger.writeServerCorrelationId(correlationId);
    };
    BasePerformanceLogger.writeAppCache = function (appCache) {
        this._logger.writeAppCache(appCache);
    };
    BasePerformanceLogger.writePreRenderTime = function (preRenderTime) {
        this._logger.writePreRenderTime(preRenderTime);
    };
    BasePerformanceLogger.writeRenderTime = function (renderTime, overwrite) {
        this._logger.writeRenderTime(renderTime, overwrite);
    };
    BasePerformanceLogger.writeTimeToFirstByte = function (timeToFirstByte) {
        var performaceData = BasePerformanceLogger.getPerformanceData(); 
        performaceData.TTFB = timeToFirstByte;
    };
    BasePerformanceLogger.addServerMetrics = function (metric, overwrite) {
        this._logger.addServerMetrics(metric, overwrite);
    };
    BasePerformanceLogger.addEUPLBreakdown = function (name, value, overwrite) {
        this._logger.addEUPLBreakdown(name, value, overwrite);
    };
    BasePerformanceLogger.readEUPLBreakdown = function (name) {
        return this._logger.readEUPLBreakdown(name);
    };
    BasePerformanceLogger.collectW3CPerfTimings = function () {
        this._logger.collectW3CPerfTimings();
    };
    BasePerformanceLogger.collectW3cResourceTimings = function () {
        this._logger.collectW3cResourceTimings();
    };
    BasePerformanceLogger.getMark = function (tag, ignoreMarkKey) {
        if (ignoreMarkKey === void 0) { ignoreMarkKey = false; }
        return this._getMark(tag, ignoreMarkKey);
    };
    BasePerformanceLogger.devMark = function (tag) {
        if (window.performance && window.performance.mark) {
            window.performance.mark(tag);
        }
    };
    BasePerformanceLogger.saveTempData = function (key, value) {
        this._tempData[key] = value;
    };
    BasePerformanceLogger.readTempData = function (key) {
        return this._tempData[key];
    };
    BasePerformanceLogger._shouldRunComponent = function (tag) {
        return this.isRunning() && !this.shouldSkipComponent(tag);
    };
    Object.defineProperty(BasePerformanceLogger, "_logger", {
        get: function () {
            this._ensureInitialized();
            return PERFORMANCE_LOGGER;
        },
        enumerable: true,
        configurable: true
    });
    BasePerformanceLogger._ensureInitialized = function () {
        if (!PERFORMANCE_LOGGER) {
            PERFORMANCE_LOGGER = odsp_utilities_bundle_["RumOneLogger"].getRUMOneLogger();
            PERFORMANCE_LOGGER.registerEUPLComputedHandler(this._EUPLComputedHandler.bind(this));
        }
    };
    BasePerformanceLogger.reportControlData = function (tag, startTime, endTime) {
        if (!this.isRunning) {
            return;
        }
        var controlPerformanceData = {
            controlId: tag,
            startTime: startTime,
            endTime: endTime,
            renderTimeCalculator: this._renderTimeCalculator.bind(this),
            renderTimeRequiredDataChecker: this._renderTimeRequiredDataChecker.bind(this),
            renderTime: undefined,
            ignoreForEUPL: true,
            needFlatten: false
        };
        this._logger.writeControlPerformanceData(controlPerformanceData);
        this._notifyListeners();
    };
    BasePerformanceLogger._renderTimeRequiredDataChecker = function (rumone, controlData) {
        return (rumone && controlData && !isNaN(controlData.endTime));
    };
    BasePerformanceLogger._renderTimeCalculator = function (rumone, controlData) {
        if (rumone && controlData && controlData.endTime) {
            var renderTime = controlData.endTime;
            if (!isNaN(renderTime) && renderTime < 0) {
                var error = new Error("Component " + controlData.controlId + " render time " + renderTime + " is negative\n              ( StartTime: " + controlData.startTime + "\n              endTime: " + controlData.endTime + " pageTransitionType: " + this.fullPageLoad.toString() + ")");
                sp_diagnostics_["_TraceLogger"].logError(this._logSource, error, 'negativeRenderTime');
                return 0;
            }
            return renderTime;
        }
        else {
            return 0;
        }
    };
    BasePerformanceLogger._mark = function (tag, ignoreMarkKey) {
        if (ignoreMarkKey === void 0) { ignoreMarkKey = false; }
        var markName = tag + (ignoreMarkKey ? '' : this._markKey);
        this._logger.mark(markName);
        this._notifyListeners();
    };
    BasePerformanceLogger._getMark = function (tag, ignoreMarkKey) {
        if (ignoreMarkKey === void 0) { ignoreMarkKey = false; }
        var markName = tag + (ignoreMarkKey ? '' : this._markKey);
        return this._logger.getMarkerTime(markName);
    };
    BasePerformanceLogger._updateDataFetch = function (startTime, endTime) {
        if (startTime && endTime) {
            var previousDuration = BasePerformanceLogger._getMaxDataFetchTime();
            var newDuration = endTime - startTime;
            if (!previousDuration || newDuration > previousDuration) {
                this._rumOneData.DataFetch = newDuration;
                this._logger.writeDataFetchTime(newDuration, true);
            }
        }
    };
    BasePerformanceLogger._markComponentCore = function (tag, name, markTime) {
        if (markTime === void 0) { markTime = this.now(); }
        var startTime = this.getComponentStartTime(tag);
        if (startTime === undefined) {
            return undefined;
        }
        this._logger.addEUPLBreakdown(tag + "." + name, markTime);
        return markTime;
    };
    BasePerformanceLogger._notifyListeners = function () {
        this._listeners.forEach(function (listner) {
            try {
                listner();
            }
            catch (err) {
            }
        });
    };
    BasePerformanceLogger._reset = function (applicationName, elapsedTime) {
        if (elapsedTime === void 0) { elapsedTime = this.now(); }
        this.saveTempData('perfStartTime', Date.now());
        var navOffset = this.fullPageLoad ? 0 : elapsedTime;
        this.saveTempData(this._navigationStartOffsetKey, navOffset);
        this._logger.addEUPLBreakdown(this._navigationStartOffsetKey, navOffset);
        this._logger.setPerformanceDataPropertyValue(this._navigationStartOffsetKey, navOffset);
        this.clearComponentsToSkip();
        this._lastModuleLoadedDuration = undefined;
        this.scenarioId = applicationName;
    };
    BasePerformanceLogger._EUPLComputedHandler = function (eupl) {
        var _this = this;
        this._collectSPFXPerformanceMarkers();
        this.collectW3CPerfTimings();
        if (this.fullPageLoad) {
            this.collectW3cResourceTimings();
        }
        if (this._approvedControls && this._approvedControls.size) {
            var approvedEUPL = void 0;
            var hasUnApprovedControl_1 = false;
            var controls = this._logger.readControlPerformanceData();
            if (controls.length) {
                var approvedControls = controls.filter(function (control) {
                    if (control.controlId.indexOf('WebPart.') !== 0) {
                        return false; 
                    }
                    var nameEndIndex = control.controlId.indexOf('.', 8);
                    if (nameEndIndex === -1) {
                        return false;
                    }
                    var controlName = control.controlId.substring(0, nameEndIndex + 1); 
                    var isApproved = _this._approvedControls.has(controlName);
                    hasUnApprovedControl_1 = hasUnApprovedControl_1 || !isApproved;
                    return isApproved;
                });
                if (approvedControls.length) {
                    approvedControls.sort(function (c1, c2) {
                        return c2.endTime - c1.endTime; 
                    });
                    approvedEUPL = approvedControls[0].endTime;
                }
                else if (!hasUnApprovedControl_1) {
                    approvedEUPL = eupl;
                }
            }
            if (approvedEUPL !== undefined) {
                this._logger.addEUPLBreakdown('ApprovedControlsEUPL', { data: approvedEUPL, needFlatten: true });
            }
            else {
                this._logger.addEUPLBreakdown('UnapprovedControlsEUPL', { data: eupl, needFlatten: true });
            }
        }
    };
    BasePerformanceLogger._collectSPFXPerformanceMarkers = function () {
        var perfMarksKey = 'spfxPerfMarks';
        var perfMarks = window[perfMarksKey];
        if (perfMarks) {
            for (var markKey in perfMarks) {
                if (markKey && !isNaN(perfMarks[markKey])) {
                    this.addEUPLBreakdown(markKey, perfMarks[markKey]);
                    this._logger.setPerformanceDataPropertyValue(markKey, perfMarks[markKey]);
                }
            }
            window[perfMarksKey] = undefined;
        }
    };
    BasePerformanceLogger._addEnabledFlights = function () {
        if (!sp_core_library_["_SPKillSwitch"].isActivated(sp_core_library_["Guid"].tryParse('80011f76-ec1c-4b33-ba7e-06c542c5221f'), '4/6/2017', 'Do not add Flights to perf data')) {
            var allEnabledFlights = [];
            for (var index = 0; this._flightsOptedABTesting && index < this._flightsOptedABTesting.length; index++) {
                var flight = this._flightsOptedABTesting[index];
                if (sp_core_library_["_SPFlight"].isEnabled(flight)) {
                    allEnabledFlights.push(flight.toString());
                }
            }
            this._logger.addFlights(allEnabledFlights);
        }
    };
    BasePerformanceLogger._logSource = sp_diagnostics_["_LogSource"].create('BasePerformanceLogger');
    BasePerformanceLogger._rumOneData = {};
    BasePerformanceLogger._tempData = {}; 
    BasePerformanceLogger._componentStartTimeKey = 'ComponentStartTime';
    BasePerformanceLogger._componentEndTimeKey = 'ComponentEndTime';
    BasePerformanceLogger._apiStartTimeKey = 'ApiStartTime';
    BasePerformanceLogger._apiEndTimeKey = 'ApiEndTime';
    BasePerformanceLogger._markKey = 'Mark';
    BasePerformanceLogger._spLoaderStartKey = 'spLoaderStart';
    BasePerformanceLogger._applicationStartKey = 'appStart';
    BasePerformanceLogger._navigationStartOffsetKey = 'navigationStartOffset';
    BasePerformanceLogger._listeners = [];
    BasePerformanceLogger._componentsToSkip = new Set();
    BasePerformanceLogger._flightsOptedABTesting = [
        59 ,
        125 ,
        242 ,
        419 ,
        739 ,
        944 ,
        1062 ,
        1069 ,
        1257 ,
        1187 ,
        1275 ,
        11106 
    ];
    return BasePerformanceLogger;
}());
/* harmony default export */ var Performance_BasePerformanceLogger = (BasePerformanceLogger_BasePerformanceLogger);

// EXTERNAL MODULE: external "@microsoft/sp-lodash-subset"
var sp_lodash_subset_ = __webpack_require__(4);
var sp_lodash_subset__default = /*#__PURE__*/__webpack_require__.n(sp_lodash_subset_);

// CONCATENATED MODULE: ./lib/TelemetrySettingsManager.js


var TelemetrySettingsManager_TelemetrySettingsManager = (function () {
    function TelemetrySettingsManager() {
    }
    TelemetrySettingsManager.initialize = function (settings) {
        this.settings = Object(sp_lodash_subset_["cloneDeep"])(settings);
        this._initialized = true;
        this._normalizeContextIds();
    };
    TelemetrySettingsManager.updateSettings = function (settings) {
        this.settings = Object(sp_lodash_subset_["merge"])(this.settings, settings);
        this._normalizeContextIds();
    };
    Object.defineProperty(TelemetrySettingsManager, "isInitialized", {
        get: function () {
            return this._initialized;
        },
        enumerable: true,
        configurable: true
    });
    TelemetrySettingsManager.shouldUseBuffer = function () {
        var shouldUse = !sp_core_library_["_SPKillSwitch"].isActivated(TelemetrySettingsManager.enableCircularBufferLogging, '11/27/2017', 'enableCircularBufferLogging');
        return shouldUse;
    };
    TelemetrySettingsManager.shouldUsePerformanceBuffer = function () {
        var isFlightEnabled = sp_core_library_["_SPFlight"].isEnabled(59 );
        var shouldStopUsingBuffer = sp_core_library_["_SPKillSwitch"].isActivated(TelemetrySettingsManager.enableDeferedPerformance, '3/28/2018', 'enableDeferedPerformance');
        var shouldDefer = TelemetrySettingsManager.shouldUseBuffer() && isFlightEnabled &&
            !shouldStopUsingBuffer;
        return shouldDefer;
    };
    TelemetrySettingsManager._normalizeId = function (id) {
        var guid = sp_core_library_["Guid"].tryParse(id);
        return guid ? guid.toString() : id;
    };
    TelemetrySettingsManager._normalizeContextIds = function () {
        this.settings.siteId = this._normalizeId(this.settings.siteId);
        this.settings.webId = this._normalizeId(this.settings.webId);
        if (this.settings.listId) {
            this.settings.listId = this._normalizeId(this.settings.listId);
            if (this.settings.listItemUniqueId) {
                this.settings.listItemUniqueId = this._normalizeId(this.settings.listItemUniqueId);
            }
        }
    };
    TelemetrySettingsManager.enableCircularBufferLogging = sp_core_library_["Guid"].parse('4b6e1a58-3e0c-43e2-b9cb-1a470f6fe402');
    TelemetrySettingsManager.enableDeferedPerformance = sp_core_library_["Guid"].parse('20023865-29de-4778-9bad-d9898bc7148e');
    TelemetrySettingsManager._initialized = false;
    return TelemetrySettingsManager;
}());
/* harmony default export */ var lib_TelemetrySettingsManager = (TelemetrySettingsManager_TelemetrySettingsManager);

// CONCATENATED MODULE: ./lib/Api/Performance/DeferredPerformanceLogger.js
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var DeferredPerformanceLogger_DeferredPerformanceLogger = (function (_super) {
    __extends(DeferredPerformanceLogger, _super);
    function DeferredPerformanceLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeferredPerformanceLogger.startRealTimeProcessing = function () {
        if (!this._isProcessingInRealTime) {
            this._shouldProcessInRealTime(true);
        }
    };
    DeferredPerformanceLogger._shouldProcessInRealTime = function (processInRealTime) {
        if (processInRealTime) {
            this._processTempData();
        }
        this._isProcessingInRealTime = processInRealTime;
        this._deferExecutor.shouldExecuteInRealTime = processInRealTime;
        delete this._proxyEuplBreakDown;
    };
    DeferredPerformanceLogger.initializeDeferredHandlers = function () {
        var initializeApplication = function (applicationName, fullPageLoad, serverVersion, approvedControls) {
            if (fullPageLoad === void 0) { fullPageLoad = true; }
            Performance_BasePerformanceLogger.initializeApplication(applicationName, fullPageLoad, serverVersion, approvedControls);
        };
        var getFullPageLoad = function () { return Performance_BasePerformanceLogger.fullPageLoad; };
        var setFullPageLoad = function (isFullPageLoad) { Performance_BasePerformanceLogger.fullPageLoad = isFullPageLoad; };
        var addKeyMetric = function (keyMetric) { Performance_BasePerformanceLogger.addKeyMetric(keyMetric); };
        var addComponent = function (tag) { Performance_BasePerformanceLogger.addComponent(tag); };
        var startMarkForComponent = function (tag, startTime) { Performance_BasePerformanceLogger.startMarkForComponent(tag, startTime); };
        var endMarkForComponent = function (tag, endTime) { Performance_BasePerformanceLogger.endMarkForComponent(tag, endTime); };
        var endMarkForComponentWithTimestamp = function (tag, endTime, overwrite) { Performance_BasePerformanceLogger.endMarkForComponentWithTimestamp(tag, endTime, overwrite); };
        var markComponent = function (tag, name, timeStamp) { Performance_BasePerformanceLogger.markComponent(tag, name, timeStamp); };
        var markComponentModuleLoaded = function (tag, timeStamp) { Performance_BasePerformanceLogger.markComponentModuleLoaded(tag, timeStamp); };
        var clearComponentsToSkip = function () { Performance_BasePerformanceLogger.clearComponentsToSkip(); };
        var startMarkForApi = function (tag, startTime) { Performance_BasePerformanceLogger.startMarkForApi(tag, startTime); };
        var endMarkForApi = function (tag, name, requestUrl, response, endTime) { Performance_BasePerformanceLogger.endMarkForApi(tag, name, requestUrl, response, endTime); };
        var mark = function (tag, ignoreMarkKey) { Performance_BasePerformanceLogger.mark(tag, ignoreMarkKey); };
        var markSpLoaderStart = function (startTime) { Performance_BasePerformanceLogger.markSpLoaderStart(startTime); };
        var markApplicationStart = function (startTime) { Performance_BasePerformanceLogger.markApplicationStart(startTime); };
        var getPerformanceData = function () { return Performance_BasePerformanceLogger.getPerformanceData(); };
        var addListener = function (onDataCallback) { Performance_BasePerformanceLogger.addListener(onDataCallback); };
        var removeListener = function (onDataCallback) { Performance_BasePerformanceLogger.removeListener(onDataCallback); };
        var setScenarioId = function (scenarioId) { Performance_BasePerformanceLogger.scenarioId = scenarioId; };
        var skipComponent = function (name) { Performance_BasePerformanceLogger.skipComponent(name); };
        var waitOnAddingExpectedControl = function (shouldWait) { Performance_BasePerformanceLogger.waitOnAddingExpectedControl = shouldWait; };
        var writeDataFetchTime = function (dataFetchTime) { Performance_BasePerformanceLogger.writeDataFetchTime(dataFetchTime); };
        var writeServerSideLatency = function (duration, iisLatency) { Performance_BasePerformanceLogger.writeServerSideLatency(duration, iisLatency); };
        var writeServerCorrelationId = function (correlationId) { Performance_BasePerformanceLogger.writeServerCorrelationId(correlationId); };
        var writeAppCache = function (appCache) { Performance_BasePerformanceLogger.writeAppCache(appCache); };
        var writePreRenderTime = function (preRenderTime) { Performance_BasePerformanceLogger.writePreRenderTime(preRenderTime); };
        var writeRenderTime = function (renderTime, overwrite) { Performance_BasePerformanceLogger.writeRenderTime(renderTime, overwrite); };
        var writeTimeToFirstByte = function (timeToFirstByte) { Performance_BasePerformanceLogger.writeTimeToFirstByte(timeToFirstByte); };
        var addServerMetrics = function (metric, overwrite) { Performance_BasePerformanceLogger.addServerMetrics(metric, overwrite); };
        var addEUPLBreakdown = function (name, value, overwrite) { Performance_BasePerformanceLogger.addEUPLBreakdown(name, value, overwrite); };
        var collectW3CPerfTimings = function () { Performance_BasePerformanceLogger.collectW3CPerfTimings(); };
        var collectW3cResourceTimings = function () { Performance_BasePerformanceLogger.collectW3cResourceTimings(); };
        this._deferExecutor.addHandler('initializeApplication', initializeApplication);
        this._deferExecutor.addHandler('getFullPageLoad', getFullPageLoad);
        this._deferExecutor.addHandler('setFullPageLoad', setFullPageLoad);
        this._deferExecutor.addHandler('addKeyMetric', addKeyMetric);
        this._deferExecutor.addHandler('addComponent', addComponent);
        this._deferExecutor.addHandler('startMarkForComponent', startMarkForComponent);
        this._deferExecutor.addHandler('endMarkForComponent', endMarkForComponent);
        this._deferExecutor.addHandler('endMarkForComponentWithTimestamp', endMarkForComponentWithTimestamp);
        this._deferExecutor.addHandler('markComponent', markComponent);
        this._deferExecutor.addHandler('markComponentModuleLoaded', markComponentModuleLoaded);
        this._deferExecutor.addHandler('clearComponentsToSkip', clearComponentsToSkip);
        this._deferExecutor.addHandler('startMarkForApi', startMarkForApi);
        this._deferExecutor.addHandler('endMarkForApi', endMarkForApi);
        this._deferExecutor.addHandler('mark', mark);
        this._deferExecutor.addHandler('markSpLoaderStart', markSpLoaderStart);
        this._deferExecutor.addHandler('markApplicationStart', markApplicationStart);
        this._deferExecutor.addHandler('getPerformanceData', getPerformanceData);
        this._deferExecutor.addHandler('addListener', addListener);
        this._deferExecutor.addHandler('removeListener', removeListener);
        this._deferExecutor.addHandler('setScenarioId', setScenarioId);
        this._deferExecutor.addHandler('skipComponent', skipComponent);
        this._deferExecutor.addHandler('waitOnAddingExpectedControl', waitOnAddingExpectedControl);
        this._deferExecutor.addHandler('writeDataFetchTime', writeDataFetchTime);
        this._deferExecutor.addHandler('writeServerSideLatency', writeServerSideLatency);
        this._deferExecutor.addHandler('writeServerCorrelationId', writeServerCorrelationId);
        this._deferExecutor.addHandler('writeAppCache', writeAppCache);
        this._deferExecutor.addHandler('writePreRenderTime', writePreRenderTime);
        this._deferExecutor.addHandler('writeRenderTime', writeRenderTime);
        this._deferExecutor.addHandler('writeTimeToFirstByte', writeTimeToFirstByte);
        this._deferExecutor.addHandler('addServerMetrics', addServerMetrics);
        this._deferExecutor.addHandler('addEUPLBreakdown', addEUPLBreakdown);
        this._deferExecutor.addHandler('collectW3CPerfTimings', collectW3CPerfTimings);
        this._deferExecutor.addHandler('collectW3cResourceTimings', collectW3cResourceTimings);
    };
    DeferredPerformanceLogger.initializeApplication = function (applicationName, fullPageLoad, serverVersion, approvedControls) {
        if (fullPageLoad === void 0) { fullPageLoad = true; }
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer()) {
            this._deferExecutor.addExecutionEntry('initializeApplication', applicationName, fullPageLoad, serverVersion, approvedControls);
        }
        else {
            Performance_BasePerformanceLogger.initializeApplication(applicationName, fullPageLoad, serverVersion, approvedControls);
        }
    };
    DeferredPerformanceLogger.addComponent = function (tag) {
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer()) {
            this._deferExecutor.addExecutionEntry('addComponent', tag);
        }
        else {
            Performance_BasePerformanceLogger.addComponent(tag);
        }
    };
    DeferredPerformanceLogger.endMarkForComponent = function (tag, endTime) {
        if (endTime === void 0) { endTime = this.now(); }
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer()) {
            this._deferExecutor.addExecutionEntry('endMarkForComponent', tag, endTime);
        }
        else {
            Performance_BasePerformanceLogger.endMarkForComponent(tag, endTime);
        }
    };
    DeferredPerformanceLogger.markComponent = function (tag, name, timeStamp) {
        if (timeStamp === void 0) { timeStamp = this.now(); }
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer()) {
            this._deferExecutor.addExecutionEntry('markComponent', tag, name, timeStamp);
        }
        else {
            Performance_BasePerformanceLogger.markComponent(tag, name, timeStamp);
        }
    };
    DeferredPerformanceLogger.markComponentModuleLoaded = function (tag, timeStamp) {
        if (timeStamp === void 0) { timeStamp = this.now(); }
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer()) {
            this._deferExecutor.addExecutionEntry('markComponentModuleLoaded', tag, timeStamp);
        }
        else {
            Performance_BasePerformanceLogger.markComponentModuleLoaded(tag, timeStamp);
        }
    };
    DeferredPerformanceLogger.clearComponentsToSkip = function () {
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer()) {
            this._deferExecutor.addExecutionEntry('clearComponentsToSkip');
        }
        else {
            Performance_BasePerformanceLogger.clearComponentsToSkip();
        }
    };
    DeferredPerformanceLogger.mark = function (tag, ignoreMarkKey) {
        if (ignoreMarkKey === void 0) { ignoreMarkKey = false; }
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer()) {
            this._deferExecutor.addExecutionEntry('mark', tag, ignoreMarkKey);
        }
        else {
            Performance_BasePerformanceLogger.mark(tag, ignoreMarkKey);
        }
    };
    DeferredPerformanceLogger.markSpLoaderStart = function (startTime) {
        if (startTime === void 0) { startTime = this.now(); }
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer()) {
            this._deferExecutor.addExecutionEntry('markSpLoaderStart', startTime);
        }
        else {
            Performance_BasePerformanceLogger.markSpLoaderStart(startTime);
        }
    };
    DeferredPerformanceLogger.markApplicationStart = function (startTime) {
        if (startTime === void 0) { startTime = this.now(); }
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer()) {
            this._deferExecutor.addExecutionEntry('markApplicationStart', startTime);
        }
        else {
            Performance_BasePerformanceLogger.markApplicationStart(startTime);
        }
    };
    DeferredPerformanceLogger.addListener = function (onDataCallback) {
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer()) {
            this._deferExecutor.addExecutionEntry('addListener');
        }
        else {
            Performance_BasePerformanceLogger.addListener(onDataCallback);
        }
    };
    DeferredPerformanceLogger.removeListener = function (onDataCallback) {
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer()) {
            this._deferExecutor.addExecutionEntry('removeListener');
        }
        else {
            Performance_BasePerformanceLogger.removeListener(onDataCallback);
        }
    };
    Object.defineProperty(DeferredPerformanceLogger, "waitOnAddingExpectedControl", {
        set: function (shouldWait) {
            if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer()) {
                this._deferExecutor.addExecutionEntry('waitOnAddingExpectedControl', shouldWait);
            }
            else {
                Performance_BasePerformanceLogger.waitOnAddingExpectedControl = shouldWait;
            }
        },
        enumerable: true,
        configurable: true
    });
    DeferredPerformanceLogger.writeDataFetchTime = function (dataFetchTime) {
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer()) {
            this._deferExecutor.addExecutionEntry('writeDataFetchTime', dataFetchTime);
        }
        else {
            Performance_BasePerformanceLogger.writeDataFetchTime(dataFetchTime);
        }
    };
    DeferredPerformanceLogger.writeServerSideLatency = function (duration, iisLatency) {
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer()) {
            this._deferExecutor.addExecutionEntry('writeServerSideLatency', duration, iisLatency);
        }
        else {
            Performance_BasePerformanceLogger.writeServerSideLatency(duration, iisLatency);
        }
    };
    DeferredPerformanceLogger.writeServerCorrelationId = function (correlationId) {
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer()) {
            this._deferExecutor.addExecutionEntry('writeServerCorrelationId', correlationId);
        }
        else {
            Performance_BasePerformanceLogger.writeServerCorrelationId(correlationId);
        }
    };
    DeferredPerformanceLogger.writeAppCache = function (appCache) {
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer()) {
            this._deferExecutor.addExecutionEntry('writeAppCache', appCache);
        }
        else {
            Performance_BasePerformanceLogger.writeAppCache(appCache);
        }
    };
    DeferredPerformanceLogger.writePreRenderTime = function (preRenderTime) {
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer()) {
            this._deferExecutor.addExecutionEntry('writePreRenderTime', preRenderTime);
        }
        else {
            Performance_BasePerformanceLogger.writePreRenderTime(preRenderTime);
        }
    };
    DeferredPerformanceLogger.writeRenderTime = function (renderTime, overwrite) {
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer()) {
            this._deferExecutor.addExecutionEntry('writeRenderTime', renderTime, overwrite);
        }
        else {
            Performance_BasePerformanceLogger.writeRenderTime(renderTime, overwrite);
        }
    };
    DeferredPerformanceLogger.writeTimeToFirstByte = function (timeToFirstByte) {
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer()) {
            this._deferExecutor.addExecutionEntry('writeTimeToFirstByte', timeToFirstByte);
        }
        else {
            Performance_BasePerformanceLogger.writeTimeToFirstByte(timeToFirstByte);
        }
    };
    DeferredPerformanceLogger.addServerMetrics = function (metric, overwrite) {
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer()) {
            this._deferExecutor.addExecutionEntry('addServerMetrics', metric, overwrite);
        }
        else {
            Performance_BasePerformanceLogger.addServerMetrics(metric, overwrite);
        }
    };
    DeferredPerformanceLogger.addEUPLBreakdown = function (name, value, overwrite) {
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer() && !this._isProcessingInRealTime) {
            this._deferExecutor.addExecutionEntry('addEUPLBreakdown', name, value, overwrite);
            if (!this._proxyEuplBreakDown[name] || overwrite) {
                var isNumber = value.data === undefined;
                this._proxyEuplBreakDown[name] = isNumber ? value : value.data;
            }
        }
        else {
            Performance_BasePerformanceLogger.addEUPLBreakdown(name, value, overwrite);
        }
    };
    DeferredPerformanceLogger.readEUPLBreakdown = function (name) {
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer() && !this._isProcessingInRealTime) {
            return this._proxyEuplBreakDown && this._proxyEuplBreakDown[name];
        }
        else {
            return Performance_BasePerformanceLogger.readEUPLBreakdown(name);
        }
    };
    DeferredPerformanceLogger.collectW3CPerfTimings = function () {
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer()) {
            this._deferExecutor.addExecutionEntry('collectW3CPerfTimings');
        }
        else {
            Performance_BasePerformanceLogger.collectW3CPerfTimings();
        }
    };
    DeferredPerformanceLogger.collectW3cResourceTimings = function () {
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer()) {
            this._deferExecutor.addExecutionEntry('collectW3cResourceTimings');
        }
        else {
            Performance_BasePerformanceLogger.collectW3cResourceTimings();
        }
    };
    Object.defineProperty(DeferredPerformanceLogger, "fullPageLoad", {
        get: function () {
            if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer() && !this._isProcessingInRealTime) {
                var pageTransitionType = this._rumOneData.PageTransitionType;
                if (pageTransitionType !== undefined) {
                    return pageTransitionType === 4 ;
                }
                return true;
            }
            else {
                return Performance_BasePerformanceLogger.fullPageLoad;
            }
        },
        set: function (isFullPageLoad) {
            if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer()) {
                this._deferExecutor.addExecutionEntry('setFullPageLoad', isFullPageLoad);
                this._rumOneData.PageTransitionType = isFullPageLoad ? 4  : 0 ;
            }
            else {
                Performance_BasePerformanceLogger.fullPageLoad = isFullPageLoad;
            }
        },
        enumerable: true,
        configurable: true
    });
    DeferredPerformanceLogger.startMarkForComponent = function (tag, startTime) {
        if (startTime === void 0) { startTime = this.now(); }
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer() && !this._isProcessingInRealTime) {
            if (this._shouldRunComponent(tag)) {
                Performance_BasePerformanceLogger.saveTempData(tag + 'ComponentStartTime', startTime);
            }
            this._deferExecutor.addExecutionEntry('startMarkForComponent', tag, startTime);
        }
        else {
            Performance_BasePerformanceLogger.startMarkForComponent(tag, startTime);
        }
    };
    DeferredPerformanceLogger.startMarkForApi = function (tag, startTime) {
        if (startTime === void 0) { startTime = this.now(); }
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer() && !this._isProcessingInRealTime) {
            if (this._shouldRunComponent(tag)) {
                Performance_BasePerformanceLogger.saveTempData(tag + 'ApiStartTime', startTime);
            }
            this._deferExecutor.addExecutionEntry('startMarkForApi', tag, startTime);
        }
        else {
            Performance_BasePerformanceLogger.startMarkForApi(tag, startTime);
        }
    };
    DeferredPerformanceLogger.endMarkForComponentWithTimestamp = function (tag, endTime) {
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer() && !this._isProcessingInRealTime) {
            if (this._shouldRunComponent(tag) && !this.readTempData(tag + 'ComponentEndTime')) {
                Performance_BasePerformanceLogger.saveTempData(tag + 'ComponentEndTime', endTime);
            }
            this._deferExecutor.addExecutionEntry('endMarkForComponentWithTimestamp', tag, endTime, true);
        }
        else {
            Performance_BasePerformanceLogger.endMarkForComponentWithTimestamp(tag, endTime);
        }
    };
    DeferredPerformanceLogger.endMarkForApi = function (tag, name, requestUrl, response, endTime) {
        if (endTime === void 0) { endTime = this.now(); }
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer() && !this._isProcessingInRealTime) {
            if (this.isRunning() && this.getApiStartTime(tag)) {
                Performance_BasePerformanceLogger.saveTempData(tag + 'ApiEndTime', endTime);
            }
            this._deferExecutor.addExecutionEntry('endMarkForApi', tag, name, requestUrl, response, endTime);
        }
        else {
            Performance_BasePerformanceLogger.endMarkForApi(tag, name, requestUrl, response, endTime);
        }
    };
    DeferredPerformanceLogger.getPerformanceData = function () {
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer() && !this._isProcessingInRealTime) {
            return this._rumOneData;
        }
        else {
            return Performance_BasePerformanceLogger.getPerformanceData();
        }
    };
    DeferredPerformanceLogger._getMaxDataFetchTime = function () {
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer() && !this._isProcessingInRealTime) {
            return this._rumOneData.DataFetch;
        }
        else {
            return Performance_BasePerformanceLogger._getMaxDataFetchTime();
        }
    };
    DeferredPerformanceLogger.isRunning = function () {
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer() && !this._isProcessingInRealTime) {
            return true;
        }
        else {
            return Performance_BasePerformanceLogger.isRunning();
        }
    };
    DeferredPerformanceLogger.getApplicationStartTime = function () {
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer() && !this._isProcessingInRealTime) {
            return undefined;
        }
        else {
            return Performance_BasePerformanceLogger.getApplicationStartTime();
        }
    };
    DeferredPerformanceLogger.addKeyMetric = function (keyMetric) {
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer()) {
            this._deferExecutor.addExecutionEntry('addKeyMetric', keyMetric);
        }
        else {
            Performance_BasePerformanceLogger.addKeyMetric(keyMetric);
        }
    };
    Object.defineProperty(DeferredPerformanceLogger, "scenarioId", {
        set: function (scenarioId) {
            if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer()) {
                this._scenarioId = scenarioId;
                this._deferExecutor.addExecutionEntry('setScenarioId', scenarioId);
            }
            else {
                Performance_BasePerformanceLogger.scenarioId = scenarioId;
            }
        },
        enumerable: true,
        configurable: true
    });
    DeferredPerformanceLogger.skipComponent = function (name) {
        Performance_BasePerformanceLogger.skipComponent(name);
        if (lib_TelemetrySettingsManager.shouldUsePerformanceBuffer() && !this._isProcessingInRealTime) {
            this._deferExecutor.addExecutionEntry('skipComponent', name);
        }
    };
    DeferredPerformanceLogger._processTempData = function () {
        for (var key in this._tempData) {
            if (this._tempData[key]) {
                this._logger.saveTempData(key, this._tempData[key]);
            }
        }
    };
    DeferredPerformanceLogger._deferExecutor = new sp_diagnostics_["_ExecutionQueue"]();
    DeferredPerformanceLogger._proxyEuplBreakDown = {};
    return DeferredPerformanceLogger;
}(Performance_BasePerformanceLogger));
/* harmony default export */ var Performance_DeferredPerformanceLogger = (DeferredPerformanceLogger_DeferredPerformanceLogger);

// CONCATENATED MODULE: ./lib/ABExperimentWrapper.js
var ABExperimentWrapper___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ABExperimentWrapper = (function (_super) {
    ABExperimentWrapper___extends(ABExperimentWrapper, _super);
    function ABExperimentWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ABExperimentWrapper;
}(odsp_utilities_bundle_["ABExperiment"]));
/* harmony default export */ var lib_ABExperimentWrapper = (ABExperimentWrapper);

// CONCATENATED MODULE: ./lib/AriaLogger.js


var AriaLogger_AriaLogger = (function () {
    function AriaLogger() {
    }
    AriaLogger.initialize = function (tenantToken, context) {
        var isSharePointDesktop = navigator.userAgent.indexOf('SharePointDesktop') > -1;
        var shouldUseAriaFlight = !sp_core_library_["_SPKillSwitch"].isActivated(AriaLogger.enableAriaSdkFlighting, '09/13/2018', 'enableAriaSdkFlighting');
        var useNewAriaSdk = sp_core_library_["_SPFlight"].isEnabled(1219 );
        if (isSharePointDesktop && shouldUseAriaFlight && useNewAriaSdk) {
            __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 39)).then(function (_a) {
                var ariaWebJsWrapper = _a.ariaWebJsWrapper;
                odsp_utilities_bundle_["AriaLoggerCore"].Init(tenantToken, context, ariaWebJsWrapper);
            });
        }
        else {
            __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 40)).then(function (_a) {
                var ariaWrapper = _a.ariaWrapper;
                odsp_utilities_bundle_["AriaLoggerCore"].Init(tenantToken, context, ariaWrapper);
            });
        }
    };
    AriaLogger.enableAriaSdkFlighting = sp_core_library_["Guid"].parse('5740154B-2963-4A26-9C3E-749D09151D3B');
    return AriaLogger;
}());
/* harmony default export */ var lib_AriaLogger = (AriaLogger_AriaLogger);

// CONCATENATED MODULE: ./lib/Api/BeaconHandlers.js

var BeaconHandlers_BeaconHandlers = (function () {
    function BeaconHandlers() {
    }
    BeaconHandlers._getResultTypeSuffix = function (resultType) {
        'use strict';
        if (resultType === odsp_utilities_bundle_["ResultTypeEnum"].Success) {
            return '.Success';
        }
        else if (resultType === odsp_utilities_bundle_["ResultTypeEnum"].Failure) {
            return '.Failure';
        }
        else if (resultType === odsp_utilities_bundle_["ResultTypeEnum"].ExpectedFailure) {
            return '.ExpectedFailure';
        }
        return '';
    };
    BeaconHandlers.prototype.ignoredEventsHandler = function (event) {
        return odsp_utilities_bundle_["Nav"].isTypeOf(event) || odsp_utilities_bundle_["PLTHttpRequest"].isTypeOf(event);
    };
    BeaconHandlers.prototype.qosEventNameHandler = function (event, currentName) {
        var name = currentName;
        if (event.data) {
            if (event.eventType === odsp_utilities_bundle_["ClonedEventType"].Start) {
                name += '.Start';
            }
            else if (event.eventType === odsp_utilities_bundle_["ClonedEventType"].End) {
                if (event.data.resultCode) {
                    name += '.' + event.data.resultCode;
                }
                name += BeaconHandlers._getResultTypeSuffix(event.data.resultType);
            }
            else {
                name += '.no_EventType';
            }
        }
        return name;
    };
    BeaconHandlers.prototype.qosEventExtraDataHandler = function (event, qosData) {
        return;
    };
    return BeaconHandlers;
}());
/* harmony default export */ var Api_BeaconHandlers = (BeaconHandlers_BeaconHandlers);

// CONCATENATED MODULE: ./lib/Telemetry.js







var Telemetry_Telemetry = (function () {
    function Telemetry() {
    }
    Telemetry.initialize = function (workloadName, settings) {
        if (!Telemetry._isInitialized) {
            this._workload = workloadName;
            lib_TelemetrySettingsManager.initialize(settings);
            var telemetrySettings = lib_TelemetrySettingsManager.settings;
            if (Telemetry._shouldEnable(settings.environment)) {
                var beaconHandler = new Api_BeaconHandlers();
                odsp_utilities_bundle_["BeaconCache"].addToLoggingManager(this._workload, beaconHandler);
                odsp_utilities_bundle_["Beacon"].addToLoggingManager();
            }
            window['disableBeaconLogToConsole'] = true; 
            Performance_DeferredPerformanceLogger.initializeDeferredHandlers();
            Telemetry._isInitialized = true;
            lib_ABExperimentWrapper.Init({
                userLoginName: telemetrySettings.loginName,
                farmLabel: telemetrySettings.farmLabel,
                siteSubscriptionId: telemetrySettings.siteSubscriptionId,
                siteId: telemetrySettings.siteId,
                webId: telemetrySettings.webId
            });
        }
    };
    Telemetry.registerTelemetryBackend = function () {
        sp_diagnostics_["_EngagementLogger"]._addHandler(odsp_utilities_bundle_["Engagement"]);
        sp_diagnostics_["_QosLogger"].instance.setLogger(odsp_utilities_bundle_["Qos"]); 
        Telemetry._initializeAria(this._workload);
    };
    Telemetry.startRealTimeProcessing = function () {
        Telemetry.registerTelemetryBackend();
        sp_diagnostics_["_EngagementLogger"].startRealTimeProcessing();
        sp_diagnostics_["_QosMonitor"].startRealTimeProcessing();
    };
    Object.defineProperty(Telemetry, "isInitialized", {
        get: function () {
            return this._isInitialized;
        },
        enumerable: true,
        configurable: true
    });
    Telemetry.updateSettings = function (settings) {
        lib_TelemetrySettingsManager.updateSettings(settings);
    };
    Telemetry._initializeAria = function (workloadName) {
        var settings = lib_TelemetrySettingsManager.settings;
        if (settings && Telemetry._shouldEnable(settings.environment)) {
            var token = Telemetry._getAriaToken(workloadName, settings.environment);
            if (token) {
                var authenticated = !!settings.loginName;
                lib_AriaLogger.initialize(token, {
                    isAuthenticated: authenticated,
                    accountType: authenticated ? odsp_utilities_bundle_["AccountType"].Business : odsp_utilities_bundle_["AccountType"].BusinessAnonymous,
                    market: settings.currentUICultureName,
                    session: settings.correlationId,
                    version: settings.version,
                    manifest: settings.clientSideApplicationId,
                    userId: settings.systemUserKey,
                    siteSubscriptionId: settings.siteSubscriptionId,
                    farmLabel: settings.farmLabel,
                    environment: settings.environment,
                    workload: workloadName,
                    completenessCallbackEndpoint: settings.completenessCallbackEndpoint
                });
            }
        }
    };
    Telemetry._shouldEnable = function (env) {
        return !!env && location.hostname !== 'localhost' && true;
    };
    Telemetry._getAriaToken = function (workloadName, env) {
        var workloadTokens = this._workloadsAriaTokens.default;
        if (workloadName.toLowerCase() === 'sphomenext') {
            workloadTokens = this._workloadsAriaTokens.sphome;
        }
        var token;
        switch (env.toLowerCase()) {
            case 'edog':
            case 'prodbubble':
                token = workloadTokens.ppeToken;
                break;
            default:
                token = workloadTokens.prodToken;
                break;
        }
        return token;
    };
    Telemetry._isInitialized = false;
    Telemetry._workloadsAriaTokens = {
        default: {
            ppeToken: '930040d5f2d14c649c8f4a22a062a2af-a8806003-7416-4799-9a3a-31de703592e5-6968',
            prodToken: '28f004ff2be44e8997a6f113043d583d-3f663b9a-4911-45b4-be6d-e450ca91e808-7336'
        },
        sphome: {
            ppeToken: '956b7a4e25714a6e9cd155df35b54244-719463e8-67d7-419b-b4ba-8dc8355ac519-6720',
            prodToken: '230b2349e5114b9bbfb4e41e8bb0bd31-a49e91ac-3be8-4d87-862e-63473299dfdf-7397'
        }
    };
    return Telemetry;
}());
/* harmony default export */ var lib_Telemetry = (Telemetry_Telemetry);

// CONCATENATED MODULE: ./lib/SPTelemetryLogHandler.js

var SPTelemetryLogHandler_SPTelemetryLogHandler = (function () {
    function SPTelemetryLogHandler() {
    }
    SPTelemetryLogHandler.prototype.verbose = function (source, message, scope) {
        var event = sp_diagnostics_["_LogEvent"].log(source, message, sp_diagnostics_["_LogLevel"].Verbose, scope);
        if (true) {
            console.log(event.toString()); 
        }
    };
    SPTelemetryLogHandler.prototype.info = function (source, message, scope) {
        var event = sp_diagnostics_["_LogEvent"].log(source, message, sp_diagnostics_["_LogLevel"].Info, scope);
        if (true) {
            console.info(event.toString()); 
        }
    };
    SPTelemetryLogHandler.prototype.warn = function (source, message, scope) {
        var event = sp_diagnostics_["_LogEvent"].log(source, message, sp_diagnostics_["_LogLevel"].Warning, scope);
        if (true) {
            console.warn(event.toString()); 
        }
    };
    SPTelemetryLogHandler.prototype.error = function (source, error, scope) {
        var event = sp_diagnostics_["_LogEvent"].log(source, error, sp_diagnostics_["_LogLevel"].Error, scope);
        if (true) {
            console.error(event.toString()); 
        }
    };
    return SPTelemetryLogHandler;
}());
/* harmony default export */ var lib_SPTelemetryLogHandler = (SPTelemetryLogHandler_SPTelemetryLogHandler);

// CONCATENATED MODULE: ./lib/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_EngagementLogger", function() { return sp_diagnostics_["_EngagementLogger"]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_QosMonitor", function() { return sp_diagnostics_["_QosMonitor"]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_PerformanceLogger", function() { return Performance_DeferredPerformanceLogger; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_BasePerformanceLogger", function() { return Performance_BasePerformanceLogger; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_Telemetry", function() { return lib_Telemetry; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_SPTelemetryLogHandler", function() { return lib_SPTelemetryLogHandler; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_PageMetricsLogger", function() { return Api_PageMetricsLogger; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_ABExperiment", function() { return lib_ABExperimentWrapper; });









/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ })
/******/ ])});;
//# sourceMappingURL=sp-telemetry.js.map
(function(){
if (!window.__setWebpackPublicPathLoaderSrcRegistry__) window.__setWebpackPublicPathLoaderSrcRegistry__={};
var scripts = document.getElementsByTagName('script');
if (scripts && scripts.length) {
  for (var i = 0; i < scripts.length; i++) {
    if (!scripts[i]) continue;
    var path = scripts[i].getAttribute('src');
    if (path) window.__setWebpackPublicPathLoaderSrcRegistry__[path]=true;
  }
}
})();


define("cc2cc925-b5be-41bb-880a-f0f8030c6aff_4.5.1",[],function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=57)}([function(e,t,n){"use strict";function r(e,t){function n(){this.constructor=e}E(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]]);return n}function a(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i}function i(e,t){return function(n,r){t(n,r,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function s(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,s)}u((r=r.apply(e,t||[])).next())})}function c(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,a&&(i=2&n[0]?a.return:n[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,n[1])).done)return i;switch(a=0,i&&(n=[2&n[0],i.value]),n[0]){case 0:case 1:i=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,a=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(i=u.trys,!(i=i.length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){u.label=n[1];break}if(6===n[0]&&u.label<i[1]){u.label=i[1],i=n;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(n);break}i[2]&&u.ops.pop(),u.trys.pop();continue}n=t.call(e,u)}catch(e){n=[6,e],a=0}finally{o=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,a,i,s,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s}function l(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}function f(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}}function d(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function p(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(d(arguments[t]));return e}function h(e){return this instanceof h?(this.v=e,this):new h(e)}function m(e,t,n){function r(e){l[e]&&(c[e]=function(t){return new Promise(function(n,r){f.push([e,t,n,r])>1||o(e,t)})})}function o(e,t){try{a(l[e](t))}catch(e){u(f[0][3],e)}}function a(e){e.value instanceof h?Promise.resolve(e.value.v).then(i,s):u(f[0][2],e)}function i(e){o("next",e)}function s(e){o("throw",e)}function u(e,t){e(t),f.shift(),f.length&&o(f[0][0],f[0][1])}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var c,l=n.apply(e,t||[]),f=[];return c={},r("next"),r("throw"),r("return"),c[Symbol.asyncIterator]=function(){return this},c}function g(e){function t(t,o){n[t]=e[t]?function(n){return(r=!r)?{value:h(e[t](n)),done:"return"===t}:o?o(n):n}:o}var n,r;return n={},t("next"),t("throw",function(e){throw e}),t("return"),n[Symbol.iterator]=function(){return this},n}function v(e){function t(t){r[t]=e[t]&&function(r){return new Promise(function(o,a){r=e[t](r),n(o,a,r.done,r.value)})}}function n(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=e[Symbol.asyncIterator];return o?o.call(e):(e="function"==typeof f?f(e):e[Symbol.iterator](),r={},t("next"),t("throw"),t("return"),r[Symbol.asyncIterator]=function(){return this},r)}function _(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function y(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function b(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.__extends=r,n.d(t,"__assign",function(){return S}),t.__rest=o,t.__decorate=a,t.__param=i,t.__metadata=s,t.__awaiter=u,t.__generator=c,t.__exportStar=l,t.__values=f,t.__read=d,t.__spread=p,t.__await=h,t.__asyncGenerator=m,t.__asyncDelegator=g,t.__asyncValues=v,t.__makeTemplateObject=_,t.__importStar=y,t.__importDefault=b;/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var E=function(e,t){return(E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},S=function(){return S=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},S.apply(this,arguments)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(12);t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(0).__exportStar(n(3),t)},function(e,t,n){"use strict";function r(e,t){return new this(e,s.ClonedEventType.Single,t)}function o(e){return new this(null,s.ClonedEventType.Single,e)}function a(e,t,n){var a=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(n,e),n.logData=t?r:o,n}(s.EventBase);return s.addEventProps(a.prototype,e,t||{},n),a}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),s=n(4);t.createSingleEvent=a},function(e,t,n){"use strict";function r(e,t,n,r){s.assign(e,t);var a={};for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var u=n[i],c=a[i]="number"==typeof u?{type:u}:u;c.definedInName=t.shortEventName,2===c.type&&(c.isMetric=!0)}e.metadata=r?o.__assign({},r.prototype.metadata,a):a}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=n(8),i=n(28),s=n(30),u=0;!function(e){e[e.Single=0]="Single",e[e.Start=1]="Start",e[e.End=2]="End"}(t.ClonedEventType||(t.ClonedEventType={}));var c;!function(e){e[e.NoParent=1]="NoParent"}(c=t.ValidationErrorType||(t.ValidationErrorType={}));!function(e){e[e.Consumer=0]="Consumer",e[e.ConsumerAnonymous=1]="ConsumerAnonymous",e[e.Business=2]="Business",e[e.BusinessAnonymous=3]="BusinessAnonymous",e[e.Unknown=4]="Unknown"}(t.AccountType||(t.AccountType={})),t.addEventProps=r;var l=new WeakMap,f=function(){function e(e,t,n){this.context={},this.validationErrors=0,this.data={},this.context=o.__assign({},this.addContext({})),this.id=u++,this.enabled=this._isEnabled(),n?this.parentId=n.id:this.requiresParent&&this._addValidationError(c.NoParent),this.startTime=e&&e.startTimeOverride||a.Manager.getTime(),this.vector=new i.CorrelationVector(n?n.vector:i.CorrelationVector.RootVector),e&&this._setData(e),this._logEvent(t)}return e.enabled=function(){return this.prototype._isEnabled()},e.isTypeOf=function(e){return e.eventName.indexOf(this.prototype.shortEventName+",")>=0},e.withManager=function(e){if(!e||e===a.Manager)return this;var t=l.get(e);t||(t=new WeakMap,l.set(e,t));var n=t.get(this);if(n)return n;var r=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t}(this);return r.prototype.manager=e,n=r,t.set(this,n),n},e.withData=function(e){if(!e)return this;var t="function"!=typeof e?function(t){return o.__assign({},e,t)}:e;return function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(n,e),n.prototype.addData=function(n){var r=o.__assign({},n,t(n));return o.__assign({},r,e.prototype.addData.call(this,r))},n}(this)},e.withContext=function(e){if(!e)return this;var t="function"!=typeof e?function(t){return o.__assign({},e,t)}:e;return function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(n,e),n.prototype.addContext=function(n){var r=o.__assign({},n,t(n));return o.__assign({},r,e.prototype.addContext.call(this,r))},n}(this)},e.from=function(e){return e?this.withManager(e.prototype.manager).withContext(function(t){return e.prototype.addContext(t)}).withData(function(t){return e.prototype.addData(t)}):this},e.prototype.addContext=function(e){return e},e.prototype.addData=function(e){return e},e.prototype._isEnabled=function(){return!this.samplingFeature||a.Manager.isFeatureEnabled(this.samplingFeature)},e.prototype._setData=function(e){for(var t=this.data,n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];if(o in this.metadata){var i=e[o];switch(typeof i){case"string":t[o]=a.Manager.cleanString(i);break;case"undefined":break;default:t[o]=i}}}s.assign(this.data,this.addData(this.data))},e.prototype._logEvent=function(e){this.manager.logEvent(this,e)},e.prototype._addValidationError=function(e){this.validationErrors=this.validationErrors|e,this.manager.logValidationError(this,e)},e}();t.EventBase=f;var d=f.prototype;d.eventName="EventBase,",d.shortEventName="EventBase",d.critical=!1,d.requiresParent=!0,d.manager=a.Manager},function(e,t,n){"use strict";function r(e){window.setTimeout(function(){L.raise(H,U,{error:e})},0)}function o(){}function a(e,t){e._value=t,e._setState(H.isPromise(t)?P:k)}function i(e,t,n,r,o,a){return{exception:e,error:t,promise:n,handler:a,id:r,parent:o}}function s(e,t,n,r){var o=n._isException,a=n._errorId;return i(o?t:null,o?null:t,e,a,n,r)}function u(e,t,n){var r=n._isException,o=n._errorId;return v(e,o,r),i(r?t:null,r?null:t,e,o,n)}function c(e,t){var n=++N;return v(e,n),i(null,t,e,n)}function l(e,t){var n=++N;return v(e,n,!0),i(t,null,e,n)}function f(e,t,n){g(e,{c:t,e:n})}function d(e,t,n,r){e._value=t,m(e,t,n,r),e._setState(M)}function p(e,t){var n=e._value,r=e._listeners;if(r){e._listeners=null;var o,a;for(o=0,a=r.length;o<a;o++){var i=r[o],s=i.c,u=i.promise;if(u){try{u._setCompleteValue(s?s(n):n)}catch(e){u._setExceptionValue(e)}u._state!==P&&u._listeners&&t.push(u)}else q.prototype.done.call(e,s)}}}function h(e,t){var n=e._value,r=e._listeners;if(r){e._listeners=null;var o,a;for(o=0,a=r.length;o<a;o++){var i=r[o],u=i.e,c=i.promise;if(c){try{u?(u.handlesOnError||m(c,n,s,e,u),c._setCompleteValue(u(n))):c._setChainedErrorValue(n,e)}catch(e){c._setExceptionValue(e)}c._state!==P&&c._listeners&&t.push(c)}else B.prototype.done.call(e,null,u)}}}function m(e,t,n,r,o){t instanceof Error&&t.message===j||L.raise(H,U,n(e,t,r,o))}function g(e,t){var n=e._listeners;n?n.push(t):n=[t],e._listeners=n}function v(e,t,n){e._isException=n||!1,e._errorId=t}function _(e,t,n,r){e._value=t,m(e,t,n,r),e._setState(I)}function y(e,t){var n;n=H.isPromise(t)?P:R,e._value=t,e._setState(n)}function b(e,t,n){var r=new z(e);return g(e,{promise:r,c:t,e:n}),r}function E(e){var t;return new H(function(n){t=window.setTimeout(n,e)},function(){t&&window.clearTimeout(t)})}function S(e,t){var n=function(){t.cancel()},r=function(){e.cancel()};return e.then(n),t.then(r,r),t}function w(e){return function(){for(var t=0,n=Object.keys(e);t<n.length;t++){var r=n[t];H.as(e[r]).cancel()}}}Object.defineProperty(t,"__esModule",{value:!0});var T,x,P,C,O,D,k,R,M,I,A=n(0),L=n(42),U="error",j="Canceled",N=1;T={name:"created",enter:function(e){e._setState(x)},cancel:o,done:o,then:o,_completed:o,_error:o,_notify:o,_setCompleteValue:o,_setErrorValue:o},x={name:"working",enter:o,cancel:function(e){e._setState(O)},done:f,then:b,_completed:a,_error:d,_notify:o,_setCompleteValue:y,_setErrorValue:_},P={name:"waiting",enter:function(e){var t=e._value;if(t instanceof z&&t._state!==I&&t._state!==R)g(t,{promise:e});else{var n=function(r){t._errorId?e._chainedError(r,t):(m(e,r,s,t,n),e._error(r))};n.handlesOnError=!0,t.then(e._completed.bind(e),n)}},cancel:function(e){e._setState(C)},done:f,then:b,_completed:a,_error:d,_notify:o,_setCompleteValue:y,_setErrorValue:_},C={name:"waiting_canceled",enter:function(e){e._setState(D);var t=e._value;H.is(t)&&t.cancel()},cancel:o,done:f,then:b,_completed:a,_error:d,_notify:o,_setCompleteValue:y,_setErrorValue:_},O={name:"canceled",enter:function(e){e._setState(D),e._cancelAction()},cancel:o,done:f,then:b,_completed:a,_error:d,_notify:o,_setCompleteValue:y,_setErrorValue:_},D={name:"canceling",enter:function(e){var t=new Error(j);t.name=t.message,t._handled=!0,e._value=t,e._setState(M)},cancel:o,done:o,then:o,_completed:o,_error:o,_notify:o,_setCompleteValue:o,_setErrorValue:o},k={name:"complete_notify",enter:function(e){if(e._listeners)for(var t=[e],n=void 0;t.length;)n=t.shift(),n._state._notify(n,t);e._setState(R)},cancel:o,done:function(e,t,n){return q.prototype.done.call(e,t,n)},then:function(e,t,n){return q.prototype.then.call(e,t,n)},_completed:o,_error:o,_notify:p,_setCompleteValue:o,_setErrorValue:o},R={name:"success",enter:function(e){e._cleanupAction()},cancel:o,done:function(e,t,n){return q.prototype.done.call(e,t,n)},then:function(e,t,n){return q.prototype.then.call(e,t,n)},_completed:o,_error:o,_notify:p,_setCompleteValue:o,_setErrorValue:o},M={name:"error_notify",enter:function(e){if(e._listeners)for(var t=[e],n=void 0;t.length;)n=t.shift(),n._state._notify(n,t);e._setState(I)},cancel:o,done:function(e,t,n){return B.prototype.done.call(e,t,n)},then:function(e,t,n){return B.prototype.then.call(e,t,n)},_completed:o,_error:o,_notify:h,_setCompleteValue:o,_setErrorValue:o},I={name:"error",enter:function(e){e._cleanupAction()},cancel:o,done:function(e,t,n){return B.prototype.done.call(e,t,n)},then:function(e,t,n){return B.prototype.then.call(e,t,n)},_completed:o,_error:o,_notify:h,_setCompleteValue:o,_setErrorValue:o};var F,B=function(){function e(e,t){void 0===t&&(t=c),this._value=e,m(this,e,t)}return e.prototype.cancel=function(){},e.prototype.done=function(e,t){var n=this._value;if(t)try{t.handlesOnError||m(null,n,s,this,t);var o=t(n);return void(H.is(o)&&o.done())}catch(e){n=e}n instanceof Error&&n.message===j||r(n)},e.prototype.then=function(e,t){if(!t)return this;var n,r=this._value;try{t.handlesOnError||m(null,r,s,this,t),n=new q(t(r))}catch(e){n=e===r?this:new V(e)}return n},e.prototype.catch=function(e){return this.then(void 0,e)},e}(),V=function(e){function t(t){return e.call(this,t,l)||this}return A.__extends(t,e),t}(B),q=function(){function e(e){if(H.isPromise(e)){var t=new z(void 0);return t._setCompleteValue(e),t}this._value=e}return e.prototype.cancel=function(){},e.prototype.done=function(e){if(e)try{var t=e(this._value);H.is(t)&&t.done()}catch(e){r(e)}},e.prototype.then=function(t){var n;try{var r=t?t(this._value):this._value;n=this._isSameValue(r)?this:new e(r)}catch(e){n=new V(e)}return n},e.prototype.catch=function(e){return this.then(void 0)},e.prototype._isSameValue=function(e){return e===this._value},e}(),H=function(){function e(e,t){this._init(e,t)}return Object.defineProperty(e,"cancel",{get:function(){return F||(F=new B(new Error(j)))},enumerable:!0,configurable:!0}),e.any=function(t){return new e(function(n,r){var o=Object.keys(t),a=o.length;0===a&&n();for(var i=0,s=o;i<s.length;i++){var u=s[i];!function(o){e.as(t[o]).then(function(){n({key:o,value:t[o]})},function(i){if(i instanceof Error&&i.name===j)return void(0==--a&&n(e.cancel));r({key:o,value:t[o]})})}(u)}},w(t))},e.race=function(t){return new e(function(n,r){var o=Object.keys(t),a=o.length;0===a&&n();for(var i=0,s=o;i<s.length;i++){var u=s[i];e.as(t[u]).then(n,function(t){if(t instanceof Error&&t.name===j)return void(0==--a&&n(e.cancel));r(t)})}},w(t))},e.as=function(t){return e.is(t)?t:new q(t)},e.is=function(t){return e.isPromise(t)&&"function"==typeof t.cancel},e.isPromise=function(e){return e&&"object"==typeof e&&"function"==typeof e.then},e.isCanceled=function(e){return e instanceof Error&&e.name===j},e.all=function(t){return new e(function(n,r){for(var o=Object.keys(t),a=Array.isArray(t)?[]:{},i=Array.isArray(t)?[]:{},s=o.length,u=function(){if(0==--s){var t=Object.keys(a);0===t.length?n(i):t.every(function(t){return e.isCanceled(a[t])})?n(e.cancel):r(a)}},c=0,l=o;c<l.length;c++){var f=l[c];!function(n){var r=t[n];void 0===r?s--:e.then(r,function(e){i[n]=e,u()},function(e){a[n]=e,u()})}(f)}0===s&&n(i)},w(t))},e.then=function(t,n,r){return e.as(t).then(n,r)},e.thenEach=function(t,n,r){for(var o=Array.isArray(t)?[]:{},a=0,i=Object.keys(t);a<i.length;a++){var s=i[a];o[s]=e.then(t[s],n,r)}return e.all(o)},e.serial=function(t){return t.reduce(function(e,t){return e.then(t)},e.wrap())},e.timeout=function(e,t){var n=E(e);return t?S(n,t):n},e.wrap=function(e){return new q(e)},e.resolve=function(t){return e.wrap(t)},e.wrapError=function(e){return new B(e)},e.reject=function(t){return e.wrapError(t)},e.prototype.cancel=function(){this._state.cancel(this),this._run()},e.prototype.done=function(e,t){this._state.done(this,e,t)},e.prototype.then=function(e,t){return this._state.then(this,e,t)},e.prototype.catch=function(e){return this.then(void 0,e)},e.prototype._init=function(e,t){this._oncancel=t,this._setState(T),this._run();try{e(this._completed.bind(this),this._error.bind(this))}catch(e){this._setExceptionValue(e)}},e.prototype._cancelAction=function(){if(this._oncancel)try{this._oncancel()}catch(e){}},e.prototype._cleanupAction=function(){this._oncancel=null},e.prototype._chainedError=function(e,t){var n=this._state._error(this,e,u,t);return this._run(),n},e.prototype._completed=function(e){var t=this._state._completed(this,e);return this._run(),t},e.prototype._error=function(e){var t=this._state._error(this,e,c);return this._run(),t},e.prototype._setState=function(e){this._nextState=e},e.prototype._setCompleteValue=function(e){this._state._setCompleteValue(this,e),this._run()},e.prototype._setChainedErrorValue=function(e,t){var n=this._state._setErrorValue(this,e,u,t);return this._run(),n},e.prototype._setExceptionValue=function(e){var t=this._state._setErrorValue(this,e,l);return this._run(),t},e.prototype._run=function(){for(;this._nextState;)this._state=this._nextState,this._nextState=null,this._state.enter(this)},e.prototype._isSameValue=function(e){return e===this._value},e}();L.declare(H,U);var z=function(e){function t(t){var n=e.call(this)||this;return n._creator=t,n._initThen(),n}return A.__extends(t,e),t.prototype._init=function(){},t.prototype._cancelAction=function(){this._creator&&this._creator.cancel()},t.prototype._cleanupAction=function(){this._creator=null},t.prototype._initThen=function(){this._setState(T),this._run()},t}(H),Q=function(e){function t(t){var n=e.call(this)||this;return n._oncancel=t,n._initSignal(),n}return A.__extends(t,e),t.prototype._init=function(){},t.prototype._cancelAction=function(){this._oncancel&&this._oncancel()},t.prototype._cleanupAction=function(){this._oncancel=null},t.prototype._initSignal=function(){this._setState(T),this._run()},t}(H);t.SignalPromise=Q,t.CancelablePromise=H,t.default=t.CancelablePromise},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r;!function(e){e[e.none=0]="none",e[e.session=1]="session",e[e.local=2]="local",e[e.sharedMemory=3]="sharedMemory"}(r||(r={})),t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this.R=0,this.G=0,this.B=0,this.A=e.maxComponent}return e.clone=function(t){return e.fromRgba(t.R,t.G,t.B,t.A)},e.equals=function(e,t){var n=!e,r=!t;return n||r?n&&r:e.R===t.R&&e.G===t.G&&e.B===t.B&&e.A===t.A},e.fromRgba=function(t,n,r,o){var a=new e;return a.R=Math.round(t),a.G=Math.round(n),a.B=Math.round(r),a.A=null!=o?Math.round(o):e.maxComponent,a},e.fromRgbaString=function(t){var n=new e;if(/^rgb.+/.test(t)){var r=t.match(/[\d.]+/g);n=e.fromRgba(Number(r[0]),Number(r[1]),Number(r[2]),4===r.length?Number(r[3])*e.maxComponent:null)}return n},e.fromHtmlColor=function(t){function n(e,t,n){return parseInt(e.charAt(t)+e.charAt(n),16)}var r=new e;if("string"==typeof t&&"#"===t.charAt(0))switch(t.length){case 9:r.A=n(t,1,2),r.R=n(t,3,4),r.G=n(t,5,6),r.B=n(t,7,8);break;case 7:r.R=n(t,1,2),r.G=n(t,3,4),r.B=n(t,5,6);break;case 4:r.R=n(t,1,1),r.G=n(t,2,2),r.B=n(t,3,3)}else/^rgb.+/.test(t)&&(r=e.fromRgbaString(t));return r},e.toHtmlString=function(t,n){function r(t){var n=Number(t);if(!(n>=0&&n<=e.maxComponent))throw new Error("Argument must be a Number in [0, 255]");var r=n.toString(16);return n<16&&(r="0"+r),r}return t.A<e.maxComponent&&!n?"rgba("+t.R.toString(10)+", "+t.G.toString(10)+", "+t.B.toString(10)+", "+(t.A/e.maxComponent).toFixed(2)+")":"#"+(n?r(t.A):"")+r(t.R)+r(t.G)+r(t.B)},e.maxComponent=255,e}();t.default=r},function(e,t,n){"use strict";function r(){return window.performance&&window.performance.timing&&window.performance.timing.navigationStart?new Date(window.performance.timing.navigationStart):new Date}function o(){return new s}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=n(27),s=function(){function e(){this._handlers=[],this._buffer=[],this._validationLoggers=[],this._featureEnablers=[]}return Object.defineProperty(e.prototype,"startDate",{get:function(){return r()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"startTime",{get:function(){return this.startDate.getTime()},enumerable:!0,configurable:!0}),e.prototype.getTime=function(){return(new Date).getTime()},e.prototype.cleanString=function(e){return e},e.prototype.addLogHandler=function(e){var t=this._handlers,n=this._buffer;return t.push(e),n.slice()},e.prototype.removeLogHandler=function(e){for(var t=this._handlers,n=0;n<t.length;n++)if(t[n]===e){t.splice(n,1);break}},e.prototype.logEvent=function(e,t){var n=this._buffer,r=this._handlers,o=Object.freeze({data:i.deepCopy(e.data),context:a.__assign({},e.context),id:e.id,enabled:e.enabled,critical:e.critical,endTime:e.endTime,eventName:e.eventName,shortEventName:e.shortEventName,parentId:e.parentId,startTime:e.startTime,eventType:t,metadata:e.metadata,vector:e.vector,validationErrors:e.validationErrors,isEventTypePrefixingDisabled:e.isEventTypePrefixingDisabled});n.push(o),n.length>100&&(n.splice(1,1/0),0===r.length&&new Error("Logging buffer overflow hit before any logging handler was registered"));for(var s=0;s<r.length;s++)try{r[s](o)}catch(e){}},e.prototype.addValidationErrorLogger=function(e){this._validationLoggers.push(e)},e.prototype.removeValidationErrorLogger=function(e){var t=this._validationLoggers,n=t.indexOf(e);n>-1&&t.splice(n,1)},e.prototype.logValidationError=function(e,t){for(var n=this._validationLoggers,r=0,o=n;r<o.length;r++){var a=o[r];try{a(e,t)}catch(e){}}},e.prototype.isFeatureEnabled=function(e){for(var t=this._featureEnablers,n=0,r=t;n<r.length;n++){if((0,r[n])(e))return!0}return!1},e.prototype.addFeatureEnabler=function(e){this._featureEnablers.push(e)},e.prototype.removeFeatureEnabler=function(e){var t=this._featureEnablers,n=t.indexOf(e);n>-1&&t.splice(n,1)},e.prototype.getStack=function(){var e;try{window.______ExpectedError______()}catch(t){e=t}return e.stack},e}();t.createManager=o,t.Manager=function(){return window.ODSP_TELEMETRY_MANAGER=window.ODSP_TELEMETRY_MANAGER||o()}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(0).__exportStar(n(31),t);var r=n(31);t.default=r.Engagement},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(0).__exportStar(n(32),t);var r=n(32);t.default=r.Qos},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e[e.Success=0]="Success",e[e.Failure=1]="Failure",e[e.ExpectedFailure=2]="ExpectedFailure"}(t.ResultTypeEnum||(t.ResultTypeEnum={}))},function(e,t,n){"use strict";function r(e,t){h.push({name:t,message:e})}function o(e,t,n){if(e&&!s(e)){for(var r,o=i(e),a=(e&&"object"==typeof e&&"stack"in e&&e.stack?e.stack:"");r=h.popOldest();)l.Verbose.logData(r);n&&n.eventName?c.QosError.logData({name:n.eventName,resultCode:n.resultCode,resultType:n.resultType,extraData:t||{},message:o,stack:a}):u.CaughtError.logData({extraData:t||{},message:o,stack:a})}}function a(e,t,n,r){o(e,void 0,{eventName:t,resultCode:n,resultType:r})}function i(e){var t="";return e&&("object"==typeof e&&"message"in e?t=e.message:"object"==typeof e&&"description"in e?t=e.description:"object"==typeof e?t=d.safeSerialize(e):e.toString&&(t=e.toString())),t}function s(e){return e===p||!!e&&"object"==typeof e&&"name"in e&&e.name===p||!!e&&"object"==typeof e&&"message"in e&&e.message===p}Object.defineProperty(t,"__esModule",{value:!0});var u=n(13),c=n(17),l=n(18),f=n(61),d=n(19),p="Canceled",h=new f.CircularBuffer(50);t.verbose=r,t.logError=o,t.log=a,t.getErrorMessage=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=n(34);t.CaughtError=r.createSingleEvent({eventName:"CaughtError,Trace,",shortEventName:"CaughtError",critical:!0,requiresParent:!1},{stack:1,extraData:4},o.Trace)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(66);t.Beacon=r.createPairedEvent({eventName:"Beacon,",shortEventName:"Beacon",requiresParent:!1},{name:1,status:1,success:3,retryCount:2,totalRetries:2,eventCount:2}),t.default=t.Beacon},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),o=function(){function e(t,n){if(void 0===n&&(n=r.default.none),e.init(),this.dataStoreKey=t,this.defaultCachingType=n,n===r.default.none)this.dataStore={};else{void 0===e._dataStore[this.dataStoreKey]&&(e._dataStore[this.dataStoreKey]={}),this.dataStore=e._dataStore[this.dataStoreKey]}}return e.hasStorageType=function(t){switch(e.init(),t){case r.default.none:case r.default.sharedMemory:return!0;case r.default.session:return!!e._sessionStorage;case r.default.local:return!!e._localStorage}return!1},e.init=function(){if(!e._initialized){try{"localStorage"in window&&window.localStorage&&e.testStorage(window.localStorage)&&(e._localStorage=window.localStorage)}catch(e){}try{"sessionStorage"in window&&window.sessionStorage&&e.testStorage(window.sessionStorage)&&(e._sessionStorage=window.sessionStorage)}catch(e){}null==e._localStorage&&(e._localStorage=e._sessionStorage),e._initialized=!0}},e.testStorage=function(e){var t="BrowserStorageTest",n=!1;try{e.setItem(t,"1"),"1"===e.getItem(t)&&(n=!0),e.removeItem(t)}catch(e){}return n},e.prototype.setValue=function(e,t,n,r){void 0===r&&(r=!0),e=r?this.normalizeKey(e):e,this.dataStore[e]=t;var o=this.getStorage(n);if(o)try{var a=[],i=JSON.stringify(t,function(e,t){if("object"==typeof t&&null!==t){if(-1!==a.indexOf(t))return;a.push(t)}return t});a=null,o.setItem(this.dataStoreKey+e,i)}catch(e){}},e.prototype.getValue=function(e,t,n){void 0===n&&(n=!0),e=n?this.normalizeKey(e):e;var r=this.dataStore[e],o=this.getStorage(t);if(void 0===r&&o){var a=o.getItem(this.dataStoreKey+e);if(a)try{r=JSON.parse(a),this.dataStore[e]=r}catch(e){r=void 0}}return r},e.prototype.remove=function(e,t,n){void 0===n&&(n=!0),e=n?this.normalizeKey(e):e;var r=this.getStorage(t);r&&r.removeItem(this.dataStoreKey+e),delete this.dataStore[e]},e.prototype.getStorage=function(t){switch(t||this.defaultCachingType){case r.default.none:case r.default.sharedMemory:return null;case r.default.session:return e._sessionStorage;case r.default.local:return e._localStorage}return null},e.prototype.normalizeKey=function(e){return e&&e.toLowerCase()||""},e._sessionStorage=null,e._localStorage=null,e._dataStore={},e._initialized=!1,e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(0).__exportStar(n(4),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=n(13),a=n(11);t.ResultTypeEnum=a.ResultTypeEnum,t.QosError=r.createSingleEvent({eventName:"QosError,CaughtError,Trace,",shortEventName:"QosError",critical:!0},{name:{isKey:!0,type:1},resultCode:1,resultType:{typeRef:a.ResultTypeEnum,type:6}},o.CaughtError)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=n(34);t.Verbose=r.createSingleEvent({eventName:"Verbose,Trace,",shortEventName:"Verbose",requiresParent:!1},{name:{isKey:!0,type:1}},o.Trace)},function(e,t,n){"use strict";function r(e){var t;try{var n=[];t=JSON.stringify(e,function(e,t){return t===window?"[window]":t instanceof HTMLElement?"[HTMLElement]":"function"==typeof t?"[function]":"object"==typeof t?null===t?t:-1===n.indexOf(t)?(n.push(t),t):"[circular]":t})}catch(e){t=JSON.stringify("[object]")}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.safeSerialize=r},function(e,t,n){"use strict";function r(e){return null===e||void 0===e}Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(35),i=n(36),s=n(37),u=n(21),c=n(65);!function(e){e[e.Incomplete=1]="Incomplete",e[e.ReadyToUpload=2]="ReadyToUpload",e[e.Uploaded=3]="Uploaded",e[e.TimeOut=4]="TimeOut",e[e.Skipped=5]="Skipped"}(o||(o={}));var l=function(){function e(e,t,n,r,o,a,i){this.url=e,this.duration=t,this.correlationId=n,this.status=r,this.startTime=o,this.endTime=a,this.name=i}return e}();t.APICallPerformanceData=l;var f=["EUPL","ScenarioId"],d=/^[a-zA-Z0-9](([a-zA-Z0-9|_|\.]){0,98}[a-zA-Z0-9])?$/,p=function(){function e(e,t,n,r,o,a,i){this.controlId=e,this.startTime=t,this.endTime=n,this.renderTimeCalculator=r,this.renderTimeRequiredDataChecker=o,this.ignoreForEUPL=void 0===a||a,this.needFlatten=void 0!==i&&i}return e}();t.ControlPerformanceData=p;var h={checkInterval:100,error_timeout:3e4,max_markers:100},m=function(){function e(e,t,n){void 0===n&&(n=h),this._keyMetrics=f,this.async=new a.default(this),this.dataStartTime=Number((new Date).getTime()),this._rumoneData={},this.dataState=o.Incomplete,this.controls=[],this.apis=[],this.euplBreakDown={},this.serverMetrics={},this.isW3cTimingCollected=!1,this.isW3cResourceTimingCollected=!1,this.tempData={},this._emergencyUpdateFunc=this._emergencyUpload.bind(this),this._name=e,this.loggingFunc=t,this._config=n,this.setPerfDataTimer(),this._platformDetection=new u.default,this._hookUnloadEvent()}return e.getRUMOneLogger=function(t,n,r){void 0===t&&(t="__default_rumone__"),void 0===r&&(r=h);var o=n||function(e,t){s.RUMOneDataUpload.logData({streamName:e,dictionary:t})};if(!e.Loggers[t])try{var a=new e(t,o,r);"__default_rumone__"===t&&(e.rumOneLogger=a),e.Loggers[t]=a}catch(e){}return e.Loggers[t]},Object.defineProperty(e.prototype,"KeyMetrics",{get:function(){return this._keyMetrics},enumerable:!0,configurable:!0}),e.prototype.getPerformanceData=function(){return this._rumoneData},e.prototype.resetLogger=function(){this._emergencyUpload(),this.dataStartTime=(new Date).getTime(),this.dataState=o.Incomplete,this.isW3cTimingCollected=!1,this.isW3cResourceTimingCollected=!1,this.controls=[],this.apis=[],this.tempData={},this._rumoneData={},this._excludePageData=!1,this._waitOnAddingExpectedControl=!1,this._keyMetrics=f,this.clearPerfDataTimer(),this.setPerfDataTimer(),this.euplBreakDown={},this.serverMetrics={},this.clearResourceTimings(),c.clearMarks(this._getOwnMakers().map(function(e){return e.name})),e._markers[this._name]=[],this._unhookUnloadEvent(),this._hookUnloadEvent(),this.logMessageInConsole("Reset performance Logger Done")},e.prototype.excludePageForPerfData=function(){this._excludePageData=!0},e.prototype.getPerformanceDataPropertyValue=function(e){return e&&this._rumoneData[e]},e.prototype.setPerformanceDataPropertyValue=function(e,t){return e&&d.test(e)?(this._rumoneData[e]=t,!0):(console.error("key "+e+" does not confrim to the Regex "+d),!1)},e.prototype.addExpectedControl=function(e){var t=this._normalizeControl(e);this.expectingControl(e)?this.controls.filter(function(e){return e.controlId===t.controlId})[0].ignoreForEUPL=t.ignoreForEUPL:this.controls.push(t)},e.prototype.expectingControl=function(e){var t=this._normalizeControl(e);return this.controls.filter(function(e){return e.controlId===t.controlId}).length>0},e.prototype.writeServerCorrelationId=function(e){this._rumoneData.ServerCorrelationId=this._rumoneData.ServerCorrelationId||e},e.prototype.writeServerUrl=function(e){this._rumoneData.ServerUrl||(this._rumoneData.ServerUrl=e||window.location.href)},e.prototype.writeServerSideLatency=function(e,t){this.isCollected("ServerRequestDuration")||(this._rumoneData.ServerRequestDuration=e,this._rumoneData.IISLatency=t)},e.prototype.writeControlPerformanceData=function(e){if(e){var t=this.controls.filter(function(t){return t.controlId===e.controlId})[0];if(t)t.data||(t.data=e);else{var n={controlId:e.controlId,data:e,ignoreForEUPL:e.ignoreForEUPL};this.controls.push(n)}}},e.prototype.writeAPICallPerformanceData=function(e){e&&this.apis.push(e)},e.prototype.readAPICallPerformanceData=function(){return this.apis},e.prototype.writeAppCache=function(e){this.isCollected("AppCache")||(this._rumoneData.AppCache=e)},e.prototype.writePageTransitionType=function(e,t){this.isCollected("PageTransitionType")&&!t||e!==i.default.fullPageLoad&&e!==i.default.none&&e!==i.default.onePageAppNavigation||(this._rumoneData.PageTransitionType=e)},e.prototype.writeScenarioId=function(e,t){this.isCollected("ScenarioId")&&!t||(this._rumoneData.ScenarioId=e)},e.prototype.collectW3CPerfTimings=function(){if(!this.isW3cTimingCollected){var e=["navigationStart","unloadEventStart","unloadEventEnd","fetchStart","redirectStart","redirectEnd","domainLookupStart","domainLookupEnd","connectStart","secureConnectionStart","connectEnd","requestStart","responseStart","responseEnd","domLoading","domComplete","loadEventStart","loadEventEnd"],t=performance&&performance.timing;if(t){for(var n=0;n<e.length;n++){var r=t[e[n]];r&&this._logRUMOneData(this.getW3cTimingName(e[n]),Number(r))}this.isW3cTimingCollected=!0}}},e.prototype.collectW3cResourceTimings=function(){if(window.document&&!this.isW3cResourceTimingCollected&&performance&&performance.getEntriesByType){for(var e=performance.getEntriesByType("resource"),t=document.getElementsByTagName("iframe"),n=0;n<t.length;n++){var r=null;try{r=t[n].contentWindow.performance}catch(e){}r&&r.getEntriesByType&&e.concat(r.getEntriesByType("resource"))}var o={};o.SharePoint=function(e){return/\.sharepoint\.com|\.spoppe\.com/i.test(e.name)},o.CDN=function(e){return/(cdn(ppe)?|static(ppe)?)\.sharepointonline\.com|\.akamaihd\.net/i.test(e.name)},o.ThirdParty=function(e){return!o.SharePoint(e)&&!o.CDN(e)};var a={};a.ASPX=function(e){return/\.aspx/i.test(e.name)},a.JS=function(e){return/script/i.test(e.initiatorType)},a.CSS=function(e){return/link|css/i.test(e.initiatorType)},a.IMG=function(e){return/img/i.test(e.initiatorType)};for(var i=Object.keys(o),n=0;n<i.length;n++){var s=i[n],u=this.categorizeResourceRequests(e,{from:o[s],requestType:null});this._logRUMOneData(s+"RequestCountTotal",u.length);for(var c=Object.keys(a),l=0;l<c.length;l++){var f=c[l];this._logRUMOneData(s+"RequestCount"+f,this.categorizeResourceRequests(u,{from:null,requestType:a[f]}).length)}if(u.length>0){this._logRUMOneData(s+"RequestDownloadTime",Math.round(u.reduce(function(e,t){return e+t.duration},0)/u.length));var d=JSON.stringify(u.map(function(e){return{name:e.name.split("/").map(function(e){return e.split("?")[0]}).filter(function(e){return e&&e.length>0}).slice(-1)[0].replace(/\(.*?\)/g,"()"),startTime:Math.round(e.startTime),duration:Math.round(e.duration),transferSize:e.transferSize||0}}));this._logRUMOneData(s+"RequestNames",d)}}this.isW3cResourceTimingCollected=!0}},e.prototype.saveTempData=function(e,t){this.tempData[e]=t},e.prototype.readTempData=function(e){return this.tempData[e]},e.prototype.writeRenderTime=function(e,t){this.isCollected("RenderTime")&&!t||(this._rumoneData.RenderTime=e)},e.prototype.writePreRenderTime=function(e){this.isCollected("PreRender")||(this._rumoneData.PreRender=e)},e.prototype.writePostRenderTime=function(e){this.isCollected("PostRender")||(this._rumoneData.PostRender=e)},e.prototype.writeDataFetchTime=function(e,t){this.isCollected("DataFetch")&&!t||(this._rumoneData.DataFetch=e)},e.prototype.isRunning=function(){return!(this.dataState===o.Uploaded||this.dataState===o.TimeOut||this.dataState===o.Skipped)},e.prototype.writeEUPLBreakdown=function(e,t){if(e)try{var n=JSON.parse(e);for(var r in n)n.hasOwnProperty(r)&&this.addEUPLBreakdown(r,n[r],t)}catch(e){this.logMessageInConsole("Failed to write EUPL breakdown data:"+e.toString())}},e.prototype.addEUPLBreakdown=function(e,t,n){if(e&&!r(t)){if(r(this.euplBreakDown[e])||n){var o=this._isBreakdownValue(t)?t.data:t;this.euplBreakDown[e]=o}this._isBreakdownValue(t)&&t.needFlatten&&this._logRUMOneData(e,t.data)}},e.prototype.readEUPLBreakdown=function(e){return e?this.euplBreakDown[e]:this.euplBreakDown},e.prototype.addFlights=function(e){if(e&&e.length>0){for(var t=JSON.parse(this.getPerformanceDataPropertyValue("Flights")||"[]"),n=0;n<e.length;n++){var r=e[n];r&&-1===t.indexOf(r)&&t.push(r)}this._rumoneData.Flights=JSON.stringify(t)}},e.prototype.addServerMetrics=function(e,t){if(e)for(var n in e)n&&!r(e[n])&&(r(this.serverMetrics[n])||t)&&(this.serverMetrics[n]=e[n])},e.prototype.writeServerVersion=function(e){this._rumoneData.SharePointServerVersion=e},e.prototype.readControlPerformanceData=function(){return this.controls.filter(function(e){return!!e.data}).map(function(e){return e.data})},e.prototype.mark=function(t){(e._markers[this._name]=e._markers[this._name]||[]).push(t),c.mark(t)},e.prototype.now=function(){return performance&&performance.now?Math.round(performance.now()):NaN},e.prototype.registerEUPLComputedHandler=function(e){this._EUPLComputedHandler=e},e.prototype.registerErrorHandler=function(e){},e.prototype.getMarkerTime=function(e){return c.getMarkerTime(e)},e.prototype.addExpectedKeyMetric=function(e){this._keyMetrics&&this._keyMetrics.indexOf(e)<=-1&&this._keyMetrics.push(e)},Object.defineProperty(e.prototype,"waitOnAddingExpectedControl",{set:function(e){this._waitOnAddingExpectedControl=e},enumerable:!0,configurable:!0}),e.prototype._logRUMOneData=function(e,t){e&&(this._rumoneData[e]=t)},e.prototype.clearResourceTimings=function(){performance&&performance.clearResourceTimings&&performance.clearResourceTimings()},e.prototype._isBreakdownValue=function(e){return void 0!==e.needFlatten},e.prototype.collectMarks=function(){var e=this,t={},n=0;this._getOwnMakers().forEach(function(r){if(n<e._config.max_markers){var o=r.name.substr(c.MARKER_PREFIX.length)+".mark"+n++;t[o]=Math.round(r.startTime)}}),this.writeEUPLBreakdown(JSON.stringify(t))},e.prototype._getOwnMakers=function(){var t=this,n=e._markers,r=[].concat.apply([],Object.keys(n).filter(function(e){return n.hasOwnProperty(e)&&e!==t._name}).map(function(e){return n[e]}));return c.getAllMarks().filter(function(e){return-1===r.indexOf(e.name)})},e.prototype.logMessageInConsole=function(e){this.isRUMOneDebuggingEnabled&&console.log(e)},Object.defineProperty(e.prototype,"isRUMOneDebuggingEnabled",{get:function(){try{if("sessionStorage"in window&&window.sessionStorage){var e=window.sessionStorage.enableRUMOneDebugging;return e&&"true"===e.toLowerCase()&&"undefined"!=typeof console&&!!console}}catch(e){}return!1},enumerable:!0,configurable:!0}),e.prototype.logObjectForDebugging=function(e,t){if(this.isRUMOneDebuggingEnabled){var n=this._name+" "+e+" : "+JSON.stringify(t);console.log(n)}},e.prototype.isCollected=function(e){return!r(this.getPerformanceDataPropertyValue(e))},e.prototype._normalizeControl=function(e){return"string"==typeof e?{controlId:e,ignoreForEUPL:!1}:e},e.prototype.setPerfDataTimer=function(){this.perfDataTimer=this.async.setTimeout(this.loopForDataCompleteness,this._config.checkInterval)},e.prototype.clearPerfDataTimer=function(){r(this.perfDataTimer)||(this.async.clearTimeout(this.perfDataTimer),this.perfDataTimer=null)},e.prototype._hookUnloadEvent=function(){window.addEventListener&&window.addEventListener("beforeunload",this._emergencyUpdateFunc)},e.prototype._unhookUnloadEvent=function(){window.removeEventListener&&window.removeEventListener("beforeunload",this._emergencyUpdateFunc)},e.prototype.categorizeResourceRequests=function(e,t){for(var n=[],r=0;r<e.length;r++){var o=e[r];t.from&&!t.from(o)||t.requestType&&!t.requestType(o)||n.push(o)}return n},e.prototype.collectSupplementaryData=function(){this.setAPIDataToRUMOne(),this.collectMarks(),this.writeServerUrl(null),this.setBrowseInfo(),this.setReferrer(),this._collectMemoryData(),this._rumoneData.ServerMetrics=JSON.stringify(this.serverMetrics),this._rumoneData.EUPLBreakdown=JSON.stringify(this.euplBreakDown)},e.prototype.loopForDataCompleteness=function(){if(this.clearPerfDataTimer(),!this._waitOnAddingExpectedControl){if(this.isRUMOneDebuggingEnabled&&(this.logMessageInConsole("===================================================================="),this.logObjectForDebugging("RUMONE: ",this._rumoneData),this.logObjectForDebugging("RUMOne DataState: ",String(this.getReadableDataState(this.dataState))),this.logObjectForDebugging("Controls: ",this.controls),this.logObjectForDebugging("API Performance Data: ",this.apis),this.logObjectForDebugging("Temp Data: ",this.tempData),this.logObjectForDebugging("EUPLBreakdown: ",this.euplBreakDown),this.logObjectForDebugging("ServerMetrics: ",this.serverMetrics),this.logMessageInConsole("====================================================================\n\n")),!this.isRunning())return;if(this._updateState(),this.dataState===o.ReadyToUpload)return void this.finishPerfDataUpload();this.processControlRenderTime(),this.readyToComputeEUPL()&&(this.setEUPL(),this._updateState())}this._checkTimeout(),this.isRunning()&&this.setPerfDataTimer()},e.prototype._checkTimeout=function(){if(this.isRunning()&&this.dataState!==o.ReadyToUpload&&!(Number((new Date).getTime())-Number(this.dataStartTime)<=this._config.error_timeout)){this.dataState=o.TimeOut;var e={reason:"TimeOut",details:{MissingMetrics:this._getMissedKeyMetrics(),MissingControls:this._getMissedControls()}};this._rumoneData.RUMOneError=JSON.stringify(e),this.finishPerfDataUpload()}},e.prototype._updateState=function(){this.dataState=0===this._getMissedKeyMetrics().length&&0===this._getMissedControls().length?o.ReadyToUpload:o.Incomplete},e.prototype._getMissedKeyMetrics=function(){for(var e=[],t=0;t<this._keyMetrics.length;t++){r(this.getPerformanceDataPropertyValue(this._keyMetrics[t]))&&e.push(this._keyMetrics[t])}return e},e.prototype._getMissedControls=function(){return this.controls.filter(function(e){return!e.data||!e.data.renderTime})},e.prototype._emergencyUpload=function(){this.isRunning()&&0===this._getMissedKeyMetrics().length&&this.finishPerfDataUpload(!0)},e.prototype.finishPerfDataUpload=function(e){this.writeControlDataToRUMOne(),this.collectSupplementaryData();try{this.uploadPerfData(e),this.isRUMOneDebuggingEnabled&&(this.logMessageInConsole("Final Data uploaded"),this.logObjectForDebugging("RUMONE: ",this._rumoneData),this.logObjectForDebugging("RUMOne DataState: ",this.getReadableDataState(this.dataState)))}catch(e){!function(e){"undefined"!=typeof console&&Boolean(console)&&console.error(e)}("PerformanceLogger error writing RUMOne data: "+e)}finally{this._unhookUnloadEvent()}},e.prototype.getReadableDataState=function(e){for(var t in o)if(e===Number(o[t]))return t;return"NaN"},e.prototype.writeControlDataToRUMOne=function(){if(this.controls&&this.controls.length){var e=this.controls.slice(0).filter(function(e){return!!e.data&&!!e.data.renderTime&&!e.ignoreForEUPL});e.sort(function(e,t){return t.data.renderTime-e.data.renderTime});for(var t=0;t<10&&t<e.length;t++)this._logRUMOneData("Control"+(t+1)+"Id",e[t].controlId),this._logRUMOneData("Control"+(t+1)+"RenderTime",e[t].data.renderTime);var n={};this.controls.slice(0).filter(function(e){return!!e.data&&!!e.data.renderTime&&!!e.ignoreForEUPL}).forEach(function(e){n[e.controlId]={data:e.data.renderTime,needFlatten:e.data.needFlatten}}),Object.keys(n).length>0&&this.writeEUPLBreakdown(JSON.stringify(n),!0)}},e.prototype.processControlRenderTime=function(){for(var e=0,t=this.controls;e<t.length;e++){var n=t[e];n.data&&!n.data.renderTime&&n.data.renderTimeRequiredDataChecker(this,n.data)&&(n.data.renderTime=n.data.renderTimeCalculator(this,n.data))}},e.prototype.readyToComputeEUPL=function(){for(var e=this.controls.filter(function(e){return!e.ignoreForEUPL}),t=e.length>0,n=0,r=e;n<r.length;n++){var o=r[n];if(!o.data||!o.data.renderTime){t=!1;break}}return t},e.prototype.setEUPL=function(){if(!this.isCollected("EUPL")){for(var e=0,t=0,n=this.controls;t<n.length;t++){var r=n[t];!r.ignoreForEUPL&&r.data&&r.data.renderTime&&e<r.data.renderTime&&(e=r.data.renderTime)}this._rumoneData.EUPL=e,"function"==typeof this._EUPLComputedHandler&&this._EUPLComputedHandler(e)}},e.prototype.setBrowseInfo=function(){this._rumoneData.Browser=this._platformDetection.browserName+this._platformDetection.browserMajor,this._rumoneData.BrowserIsMobile=this._platformDetection.isMobile},e.prototype._collectMemoryData=function(){!this.isCollected("UsedJSHeapSize")&&performance&&performance.memory&&(this._rumoneData.UsedJSHeapSize=performance.memory.usedJSHeapSize,this._rumoneData.TotalJSHeapSize=performance.memory.totalJSHeapSize)},e.prototype.setAPIDataToRUMOne=function(){for(var e=0,t=0,n=0;n<this.apis.length;n++){var r=this.apis[n];r&&(e++,t+=r.duration,r.url=r.url.split("/").map(function(e){return e.split("?")[0]}).slice(-1)[0].replace(/\(.*?\)/g,"()"))}this._rumoneData.APICallCount=e,this._rumoneData.APICallDurationSum=t,this._rumoneData.APICalls=JSON.stringify(this.apis)},e.prototype.setReferrer=function(){this._rumoneData.Referrer=window.document&&document.referrer},e.prototype.getW3cTimingName=function(e){return"secureConnectionStart"!==e?"W3c"+e.charAt(0).toUpperCase()+e.slice(1):"W3cSecureConnectStart"},e.prototype.uploadPerfData=function(e){this._excludePageData?(this.dataState=o.Skipped,this.logMessageInConsole("Uploading perf data skipped as requested by the consumer")):e||this.dataState===o.ReadyToUpload||this.dataState===o.TimeOut?this.loggingFunc?this._rumoneData?(this.loggingFunc("RUMOne",this.getPerformanceData()),this.dataState=o.Uploaded):console.error("Error: Uploading perf data called but perf data is not available"):console.error("Uploading perf data skipped as loggingFunc is not defined"):console.error("Error: Uploading perf data called with wrong data state "+this.dataState)},e.rumOneLogger=void 0,e.Loggers={},e._markers={},e}();t.default=m},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(64);t.default=r.PlatformDetection},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(0).__exportStar(n(8),t);var r=n(8);t.default=r.Manager},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.encodeURIComponent=function(e,t,n,r){var o,a="",i=0,s=" \"%<>'&";if(!e)return"";var u=e.length;for(i=0;i<u;i++){var c=e.charCodeAt(i),l=e.charAt(i);if(t&&("#"===l||"?"===l)){a+=e.substr(i);break}if(n&&"&"===l)a+=l;else if(c<=127)r?a+=l:c>=97&&c<=122||c>=65&&c<=90||c>=48&&c<=57||t&&c>=32&&c<=95&&s.indexOf(l)<0?a+=l:c<=15?a+="%0"+c.toString(16).toUpperCase():c<=127&&(a+="%"+c.toString(16).toUpperCase());else if(c<=2047)o=192|c>>6,a+="%"+o.toString(16).toUpperCase(),o=128|63&c,a+="%"+o.toString(16).toUpperCase();else if(55296!=(64512&c))o=224|c>>12,a+="%"+o.toString(16).toUpperCase(),o=128|(4032&c)>>6,a+="%"+o.toString(16).toUpperCase(),o=128|63&c,a+="%"+o.toString(16).toUpperCase();else if(i<e.length-1){c=(1023&c)<<10,i++;var f=e.charCodeAt(i);c|=1023&f,c+=65536,o=240|c>>18,a+="%"+o.toString(16).toUpperCase(),o=128|(258048&c)>>12,a+="%"+o.toString(16).toUpperCase(),o=128|(4032&c)>>6,a+="%"+o.toString(16).toUpperCase(),o=128|63&c,a+="%"+o.toString(16).toUpperCase()}}return a},e.escapeUrlForCallback=function(t){var n=t.indexOf("#"),r=t.indexOf("?");if(n>0&&(-1===r||n<r)){var o=t.substr(0,n);r>0&&(o+=t.substr(r)),t=o}return e.encodeURIComponent(t,!0,!1,!0)},e.encodeRestUriStringToken=function(t){return t&&(t=t.replace(/'/g,"''"),t=t.replace(/%27/g,"%27%27"),t=e.encodeURIComponent(t)),t},e}();t.default=r},function(e,t,n){"use strict";function r(e,t){var n=!!e.Fallback,r=e.ODB;if("boolean"==typeof r)n=r;else if(r>0){var o=Math.floor(r/32),a=1<<r%32;n=o<t.length&&0!=(t[o]&a)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.isSPFeatureEnabled=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(26),o=function(){function e(){this._disposables={},this._lastDisposableId=0}return e.prototype.attached=function(e){var t=this,n=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.attach(e.apply(this,n)||this)};return n.prototype=e.prototype,n},e.prototype.attach=function(e){var t=this,n=""+ ++this._lastDisposableId,o=r.hook(e,function(){delete t._disposables[n]});return this._disposables[n]=o,o},e.prototype.dispose=function(){this.isDisposed||(this.isDisposed=!0);for(var e=this._disposables,t=0,n=Object.keys(e);t<n.length;t++){var o=n[t],a=e[o];a&&r.isDisposable(a)&&a.dispose(),delete e[o]}},e}();t.default=o},function(e,t,n){"use strict";function r(e){return"function"==typeof e.dispose}function o(e,t){var n=e,r=n.dispose,o="function"==typeof r&&r.disposalChain;if(!o){o=new a(n);var i=function(){o.dispose(),r&&(n.dispose=r,n.dispose())};n.dispose=i,i.disposalChain=o}return o.addCallback(t),n}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e){this._callbacks=[],this._owner=e}return e.prototype.addCallback=function(e){this._callbacks.push(e)},e.prototype.dispose=function(){for(;this._callbacks.length;){this._callbacks.pop().call(this._owner)}},e}();t.isDisposable=r,t.hook=o},function(e,t,n){"use strict";function r(e){function t(e){var r=null;return e&&(r=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e)),Object.keys(e).forEach(function(o){var a=e[o];if("object"==typeof a){if(-1!==n.indexOf(a))throw new Error("Cannot perform DeepCopy() because a circular reference was encountered, object: "+e+", property: "+o);n.push(a),r[o]=t(a),n.pop()}else r[o]=a})),r}var n=[];return t(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.deepCopy=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(29),o=function(){function e(e,t){e?(this.root=e.root,this.parent=e.current):this.root=this.parent=r.Empty,this.current=t||r.generate()}return e.prototype.toString=function(){return this.root+"#"+this.parent+"#"+this.current},e.RootVector=window.rootVector||new e,e}();t.CorrelationVector=o},function(e,t,n){"use strict";function r(e){for(var t="";t.length<e;){var n=16*Math.random();n|=0,t+=n.toString(16)}return t}function o(){var e=[];e.push(r(8)),e.push(r(4));var t="4"+r(3);e.push(t);var n=r(4),o=parseInt(n[0],16);return o&=3,o|=8,n=o.toString(16)+n.substr(1),e.push(n),e.push(r(12)),e.join("-")}function a(e,t){return void 0===t&&(t=!1),e?u(e.toLowerCase(),t):""}function i(e,t){return void 0===t&&(t=!1),e?u(e.toUpperCase(),t):""}function s(e,t){if(void 0===t&&(t=!1),e){var n=e.replace(/[^A-Fa-f0-9]/g,"");if(32===n.length)return u(n.slice(0,8)+"-"+n.slice(8,12)+"-"+n.slice(12,16)+"-"+n.slice(16,20)+"-"+n.slice(20),t)}return""}function u(e,t){var n=e.match(/^\{(.*)\}$/);return n?t?n[0]:n[1]:t?"{"+e+"}":e}Object.defineProperty(t,"__esModule",{value:!0}),t.Empty="00000000-0000-0000-0000-000000000000",t.generate=o,t.normalizeLower=a,t.normalizeUpper=i,t.normalizeDashes=s},function(e,t,n){"use strict";function r(e,t){return o.__assign(e,t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.assign=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3);t.Engagement=r.createSingleEvent({eventName:"Engagement,",shortEventName:"Engagement"},{name:{isKey:!0,isPrefixingDisabled:!0,type:1},isIntentional:{isPrefixingDisabled:!0,type:3},scenario:{isPrefixingDisabled:!0,type:1},location:{isPrefixingDisabled:!0,type:1},usageType:{isPrefixingDisabled:!0,type:1},currentPage:{isPrefixingDisabled:!0,type:1},previousPage:{isPrefixingDisabled:!0,type:1},experiment:{isPrefixingDisabled:!0,type:4},siteId:{isPrefixingDisabled:!0,type:1},webId:{isPrefixingDisabled:!0,type:1},listId:{isPrefixingDisabled:!0,type:1},groupId:{isPrefixingDisabled:!0,type:1},docId:{isPrefixingDisabled:!0,type:1},webTemplateId:{isPrefixingDisabled:!0,type:1},listTemplateId:{isPrefixingDisabled:!0,type:1},siteType:{isPrefixingDisabled:!0,type:1},feature:{isPrefixingDisabled:!0,type:1},component:{isPrefixingDisabled:!0,type:1},extraData:4,objectType:{isPrefixingDisabled:!0,type:1},datasource:{isPrefixingDisabled:!0,type:1},action:{isPrefixingDisabled:!0,type:1}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(33),o=n(11);t.ResultTypeEnum=o.ResultTypeEnum,t.Qos=r.createPairedEvent({eventName:"Qos,",shortEventName:"Qos"},{name:{isKey:!0,isPrefixingDisabled:!0,type:1},startTimeOverride:{isPrefixingDisabled:!0,type:2},resultCode:{isPrefixingDisabled:!0,type:1},resultType:{typeRef:o.ResultTypeEnum,isPrefixingDisabled:!0,type:6},error:{isPrefixingDisabled:!0,type:1},extraData:4,extraMetrics:{isPrefixingDisabled:!0,type:4}})},function(e,t,n){"use strict";function r(e,t,n){var r={resultType:e};return t&&(r.resultCode=t),n&&(r.error=n),r}function o(e,t,n){var r=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t}(f);return i.addEventProps(r.prototype,e,t,n),r}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=n(4),s=n(8),u=n(11),c=n(12),l=n(19),f=function(e){function t(t,n){return e.call(this,t,i.ClonedEventType.Start,n)||this}return a.__extends(t,e),t.instrumentPromise=function(e,t,n,o,a,i,s){var c,f=new this(e,s);a&&f.setTimeout(a,i);var d=function(e){var t;if(n)try{t=n(e)}catch(e){t=r(u.ResultTypeEnum.Failure,"GetSchemaException",e.toString())}else t=r(u.ResultTypeEnum.Success);f.end(t)},p=function(e){var t;if(o)try{t=o(e)}catch(e){t=r(u.ResultTypeEnum.Failure,"GetSchemaException",e.toString())}else if(e){var n=e instanceof Error&&"Canceled"===e.name?u.ResultTypeEnum.ExpectedFailure:u.ResultTypeEnum.Failure;t=r(n,void 0,l.safeSerialize(e))}else t=r(u.ResultTypeEnum.Failure);f.end(t)};try{c=t()}catch(e){throw f.end(r(u.ResultTypeEnum.Failure,"PromiseCreationFailed",e.toString())),e}return c.then(d,p),c},t.prototype.setTimeout=function(e,t){this._clearTimeout(),t||(t=r(u.ResultTypeEnum.Failure,"Timeout")),this.timeoutId=window.setTimeout(this.end.bind(this,t),e)},t.prototype.verbose=function(e){if(!this.endTime&&this._isQosEvent()){var t=this.data;c.verbose(e,t.name)}},t.prototype.end=function(e){if(!this.endTime){if(e&&this._setData(e),this.endTime=s.Manager.getTime(),this._logEvent(i.ClonedEventType.End),this._isQosEvent()){var t=this.data;t.error&&c.log(t.error,t.name,t.resultCode,t.resultType)}this._clearTimeout()}},t.prototype._clearTimeout=function(){this.timeoutId&&(window.clearTimeout(this.timeoutId),this.timeoutId=void 0)},t.prototype._isQosEvent=function(){return this.eventName.indexOf("Qos,")>=0},t}(i.EventBase);t.createPairedEvent=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3);t.Trace=r.createSingleEvent({eventName:"Trace,",shortEventName:"Trace",requiresParent:!1},{message:1})},function(e,t,n){"use strict";function r(){}function o(e){a.default.log(e)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),i=function(){function e(e,t){void 0===t&&(t=o),this._isDisposed=!1,this._parent=e||null,this._onErrorHandler=t,this._timeoutIds=null,this._immediateIds=null,this._animationFrameIds=null,this._intervalIds=null}return e.prototype.dispose=function(){if(!this._isDisposed){if(this._isDisposed=!0,this._parent=null,this._timeoutIds){for(var e=0,t=Object.keys(this._timeoutIds);e<t.length;e++){var n=t[e];this.clearTimeout(Number(n))}this._timeoutIds=null}if(this._immediateIds){for(var r=0,o=Object.keys(this._immediateIds);r<o.length;r++){var n=o[r];this.clearImmediate(Number(n))}this._immediateIds=null}if(this._intervalIds){for(var a=0,i=Object.keys(this._intervalIds);a<i.length;a++){var n=i[a];this.clearInterval(Number(n))}this._intervalIds=null}if(this._animationFrameIds){for(var s=0,u=Object.keys(this._animationFrameIds);s<u.length;s++){var n=u[s];this.cancelAnimationFrame(Number(n))}this._animationFrameIds=null}}},e.prototype.setTimeout=function(e,t){var n=this,r=0;if(!this._isDisposed){var o=this._timeoutIds||(this._timeoutIds={}),a=this._parent;r=setTimeout(function(){try{delete o[r],e.apply(a)}catch(e){n._logError(e)}},t),o[r]=!0}return r},e.prototype.clearTimeout=function(e){var t=this._timeoutIds;t&&t[e]&&(clearTimeout(e),delete t[e])},e.prototype.setImmediate=function(e){var t=this,n=0;if(!this._isDisposed){var r=this._immediateIds||(this._immediateIds={}),o=this._parent,a=function(){try{delete r[n],e.apply(o)}catch(e){t._logError(e)}};n=window.setImmediate?window.setImmediate(a):window.setTimeout(a,0),r[n]=!0}return n},e.prototype.clearImmediate=function(e){var t=this._immediateIds;t&&t[e]&&(window.clearImmediate?window.clearImmediate(e):window.clearTimeout(e),delete t[e])},e.prototype.setInterval=function(e,t){var n=this,r=0;if(!this._isDisposed){this._intervalIds||(this._intervalIds={});var o=this._parent;r=setInterval(function(){try{e.apply(o)}catch(e){n._logError(e)}},t),this._intervalIds[r]=!0}return r},e.prototype.clearInterval=function(e){this._intervalIds&&this._intervalIds[e]&&(clearInterval(e),delete this._intervalIds[e])},e.prototype.throttle=function(e,t,n){var o=this;if(void 0===n&&(n={}),this._isDisposed)return r;var a,i,s=t||0,u=n.leading,c=void 0===u||u,l=n.trailing,f=void 0===l||l,d=0,p=null,h=this._parent,m=function(t){var n=(new Date).getTime(),r=n-d,u=c?s-r:s;return r>=s&&(!t||c)?(d=n,p&&(o.clearTimeout(p),p=null),a=e.apply(h,i)):null===p&&f&&(p=o.setTimeout(m,u)),a};return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i=e,m(!0)}},e.prototype.debounce=function(e,t,n){var o=this;if(void 0===n&&(n={}),this._isDisposed)return r;var a,i,s=t||0,u=n.leading,c=void 0!==u&&u,l=n.trailing,f=void 0===l||l,d=n.maxWait,p=void 0===d?NaN:d,h=0,m=(new Date).getTime(),g=null,v=this._parent,_=function(t){var n=(new Date).getTime(),r=!1;t&&(c&&n-h>=s&&(r=!0),h=n);var u=n-h,l=s-u,d=n-m,y=!1;return isNaN(p)||(d>=p&&g?y=!0:l=Math.min(l,p-d)),u>=s||y||r?(g&&(o.clearTimeout(g),g=null),m=n,a=e.apply(v,i)):null!==g&&t||!f||(g=o.setTimeout(_,l)),a};return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i=e,_(!0)}},e.prototype.requestAnimationFrame=function(e){var t=this,n=0;if(!this._isDisposed){var r=this._animationFrameIds||(this._animationFrameIds={}),o=this._parent,a=function(){try{delete r[n],e.apply(o)}catch(e){t._logError(e)}};n=window.requestAnimationFrame?window.requestAnimationFrame(a):window.setTimeout(a,0),r[n]=!0}return n},e.prototype.cancelAnimationFrame=function(e){var t=this._animationFrameIds;t&&t[e]&&(window.cancelAnimationFrame?window.cancelAnimationFrame(e):window.clearTimeout(e),delete t[e])},e.prototype._logError=function(e){this._onErrorHandler&&this._onErrorHandler(e)},e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r;!function(e){e[e.none=0]="none",e[e.fullPageLoad=4]="fullPageLoad",e[e.onePageAppNavigation=5]="onePageAppNavigation"}(r||(r={})),t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.RUMOneDataUpload=r.createSingleEvent({eventName:"RUMOneDataUpload,",shortEventName:"RUMOneDataUpload"},{streamName:1,dictionary:4}),t.default=t.RUMOneDataUpload},function(e,t,n){"use strict";function r(e){return g}function o(e,t,n,r){void 0===r&&(r={});var o=r.platformDetection,_=void 0===o?new l.default:o;try{a=n,v.logStartEvents=!0;var y={AccountType:i.AccountType[t.accountType],BrowserIsMobile:_.isMobile,BrowserMajVer:_.browserMajor,BrowserMinVer:_.browserMinor,BrowserName:_.browserName,BrowserUserAgent:_.userAgent,Environment:t.environment,FarmLabel:t.farmLabel,IsAuthenticated:t.isAuthenticated?1:0,Market:t.market,Manifest:t.manifest,OSName:_.osName,OSVersion:_.osVersion,Session:t.session,SiteSubscriptionId:t.siteSubscriptionId||"",UserId:t.userId,Version:t.version,Workload:t.workload};t.farmLabel&&(y.FarmLabel=t.farmLabel);var b=new d.SimpleUri(t.completenessCallbackEndpoint),E={telemetryTenantToken:e,appVersion:t.version,environment:t.environment,workload:t.workload,farmLabel:t.farmLabel,callbackEndpoint:b};new p.AriaTelemetryHandler({ariaLoader:function(){return h.default.resolve(a)},context:y,tenantToken:e,disableCookies:t.disableCookies,logStartEvents:v.logStartEvents,ariaQos:{isQosEvent:function(e){return u.Beacon.isTypeOf(e)&&!!e.data&&e.data.name===m},reportQos:function(e){var t=e.result,n=e.statusCode,r=e.events;new u.Beacon({name:m,retryCount:0,totalRetries:0,eventCount:r?r.length:0}).end({success:0===t,status:n+""}),""!==b.authority&&new f.DataCompletenessInfo(E,t,n,(new Date).getTime(),r).send()}}}).attach(s.Manager),g=!0}catch(e){e instanceof a.Exception&&(e=new Error("Aria error: "+e.toString())),c.default.log(e)}}Object.defineProperty(t,"__esModule",{value:!0});var a,i=n(16),s=n(22),u=n(14),c=n(1),l=n(21),f=n(67),d=n(69),p=n(72),h=n(5),m="AriaBeacon",g=!1,v={logStartEvents:!1,Init:o,isInitialized:r};t.default=v},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(35),o=n(1),a=n(40);!function(e){e[e.blocked=0]="blocked",e[e.exception=-1]="exception",e[e.timeout=-2]="timeout",e[e.abort=-3]="abort"}(t.XHRStatus||(t.XHRStatus={}));var i=function(){function e(t){this._async=new r.default(this);var n=t.url,o=t.requestTimeoutInMS,a=void 0===o?e.DEFAULT_TIMEOUT_MS:o,i=t.json,s=t.responseType,u=void 0===s?"":s,c=t.headers,l=void 0===c?{}:c,f=t.withCredentials,d=void 0!==f&&f,p=t.needsCors,h=void 0!==p&&p,m=t.onProgress,g=t.onUploadProgress,v=t.method,_=void 0===v?i?"POST":"GET":v;this._url=n,this._requestTimeoutInMS=a,this._postData=i,this._headers=l,this._method=_,this._withCredentials=d,this._needsCors=h,this._responseType=u,this._progressCallback=m,this._uploadProgressCallback=g}return e.prototype.abort=function(e){this._abortRequest()&&!e&&this._callFailureCallback(this._request,-3,!1)},e.prototype.start=function(e,t){var n=this;this._successCallback=e,this._failureCallback=t;var r=this,i=r._method,s=r._headers;try{this._request=this._getRequest();var u=this,c=u._progressCallback,l=u._uploadProgressCallback,f=u._request,d=u._responseType;c&&(f.onprogress=function(e){try{c(e)}catch(e){o.default.logError(e)}}),l&&(f.upload.onprogress=function(e){try{l(e)}catch(e){o.default.logError(e)}}),this._async.setTimeout(function(){n._completed||n._timeoutCallback()},this._requestTimeoutInMS),f.onreadystatechange=function(){if(!n._completed){var e=4;try{e=f.DONE||4}catch(e){}f.readyState===e&&n._requestEndCallback()}},f.open(i,this._url,!0),"withCredentials"in f&&(f.withCredentials=this._withCredentials),f.responseType=d;for(var p in s)f.setRequestHeader(p,s[p]);f.send(this._postData)}catch(e){o.default.logError(e,{origin:location?location.origin:"unknown",withCredentials:this._withCredentials,requestUrl:this._url,headers:a.safeSerialize(s),method:i}),this._abortRequest(),this._callFailureCallback(this._request,-1,!1)}},e.prototype._getRequest=function(){var e=this;if(!this._needsCors||!window.XDomainRequest)return new XMLHttpRequest;var t=new XDomainRequest;return t.setRequestHeader=function(){},t.onprogress=function(){},t.ontimeout=function(){},t.onload=function(){e._requestEndCallback()},t},e.prototype._abortRequest=function(){var e=!1;if(!this._completed){this._completed=!0,this._async.dispose();try{this._request&&this._request.abort()}catch(e){}e=!0}return e},e.prototype._timeoutCallback=function(){this._completed||(this._abortRequest(),this._callFailureCallback(this._request,-2,!0))},e.prototype._callSuccessCallback=function(e,t){try{this._successCallback&&this._successCallback(e,t)}catch(e){o.default.log(e)}},e.prototype._callFailureCallback=function(e,t,n){try{this._failureCallback&&this._failureCallback(e,t,n)}catch(e){o.default.log(e)}},e.prototype._requestEndCallback=function(){if(!this._completed){this._completed=!0;var e=-1;try{this._async.dispose();try{e=this._request.status}catch(e){}}catch(t){e=-1,o.default.log(t)}e<400&&e>0?this._callSuccessCallback(this._request,e):this._callFailureCallback(this._request,e,!1)}},e.DEFAULT_TIMEOUT_MS=3e4,e}();t.default=i},function(e,t,n){"use strict";function r(e,n,r){return n=n||t.DEFAULT_DELIMITER,Object.keys(e).map(function(n){var a=e[n];return a=a?a.toString():"",r||(a=o.default.encodeURIComponent(a)),n+t.KEYVALUE_DELIMITER+a}).join(n)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(23),a=n(27);t.deepCopy=a.deepCopy;var i=n(68);t.deepCompare=i.deepCompare;var s=n(19);t.safeSerialize=s.safeSerialize;var u=n(30);t.extend=u.assign,t.DEFAULT_DELIMITER="&",t.KEYVALUE_DELIMITER="=",t.serialize=r},function(e,t,n){"use strict";function r(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e.replace(g,function(e,n){var r=t[Number(n)];return null===r?"":""+r})}function o(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r,o=[],a=0;r=g.exec(e);){var i=r[0],s=parseInt(i.replace(/\{|\}+/g,""),10),u=t[s];r.index>a&&o.push(e.substring(a,r.index)),a=g.lastIndex,o.push(u)}return a!==e.length&&o.push(e.substring(a,e.length)),o}function a(e,t){return e.substr(e.length-t.length)===t}function i(e,t){return e.substr(0,t.length)===t}function s(e,t){for(var n=e.toString();n.length<t;)n+="0";return n}function u(e,t){for(var n=e.toString();n.length<t;)n="0"+n;return n}function c(e,t){for(var n=0;n<e.length;n++)if(t.indexOf(e[n])>=0)return n;return-1}function l(e,t){return e&&t?e.toUpperCase()===t.toUpperCase():e===t}function f(e){return e?e[0].toUpperCase()+e.substr(1):e}function d(e){return e?e[0].toLowerCase()+e.substr(1):e}function p(e,t,n){return 1===e?t:n}function h(e,t,n){if(n=Number(n),void 0===e||void 0===t||void 0===n)return"";for(var r="",o=-1,a=t.split("||"),i=0,s=a.length;i<s;i++){var u=a[i];if(u){for(var c=u.split(","),l=0,f=c;l<f.length;l++){var d=f[l];if(d)if(isNaN(Number(d))){if(-1!==d.indexOf("-")){var p=d.split("-");if(2!==p.length)continue;var h=void 0,m=void 0;if(""===p[0])h=0;else{if(isNaN(Number(p[0])))continue;h=parseInt(p[0],10)}if(n>=h){if(""===p[1]){o=i;break}if(isNaN(Number(p[1])))continue;if(m=parseInt(p[1],10),n<=m){o=i;break}}}else if(-1!==d.indexOf("*")){var g=d.trim().replace(/\*/g,"[0-9]*"),v=new RegExp("^"+g+"$");if(v.test(n.toString())){o=i;break}}}else{var _=parseInt(d,10);if(n===_){o=i;break}}}if(-1!==o)break}}if(-1!==o){var y=e.split("||");y[o]&&(r=y[o])}return r}function m(e,t,n){return r(h(e,t,n)||"",n.toString())}Object.defineProperty(t,"__esModule",{value:!0});var g=/\{(\d+)\}/g;t.format=r,t.formatToArray=o,t.doesStringEndWith=a,t.doesStringStartWith=i,t.rightPad=s,t.leftPad=u,t.findOneOf=c,t.equalsCaseInsensitive=l,t.capitalize=f,t.decapitalize=d,t.pluralSelect=p,t.getLocalizedCountValue=h,t.formatWithLocalizedCountValue=m},function(e,t,n){"use strict";function r(e){return!!e&&"function"==typeof e.addEventListener}function o(e){return!!e&&!!e.__events__}function a(e,t){var n=e,r=n.__declaredEvents=n.__declaredEvents||{};if("string"==typeof t)r[t]=!0;else for(var o=0;o<t.length;o++)r[t[o]]=!0}function i(e,t,n,a){var i;if(r(e)){if(document.createEvent){var s=document.createEvent("HTMLEvents");s.initEvent(t,a,!0),s.args=n,i=e.dispatchEvent(s)}}else for(;e&&!1!==i;)if(o(e)){var u=e.__events__,c=u[t];for(var l in c)for(var f=c[l],d=0;!1!==i&&d<f.length;d++){var p=f[d];p.objectCallback&&(i=p.objectCallback.call(p.parent,n))}e=a?e.parent:null}else e=null;return i}Object.defineProperty(t,"__esModule",{value:!0}),t.isDOMEventTarget=r,t.isEventTarget=o,t.declare=a,t.raise=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(15),a=n(6),i=n(22),s=n(44);!function(e){function t(t,n){if(e.instance)throw new Error("The beaconCache has already been added to the logging manager with event name prefix "+t+".");e.instance=new r(t,n)}var n=new o.default(s.default.STORE_KEY,a.default.session);e.eventNamePrefix="",e.instance=null,e.handlers=null;var r=function(){function t(t,n){var r=this;e.eventNamePrefix=t,e.handlers=n,this._handler=function(e){r.addEvent(e)};for(var o=i.Manager.addLogHandler(this._handler),a=0;a<o.length;a++)this.addEvent(o[a])}return t.prototype.dispose=function(){i.Manager.removeLogHandler(this._handler)},t.prototype.addEvent=function(t){t.enabled&&s.default.processAndLogEvent({event:t,logFunc:function(e,t){var r=n.getValue(s.default.STORE_SIZE_KEY);r||(r=0),n.setValue(r.toString(),{name:e,props:t}),n.setValue(s.default.STORE_SIZE_KEY,++r)},eventNamePrefix:e.eventNamePrefix,handlers:e.handlers})},t}();e.addToLoggingManager=t}(r||(r={})),t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(10),a=n(77),i=n(14),s=n(78),u=n(79),c=n(80),l=n(81),f=n(82),d=n(9),p=n(16),h=n(37),m=n(83),g=n(84);!function(e){function t(e){var t=e.event,l=e.eventNamePrefix,g=e.handlers,v=e.logFunc;if(!g.ignoredEventsHandler||!g.ignoredEventsHandler(t)){H||(H=!0,R=window._spPageContextInfo,R?(M=R.siteId?R.siteId.replace(B,""):"",I=R.webId?R.webId.replace(B,""):"",A=R.listId?R.listId.replace(B,""):"",L=R.groupId?R.groupId.replace(B,""):""):(M="",I="",A="",L=""));var y=d.Engagement.isTypeOf(t)?S(t):o.Qos.isTypeOf(t)?T(t,g.qosEventNameHandler||null,g.qosEventExtraDataHandler||null):a.PLT.isTypeOf(t)?P(t):s.UnhandledError.isTypeOf(t)?C(t):u.RequireJSError.isTypeOf(t)?O(t):c.CaughtError.isTypeOf(t)?D(t):f.Verbose.isTypeOf(t)?k(t):i.Beacon.isTypeOf(t)?x(t):h.RUMOneDataUpload.isTypeOf(t)?b(t):m.PageInit.isTypeOf(t)?E(t):null;y||(y=[{userEngagementData:{EngagementName:"UnknownEvent",Duration:0,LogType:0,Properties:JSON.stringify({name:t.eventName}),ClientTime:t.eventType===p.ClonedEventType.End?t.endTime:t.startTime,Source:U}}]);for(var w=0,F=y;w<F.length;w++){var V=F[w];if(V.debugData&&(V.debugData.Tag=_(V.debugData.Tag,l).replace(B,""),v(j,V.debugData)),V.userEngagementData){var q=l;d.Engagement.isTypeOf(t)&&"SPList"===q&&(q=r()),V.userEngagementData.EngagementName=_(V.userEngagementData.EngagementName,q).replace(B,""),o.Qos.isTypeOf(t)&&"SPList"===l&&(t.data.extraData.ListBaseTemplate=n()),v(N,V.userEngagementData)}V.rumOneData&&v(V.rumOneData.streamName,V.rumOneData.dictionary)}}}function n(){return R?R.listBaseTemplate:-1}function r(){var e=n();return Q[e]||"SPList"}function v(e){var t=e;return t=t.replace("{",""),t=t.replace(/\"/gi,""),t=t.replace("}","")}function _(e,t){return t?t+"."+e:e}function y(e){return K[e]||""}function b(e){if(!e.data)return[{userEngagementData:{EngagementName:"RUMOne.no_EventData",Duration:0,LogType:0,ClientTime:e.startTime,Source:U}}];var t=e.data;return[{rumOneData:{streamName:t.streamName,dictionary:t.dictionary}}]}function E(e){return[{userEngagementData:{EngagementName:"PageInit",Properties:e.data?JSON.stringify(e.data):"",Duration:0,LogType:0,ClientTime:e.startTime,Source:U}}]}function S(e){var t=[],n="no_EngagementName",r="",o=M,a=I,i=A,s=L;if(e.data){var u=e.data;if(o=u.siteId||o,a=u.webId||a,i=u.listId||i,s=u.groupId||s,n=u.name||n,u.experiment){var c=u.experiment,l=c.getExperimentData();t.push({userEngagementData:{EngagementName:w(l,c.IsExperimentOn()),Properties:JSON.stringify(l),Duration:0,LogType:0,ClientTime:e.startTime,Source:U,SiteId:o,WebId:a,ListId:i,GroupId:s}})}r=u.extraData?JSON.stringify(u.extraData):""}return t.push({userEngagementData:{EngagementName:n,Properties:r,Duration:0,LogType:0,ClientTime:e.startTime,Source:U,SiteId:o,WebId:a,ListId:i,GroupId:s}}),t}function w(e,t){return(e.name||"noExperimentData")+".Experiment"+(t?"Treatment":"Control")+")"}function T(e,t,n){var r={},o="no_QosName",a=e.data||null;a&&(a.name&&(o=a.name),t&&(o=t(e,o)),a.extraData=a.extraData||{},n&&n(e,a),a.extraData.appver=q);var i=0;return e.eventType===p.ClonedEventType.End&&e.startTime&&e.endTime&&(i=e.endTime-e.startTime),r.userEngagementData={EngagementName:o,Properties:a&&a.extraData?JSON.stringify(a.extraData):"",Duration:i,LogType:0,ClientTime:e.eventType===p.ClonedEventType.End?e.endTime:e.startTime,Source:F},[r]}function x(e){var t={},n=0;return e.eventType===p.ClonedEventType.End&&e.startTime&&e.endTime&&(n=e.endTime-e.startTime),t.userEngagementData={EngagementName:"Beacon",Properties:e.data?JSON.stringify(e.data):"no_EventData",Duration:n,LogType:0,ClientTime:e.eventType===p.ClonedEventType.End?e.endTime:e.startTime,Source:F},[t]}function P(e){if(!e.data)return[{userEngagementData:{EngagementName:"PLT.no_EventData",Duration:0,LogType:0,ClientTime:e.startTime,Source:U}}];for(var t=[],n=e.data,r="PLT."+n.name.replace(" ",""),o=JSON.stringify(n).split(","),a=0,i=0;i<o.length;i++){var s=v(o[i]),u=s.split(":");v(u[1])!==n.name&&(a="true"===u[1]?1:"false"===u[1]||"null"===u[1]?0:parseInt(u[1],10),t.push({userEngagementData:{EngagementName:r+"."+u[0],Properties:"appCacheHit"===u[0]?JSON.stringify(e.data):"",Duration:a,LogType:0,ClientTime:e.startTime,Source:U}}))}return t}function C(e){return[{userEngagementData:{EngagementName:"UnhandledError",Duration:0,LogType:0,ClientTime:e.startTime,Source:U},debugData:{Tag:"UnhandledError",Level:g.default.Normal,Message:e.data?JSON.stringify(e.data):"no_EventData",Misc:"",ClientTime:e.startTime}}]}function O(e){var t,n,r={},o="RequireJSError";if(e.data){t={};for(var a in e.data)"message"!==a?t[a]=e.data[a]:n=e.data[a]}return r.userEngagementData={EngagementName:o,Duration:0,LogType:0,ClientTime:e.startTime,Source:U},r.debugData={Tag:o,Level:g.default.Normal,Message:n||"no_ErrorMessage",Misc:t?JSON.stringify(t):"no_ErrorData",ClientTime:e.startTime},[r]}function D(e){var t={},n="CaughtError";if(l.QosError.isTypeOf(e))if(e.data){var r=e.data;n=r.name,r.resultCode&&(n+="."+r.resultCode),n+=y(r.resultType)}else n="QosErrorEvent.no_EventData";else t.userEngagementData={EngagementName:n,Duration:0,LogType:0,ClientTime:e.startTime,Source:U};var o=e.data||null;return t.debugData={Tag:n,Level:g.default.Normal,Message:o&&o.message||"",Misc:o&&o.stack?JSON.stringify(o.stack):"",ClientTime:e.startTime},[t]}function k(e){var t={},n="Verbose";if(e.data){var r=e.data;r.name&&(n=r.name+".Verbose")}else n+=".no_EventData";return t.debugData={Tag:n,Level:g.default.Low,Message:r.message,Misc:"",ClientTime:e.startTime},[t]}e.STORE_KEY="SPCacheLogger",e.STORE_SIZE_KEY="Size";var R,M,I,A,L,U="ClientV2Engagement",j="ReliabilityLog",N="UserEngagement",F="ClientV2Reliability",B=/[^a-z0-9\.\_\-\+]+/gi,V=window._spModuleLink,q=V?V.buildNumber:"",H=!1;e.processAndLogEvent=t;var z,Q={100:"ListNext",101:"DocsNext",102:"SurveyNext",103:"LinksNext",104:"AnnouncementsNext",107:"TasksNext",109:"PicLibNext"},K=(z={},z[o.ResultTypeEnum.Success]=".Success",z[o.ResultTypeEnum.Failure]=".Failure",z[o.ResultTypeEnum.ExpectedFailure]=".ExpectedFailure",z)}(r||(r={})),t.default=r},function(e,t,n){"use strict";function r(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e.replace(m,function(e,n){var r=t[n];return null===r?"":r})}function o(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r,o=[],a=0;r=m.exec(e);){var i=r[0],s=parseInt(i.replace(/\{|\}+/g,""),10),u=t[s];r.index>a&&o.push(e.substring(a,r.index)),a=m.lastIndex,o.push(u)}return a!==e.length&&o.push(e.substring(a,e.length)),o}function a(e,t){return e.substr(e.length-t.length)===t}function i(e,t){return e.substr(0,t.length)===t}function s(e,t){for(var n=e.toString();n.length<t;)n+="0";return n}function u(e,t){for(var n=0;n<e.length;n++)if(t.indexOf(e[n])>=0)return n;return-1}function c(e,t){return e&&t?e.toUpperCase()===t.toUpperCase():e===t}function l(e){return e?e[0].toUpperCase()+e.substr(1):e}function f(e){return e?e[0].toLowerCase()+e.substr(1):e}function d(e,t,n){return 1===e?t:n}function p(e,t,n){if(n=Number(n),void 0===e||void 0===t||void 0===n)return null;for(var r="",o=-1,a=t.split("||"),i=0,s=a.length;i<s;i++){var u=a[i];if(u){for(var c=u.split(","),l=0,f=c;l<f.length;l++){var d=f[l];if(d)if(isNaN(Number(d))){if(-1!==d.indexOf("-")){var p=d.split("-");if(2!==p.length)continue;var h=void 0,m=void 0;if(""===p[0])h=0;else{if(isNaN(Number(p[0])))continue;h=parseInt(p[0],10)}if(n>=h){if(""===p[1]){o=i;break}if(isNaN(Number(p[1])))continue;if(m=parseInt(p[1],10),n<=m){o=i;break}}}else if(-1!==d.indexOf("*")){var g=d.trim().replace(/\*/g,"[0-9]*"),v=new RegExp("^"+g+"$");if(v.test(n.toString())){o=i;break}}}else{var _=parseInt(d,10);if(n===_){o=i;break}}}if(-1!==o)break}}if(-1!==o){var y=e.split("||");y[o]&&(r=y[o])}return r}function h(e,t,n){return r(p(e,t,n),n.toString())}Object.defineProperty(t,"__esModule",{value:!0});var m=/\{(\d+)\}/g;t.format=r,t.formatToArray=o,t.doesStringEndWith=a,t.doesStringStartWith=i,t.rightPad=s,t.findOneOf=u,t.equalsCaseInsensitive=c,t.capitalize=l,t.decapitalize=f,t.pluralSelect=d,t.getLocalizedCountValue=p,t.formatWithLocalizedCountValue=h},function(e,t,n){"use strict";function r(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n.toLowerCase()]=e[n].toLowerCase());return t}Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(40),i=n(45);!function(e){e[e.scheme=0]="scheme",e[e.authority=1]="authority",e[e.path=2]="path",e[e.query=3]="query"}(o=t.UriPartial||(t.UriPartial={}));var s=/[;\/?:@&=$,]/,u=/[\/?]/,c=function(){function e(e,t){this._scheme="",this._user="",this._host="",this._port="",this._path="",this._pathSegments=[],this._pathEncoded="",this._query={},this._fragment="",t&&(this._queryCaseInsensitive=!!t.queryCaseInsensitive,this._pathCaseInsensitive=!!t.pathCaseInsensitive),this._parseURI(e)}return e.concatenate=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var r="",o=0;o<t.length;o++){var a=t[o];o>0&&(a=e.ensureNoPrecedingSlash(a)),o<t.length-1&&(a=e.ensureTrailingSlash(a)),r+=a}return r},e.ensureNoPrecedingSlash=function(e){return"/"===e[0]?e.substr(1):e},e.ensureTrailingSlash=function(e){return"/"!==e[e.length-1]?e+"/":e},e.prototype.getScheme=function(){return this._scheme},e.prototype.setScheme=function(e){this._scheme=e},e.prototype.getAuthority=function(){return this._getAuthority(!1)},e.prototype.setAuthority=function(e){this._parseAuthority(e)},e.prototype.getUser=function(){return this._user},e.prototype.getHost=function(){return this._host},e.prototype.getPort=function(){return this._port},e.prototype.getPath=function(e){var t=this._path;return Boolean(e)&&null!==t&&t.lastIndexOf("/")===t.length-1&&(t=t.slice(0,-1)),t},e.prototype.getLeftPart=function(e){var t=this._scheme+"://";return e===o.authority&&(t+=this.getAuthority()),e===o.path&&(t+=this.getPath()),e===o.query&&(t+=this.getQuery()),t},e.prototype.setPath=function(e){e&&"/"!==e[0]&&(e="/"+e),this._parsePath(e)},e.prototype.getPathSegments=function(){return this._pathSegments},e.prototype.getLastPathSegment=function(){var e=this._pathSegments;return e[e.length-1]||""},e.prototype.getQuery=function(e){return this._serializeQuery(e)},e.prototype.setQuery=function(e){this.setQueryFromObject(this._deserializeQuery(e))},e.prototype.getQueryAsObject=function(){return this._query},e.prototype.setQueryFromObject=function(e){this._query={};for(var t in e)e.hasOwnProperty(t)&&this.setQueryParameter(t,e[t])},e.prototype.getQueryParameter=function(e){var t=null,n=this._query;if(this._queryCaseInsensitive){e=e.toLowerCase();for(var r in n)n.hasOwnProperty(r)&&r.toLowerCase()===e&&(t=n[r])}else t=n[e];return t||null},e.prototype.setQueryParameter=function(e,t,n){void 0===n&&(n=!0);var r=this._decodeQueryString(t);(r||n)&&(this._query[this._decodeQueryString(e)]=r)},e.prototype.removeQueryParameter=function(e){delete this._query[this._decodeQueryString(e)]},e.prototype.getFragment=function(){return this._fragment},e.prototype.setFragment=function(e){"#"===e[0]&&(e=e.substring(1)),this._fragment=this._decodeQueryString(e)},e.prototype.equals=function(e){return i.equalsCaseInsensitive(this._scheme,e.getScheme())&&this._user===e.getUser()&&i.equalsCaseInsensitive(this._host,e.getHost())&&this._port===e.getPort()&&this._fragment===e.getFragment()&&this._equalsCaseAppropriate(this.getPath(!0),e.getPath(!0),this._pathCaseInsensitive)&&this._equalsCaseAppropriate(this.getQuery(),e.getQuery(),this._queryCaseInsensitive)},e.prototype.equivalent=function(e){return i.equalsCaseInsensitive(this._scheme,e.getScheme())&&i.equalsCaseInsensitive(this._user,e.getUser())&&i.equalsCaseInsensitive(this._host,e.getHost())&&i.equalsCaseInsensitive(this._port,e.getPort())&&i.equalsCaseInsensitive(this.getPath(!0),e.getPath(!0))&&a.deepCompare(r(this.getQueryAsObject()),r(e.getQueryAsObject()))&&i.equalsCaseInsensitive(this._fragment,e.getFragment())},e.prototype.toString=function(e){return this._getStringInternal(!0,e)},e.prototype.getDecodedStringForDisplay=function(){return this._getStringInternal(!1)},e.prototype.getStringWithoutQueryAndFragment=function(){return this._getStringWithoutQueryAndFragmentInternal(!0)},e.prototype._equalsCaseAppropriate=function(e,t,n){return n?i.equalsCaseInsensitive(e,t):e===t},e.prototype._getStringInternal=function(e,t){var n=this._getStringWithoutQueryAndFragmentInternal(e,t),r=this.getQuery(e);return r&&(n+="?"+r),this._fragment&&(n+="#"+(e?encodeURIComponent(this._fragment):this._fragment)),n},e.prototype._getStringWithoutQueryAndFragmentInternal=function(e,t){var n="";this._scheme&&(n+=(e?encodeURIComponent(this._scheme):this._scheme)+":");var r=this._getAuthority(e,t);return r&&(n+="//"+r),this._pathEncoded&&(n+=e?this._pathEncoded:this._path),n},e.prototype._deserializeQuery=function(e){var t={};0===e.indexOf("?")&&(e=e.substring(1));for(var n=0,r=e.split(/[;&]+/);n<r.length;n++){var o=r[n],a=o.indexOf("=");a<0&&(a=o.length),a>0&&(t[o.substr(0,a)]=o.substr(a+1))}return t},e.prototype._serializeQuery=function(e){var t="";for(var n in this._query)if(this._query.hasOwnProperty(n)){var r=n,o=this._query[n];e&&(r=encodeURIComponent(r),o=encodeURIComponent(o)),t+=null===o||""===o?r+"=&":r+"="+o+"&"}return""!==t&&(t=t.slice(0,-1)),t},e.prototype._parseURI=function(e){var t=e,n=t.indexOf("#");if(n>=0){var r=t.substring(n+1);this.setFragment(r),t=t.substring(0,n)}var o=t.search(s);if(!(o>=0))return void this.setPath(t);":"===t[o]&&(this.setScheme(t.substring(0,o)),t=t.substring(o+1));var a="";if(0===t.indexOf("//")){t=t.substring(2);var i=t.search(u);if(i>=0?(a=t.substring(0,i),t=t.substring(i)):(a=t,t=""),this.setAuthority(a),!t)return void this.setPath("")}var c=t.indexOf("?");c>=0&&(this.setQuery(t.substring(c+1)),t=t.substring(0,c)),this.setPath(t)},e.prototype._parseAuthority=function(e){this._host=e;var t=e.lastIndexOf("@");t>=0&&(this._host=this._host.substring(t+1));var n=this._host.indexOf(":");if(!(t<0&&n<0)){var r=e;t<0?this._host=r:(this._user=r.substring(0,t),this._host=r.substring(t+1)),n>=0&&(this._port=this._host.substring(n+1),this._host=this._host.substring(0,n)),this._user=decodeURIComponent(this._user),this._host=decodeURIComponent(this._host)}},e.prototype._parsePath=function(e){this._path=decodeURIComponent(e);var t=this._pathSegments=[];this._pathEncoded=e;for(var n=e.split("/"),r=0;r<n.length;++r)t[r]=decodeURIComponent(n[r]);""===t[0]&&t.shift(),""===t[t.length-1]&&t.pop()},e.prototype._getAuthority=function(e,t){void 0===t&&(t={});var n,r,o,a=t&&t.doNotPercentEncodeHost,i="";return e?(n=encodeURIComponent(this._user).replace("%3A",":"),r=a?this._host:encodeURIComponent(this._host),o=encodeURIComponent(this._port)):(n=this._user,r=this._host,o=this._port),""!==n&&(i=n+"@"),""!==this._host&&(i+=r),""!==this._port&&(i+=":"+o),i},e.prototype._decodeQueryString=function(e){var t=e;try{t=decodeURIComponent(e.replace(/\+/g," "))}catch(e){}return t},e}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e[e.Unknown=0]="Unknown",e[e.User=1]="User",e[e.Site=2]="Site"}(t.ExperimentTypeEnum||(t.ExperimentTypeEnum={}))},function(e,t,n){"use strict";function r(e){var t=e&&e.killSwitches;return{isActivated:function(e,n,r){return!!t&&!!t[o.default.normalizeUpper(e,!1)]}}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(91),a=function(){function e(){}return e.initKillSwitches=function(t){e._killSwitches=t||{}},e.isActivated=function(t,n,r){var a=window._spPageContextInfo;return!e._killSwitches&&a&&a.killSwitches&&e.initKillSwitches(a.killSwitches),t&&e._killSwitches&&e._killSwitches[o.default.normalizeUpper(t,!1)]},e}();t.Killswitch=a,t.getKillSwitch=r},function(e,t,n){"use strict";function r(e){var t={};if(e)for(var n=e.split("&"),r=0;r<n.length;r++){var o=n[r].split("=");void 0!==o[1]&&(o[1]=o[1].replace(/\+/g," "),t[o[0]]=decodeURIComponent(o[1]))}return t}function o(e){return e.substring(e.indexOf("?")+1)}function a(e){return e.substring(0,e.indexOf("?"))}Object.defineProperty(t,"__esModule",{value:!0}),t.deserializeQuery=r,t.getQueryStringFromUrl=o,t.getUrlWithoutQueryString=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(51),o=n(24),a=n(49),i=n(15),s=n(6);t.ENABLE_PARAM_KEY="enableFeatures",t.DISABLE_PARAM_KEY="disableFeatures";var u="Store",c={ODB:587,ODC:"AllowFeatureOverrides",Fallback:!1},l={ODB:357,ODC:null,Fallback:!1},f={},d=new i.default("FeatureOverrides",s.default.session),p=r.default.isFeatureEnabled(c)||r.default.isFeatureEnabled(l);!function(){var e=d.getValue(u);f=e||{};var n=location.search?location.search.substring(1):"",r=a.deserializeQuery(n),o=r[t.ENABLE_PARAM_KEY];if(o)for(var i=0,s=o.split(",");i<s.length;i++){var c=s[i];f[c]=!0}var l=r[t.DISABLE_PARAM_KEY];if(l)for(var p=0,h=l.split(",");p<h.length;p++){var c=h[p];f[c]=!1}d.setValue(u,f)}();var h=function(){function e(){}return Object.defineProperty(e,"Overrides",{get:function(){return f},enumerable:!0,configurable:!0}),e.isFeatureEnabled=function(e,t){if(p){if(e.ODB in f)return f[e.ODB];if(e.ODC in f)return f[e.ODC]}return t?o.isSPFeatureEnabled(e,t):r.default.isFeatureEnabled(e)},e.AllowFeatureOverrides=c,e.SPODebugOnlyCookieRedirect=l,e}();t.default=h},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(24),o=function(){function e(){}return e.initSPExpFeatures=function(t){e._expFeatures=t},e.isFeatureEnabled=function(t){var n=!!t.Fallback,o=window.PageContext,a=window.Flight,i=window.FilesConfig,s=window.Flighting,u=window._spPageContextInfo;return!e._expFeatures&&u&&(!u.ExpFeatures&&s&&s.ExpFeatures&&(u.ExpFeatures=s.ExpFeatures),e.initSPExpFeatures(u.ExpFeatures)),t.ODB&&e._expFeatures&&(n=r.isSPFeatureEnabled(t,e._expFeatures)),t.ODC&&i&&("boolean"==typeof t.ODC?n=t.ODC:a&&a.Ramps&&a.Ramps[t.ODC]?n=!0:i&&i[t.ODC]&&(n=!0)),t.OneDrive&&o&&(n=t.OneDrive),n},e.On={Fallback:!0},e.Off={},e._expFeatures=null,e}();t.default=o},function(e,t,n){"use strict";function r(e,t){var n=function(n){return e.call(this,n,t)||this};return n.prototype=e.prototype,n}function o(){throw new Error("Cannot consume a resource from a ResourceScope that has been disposed.")}function a(){throw new Error("Cannot load a resource from a ResourceScope that has been disposed.")}function i(){}function s(e){for(var t in e)if(e[t])return f.default.reject(e[t]);return f.default.reject(new Error("A dependency could not be loaded."))}function u(){this.resources.dispose()}function c(e){var t=new d.default;return e.then(function(e){return t.complete(e)},function(e){return t.error(e)}),t.getPromise()}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),f=n(5),d=n(53),p=n(25),h=n(26),m=0,g=function(){function e(e){this.id=++m,"string"==typeof e?this.name=e:(this.name=e.name,this.factory=e.factory,this.loader=e.loader)}return Object.defineProperty(e.prototype,"lazy",{get:function(){return new _(this,1)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"local",{get:function(){return new _(this,2)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"optional",{get:function(){return new _(this,4)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bypass",{get:function(){return new _(this,8)},enumerable:!0,configurable:!0}),e.prototype.toString=function(){return"Resource #"+this.id+' "'+this.name+'"'},e}();t.ResourceKey=g;var v;!function(e){e[e.none=0]="none",e[e.lazy=1]="lazy",e[e.local=2]="local",e[e.optional=4]="optional",e[e.bypass=8]="bypass"}(v||(v={}));var _=function(){function e(e,t){this.key=e,this.flags=t}return Object.defineProperty(e.prototype,"lazy",{get:function(){return new e(this.key,1|this.flags)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"local",{get:function(){return new e(this.key,2|this.flags)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"optional",{get:function(){return new e(this.key,4|this.flags)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bypass",{get:function(){return new e(this.key,8|this.flags)},enumerable:!0,configurable:!0}),e}(),y=function(){function e(e){this._value=e,this.dependencies={}}return e.prototype.create=function(){return{instance:this._value}},e}();t.ConstantResourceFactory=y,t.resourceScopeKey=new g({name:"resources"}),t.asyncLoadBarrierKey=new g({name:"asyncLoadBarrier"});var b=function(){function e(e){this._loader=e}return e.prototype.load=function(){var e=this,t=c(this._loader.load());return t.catch(function(){delete e.load}),this.load=function(){return t},t},e}(),E=function(){function e(e,t){this.entry=e,this.manager=t}return e.prototype.getInstance=function(e,t){var n=this.manager,r=this.entry.factory,o=r.create(n.resolve(r.dependencies,t)),a=o.instance;return o.disposable&&n.scope.attach(o.disposable),this.getInstance=function(){return a},a},e.prototype.promote=function(t){var n=this.entry;return new e({manager:t,loader:n.loader,factory:n.factory})},e}();t.getResolvedConstructor=r;var S=function(){function e(t){this._handles={},this._isLocked=!1;var n;if(t instanceof e){if(t.isDisposed)throw new Error("Parent ResourceScope has already been disposed!");n=t.options,this._parent=t,this._level=t._level+1}else n=t||{},this._level=0;this.scope=new p.default,this.options=n}return Object.defineProperty(e.prototype,"isDisposed",{get:function(){return this.scope.isDisposed},enumerable:!0,configurable:!0}),e.prototype.block=function(e){return this._expose(e)},e.prototype.isDescendantOf=function(e){return this._level>e._level},e.prototype.getHandle=function(e){for(var t=this,n=e.id;!(n in t._handles)&&t._parent;)t=t._parent;var r=t._handles;return r[n]||this.options.useFactoriesOnKeys&&(e.factory&&(r[n]=new E({factory:e.factory,manager:t}))||e.loader&&(r[n]=new E({loader:new b(e.loader),manager:t})))},e.prototype.expose=function(e,t,n){return this._expose(e,function(e){return new E({factory:t.factory,loader:t.loader,manager:e},n&&e)})},e.prototype.getLoader=function(){this.lock();var e=new w(this);return this.getLoader=function(){return e},e},e.prototype.dispose=function(){this.scope.dispose(),this._handles={},this.consume=this.resolve=o,this.getLoader=a},e.prototype.bind=function(e){var t=this.getHandle(e);return t?this._expose(e,function(e){return t.promote(e)}):this},e.prototype.lock=function(){this._isLocked=!!this.options.lockResourcesForChildren},e.prototype.consume=function(e,n){var r=this;this.lock();var o,a=e.key||e,i=e.flags;if(a===t.resourceScopeKey){var s;o=function(){return s||(s=r.scope.attach(new T(r,n||{owner:""+a}))),s}}else{var u=this._getValidHandle(e,[]);if(u instanceof Error){if(!(4&i))throw u}else o=function(){return u.getInstance(a,n||{owner:""+a})}}return 1&i?o:o&&o()},e.prototype.isExposed=function(e){return!(this._getValidHandle(e,[])instanceof Error)},e.prototype.resolve=function(e,t){for(var n={},r=0,o=Object.keys(e);r<o.length;r++){var a=o[r];e[a]&&(n[a]=this.consume(e[a],t))}return n},e.prototype._getValidHandle=function(e,n){var r=e.key||e,o=r.id;if(n.indexOf(r)>=0)throw new Error(r+" has a circular dependency.");var a=this._handles[o];if(a&&a.manager)return a;var i=this.getHandle(r);if(!i)return new Error(r+" is being consumed, but has not been exposed by a parent scope.");var s=i.entry,u=s.factory;if(!u)return new Error(r+" is being consumed synchronously, but was exposed asynchronously and has not been loaded.");n.push(r);for(var c=i.manager,l=2&e.flags?this:c||s.manager,f=u.dependencies||{},d=0,p=Object.keys(f);d<p.length;d++){var h=p[d],m=f[h];if(m&&(m.key||m)!==t.resourceScopeKey){var g=this._getValidHandle(m,n);if(g instanceof Error){if(!(4&m.flags))return n.pop(),g}else g.manager.isDescendantOf(l)&&(l=g.manager)}}return n.pop(),c&&c===l||(i=new E(s,l),l._handles[o]=i),this._handles[o]=i},e.prototype._expose=function(n,r){if(this.isDisposed)throw new Error("Cannot expose a resource on a ResourceScope that has been disposed.");if(n===t.resourceScopeKey)throw new Error("It is illegal to expose the ResourceScope key");var o=n.id,a=this._isLocked?this.scope.attach(new e(this)):this,i=a._handles;if(i[o]&&this.options.noDoubleExpose)throw new Error(n+" has already been exposed/consumed at this scope.");return i[o]=r?r(a):void 0,a},e}(),w=function(){function e(e){this._handleManager=e,this._loadState={},this._root=e.consume(t.asyncLoadBarrierKey.optional)}return e.prototype.loadAsync=function(e){var n=e.key||e;if(n===t.resourceScopeKey)return f.default.resolve();var r=e.flags,o=this._loadAsync(n,!!(8&r));return 4&r?o.catch(i):o},e.prototype.loadAllAsync=function(e,t){if(e){var n=Object.keys(e),r=n.length;if(r>0){for(var o={};r--;){var a=n[r],u=e[a];u&&(o[a]=this.loadAsync(t?u.bypass:u))}return f.default.all(o).then(i,s)}}return f.default.resolve()},e.prototype._loadAsync=function(e,t){var n=this,r=e.id,o=this._loadState,a=o[r];if(a)return a;var i=this._handleManager,s=i.getHandle(e);if(!s)return o[r]=f.default.reject(new Error(e+" is being loaded, but has no factory/loader."));o[r]=f.default.resolve();var u=s.entry,c=u.factory;if(c)return o[r]=this.loadAllAsync(c.dependencies,t);var l=u.loader;if(!l)return o[r]=f.default.reject(new Error(e+" is being loaded, but no loader was defined."));var d=this._root,p=!t&&d&&d.wait()||f.default.resolve();return o[r]=p.then(function(){return l.load()}).then(function(e){u.factory=e;var r=e.dependencies;if(r)return n.loadAllAsync(r,t)})},e}(),T=function(){function e(t,n){var r,o;t instanceof e?(o=t._handleManager,r=t._owner):t instanceof S?o=t:n=t||n;var a=new p.default;if(o){if(o.scope.isDisposed)throw new Error("Parent ResourceScope has already been disposed.");o.lock(),o.options.lockResourcesForChildren||(this._prepareWrite=this._fork)}this._handleManager=o||(o=a.attach(new S(n))),this._scope=a;var i=n?n.owner:"";this._owner=r?r+" > "+i:i}return e.prototype.consume=function(e){return this._handleManager.consume(e)},e.prototype.consumeAsync=function(e){var t=this._handleManager;return c(t.getLoader().loadAsync(e)).then(function(){return t.consume(e)})},e.prototype.load=function(e){return c(this._handleManager.getLoader().loadAllAsync(e))},e.prototype.exposeAsync=function(e,t){this._expose(e,{loader:new b(t)})},e.prototype.exposeFactory=function(e,t){this._expose(e,{factory:t})},e.prototype.expose=function(e,t){return this._expose(e,{factory:new y(t)},t),t},e.prototype.block=function(e){this._handleManager=this._prepareWrite().block(e)},e.prototype.bind=function(e){this._handleManager=this._prepareWrite().bind(e)},e.prototype.isDefined=function(e){var t=this._handleManager;return!t.isDisposed&&!!t.getHandle(e)},e.prototype.isExposed=function(e){var t=this._handleManager;return!t.isDisposed&&t.isExposed(e)},e.prototype.injected=function(t,n){void 0===n&&(n={});var r=n.injectChildResourceScope,o={owner:n.owner||t.name},a=r?this._scope.attach(new e(this,o)):this,i=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this.resources=a;var o=t.apply(this,e)||this;return r&&h.hook(o,u),o};return i.prototype=t.prototype,i},e.prototype.resolve=function(e){return this._handleManager.resolve(e)},e.prototype.resolveAsync=function(e){var t=this;return this.load(e).then(function(){return t.resolve(e)})},e.prototype.resolved=function(e,t){return r(e,this.resolve(l.__assign({},e.dependencies||{},t||{})))},e.prototype.resolvedAsync=function(e,t){var n=this;return this.load(l.__assign({},e.dependencies||{},t||{})).then(function(){return n.resolved(e,t)})},e.prototype.dispose=function(){this._scope.dispose()},e.prototype._expose=function(e,t,n){this._handleManager=this._prepareWrite().expose(e,t,n)},e.prototype._prepareWrite=function(){return this._handleManager},e.prototype._fork=function(){return delete this._prepareWrite,this._scope.attach(new S(this._handleManager))},e}();t.ResourceScope=T;t.default=T},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=function(){function e(e){this._promise=new r.SignalPromise(e)}return e.prototype.getPromise=function(){return this._promise},e.prototype.cancel=function(){this._promise.cancel()},e.prototype.complete=function(e){this._promise._completed(e)},e.prototype.error=function(e){this._promise._error(e)},e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),o=n(99),a=function(){function e(){}return e.generateFabricColors=function(t,n){void 0===n&&(n=!1);var a={themeDarker:o.Shade.Shade8,themeDark:o.Shade.Shade7,themeDarkAlt:o.Shade.Shade6,themeLight:o.Shade.Shade3,themeLighter:o.Shade.Shade2,themeLighterAlt:o.Shade.Shade1,themePrimary:o.Shade.Unshaded,themeAccent:o.Shade.Unshaded,themeSecondary:o.Shade.Shade5,themeTertiary:o.Shade.Shade4},i=e._getDefaultThemeTokenMap(),s=r.default.fromRgba(t.R,t.G,t.B);for(var u in a){var c=a[u];i[u]=o.getShade(s,c,n)}var l=i.themeAccent;if(i.themeAccentTranslucent10=l?r.default.fromRgba(l.R,l.G,l.B,.1*r.default.maxComponent):null,n){var f={black:"#fff",blackTranslucent40:"#66ffffff",neutralDark:"#f4f4f4",neutralPrimary:"#fff",neutralPrimaryTranslucent50:"#7fffffff",neutralPrimaryAlt:"#dadada",neutralSecondary:"#d0d0d0",neutralTertiary:"#c8c8c8",neutralTertiaryAlt:"#6d6d6d",neutralQuaternary:"#4f4f4f",neutralQuaternaryAlt:"#484848",cmdbarSelected:"#4f4f4f",cmdbarSelectedHover:"#484848",neutralLight:"#3f3f3f",neutralLighter:"#313131",neutralLighterAlt:"#282828",white:"#1f1f1f",whiteTranslucent40:"#661f1f1f",error:"#f00",errorBackground:"#7e3333"};for(var d in f)f.hasOwnProperty(d)&&(i[d]=r.default.fromHtmlColor(f[d]))}return i},e._getDefaultThemeTokenMap=function(){return{backgroundOverlay:null,themeDarker:null,themeDark:null,themeDarkAlt:null,themePrimary:null,themeSecondary:null,themeTertiary:null,themeLight:null,themeLighter:null,themeLighterAlt:null,black:null,cmdbarSelected:null,cmdbarSelectedHover:null,neutralDark:null,neutralPrimary:null,neutralPrimaryAlt:null,neutralPrimaryTranslucent50:null,neutralSecondary:null,neutralSecondaryAlt:null,neutralTertiary:null,neutralTertiaryAlt:null,neutralQuaternary:null,neutralQuaternaryAlt:null,neutralLight:null,neutralLighter:null,neutralLighterAlt:null,white:null,blackTranslucent40:null,whiteTranslucent40:null,yellow:null,yellowLight:null,orange:null,orangeLight:null,redDark:null,red:null,magentaDark:null,magenta:null,magentaLight:null,purpleDark:null,purple:null,purpleLight:null,blueDark:null,blueMid:null,blue:null,blueLight:null,tealDark:null,teal:null,tealLight:null,greenDark:null,green:null,greenLight:null,error:null,errorBackground:null,success:null,successBackground:null,alert:null,alertBackground:null,infoBackground:null,info:null,orangeLighter:null}},e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(15),o=n(6),a=function(){function e(){}return e.clearThemeCache=function(){var t=e.getThemeDataStore();t.remove("Data"),t.remove("CacheToken"),t.remove("CacheVersion")},e.getCachedTheme=function(t){var n,r=e.getThemeDataStore();try{t===r.getValue("CacheToken")&&"1.7"===r.getValue("CacheVersion")&&(n=r.getValue("Data"))}catch(e){}return n},e.updateThemeCache=function(t,n){var r=e.getThemeDataStore();r.setValue("Data",t),r.setValue("CacheToken",n||t.cacheToken),r.setValue("CacheVersion","1.7")},e.getThemeDataStore=function(){return new r.default("odTheme",o.default.local)},e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r;!function(e){e[e.File=0]="File",e[e.Folder=1]="Folder",e[e.Media=2]="Media",e[e.OneNote=3]="OneNote",e[e.Unknown=4]="Unknown",e[e.Error=5]="Error",e[e.App=6]="App",e[e.Subsite=7]="Subsite",e[e.Shortcut=8]="Shortcut"}(r=t.ItemType||(t.ItemType={})),t.default=r},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(58)),r(n(87))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(16);t.addEventProps=r.addEventProps,t.ClonedEventType=r.ClonedEventType,t.ValidationErrorType=r.ValidationErrorType,t.AccountType=r.AccountType,t.EventBase=r.EventBase;var o=n(9);t.Engagement=o.Engagement;var a=n(59);t.Nav=a.Nav;var i=n(60);t.PLTHttpRequest=i.PLTHttpRequest;var s=n(10);t.Qos=s.Qos;var u=n(62);t.ResultTypeEnum=u.ResultTypeEnum;var c=n(63);t.APICallPerformanceData=c.default;var l=n(38);t.AriaLoggerCore=l.default;var f=n(74);t.Beacon=f.default;var d=n(43);t.BeaconCache=d.default;var p=n(85);t.ControlPerformanceData=p.default;var h=n(86);t.CorrelationVector=h.default;var m=n(1);t.ErrorHelper=m.default;var g=n(36);t.PageTransitionType=g.default;var v=n(20);t.RumOneLogger=v.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.Nav=r.createSingleEvent({eventName:"Nav,",shortEventName:"Nav"},{viewParams:4,url:1}),t.default=t.Nav},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.PLTHttpRequest=r.createSingleEvent({eventName:"PLTHttpRequest,",shortEventName:"PLTHttpRequest",samplingFeature:{ODB:!0,ODC:"PLTHttpRequestSampling",Fallback:!1}},{startTime:2,url:1,duration:2}),t.default=t.PLTHttpRequest},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){if(e<=0)throw new Error("Size must be positive");this._size=e,this._buffer=new Array(e),this._length=0,this._head=-1}return e.prototype.push=function(e){this._length<this._size&&this._length++,this._head++,this._head===this._size&&(this._head=0),this._buffer[this._head]=e},e.prototype.popOldest=function(){if(0===this._length)return null;var e=(this._head-this._length+1+this._size)%this._size;return this._length--,this._buffer[e]},e}();t.CircularBuffer=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(0).__exportStar(n(11),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(20);t.default=r.APICallPerformanceData},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){function t(e){return n=RegExp(e+"(\\d+)([\\d.]*)").exec(f)}e||(e=window&&window.navigator&&navigator.userAgent||"");var n,r,o,a,i,s,u,c,l=e,f=e.toLowerCase();t("msie ")?(r=!0,o=!!n&&"9"===n[1]):t("trident.*rv:")?r=!0:t("edge/")?a=!0:t("fxios|firefox/")?i=!0:t("(?:chrome|crios)/")?s=!0:/safari\/(\d+)/.test(f)&&(u=!0,t("version/")),RegExp("electron/(\\d+)([\\d.]*)").exec(f)&&(c=!0);var d=n&&parseInt(n[1],10)||0,p=n&&n[2]&&n[2].substr(1)||"0",h=/windows phone|wpdesktop/.test(f),m=h||/ipad|iphone|ipod|android/.exec(f),g=m&&m[0],v="android"===g,_="ipad"===g,y=!!g&&!v,b=!m&&f.indexOf("macintosh")>-1,E=!m&&f.indexOf("windows nt")>-1,S=f.indexOf("sharepointdesktop")>-1,w=!1,T=!1,x=!1,P=!1;if(window.document){var C=document.createElement("style");C.type="text/css",w=!C.styleSheet,T="addBehavior"in document.createElement("div");var O=document.createElement("input");O.type="file";var D=window.File,k=D&&D.prototype;P=!(!k||!(k.slice||k.mozSlice||k.webkitSlice)),x="webkitdirectory"in O&&!c}var R=/[\s\(](os|os x|windows (?:phone|nt)|android) ([\d._]+)/.exec(f);return{isSharePointDesktopApp:!!S,isChrome:!!s,isEdge:!!a,isFirefox:!!i,isIE:!!r,isIE9:!!o,isSafari:!!u,isElectron:!!c,browserName:r?"IE":a?"Edge":s?"Chrome":i?"Firefox":u?"Safari":"NA",browserMajor:d,browserMinor:p,isAndroid:v,isIOS:y,isMac:b,isWindows:E,isWinPhone:h,osVersion:R?R[2]:"NA",osName:E?"Windows":h?"Windows Phone":b?"OSX":y?"IOS":v?"Android":"NA",isWindows81:!m&&/windows (?:8\.1|nt 6\.3)/.test(f),isWindows10:!m&&f.indexOf("windows nt 10")>-1,isWindows7:!m&&f.indexOf("windows nt 6.1")>-1,isMobile:!!m,isIPad:_,areCSS3TransitionsSupported:!r||d>9,areTouchEventsSupported:"ontouchstart"in window,isFolderUploadSupported:x,isHtml5FileUploadSupported:P,isRetinaSupported:window.devicePixelRatio>1,isUnlimitedStyleSheetsSupported:w,isWebDavSupported:T,userAgent:l}}return e}();t.PlatformDetection=r},function(e,t,n){"use strict";function r(e,n){var r=0===e.lastIndexOf(t.MARKER_PREFIX,0)?e:t.MARKER_PREFIX+e;(null===n||void 0===n||c<n)&&(u?s.mark(r):l.push({name:r,startTime:Date.now()}),c++)}function o(e){var n=0===e.lastIndexOf(t.MARKER_PREFIX,0)?e:t.MARKER_PREFIX+e;if(u){var r=s.getEntriesByName(n);return r&&r.length>0?Math.round(r[0].startTime):NaN}var o=l.filter(function(e){return e.name===n})[0];return o&&o.startTime}function a(e){var n=[];e&&(n=e.map(function(e){return 0===e.lastIndexOf(t.MARKER_PREFIX,0)?e:t.MARKER_PREFIX+e})),u?s.getEntriesByType("mark").filter(function(e){return n.length>0?n.indexOf(e.name)>=0:0===e.name.lastIndexOf(t.MARKER_PREFIX,0)}).forEach(function(e){s.clearMarks(e.name)}):l=[]}function i(){return u?s.getEntriesByType("mark").filter(function(e){return 0===e.name.lastIndexOf(t.MARKER_PREFIX,0)}):l}Object.defineProperty(t,"__esModule",{value:!0});var s=window.performance,u=!!s&&"function"==typeof s.mark&&"function"==typeof s.clearMarks&&"function"==typeof s.now;t.HighResolutionTimingSupported=u,t.MARKER_PREFIX="EUPL.";var c=0,l=window._perfMarks=window._perfMarks||[];t.mark=r,t.getMarkerTime=o,t.clearMarks=a,t.getAllMarks=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(0).__exportStar(n(33),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(39),o=(n(1),function(){function e(e,t,n,r,o){this._endpointUrl=e.callbackEndpoint.authority+e.callbackEndpoint.path;var a={};if(o)for(var i=0;i<o.length;++i)a[o[i].EventType]=a[o[i].EventType]+1||1;var s={TelemetryTenantId:e.telemetryTenantToken.substring(0,32),AppVersion:e.appVersion,EventType:t,StatusCode:n,EventCount:o?o.length:0,Timestamp:r,Environment:e.environment||"",DatapointSchemaVersion:"1.0",TelemetrySource:"Aria",EventSummary:a,Workload:e.workload||"",FarmLabel:e.farmLabel||""};this._dataCompletenessJson=JSON.stringify(s)}return Object.defineProperty(e.prototype,"endpointUrl",{get:function(){return this._endpointUrl},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"dataCompletenessJson",{get:function(){return this._dataCompletenessJson},enumerable:!0,configurable:!0}),e.prototype.send=function(){new r.default({method:"POST",url:this._endpointUrl,json:this._dataCompletenessJson,requestTimeoutInMS:1e3}).start(function(e,t){},function(e,t,n){})},e}());t.DataCompletenessInfo=o},function(e,t,n){"use strict";function r(e,t,n){function r(e,t){if(e===t)return!0;if(null===e||null===t)return!1;if("object"!=typeof e||"object"!=typeof t)return!1;var n=Object.keys(e).sort(),s=Object.keys(t).sort();return n.length===s.length&&!!n.every(function(n,u){if(n!==s[u])return!1;if("function"==typeof e[n]||"function"==typeof t[n])return!0;if(i(e[n],t[n]))return!0;if("object"==typeof e[n]){if(-1!==o.indexOf(e[n]))throw new Error("Cannot perform DeepCompare() because a circular reference was encountered, object: "+e+", property: "+n);if(o.push(e[n]),-1!==a.indexOf(t[n]))throw new Error("Cannot perform DeepCompare() because a circular reference was encountered, object: "+t+", property: "+n);return a.push(t[n]),r(e[n],t[n])?(o.pop(),a.pop(),!0):!1}return!1})}var o=[],a=[],i=n||function(e,t){return e===t};return r(e,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.deepCompare=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(70);t.SimpleUri=r.SPResourcePath,t.default=r.SPResourcePath},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(0).__exportStar(n(71),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e[e.absolute=0]="absolute",e[e.relative=1]="relative",e[e.serverRelative=2]="serverRelative"}(t.SPResourcePathFormat||(t.SPResourcePathFormat={}));var r=function(){function e(e){void 0===e&&(e=""),this._value=e}return Object.defineProperty(e.prototype,"format",{get:function(){return this._getFormat()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"authority",{get:function(){return this._getAuthority()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"domain",{get:function(){return this._getDomain()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"path",{get:function(){return this._getPath()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"segments",{get:function(){return this._getSegments()},enumerable:!0,configurable:!0}),e.prototype._getFormat=function(){var e;if(this._getAuthority())e=0;else{var t=this._getPath();e=0===t.indexOf("/")?2:1}return this._getFormat=function(){return e},e},e.prototype._getAuthority=function(){var e,t=this._getEndIndexOfRootDelimeter();if(t>-1){var n=this._value.indexOf("/",t);e=n>-1?this._value.substring(0,n):this._value}else e="";return this._getAuthority=function(){return e},e},e.prototype._getDomain=function(){var e,t=this._getAuthority();if(t){var n=this._getEndIndexOfRootDelimeter();e=t.substring(n)}else e="";return this._getDomain=function(){return e},e},e.prototype._getPath=function(){var e,t=this._getEndIndexOfRootDelimeter();if(t>-1){var n=this._value.indexOf("/",t);e=n>-1?this._value.substring(n):""}else e=this._value;return this._getPath=function(){return e},e},e.prototype._getSegments=function(){var e=this._getPath(),t=e.split("/");return this._getSegments=function(){return t},t},e.prototype._getEndIndexOfRootDelimeter=function(){var e,t=this._value.indexOf("//"),n=this._value.indexOf("/");return e=t>-1&&t<=n?t+"//".length:-1,this._getEndIndexOfRootDelimeter=function(){return e},e},e}();t.SPResourcePath=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(4),a=n(73),i=n(12),s=n(41),u=function(){function e(e){var t=e.logStartEvents,n=void 0===t||t,r=e.context,o=void 0===r?{}:r;this._ariaLoader=e.ariaLoader,this._logStartEvents=n,this._disableCookies=e.disableCookies,this._tenantToken=e.tenantToken,this._ariaQosParams=e.ariaQos,this._ariaOfflineCacheParams=e.offlineCache,this._context=o}return e.prototype.attach=function(e){var t,n=this,r=!1;return this._getAria().then(function(o){r||(t=n._createLogHandler(o),e.addLogHandler(t).forEach(t))}),function(){r=!0,t&&e.removeLogHandler(t)}},e.prototype._getAria=function(){var e=this,t=this._ariaLoader().then(function(t){return e._initializeLogManager(t),t});return this._getAria=function(){return t},t},e.prototype._createLogHandler=function(e){var t=this,n=this._createLogger(e),r=this._ariaQosParams;return function(s){try{if(s.enabled&&(s.eventType!==o.ClonedEventType.Start||t._logStartEvents)&&(!r||!r.isQosEvent(s))){var u=a.buildAriaEvent(e,s);n.logEvent(u)}}catch(t){var c=void 0;t instanceof e.Exception&&(c=new Error("Aria error: "+t.toString())),t&&t.handled||i.log(c||t)}}},e.prototype._initializeLogManager=function(e){var t=this,n=this._ariaOfflineCacheParams;e.LogManager.isInitialized()||(e.LogManager.initialize(this._tenantToken,r.__assign({disableCookies:this._disableCookies},n?{browserOverrides:{onGetData:n.getData,onSaveData:n.saveData}}:{})),"undefined"!=typeof window&&"function"==typeof window.addEventListener&&window.addEventListener("beforeunload",function(t){e.LogManager.flush()}));var o=this._ariaQosParams;o&&e.LogManager.addCallbackListener(function(e,n,r,a){r===t._tenantToken&&o.reportQos({result:e,statusCode:n,events:a})})},e.prototype._createLogger=function(e){var t=new e.Logger(this._tenantToken),n=this._context,o=n.Session,a=n.Version,i=n.OSName,u=n.OSVersion,c=n.Market,l=n.UserId,f=n.Manifest,d=r.__rest(n,["Session","Version","OSName","OSVersion","Market","UserId","Manifest"]),p=t.getSemanticContext();o&&t.setContext("AppInfo.Session",o),f&&t.setContext("AppInfo.Manifest",f),a&&p.setAppVersion(a),p.setUserLanguage(c||""),l&&p.setUserId(l),i&&p.setDeviceOsName(i),u&&p.setDeviceOsVersion(u);for(var h in d)if(Object.prototype.hasOwnProperty.call(d,h)){var m=d[h];if(void 0===m||null===m)continue;var g=s.capitalize(h);t.setContext(g,d[h])}return t},e}();t.AriaTelemetryHandler=u},function(e,t,n){"use strict";function r(e){var t={CorrelationVector:e.vector.toString(),ValidationErrors:e.validationErrors,WebLog_FullName:e.eventName,WebLog_EventType:i.ClonedEventType[e.eventType]};e.eventType===i.ClonedEventType.End&&(t.Duration=e.endTime-e.startTime);for(var n=e.eventName.split(","),r=0,o=n;r<o.length;r++){var a=o[r];a&&(t["WebLog_Type_"+a]=1)}var u=e.data,c=e.context;if(c)for(var l in c)if(Object.prototype.hasOwnProperty.call(c,l)){var f=c[l];if(void 0===f||null===f)continue;var d=s.capitalize(l);t[d]=f}if(u)for(var p in u)if(Object.prototype.hasOwnProperty.call(u,p)){var f=u[p];if(void 0===f||null===f)continue;var h=e.metadata[p];if(h){var d=h.isPrefixingDisabled?s.capitalize(p):s.capitalize(h.definedInName)+"_"+p,m=h.type;if(4===m)for(var g in f)void 0!==f[g]&&(t[d+"_"+g.replace(".","_")]=f[g]);else t[d]=6===m?h.typeRef[f]:f}}return{name:e.isEventTypePrefixingDisabled?n[n.length-2]:"ev_"+n[n.length-2],values:t}}function o(e,t){var n=r(t),o=n.name,i=n.values,s=new e.EventProperties;return s.name=o,a(e,s,i),s}function a(e,t,n){var r;try{for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(r=o,t.setProperty(o,n[o]))}catch(t){var a=void 0,i=void 0;throw t instanceof e.Exception&&(a=t.ErrorCode(),i=new Error("Aria error: "+t.toString())),i&&(t.handled=!0,u.logError(i,{errorCode:a,propertyKey:r})),t}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),s=n(41),u=n(12);t.getAriaEventInfo=r,t.buildAriaEvent=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),a=n(1),i=n(75),s=n(43),u=n(15),c=n(6),l=n(44);!function(e){function t(e,t,n,r){if(ce)throw new Error("The beacon has already been added to the logging manager with event name prefix "+ie+".");var o=!1;if(s.default.instance&&(e=s.default.eventNamePrefix,t=s.default.handlers,o=!0),!e||!t)throw new Error("You have to pass in eventNamePrefix and IBeaconHandlers object if no BeaconCache present.");ce=new fe(e,t,o,n,r);for(var a=0;a<ue;a++){var i=se.getValue(a.toString());i&&i.name&&i.props&&_(i.name,i.props)}}function n(){oe||(G=new W,$=new Array(0),ee=new Array(0),r(x,1),oe=!0)}function r(e,t){if(!Boolean($[e])){var n=new K(e,t),r=Y;G.wsaStreams[r]=n,Y++,Z+=A,$[e]=r}}function f(e,t){try{var n=new z(t);if(g())return;ne=!0,p(V,e);var r=G.wsaStreams[$[e]];if(Boolean(r)){if(!(te<R))throw"Beacon: MAX_ROWS_IN_STREAM exceeded for stream ID "+String(e);r.Rows[te++]=n,Z+=d(n),p(q,te)}}catch(e){a.default.log(e)}}function d(e){for(var t=M,n=0;n<e.Vals.length;n++){t+=2*String(e.Vals[n]).length}return t+=6*(e.Vals.length-1)}function p(e,t){if(!(e<1||e>j||t<0||t>U)){var n=null,r=ee[e];if(Boolean(r)&&(n=G.wsaDatapoints[r]),null==n){var o=new Q(e,t),a=X;G.wsaDatapoints[a]=o,ee[e]=a,X++}else n.Val=t}}function h(){if(null==G)return"";try{if(ne){Boolean(re)?p(H,F):(p(H,N),re=!0),G.EndTime=E();var e=null;try{e=JSON.stringify(G)}catch(e){a.default.log(e)}return m(),e}}catch(e){return a.default.log(e),""}}function m(){$=new Array(0),ee=new Array(0),X=0,Y=0,te=0,Z=0,X=0;var e=G.CorrelationId;G=new W,G.CorrelationId=e,r(x,1),ne=!1}function g(){var e=X*I+Z;return e>=k&&(ce.beacon(),(e=X*I+Z)>=k)}function v(e){n(),Boolean(G)&&(G.CorrelationId=null!==e&&void 0!==e?e:ae)}function _(e,t){if(n(),Boolean(e)&&Boolean(t)){var r=new Array(D+1);r[C]=P,r[O]=e;var o=D;for(var a in t){var i=t[a];void 0!==i&&null!==i&&(i instanceof Date&&(i=i.getTime()),r[o++]=a,r[o++]=i)}f(x,r)}}function y(){return n(),h()}function b(){var e=new Date,t=e.getTime();return 0===J&&(J=t),1+t-J&2147483647}function E(){var e=new Date,t=e.getTime();return t+=L,t*=1e4}var S=5e3,w=100,T=5e3,x=1234,P="V1",C=0,O=1,D=2,k=65536,R=1e3,M=4,I=12,A=12,L=116444736e5,U=4294967295,j=2147483647,N=0,F=1,B=16,V=8048,q=7993,H=60,z=function(){function e(e){this.Tic=0,this.Vals=null;var t=this;t.Tic=b();var n=e.length;t.Vals=new Array(n);for(var r=0;r<n;r++)t.Vals[r]=e[r]}return e}(),Q=function(){function e(e,t){var n=this;n.Id=e,n.Val=t,n.Tic=b()}return e}(),K=function(){function e(e,t){var n=this;n.Id=e,n.Width=t,n.Rows=new Array(0)}return e}(),W=function(){function e(){this.StartTime=null,this.EndTime=null,this.Flags=0,this.wsaDatapoints=null,this.wsaStreams=null;var e=this;e.StartTime=E(),e.EndTime=null,e.CorrelationId=null,e.Flags=B,e.wsaDatapoints=new Array(0),e.wsaStreams=new Array(0)}return e}(),J=0,G=null,X=0,Y=0,Z=0,$=null,ee=null,te=0,ne=!1,re=!1,oe=!1,ae="00000000-0000-0000-0000-000000000000",ie="",se=null,ue=null,ce=null,le=null,fe=function(e){function t(t,n,r,o,a){void 0===a&&(a=S);var s=e.call(this,"/_layouts/15/WsaUpload.ashx",w,[a],!0,T,i.default.DEFAULT_TOTAL_RETRIES,i.default.DEFAULT_RESET_TOTAL_RETRIES_AFTER,r)||this;return ie=t,le=n,se=new u.default(l.default.STORE_KEY,c.default.session),ue=se.getValue(l.default.STORE_SIZE_KEY),ue||(ue=0),o&&(s._cid=o),s}return o.__extends(t,e),t.prototype.beacon=function(){if("localhost"!==location.hostname){var e=y();if(null!=e&&e.length>0){var t={};t["Content-Type"]="application/json",this.sendBeacon(e,t,1e4)}}else if(!window.disableBeaconLogToConsole)try{console.log('Beacon: Uploaded to COSMOS (To disable logging to the console set "window.disableBeaconLogToConsole = true" in the debug window)')}catch(e){}ue=0,se.setValue(l.default.STORE_SIZE_KEY,ue)},t.prototype._createBeaconRequest=function(e){v(this._correlationId);for(var t=0;t<e.length;t++){var n=e[t];l.default.processAndLogEvent({event:n,logFunc:function(e,t){_(e,t)},eventNamePrefix:ie,handlers:le})}this.beacon()},t.prototype._onNewEvent=function(e){},Object.defineProperty(t.prototype,"_correlationId",{get:function(){if(this._cid)return this._cid;var e=window._spPageContextInfo;return e?e.CorrelationId:ae},enumerable:!0,configurable:!0}),t}(i.default);e.addToLoggingManager=t}(r||(r={})),t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(22),o=n(76),a=n(39),i=n(14),s=function(){function e(t,n,r,a,i,s,u,c){var l=this;this._lastSendBeacon=0,this._endPointUrl=t,this._maxCriticalFlushInterval=i,this._totalRetries=void 0===s?e.DEFAULT_TOTAL_RETRIES:s,this._totalRetriesStartValue=this._totalRetries,this._resetTotalRetriesAfter=void 0===u?e.DEFAULT_RESET_TOTAL_RETRIES_AFTER:u,this._ignorePreviousEvents=void 0!==c&&c,this._eventBatchCache=new o.default(n,r,function(e){l._onNewEvent&&l._onNewEvent(e)},function(e){l._createBeaconRequest(e)},a),this.init()}return e.prototype.sendBeacon=function(e,t,n){this._sendBeacon(e,t,n,0)},e.prototype._sendBeacon=function(e,t,n,o){var s=this;0===o&&(this._lastSendBeacon=r.Manager.getTime());var u=new a.default({url:this._endPointUrl,json:e,headers:t,requestTimeoutInMS:n}),c=new i.Beacon({retryCount:o,totalRetries:this._totalRetries});u.start(function(e,t){c.end({status:t+"",success:!0}),++s._successfulLogRequests>=s._resetTotalRetriesAfter&&(s._successfulLogRequests=s._resetTotalRetriesAfter,s._totalRetries=s._totalRetriesStartValue)},function(r,a,i){s._successfulLogRequests=0,c.end({status:a+"",success:!1}),-2===a&&s._totalRetries>0&&(s._totalRetries--,s._sendBeacon(e,t,n,o+1))})},e.prototype.init=function(){var e=this,t=r.Manager.addLogHandler(function(t){e.addEvent(t)});if(!this._ignorePreviousEvents)for(var n=0;n<t.length;n++)this.addEvent(t[n])},e.prototype.addEvent=function(e){e.enabled&&(this._eventBatchCache.addEvent(e),e.critical&&(!this._lastSendBeacon||r.Manager.getTime()-this._lastSendBeacon>this._maxCriticalFlushInterval)&&this._eventBatchCache.flush())},e.DEFAULT_TOTAL_RETRIES=3,e.DEFAULT_RESET_TOTAL_RETRIES_AFTER=3,e}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),o=n(1),a=function(){function e(e,t,n,r,o){this._events=[],this._flushCount=0,this._maxSize=e,this._newEventHandler=n,this._flushHandler=r,this._maxFlushTimes=t,this._useSlidingWindow=o}return e.prototype.addEvent=function(e){if(this._events.push(e),this._newEventHandler)try{this._newEventHandler(e)}catch(e){o.default.log(e)}r.Beacon.isTypeOf(e)||(this._events.length>=this._maxSize?this.flush():this._setFlushTimeout(!1))},e.prototype.flush=function(){this._setFlushTimeout(!0)},e.prototype._handleFlush=function(){this._clearFlushTimeout(),this._events.length&&(this._flushHandler(this._events),this._events=[])},e.prototype._clearFlushTimeout=function(){this._flushTimeoutId&&(window.clearTimeout(this._flushTimeoutId),this._flushTimeoutId=null),this._immediateflushTimeoutId&&(window.clearTimeout(this._immediateflushTimeoutId),this._immediateflushTimeoutId=null)},e.prototype._setFlushTimeout=function(e){var t=this;this._immediateflushTimeoutId||(this._useSlidingWindow?(this._clearFlushTimeout(),e?this._immediateflushTimeoutId=window.setTimeout(function(){t._handleFlush()},0):this._flushTimeoutId=window.setTimeout(function(){t._handleFlush()},this._getFlushTime())):e?this._immediateflushTimeoutId||(this._immediateflushTimeoutId=window.setTimeout(function(){t._handleFlush()},0)):this._flushTimeoutId||(this._flushTimeoutId=window.setTimeout(function(){t._handleFlush()},this._getFlushTime())))},e.prototype._getFlushTime=function(){if(this._flushCount<this._maxFlushTimes.length){var e=this._flushCount;return this._flushCount++,this._maxFlushTimes[e]}return this._maxFlushTimes[this._maxFlushTimes.length-1]},e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.PLT=r.createSingleEvent({eventName:"PLT,",shortEventName:"PLT",samplingFeature:{ODB:!0,ODC:"PLTLoggingSampling",Fallback:!1}},{name:{isKey:!0,type:1},w3cResponseEnd:2,prefetchStart:2,deferredListDataRender:2,appStart:2,preRender:2,dataFetch:2,dataFetchServerTime:2,postRender:2,render:2,plt:2,pltWithUnload:2,httpRequests:2,appCacheHit:3}),t.default=t.PLT},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.UnhandledError=r.createSingleEvent({eventName:"UnhandledError,",shortEventName:"UnhandledError",critical:!0,requiresParent:!1},{message:1,stack:1,builtStack:1,line:2,col:2,url:1}),t.default=t.UnhandledError},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.RequireJSError=r.createSingleEvent({eventName:"RequireJSError,",shortEventName:"RequireJSError",critical:!0,requiresParent:!1},{message:1,requireModules:5,requireType:1,stack:1}),t.default=t.RequireJSError},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(0).__exportStar(n(13),t);var r=n(13);t.default=r.CaughtError},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(0).__exportStar(n(17),t);var r=n(17);t.default=r.QosError},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(0).__exportStar(n(18),t);var r=n(18);t.default=r.Verbose},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.PageInit=r.createSingleEvent({eventName:"PageInit,",shortEventName:"PageInit",requiresParent:!1},{screenWidth:2,screenHeight:2,availableScreenWidth:2,availableScreenHeight:2,renderWidth:2,renderHeight:2,browserWidth:2,browserHeight:2,devicePixelRatio:2,referrer:1}),t.default=t.PageInit},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r;!function(e){e[e.Low=0]="Low",e[e.Normal=1]="Normal"}(r||(r={})),t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(20);t.default=r.ControlPerformanceData},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(28);t.default=r.CorrelationVector},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(45);t.StringHelper=r;var o=n(88);t.SPAlternativeUrls=o;var a=n(89);t.ABExperiment=a.ABExperiment,t.ABExpHash=a.ABExpHash,t.TargetType=a.TargetType;var i=n(48);t.Killswitch=i.Killswitch;var s=n(93);t.loadFallbackShellThemableCss=s.loadFallbackShellThemableCss;var u=n(24);t.isSPFeatureEnabled=u.isSPFeatureEnabled;var c=n(96);t.Component=c.default;var l=n(98);t.EventGroup=l.default;var f=n(54);t.FabricTheming=f.default;var d=n(51);t.Features=d.default;var p=n(50);t.FeatureOverrides=p.default;var h=n(100);t.HtmlEncoding=h.default;var m=n(101);t.Locale=m.default;var g=n(21);t.PlatformDetection=g.default;var v=n(5);t.Promise=v.default;var _=n(7);t.RgbaColor=_.default;var y=n(102);t.SiteHeaderLogoAcronym=y.default;var b=n(55);t.ThemeCache=b.default;var E=n(103);t.ThemeProvider=E.default;var S=n(46);t.Uri=S.default;var w=n(23);t.UriEncoding=w.default;var T=n(104);t.WebTheme=T.default;var x=n(56);t.ItemType=x.default;var P=n(105);t.FileTypeIconMap=P.default;var C=n(106);t.SharingType=C.default;var O=n(53);t.Signal=O.default;var D=n(25);t.Scope=D.default;var k=n(38);t.AriaLoggerCore=k.default},function(e,t,n){"use strict";function r(e){try{var t=m&&m[e];if(!t)return;var n=new s.default(t),r=n.getQueryParameter(c);if(r){var o=r.split(l),a=void 0;if(2===o.length&&(a=Number(o[0])),!a){var i=new u.Qos({name:g});return i.end({resultType:u.ResultTypeEnum.Failure,resultCode:"EatParamUnexpectedFormat",extraData:{eatParam:r}}),t}if(a-=30,Date.now()/1e3>a)return void delete m[e]}return t}catch(e){var i=new u.Qos({name:g});i.end({resultType:u.ResultTypeEnum.Failure,resultCode:"Unexpected",extraData:{error:e}})}}function o(e){if(e)for(var t in e)m[t]=e[t]}function a(){return m}function i(e,t){var n,o=r(f)||d;switch(t){case 2:n="M";break;case 3:n="L";break;default:n="S"}var a=new s.default(o);return a.setQueryParameter(p,n),a.setQueryParameter(h,e||""),a.toString()}Object.defineProperty(t,"__esModule",{value:!0});var s=n(46),u=n(10);!function(e){e[e.Small=1]="Small",e[e.Medium=2]="Medium",e[e.Large=3]="Large"}(t.UserPhotoSize||(t.UserPhotoSize={}));var c="_eat_",l="_",f="UserPhotoAspx",d="/_layouts/15/userphoto.aspx",p="size",h="accountname",m={},g="TryGetAlternativeUrlFailure";t.tryGetAlternativeUrl=r,t.updateMap=o,t.getUrlTable=a,t.getUserPhotoUrl=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),a=n(9),i=n(90),s=n(47),u=n(48),c=n(49),l=n(1),f=n(50),d=n(92);!function(e){e[e.user=1]="user",e[e.tenant=2]="tenant",e[e.farm=3]="farm",e[e.site=4]="site"}(r=t.TargetType||(t.TargetType={}));var p;!function(e){e[e.v1=1]="v1",e[e.v2=2]="v2"}(p=t.ABExpHash||(t.ABExpHash={}));var h=function(){function e(t,n){var i=t.name,s=n&&!f.default.isFeatureEnabled(n);if(u.Killswitch.isActivated("af67e657-b3ee-4a38-ac1a-41705d3d60ce","10/25/2018")||this._isValidName(t.name)||l.default.log("Experiment name '"+t.name+"' is invalid."),this._experimentData=t=o.__assign({segmentPopulation:.5,targetType:r.user,version:p.v1},t),s&&(t.name+="AA"),this._isOn=!1,e._pageContext)switch(this._experimentData.targetType){case r.user:this._isOn=this._isUserExperimentOn();break;case r.tenant:this._isOn=this._isTenantExperimentOn();break;case r.farm:this._isOn=this._isFarmExperimentOn();break;case r.site:this._isOn=this._isSiteExperimentOn()}else a.Engagement.logData({name:this._experimentData.name+".Experiment.HostSettingsMissing"});s&&(this._isOn=!1);var d=c.deserializeQuery((window.location.search||"").substr(1));d.enableExp===i?this._isOn=!0:d.disableExp===i&&(this._isOn=!1)}return e.init=function(t){e._pageContext=o.__assign({},t,{userLoginName:t.userLoginName||"missing_user",siteSubscriptionId:t.siteSubscriptionId||"missing_tenant",farmLabel:t.farmLabel||"missing_farm",siteId:t.siteId||"missing_site"})},e.Init=function(t){e.init(t)},e.prototype.getExperimentData=function(){return this._experimentData},e.prototype.isOn=function(){return this._isOn},e.prototype.IsExperimentOn=function(){return this._isOn},e.prototype._isUserExperimentOn=function(){var t=e._pageContext;if(!t)return!1;var n="",r=this._experimentData,o=r.name,a=r.version;return a===p.v1?n=o+"_"+t.userLoginName+"_"+t.siteSubscriptionId+"_"+t.farmLabel:a===p.v2&&(n=o+t.userLoginName),this._isExperimentOn(n)},e.prototype._isTenantExperimentOn=function(){var t=e._pageContext;if(!t)return!1;var n="",r=this._experimentData,o=r.name,a=r.version;return a===p.v1?n=o+"_"+t.siteSubscriptionId+"_"+t.farmLabel:a===p.v2&&(n=o+t.siteSubscriptionId),this._isExperimentOn(n)},e.prototype._isFarmExperimentOn=function(){var t=e._pageContext;if(!t)return!1;var n="",r=this._experimentData,o=r.name,a=r.version;return a===p.v1?n=o+"_"+this._getSiteId()+"_"+t.siteSubscriptionId+"_"+t.farmLabel:a===p.v2&&(n=o+this._getSiteId()),this._isExperimentOn(n)},e.prototype._isSiteExperimentOn=function(){var t=e._pageContext;if(!t)return!1;var n=this._experimentData.name+"_"+this._getSiteId()+"_"+t.siteSubscriptionId+"_"+t.farmLabel;return this._isExperimentOn(n)},e.prototype._isValidName=function(e){return/[^A-Za-z0-9]/.test(e)},e.prototype._getSiteId=function(){var t=e._pageContext;return this._experimentData.siteId?this._experimentData.siteId:t.siteId},e.prototype._isExperimentOn=function(e){if(!e)return!1;var t=0;this._experimentData.version===p.v1?t=this._getHashNumber(e):this._experimentData.version===p.v2&&(t=this._getHashNumberMurmur(e));var n=t<=this._experimentData.segmentPopulation;return this._logData(n),n},e.prototype._getHashNumber=function(e){if(0===e.length)return 1;for(var t=5381,n=0;n<e.length;++n)t=(t<<5)+t+e.charCodeAt(n),t&=t;return(t&=65535)/65535},e.prototype._getHashNumberMurmur=function(e){return d.v3(e,1)/4294967295},e.prototype._getExperimentType=function(){return this._experimentData.targetType===r.user?s.ExperimentTypeEnum.User:this._experimentData.targetType===r.site?s.ExperimentTypeEnum.Site:s.ExperimentTypeEnum.Unknown},e.prototype._logData=function(e){i.Experiment.logData({name:"",isInRamp:e,experiment:this._experimentData.name,variant:e.toString(),assignmentType:this._getExperimentType(),assignmentId:this._experimentData.targetType===r.site?this._getSiteId():""})},e}();t.ABExperiment=h},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(47);t.Experiment=r.createSingleEvent({eventName:"Experiment,",shortEventName:"Experiment"},{name:{isPrefixingDisabled:!0,type:1},isInRamp:{isPrefixingDisabled:!0,type:3},experiment:{isPrefixingDisabled:!0,type:1},variant:{isPrefixingDisabled:!0,type:1},assignmentType:{isPrefixingDisabled:!0,type:6,typeRef:o.ExperimentTypeEnum},assignmentId:{isPrefixingDisabled:!0,type:1}}),t.default=t.Experiment},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(29),o=r;t.default=o},function(e,t,n){!function(){function t(e,t){for(var n,r=e.length,o=t^r,a=0;r>=4;)n=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),n^=n>>>24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),o=1540483477*(65535&o)+((1540483477*(o>>>16)&65535)<<16)^n,r-=4,++a;switch(r){case 3:o^=(255&e.charCodeAt(a+2))<<16;case 2:o^=(255&e.charCodeAt(a+1))<<8;case 1:o^=255&e.charCodeAt(a),o=1540483477*(65535&o)+((1540483477*(o>>>16)&65535)<<16)}return o^=o>>>13,o=1540483477*(65535&o)+((1540483477*(o>>>16)&65535)<<16),(o^=o>>>15)>>>0}function n(e,t){var n,r,o,a,i,s,u,c;for(n=3&e.length,r=e.length-n,o=t,i=3432918353,s=461845907,c=0;c<r;)u=255&e.charCodeAt(c)|(255&e.charCodeAt(++c))<<8|(255&e.charCodeAt(++c))<<16|(255&e.charCodeAt(++c))<<24,++c,u=(65535&u)*i+(((u>>>16)*i&65535)<<16)&4294967295,u=u<<15|u>>>17,u=(65535&u)*s+(((u>>>16)*s&65535)<<16)&4294967295,o^=u,o=o<<13|o>>>19,a=5*(65535&o)+((5*(o>>>16)&65535)<<16)&4294967295,o=27492+(65535&a)+((58964+(a>>>16)&65535)<<16);switch(u=0,n){case 3:u^=(255&e.charCodeAt(c+2))<<16;case 2:u^=(255&e.charCodeAt(c+1))<<8;case 1:u^=255&e.charCodeAt(c),u=(65535&u)*i+(((u>>>16)*i&65535)<<16)&4294967295,u=u<<15|u>>>17,u=(65535&u)*s+(((u>>>16)*s&65535)<<16)&4294967295,o^=u}return o^=e.length,o^=o>>>16,o=2246822507*(65535&o)+((2246822507*(o>>>16)&65535)<<16)&4294967295,o^=o>>>13,o=3266489909*(65535&o)+((3266489909*(o>>>16)&65535)<<16)&4294967295,(o^=o>>>16)>>>0}var r=n;r.v2=t,r.v3=n;e.exports=r}()},function(e,t,n){"use strict";function r(){o.loadStyles(".o365cs-base .o365cs-nav-contextMenu {    background-color: '[theme:white, default:#ffffff]';}\n.o365cs-base-visibility{  visibility: visible;}\n.o365cs-base .ms-fcl-tdr,.o365cs-base .ms-fcl-tdr-h:hover,.o365cs-base .ms-fcl-tdr-f:focus{    color: '[theme:themeDarker, default:#104a7d]';}\n.o365cs-base .ms-bgc-tdr,.o365cs-base .ms-bgc-tdr-h:hover,.o365cs-base .ms-bgc-tdr-f:focus{    background-color: '[theme:themeDarker, default:#104a7d]';}\n.o365cs-base .ms-bcl-tdr,.o365cs-base .ms-bcl-tdr-h:hover,.o365cs-base .ms-bcl-tdr-f:focus{    border-color: '[theme:themeDarker, default:#104a7d]';}\n.o365cs-base .ms-fcl-td,.o365cs-base .ms-fcl-td-h:hover,.o365cs-base .ms-fcl-td-f:focus{    color: '[theme:themeDark, default:#0d62aa]';}\n.o365cs-base .ms-bgc-td,.o365cs-base .ms-bgc-td-h:hover,.o365cs-base .ms-bgc-td-f:focus{    background-color: '[theme:themeDark, default:#0d62aa]';}\n.o365cs-base .ms-bcl-td,.o365cs-base .ms-bcl-td-h:hover,.o365cs-base .ms-bcl-td-f:focus{    border-color: '[theme:themeDark, default:#0d62aa]';}\n.o365cs-base .ms-fcl-tda,.o365cs-base .ms-fcl-tda-h:hover,.o365cs-base .ms-fcl-tda-f:focus{    color: '[theme:themeDarkAlt, default:#106ebe]';}\n.o365cs-base .ms-bgc-tda,.o365cs-base .ms-bgc-tda-h:hover,.o365cs-base .ms-bgc-tda-f:focus{    background-color: '[theme:themeDarkAlt, default:#106ebe]';}\n.o365cs-base .ms-bcl-tda,.o365cs-base .ms-bcl-tda-h:hover,.o365cs-base .ms-bcl-tda-f:focus{    border-color: '[theme:themeDarkAlt, default:#106ebe]';}\n.o365cs-base .ms-fcl-tp,.o365cs-base .ms-fcl-tp-h:hover,.o365cs-base .ms-fcl-tp-f:focus{    color: '[theme:themePrimary, default:#0078d7]';}\n.o365cs-base .ms-bgc-tp,.o365cs-base .ms-bgc-tp-h:hover,.o365cs-base .ms-bgc-tp-f:focus,.o365cs-base.ms-bgc-tp{    background-color: '[theme:themePrimary, default:#0078d7]';}\n.o365cs-base .ms-bcl-tp,.o365cs-base .ms-bcl-tp-h:hover,.o365cs-base .ms-bcl-tp-f:focus{    border-color: '[theme:themePrimary, default:#0078d7]';}\n.o365cs-base .ms-fcl-ts,.o365cs-base .ms-fcl-ts-h:hover,.o365cs-base .ms-fcl-ts-f:focus{    color: '[theme:themeSecondary, default:#2b88d8]';}\n.o365cs-base .ms-bgc-ts,.o365cs-base .ms-bgc-ts-h:hover,.o365cs-base .ms-bgc-ts-f:focus{    background-color: '[theme:themeSecondary, default:#2b88d8]';}\n.o365cs-base .ms-bcl-ts,.o365cs-base .ms-bcl-ts-h:hover,.o365cs-base .ms-bcl-ts-f:focus{    border-color: '[theme:themeSecondary, default:#2b88d8]';}\n.o365cs-base .ms-fcl-tt,.o365cs-base .ms-fcl-tt-h:hover,.o365cs-base .ms-fcl-tt-f:focus{    color: '[theme:themeTertiary, default:#71afe5]';}\n.o365cs-base .ms-bgc-tt,.o365cs-base .ms-bgc-tt-h:hover,.o365cs-base .ms-bgc-tt-f:focus{    background-color: '[theme:themeTertiary, default:#71afe5]';}\n.o365cs-base .ms-bcl-tt,.o365cs-base .ms-bcl-tt-h:hover,.o365cs-base .ms-bcl-tt-f:focus{    border-color: '[theme:themeTertiary, default:#71afe5]';}\n.o365cs-base .ms-fcl-tl,.o365cs-base .ms-fcl-tl-h:hover,.o365cs-base .ms-fcl-tl-f:focus{    color: '[theme:themeLight, default:#c7e0f4]';}\n.o365cs-base .ms-bgc-tl,.o365cs-base .ms-bgc-tl-h:hover,.o365cs-base .ms-bgc-tl-f:focus{    background-color: '[theme:themeLight, default:#c7e0f4]';}\n.o365cs-base .ms-bcl-tl,.o365cs-base .ms-bcl-tl-h:hover,.o365cs-base .ms-bcl-tl-f:focus{    border-color: '[theme:themeLight, default:#c7e0f4]';}\n.o365cs-base .ms-fcl-tlr,.o365cs-base .ms-fcl-tlr-h:hover,.o365cs-base .ms-fcl-tlr-f:focus{    color: '[theme:themeLighter, default:#deecf9]';}\n.o365cs-base .ms-bgc-tlr,.o365cs-base .ms-bgc-tlr-h:hover,.o365cs-base .ms-bgc-tlr-f:focus{    background-color: '[theme:themeLighter, default:#deecf9]';}\n.o365cs-base .ms-bcl-tlr,.o365cs-base .ms-bcl-tlr-h:hover,.o365cs-base .ms-bcl-tlr-f:focus{    border-color: '[theme:themeLighter, default:#deecf9]';}\n.o365cs-base .ms-fcl-tlra,.o365cs-base .ms-fcl-tlra-h:hover,.o365cs-base .ms-fcl-tlra-f:focus{    color: '[theme:themeLighterAlt, default:#eff6fc]';}\n.o365cs-base .ms-bgc-tlra,.o365cs-base .ms-bgc-tlra-h:hover,.o365cs-base .ms-bgc-tlra-f:focus{    background-color: '[theme:themeLighterAlt, default:#eff6fc]';}\n.o365cs-base .ms-bcl-tlra,.o365cs-base .ms-bcl-tlra-h:hover,.o365cs-base .ms-bcl-tlra-f:focus{    border-color: '[theme:themeLighterAlt, default:#eff6fc]';}\n.o365cs-base .ms-fcl-w,.o365cs-base .ms-fcl-w-h:hover,.o365cs-base .ms-fcl-w-f:focus{    color: '[theme:white, default:#ffffff]';}\n.o365cs-base .ms-bgc-w,.o365cs-base .ms-bgc-w-h:hover,.o365cs-base .ms-bgc-w-f:focus,.o365cs-base.ms-bgc-w{    background-color: '[theme:white, default:#ffffff]';}\n.o365cs-base .ms-bcl-w,.o365cs-base .ms-bcl-w-h:hover,.o365cs-base .ms-bcl-w-f:focus{    border-color: '[theme:white, default:#ffffff]';}\n.o365cs-base .ms-fcl-b,.o365cs-base .ms-fcl-b-h:hover,.o365cs-base .ms-fcl-b-f:focus{    color: '[theme:black, default:#000000]';}\n.o365cs-base .ms-fcl-b.o365cs-nav-closeButton{    color: #000000;}\n.o365cs-base .ms-bgc-b,.o365cs-base .ms-bgc-b-h:hover,.o365cs-base .ms-bgc-b-f:focus,.o365cs-base.ms-bgc-b{    background-color: '[theme:black, default:#000000]';}\n.o365cs-base .ms-bcl-b,.o365cs-base .ms-bcl-b-h:hover,.o365cs-base .ms-bcl-b-f:focus{    border-color: '[theme:black, default:#000000]';}\n.o365cs-base .ms-fcl-nd,.o365cs-base .ms-fcl-nd-h:hover,.o365cs-base .ms-fcl-nd-f:focus{    color: '[theme:neutralDark, default:#212121]';}\n.o365cs-base .ms-bgc-nd,.o365cs-base .ms-bgc-nd-h:hover,.o365cs-base .ms-bgc-nd-f:focus{    background-color: '[theme:neutralDark, default:#212121]';}\n.o365cs-base .ms-bcl-nd,.o365cs-base .ms-bcl-nd-h:hover,.o365cs-base .ms-bcl-nd-f:focus{    border-color: '[theme:neutralDark, default:#212121]';}\n.o365cs-base .ms-fcl-np,.o365cs-base .ms-fcl-np-h:hover,.o365cs-base .ms-fcl-np-f:focus{    color: '[theme:neutralPrimary, default:#333333]';}\n.o365cs-base .ms-bgc-np,.o365cs-base .ms-bgc-np-h:hover,.o365cs-base .ms-bgc-np-f:focus{    background-color: '[theme:neutralPrimary, default:#333333]';}\n.o365cs-base .ms-bcl-np,.o365cs-base .ms-bcl-np-h:hover,.o365cs-base .ms-bcl-np-f:focus{    border-color: '[theme:neutralPrimary, default:#333333]';}\n.o365cs-base .ms-fcl-ns,.o365cs-base .ms-fcl-ns-h:hover,.o365cs-base .ms-fcl-ns-f:focus{    color: '[theme:neutralSecondary, default:#666666]';}\n.o365cs-base .ms-fcl-ns.o365cs-nav-moduleLabel{    color: #666666;}\n.o365cs-base .ms-bgc-ns,.o365cs-base .ms-bgc-ns-h:hover,.o365cs-base .ms-bgc-ns-f:focus{    background-color: '[theme:neutralSecondary, default:#666666]';}\n.o365cs-base .ms-bcl-ns,.o365cs-base .ms-bcl-ns-h:hover,.o365cs-base .ms-bcl-ns-f:focus{    border-color: '[theme:neutralSecondary, default:#666666]';}\n.o365cs-base .ms-fcl-nsa,.o365cs-base .ms-fcl-nsa-h:hover,.o365cs-base .ms-fcl-nsa-f:focus{    color: '[theme:neutralSecondaryAlt, default:#767676]';}\n.o365cs-base .ms-bgc-nsa,.o365cs-base .ms-bgc-nsa-h:hover,.o365cs-base .ms-bgc-nsa-f:focus{    background-color: '[theme:neutralSecondaryAlt, default:#767676]';}\n.o365cs-base .ms-bcl-nsa,.o365cs-base .ms-bcl-nsa-h:hover,.o365cs-base .ms-bcl-nsa-f:focus{    border-color: '[theme:neutralSecondaryAlt, default:#767676]';}\n.o365cs-base .ms-fcl-nt,.o365cs-base .ms-fcl-nt-h:hover,.o365cs-base .ms-fcl-nt-f:focus{    color: '[theme:neutralTertiary, default:#a6a6a6]';}\n.o365cs-base .ms-bgc-nt,.o365cs-base .ms-bgc-nt-h:hover,.o365cs-base .ms-bgc-nt-f:focus{    background-color: '[theme:neutralTertiary, default:#a6a6a6]';}\n.o365cs-base .ms-bcl-nt,.o365cs-base .ms-bcl-nt-h:hover,.o365cs-base .ms-bcl-nt-f:focus{    border-color: '[theme:neutralTertiary, default:#a6a6a6]';}\n.o365cs-base .ms-fcl-nta,.o365cs-base .ms-fcl-nta-h:hover,.o365cs-base .ms-fcl-nta-f:focus{    color: '[theme:neutralTertiaryAlt, default:#c8c8c8]';}\n.o365cs-base .ms-bgc-nta,.o365cs-base .ms-bgc-nta-h:hover,.o365cs-base .ms-bgc-nta-f:focus{    background-color: '[theme:neutralTertiaryAlt, default:#c8c8c8]';}\n.o365cs-base .ms-bcl-nta,.o365cs-base .ms-bcl-nta-h:hover,.o365cs-base .ms-bcl-nta-f:focus{    border-color: '[theme:neutralTertiaryAlt, default:#c8c8c8]';}\n.o365cs-base .ms-fcl-nl,.o365cs-base .ms-fcl-nl-h:hover,.o365cs-base .ms-fcl-nl-f:focus{    color: '[theme:neutralLight, default:#eaeaea]';}\n.o365cs-base .ms-bgc-nl,.o365cs-base .ms-bgc-nl-h:hover,.o365cs-base .ms-bgc-nl-f:focus{    background-color: '[theme:neutralLight, default:#eaeaea]';}\n.o365cs-base .ms-bcl-nl,.o365cs-base .ms-bcl-nl-h:hover,.o365cs-base .ms-bcl-nl-f:focus{    border-color: '[theme:neutralLight, default:#eaeaea]';}\n.o365cs-base .ms-fcl-nlr,.o365cs-base .ms-fcl-nlr-h:hover,.o365cs-base .ms-fcl-nlr-f:focus{    color: '[theme:neutralLighter, default:#f4f4f4]';}\n.o365cs-base .ms-bgc-nlr,.o365cs-base .ms-bgc-nlr-h:hover,.o365cs-base .ms-bgc-nlr-f:focus,.o365cs-base.ms-bgc-nlr{    background-color: '[theme:neutralLighter, default:#f4f4f4]';}\n.o365cs-base .ms-bcl-nlr,.o365cs-base .ms-bcl-nlr-h:hover,.o365cs-base .ms-bcl-nlr-f:focus{    border-color: '[theme:neutralLighter, default:#f4f4f4]';}\n.o365cs-base .ms-fcl-nlra,.o365cs-base .ms-fcl-nlra-h:hover,.o365cs-base .ms-fcl-nlra-f:focus{    color: '[theme:neutralLighterAlt, default:#f8f8f8]';}\n.o365cs-base .ms-bgc-nlra,.o365cs-base .ms-bgc-nlra-h:hover,.o365cs-base .ms-bgc-nlra-f:focus,.o365cs-base.ms-bgc-nlra{    background-color: '[theme:neutralLighterAlt, default:#f8f8f8]';}\n.o365cs-base .ms-bcl-nlra,.o365cs-base .ms-bcl-nlra-h:hover,.o365cs-base .ms-bcl-nlra-f:focus{    border-color: '[theme:neutralLighterAlt, default:#f8f8f8]';}\n.o365cs-base .o365cs-topnavLinkBackground-2{    background-color: transparent;}\n.o365cs-base .o365cs-topnavText,.o365cs-base .o365cs-topnavText:hover{    color: '[theme:suiteBarText, default:#ffffff]';}\n.o365cs-base .o365cs-appLauncherBackground{    background-color: '[theme:themeDarker, default:#104a7d]';}\n.o365cs-nav-header16 .o365cs-navMenuButton{    color: '[theme:white, default:#ffffff]';}\n.o365cs-base .o365cs-navMenuButton{    color: '[theme:suiteBarText, default:#ffffff]';}\n.o365cs-base.o365cs-topnavBGImage{    background-position: center top;    background-repeat: repeat-x;    background-image: none;}\n.o365cs-base.o365cs-topnavBGColor-2{    background-color: '[theme:suiteBarBackground, default:#000000]';}\n")}Object.defineProperty(t,"__esModule",{value:!0});var o=n(94);t.loadFallbackShellThemableCss=r},function(e,t,n){"use strict";(function(e){function n(e){var t=x();e();var n=x();S.perf.duration+=n-t}function r(e,t){void 0===t&&(t=!1),n(function(){var n=Array.isArray(e)?e:m(e);void 0===b&&(b=_());var r=S.runState,o=r.mode,a=r.buffer,i=r.flushTimer;t||1===o?(a.push(n),i||(S.runState.flushTimer=s())):u(n)})}function o(e){S.loadStyles=e}function a(e){S.runState.mode=e}function i(){n(function(){var e=S.runState.buffer.slice();S.runState.buffer=[];var t=[].concat.apply([],e);t.length>0&&u(t)})}function s(){return setTimeout(function(){S.runState.flushTimer=0,i()},0)}function u(e,t){S.loadStyles?S.loadStyles(h(e).styleString,e):b?v(e,t):g(e)}function c(e){S.theme=e,d()}function l(e){void 0===e&&(e=3),3!==e&&2!==e||(f(S.registeredStyles),S.registeredStyles=[]),3!==e&&1!==e||(f(S.registeredThemableStyles),S.registeredThemableStyles=[])}function f(e){e.forEach(function(e){var t=e&&e.styleElement;t&&t.parentElement&&t.parentElement.removeChild(t)})}function d(){if(S.theme){for(var e=[],t=0,n=S.registeredThemableStyles;t<n.length;t++){var r=n[t];e.push(r.themableStyle)}e.length>0&&(l(1),u([].concat.apply([],e)))}}function p(e){return e&&(e=h(m(e)).styleString),e}function h(e){var t=S.theme,n=!1;return{styleString:(e||[]).map(function(e){var r=e.theme;if(r){n=!0;var o=t?t[r]:void 0,a=e.defaultValue||"inherit";return t&&!o&&console,o||a}return e.rawString}).join(""),themable:n}}function m(e){var t=[];if(e){for(var n=0,r=void 0;r=w.exec(e);){var o=r.index;o>n&&t.push({rawString:e.substring(n,o)}),t.push({theme:r[1],defaultValue:r[2]}),n=w.lastIndex}t.push({rawString:e.substring(n)})}return t}function g(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("style"),r=h(e),o=r.styleString,a=r.themable;n.type="text/css",n.appendChild(document.createTextNode(o)),S.perf.count++,t.appendChild(n);var i={styleElement:n,themableStyle:e};a?S.registeredThemableStyles.push(i):S.registeredStyles.push(i)}function v(e,t){var n=document.getElementsByTagName("head")[0],r=S.registeredStyles,o=S.lastStyleElement,a=o?o.styleSheet:void 0,i=a?a.cssText:"",s=r[r.length-1],u=h(e).styleString;(!o||i.length+u.length>T)&&(o=document.createElement("style"),o.type="text/css",t?(n.replaceChild(o,t.styleElement),t.styleElement=o):n.appendChild(o),t||(s={styleElement:o,themableStyle:e},r.push(s))),o.styleSheet.cssText+=p(u),Array.prototype.push.apply(s.themableStyle,e),S.lastStyleElement=o}function _(){var e=!1;if("undefined"!=typeof document){var t=document.createElement("style");t.type="text/css",e=!!t.styleSheet}return e}var y=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e};Object.defineProperty(t,"__esModule",{value:!0});var b,E="undefined"==typeof window?e:window,S=function(){var e=E.__themeState__||{theme:void 0,lastStyleElement:void 0,registeredStyles:[]};return e.runState||(e=y({},e,{perf:{count:0,duration:0},runState:{flushTimer:0,mode:0,buffer:[]}})),e.registeredThemableStyles||(e=y({},e,{registeredThemableStyles:[]})),E.__themeState__=e,e}(),w=/[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,T=1e4,x=function(){return"undefined"!=typeof performance&&performance.now?performance.now():Date.now()};t.loadStyles=r,t.configureLoadStyles=o,t.configureRunMode=a,t.flush=i,t.loadTheme=c,t.clearStyles=l,t.detokenize=p,t.splitStyles=m}).call(t,n(95))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(25),o=n(97),a=function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t={});var n=this.resources,a=void 0===n?t.resources?new o.ResourceScope(t.resources):e.resources:n;this.resources=a,this._Component_scope=new r.default}return Object.defineProperty(e.prototype,"scope",{get:function(){return this._Component_scope},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isDisposed",{get:function(){return this.scope.isDisposed},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){this._Component_scope.dispose()},e.prototype.managed=function(e){return this.resources&&(e=this.resources.injected(e)),this.scope.attached(e)},e.prototype.child=function(e){var t;return t=e instanceof o.ResourceKey?this.resources.consume(e):this.resources?this.resources.injected(e,{injectChildResourceScope:!0}):e,this.scope.attached(t)},e.dependencies={resources:o.resourceScopeKey},e}();t.Component=a,t.default=a},function(e,t,n){"use strict";function r(e,t,n){return o(e("module").id,t,n)}function o(e,t,n){return new u.ResourceKey({name:e,factory:new f(t,n)})}function a(e,t,n){return i(e("module").id,t,n)}function i(e,t,n){return new u.ResourceKey({name:e,factory:new d(t,n)})}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),u=n(52),c=n(26),l=function(){function e(e,t){this._load=e,this._dependencies=t}return e.prototype.load=function(){var e=this,t=this._load().then(function(t){return new f(t,e._dependencies)});return this.load=function(){return t},t},e}();t.ResolvedResourceLoader=l;var f=function(){function e(e,t){this._type=e,this.dependencies=s.__assign({},e.dependencies||{},t||{})}return e.prototype.create=function(e){var t=new this._type({},e);return{instance:t,disposable:t}},e}();t.ResolvedResourceFactory=f;var d=function(){function e(e,t){this._type=e,this.dependencies=s.__assign({},e.dependencies||{},t||{})}return e.prototype.create=function(e){return{instance:u.getResolvedConstructor(this._type,e)}},e}();t.ResolvedResourceTypeFactory=d;var p=function(){function e(e){this._type=e,this.dependencies={}}return e.prototype.create=function(){var e=new this._type;return{instance:e,disposable:c.isDisposable(e)&&e}},e}();t.SimpleResourceFactory=p;var h=function(){function e(e){this._load=e}return e.prototype.load=function(){var e=this._load().then(function(e){return new m(e)});return this.load=function(){return e},e},e}();t.AliasResourceLoader=h;var m=function(){function e(e){this.dependencies={value:e.lazy}}return e.prototype.create=function(e){return{instance:e.value()}},e}();t.AliasResourceFactory=m,t.createDefaultResourceKey=r,t.createResolvedResourceKey=o,t.createDefaultTypeResourceKey=a,t.createResolvedTypeResourceKey=i,s.__exportStar(n(52),t)},function(e,t,n){"use strict";function r(e){o.default.log(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=n(42),i=function(){function e(t,n){void 0===n&&(n=r),this._id=e._uniqueId++,this._parent=t,this._onError=n,this._eventRecords=[]}return e.raise=function(e,t,n,r){return a.raise(e,t,n,r)},e.isObserved=function(e,t){var n=e&&e.__events__;return!!n&&!!n[t]},e.isDeclared=function(e,t){var n=e&&e.__declaredEvents;return!!n&&!!n[t]},e.stopPropagation=function(e){e.stopPropagation&&e.stopPropagation()},e.prototype.dispose=function(){this._isDisposed||(this._isDisposed=!0,this.off(),this._parent=null)},e.prototype.onAll=function(e,t,n){for(var r in t)this.on(e,r,t[r],n)},e.prototype.on=function(t,n,r,o){var i=this;if(n.indexOf(",")>-1)for(var s=n.split(/[ ,]+/),u=0;u<s.length;u++)this.on(t,s[u],r,o);else{var c=this._parent,l={target:t,eventName:n,parent:c,callback:r,objectCallback:null,elementCallback:null,useCapture:o},f=t.__events__=t.__events__||{};if(f[n]=f[n]||{count:0},f[n][this._id]=f[n][this._id]||[],f[n][this._id].push(l),f[n].count++,a.isDOMEventTarget(t)){var d=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(!i._isDisposed){try{var o=r.apply(c,t);if(!1===o&&t[0]&&t[0].preventDefault){var a=t[0];a.preventDefault(),e.stopPropagation(a)}}catch(a){i._onError(a)}return o}};l.elementCallback=d,t.addEventListener(n,d,o)}else{var p=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(!i._isDisposed)return r.apply(c,e)};l.objectCallback=p}this._eventRecords.push(l)}},e.prototype.off=function(e,t,n,r){for(var o=0;o<this._eventRecords.length;o++){var a=this._eventRecords[o];if(!(e&&e!==a.target||t&&t!==a.eventName||n&&n!==a.callback||"boolean"==typeof r&&r!==a.useCapture)){var i=a.target.__events__,s=i[a.eventName],u=s?s[this._id]:null;u&&(1!==u.length&&n?(s.count--,u.splice(u.indexOf(a),1)):(s.count-=u.length,delete i[a.eventName][this._id]),s.count||delete i[a.eventName]),a.elementCallback&&a.target.removeEventListener&&a.target.removeEventListener(a.eventName,a.elementCallback,a.useCapture),this._eventRecords.splice(o--,1)}}},e.prototype.raise=function(t,n,r){return e.raise(this._parent,t,n,r)},e.prototype.declare=function(e){var t=this._parent.__declaredEvents=this._parent.__declaredEvents||{};if("string"==typeof e)t[e]=!0;else for(var n=0;n<e.length;n++)t[e[n]]=!0},e._uniqueId=0,e}();t.EventGroup=i,t.default=i},function(e,t,n){"use strict";function r(e){return"number"==typeof e&&e>=d.Unshaded&&e<=d.Shade8}function o(e){return 0===e.R&&0===e.G&&0===e.B}function a(e){return 255===e.R&&255===e.G&&255===e.B}function i(e,t){return{h:e.h,s:e.s,v:e.v-e.v*t}}function s(e,t){return{h:e.h,s:e.s-e.s*t,v:e.v+(100-e.v)*t}}function u(e,t,n){if(!e||t===d.Unshaded||!r(t))return e;var u=s,p=i;n&&(u=i,p=s);var S=c(e),w=l(S),T=t-1;return S=a(e)?i(S,h[T]):o(e)?s(S,m[T]):w.l/100>E?p(S,v[T]):w.l/100<b?u(S,g[T]):T<_.length?u(S,_[T]):p(S,y[T-_.length]),f(S)}function c(e){var t,n,r=NaN,o=e.R,a=e.G,i=e.B,s=Math.max(o,a,i),u=Math.min(o,a,i),c=s-u;return 0===c?r=0:o===s?r=(a-i)/c%6:a===s?r=(i-o)/c+2:i===s&&(r=(o-a)/c+4),r=Math.round(60*r),r<0&&(r+=360),t=Math.round(100*(0===s?0:c/s)),n=Math.round(s/255*100),{h:r,s:t,v:n}}function l(e){var t=e.h,n=e.s,r=e.v;n/=100,r/=100;var o=(2-n)*r,a=n*r;return a/=o<=1?o:2-o,a=a||0,o/=2,{h:t,s:100*a,l:100*o}}function f(e){var t=e.h,n=e.s,r=e.v;n/=100,r/=100;var o=[],a=r*n,i=t/60,s=a*(1-Math.abs(i%2-1)),u=r-a;switch(Math.floor(i)){case 0:o=[a,s,0];break;case 1:o=[s,a,0];break;case 2:o=[0,a,s];break;case 3:o=[0,s,a];break;case 4:o=[s,0,a];break;case 5:o=[a,0,s]}return p.default.fromRgba(Math.round(255*(o[0]+u)),Math.round(255*(o[1]+u)),Math.round(255*(o[2]+u)))}Object.defineProperty(t,"__esModule",{value:!0});var d,p=n(7),h=[.537,.349,.216,.184,.145,.082,.043,.027],m=[.537,.45,.349,.216,.184,.145,.082,.043],g=[.88,.77,.66,.55,.44,.33,.22,.11],v=[.11,.22,.33,.44,.55,.66,.77,.88],_=[.96,.84,.7,.4,.12],y=[.1,.24,.44],b=.2,E=.8;!function(e){e[e.Unshaded=0]="Unshaded",e[e.Shade1=1]="Shade1",e[e.Shade2=2]="Shade2",e[e.Shade3=3]="Shade3",e[e.Shade4=4]="Shade4",e[e.Shade5=5]="Shade5",e[e.Shade6=6]="Shade6",e[e.Shade7=7]="Shade7",e[e.Shade8=8]="Shade8"}(d=t.Shade||(t.Shade={})),t.isValidShade=r,t.getShade=u},function(e,t,n){"use strict";function r(e){return a[e]}Object.defineProperty(t,"__esModule",{value:!0});var o=/[<>&'"\\]/g,a={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;","\\":"&#92;"},i=function(){function e(){}return e.encodeText=function(e){return e?e.replace(o,r):""},e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.invalidate=function(t){e.isRightToLeft=window.document&&"rtl"===document.documentElement.getAttribute("dir"),e.safeLeft=e.isRightToLeft?"right":"left",e.safeRight=e.isRightToLeft?"left":"right",t=t||window._spPageContextInfo&&window._spPageContextInfo.currentUICultureName,e.language=t||window.document&&(document.documentElement.getAttribute("lang")||document.documentElement.getAttribute("xml:lang"))||"en-us"},e}();r.invalidate(),t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){this._pageContext=e}return e.prototype.getAcronymRESTUrl=function(e){return this._pageContext.webServerRelativeUrl+"/_api/sphome/GetAcronymsAndColors?labels=[{Text:"+encodeURIComponent('"'+e+'"')+"}]"},e.prototype.getAcronymColor=function(e){var t={acronym:void 0,color:void 0};try{var n=JSON.parse(e),r=n.d.GetAcronymsAndColors.results[0];t.acronym=r.Acronym,t.color=r.Color}catch(n){var o=this._parseFn(),a=void 0,i=o(e);if(a=i.getElementsByTagName("element"))for(var s=a[0],u=0;u<s.childNodes.length;u++)switch(s.childNodes[u].nodeName){case"Acronym":t.acronym=s.childNodes[u].nodeValue;break;case"Color":t.color=s.childNodes[u].nodeValue}}return t},e.prototype._parseFn=function(){var e;if(DOMParser)e=function(e){return(new DOMParser).parseFromString(e,"text/xml")};else{if(!ActiveXObject||!new ActiveXObject("Microsoft.XMLDOM"))throw new Error("No XML parser found");e=function(e){var t=new ActiveXObject("Microsoft.XMLDOM");return t.async="false",t.loadXML(e),t}}return e},e}();t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),o=n(55),a=n(5),i=n(9),s=n(10),u=function(){function e(e){this._loadData=e}return e.getBackgroundUrl=function(t){return t?e._makeCssUrl(t.backgroundImageUri):"none"},e._makeCssUrl=function(t){var n="none";return t&&(n='url("'+e._escapeQuotesAndParentheses(t)+'")'),n},e._escapeQuotesAndParentheses=function(e){var t={"'":"%27",'"':"%22","(":"%28",")":"%29"},n=null;return null!=e&&(n=e.replace(/(['"\(\)])/gm,function(e,n){return t[n]})),n},e.prototype.loadThemeTokenMap=function(t,n){return this.loadThemeData(t,n).then(function(t){var n;if(t&&t.palette){n={};var o=t.palette;for(var a in o){var i=o[a];n[a]=i?r.default.toHtmlString(i):null}n.backgroundImageUri=e._makeCssUrl(t.backgroundImageUri)}return n},function(e){return null})},e.prototype.loadThemeData=function(e,t){if(!t&&this._dataPromise)return this._dataPromise;var n=this,r=null,u=s.ResultTypeEnum.Failure;return this._dataPromise=s.Qos.instrumentPromise({name:"ThemeProvider.LoadData"},function(){return new a.default(function(c,l){var f=null;t||(f=o.default.getCachedTheme(e)),f?(i.Engagement.logData({name:"ThemeProvider.DataFromCache"}),c(f)):(t&&i.Engagement.logData({name:"ThemeProvider.ForceUpdateData"}),i.Engagement.logData({name:"ThemeProvider.DataFromServer"}),n._loadData(t).done(function(t){t?t.cacheToken?(o.default.updateThemeCache(t,e),c(t)):(r="NoCacheToken",l&&l("Theme data with no CacheToken returned")):(r="NoData",l&&l("No model returned"))},function(e){a.default.isCanceled(l)?(r="Canceled",u=s.ResultTypeEnum.ExpectedFailure):r="ServerLoadFailure",l&&l(e)}))})},null,function(e){return a.default.isCanceled(e)&&(u=s.ResultTypeEnum.ExpectedFailure,r="Canceled"),{resultType:u,resultCode:r||"Other",error:e}}),this._dataPromise},e}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(54),o=n(7),a=n(23),i=function(){function e(){}return e.makeWebThemeRestUrl=function(e,t,n){var r=e;r&&"/"===r[r.length-1]&&(r=r.substring(0,r.length-1)),r=a.default.escapeUrlForCallback(r);var o=a.default.escapeUrlForCallback(r)+"/_api/SP.Web.GetContextWebThemeData?noImages=true&lcid="+a.default.encodeURIComponent(t);return n&&(o+="&ThemeOverride="+a.default.encodeURIComponent(n)),o},e.processWebThemeRestResponse=function(t){var n,r=JSON.parse(t);return r&&r.d&&r.d.GetContextWebThemeData&&(n=JSON.parse(r.d.GetContextWebThemeData)),e.processRawThemeData(n)},e.processRawThemeData=function(t){if(t){var n=e.coerceToColor,a=e.SetColorIfMissing,i={},s=t.Palette?t.Palette.Colors:{};i=e.convertColorsToRgba(s);var u=r.default.generateFabricColors(i.ContentAccent1,t.IsInverted),c=n(i.PageBackground)||null,l=n(i.BackgroundOverlay)||null,f=Math.round(.4*o.default.maxComponent);for(var d in u)a(i,d,u[d]);return a(i,"white",c),a(i,"primaryBackground",o.default.clone(c)),a(i,"primaryText",u.primaryText||n("#333")),a(i,"whiteTranslucent40",c&&o.default.fromRgba(c.R,c.G,c.B,f)),a(i,"backgroundOverlay",l),a(i,"suiteBarBackground",n(i.SuiteBarBackground)||null),a(i,"suiteBarText",n(i.SuiteBarText)||null),a(i,"suiteBarDisabledText",n(i.SuiteBarDisabledText)||null),a(i,"topBarBackground",n(i.TopBarBackground)||null),a(i,"topBarText",n(i.TopBarText)||null),a(i,"topBarHoverText",n(i.TopBarHoverText)||null),a(i,"dialogBorder",n(i.DialogBorder)||null),{backgroundImageUri:t.BackgroundImageUri,cacheToken:t.ThemeCacheToken,isDefault:t.IsDefault,isInverted:t.IsInverted,palette:i,version:t.Version}}return{backgroundImageUri:"",cacheToken:"",isDefault:!0,isInverted:!1,palette:{},version:""}},e.convertColorsToRgba=function(t){var n={};for(var r in t)if(t.hasOwnProperty(r)){var o=e.coerceToColor(t[r]);o&&(n[r]=o)}return n},e.coerceToColor=function(t){var n;return t?"string"==typeof t||t instanceof String?n=o.default.fromHtmlColor(String(t)):"DefaultColor"in t?n=e.coerceToColor(t.DefaultColor):"R"in t&&"G"in t&&"B"in t&&(n=o.default.fromRgba(t.R,t.G,t.B,t.A)):n=null,n},e.SetColorIfMissing=function(e,t,n){e[t]||(e[t]=n)},e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(56),o={accdb:{extensions:["accdb","mdb"]},archive:{type:r.default.Unknown,extensions:["7z","ace","arc","arj","dmg","gz","iso","lzh","pkg","rar","sit","tgz","tar","z"]},audio:{type:r.default.Unknown,extensions:["aif","aiff","aac","amr","au","awb","dct","dss","dvf","flac","gsm","m4a","m4p","mid","mmf","mp3","ogg","oga","ra","rm","wav","wma","wv"]},code:{extensions:["abap","ada","adp","ahk","as","as3","asc","ascx","asm","asp","awk","bash","bash_login","bash_logout","bash_profile","bashrc","bat","bib","bsh","build","builder","c","c++","capfile","cc","cfc","cfm","cfml","cl","clj","cls","cmake","cmd","coffee","config","cpp","cpt","cpy","cs","cshtml","cson","csproj","css","ctp","cxx","d","ddl","di","disco","dml","dtd","dtml","el","emakefile","erb","erl","f","f90","f95","fs","fsi","fsscript","fsx","gemfile","gemspec","gitconfig","go","groovy","gvy","Hcp","h","h++","haml","handlebars","hbs","hh","hpp","hrl","hs","htc","hxx","idl","iim","inc","inf","ini","inl","ipp","irbrc","jade","jav","java","js","json","jsp","jsx","l","less","lhs","lisp","log","lst","ltx","lua","m","mak","make","manifest","master","md","markdn","markdown","mdown","mkdn","ml","mli","mll","mly","mm","mud","nfo","opml","osascript","p","pas","patch","php","php2","php3","php4","php5","phtml","pl","pm","pod","pp","profile","ps1","pss","pt","py","pyw","r","rake","rb","rbx","rc","rdf","re","reg","rest","resw","resx","rhtml","rjs","rprofile","rpy","rss","rst","ruby","rxml","s","sass","scala","scm","sconscript","sconstruct","script","scss","sgml","sh","sh","shtml","sml","svn-base","sql","sql","sty","tcl","tex","textile","tld","tli","tmpl","tpl","vb","vi","vim","vmg","webpart","wsp","wsdl","xhtml","xoml","xsd","xslt","yaml","yaws","yml","zsh"]},css:{},csv:{extensions:["csv"]},docset:{type:r.default.Folder,iconType:"svg"},docx:{extensions:["doc","docm","docx"]},dotx:{extensions:["dot","dotm","dotx"]},email:{type:r.default.Unknown,extensions:["eml","msg","ost","pst"]},exe:{type:r.default.Unknown,extensions:["application","appref-ms","apk","app","appx","exe","ipa","msi","xap"]},folder:{type:r.default.Folder,iconType:"svg"},font:{type:r.default.Unknown,extensions:["ttf","otf","woff"]},genericfile:{type:r.default.Unknown},html:{extensions:["htm","html","mht"]},link:{type:r.default.Unknown,extensions:["lnk","link","url","website","webloc"]},listitem:{type:r.default.Unknown,extensions:["listitem"]},model:{extensions:["3ds","3mf","blend","cool","dae","df","dwfx","dwg","dxf","fbx","glb","gltf","holo","layout","max","off","ply","skp","stp","stl","t","thl","x"]},mpp:{extensions:["mpp"]},mpt:{extensions:["mpt"]},odp:{extensions:["odp"]},ods:{extensions:["ods"]},odt:{extensions:["odt"]},one:{type:r.default.OneNote,extensions:["one","onepkg"]},onetoc:{type:r.default.OneNote,extensions:["ms-one-stub","onetoc","onetoc2"]},pdf:{extensions:["pdf"]},photo:{type:r.default.Media,extensions:["arw","bmp","cr2","crw","dcr","dds","dib","dng","erf","gif","heic","heif","ico","jfi","jfif","jif","jpe","jpeg","jpg","kdc","mrw","nef","orf","pct","pict","png","pns","psd","raw","tga","tif","tiff","wdp"]},potx:{extensions:["pot","potm","potx"]},ppsx:{extensions:["pps","ppsm","ppsx"]},pptx:{extensions:["ppt","pptm","pptx"]},pub:{extensions:["pub"]},spo:{extensions:["aspx"]},rtf:{extensions:["epub","rtf","wri"]},sharedfolder:{type:r.default.Folder,iconType:"svg"},sysfile:{type:r.default.Unknown,extensions:["bak","bin","cab","cache","cat","cer","class","dat","db","dbg","dl_","dll","ithmb","jar","kb","kdc","ldt","lrprev","ppa","ppam","pdb","rom","thm","thmx","vsl","xla","xlam","xll"]},txt:{extensions:["dif","diff","readme","out","plist","properties","text","txt"]},vector:{type:r.default.Unknown,extensions:["ai","dgn","pd","emf","eps","indd","indt","ps","svg","svgz","wmf","oxps","xps","xd","sketch"]},video:{type:r.default.Media,extensions:["3g2","3gp","3gp2","3gpp","asf","avi","dvr-ms","flv","m1v","m4v","mkv","mod","mov","mm4p","mp2","mp2v","mp4"," mpa","mpe","mpeg","mpg","mpv","mpv2","mts","ogg","qt","swf","ts","vob","webm","wlmp","wm","wmv","wmx"]},vsdx:{extensions:["vsd","vsdm","vsdx","vdw"]},vssx:{extensions:["vss","vssm","vssx"]},vstx:{extensions:["vst","vstm","vstx"]},xlsx:{extensions:["xls","xlsb","xlsm","xlsx"]},xltx:{extensions:["xlt","xltm","xltx"]},xml:{extensions:["xaml","xml","xsl"]},xsn:{extensions:["xsn"]},zip:{type:r.default.Unknown,extensions:["zip"]}};t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r;!function(e){e[e.Public=0]="Public",e[e.PublicUnlisted=2]="PublicUnlisted",e[e.Shared=3]="Shared",e[e.Private=4]="Private",e[e.Unknown=5]="Unknown"}(r||(r={})),t.default=r}])});


define("229b8d08-79f3-438b-8c21-4613fc877abd_0.1.2",[],(function(){return (function(e){function t(r){if(n[r])return n[r].exports;var l=n[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)})([(function(e,t,n){"use strict";e.exports=n(1)}),(function(e,t,n){"use strict";(function(e){function n(e){var t=_();e();var n=_();T.perf.duration+=n-t}function r(e,t){void 0===t&&(t=!1),n((function(){var n=Array.isArray(e)?e:m(e);void 0===b&&(b=v());var r=T.runState,l=r.mode,o=r.buffer,a=r.flushTimer;t||1===l?(o.push(n),a||(T.runState.flushTimer=u())):i(n)}))}function l(e){T.loadStyles=e}function o(e){T.runState.mode=e}function a(){n((function(){var e=T.runState.buffer.slice();T.runState.buffer=[];var t=[].concat.apply([],e);t.length>0&&i(t)}))}function u(){return setTimeout((function(){T.runState.flushTimer=0,a()}),0)}function i(e,t){T.loadStyles?T.loadStyles(h(e).styleString,e):b?S(e,t):p(e)}function s(e){T.theme=e,d()}function c(e){void 0===e&&(e=3),3!==e&&2!==e||(f(T.registeredStyles),T.registeredStyles=[]),3!==e&&1!==e||(f(T.registeredThemableStyles),T.registeredThemableStyles=[])}function f(e){e.forEach((function(e){var t=e&&e.styleElement;t&&t.parentElement&&t.parentElement.removeChild(t)}))}function d(){if(T.theme){for(var e=[],t=0,n=T.registeredThemableStyles;t<n.length;t++){var r=n[t];e.push(r.themableStyle)}e.length>0&&(c(1),i([].concat.apply([],e)))}}function y(e){return e&&(e=h(m(e)).styleString),e}function h(e){var t=T.theme,n=!1;return{styleString:(e||[]).map((function(e){var r=e.theme;if(r){n=!0;var l=t?t[r]:void 0,o=e.defaultValue||"inherit";return t&&!l&&console,l||o}return e.rawString})).join(""),themable:n}}function m(e){var t=[];if(e){for(var n=0,r=void 0;r=x.exec(e);){var l=r.index;l>n&&t.push({rawString:e.substring(n,l)}),t.push({theme:r[1],defaultValue:r[2]}),n=x.lastIndex}t.push({rawString:e.substring(n)})}return t}function p(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("style"),r=h(e),l=r.styleString,o=r.themable;n.type="text/css",n.appendChild(document.createTextNode(l)),T.perf.count++,t.appendChild(n);var a={styleElement:n,themableStyle:e};o?T.registeredThemableStyles.push(a):T.registeredStyles.push(a)}function S(e,t){var n=document.getElementsByTagName("head")[0],r=T.registeredStyles,l=T.lastStyleElement,o=l?l.styleSheet:void 0,a=o?o.cssText:"",u=r[r.length-1],i=h(e).styleString;(!l||a.length+i.length>E)&&(l=document.createElement("style"),l.type="text/css",t?(n.replaceChild(l,t.styleElement),t.styleElement=l):n.appendChild(l),t||(u={styleElement:l,themableStyle:e},r.push(u))),l.styleSheet.cssText+=y(i),Array.prototype.push.apply(u.themableStyle,e),T.lastStyleElement=l}function v(){var e=!1;if("undefined"!=typeof document){var t=document.createElement("style");t.type="text/css",e=!!t.styleSheet}return e}var g=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e};Object.defineProperty(t,"__esModule",{value:!0});var b,w="undefined"==typeof window?e:window,T=(function(){var e=w.__themeState__||{theme:void 0,lastStyleElement:void 0,registeredStyles:[]};return e.runState||(e=g({},e,{perf:{count:0,duration:0},runState:{flushTimer:0,mode:0,buffer:[]}})),e.registeredThemableStyles||(e=g({},e,{registeredThemableStyles:[]})),w.__themeState__=e,e})(),x=/[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,E=1e4,_=function(){return"undefined"!=typeof performance&&performance.now?performance.now():Date.now()};t.loadStyles=r,t.configureLoadStyles=l,t.configureRunMode=o,t.flush=a,t.loadTheme=s,t.clearStyles=c,t.detokenize=y,t.splitStyles=m}).call(t,n(2))}),(function(e,t){var n;n=(function(){return this})();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n})])}));

    return (function() {
      var initMap = {};
      function getDependencyComponents(dependencies, depsMap) {
        var result = [];
        for (var i = 0; i < dependencies.length; i++) {
           result.push(initMap[depsMap[dependencies[i]]]);
        }

        return result;
      }

    defineCache['1e384972-6346-49b4-93c7-b2e6763938e6_1.7.1'].factory.apply(null, getDependencyComponents(defineCache['1e384972-6346-49b4-93c7-b2e6763938e6_1.7.1'].deps, {}));
    initMap['73e1dc6c-8441-42cc-ad47-4bd3659f8a3a'] = defineCache['73e1dc6c-8441-42cc-ad47-4bd3659f8a3a_1.7.1'].factory.apply(null, getDependencyComponents(defineCache['73e1dc6c-8441-42cc-ad47-4bd3659f8a3a_1.7.1'].deps, {}));
    initMap['cc2cc925-b5be-41bb-880a-f0f8030c6aff'] = defineCache['cc2cc925-b5be-41bb-880a-f0f8030c6aff_4.5.1'].factory.apply(null, getDependencyComponents(defineCache['cc2cc925-b5be-41bb-880a-f0f8030c6aff_4.5.1'].deps, {}));
    initMap['229b8d08-79f3-438b-8c21-4613fc877abd'] = defineCache['229b8d08-79f3-438b-8c21-4613fc877abd_0.1.2'].factory.apply(null, getDependencyComponents(defineCache['229b8d08-79f3-438b-8c21-4613fc877abd_0.1.2'].deps, {}));
    initMap['7263c7d0-1d6a-45ec-8d85-d4d1d234171b'] = defineCache['7263c7d0-1d6a-45ec-8d85-d4d1d234171b_1.7.1'].factory.apply(null, getDependencyComponents(defineCache['7263c7d0-1d6a-45ec-8d85-d4d1d234171b_1.7.1'].deps, {"@microsoft/sp-lodash-subset":"73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"}));
    initMap['78359e4b-07c2-43c6-8d0b-d060b4d577e8'] = defineCache['78359e4b-07c2-43c6-8d0b-d060b4d577e8_1.7.1'].factory.apply(null, getDependencyComponents(defineCache['78359e4b-07c2-43c6-8d0b-d060b4d577e8_1.7.1'].deps, {"@microsoft/sp-core-library":"7263c7d0-1d6a-45ec-8d85-d4d1d234171b","@microsoft/sp-lodash-subset":"73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"}));
    initMap['e40f8203-b39d-425a-a957-714852e33b79'] = defineCache['e40f8203-b39d-425a-a957-714852e33b79_1.7.1'].factory.apply(null, getDependencyComponents(defineCache['e40f8203-b39d-425a-a957-714852e33b79_1.7.1'].deps, {"@microsoft/sp-core-library":"7263c7d0-1d6a-45ec-8d85-d4d1d234171b","@microsoft/sp-diagnostics":"78359e4b-07c2-43c6-8d0b-d060b4d577e8","@microsoft/sp-lodash-subset":"73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"}));
    initMap['c07208f0-ea3b-4c1a-9965-ac1b825211a6'] = defineCache['c07208f0-ea3b-4c1a-9965-ac1b825211a6_1.7.1'].factory.apply(null, getDependencyComponents(defineCache['c07208f0-ea3b-4c1a-9965-ac1b825211a6_1.7.1'].deps, {"@microsoft/sp-core-library":"7263c7d0-1d6a-45ec-8d85-d4d1d234171b","@microsoft/sp-diagnostics":"78359e4b-07c2-43c6-8d0b-d060b4d577e8"}));
    initMap['8217e442-8ed3-41fd-957d-b112e841286a'] = defineCache['8217e442-8ed3-41fd-957d-b112e841286a_0.2.2'].factory.apply(null, getDependencyComponents(defineCache['8217e442-8ed3-41fd-957d-b112e841286a_0.2.2'].deps, {"@microsoft/sp-diagnostics":"78359e4b-07c2-43c6-8d0b-d060b4d577e8","@ms/odsp-utilities-bundle":"cc2cc925-b5be-41bb-880a-f0f8030c6aff","@microsoft/sp-core-library":"7263c7d0-1d6a-45ec-8d85-d4d1d234171b","@microsoft/sp-lodash-subset":"73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"}));
    initMap['1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8'] = defineCache['1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8_1.7.1'].factory.apply(null, getDependencyComponents(defineCache['1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8_1.7.1'].deps, {"@microsoft/sp-core-library":"7263c7d0-1d6a-45ec-8d85-d4d1d234171b","@microsoft/sp-diagnostics":"78359e4b-07c2-43c6-8d0b-d060b4d577e8","@microsoft/sp-dynamic-data":"e40f8203-b39d-425a-a957-714852e33b79"}));
    initMap['1c6c9123-7aac-41f3-a376-3caea41ed83f'] = defineCache['1c6c9123-7aac-41f3-a376-3caea41ed83f_1.7.1'].factory.apply(null, getDependencyComponents(defineCache['1c6c9123-7aac-41f3-a376-3caea41ed83f_1.7.1'].deps, {"@microsoft/sp-core-library":"7263c7d0-1d6a-45ec-8d85-d4d1d234171b","@microsoft/sp-diagnostics":"78359e4b-07c2-43c6-8d0b-d060b4d577e8","@microsoft/sp-lodash-subset":"73e1dc6c-8441-42cc-ad47-4bd3659f8a3a","@microsoft/sp-page-context":"1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8","@microsoft/sp-http":"c07208f0-ea3b-4c1a-9965-ac1b825211a6","@ms/sp-telemetry":"8217e442-8ed3-41fd-957d-b112e841286a","@microsoft/sp-dynamic-data":"e40f8203-b39d-425a-a957-714852e33b79","@microsoft/load-themed-styles":"229b8d08-79f3-438b-8c21-4613fc877abd"}));

      var starter = initMap['1c6c9123-7aac-41f3-a376-3caea41ed83f']._SPStarter;
      starter._setBundledComponents(initMap);
      return starter;
    })();
  } catch (error) {
    // An error occurred loading the assembly
    debugger;
    
    if (!(window.location.search || '').toLowerCase().match(/noredir=true/i)) {
      window.location.href = '/_layouts/15/error.aspx?ErrorText=Can\'t%20load%20the%20application%20on%20this%20page.%20Use%20the%20browser%20Back%20button%20to%20retry.%20If%20the%20problem%20persists%2C%20contact%20the%20administrator%20of%20the%20site%20and%20give%20them%20the%20information%20in%20Technical%20Details.&ErrorDetails=' + 
        encodeURIComponent(error) + '&ErrorCategory=spfx';
    } else {
      console.error(error);
    }
  }
})();