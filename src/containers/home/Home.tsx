import * as React from 'react';
import { connect } from 'react-redux';

import DataTable from '../../components/datatable/DataTable';
import { fetchDataRequest, searchDataRequest } from '../../actions/home';
import { IReduxState } from '../../reducers';
import { TRow, TColumn } from '../../reducers/home';
import { DATA_LIMIT } from '../../globals/constants/app';

import './Home.scss';

export interface IHomeStateMap {
  columns: TColumn[];
  isFiltered: boolean;
  loading: boolean;
  rows: TRow[];
}

export interface IHomeDispatchMap {
  fetchDataList: (pageNo: number, limit: number) => void;
  searchDataList: (searchText: string, filter: string, pageNo: number) => void;
}

export interface IHomeProps {
}

export interface IHomeState {
  filter: string;
  pageNo: number;
  searchText: string;
  selectedRows: TRow[];
}

class Home extends React.Component<IHomeProps & IHomeStateMap & IHomeDispatchMap, IHomeState> {
  constructor(props: IHomeProps & IHomeStateMap & IHomeDispatchMap) {
    super(props);
    this.state = {
      filter: '',
      pageNo: 1,
      searchText: '',
      selectedRows: []
    }
  }

  componentDidMount() {
    this.props.fetchDataList(this.state.pageNo, DATA_LIMIT);
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

  onToggleSelectAll = (selectedRows: TRow[]) => {
    this.setState({
      selectedRows
    });
  }

  onScrollEvent = () => {
    const { pageNo, searchText, filter } = this.state;
    const { isFiltered } = this.props;
    const nextPageNo = pageNo + 1;
    this.setState({
      pageNo: nextPageNo
    });
    isFiltered ? this.props.searchDataList(searchText, filter, nextPageNo) :
      this.props.fetchDataList(nextPageNo, DATA_LIMIT);
  }

  onSearch = (searchText: string, filter: string) => {
    if (searchText) {
      this.setState({
        selectedRows: [],
        pageNo: 1,
        searchText,
        filter
      });
      this.props.searchDataList(searchText, filter, 1);
    } else {
      this.setState({
        pageNo: 1,
        selectedRows: [],
      });
      this.props.fetchDataList(1, DATA_LIMIT);
    }
  }

  public render() {
    const { rows, columns, loading } = this.props;
    const { selectedRows } = this.state;
    return (
      <main className="Home">
        <h3>Data List</h3>
        { <DataTable 
          columns={columns}
          rows={rows}
          selectedRows={selectedRows}
          loading={loading}
          onRowClick={this.onRowClick}
          onToggleSelectAll={this.onToggleSelectAll}
          onScrollEvent={this.onScrollEvent}
          onSearch={this.onSearch}
        /> }
      </main>
    );
  }
}

const mapStateToProps = (state: IReduxState) => ({
  columns: state.home.columns,
  isFiltered: state.home.isFiltered,
  loading: state.home.loading,
  rows: state.home.rows
});

const mapDispatchToProps = (dispatch: any): IHomeDispatchMap => ({
  fetchDataList: (pageNo, limit) => dispatch(fetchDataRequest(pageNo, limit)),
  searchDataList: (searchText, filter, pageNo) => dispatch(searchDataRequest(searchText, filter, pageNo))
});

export default connect<IHomeStateMap, IHomeDispatchMap, IHomeProps, IReduxState>
                (mapStateToProps, mapDispatchToProps)(Home);
