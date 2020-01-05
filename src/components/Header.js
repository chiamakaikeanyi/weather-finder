import React from 'react'
import PropTypes from 'prop-types'

import styles from './Header.module.css';

const Header = ({ title, description }) => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.header_container__title}>{title}</h1>
      </header>
      <p className={styles.header_container__description}>{description}</p>
    </section>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Header;
