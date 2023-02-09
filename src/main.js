// components
import { SearchBar } from "./js/components/SearchBar.js";
import { TimeDate } from "./js/components/TimeDate.js";
import { Widgets } from "./js/components/Widgets.js";
import { VidmoWidget } from "./js/components/VidmoWidget.js";
import { Video } from "./js/components/Video.js";
import { WidgetContainer } from "./js/components/WidgetContainer.js";

// scripts
import { Clock, Calendar } from "./js/cloack.js";
import { attachData } from "./js/attachData.js";
import { animate } from "./js/animation.js";

document.addEventListener("DOMContentLoaded", () => {
  Video();
  WidgetContainer();
  TimeDate();
  Calendar();
  Clock();
  Widgets();
  VidmoWidget();
  attachData();
  SearchBar();
  setTimeout(animate, 2000);
});
