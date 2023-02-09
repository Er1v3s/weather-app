import { getWeather } from "./requestAPI.js";
import { attachData } from "./attachData.js";
import { Video } from "./components/Video.js";
import { Widgets } from "./components/Widgets.js";
import { TimeDate } from "./components/TimeDate.js";
import { VidmoWidget } from "./components/VidmoWidget";
import { animate } from "./animation.js";
import { Clock, Calendar } from "./cloack.js";
import { Popup } from "./components/Popup.js";

let QUERRY = "Warszawa";
let fetchingData = getWeather(QUERRY);

window.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("#search");
  searchInput.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();

      fetchingData = getWeather(
        e.target.value.trim().replace(/[^a-zA-ZąćęłńóśźżłĄĆĘŁŃÓŚŹŻŁ]/g, "")
      );

      fetchingData.then((data) => {
        if (data.err === false) {
          if (document.querySelector(".widget") !== null) {
            const widgets = document.querySelectorAll(".widget");
            widgets.forEach((widget) => {
              widget.remove();
            });
          }

          QUERRY = e.target.value;
          e.target.value = "";
          QUERRY = QUERRY.trim();
          QUERRY = QUERRY.replace(/[^a-zA-ZąćęłńóśźżłĄĆĘŁŃÓŚŹŻŁ]/g, "");

          fetchingData = getWeather(QUERRY);

          Video();
          TimeDate();
          Calendar();
          Clock();
          Widgets();
          VidmoWidget();
          attachData();
          setTimeout(animate, 2000);
        } else {
          Popup();
        }
      });
    }
  });
});

export { fetchingData };
