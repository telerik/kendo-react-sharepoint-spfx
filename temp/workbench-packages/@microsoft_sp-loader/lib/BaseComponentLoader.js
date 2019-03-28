import { Guid, Validate, _SPFlight } from '@microsoft/sp-core-library';
import { _TraceLogger } from '@microsoft/sp-diagnostics';
import { DebugManager } from './debug/DebugManager';
import PlatformLoader from './PlatformLoader';
import ComponentStore from './stores/ComponentStore';
import ManifestStore from './stores/ManifestStore';
import { react15Version, react16Version, reactComponentId, reactDomComponentId, spHomeComponentId } from './utilities/componentConstants';
import { startApplicationLogSource } from './utilities/telemetryConstants';
var BaseComponentLoader = (function () {
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
        if (preloadedData.clientSideApplicationId !== spHomeComponentId) {
            if (_SPFlight.isEnabled(1187 )) {
                if (!ManifestStore.instance.tryGetManifest(reactComponentId, react16Version)) {
                    _TraceLogger.logVerbose(startApplicationLogSource, 'Requesting React 16 manifests to the server');
                    waitingPromise =
                        ManifestStore.instance.requestManifests([
                            { id: reactComponentId, version: react16Version },
                            { id: reactDomComponentId, version: react16Version }
                        ]).catch(function () {
                            return ManifestStore.instance.requestManifests([
                                { id: reactComponentId, version: react16Version },
                                { id: reactDomComponentId, version: react16Version }
                            ]);
                        });
                }
            }
            else {
                if (!ManifestStore.instance.tryGetManifest(reactComponentId, react15Version)) {
                    _TraceLogger.logVerbose(startApplicationLogSource, 'Requesting React 15 manifests to the server');
                    waitingPromise =
                        ManifestStore.instance.requestManifests([
                            { id: reactComponentId, version: react15Version },
                            { id: reactDomComponentId, version: react15Version }
                        ]).catch(function () {
                            return ManifestStore.instance.requestManifests([
                                { id: reactComponentId, version: react15Version },
                                { id: reactDomComponentId, version: react15Version }
                            ]);
                        });
                }
            }
        }
        return waitingPromise.then(function () { return PlatformLoader.startApplication(preloadedData, _this._serviceScope).then(function (application) {
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
        ManifestStore.instance.registerPreloadedManifests(preloadedData);
        if (NPM_BUILD) {
            require('./utilities/initializeNpmModule').initializeNpmModule();
        }
        this._listViewHostWorkaround(preloadedData);
        if (!isDebugLoader) {
            this._pinBundledComponents(bundledComponents);
        }
        this._overrideComponents(bundledComponents);
    };
    BaseComponentLoader.prototype.tryGetLoadedComponent = function (manifest) {
        Validate.isNotNullOrUndefined(manifest, 'manifest');
        return ComponentStore.instance.tryGetComponentReference(manifest.id, manifest.version);
    };
    BaseComponentLoader.prototype.loadComponentById = function (id, version) {
        var _this = this;
        var parsedId;
        try {
            Validate.isNonemptyString(id, 'id');
            parsedId = Guid.parse(id).toString();
        }
        catch (error) {
            return Promise.reject(error);
        }
        var manifest = ManifestStore.instance.tryGetManifest(parsedId, version);
        if (manifest) {
            return this.loadComponent(manifest);
        }
        else {
            return ManifestStore.instance.requestManifest(parsedId, version)
                .then(function (newManifest) { return _this.loadComponent(newManifest); });
        }
    };
    BaseComponentLoader.prototype.registerManifests = function (manifests) {
        ManifestStore.instance.registerManifests(manifests, false);
    };
    Object.defineProperty(BaseComponentLoader.prototype, "_manifestReferences", {
        get: function () {
            return ManifestStore.instance.getRegisteredManifests();
        },
        enumerable: true,
        configurable: true
    });
    BaseComponentLoader.prototype.loadCss = function (url) {
        Validate.isNonemptyString(url, 'url');
        var linkTag = document.createElement('link');
        linkTag.rel = 'stylesheet';
        linkTag.type = 'text/css';
        linkTag.href = url;
        BaseComponentLoader._headElement.appendChild(linkTag);
    };
    BaseComponentLoader.prototype._loadDebugManifestsForWorkbench = function (manifestsFileUrl) {
        return DebugManager.loadAndRegisterManifestsFile(this, manifestsFileUrl,  true).then();
    };
    BaseComponentLoader.prototype.tryGetManifestById = function (id, version) {
        Validate.isNonemptyString(id, 'id');
        var parsedId = Guid.parse(id).toString();
        return ManifestStore.instance.tryGetManifest(parsedId, version);
    };
    BaseComponentLoader.prototype._unloadComponents = function () {
        var _this = this;
        ManifestStore.instance.getRegisteredManifests().forEach(function (manifest) {
            _this._unloadComponent(manifest);
        });
    };
    BaseComponentLoader.prototype._listViewHostWorkaround = function (preloadedData) {
    };
    BaseComponentLoader.prototype._pinBundledComponents = function (bundledComponents) {
        for (var id in bundledComponents) {
            if (bundledComponents.hasOwnProperty(id) && id !== reactComponentId && id !== reactDomComponentId) {
                ManifestStore.instance._pinManifest(id);
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
export { BaseComponentLoader };
