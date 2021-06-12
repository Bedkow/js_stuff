'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);

  contriesContainer.style.opacity = 1;
};

/*
/////////////////////////////////////// 
// @@@ OLD WAY@@@
const getCountryData = function (country) {
  const request = new XMLHttpRequest(); // the old way of ajax
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`); // GET to get data, + url for Portugal

  // CORS - cross origin resource sharing - without it we cannot access a 3rd party API from our code

  request.send(); // sending the request to the API, canot assign a variable to it as it doesn't have any data yet (async), when the fetching is done it will emit the 'load' event so we can add an EventListener
@@@
  request.addEventListener('load', function () {
    // console.log(this.responseText) // 'this' = 'request' object
    //responseText property stores the response from API >>>

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
    <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('usa');
*/

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
 /*
const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();

  //AJAX call country 1
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);

  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //render country 1
    renderCountry(data);

    // get neighbour country
    const [neighbour] = data.borders;

    if (!neighbour) return;

    //AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(this.responseText);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('usa');
*/

//@@@@@ new way @@@@@@@@@@@@@@@@@@@@@@@@@@@

//const request = fetch('https://restcountries.eu/rest/v2/name/portugal'); //returns a promise that is stored in the variable
// promise - an object that is used as a placeholder for the future result of an asynchronous operation
// with this we can escape "the callback hell"
//console.log(request);
/*
const getCountryData = function(country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function(response) {
    console.log(response);
    return response.json(); // .json - a method to converts the ReadableStream into desired output, .json is available for all responses, it is asynchronous, also returns a new promise
  }).then(function (data) {
    console.log(data);
  })
  //on all promises we can call the .then method, into it we pass a callback function we want to execute when the promise is fulfilled, the function will recieve one argument - resulting value of the fullfiled promise
};
*/


const getCountryData = function (country) {
  //country1
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
  .then(response => response.json(),/* err => alert(err)*/) //1st if successfull, 2nd if rejected
  .then(data => {
    renderCountry(data[0]);
    const neighbour = data[0].borders[0]

    if (!neighbour) return;

    //country2
    return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
  })
  .then(response => response.json())
  .then(data => renderCountry(data, 'neighbour'))
  .catch(err => console.log(`There's been an error: ${err}`)) // a better, 'global' way to catch any error in the promise chain
};

btn.addEventListener('click', function (){
  getCountryData('portugal');
})

