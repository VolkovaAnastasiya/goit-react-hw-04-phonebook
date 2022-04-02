import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

function Filter({ filter, onChange }) {
  return (
    <div className={s.filter}>
      <label className={s.label}>Find contact by name</label>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={onChange}
      ></input>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Filter;
