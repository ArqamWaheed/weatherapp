import {
  $cityText,
  $dateDayText,
  $descriptionText,
  $feelsLikeText,
  $humidityText,
  $loadingScreen,
  $tempText,
  $todayPanelImg,
  $windSpeedText,
} from "./cacheDOM.js";
import { parse, format } from "date-fns";
import { convertTemperature } from "../core/weatherServices.js";

async function renderCityData(cityObj) {
  renderTemperature(cityObj);
  let imgsrc = await import(`../weather-icons/${cityObj.icon}.svg`);
  $todayPanelImg.src = imgsrc.default;
  $cityText.textContent = cityObj.cityName;
  $humidityText.textContent = `Humidity: ${cityObj.humidity}%`;
  $windSpeedText.textContent = `Wind: ${cityObj.windSpeed} km/h`;
  $dateDayText.textContent = `${format(cityObj.date, "do cccc")}, ${format(parse(cityObj.time, "HH:mm:ss", new Date()), "h:mm aaa")}`;
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

const loadingScreen = {
  showLoadingScreen() {
    $loadingScreen.style.opacity = "0.9";
    $loadingScreen.style.visibility = "visible";
  },
  hideLoadingScreen() {
    $loadingScreen.style.opacity = "0";
    $loadingScreen.style.visibility = "hidden";
  },
};

export { renderCityData, renderTemperature, loadingScreen };
