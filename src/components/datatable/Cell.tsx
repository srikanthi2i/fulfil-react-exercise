import * as React from 'react';
import { TRow, TColumn } from '../../containers/home/Home';

interface ICellProps {
  column: TColumn;
  row?: TRow;
}

const Cell: React.FunctionComponent<ICellProps> = (props) => {
  const { column: { numeric, width, id, label }, row } = props;
  const cellStyle = {
    [numeric ? 'textAlign': '']: 'right',
    width: width
  };
  return (
    <React.Fragment>
      {
        row ?
        <td className="DataTable-cell" style={{...cellStyle}}>{row[id]}</td> :
        <th className="DataTable-cell" style={{...cellStyle}}>{label}</th>
      }
    </React.Fragment>
  );
};

export default Cell;
