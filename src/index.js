let months = {
  january: {
    days: 31,
  },
  february: {
    days: 28,
  },
};

for (const key in months) {
  console.log("xxxxx", key, months[key].days);
  let x = 0;
  while (x < months[key].days) {
    console.log(x + 1);
    x++;
  }
}
