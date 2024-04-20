class WeatherService {
  async request(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ad8cd8755acda65ed914912319a4a674&units=metric&lang=pt_br`;
    const response = await fetch(url);
    const data = await response.json();
    const model = new WeatherModel();
    model.city = data.name;
    model.skyWeatherDescription = data.weather[0].description;
    model.weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    model.mainTemperature = data.main.temp;
    model.minTemperature = data.main.temp_min;
    model.maxTemperature = data.main.temp_max;
    return model;
  }
}
