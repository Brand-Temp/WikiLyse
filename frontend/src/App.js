import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import LandingPage from './LandingPage';
import Placeholder from './Placeholder';
import Login from './Login';
import Signup from './Signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/overall" component={Placeholder} />
            <Route path="/article" component={Placeholder} />
            <Route path="/authors" component={Placeholder} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/logout" component={Placeholder} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
