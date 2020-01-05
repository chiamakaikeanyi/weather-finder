import React from 'react';
import PropTypes from 'prop-types';
import { Wind, Pressure, Humidity } from './Icon';
import styles from './Weather.module.css';


const Weather = ({
  weatherStat: {
    city,
    country,
    icon,
    temperature,
    wind,
    humidity,
    pressure,
    description,
    error
  }
}) => {
  if (error) {
    return (
      <p> <span className="weather__error">{error}</span></p>
    );
  }

  const weatherInfo = [
    {
      color: '#CB5170',
      icon: <Wind />,
      value: `${wind} km/h`,
      label: 'Wind'
    },
    {
      color: '#AC5277',
      icon: <Humidity />,
      value: `${humidity} %`,
      label: 'Humidity'
    },
    {
      color: '#AC5277',
      icon: <Pressure />,
      value: `${pressure} Pa`,
      label: 'Air Pressure'
    }
  ];

  return (
    <div className={styles.weather__wrapper}>
      <section className={styles.weather_info__wrapper}>
        <div className={styles.weather__info}>
          {temperature &&
            (<p className={styles.weather__temperature}>{temperature}<sup className={styles.weather__degree}> o</sup></p>
            )}
          {description &&
            (<p className={styles.weather__description}>{description}</p>
            )}
          {city && country &&
            (<p className={styles.weather__value}>{city} {country}</p>
            )}
          <p>{new Date().toLocaleDateString('LA-NG', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        {icon &&
          (
            <img alt='weather icon'
              className={styles.weather__image}
              src={icon} />
          )}
      </section>
      <section className={styles.weather_card__wrapper}>
        {
          wind &&
          humidity &&
          pressure &&
          weatherInfo &&
          weatherInfo.map(info => (
            <div className={styles.weather_card}
              key={info.label}>
              <p className={styles.weather_icon}>
                {info.icon}
              </p>
              <p className={styles.weather_value}>{info.value}</p>
              <p className={styles.weather_label}>{info.label}</p>
            </div>
          ))
        }

      </section>
    </div>
  );
};

Weather.propTypes = {
  weatherStat: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    icon: PropTypes.node,
    temperature: PropTypes.string,
    wind: PropTypes.string,
    humidity: PropTypes.string,
    pressure: PropTypes.string,
    description: PropTypes.string,
    error: PropTypes.string,
  }).isRequired
};

export default Weather;