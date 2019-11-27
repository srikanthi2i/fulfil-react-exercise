import React from 'react';
import { TColumn } from '../../reducers/home';

export interface ISearchBarProps {
  columns: TColumn[];
  onSearch: (searchText: string, filter: string) => void;
}

export interface ISearchBarState {
  filter: string;
  searchText: string;
}

class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
  state = {
    filter: '',
    searchText: ''
  }
  debounce: any;

  handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      filter: e.target.value,
      searchText: ''
    });
  }

  handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    this.setState({
      searchText: searchValue
    });
    const { filter } = this.state;
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      this.props.onSearch(searchValue, filter);
    }, 300);
  }

  public render() {
    const { columns } = this.props;
    const { filter, searchText } = this.state;
    return (
      <div className="DataTable-searchbar">
        <select value={filter} onChange={this.handleFilterChange}>
          <option value="">Filter</option>
          {columns.map((column) => column.label && <option key={column.id} value={column.id}>{column.label}</option>)}
        </select>
        <input type="text" value={searchText} onChange={this.handleOnSearch} />
      </div>
    );
  }
}

export default SearchBar;
