const Popup = () => {
  const app = document.getElementById("app");
  const popup = document.createElement("div");

  popup.id = "popup";
  popup.className =
    "fixed top-0 bottom-0 right-0 left-0 bg-transparent/70 transition-opacity duration-500 opacity-1 z-50";

  popup.innerHTML = `
      <div
        class="relative mt-[70vh] m-auto max-w-[90%] h-fit p-8 bg-slate-200 rounded-xl transition-all duration-[5000]">
        <button id="close-btn"
          class="absolute top-1 right-3 transition-all duration-200 text-4xl font-bold text-zinc-800"
          href="#">&times;</button>
        <div class="text-xl text-center md:text-3xl">
          Niestety, nie mamy w naszej bazie miejsca o takiej nazwie!
        </div>
      </div>
    `;

  // It's for change
  setTimeout(() => {
    const closePopup = () => {
      popup.remove();
    };
    const closeBtn = document.getElementById("close-btn");
    closeBtn.addEventListener("click", closePopup);

    setTimeout(() => {
      popup.remove();
    }, 8000);
  }, 500);
  //

  app.appendChild(popup);
};

export { Popup };
