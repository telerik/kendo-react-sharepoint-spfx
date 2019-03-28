export interface IDebugPromptOptions {
    loaderRequested: boolean;
    manifestsRequested: boolean;
}
export declare function confirmDebugAllowed(options: IDebugPromptOptions): Promise<boolean>;
export declare function dangerouslyEnableDebug(): void;
export declare function peekDebugAllowed(options: IDebugPromptOptions): boolean;
