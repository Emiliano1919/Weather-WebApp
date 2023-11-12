import { populateInformation } from "./populate.js";
function getClimate(url) {
  fetch(url, { mode: "cors" })
    .then((response) => {
      console.log("it's working");
      return response.json();
    })
    .then((response) => {
      populateInformation(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

export { getClimate };
