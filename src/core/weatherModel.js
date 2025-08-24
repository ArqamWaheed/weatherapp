import getWeatherData from "./weatherAPI.js";
import { convertTemperature } from "./weatherServices.js";

async function cityWeatherData(cityName) {
  const data = await getWeatherData(cityName);
  if (data) {
    console.log(data);
    return {
      cityName: cityName.charAt(0).toUpperCase() + cityName.slice(1), // Capitalizing First Letter
      time: data.currentConditions.datetime,
      date: data.days[0].datetime,
      temperature: convertTemperature.FtoC(data.currentConditions.temp),
      humidity: data.currentConditions.humidity,
      feelsLike: convertTemperature.FtoC(data.currentConditions.feelslike),
      windSpeed: data.currentConditions.windspeed,
      icon: data.currentConditions.icon,
      description: data.currentConditions.conditions,
      currentState: "C",
    };
  } else {
    alert("There's an error, are you sure you entered a valid city name?");
    return null;
  }
}

const currentCity = {
  cityObj: null,
};

export { cityWeatherData, currentCity };
