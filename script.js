document.addEventListener("DOMContentLoaded", function() {
  let cityData = {
    cities: [
      {
        "name": "Rio de Janeiro",
        "description": "A vibrant city known for its stunning beaches, lively culture, and iconic landmarks like Christ the Redeemer.",
        "image": "rio-image.jpg",
        "population": 6718903,
      },
      {
        "name": "São Paulo",
        "description": "Brazil's bustling financial center with diverse culture, museums, and great nightlife.",
        "image": "saopaulo-image.jpg",
        "population": 12325232,
      },
     {
      "name": "Salvador",
      "description": "Famous for its colonial architecture, Afro-Brazilian culture, and lively carnival celebrations.",
      "image": "salvador-image.jpg",
      "population": 2886698,
    },
    {
      "name": "Brasília",
      "description": "Brazil's capital known for its modernist architecture and UNESCO World Heritage sites.",
      "image": "brasilia-image.jpg",
      "population": 3055149,
    },
    {
      "name": "Fortaleza",
      "description": "Beautiful beaches, lively nightlife, and delicious seafood define this city.",
      "image": "fortaleza-image.jpg",
      "population": 2669342,
    },
    {
      "name": "Manaus",
      "description": "Gateway to the Amazon rainforest with a rich cultural heritage.",
      "image": "manaus-image.jpg",
      "population": 2219580,
    },
    {
      "name": "Curitiba",
      "description": "Known for its urban planning, green spaces, and cultural diversity.",
      "image": "curitiba-image.jpg",
      "population": 1933105,
    },
    {
      "name": "Recife",
      "description": "Rich in history, art, and stunning coastal landscapes.",
      "image": "recife-image.jpg",
      "population": 1633697,
      "color": "#800080"
    },
    {
      "name": "Porto Alegre",
      "description": "Cultural and commercial hub famous for its barbecue and lively music scene.",
      "image": "portoalegre-image.jpg",
      "population": 1484948,
      "color": "#8B0000"
    },
    {
      "name": "Belém",
      "description": "A blend of colonial architecture, Amazonian culture, and delicious cuisine.",
      "image": "belem-image.jpg",
      "population": 1442317,
    }
  ]
}

  let citiesContainer = document.getElementById("citiesContainer");

  cityData.cities.forEach(city => {
    let cityElement = document.createElement("div");
    cityElement.classList.add("city");

    let cityHTML = `
      <h2>${city.name}</h2>
      <p>${city.description}</p>
      <img src="${city.image}" alt="${city.name}">
      <p>Population: ${city.population.toLocaleString()}</p>
    `;

    cityElement.innerHTML = cityHTML;
    citiesContainer.appendChild(cityElement);
  });
});

/*https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event*/
/*https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById*/
/*https://api.jquery.com/*/
