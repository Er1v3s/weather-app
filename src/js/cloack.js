const Calendar = () => {
  const date = document.querySelector("#date");
  const currentDate = new Date();
  date.innerHTML = currentDate.toLocaleString([], {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

const Clock = () => {
  const time = document.getElementById("clock");
  const clock = () => {
    const date = new Date();
    time.innerHTML = date.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  clock();
  setInterval(clock, 1000);
};

export { Clock, Calendar };
