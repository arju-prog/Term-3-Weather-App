import React, { useContext, useState } from 'react';
import { WeatherInfo } from '../context/WeatherContext';

const SearchBar = () => {
  const { fetchWeather } = useContext(WeatherInfo);
  const [city, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather( city);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"  className='w-60 ' placeholder="Enter city, state, or country"   value={ city}  onChange={(e) => setInput(e.target.value)}
      />
      <button className='rounded-full' type="submit">Search</button>
    </form>
  );
};

export default SearchBar;