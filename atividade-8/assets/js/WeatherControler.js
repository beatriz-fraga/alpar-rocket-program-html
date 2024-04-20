class WeatherControler {
  static instance;
  data;
  view;
  service;

  constructor() {
    this.data = new WeatherModel();
    this.view = new WeatherView();
    this.service = new WeatherService();
  }

  async getWeather(city) {
    this.data = await this.service.request(city);
    this.view.createView(this.data);
  }
}

WeatherControler.instance = new WeatherControler();
