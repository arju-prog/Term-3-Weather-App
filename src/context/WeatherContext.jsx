import { createContext, useState, useEffect } from 'react';

export const WeatherInfo = createContext();

export const WeatherProvider = ({ children }) => {

  const [city, setCity] = useState('');
  const [weather, setweather] = useState(null);
  const [favorites, setfavorites] = useState(loadFavorites);

  function loadFavorites() {
    const saved = localStorage.getItem('favorites');
    return saved  ? JSON.parse(saved) : [];
  }

  const add = (city) => {
    if (!favorites.includes(city)) {
      setfavorites([...favorites, city]);
    }
  };

  const del = (city) => {
    setfavorites(favorites.filter(name => name !== city));
  };


  useEffect(() => {

    localStorage.setItem('favorites', JSON.stringify(favorites));

  }, [favorites]);

  const fetchWeather = async (city) => {
       const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=e27af741abd943ab92183722250804&q=${city}&aqi=no`
      );
      const data = await res.json();
      setweather(data);
      setCity(city);
    } 
  

  return (
    <WeatherInfo.Provider value={{ weather, city, setCity, fetchWeather, favorites, add, del }}>
      {children}
    </WeatherInfo.Provider>
  );
};