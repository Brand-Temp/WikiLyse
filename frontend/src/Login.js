import React, { Component } from 'react';
import logo from './logo.svg';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {u:'formbox-blur', p:'formbox-blur'};

    this.handleSubmit = this.submit.bind(this);
    this.focus = this.focus;
    this.blur = this.blur;
  }

  submit(event) {
    
    event.preventDefault();
  }

  focus(box) {
    if(box === 'u')
      this.setState({u: 'formbox-focus'});
    if(box === 'p')
      this.setState({p: 'formbox-focus'})
  }

  blur(box) {
    if(box === 'u')
      this.setState({u: 'formbox-blur'});
    if(box === 'p')
      this.setState({p: 'formbox-blur'})
  }

  render() {
    return(
      <div class="content-wrapper">
        <div class="content">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" class={this.state.u} placeholder="Username" onFocus={this.focus.bind(this, 'u')} onBlur={this.blur.bind(this, 'u')}></input><br />
            <input type="password" name="password" class={this.state.p} placeholder="Password" onFocus={this.focus.bind(this, 'p')} onBlur={this.blur.bind(this, 'p')}></input><br />
            <button type="submit" class="formbutton">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;