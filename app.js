// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city); //, weatherLocation.country);
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.getElementById("w-change-btn").addEventListener("click", e => {
  const city = document.getElementById("city").value;
  // const country = document.getElementById("country").value;

  // Changing the location
  weather.changeLocation(city); //,country);

  // Set location in LS
  storage.setLocationData(city); //, country);

  // Get weather again with the new location
  getWeather();

  // Close modal
  $("#locModal").modal("hide");
});

// Getting the weather
function getWeather() {
  weather
    .getWeather()
    .then(results => {
      console.log(results);
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
