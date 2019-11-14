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

  handleClick = ({ target }) => {
    const { name } = target;
    if (name === 'increment') {
      this.setState(state => ({
        index: state.index + 1,
      }));
    } else if (name === 'decrement') {
      this.setState(state => ({
        index: state.index - 1,
      }));
    }
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
        <Publication
          id={items[index].id}
          text={items[index].text}
          title={items[index].title}
        />
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
