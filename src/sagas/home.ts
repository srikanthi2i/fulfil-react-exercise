import { put, call } from 'redux-saga/effects';
import * as homeActions  from '../actions/home';
import HomeService from '../services/home';
import { IActionProps } from '../reducers';

export function* getDataList(action: IActionProps) {
  try {
    const rows = yield call(HomeService.getData);
    console.log('action', action)
    action.cb(rows);
    yield put(homeActions.fetchDataRequestSuccess(rows));
  } catch (e) {
    yield put(homeActions.fetchDataRequestFail({ message: 'Error occured while fetching data' }));
  }
}
