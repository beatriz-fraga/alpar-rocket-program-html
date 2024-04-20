const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value || "São Paulo";
  WeatherControler.instance.getWeather(city);
});

WeatherControler.instance.getWeather("São Paulo");
