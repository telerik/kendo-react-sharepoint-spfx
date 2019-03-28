import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IKendoReactSpfxWebPartProps {
    description: string;
}
export default class KendoReactSpfxWebPart extends BaseClientSideWebPart<IKendoReactSpfxWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
