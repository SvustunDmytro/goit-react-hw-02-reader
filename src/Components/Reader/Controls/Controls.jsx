import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ handleChangeInc, handleChangeDec, index, length }) => (
  <section className={styles.controls}>
    <button
      type="button"
      className={
        index === 0
          ? `${styles.button__disabled} && ${styles.button}`
          : `${styles.button} && ${styles.button__active}`
      }
      onClick={handleChangeDec}
    >
      Назад
    </button>
    <button
      type="button"
      className={
        index === length - 1
          ? `${styles.button__disabled} && ${styles.button}`
          : `${styles.button} && ${styles.button__active}`
      }
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
