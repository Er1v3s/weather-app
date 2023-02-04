const SearchBar = () => {
  const searchBar = document.querySelector("#search-bar");
  searchBar.innerHTML = `
    <div class="flex absolute w-screen justify-center bottom-5 h-20">
        <div class="relative p-3 h-20 backdrop-blur-sm w-[90%] max-w-md bg-white/50 z-40 rounded-3xl">
        </div>
    </div>

    <div class="flex absolute w-screen justify-center bottom-5 h-20 z-50">
        <div class="flex justify-center relative p-5 rounded-x z-10">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-[10%]">
                <span class="text-zinc-700 text-2xl"><i class="fa-solid fa-magnifying-glass"></i></span>
            </div>
            <input type="text" class="block w-[90%] text-center text-4xl bg-transparent border-b-2 border-zinc-700 placeholder-zinc-700 focus:outline-none" placeholder="Search">
        </div>
    </div>
    `;
};

export default SearchBar;
