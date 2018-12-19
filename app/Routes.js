import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import Content from './containers/Content';

export default () => (
  <App>
    <Switch>
      <Route path={routes.MAIN} component={Content} />
    </Switch>
  </App>
);
