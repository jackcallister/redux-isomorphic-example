import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Location from 'react-router/lib/Location';
import { history } from 'react-router/lib/History';
import { Router, Route } from 'react-router';
import { reduxRouteComponent, routerStateReducer } from 'redux-react-router';
import { createStore, combineReducers } from 'redux';
import * as reducers from '../../shared/reducers/index';
import Routes from '../../shared/components/Routes';

export default (req, res, next) => {

  // Payload needed for Redux (rendering) and sending to client.
  const payload = { data: 'Hello, World' };

  const combinedReducers = combineReducers({ router: routerStateReducer, ...reducers });
  const store = createStore(combinedReducers, payload);

  const location = new Location(req.path, req.query);

  const route = React.createElement(Route, {component: reduxRouteComponent(store), children: Routes});
  const routes = React.createElement(Router, {history: history, children: route});

  Router.run(routes, location, (error, initialState, transition) => {
    const html = ReactDOMServer.renderToString(
      React.createElement(Router, {...initialState})
    );

    res.render('index', {
      html: html,
      payload: JSON.stringify(payload)
    });
  });
}
