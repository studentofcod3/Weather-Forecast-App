class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    // this.country = document.getElementById("w-country");
    this.description = document.getElementById("w-description");
    this.temperature = document.getElementById("w-temperature");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = weather.name;
    // this.country.textContent = weather.sys.country;
    this.description.textContent = weather.weather[0].main;
    this.temperature.textContent = `${Math.round(
      weather.main.temp - 273.15
    )} \u{2103}`; //Temp came in with absolute zero as the start point so we convert. //The unicode is for the degrees celcius sign
    this.details.textContent = weather.weather[0].description;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    );
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.wind.textContent = `Wind: ${weather.wind.speed}`;
  }
}
