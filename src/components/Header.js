import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = ({ title }) => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.header_container__title}>{title}</h1>
      </header>
    </section>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
