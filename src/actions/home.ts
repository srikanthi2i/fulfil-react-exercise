import * as HOMETYPES from '../globals/action-types/home';
import { TRow } from '../reducers/home';

export const fetchDataRequest = (pageNo: number, limit: number) => ({
  type: HOMETYPES.FETCH_DATA_LIST_REQUEST,
  pageNo,
  limit
});

export const fetchDataRequestSuccess = (rows: TRow[]) => ({
  type: HOMETYPES.FETCH_DATA_LIST_SUCCESS,
  rows
});

export const fetchDataRequestFail = (error: any) => ({
  type: HOMETYPES.FETCH_DATA_LIST_FAILURE,
  error
});

export const searchDataRequest = (searchText: string, filter: string, pageNo: number) => ({
  type: HOMETYPES.SEARCH_DATA_LIST_REQUEST,
  searchText,
  filter,
  pageNo
});

export const searchDataRequestSuccess = (rows: TRow[]) => ({
  type: HOMETYPES.SEARCH_DATA_LIST_SUCCESS,
  rows
});

export const searchDataRequestFail = (error: any) => ({
  type: HOMETYPES.SEARCH_DATA_LIST_FAILURE,
  error
});
