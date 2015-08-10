import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { reduxRouteComponent, routerStateReducer } from 'redux-react-router';
import { createStore, combineReducers } from 'redux';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import * as reducers from '../shared/reducers/index';
import Routes from '../shared/components/Routes';

const combinedReducers = combineReducers({ router: routerStateReducer, ...reducers });
const store = createStore(combinedReducers, window.__DATA__);

document.addEventListener('DOMContentLoaded', () => {
  const history = new BrowserHistory();

  ReactDOM.render(
    <Router history={history}>
      <Route component={reduxRouteComponent(store)} children={Routes} />
    </Router>,
    document.getElementById('app')
  );
});
