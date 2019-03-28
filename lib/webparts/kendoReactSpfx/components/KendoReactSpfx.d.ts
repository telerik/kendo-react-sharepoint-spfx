/// <reference types="react" />
import * as React from 'react';
import { IKendoReactSpfxProps } from './IKendoReactSpfxProps';
import { IKendoReactSpfxState } from './IKendoReactSpfxState';
import '@progress/kendo-theme-default';
export default class KendoReactSpfx extends React.Component<IKendoReactSpfxProps, IKendoReactSpfxState> {
    constructor(props: any);
    render(): React.ReactElement<IKendoReactSpfxProps>;
}
