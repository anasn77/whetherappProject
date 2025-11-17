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

function ForecastDisplay({ forecast }) {
  if (!forecast) return null;

  return (
    <div className="forecast-card">
      <div className="forecast-list">
        {forecast.map((hour, index) => (
          <div key={index} className="forecast-item">
            <p>{new Date(hour.dt * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
            <img
              src={getIcon(hour.weather[0].main)}
              alt={hour.weather[0].description}
            />
            <p>{Math.round(hour.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForecastDisplay;
