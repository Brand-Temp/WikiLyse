import React, { Component } from 'react';
import logo from './logo.svg';
import './Nav.css';

class Nav extends Component {
  render() {
    return(
      <div class="nav">
        <div class="nav-analytics">
          <div class="nav-item">Overall</div>
          <div class="nav-item">Article</div>
          <div class="nav-item">Authors</div>
        </div>
        <div class="nav-logo">
          <div class="nav-item" id="logo">WikiLyse</div>
        </div>
        <div class="nav-user">
          <div class="nav-item">Login</div>
          <div class="nav-item">Signup</div>
        </div>
      </div>
    );
  }
}

export default Nav;