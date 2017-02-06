import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
const store = createStore(reducers, {}, compose(
  applyMiddleware(),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>, document.getElementById('main'));
