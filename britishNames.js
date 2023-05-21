function fetchCountryDetails() {
  fetch("https://restcountries.com/v3.1/name/united%20kingdom")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Failed to fetch country details.");
      }
      return response.json();
    })
    .then(function (data) {
      const country = data[0];
      console.log(country);

      // Display country name
      const countryName = document.getElementById("country-name");
      countryName.textContent = country.name.common;

      // Display capital city
      const capitalCity = document.getElementById("capital-city");
      capitalCity.textContent = `Capital City: ${country.capital}`;

      // Display translated names
      const translatedNames = document.getElementById("translated-names");
      for (const langCode in country.translations) {
        const translation = country.translations[langCode].common;
        const listItem = document.createElement("li");
        listItem.textContent = translation;
        translatedNames.appendChild(listItem);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

window.onload = fetchCountryDetails;
