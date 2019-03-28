define("1c6c9123-7aac-41f3-a376-3caea41ed83f_1.7.1", ["@microsoft/sp-core-library","@microsoft/sp-diagnostics","resx-strings","@microsoft/sp-lodash-subset","@microsoft/sp-page-context","@microsoft/sp-http","@ms/sp-telemetry","@microsoft/sp-dynamic-data","@microsoft/load-themed-styles"], function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_41__, __WEBPACK_EXTERNAL_MODULE_42__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ ])});;
//# sourceMappingURL=sp-loader.js.map