console.log("Hello World");


window.addEventListener("load", () => {
  let lat;
  let long;
  let tempDegree = document.querySelector(".temp-degree");
  let tempDescription = document.querySelector(".temp-description");

  // Wrigley Field Coords
  lat = 41.948437;
  long = -87.655334;

  const proxy = "https://cors-anywhere.herokuapp.com/";

  const api = `${proxy}https://api.darksky.net/forecast/b8305b6aaed426895af4a360aca6099d/${lat},${long}`;

  fetch(api)
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data)
      const { temperature, summary } = data.currently;
      // Set DOM elements 
      tempDegree.textContent = temperature;
      tempDescription.textContent = summary;
     
    })
});