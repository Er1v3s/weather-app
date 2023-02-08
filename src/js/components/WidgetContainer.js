const WidgetContainer = () => {
  const app = document.getElementById("app");

  const widgetContainer = document.createElement("div");
  widgetContainer.classList.add(
    "container",
    "max-w-screen-lg",
    "absolute",
    "flex",
    "flex-wrap",
    "p-5",
    "justify-between",
    "gap-3"
  );
  widgetContainer.setAttribute("id", "widget-container");

  app.appendChild(widgetContainer);
};

export { WidgetContainer };
