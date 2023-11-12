function populateInformation(obj) {
  const degrees = document.querySelector(".degrees");
  const degreesFeeling = document.querySelector(".feeling");
  const wind = document.querySelector(".wind");
  const humidity = document.querySelector(".humidity");
  const outside = document.querySelector(".condition");
  const cityCountry = document.querySelector(".cityCountry");

  const city = obj.location.name;
  const nation = obj.location.country;
  const location = city + ", " + nation;

  degrees.textContent = obj.current.temp_c;
  degreesFeeling.textContent = `Feels like: ${obj.current.feelslike_c}°C`;
  wind.textContent = `Wind: ${obj.current.wind_kph} kph`;
  humidity.textContent = `Humidity: ${obj.current.humidity}`;
  outside.textContent = obj.current.condition.text;
  cityCountry.textContent = location;
}

export { populateInformation };
