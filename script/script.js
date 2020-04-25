const clock = document.querySelector("#clock");
const color = document.querySelector("#color");
const date = document.querySelector("#date");
const dataButton = document.querySelector(".button_data");
const deleteData = document.querySelector(".delete_data");

function Clock() {
  let time = new Date();

  let h = time.getHours().toString();
  let m = time.getMinutes().toString();
  let s = time.getSeconds().toString();

  if (h.length < 2) {
    h = "0" + h;
  }
  if (m.length < 2) {
    m = "0" + m;
  }
  if (s.length < 2) {
    s = "0" + s;
  }

  let clockString = h + ":" + m + ":" + s;
  let colorStyle = "#" + h + m + s;

  clock.textContent = clockString;
  color.textContent = colorStyle;

  document.body.style.background = colorStyle;
  document.body.style.transition = "0.4s";
}
Clock();
setInterval(Clock, 1000);

dataButton.addEventListener("click", (event) => {
  let data = new Date();

  let year = data.getUTCFullYear().toString();
  let mounth = data.getMonth().toString();
  let day = data.getDate().toString();
  if (mounth.length < 2) {
    mounth = "0" + mounth;
  }

  if (day.length < 2) {
    day = "0" + day;
  }
  const dateString = day + "/" + mounth + "/" + year;
  date.textContent = dateString;

  setTimeout(function () {
    date.style.transition = "0.5s ease-in-out";
  }, 300);

  setTimeout(function () {
    date.style.opacity = "1";
  }, 500);
});

deleteData.addEventListener("click", () => {
  setTimeout(function () {
    date.style.transition = "0.5s ease-in-out";
  }, 300);
  setTimeout(function () {
    date.style.opacity = "0";
  }, 500);
  setTimeout(function () {
    date.textContent = "";
  }, 1000);
});
