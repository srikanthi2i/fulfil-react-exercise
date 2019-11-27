import * as React from 'react';

import Header from './Header';
import Body from './Body';
import SearchBar from './SearchBar';
import { TColumn, TRow } from '../../reducers/home';

import './DataTable.scss';

export interface IDataTableProps {
  columns: TColumn[];
  rows: TRow[];
  selectedRows: TRow[];
  loading: boolean;
  onRowClick: (rowData: TRow, rowIndex: number) => void;
  onToggleSelectAll: (selectedRows: TRow[]) => void;
  onScrollEvent: () => void;
  onSearch: (searchText: string, filter: string) => void;
}

const DataTable: React.FunctionComponent<IDataTableProps> = (props) => {
  return (
    <section className="DataTable">
      <div className="DataTable-container">
        <SearchBar columns={props.columns} onSearch={props.onSearch} />
        <Header {...props}/>
        <Body {...props} />
      </div>
    </section>
  );
}

export default DataTable;
