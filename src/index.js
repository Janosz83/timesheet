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
  may: {
    days: 31,
  },
};

let timesheetEl = document.querySelector(".timesheet");

let months = JSON.parse(localStorage.getItem("timesheet")) || monthsInit;

for (const monthName in months) {
  //console.log("xxxxx", key, months[key].days);

  let monthEl = document.createElement("div");
  monthEl.innerHTML = monthName;
  monthEl.className = "p-1";

  timesheetEl.appendChild(monthEl);
  let day = 1;
  while (day < months[monthName].days) {
    let dayEl = document.createElement("div");
    dayEl.className = "border p-1";
    dayEl.innerHTML = day;
    monthEl.appendChild(dayEl);
    let chooser = document.createElement("input");
    chooser.type = "number";
    chooser.id = day;
    chooser.classList.add("m-1");
    chooser.style.width = "40px";

    const state = months[monthName].state;

    if (state && day in state) {
      chooser.value = state[day];
    }

    chooser.addEventListener("change", function (ev) {
      console.log(monthName, ev.target.id, ev.target.value);
      months[monthName].state = {
        ...months[monthName].state,
        [ev.target.id]: ev.target.value,
      };
      console.log(months);
      localStorage.setItem("timesheet", JSON.stringify(months));
    });
    dayEl.appendChild(chooser);
    day++;
  }
}
