import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
// import { createStore, applyMiddleware } from 'redux';
// import ReduxPromise from 'redux-thunk';
// import reducers from './reducers';
import store, { history } from './store';

import App from './App.sintriga';
import registerServiceWorker from './registerServiceWorker';

console.log('====================================');
console.log('> BETA.ini');
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('sintriga')
);
registerServiceWorker();
console.log('> BETA.fin');
console.log('====================================');
