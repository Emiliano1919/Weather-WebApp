import "./style.css";
import { getClimate } from "./fetching.js";
// URL (required), options (optional)
const initial =
  "https://api.weatherapi.com/v1/current.json?key=eadbfdb38fa148678c615752231211&q=ottawa&aqi=no";
getClimate(initial);

const input = document.querySelector(".input");
input.addEventListener("keydown", (event) => {
  // Check if the pressed key is Enter
  if (event.key === "Enter") {
    // Get the value of the input element
    const text = input.value.trim().toLowerCase();
    const first =
      "https://api.weatherapi.com/v1/current.json?key=eadbfdb38fa148678c615752231211&q=";
    const second = "&aqi=no";
    const url = first + text + second;
    getClimate(url);
    // Clear the input field if needed
    input.value = "";

    // Prevent the default Enter key behavior (form submission)
    event.preventDefault();
  }
});
