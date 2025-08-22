const API_key = "KG6VNQ6N9DLV5J5HGB4E4WAKX";

function getWeatherData(cityName) {
  return fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}/?key=${API_key}`,
    {
      mode: "cors",
    },
  )
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Sybau");
      }
      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
      throw new Error(error);
    });
}

getWeatherData("islamabad")
  .then((data) => console.log(data))
  .catch((error) => {
    console.log("Found an error", error);
  });
