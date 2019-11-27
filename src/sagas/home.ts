import { put, call } from 'redux-saga/effects';
import * as homeActions  from '../actions/home';
import HomeService from '../services/home';
import { IActionProps } from '../reducers';

export function* getDataList(action: IActionProps) {
  try {
    const { pageNo, limit } = action;
    const rows = yield call(HomeService.getDataList, pageNo, limit);
    yield put(homeActions.fetchDataRequestSuccess(rows));
  } catch (e) {
    yield put(homeActions.fetchDataRequestFail({ message: 'Error occured while fetching data' }));
  }
}

export function* searchDataList(action: IActionProps) {
  try {
    const { searchText, filter, pageNo } = action;
    const rows = yield call(HomeService.searchDataList, searchText, filter, pageNo);
    yield put(homeActions.searchDataRequestSuccess(rows));
  } catch (e) {
    yield put(homeActions.searchDataRequestFail({ message: 'Error occured while fetching data' }));
  }
}
