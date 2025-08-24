import { cityWeatherData, currentCity } from "../core/weatherModel.js";
import { renderCityData } from "./Display.js";
import { validateCityTextInput } from "./Validation.js";
import {
  $cityTextInput,
  $displayPanelBody,
  $submitCityBtn,
} from "./cacheDOM.js";

$submitCityBtn.addEventListener("click", async function () {
  if (validateCityTextInput()) {
    $displayPanelBody.style.display = "none";
    const cityName = $cityTextInput.value;
    currentCity.cityObj = await cityWeatherData(cityName);
    if (currentCity.cityObj) {
      await renderCityData(currentCity.cityObj);
      $displayPanelBody.style.display = "block";
    }
  } else {
    alert("Enter a city name!");
  }
});
