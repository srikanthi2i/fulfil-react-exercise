import { combineReducers, Reducer } from 'redux';
import { homeReducer, IHomeReducer } from './home';
export interface IActionProps {
  type: string,
  [key: string]: any
}

export interface IReduxState {
  home: IHomeReducer
}

const rootReducer = (): Reducer<IReduxState> => combineReducers({
  home: homeReducer
});

export default rootReducer;