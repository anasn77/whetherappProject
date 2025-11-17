import { useState } from "react";
import "./App.css";
import WeatherForm from "./Weatherform";
import WeatherDisplay from "./WeatherDisplay";
import ForecastDisplay from "./ForecastDisplay";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const API_KEY = "904cbe951d0e88d35e49e99177ed0a6d";

  const getWeather = async () => {
    if (!city) return;

    // Fetch current weather
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const weatherData = await weatherResponse.json();

    if (weatherData.cod === 200) {
      setWeather(weatherData);
    } else {
      alert("City not found!");
      setWeather(null);
      setForecast(null);
      return;
    }

    // Fetch 24-hour forecast (3-hour intervals)
    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    const forecastData = await forecastResponse.json();

    if (forecastData.cod === "200") {
      setForecast(forecastData.list.slice(0, 8)); // next 24h (8x3h)
    }
  };

  return (
    <div className="app-container">
      <WeatherForm city={city} setCity={setCity} getWeather={getWeather} />
      <WeatherDisplay weather={weather} />
      <ForecastDisplay forecast={forecast} />
    </div>
  );
}

export default App;
