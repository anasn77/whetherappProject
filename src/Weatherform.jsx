function WeatherForm({ city, setCity, getWeather }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Find Weather</button>
    </div>
  );
}

export default WeatherForm;
