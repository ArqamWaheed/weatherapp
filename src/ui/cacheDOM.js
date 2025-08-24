const $cityTextInput = document.querySelector(".searchCityDiv input");
const $submitCityBtn = document.querySelector(".searchCityDiv button");
const $displayPanelBody = document.querySelector(".weatherContentDiv");
const $cityText = $displayPanelBody.querySelector("#City");
const $tempText = $displayPanelBody.querySelector("#temperature");
const $feelsLikeText = $displayPanelBody.querySelector(".tempDiv div p");
const $humidityText = $displayPanelBody.querySelector(
  ".tempDiv div p:nth-child(2)",
);
const $windSpeedText = $displayPanelBody.querySelector(
  ".tempDiv div p:nth-child(3)",
);
const $dateDayText = $displayPanelBody.querySelector(".dayInfo p");
const $descriptionText = $displayPanelBody.querySelector(
  ".dayInfo p:nth-child(3)",
);
const $celciusBtn = $displayPanelBody.querySelector(".tempCelciusText");
const $fahreinheitBtn = $displayPanelBody.querySelector(".tempFahrenheitText");
const $loadingScreen = document.querySelector("#loadingScreen");
const $todayPanelImg = $displayPanelBody.querySelector(".todayPanelImg");

export {
  $displayPanelBody,
  $cityTextInput,
  $submitCityBtn,
  $cityText,
  $tempText,
  $feelsLikeText,
  $humidityText,
  $windSpeedText,
  $dateDayText,
  $descriptionText,
  $celciusBtn,
  $fahreinheitBtn,
  $loadingScreen,
  $todayPanelImg,
};
