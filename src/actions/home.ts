import * as HOMETYPES from '../globals/action-types/home';
import { TRow } from '../reducers/home';

export const fetchDataRequest = (cb?: (rows: TRow[]) => void) => ({
  type: HOMETYPES.FETCH_DATA_LIST_REQUEST,
  cb
});

export const fetchDataRequestSuccess = (rows: TRow[]) => ({
  type: HOMETYPES.FETCH_DATA_LIST_SUCCESS,
  rows
});

export const fetchDataRequestFail = (error: any) => ({
  type: HOMETYPES.FETCH_DATA_LIST_FAILURE,
  error
});
