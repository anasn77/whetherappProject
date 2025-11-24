import getIconById from "./utils/icons";

function WeatherDisplay({ weather }) {
  if (!weather) return null;

  return (
    <div className="weather-card">
      <img
        src={getIconById(weather.weather[0].id)}
        alt={weather.weather[0].description}
        className="weather-icon"
      />
      <p className="weather-desc">{weather.weather[0].description}</p>
      <div className="weather-stats">
        <p className="temp-range">
          Temperature {Math.round(weather.main.temp_min)}° to{" "}
          {Math.round(weather.main.temp_max)}°C
        </p>
        <p>Humidity {weather.main.humidity}%</p>
        <p>Pressure {weather.main.pressure}</p>
      </div>
    </div>
  );
}

export default WeatherDisplay;
