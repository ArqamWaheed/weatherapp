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

async function submitEventCallHandler() {
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
}

$submitCityBtn.addEventListener("click", function () {
  submitEventCallHandler();
});
$cityTextInput.addEventListener("keypress", function (event) {
  if (event.keyCode === 13 || event.key === "Enter") {
    event.preventDefault();
    submitEventCallHandler();
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
