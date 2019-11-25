import * as React from 'react';
import { IDataTableProps } from './DataTable';
import Cell from './Cell';

interface IHeaderProps extends IDataTableProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className="DataTable-header">
      <table className="DataTable-table">
        <thead>
          <tr className="DataTable-row">
            <td className="DataTable-cell">
              <input type="checkbox" checked={props.selectedRows.length === props.rows.length} onChange={props.toggleSelectAll}/>
            </td>
            {props.columns.map((column) => <Cell key={column.id} column={column}/>)}
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Header;
