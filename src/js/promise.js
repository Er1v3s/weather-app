import { getWeather } from "./requestAPI.js";
import { attachData } from "./attachData.js";
import { Video } from "./components/Video.js";
import { Widgets } from "./components/Widgets.js";
import { TimeDate } from "./components/TimeDate.js";
import { VidmoWidget } from "./components/VidmoWidget";
import { animate } from "./animation.js";
import { Clock, Calendar } from "./cloack.js";

let QUERRY = "Warszawa";
let APIresponse = getWeather(QUERRY);

let fetchingData = new Promise((resolve, reject) => {
  resolve(APIresponse);
  reject(
    new Error(
      "Something went wrong, check your entered data and try one more time "
    )
  );
});

window.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("#search");
  searchInput.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      QUERRY = e.target.value;
      APIresponse = getWeather(QUERRY);
      fetchingData = new Promise((resolve, reject) => {
        resolve(APIresponse);
        reject(
          new Error(
            "Something went wrong, check your entered data and try one more time "
          )
        );
      });

      if (document.querySelector(".widget") !== null) {
        const widgets = document.querySelectorAll(".widget");
        widgets.forEach((widget) => {
          widget.remove();
        });
      }

      Video();
      TimeDate();
      Calendar();
      Clock();
      Widgets();
      VidmoWidget();
      attachData();
      setTimeout(animate, 2000);
    }
  });
});

export { fetchingData };
