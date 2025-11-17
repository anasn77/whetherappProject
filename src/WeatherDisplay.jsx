function getIcon(weatherMain) {
  const icons = {
    Clear: "/images/weather-icons/clear.svg",
    Clouds: "/images/weather-icons/cloudy.svg",
    Drizzle: "/images/weather-icons/drizzle.svg",
    Fog: "/images/weather-icons/fog.svg",
    Mist: "/images/weather-icons/fog.svg",
    Haze: "/images/weather-icons/fog.svg",
    Snow: "/images/weather-icons/snow.svg",
    Rain: "/images/weather-icons/rain.svg",
    Thunderstorm: "/images/weather-icons/storm.svg",
    "Partly Cloudy": "/images/weather-icons/partlycloudy.svg",
    "Mostly Cloudy": "/images/weather-icons/mostlycloudy.svg",
    Unknown: "/images/weather-icons/unknown.svg  ",
  };

  return icons[weatherMain] || icons.Unknown;
}

function WeatherDisplay({ weather }) {
  if (!weather) return null;

  return (
    <div className="weather-card">
      <img
        src={getIcon(weather.weather[0].main)}
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
