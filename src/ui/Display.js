import {
  $cityText,
  $dateDayText,
  $descriptionText,
  $feelsLikeText,
  $humidityText,
  $tempText,
  $windSpeedText,
} from "./cacheDOM.js";

async function renderCityData(cityObj) {
  $cityText.textContent = cityObj.cityName;
  $tempText.textContent = cityObj.temperature;
  $feelsLikeText.textContent = `Feels like: ${cityObj.feelsLike}°`;
  $humidityText.textContent = `Humidity: ${cityObj.humidity}%`;
  $windSpeedText.textContent = `Wind: ${cityObj.windSpeed} km/h`;
  $dateDayText.textContent = `${cityObj.date} on ${cityObj.time}`;
  $descriptionText.textContent = cityObj.description;
}

export { renderCityData };
