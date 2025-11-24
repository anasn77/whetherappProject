import getIconById from "./utils/icons";

function ForecastDisplay({ forecast }) {
  if (!forecast) return null;

  return (
    <div className="forecast-card">
      <div className="forecast-list">
        {forecast.map((hour, index) => (
          <div key={index} className="forecast-item">
            <p>{new Date(hour.dt * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
            <img
              src={getIconById(hour.weather[0].id)}
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
