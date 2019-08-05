import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {nav: 'nav-item-large', logo: 'logo-large'};
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scroll.bind(this));
  }

  scroll() {
    if(window.pageYOffset > 80) {
      this.setState({nav: 'nav-item-small', logo: 'logo-small'});
    } else {
      this.setState({nav: 'nav-item-large', logo: 'logo-large'});
    }
  }

  render() {
    return(
      <div class="nav">
        <div class="nav-analytics">
          <Link to="/overall" class={this.state.nav}>Overall</Link>
          <Link to="/article" class={this.state.nav}>Article</Link>
          <Link to="/authors" class={this.state.nav}>Authors</Link>
        </div>
        <div class="nav-logo">
          <Link to="/" class={this.state.nav} id={this.state.logo}>WikiLyse</Link>
        </div>
        <div class="nav-user">
          <Link to="/login" class={this.state.nav}>Login</Link>
          <Link to="/signup" class={this.state.nav}>Signup</Link>
          <Link to="/logout" class={this.state.nav}>Logout</Link>
        </div>
      </div>
    );
  }
}

export default Nav;