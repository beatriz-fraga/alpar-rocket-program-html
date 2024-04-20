const cityTitle = document.querySelector(".city-title");
const skyEl = document.querySelector(".sky-info");
const iconEl = document.querySelector(".temperature-icon");
const tempEl = document.querySelector(".current-temperature");
const minTempEl = document.querySelector(".min-temperature");
const maxTempEl = document.querySelector(".max-temperature");
const weatherResponseEl = document.querySelector(".weather-response");

class WeatherView {
  createView(data) {
    weatherResponseEl.style.display = "flex";
    cityTitle.innerHTML = data.city;
    skyEl.innerHTML = data.skyWeatherDescription;
    iconEl.src = data.weatherIcon;
    tempEl.innerHTML = `${data.mainTemperature} Cº`;
    minTempEl.innerHTML = `Mínima: ${data.minTemperature} Cº`;
    maxTempEl.innerHTML = `Máxima: ${data.maxTemperature} Cº`;
  }
}
