import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'components/Form';
import Header from 'components/Header';
import Weather from 'components/Weather';
import styles from 'containers/App.module.css';
import constants from 'constants.js';

const { API_KEY, endpointUrl } = constants;

function App() {

  const initialFormState = {
    city: '',
    country: '',
    description: '',
    error: '',
    feels_like: 0,
    humidity: 0,
    icon: '',
    pressure: 0,
    temperature: 0,
    temp_min: 0,
    temp_max: 0,
    wind: 0,
  };

  const [weatherStat, setWeatherStat] = useState(initialFormState);
  const [hasTriedFetched, setHasTriedFetched] = useState(false);

  const getWeather = async (event) => {
    if (event) {
      event.preventDefault();
    }

    const city = (event && event.target.elements.city.value) || 'Lagos';
    const country = (event && event.target.elements.country.value) || 'Nigeria';

    await axios
      .get(`${endpointUrl}${city},${country}&APPID=${API_KEY}&units=metric`)
      .then(response => {
        setHasTriedFetched(true);
        const data = response && response.data;

        if (city && country) {
          const resp = {
            city: data.name,
            country: data.sys.country,
            description: data.weather[0].main,
            error: '',
            feels_like: data.main.feels_like,
            humidity: data.main.humidity,
            icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
            pressure: data.main.pressure,
            temperature: data.main.temp,
            temp_min: data.main.temp_min,
            temp_max: data.main.temp_max,
            wind: data.wind.speed
          };
          setWeatherStat(resp);
        } else {
          setWeatherStat({ error: 'The fields are required' });
        }
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Unable to fetch weather data', error);
      });
  };

  useEffect(() => {
    if (!hasTriedFetched) {
      (getWeather());
    }
  }, [hasTriedFetched]);

  return (
    <main className={styles.app_container}>
      <Header
        description='Find out the temperature conditions'
        title='Weather Finder'
      />
      <section className={styles.app_content}>
        <Form getWeather={getWeather} />
        <Weather weatherStat={weatherStat} />
      </section>
    </main>
  );
}

export default App;