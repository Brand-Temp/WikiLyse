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
        emailconf: '',
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
    if (this.state['emailValid'] && this.state['passwordValid'] && this.state['usernameValid']) {
      this.setState({errors:{username: ''}});
      // ENV variable in production
      axios.post(process.env.REACT_APP_BACKEND_ENDPOINT+'/signup', {
        username: this.state['username'],
        hash: this.state['password'],
        email: this.state['email']
      })
      .then((response) => {
        if(response.data.error === 0) {
          alert('SUCCESS!');
        } else {
          alert(response.body.field + ' was invalid.');
        }
      })
      .catch((error) => {
        this.setState({errors:{username: 'There was a problem with the request, try again later.'}});
      });
    }
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
        axios.get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/signup/ucheck/${value}`)
        .then((response) => {
          if (response.data.used == 1) {
            this.setState({errors:{username:'This username has already been registered.'}});
            this.setState({usernameValid: false});
          } else {
            this.setState({errors:{username:''}});
            this.setState({usernameValid: true});
          }
        })
        .catch((error) => {
          this.setState({errors:{username:'There was an error processing this request, please try again later.'}});
        })
        .finally(()=>{
          this.setState({username:value});
        });
      }
    } else if (name === 'email') {
      const value = event.target.value;
      if (value.length > 0) {
        axios.get(`http://localhost:3001/signup/echeck/${value}`)
        .then((response) => {
          if(response.data.used == 1) {
            this.setState({errors:{email: 'This is has already been registered.'}});
            this.setState({emailValid: false});
          } else {
            this.setState({errors:{email: ''}});
            this.setState({emailValid: true});
          }
        })
        .catch((error) => {
          this.setState({errors:{username:'There was an error processing this request, please try again later.'}});
        })
        .finally(() => {
          this.setState({email:value});
        });
      }
    } else if (name === 'emailconf') {
      const value = event.target.value;
      if (value.length > 0) {
        if (value !== this.state['email']) {
          this.setState({errors:{emailconf: "These emails don't match"}})
          this.setState({emailValid: false});
        } else {
          this.setState({errors:{emailconf: ""}})
          this.setState({emailValid: true});
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
            <label for="username">
              {this.state.errors.username} <br />
            </label>
            <input name="username" type="text" class="formbox" placeholder="Username" onChange={this.change}></input><br />
            <label for="email">
              {this.state.errors.email} <br />
            </label>
            <input name="email" type="text" class="formbox" placeholder="Email" onChange={this.change}></input><br />
            <label for="emailconf">
              {this.state.errors.emailconf} <br />
            </label>
            <input name="emailconf"type="text" class="formbox" placeholder="Confirm email" onChange={this.change}></input><br />
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