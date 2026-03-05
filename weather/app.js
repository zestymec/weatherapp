const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "a5ba5633dcb1776654eb9b1abb93537c";
let searchbox = document.querySelector(".search-box input");
let searchbtn = document.querySelector(".search-box button");
async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}
searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});


searchbox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchbox.value);
    }
});



