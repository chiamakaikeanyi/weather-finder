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
    humidity: 0,
    icon: '',
    pressure: 0,
    temperature: 0,
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
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            wind: data.wind.speed,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            description: data.weather[0].main,
            icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
            error: ''
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