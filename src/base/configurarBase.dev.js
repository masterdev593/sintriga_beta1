import axios from 'axios';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logg from 'redux-logger';
import rootReducer from './reductores';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const configurarBase = preloadedState => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:5500/api'
  });

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middleware = [
    thunk.withExtraArgument(axiosInstance),
    routerMiddleware(history),
    logg
  ];
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware))
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reductores', () => {
      store.replaceReducer(rootReducer);
    });
  }
  return store;
};

export default configurarBase;