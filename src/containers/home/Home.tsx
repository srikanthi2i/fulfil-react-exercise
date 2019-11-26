import * as React from 'react';
import { connect } from 'react-redux';

import DataTable from '../../components/datatable/DataTable';
import { fetchDataRequest } from '../../actions/home';
import { IReduxState } from '../../reducers';
import { TRow, TColumn } from '../../reducers/home';

import './Home.scss';

export interface IHomeStateMap {
  columns: TColumn[];
  loading: boolean;
  rows: TRow[];
}

export interface IHomeDispatchMap {
  fetchDataList: (cb?: (row: TRow[]) => void) => void;
}

export interface IHomeProps {
}

export interface IHomeState {
  selectedRows: TRow[];
  visibleRows: TRow[];
}

class Home extends React.Component<IHomeProps & IHomeStateMap & IHomeDispatchMap, IHomeState> {
  constructor(props: IHomeProps & IHomeStateMap & IHomeDispatchMap) {
    super(props);
    this.state = {
      selectedRows: [],
      visibleRows: []
    };
  }

  componentDidMount() {
    const cb = (rows: TRow[]) => {
      const updatedVisibleRows: TRow[] = [];
      for (let index = 0; index < 50; index++) {
        const row = rows[index];
        updatedVisibleRows.push({...row});
      }
      this.setState({
        visibleRows: updatedVisibleRows
      });
    }
    this.props.fetchDataList(cb);
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
      selectedRows: newSelectedRows
    });
  }

  toggleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { rows } = this.props;
    this.setState({
      selectedRows: e.target.checked ? [...rows]: []
    })
  }

  onScrollEvent = (e: React.UIEvent<HTMLDivElement>) => {
    const infiniteLoader: any = document.getElementById('infiniteLoader');
    const target: any = e.target;
    const containerBottom = parseInt(target.getBoundingClientRect().bottom);
    const loaderBottom = parseInt(infiniteLoader.getBoundingClientRect().bottom);
    if (loaderBottom === containerBottom) {
      const { rows } = this.props;
      const { visibleRows } = this.state;
      const updatedVisibleRows = [...visibleRows];
      for (let index = visibleRows.length; index < visibleRows.length + 50; index++) {
        updatedVisibleRows.push({...rows[index]});
      }
      setTimeout(() => {
        this.setState({
          visibleRows: updatedVisibleRows
        });
      }, 500);
    }

  }

  public render() {
    const { selectedRows, visibleRows } = this.state;
    const { rows, columns } = this.props;
    return (
      <main className="Home">
        <h3>Data List</h3>
        { <DataTable 
          columns={columns}
          rows={rows}
          selectedRows={selectedRows}
          visibleRows={visibleRows}
          onRowClick={this.onRowClick}
          toggleSelectAll={this.toggleSelectAll}
          onScrollEvent={this.onScrollEvent}
        /> }
      </main>
    );
  }
}

const mapStateToProps = (state: IReduxState) => ({
  columns: state.home.columns,
  loading: state.home.loading,
  rows: state.home.rows
});

const mapDispatchToProps = (dispatch: any): IHomeDispatchMap => ({
  fetchDataList: (cb) => dispatch(fetchDataRequest(cb))
});

export default connect<IHomeStateMap, IHomeDispatchMap, IHomeProps, IReduxState>
                (mapStateToProps, mapDispatchToProps)(Home);
