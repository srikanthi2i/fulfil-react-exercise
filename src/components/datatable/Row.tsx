import * as React from 'react';
import { TRow, TColumn } from '../../containers/home/Home';
import Cell from './Cell';

export interface IRowProps {
  columns: TColumn[];
  row: TRow;
  selectedRows: TRow[];
  onRowClick: (rowData: TRow, rowIndex: number) => void;
}

export interface IRowState {
}

class Row extends React.Component<IRowProps, IRowState> {
  constructor(props: IRowProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    const { columns, row, selectedRows, onRowClick } = this.props;
    return (
      <tr className="DataTable-row" onClick={() => onRowClick(row, row.id)}>
        <td className="DataTable-cell">
          <input type="checkbox" checked={!!selectedRows.find((selectedRow) => row.id === selectedRow.id)} readOnly/>
        </td>
        {columns.map((column) => <Cell key={column.id} row={row} column={column} />)}
      </tr>
    );
  }
}

export default Row;
