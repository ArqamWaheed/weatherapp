import getWeatherData from "./weatherAPI.js";

async function cityWeatherData(cityName) {
  const data = await getWeatherData(cityName);
  if (data) {
    console.log(data);
    return {
      weather: data.currentConditions.temp,
      humidity: data.currentConditions.humidity,
      feelsLike: data.currentConditions.feelslike,
      windSpeed: data.currentConditions.windspeed,
    };
  } else {
    alert("There's an error, are you sure you entered a valid city name?");
    return null;
  }
}
