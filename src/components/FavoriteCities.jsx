import React, { useContext } from 'react';
import { WeatherInfo } from '../context/WeatherContext';
import WeatherCard from './WeatherCard';

const FavoriteCities = () => {
  const { favorites, fetchWeather , del } = useContext(WeatherInfo);

  return (
    <div>
      <h3 className="text-2xl font-bold  mb-4 text-shadow-lg " >🔎 Favorite Cities</h3>
      {favorites.map((city) => (
        < div className= "flex justify-between  p-5">
         <WeatherCard key={city} city={city} onClick={() => fetchWeather(city)} />
         <button onClick={() => del(city)} className="text-red-600 hover:text-red-800 text-2xl transition-colors duration-200 p-2 rounded-full hover:bg-red-100">
          ❌
</button>
          </div>
      ))}
          
    </div>
  );
};

export default FavoriteCities;