//메인 시계
const day = document.querySelector(".day");
const time = document.querySelector(".time");

function getTime() {
  const dateJs = new Date();
  const hour = String(dateJs.getHours()).padStart(2, "0");
  const min = String(dateJs.getMinutes()).padStart(2, "0");
  const sec = String(dateJs.getSeconds()).padStart(2, "0");

  time.innerHTML = `${hour}:${min}:${sec}`;
}

function getDay() {
  const dateJs = new Date();
  const year = dateJs.getFullYear();
  const month = dateJs.getMonth() + 1;
  const date = dateJs.getDate();

  day.innerHTML = `${year}.${month}.${date}`;
}

getDay();
getTime();
setInterval(getTime, 1000);
