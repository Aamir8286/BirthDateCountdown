var birthDate = new Date("21 Jul 2021");
var DaysEl = document.querySelectorAll(".container__days .big-text");
var HoursEl = document.querySelectorAll(".container__hours .big-text");
var MinutesEl = document.querySelectorAll(".container__minutes .big-text");
var SecondsEl = document.querySelectorAll(".container__seconds .big-text");
function CountDown() {
  var currentDate = new Date();

  var miliseconds = birthDate - currentDate;
  var seconds = miliseconds / 1000;
  var days = Math.floor(parseInt(seconds / (24 * 3600)));
  seconds = seconds % (24 * 3600);
  var hours = Math.floor(parseInt(seconds / 3600));
  seconds %= 3600;
  var minutes = Math.floor(seconds / 60);
  seconds %= 60;
  seconds = Math.floor(seconds);

  DaysEl[0].innerHTML = days;
  HoursEl[0].innerHTML = hours < 10 ? `0${hours}` : hours;
  MinutesEl[0].innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  SecondsEl[0].innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  //   console.log(days);
  //   console.log(hours);
  //   console.log(minutes);
  //   console.log(Math.floor(seconds));
}

setInterval(() => {
  CountDown();
}, 1000);
