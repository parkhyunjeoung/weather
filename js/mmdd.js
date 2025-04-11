let to = document.querySelector("#today");
console.log(to);
let dat = document.querySelector("#dat");
let da = document.querySelector("#da");

let today = new Date();
console.log(today);

let year = today.getFullYear();
console.log(year);

let month = today.getMonth() + 1;
console.log(month);

let date = today.getDate();
console.log(date);

let day = today.getDay();
console.log(day);

let week = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];
console.log(week[day]);

let hours = today.getHours();
console.log(hours);

let min = today.getMinutes();
console.log(min);
let se = today.getSeconds();
console.log(se);

to.textContent = `${month}월`;
dat.textContent = `${date}일`;
da.textContent = `${week[day]}`;
