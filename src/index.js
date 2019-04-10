import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { IndexPage } from './pages/IndexPage/IndexPage';
import './globals.scss';
import ProjectPage from './pages/ProjectPage/ProjectPage';

ReactDOM.render(
  <Router basename="/">
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home"/>}/>
      <Route exact path="/:page" component={IndexPage}/>
      <Route exact path="/portfolio/:project" component={ProjectPage} />
    </Switch>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
