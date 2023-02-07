import config from "./config";

const API_KEY = config.API_KEY;
const QUERRY = "Wrocław";
const API = `https://api.openweathermap.org/data/2.5/weather?q=${QUERRY}&appid=${API_KEY}&units=metric`;

async function getWeather() {
  let APIresponse = {};
  await fetch(API)
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.length < 0) {
        throw new Error("There's no available data for your searching");
      } else {
        const time = new Date().toLocaleString();
        APIresponse = {
          err: false,
          time: time,
          city: data.name,
          country: data.sys.country,
          temperature: Math.floor(data.main.temp),
          weather: data.weather[0].id,
          humidity: data.main.humidity,
          windSpeed: Math.floor(data.wind.speed),
          sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
      }
    })
    .catch((err) => {
      APIresponse = {
        err: true,
        message: err.message,
      };
    });

  return APIresponse;
}

export default getWeather;
