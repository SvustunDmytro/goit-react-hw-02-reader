/* eslint-disable import/extensions */
import React from 'react';
import styles from './App.module.css';
import Reader from '../Reader/Reader';
import publications from './publications.json';

const App = () => (
  <div className={styles.App}>
    <Reader items={publications} />
  </div>
);

export default App;
