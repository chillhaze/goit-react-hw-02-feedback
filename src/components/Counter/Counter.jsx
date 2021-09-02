import React from 'react';
// import PropTypes from 'prop-types'
import css from './Counter.module.css';

export class Counter extends React.Component {
  render() {
    return (
      <div className={css.container}>
        <span className={css.countValue}>0</span>

        <div className={css.btnWrapper}>
          <button type="button" className={css.btn}>
            Увеличить на 1
          </button>
          <button type="button" className={css.btn}>
            Уменьшить на 1
          </button>
        </div>
      </div>
    );
  }
}
