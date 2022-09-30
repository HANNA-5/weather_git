let now = new Date();
let Day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sanday"
];
let month = [
  "January",
  "February",
  "March",
  "April ",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Oktober",
  "November",
  "December"
];
function formatDate() {
  let DayNow = now.getDay();
  let date = now.getDate();
  let monthNow = now.getMonth();
  let year = now.getFullYear();
  document.querySelector("p").innerHTML =
    Day[DayNow] +
    " " +
    date +
    " " +
    "" +
    " " +
    month[monthNow] +
    " " +
    " " +
    year +
    " " +
    "year";
}
formatDate();

function weather(response) {
 //let temperature = Math.round(response.data.main.temp);
 document.querySelector("#temperature").innerHTML= `${Math.round(response.data.main.temp)}℃`;
  //console.log(temp);
}

function showWeather(event) {
  event.preventDefault();
  let cityIn = document.querySelector("#city-input").value;
  document.querySelector("h3").innerHTML = cityIn.toUpperCase();
  let apiKey = "445905dadb3d2b0c6f1b916c9d0e3860";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityIn}&appid=${apiKey}&&units=metric`;

  axios.get(url).then(weather);
}
let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", showWeather);
//let temperature=Math.round(response.data.main.temp);

function showPosition(position){
  let apiKey = "445905dadb3d2b0c6f1b916c9d0e3860";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  lat=position.coords.latitude;
  lon=position.coords.longitude;
  let h2=document.querySelector("h2");
    h2.innerHTML=`Your Latitude is ${lat} and your lonqitude is ${lot}`;
      }

function getCurrentPosition(){ navigator.geolocation.getCurrentPosition(showPosition);}
let button=document.querySelector("button");
button.addEventListener("clik",getCurrentPosition);


