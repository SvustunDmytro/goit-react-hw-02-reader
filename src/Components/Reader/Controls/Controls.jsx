import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ handleChangeInc, handleChangeDec, index, length }) => (
  <section className={styles.controls}>
    <button
      type="button"
      className={`${styles.button} ${
        index <= 0 ? styles.button__disabled : styles.button
      }`}
      onClick={handleChangeDec}
    >
      Назад
    </button>
    <button
      type="button"
      className={`${styles.button} ${
        index >= length - 1 ? styles.button__disabled : styles.button
      }`}
      onClick={handleChangeInc}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  handleChangeInc: PropTypes.func.isRequired,
  handleChangeDec: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

export default Controls;
