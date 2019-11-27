import * as React from 'react';

import Cell from './Cell';
import { TColumn, TRow } from '../../reducers/home';

interface IHeaderProps {
  columns: TColumn[];
  rows: TRow[];
  selectedRows: TRow[];
  onToggleSelectAll: (selectedRows: TRow[]) => void;
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const { columns, rows, selectedRows } = props;

  const onToggleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    const updatedRows = checked ? [...rows]: [];
    props.onToggleSelectAll(updatedRows);
  };
  
  return (
    <div className="DataTable-header">
      <table className="DataTable-table">
        <thead>
          <tr className="DataTable-row">
            <td className="DataTable-cell">
              <input type="checkbox"
                checked={!!selectedRows.length && (selectedRows.length === rows.length)}
                onChange={onToggleSelectAll}/>
            </td>
            {columns.map((column) => <Cell key={column.id} column={column}/>)}
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Header;
