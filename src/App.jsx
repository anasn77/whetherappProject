import { useState, useEffect } from "react";
import "./App.css";
import WeatherForm from "./Weatherform";
import WeatherDisplay from "./WeatherDisplay";
import ForecastDisplay from "./ForecastDisplay";

function App() {
  const [city, setCity] = useState("Tripoli");
    // Fetch Tripoli weather on first load
    useEffect(() => {
      getWeather();
    }, []);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const API_KEY = "904cbe951d0e88d35e49e99177ed0a6d";

  const getWeather = async () => {
    if (!city) 
      return;

    // Fetch current weather
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const weatherData = await weatherResponse.json();

    if (weatherData.cod === 200) {
      setWeather(weatherData);
    } 
    else {
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

  // Choose a background CSS class based on the main weather description
  const getBackgroundClass = (weatherObj) => {
    if (!weatherObj || !weatherObj.weather || !weatherObj.weather[0]) return "bg-default";
    const main = (weatherObj.weather[0].main || "").toLowerCase();
    if (main === "clear") return "bg-clear";
    if (main === "clouds") return "bg-clouds";
    if (main === "rain" || main === "drizzle") return "bg-rain";
    if (main === "snow") return "bg-snow";
    if (main === "fog" || main === "mist" || main === "haze") return "bg-fog";
    if (main === "thunderstorm") return "bg-thunderstorm";
    return "bg-default";
  };

  return (
    <div className={`app-container ${getBackgroundClass(weather)}`}>
      <WeatherForm city={city} setCity={setCity} getWeather={getWeather} />
      <WeatherDisplay weather={weather} />
      <ForecastDisplay forecast={forecast} />
    </div>
  );
}

export default App;
