const Cloack = () => {
  const time = document.getElementById("time");
  function cloack() {
    const date = new Date();
    time.innerHTML = date.toLocaleString([], {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  setInterval(cloack, 1000);
};

export { Cloack };
