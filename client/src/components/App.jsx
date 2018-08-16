import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap';
import "../styles/index.scss";
import LandingPage from "./LandingPage";
import GamePage from "./GamePage";


import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/play/:id" component={GamePage} />
        <Route exact path="/play/:id/questions/:qId" component={GamePage} />
      </Switch>
  </Router>
);

export default App;
