const animate = () => {
  const elements = document.querySelectorAll(".widget");
  const searchBarElements = document.querySelectorAll(".searchBar");
  for (const element of elements) {
    element.classList.add("animated");
  }

  setTimeout(() => {
    for (const searchBarElement of searchBarElements) {
      searchBarElement.classList.add("animated");
    }
  }, 1100);
};

export { animate };
