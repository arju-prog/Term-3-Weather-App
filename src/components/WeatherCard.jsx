import React from 'react';

const WeatherCard = ({ city, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white rounded-2xl w-40 shadow-md hover:shadow-xl transition-shadow duration-300 p-4 text-center text-blue-800 font-semibold text-lg hover:bg-blue-50 hover:text-blue-900"
    >
      {city}
    </div>
  );
};

export default WeatherCard;