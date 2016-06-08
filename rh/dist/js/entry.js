import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './hello.jsx';
import Header from './Header.jsx'

import App from './App'
import About from './About'
import Repos from './Repos'
import Repo from './Repo'
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router'
import Home from './Home'

var horizon = Horizon()
horizon.onReady(function() {
  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/repos" component={Repos}>
          <Route path="/repos/:userName/:repoName" component={Repo}/>
        </Route>
        <Route path="/about" component={About}/>
      </Route>
    </Router>
    )
    , document.getElementById('main')
  );
});
horizon.connect()
