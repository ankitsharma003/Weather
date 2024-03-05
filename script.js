const apiid = "e443ebfe4d34505beea47b075918b07b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=Jaipur";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
async function cheakweather(city) {
  const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiid}`;
  const response = await fetch(apiurl);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    var c = data.main.temp - 273.15;
    document.querySelector(".temp").innerHTML = Math.round(c) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    var sp = data.wind.speed * 4;
    document.querySelector(".wind").innerHTML = sp + "km/h";
    if (data.weather[0].main == "Mist") {
      weathericon.src = "images/mist.png";
    } else if (data.weather[0].main == "Clear") {
      weathericon.src = "images/clear.png";
    } else if (data.weather[0].main == "Clouds") {
      weathericon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Drizzle") {
      weathericon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Humidity") {
      weathericon.src = "images/humidity.png";
    } else if (data.weather[0].main == "rain") {
      weathericon.src = "/images/rain.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchbtn.addEventListener("click", () => {
  cheakweather(searchbox.value);
});
