let temp = document.querySelector("#temp");
let place = document.querySelector("#place");
let wind = document.querySelector("#wind");
let des = document.querySelector("#des");
let feel = document.querySelector("#feel");
let humi = document.querySelector("#humi");
let iconImg = document.querySelector("#icon");
let Img = document.querySelector("#Img");
let input = document.querySelector("input");
let btn = document.querySelector(".btn");

let APIkey = "9c20de3e5c6cf241d5ac8b213f48e4be";

//enter키 입력시 버튼 클릭 효과
input.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    btn.click();
  }
});

//검색 버튼클릭
btn.addEventListener("click", async () => {
  cityname = input.value;
  console.log(cityname);

  weather(cityname);
});

weather = async (cityname) => {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&lang=kr&appid=${APIkey}&units=metric`
  );

  //날씨정보를 data변수에 저장
  let data = await response.json();
  console.log(data);
  render(data);
};

//현재위치

getLocation = () => {
  navigator.geolocation.getCurrentPosition(success);
};

success = async (position) => {
  lat = position.coords.latitude;
  lon = position.coords.longitude;

  console.log(lat, lon);

  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&lang=kr&units=metric`
  );

  //날씨정보를 data변수에 저장
  let data = await response.json();
  console.log(data);

  render(data);
};

render = (data) => {
  //온도
  let temp2 = data.main.temp;
  console.log(temp2);
  temp.textContent = Math.round(temp2);

  //위치를 한줄로 줄였을때
  place.textContent = data.name;

  //풍속
  wind.textContent = Math.round(data.wind.speed);

  //날씨설명
  des.textContent = data.weather[0].description;

  //openweather 제공하는 날씨 아이콘

  // let icon = "02d";

  let icon = data.weather[0].icon;

  console.log(icon);
  let iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;
  console.log(iconUrl);

  iconImg.src = iconUrl;
};

getLocation();
