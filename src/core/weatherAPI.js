const API_key = "KG6VNQ6N9DLV5J5HGB4E4WAKX";

async function getWeatherData(cityName) {
  try {
    let response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}/?key=${API_key}`,
      { mode: "cors" },
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    return data;
  } catch (err) {
    console.log("Failed to fetch weather!", err);
    return null;
  }
}

let cityData = await getWeatherData("Islamabad");
console.log(cityData);
