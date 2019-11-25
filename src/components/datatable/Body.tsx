import * as React from 'react';

import Row from './Row';
import { IDataTableProps } from './DataTable';

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
      <div id="infiniteLoader">Loading...</div>
    </div>
  );
};

export default Body;
