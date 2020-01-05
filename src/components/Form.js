import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

const Form = ({ getWeather }) => {
  return (
    <form className={styles.form_container}
      onSubmit={getWeather}>
      <input
        maxLength="30"
        minLength="2"
        name="city"
        pattern="[a-zA-Z]+"
        placeholder="City"
        required
        type="text" />
      <input
        maxLength="30"
        minLength="2"
        name="country"
        pattern="[a-zA-Z]+"
        placeholder="Country"
        required
        type="text" />
      <button type='submit'>Get Weather</button>
    </form>
  );
};

Form.propTypes = {
  getWeather: PropTypes.func.isRequired
};

export default Form;
