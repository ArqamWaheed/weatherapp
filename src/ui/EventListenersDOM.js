import { cityWeatherData, currentCity } from "../core/weatherModel.js";
import { loadingScreen, renderCityData, renderTemperature } from "./Display.js";
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
    loadingScreen.showLoadingScreen();
    $displayPanelBody.style.display = "none";
    const cityName = $cityTextInput.value;
    currentCity.cityObj = await cityWeatherData(cityName);
    if (currentCity.cityObj) {
      await renderCityData(currentCity.cityObj);
      loadingScreen.hideLoadingScreen();
      $displayPanelBody.style.display = "block";
    } else {
      loadingScreen.hideLoadingScreen();
    }
  } else {
    alert("Enter a city name!");
  }
});

$fahreinheitBtn.addEventListener("click", function () {
  if (currentCity.cityObj.currentState === "C") {
    currentCity.cityObj.currentState = "F";
    renderTemperature(currentCity.cityObj);
    $celciusBtn.style.color = "rgb(158, 158, 158)";
    $fahreinheitBtn.style.color = "black";
  }
});

$celciusBtn.addEventListener("click", function () {
  if (currentCity.cityObj.currentState === "F") {
    currentCity.cityObj.currentState = "C";
    renderTemperature(currentCity.cityObj);
    $celciusBtn.style.color = "black";
    $fahreinheitBtn.style.color = "rgb(158, 158, 158)";
  }
});
