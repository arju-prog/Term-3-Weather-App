import React, { useContext } from "react";
import { WeatherInfo } from "../context/WeatherContext";

const CurrentWeather = () => {
  const { weather, add } = useContext(WeatherInfo);

  if (!weather || !weather.current || !weather.location) {
    return (
      <div className="p-6 bg-white rounded-xl shadow text-gray-600 text-center">
        🌤️ Weather will be displayed here... 
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md text-center space-y-4 text-blue-900">
      <h2 className="text-2xl font-bold">
        {weather.location.name}, {weather.location.country}
      </h2>

      <p className="text-lg">{weather.current.condition.text}</p>

      <img
        src={`https:${weather.current.condition.icon}`}
        alt="weather icon"
        className="mx-auto w-20 h-20"
      />

      <div className="text-base space-y-1">
        <p>🌡 Temp: <span className="font-semibold">{weather.current.temp_c}°C</span></p>
        <p>💧 Humidity: <span className="font-semibold">{weather.current.humidity}%</span></p>
 
      </div>

      <button
        onClick={() => add(weather.location.name)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
      >
         Add to favorites ♥️
      </button>
    </div>
  );
};

export default CurrentWeather;