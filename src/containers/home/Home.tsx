import * as React from 'react';

import DataTable from '../../components/datatable/DataTable';

export interface IHomeProps {
}

export type TColumn = {
  id: keyof TRow;
  label: string;
  numeric: boolean;
  width?: string | undefined;
}

export type TRow = {
  id: number;
  product: string | number;
  price: string | number;
}

export interface IHomeState {
  columns: TColumn[];
  rows: TRow[];
  selectedRows: TRow[];
  visibleRows: TRow[];
}

class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    const rows: TRow[] = [];
    const visibleRows: TRow[] = [];
    for (let index = 1; index <= 50000; index++) {
      const row = {
        id: index,
        product: `Product-${index}`,
        price: `$${15.5 + index}`
      };
      rows.push(row);
      if (index < 51) {
        visibleRows.push(row);
      }
    }
    this.state = {
      columns: [{
        id: 'product',
        label: 'Product',
        numeric: false,
        width: '200px',
      }, {
        id: 'price',
        label: 'Price',
        numeric: true,
      }],
      rows: [...rows],
      selectedRows: [],
      visibleRows: [...visibleRows]
    };
  }

  onRowClick = (row: TRow, rowId: number) => {
    const { selectedRows } = this.state;
    const newSelectedRows = [...selectedRows];
    const currIndex = newSelectedRows.findIndex((selectedRow) => selectedRow.id === rowId);
    if (currIndex === -1) {
      newSelectedRows.push(row);
    } else {
      newSelectedRows.splice(currIndex, 1);
    }
    this.setState({
      selectedRows: [...newSelectedRows]
    });
  }

  toggleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { rows } = this.state;
    this.setState({
      selectedRows: e.target.checked ? [...rows]: []
    })
  }

  onScrollEvent = (e: React.UIEvent<HTMLDivElement>) => {
    const infiniteLoader: any = document.getElementById('infiniteLoader');
    const target: any = e.target;
    console.log('scroll', target.getBoundingClientRect(), infiniteLoader.getBoundingClientRect());
  }

  public render() {
    const { columns, rows, selectedRows, visibleRows } = this.state;
    return (
      <main className="Home">
        <h3>Product List</h3>
        <DataTable 
          columns={columns}
          rows={rows}
          selectedRows={selectedRows}
          visibleRows={visibleRows}
          onRowClick={this.onRowClick}
          toggleSelectAll={this.toggleSelectAll}
          onScrollEvent={this.onScrollEvent}
        />
      </main>
    );
  }
}

export default Home;
