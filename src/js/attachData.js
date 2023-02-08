import { fetchingData } from "./promise.js";

const attachData = () => {
  const city = document.getElementById("city");
  const country = document.getElementById("country");
  const temperature = document.getElementById("temperature");
  const humidity = document.getElementById("humidity");
  const windSpeed = document.getElementById("windSpeed");
  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");

  fetchingData
    .then((data) => {
      city.innerHTML = data.city;
      country.innerHTML = data.country;
      temperature.innerHTML = `
        <i class="fa-solid fa-temperature-three-quarters"></i>
        &nbsp;${data.temperature}&#8451;`;
      humidity.innerHTML = `
        <i class="fa-solid fa-droplet"></i>
        <span>&nbsp;${data.humidity}&#37;</span>
        `;
      windSpeed.innerHTML = `
        <i class="fa-solid fa-wind"></i>
        <span>&nbsp;${data.windSpeed}<small>m/s</small></span>
        `;
      sunrise.innerHTML = `
        <i class="fa-solid fa-sun"></i>
        <span>&nbsp;${data.sunrise}</span>
        `;
      sunset.innerHTML = `
        <i class="fa-solid fa-moon"></i>
        <span>&nbsp;${data.sunset}</span>
        `;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export { attachData };
