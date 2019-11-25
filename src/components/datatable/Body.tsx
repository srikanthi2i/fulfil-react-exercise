import * as React from 'react';
import { IDataTableProps } from './DataTable';
import Row from './Row';

interface IBodyProps extends IDataTableProps {
}

const Body: React.FunctionComponent<IBodyProps> = (props) => {
  return (
    <div className="DataTable-body" onScroll={props.onScrollEvent}>
      <table className="DataTable-table">
        <tbody className="DataTable-body">
          {props.visibleRows.map((row) => <Row key={row.id} {...props} row={row}/>)}
        </tbody>
      </table>
      <div id="infiniteLoader"></div>
    </div>
  );
};

export default Body;
