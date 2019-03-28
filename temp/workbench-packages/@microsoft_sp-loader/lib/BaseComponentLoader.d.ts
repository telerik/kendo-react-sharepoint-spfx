import { ServiceScope } from '@microsoft/sp-core-library';
import { IClientSideComponentManifest } from '@microsoft/sp-module-interfaces';
import { ILoadScriptOptions } from './ILoadScriptOptions';
import { IPreloadedData } from './IPreloadedData';
import { ISPComponentLoader } from './ISPComponentLoader';
/**
 * The base class for a component loader.
 * Contains all implementation of the component loader that is agnostic to the internal module loader.
 *
 * @alpha
 */
export declare abstract class BaseComponentLoader implements ISPComponentLoader {
    private static _headElement;
    protected _serviceScope: ServiceScope;
    private _isInitialized;
    /**
     * @internal
     */
    constructor(serviceScope: ServiceScope);
    /**
     * This is called by the page scripts to start loading the framework. Do not call it from your own code.
     * @internal
     */
    _startApplication<TApplication>(preloadedData: IPreloadedData): Promise<TApplication>;
    /**
     * Initializes the component loader.
     * Registers all manifests (including debug manifests, if it applies)
     * and sets up internal logic before allowing to load components.
     * @internal
     */
    _initialize(preloadedData: IPreloadedData, bundledComponents: {
        [id: string]: Object;
    }, isDebugLoader: boolean): void;
    /**
     * Given a URL, load a script.
     *
     * @param url     - The script URL.
     * @param options - globalExportsName: If the script isn't an AMD module and loads a global member on the page,
     *                    specify the global member's name.
     * @returns         A promise containing the loaded module.
     */
    abstract loadScript<TModule>(url: string, options?: ILoadScriptOptions): Promise<TModule>;
    /**
     * Loads a component from a manifest.
     *
     * @param manifest - Manifest of the module to load.
     * @returns          A promise containing the loaded module.
     */
    abstract loadComponent<TComponent>(manifest: IClientSideComponentManifest): Promise<TComponent>;
    /**
     * Try and get a reference to a loaded component from a manifest.
     *
     * @param manifest - Manifest of the module to load.
     * @returns A reference to a component module by id and version or, if it does not exist, undefined.
     */
    tryGetLoadedComponent<TComponent>(manifest: IClientSideComponentManifest): TComponent | undefined;
    /**
     * Resolve a component id and version, and load it.
     * If a manifest cannot be found, it requests the manifest to the server through the REST API.
     * If a manifest is not found and not present in the server, it rejects the promise.
     *
     * @param id      - The id of the component to load.
     * @param version - The version of the component to load. If version is not defined, the method
     *                    will load any version of the component.
     * @returns         A promise containing the loaded module.
     *
     * @alpha
     */
    loadComponentById<TComponent>(id: string, version?: string): Promise<TComponent>;
    /**
     * Registers manifests in the manifest store.
     *
     * @param manifests - The manifests to register in the store.
     *
     * @alpha
     */
    registerManifests(manifests: IClientSideComponentManifest[]): void;
    /**
   * All registered manifests.
   * Note that this returns the actual manifests, so modifying the
   * returned objects modifies the primary data, not a copy
   *
   * @readonly
   * @internal
   */
    readonly _manifestReferences: IClientSideComponentManifest[];
    /**
     * Inserts a <link ... /> tag for a stylesheet.
     *
     * @param url - The CSS file URL.
     */
    loadCss(url: string): void;
    /**
     * {@inheritDoc  ISPComponentLoader._loadDebugManifestsForWorkbench}
     *
     * @internal
     */
    _loadDebugManifestsForWorkbench(manifestsFileUrl: string): Promise<void>;
    /**
     * Get a component manifest from the component id and version.
     *
     * @param id      - GUID id of the component.
     * @param version - Version of the component. If version is not defined, the method
     *                    will return the manifest for any version of the component.
     * @returns         Manifest for the component.
     *
     * @alpha
     */
    tryGetManifestById(id: string, version?: string): IClientSideComponentManifest | undefined;
    /**
     * {@inheritDoc  ISPComponentLoader._unloadComponents}
     *
     * @internal
     */
    _unloadComponents(): void;
    /**
     * SystemJS component loader overrides this function with a workaround required for the loader to work with
     * ListView pages.
     * @virtual
     */
    protected _listViewHostWorkaround(preloadedData: IPreloadedData): void;
    /**
     * Given a component id and a component module, it sets the component in the loader, therefore being
     * available without the need of loading it separately.
     * Should only be used when initializing the loader.
     *
     * @param componentId - Id of the component to override. There should be only one version of the component.
     * @param componentModule - Component module.
     */
    protected abstract _overrideComponent<TComponent>(componentId: string, componentModule: TComponent): void;
    protected abstract _unloadComponent(manifest: IClientSideComponentManifest): void;
    /**
     * Pins the manifest for each component that is bundled in the assembly.
     * See ManifestStore._pinManifest() for details about pinning.
     */
    private _pinBundledComponents(bundledComponents);
    /**
     * Overrides component definitions with existing components.
     * This is used for the assemblies to set up all the data.
     * This is dependent on the internal module loader (SystemJS, RequireJS) so each implementation has to write its own.
     */
    private _overrideComponents(bundledComponents);
}
