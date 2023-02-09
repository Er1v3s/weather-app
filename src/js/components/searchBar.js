const SearchBar = () => {
  const app = document.getElementById("app");
  const searchBar = document.createElement("div");
  searchBar.classList.add(
    "flex",
    "absolute",
    "bottom-5",
    "w-[90%]",
    "max-w-lg",
    "h-24",
    "lg:h-28"
  );

  searchBar.innerHTML = `
    <div class="searchBar relative w-[100%] h-[100%] bg-white/40 backdrop-blur-sm rounded-3xl border"></div>
    <div class="searchBar absolute w-[100%] h-[100%] flex justify-center items-center
            text-xl font-semibold text-zinc-800">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-[5%]">
        <span class="text-zinc-800 text-xl lg:text-2xl"><i class="fa-solid fa-magnifying-glass"></i></span>
        </div>
          <input id="search" type="text" autocomplete="off"
          class="block w-[90%] text-center text-2xl bg-transparent border-b-2 border-zinc-800 placeholder-zinc-700 focus:outline-none lg:text-4xl" placeholder="Search">
    </div>
  `;

  app.appendChild(searchBar);
};

export { SearchBar };
