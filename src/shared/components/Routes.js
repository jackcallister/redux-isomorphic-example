import React from 'react';
import { Route, Redirect } from 'react-router';
import Root from './Root';
import App from './App';

const Routes = (
  <Route component={App}>
    <Route path="/" component={Root} />
  </Route>
)

export default Routes;
