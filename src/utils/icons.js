// Utility to map OpenWeatherMap `id` codes to local SVG icon paths
export function getIconById(id) {
  if (typeof id !== 'number') return "/images/weather-icons/unknown.svg";

  if (id < 300) return "/images/weather-icons/storm.svg";
  if (id >= 300 && id < 500) return "/images/weather-icons/drizzle.svg";
  if (id >= 500 && id < 600) return "/images/weather-icons/rain.svg";
  if (id >= 600 && id < 700) return "/images/weather-icons/snow.svg";
  if (id >= 700 && id < 800) return "/images/weather-icons/fog.svg";
  if (id === 800) return "/images/weather-icons/clear.svg";
  if (id === 801) return "/images/weather-icons/partlycloudy.svg";
  if (id > 801 && id <= 805) return "/images/weather-icons/mostlycloudy.svg";

  return "/images/weather-icons/unknown.svg";
}

export default getIconById;
