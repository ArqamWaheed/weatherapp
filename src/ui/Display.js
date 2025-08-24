import {
  $cityText,
  $dateDayText,
  $descriptionText,
  $feelsLikeText,
  $humidityText,
  $tempText,
  $windSpeedText,
} from "./cacheDOM.js";

import { convertTemperature } from "../core/weatherServices.js";

async function renderCityData(cityObj) {
  renderTemperature(cityObj);
  $cityText.textContent = cityObj.cityName;
  $humidityText.textContent = `Humidity: ${cityObj.humidity}%`;
  $windSpeedText.textContent = `Wind: ${cityObj.windSpeed} km/h`;
  $dateDayText.textContent = `${cityObj.date} on ${cityObj.time}`;
  $descriptionText.textContent = cityObj.description;
}

function renderTemperature(cityObj) {
  if (cityObj.currentState === "C") {
    $tempText.textContent = cityObj.temperature;
    $feelsLikeText.textContent = `Feels like: ${cityObj.feelsLike}°`;
  } else {
    $tempText.textContent = convertTemperature.CtoF(cityObj.temperature);
    $feelsLikeText.textContent = `Feels like: ${convertTemperature.CtoF(cityObj.feelsLike)}°`;
  }
}

export { renderCityData, renderTemperature };
