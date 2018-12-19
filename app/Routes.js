import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import Main from './containers/Main';

export default () => (
  <App>
    <Switch>
      <Route path={routes.MAIN} component={Main} />
    </Switch>
  </App>
);
