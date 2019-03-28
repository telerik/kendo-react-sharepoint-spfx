import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'KendoReactSpfxWebPartStrings';
import KendoReactSpfx from './components/KendoReactSpfx';
import { IKendoReactSpfxProps } from './components/IKendoReactSpfxProps';

export interface IKendoReactSpfxWebPartProps {
  description: string;
}

export default class KendoReactSpfxWebPart extends BaseClientSideWebPart<IKendoReactSpfxWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IKendoReactSpfxProps > = React.createElement(
      KendoReactSpfx,
      {
        description: this.properties.description,
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
