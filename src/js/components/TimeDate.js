const TimeDate = () => {
  const WidgetContainer = document.getElementById("widget-container");

  const timeDate = document.createElement("div");
  timeDate.classList.add(
    "widget",
    "flex",
    "relative",
    "w-[100%]",
    "h-24",
    "lg:h-36"
  );

  timeDate.innerHTML = `
  <div class="relative w-[100%] h-[100%] bg-white/40 backdrop-blur-sm rounded-3xl border"></div>
    <div class="flex-wrap absolute w-[100%] h-[100%] flex justify-center
                text-2xl font-semibold text-zinc-800 text-center
                sm:items-center lg:text-5xl">
    <span id="time" class="block w-[100%] pt-3 sm:w-[50%] sm:p-0"></span>
    <span id="location" class="block w-[100%] pb-3 sm:w-[50%] sm:p-0">
      <span id="city" class="inline-block">Warszawa</span>
      <span id="country" class="inline-block">PL</span>
    </span
  </div>
  `;

  WidgetContainer.appendChild(timeDate);
};

export { TimeDate };
