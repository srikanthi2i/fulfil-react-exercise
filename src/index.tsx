import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import { rootSaga } from './sagas';
import { setupInterceptors } from './globals/core/interceptor';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.scss';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create the store
const store = createStore(
  rootReducer(),
  applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(rootSaga);
setupInterceptors(store);

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
