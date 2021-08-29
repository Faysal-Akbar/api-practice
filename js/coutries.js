const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(Response => Response.json())
    .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = (countries) => {
    const divContainer = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('countries');
        div.innerHTML = `
        <h3>Country : ${country.name}</h3>
        <h4>Capital : ${country.capital}</h4>
        <button onclick="countryDetails('${country.name}')">Details</button>
        `
        divContainer.appendChild(div);
    })
}

const countryDetails = detail => {
    const url = `https://restcountries.eu/rest/v2/name/${detail}`;
    fetch(url)
    .then(Res => Res.json())
    .then(data => displayCountryDetails(data))
}

const displayCountryDetails = countries => {
    const singleCountry = document.getElementById('country');
    singleCountry.innerText = '';
    countries.forEach(country => {
        const div = document.createElement('div');
        div.innerHTML = `
        <h2>Country : ${country.name}</h2>
        <h3>Capital : ${country.capital}</h3>
        <h3>National Flag : </h3>
        <img width="250px" src="${country.flag}">

        `
        singleCountry.appendChild(div);
    })
}