import * as React from 'react';

import Row from './Row';
import { TRow, TColumn } from '../../reducers/home';

interface IBodyProps {
  columns: TColumn[];
  rows: TRow[];
  selectedRows: TRow[];
  loading: boolean;
  onScrollEvent: () => void;
  onRowClick: (rowData: TRow, rowIndex: number) => void;
}

const Body: React.FunctionComponent<IBodyProps> = (props) => {

  const onScrollEvent = (e: React.UIEvent<HTMLDivElement>) => {
    const infiniteLoader: any = document.getElementById('infiniteLoader');
    const target: any = e.target;
    const containerBottom = parseInt(target.getBoundingClientRect().bottom);
    const loaderBottom = parseInt(infiniteLoader.getBoundingClientRect().bottom);
    if (loaderBottom === containerBottom) {
      props.onScrollEvent();
    }
  }

  return (
    <div className="DataTable-body" onScroll={onScrollEvent}>
      <table className="DataTable-table">
        <tbody className="DataTable-body">
          {props.rows.map((row) => <Row key={row.id} {...props} row={row}/>)}
        </tbody>
      </table>
      <div id="infiniteLoader">{props.loading ? 'Loading...' : !props.rows.length ? 'Record not found' : 'No more record'}</div>
    </div>
  );
};

export default Body;
