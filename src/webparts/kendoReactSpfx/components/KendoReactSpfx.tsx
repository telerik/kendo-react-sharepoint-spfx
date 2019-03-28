import * as React from 'react';
import { IKendoReactSpfxProps } from './IKendoReactSpfxProps';
import { IKendoReactSpfxState } from './IKendoReactSpfxState';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { process} from '@progress/kendo-data-query';
import '@progress/kendo-theme-default';
import { data } from './gridData';

export default class KendoReactSpfx extends React.Component<IKendoReactSpfxProps, IKendoReactSpfxState> {
  constructor(props){
    super(props);
    this.state = {
      gridData: data,
      dataState: { skip: 0, take: 20}
    };
  }

  public render(): React.ReactElement<IKendoReactSpfxProps> {
    return (
      <div>
        <Grid data={process(this.state.gridData,this.state.dataState)}
              pageable
              filterable
              sortable
              {...this.state.dataState}
              onDataStateChange={(e)=>this.setState({dataState: e.data})}
        >
          <GridColumn field="ProductID" title="ID" width="40px" filterable={false} />
          <GridColumn field="ProductName" title="Name" width="250px" />
          <GridColumn field="Category.CategoryName" title="CategoryName" />
          <GridColumn field="UnitPrice" title="Price" width="120px" />
          <GridColumn field="UnitsInStock" title="In stock" width="120px" />
        </Grid>
      </div>
    );
  }
}
