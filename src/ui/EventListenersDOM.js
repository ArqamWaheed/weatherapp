import getWeatherData from "../core/weatherAPI.js";
import { cityWeatherData } from "../core/weatherModel.js";
import { validateCityTextInput } from "./Validation.js";
import { $cityTextInput, $submitCityBtn } from "./cacheDOM.js";

let currentCity = null;

$submitCityBtn.addEventListener("click", async function () {
  if (validateCityTextInput()) {
    const cityName = $cityTextInput.value;
    currentCity = await cityWeatherData(cityName);
  } else {
    alert("Enter a city name!");
  }
});
