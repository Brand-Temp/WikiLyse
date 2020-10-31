import React, { Component } from 'react';
import logo from './logo.svg';
import './Login.css';

class Login extends Component {
  render() {
    // Get Session info from backend
    // if logged in:
      // logout
    // else
      // redirect
    this.props.history.push("/index");
    return;
  }
}

export default Login;