import React, { Component } from 'react';
import logo from './logo.svg';
import './Signup.css';

class Signup extends Component {
  render() {
    return(
      <div class="content-wrapper">
        <div class="content">
          <form>
            <input type="text" class="formbox" placeholder="Username"></input><br />
            <input type="text" class="formbox" placeholder="Email"></input><br />
            <input type="text" class="formbox" placeholder="Confirm email"></input><br />
            <input type="password" class="formbox" placeholder="Password"></input><br />
            <button type="submit" class="formbutton">Signup</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;