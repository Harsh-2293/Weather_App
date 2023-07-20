const apiKey = "da631d7444f7183884fb1f447aa46ade";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".btn");
// console.log(searchBtn)

const weatherInfo = document.querySelector(".weather-icon");


async function checkWeather(XYZ) {
    const response = await fetch(apiUrl + XYZ + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    else{
        const data = await response.json();

    // console.log(data)

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h"

    if(data.weather[0].main == "Clouds"){
        weatherInfo.src = "./images/clouds.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherInfo.src = "./images/rain.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherInfo.src = "./images/mist.png";
    }
    else if(data.weather[0].main == "clear"){
        weatherInfo.src = "./images/clear.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherInfo.src = "./images/drizzle.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherInfo.src = "./images/snow.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }
    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBar.value);
})