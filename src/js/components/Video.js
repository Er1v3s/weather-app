import { fetchingData } from "../promise.js";

const Video = () => {
  const windowX = window.innerWidth;
  let size;

  if (windowX < 1024) {
    size = 640;
  } else {
    size = 1920;
  }

  const video = document.querySelector("video");

  fetchingData
    .then((data) => {
      let weather = "";
      if (data.err === false) {
        if (data.weather >= 200 && data.weather < 300) {
          weather = "thunder";
        } else if (data.weather >= 300 && data.weather < 600) {
          weather = "rain";
        } else if (data.weather >= 600 && data.weather < 700) {
          weather = "snowy";
        } else if (
          (data.weather >= 700 && data.weather < 800) ||
          (data.weather > 800 && data.weather < 900)
        ) {
          weather = "cloudy";
        } else if (data.weather === 800) {
          weather = "sunny";
        }
      } else {
        weather = "sunny";
        throw new Error(data.message);
      }
      video.setAttribute("src", `${weather}-${size}.mp4`);
    })
    .catch((err) => {
      console.error(
        err.message +
          " | Something went wrong trying displaying background video, check your entered data and try one more time"
      );
    });
};

export { Video };
