import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './Logo.module.scss';

class App extends Component {
  render() {
    return (
      <div>
        <div className={styles.backgroundLayer1} />
        <div className={styles.backgroundLayer2} />
        <div className={styles.backgroundLayer3} />
        <div className={styles.container}>
          <img src={logo} alt="Exist Infinite" />
        </div>
      </div>
    );
  }
}

export default App;
