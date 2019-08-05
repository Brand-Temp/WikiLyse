import React, { Component } from 'react';
import logo from './logo.svg';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.submit.bind(this);
  }

  submit(event) {
    alert('Submission!');
    event.preventDefault();
  }

  render() {
    return(
      <div class="content-wrapper">
        <div class="content">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" class="formbox" placeholder="Username"></input><br />
            <input type="password" name="password" class="formbox" placeholder="Password"></input><br />
            <button type="submit" class="formbutton">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;