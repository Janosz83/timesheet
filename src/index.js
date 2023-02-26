let monthsInit = {
  january: {
    days: 31,
  },
  february: {
    days: 28,
  },
  march: {
    days: 31,
  },
  april: {
    days: 30,
  },
};

let timesheet = document.querySelector(".timesheet");

let months = JSON.parse(localStorage.getItem("timesheet")) || monthsInit;

for (const key in months) {
  //console.log("xxxxx", key, months[key].days);

  let month = document.createElement("div");
  month.innerHTML = key;
  month.className = "p-5 ";

  timesheet.appendChild(month);
  let x = 0;
  while (x < months[key].days) {
    let day = document.createElement("div");
    day.className = "border p-1";
    day.innerHTML = x + 1;
    month.appendChild(day);
    let chooser = document.createElement("input");
    chooser.type = "number";
    chooser.id = x + 1;
    chooser.classList.add("m-2");
    chooser.style.width = "40px";

    const state = months[key].state;

    if (state && x in state) {
      chooser.value = state[x];
    }

    chooser.addEventListener("change", function (ev) {
      console.log(key, ev.target.id, ev.target.value);
      months[key].state = {
        ...months[key].state,
        [ev.target.id]: ev.target.value,
      };
      console.log(months);
      localStorage.setItem("timesheet", JSON.stringify(months));
    });
    day.appendChild(chooser);
    x++;
  }
}
