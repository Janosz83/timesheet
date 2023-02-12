let months = {
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

for (const key in months) {
  //console.log("xxxxx", key, months[key].days);
  let x = 0;
  let month = document.createElement("div");
  month.innerHTML = key;
  month.classList.add("cardx");
  month.classList.add("p-5");
  month.classList.add("d-inline-flex");
  let monthBody = document.createElement("div");
  monthBody.classList.add("text-primary");
  monthBody.classList.add("card-body");
  month.appendChild(monthBody);
  timesheet.appendChild(month);
  while (x < months[key].days) {
    let day = document.createElement("div");
    day.classList.add("d-inline");
    day.classList.add("text-info");
    day.classList.add("p-1");
    day.classList.add("border");
    day.innerHTML = x + 1;
    monthBody.appendChild(day);
    let chooser = document.createElement("input");
    chooser.type = "number";
    chooser.classList.add("m-2");
    chooser.style.width = "40px";
    day.appendChild(chooser);
    x++;
  }
}
