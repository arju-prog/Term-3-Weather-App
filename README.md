
# 🌦️ Real-time Weather Dashboard

A sleek and responsive weather dashboard built with React that allows users to:
- Search for weather conditions by city
- View current weather details
- Add favorite cities
- Instantly fetch weather for favorite cities
- Remove cities from favorites

---

## 🚀 Features

- 🔍 **Search Functionality**: Look up any city, state, or country.
- 📍 **Current Weather Info**: Displays temperature, humidity, and conditions.
- ❤️ **Favorites List**: Save cities for quick access.
- ❌ **Remove Favorites**: Delete a city from favorites with one click.
- ⚡ **Live Updates**: Fetches real-time weather data using a weather API.

---

## 🛠️ Tech Stack

- **React** (with functional components and Hooks)
- **Context API** for global state management
- **Tailwind CSS** for fast and modern styling
- **Weather API** (like WeatherAPI or OpenWeatherMap – depending on your setup)

---

## 📁 Project Structure
src/
│
├── components/
│   ├── CurrentWeather.js       # Shows weather for the selected city
│   ├── SearchBar.js            # Input for city search
│   └── FavoriteCities.js       # Displays and manages favorite cities
│
├── context/
│   └── WeatherContext.js       # Context API for weather and favorite state
│
├── App.js                      # Main app component
└── index.js                    # Entry point
