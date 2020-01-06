import React from 'react';
import PropTypes from 'prop-types';
import { Wind, Pressure, Humidity } from './Icon';
import styles from './Weather.module.css';


const Weather = ({
  weatherStat: {
    city,
    country,
    description,
    error,
    humidity,
    icon,
    pressure,
    temperature,
    wind,
  }
}) => {
  if (error) {
    return (
      <p> <span className="weather__error">{error}</span></p>
    );
  }

  const weatherInfo = [
    {
      icon: <Wind />,
      value: `${wind} km/h`,
      label: 'Wind'
    },
    {
      icon: <Humidity />,
      value: `${humidity} %`,
      label: 'Humidity'
    },
    {
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
    description: PropTypes.string,
    error: PropTypes.string,
    humidity: PropTypes.number,
    icon: PropTypes.string,
    pressure: PropTypes.number,
    temperature: PropTypes.number,
    wind: PropTypes.number,
  }).isRequired
};

export default Weather;