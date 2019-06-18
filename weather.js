class Weather {
  constructor(city) {
    //, country) {
    this.apiKey = "681292b64bf3488f6162a62d7dd754fd";
    this.city = city;
    // this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.country
      }&appid=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    //, country) {
    this.city = city;
    // this.country = country;
  }
}
