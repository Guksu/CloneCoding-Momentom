const API_KEY = "8f218c9c6057f9219adcd3912a61cb7d";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; //뺵틱인거 중요 !!
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temp = document.querySelector("#temp span");
      const weather = document.querySelector("#lo_weather span:first-child");
      const city = document.querySelector("#lo_weather span:last-child");
      temp.innerText = `${Math.ceil(data.main.temp)}°C`;
      city.innerText = data.name;
      weather.innerHTML = data.weather[0].main;
    });
}

function onGeoError() {
  alert("Can't fidnd you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
