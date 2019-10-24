import React, { Component } from 'react';
import logo from './logo.svg';
import './Signup.css';
import crypto from 'crypto';
import axios from 'axios';

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
    } else if (name === 'username') {
      const value = event.target.value;
      // This will need to be changed to an anv variable for prod
      if(value.length > 0) {
        axios.get(`http://localhost:3001/signup/ucheck/${value}`)
        .then((response) => {
          console.log(response);
          if (response.data.used == 1) {
            this.setState({errors:{username:'This username has already been registered.'}});
            this.setState({usernameValid: false});
          } else {
            this.setState({errors:{username:''}});
            this.setState({usernameValid: true});
          }
        })
        .catch((error) => {
          alert(error);
        });
      }
    }
    event.preventDefault();
  }

  render() {
    return(
      <div class="content-wrapper">
        <div class="content">
          <form onSubmit={this.submitHandler}>
            <label for="username">
              {this.state.errors.username} <br />
            </label>
            <input name="username" type="text" class="formbox" placeholder="Username" onChange={this.change}></input><br />
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