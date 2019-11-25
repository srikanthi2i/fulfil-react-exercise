import * as React from 'react';
import { TColumn, TRow } from '../../containers/home/Home';
import Header from './Header';
import Body from './Body';
import './DataTable.css';

export interface IDataTableProps {
  columns: TColumn[];
  rows: TRow[];
  selectedRows: TRow[];
  visibleRows: TRow[];
  onRowClick: (rowData: TRow, rowIndex: number) => void;
  toggleSelectAll: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onScrollEvent: (e: React.UIEvent<HTMLDivElement>) => void;
}

export interface IDataTableState {
}

class DataTable extends React.Component<IDataTableProps, IDataTableState> {
  constructor(props: IDataTableProps) {
    super(props);
    this.state = {
    }
  }

  public render() {
    return (
      <section className="DataTable">
        <div className="DataTable-container">
          <Header {...this.props}/>
          <Body {...this.props} />
        </div>
      </section>
    );
  }
}

export default DataTable;
