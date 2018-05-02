import React, { Component } from 'react';
import logo from './logo.svg';

//components
import Emoji from './Emoji';

//modules
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.hello}>
        <h1>hello</h1>
      </div>
    );
  }
}

export default App;
