import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

const Form = ({ getWeather }) => {
  return (
      <form onSubmit={getWeather} className={styles.form_container}>
        <input
          type="text"
          maxLength="30"
          minLength="2"
          pattern="[a-zA-Z]+"
          name="city"
          placeholder="City"
          required />
        <input
          type="text"
          maxLength="30"
          minLength="2"
          pattern="[a-zA-Z]+"
          name="country"
          placeholder="Country"
          required />
        <button type='submit'>Get Weather</button>
      </form>
  )
}

Form.propTypes = {
  getWeather: PropTypes.func.isRequired
}

export default Form;
