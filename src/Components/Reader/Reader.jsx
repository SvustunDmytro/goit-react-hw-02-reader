/* eslint-disable import/extensions */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';
import Publication from './Publication/Publication.jsx';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  state = {
    index: 0,
  };

  handleChangeInc = () => {
    const { items } = this.props;
    this.setState(prevState => ({
      index:
        prevState.index >= items.length - 1
          ? prevState.index
          : prevState.index + 1,
    }));
  };

  handleChangeDec = () => {
    this.setState(prevState => ({
      index: prevState.index !== 0 ? prevState.index - 1 : prevState.index,
    }));
  };

  render() {
    const { items } = this.props;
    const { index } = this.state;
    return (
      <div className={styles.reader}>
        <Controls
          handleChangeInc={this.handleChangeInc}
          handleChangeDec={this.handleChangeDec}
          index={index}
          length={items.length}
        />
        <Counter page={index} length={items.length} />
        <Publication item={items[index]} />
      </div>
    );
  }
}
