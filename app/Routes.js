import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import MainContainer from './containers/MainContainer';

export default () => (
  <App>
    <Switch>
      <Route path={routes.MAIN} component={MainContainer} />
    </Switch>
  </App>
);
