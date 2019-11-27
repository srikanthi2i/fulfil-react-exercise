import * as React from 'react';
import Cell from './Cell';
import { TColumn, TRow } from '../../reducers/home';

export interface IRowProps {
  columns: TColumn[];
  row: TRow;
  selectedRows: TRow[];
  onRowClick: (rowData: TRow, rowIndex: number) => void;
}

const Row: React.FunctionComponent<IRowProps> = (props) => {
  const { columns, row, selectedRows, onRowClick } = props;
  return (
    <tr className="DataTable-row" onClick={() => onRowClick(row, row.id)}>
      <td className="DataTable-cell">
        <input type="checkbox" checked={!!selectedRows.find((selectedRow) => row.id === selectedRow.id)} readOnly/>
      </td>
      {columns.map((column) => <Cell key={column.id} row={row} column={column} />)}
    </tr>
  );

}

export default Row;
