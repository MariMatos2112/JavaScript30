const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const input = document.querySelector("input[type=text]");
const list = document.querySelector(".suggestions");

input.addEventListener("keyup", (key) => {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const cities = [];
      data.map((element) => {
        if (
          element.city.toLowerCase().startsWith(input.value.toLowerCase()) ||
          element.state.toLowerCase().startsWith(input.value.toLowerCase())
        )
          if (cities.length < 7)
            cities.push(
              `<li><span>${element.city}, ${element.state}</span><span>${element.population}</span></li>`
            );
      });
      if (input.value.length == 0)
        list.innerHTML = "<li>Filter for a city</li> <li>or a state</li>";
      else if (cities.length == 0)
        list.innerHTML = "<li>No cities were found</li>";
      else list.innerHTML = cities.join("");
    })
    .catch((error) => {
      console.log(error);
    });
});
