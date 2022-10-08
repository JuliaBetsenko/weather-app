function formatDate(date) {
  let hours = currentTime.getHours();
  if (hours < 10) {
    hours = `0 ${hours}`;
  }

  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${hours}`;
  }
  let dayIndex = currentTime.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return `${days[dayIndex]}    ${hours}:${minutes}`;
}

dateElement = document.querySelector("#date");
let currentTime = new Date();
