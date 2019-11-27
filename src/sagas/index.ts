import { takeLatest } from 'redux-saga/effects';
import * as HOMETYPES from '../globals/action-types/home';
import * as homeSaga from './home';

export function* rootSaga() {
  yield takeLatest(HOMETYPES.FETCH_DATA_LIST_REQUEST, homeSaga.getDataList);
  yield takeLatest(HOMETYPES.SEARCH_DATA_LIST_REQUEST, homeSaga.searchDataList);
}
