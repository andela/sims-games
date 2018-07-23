import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap';
import "../styles/index.scss";
import LandingPage from "./LandingPage";

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
  </Router>
);

export default App;
