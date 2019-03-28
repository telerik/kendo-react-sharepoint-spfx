# Change Log - @microsoft/sp-loader

This log was last generated on Tue, 18 Dec 2018 02:02:24 GMT and should not be manually modified.

## 1.7.1
Tue, 18 Dec 2018 02:02:24 GMT

*Version update only*

## 1.7.0
Thu, 08 Nov 2018 17:05:51 GMT

### Updates

- Create public APIs for getManifests and loadComponentById

## 1.6.0
Mon, 27 Aug 2018 18:06:28 GMT

*Version update only*

## 1.5.1
Tue, 26 Jun 2018 14:50:55 GMT

*Version update only*

## 1.5.0
Fri, 01 Jun 2018 18:13:37 GMT

### Updates

- Fix the way react and react-dom are loaded in the workbench.
- Remove Ctrl+Shift+` key combo to open the developer tools.
- Block usage of SPFx to Firefox 43 or older due to unsupported APIs
- Fix a problem when error page doesn't include correlation id
- Increase RequireJS timeout to 30 seconds

## 1.4.1
Thu, 15 Feb 2018 01:56:14 GMT

### Updates

- Package version bump from 1.4.1-pr.2 to 1.4.1 by version policy

## 1.4.0
Mon, 04 Dec 2017 18:15:58 GMT

### Patches

- Disallow loading of components built using SPFx preview releases prior to 1.0
- Replace @types/es6-collections with the typescript compiler's built-in es2015.collection library

## 1.3.4
Thu, 26 Oct 2017 17:35:39 GMT

*Version update only*

## 1.3.0
Fri, 22 Sep 2017 20:19:09 GMT

*Version update only*

## 1.2.0
Fri, 25 Aug 2017 20:31:17 GMT

### Minor changes

- Use lockstep version for all SPFx packages

### Patches

- Ensure styles are loaded in a debounced manner
- Fix the background color of the debug warning dialog
- Decode the debug querystring when needed
- Add a self-xss warning in the console
- Update to Fabric React 4.32.0
- Change the wording of some strings in the "Allow debug manifests?" dialog box

## 1.1.1
Thu, 08 Jun 2017 19:39:03 GMT

*Version update only*

## 1.1.0
Thu, 25 May 2017 21:09:42 GMT

### Minor changes

- Upgraded office-ui-fabric-react to 2.31.0
- Added self-XSS warning message to the browser developer console
- Fixed an issue where filter overlays weren't being shown in the developer dashboard trace display
- Improved the debug manifests security confirmation dialog
- Improved the debug manifest error user interface
- Enabled the "debugManifestsFile" parameter to be specified in the query string instead of the URL fragment
- Improved the order of tabs in the Developer Dashboard
- Fixed an issue with the formatting of dates and times in the "Trace" tab of the Developer Dashboard
- Fixed an issue where the Developer Dashboard logged an error involving React
- Upgraded to Webpack 2.0
- Improved user experience when web parts fail to render
- Added detection of undeclared dependencies at runtime
- Added experimental support for loading modules using RequireJS instead of SystemJS
- Updated loadScript() to use XHR instead of <script> tags
- Removed support for Internet Explorer releases older than IE9
- Fixed an issue with loadComponentById() where it sometimes didn't accept valid GUID's
- Upgraded SystemJS to 0.19.25
- Fixed an issue where the Chrome debugger wasn't showing source code for client-side components
- Changed the Developer Dashboard shortcut from CTRL+SHIFT+` to CTRL+F12
- Upgraded to TypeScript 2.2

## 1.0.0
Fri, 17 Feb 2017 23:09:23 GMT

### Breaking changes

- General availability

### Minor changes

- Support for multiple component versions simultaneously
- Updated to TypeScript 2.1
- Enabled strictNullChecks in sp-loader project.
- Switched back to SystemJS 0.19.25

### Patches

- Fixed the way react-dom and react are referenced in tests against the NPM module.
- Ensured two copies of core libraries don't get loaded on the workbench.
- loadComponent() has a retry strategy when it fails to load
- Upgraded React to 15.4.1
- Bumped up office-ui-fabric-react version to 0.83.0
- Added alias to manifest dev console
- Support global dependencies in path loader configurations
- Old versions of Firefox (<44) are not supported
- Calling loadScript with a string as the second parameter should throw an error
- Requests for React 0.14.8 return React 15.4.2
- Locked version numbers for @types packages
- Updated .npmignore
- Added query parameter (enableConsoleLog) to enable TraceLogger logging to console"
- Added tryGetManifest() function to ManifestStore and tryGetComponentById() function to ComponentStore.
- IE 9 is not supported anymore.
- Chrome developer tools now shows source code correctly

## 0.7.0
Tue, 03 Jan 2017 21:52:49 GMT

### Minor changes

- More changes for RC0 release.

## 0.6.0
Tue, 06 Dec 2016 20:44:26 GMT

### Minor changes

- Renaming sp-module-loader to sp-loader.

## 0.5.1

### Minor changes

- API clean up. 'forceLoadDebugManifests' and 'loadManifestModules' are deprecated.
- Localizing the strings in the module loader.
- Updating the developer tools to use office-ui-fabric-react.

### Patches

- Cleaning up dependencies.

## 0.4.0

### Minor changes

- Adds a field to WebPart manifest for disabling the WebPart on a Classic page
- IClientSideWebPartManifestInstance doesn't extend IClientSideWebPartManifestEntry anymore
- For manifests, the `id` field should be a GUID

### Patches

- Updates standard library modules list to include `@microsoft/sp-webpart-base`

## 0.3.0

*Version update only*

## 0.2.0

### Minor changes

- Minor bump of `@microsoft/sp-client-preview`

## 0.1.11

*Initial release*

