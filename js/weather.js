const API_KEY = "7cfadd40d5d20160f8ea3d46396273af";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:last-child");
      const weather = document.querySelector("#weather span:first-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}, ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

//navigator 함수를 사용하면 사용자의 GPS or WIFI를 통해 위치를 알수 있다.
//getCurrentPosition에는 2개의 함수가 들어가야 하는데, 1번째는 위치를 잘 불러왔을때 사용하는 함수이고, 2번째는 위치를 불러오기 실패했을 때 사용하는 함수이다.
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
