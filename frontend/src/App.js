import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import MainContent from './MainContent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <MainContent />
      </div>
    );
  }
}

export default App;
