/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';

export default class Reader extends Component {
  state = {
    index: 0,
  };

  handleClick = ({ target: { name } }) => {
    this.setState(state => ({
      index: name === 'increment' ? state.index + 1 : state.index - 1,
    }));
  };

  render() {
    const { items } = this.props;
    const { index } = this.state;
    return (
      <div className={styles.reader}>
        <Controls
          handleClick={this.handleClick}
          index={index}
          length={items.length}
        />
        <Counter page={index} length={items.length} />
        <Publication item={items[index]} />
      </div>
    );
  }
}

Reader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
