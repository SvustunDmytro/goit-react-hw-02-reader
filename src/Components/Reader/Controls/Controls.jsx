import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ handleClick, index, length }) => (
  <section className={styles.controls}>
    <button
      disabled={!index}
      type="button"
      name="decrement"
      className={styles.button}
      onClick={handleClick}
    >
      Назад
    </button>
    <button
      disabled={index === length - 1}
      type="button"
      name="increment"
      className={styles.button}
      onClick={handleClick}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  handleClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

export default Controls;
