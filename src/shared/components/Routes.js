import React from 'react';
import { Route } from 'react-router';
import Layout from './Layout';
import App from './App';

const Routes = (
  <Route component={Layout}>
    <Route path="/" component={App}/>
  </Route>
)

export default Routes;
