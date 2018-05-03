import React, { Component } from 'react';
import 'normalize.css';
import Logo from './components/Logo/Logo';
import Posts from './components/Posts/Posts';

class App extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Posts />
      </div>
    );
  }
}

export default App;
