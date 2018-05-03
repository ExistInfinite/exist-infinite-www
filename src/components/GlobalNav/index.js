import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GlobalNav.module.scss';

const Component = () => (
  <nav className={styles.GlobalNav}>
    <Link to='/'>Home</Link>
  </nav>
);

export default Component;
