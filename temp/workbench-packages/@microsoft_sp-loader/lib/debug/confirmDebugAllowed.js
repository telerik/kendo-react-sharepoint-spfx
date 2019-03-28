import ensureDebugComponents from './ensureDebugComponents';
var _loaderResponse = NPM_BUILD ? true : undefined;
var _manifestsResponse = NPM_BUILD ? true : undefined;
var _debugAllowedPromise;
export function confirmDebugAllowed(options) {
    if (_requiresPrompt(options)) {
        if (!_debugAllowedPromise) {
            _debugAllowedPromise = new Promise(function (resolve) {
                ensureDebugComponents().then(function (debugComponents) {
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
export function dangerouslyEnableDebug() {
    _loaderResponse = true;
    _manifestsResponse = true;
}
export function peekDebugAllowed(options) {
    return ((!options.loaderRequested || _loaderResponse === true) &&
        (!options.manifestsRequested || _manifestsResponse === true));
}
function _requiresPrompt(options) {
    return ((options.loaderRequested && _loaderResponse === undefined) ||
        (options.manifestsRequested && _manifestsResponse === undefined));
}
