const VidmoWidget = () => {
  const WidgetContainer = document.getElementById("widget-container");

  const widget = document.createElement("div");
  widget.classList.add(
    "widget",
    "sm:hidden",
    "relative",
    "w-24",
    "h-24",
    "lg:w-36",
    "lg:h-36",
    "order-last"
  );

  WidgetContainer.appendChild(widget);
};

export { VidmoWidget };
