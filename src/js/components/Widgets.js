const widgetsArray = [
  "temperature",
  "humidity",
  "windSpeed",
  "sunrise",
  "sunset",
];

const Widgets = () => {
  const WidgetContainer = document.getElementById("widget-container");

  for (let i = 0; i < widgetsArray.length; i++) {
    const widget = document.createElement("div");

    widget.classList.add(
      "widget",
      "flex",
      "relative",
      "w-24",
      "h-24",
      "lg:w-36",
      "lg:h-36"
    );

    widget.innerHTML = `
      <div class="relative w-[100%] h-[100%] bg-white/40 backdrop-blur-sm rounded-3xl border"></div>
      <div id="${widgetsArray[i]}" class="absolute w-[100%] h-[100%] flex justify-center items-center
      text-xl font-semibold text-zinc-800 lg:text-3xl">
      </div>
      `;

    WidgetContainer.appendChild(widget);
  }
};

export { Widgets };
