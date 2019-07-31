import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './Nav.css';

class Nav extends Component {
  render() {
    return(
      <div class="nav">
        <div class="nav-analytics">
          <Link to="/overall" class="nav-item">Overall</Link>
          <Link to="/article" class="nav-item">Article</Link>
          <Link to="/authors" class="nav-item">Authors</Link>
        </div>
        <div class="nav-logo">
          <Link to="/" class="nav-item" id="logo">WikiLyse</Link>
        </div>
        <div class="nav-user">
          <Link to="/login" class="nav-item">Login</Link>
          <Link to="/signup" class="nav-item">Signup</Link>
          <Link to="/logout" class="nav-item">Logout</Link>
        </div>
      </div>
    );
  }
}

export default Nav;