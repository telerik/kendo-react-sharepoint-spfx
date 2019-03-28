/**
 * The SharePoint Framework loader
 * 
 * @remarks
 * Built on familiar standards such as SystemJS and WebPack,
 * the loader is the first part of the SharePoint Framework to load on a page.
 * It manages versioning and loading of client-side components, web parts,
 * and other assets.  It also implements the developer dashboard.
 * 
 * @packagedocumentation
 */

/// <reference types="react" />
import { IClientSideComponentManifest } from '@microsoft/sp-module-interfaces';
import { IODataBasePermission } from '@microsoft/sp-odata-types';
import { IODataContextWebInformation } from '@microsoft/sp-odata-types';
import { IODataList } from '@microsoft/sp-odata-types';
import { IODataListItem } from '@microsoft/sp-odata-types';
import { IODataNavigationNodeCollection } from '@microsoft/sp-odata-types';
import { IODataUser } from '@microsoft/sp-odata-types';
import { IODataWeb } from '@microsoft/sp-odata-types';
import * as React from 'react';
import { ServiceScope } from '@microsoft/sp-core-library';

/* Excluded from this release type: DeveloperTools */

declare interface IComponentInitializer {
    (resolve: (component: React.ComponentClass<IDeveloperToolsCompPropBase>) => void, reject: (error: Error) => void): void;
}

/* Excluded from this release type: _IDebugData */

/* Excluded from this release type: IDeveloperTools */

declare interface IDeveloperToolsCompPropBase {
}

/* Excluded from this release type: IDeveloperToolsTab */

declare interface IDeveloperToolsTabComponentParameters extends IDeveloperToolsTabParametersBase {
    /**
     * A react component to be shown in the developer tools panel.
     */
    component: React.ComponentClass<IDeveloperToolsCompPropBase>;
}

declare interface IDeveloperToolsTabParametersBase {
    /**
     * The title of the developer tools tab. Shown along the top of the developer tools panel.
     */
    title: string;
}

declare interface IDeveloperToolsTabPromiseParameters extends IDeveloperToolsTabParametersBase {
    /**
     * A function that resolves to a React component to be shown in the developer tools panel or rejects with an error.
     */
    componentInitializer: IComponentInitializer;
}

/* Excluded from this release type: _IErrorInformation */

/**
 * Options for the loadScript() method in ISPComponentLoader
 *
 * @public
 */
export declare interface ILoadScriptOptions {
    /**
     * If set, the loaded script will be stored in a global variable under this name.
     */
    globalExportsName?: string;
}

/* Excluded from this release type: _IManifestStoreEntry */

/* Excluded from this release type: _IPreloadedCustomAction */

/* Excluded from this release type: _IPreloadedData */

/* Excluded from this release type: ISPComponentLoader */

/* Excluded from this release type: _ManifestProvider */

/* Excluded from this release type: _ManifestStore */

/**
 * Component loader.
 * Needs to be initialized with an implemented `ISPComponentLoader`.
 *
 * @public
 */
export declare class SPComponentLoader {
    private static _instance;
    /* Excluded from this release type: _initialize */
    /* Excluded from this release type: _startApplication */
    /**
     * {@inheritDoc  ISPComponentLoader.loadCss}
     */
    static loadCss(url: string): void;
    /**
     * {@inheritDoc  ISPComponentLoader.loadScript}
     */
    static loadScript<TModule>(url: string, options?: ILoadScriptOptions): Promise<TModule>;
    /**
     * {@inheritDoc  ISPComponentLoader.loadComponent}
     */
    static loadComponent<TComponent>(manifest: IClientSideComponentManifest): Promise<TComponent>;
    /**
     * {@inheritDoc  ISPComponentLoader.loadComponentById}
     *
     * @public
     */
    static loadComponentById<TComponent>(id: string, version?: string): Promise<TComponent>;
    /* Excluded from this release type: registerManifests */
    /* Excluded from this release type: _getManifestReferences */
    /**
     * Returns static copies of all the manifests.
     *
     * @public
     */
    static getManifests(): IClientSideComponentManifest[];
    /* Excluded from this release type: tryGetLoadedComponent */
    /* Excluded from this release type: tryGetManifestById */
    /* Excluded from this release type: _loadDebugManifestsForWorkbench */
}

/* Excluded from this release type: _SPLoaderFlights */

/* Excluded from this release type: _SPStarter */
