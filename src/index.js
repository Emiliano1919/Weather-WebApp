import "./style.css";
// URL (required), options (optional)
fetch(
  "https://api.weatherapi.com/v1/current.json?key=eadbfdb38fa148678c615752231211&q=Ottawa&aqi=no",
  { mode: "cors" },
)
  .then((response) => {
    console.log(response.json());
  })
  .catch((err) => {
    console.log(err);
  });
