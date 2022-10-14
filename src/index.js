let now = new Date();
let mainDate = document.querySelector("#main-date");
let date = now.getDate();
let year = now.getFullYear();
let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
let day = days[now.getDay()];
let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
let month = months[now.getMonth()];
let time = now.toLocaleTimeString();
mainDate.innerHTML = `${day}, ${date} ${month} ${year}, ${time}`;

let apiKey = "f7141e3cfb8719734d0bf4f429aefd50"; 
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

function showCity(event) {
    event.preventDefault();
    let submitInput = document.querySelector("#city-input");
    let city = document.querySelector("#main-city");
    city.innerHTML = submitInput.value;
    city = submitInput.value;
    
    function showTemp (response) {
        let cityTemp = document.querySelector("#temp");
        cityTemp.innerHTML = `${response.data.weather[0].main}, ${Math.round(response.data.main.temp)} &#8451`;
        let humidity = document.querySelector("#humidity");
        humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
        let wind = document.querySelector("#wind");
        wind.innerHTML = `Wind: ${response.data.wind.speed} km/h`;
    }
    
    axios.get(`${apiUrl}${city}&units=metric&appid=${apiKey}`).then(showTemp);
  }


let citySearch = document.querySelector("#form-city");
citySearch.addEventListener("submit", showCity);

function showCurrentCity(event) {

function showWeather(response) {
    let city = document.querySelector("#main-city");
    city.innerHTML = `Stirling`;
    let cityTemp = document.querySelector("#temp");
    cityTemp.innerHTML = `${response.data.weather[0].main}, ${Math.round(response.data.main.temp)} &#8451`;
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
    let wind = document.querySelector("#wind");
    wind.innerHTML = `Wind: ${response.data.wind.speed} km/h`;
  }
  
  function retrievePosition(position) {
    let apiKey = "f7141e3cfb8719734d0bf4f429aefd50";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showWeather);
  }
  
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

  let currentCity = document.querySelector("#current-city");
  currentCity.addEventListener("submit", showCurrentCity);


// function showTemp (response) {
//     let cityTemp = document.querySelector("#temp");
//     cityTemp.innerHTML = `${response.data.main.temp} &#8451`
// }

// axios.get(`${apiUrl}${citySearch}&appid=${apiKey}`).then(showTemp);


// let mainTemp = 18;
// let mainTempVidget = document.querySelector("#temp");
// mainTempVidget.innerHTML = `+${mainTemp}`



// function changeTempToC(event) {
//     event.preventDefault();
//     let temp = document.querySelector("#temp");
//     temp.innerHTML = `+${mainTemp}`;
// }

// function changeTempToF(event) {
//     event.preventDefault();
//     let temp = document.querySelector("#temp");
//     temp.innerHTML = `+${mainTemp + 40}`;
// }

// let celsius = document.querySelector("#c");
// celsius.addEventListener("click", changeTempToC);

// let farenheit = document.querySelector("#f");
// farenheit.addEventListener("click", changeTempToF);