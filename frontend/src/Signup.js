import React, { Component } from 'react';
import logo from './logo.svg';
import './Signup.css';
import crypto from 'crypto';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state={
      username: '',
      email: '',
      password: '',
      errors: {
        username: '',
        email: '',
        password: '',
      },
      usernameValid: false,
      emailValid: false,
      passwordValid: false,
    }

    this.change = this.change.bind(this);
    this.submitHandler = this.submit.bind(this);
  }

  submit(event) {
    alert('Submission!');

    event.preventDefault();
  }

  change(event) {
    const name = event.target.name;

    if (name === 'password') {
      const valueLen = event.target.value.length;
      const hash = crypto.createHash('sha512');
      hash.write(event.target.value);
      const value = hash.digest('hex');
      this.setState({password:value});
      if(name === 'password') {
        if(valueLen < 8 && valueLen > 0) {
          this.setState({errors:{password:'Password must be at least 8 characters.'}});
          this.setState({passwordValid: false});
        } else {
          this.setState({errors:{password:''}});
          this.setState({passwordValid: true});
        }
      }
    }
    
    event.preventDefault();
  }

  render() {
    return(
      <div class="content-wrapper">
        <div class="content">
          <form onSubmit={this.submitHandler}>
              <input type="text" class="formbox" placeholder="Username"></input><br />
            <input type="text" class="formbox" placeholder="Email"></input><br />
            <input type="text" class="formbox" placeholder="Confirm email"></input><br />
            <label for="password">
              {this.state.errors.password} <br />
            </label>
            <input name="password" type="password" class="formbox" placeholder="Password" onChange={this.change}></input><br />
            <button type="submit" class="formbutton">Signup</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;