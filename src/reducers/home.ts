import * as HOMETYPES from '../globals/action-types/home';
import { IActionProps } from './index';

export type TColumn = {
  id: keyof TRow;
  label: string;
  numeric: boolean;
  width?: string | undefined;
}

export type TRow = {
  id: number;
  albumId: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

export interface IHomeReducer {
  loading: boolean;
  columns: TColumn[];
  rows: TRow[];
}

const initialState: IHomeReducer = {
  loading: false,
  columns: [{
    id: 'id',
    label: 'Id',
    numeric: true,
    width: '50px'
  }, {
    id: 'albumId',
    label: 'albumId',
    numeric: true,
    width: '100px'
  }, {
    id: 'thumbnailUrl',
    label: '',
    numeric: false,
    width: '20px'
  }, {
    id: 'title',
    label: 'Title',
    numeric: false
  }, {
    id: 'url',
    label: 'URL',
    numeric: false
  }],
  rows: []
};

export const homeReducer = (state: IHomeReducer = initialState, action: IActionProps): IHomeReducer => {
  const { rows } = action;
  switch (action.type) {
    case HOMETYPES.FETCH_DATA_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case HOMETYPES.FETCH_DATA_LIST_SUCCESS:
      return {
        ...state,
        rows: [...rows],
        loading: false
      };
    case HOMETYPES.FETCH_DATA_LIST_FAILURE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};