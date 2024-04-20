class WeatherModel {
  //Atributos
  _city;
  _icon;
  _skyWeatherDescription;
  _weatherIcon;
  _mainTemperature;
  _maxTemperature;
  _minTemperature;

  //Métodos
  get city() {
    return this._city;
  }
  set city(value) {
    this._city = value;
  }
  get icon() {
    return this._icon;
  }
  set icon(value) {
    this._icon = value;
  }
  get skyWeatherDescription() {
    return this._skyWeatherDescription;
  }
  set skyWeatherDescription(value) {
    this._skyWeatherDescription = value;
  }
  get weatherIcon() {
    return this._weatherIcon;
  }
  set weatherIcon(value) {
    this._weatherIcon = value;
  }
  get mainTemperature() {
    return this._mainTemperature;
  }
  set mainTemperature(value) {
    this._mainTemperature = value;
  }
  get maxTemperature() {
    return this._maxTemperature;
  }
  set maxTemperature(value) {
    this._maxTemperature = value;
  }
  get minTemperature() {
    return this._minTemperature;
  }
  set minTemperature(value) {
    this._minTemperature = value;
  }
}
