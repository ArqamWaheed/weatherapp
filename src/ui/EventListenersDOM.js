import { cityWeatherData, currentCity } from "../core/weatherModel.js";
import { renderCityData, renderTemperature } from "./Display.js";
import { validateCityTextInput } from "./Validation.js";
import {
  $celciusBtn,
  $cityTextInput,
  $displayPanelBody,
  $fahreinheitBtn,
  $submitCityBtn,
} from "./cacheDOM.js";

$submitCityBtn.addEventListener("click", async function () {
  // call API >> Validate result >> render DOM
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

$fahreinheitBtn.addEventListener("click", function () {
  if (currentCity.cityObj.currentState === "C") {
    currentCity.cityObj.currentState = "F";
    renderTemperature(currentCity.cityObj);
  }
});

$celciusBtn.addEventListener("click", function () {
  if (currentCity.cityObj.currentState === "F") {
    currentCity.cityObj.currentState = "C";
    renderTemperature(currentCity.cityObj);
  }
});
