let stop = false;
let timer;

let buttonCtrl = document.querySelector("#buttonCtrl");

buttonCtrl.addEventListener("click", () => {
  stop = !stop;
  if (stop) {
    buttonCtrl.innerHTML = "START";
    clearInterval(timer);
  } else {
    buttonCtrl.innerHTML = "STOP";
    timer = setInterval(() => {
      fetchTime();
    }, 1000);
  }
});

const fetchTime = () => {
  const date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let am_pm = "AM";

  if (hours > 12) {
    hours -= 12;
    am_pm = "PM";
  }
  if (hours == 0) {
    hours = 12;
    am_pm = "AM";
  }

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  updateDOM(hours, minutes, seconds, am_pm);
};

const updateDOM = (hrs, min, sec, am_pm) => {
  document.querySelector("#hours").innerHTML = hrs;
  document.querySelector("#minutes").innerHTML = min;
  document.querySelector("#seconds").innerHTML = sec;
  document.querySelector("#am_pm").innerHTML = am_pm;
};

if (!stop) {
  timer = setInterval(() => {
    fetchTime();
  }, 1000);
}
