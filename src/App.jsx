import React from 'react';
import { WeatherProvider } from './context/WeatherContext';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import FavoriteCities from './components/FavoriteCities';
import './App.css';

const App = () => {
  return (
    <WeatherProvider>
      <div className="min-h-screen bg-gradient-to-br from-red-400 to-yellow-300 p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-shadow-lg">Weather Dashboard</h1>
        <SearchBar />

        <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-between gap-73 mt-8">
          <div className="w-full lg:w-1/2">
            <FavoriteCities />
          </div>

          <div className="w-full lg:w-1/2">
            <CurrentWeather />
          </div>
        </div>
      </div>
    </WeatherProvider>
  );
};

export default App;