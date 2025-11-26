const temperature = document.getElementById("temperature");
const feels_like = document.getElementById("feels_like");
const wind = document.getElementById("wind");
const place = document.getElementById("place");
const pression = document.getElementById("pression");
const humidity = document.getElementById("humidity");
const descreption = document.getElementById("descreption");
const icon_weather = document.getElementById("icon_weather");
const button_searsh = document.getElementById("button_searsh");
const search = document.getElementById("search");

button_searsh.addEventListener("click",function()
{
 const city = search.value.trim();
 const API = `710b700ecc4da3a4ca325b0738ea34f9`;
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=710b700ecc4da3a4ca325b0738ea34f9`)
 .then(Response => Response.json())
 .then(data => 
 {
    temperature.innerHTML = `${(data.main.temp-273.15).toFixed(2)}C°`;
    wind.innerHTML = `${ (data.wind.speed * 3.6).toFixed(0) }km/h`;
    feels_like.innerHTML = `${(data.main.feels_like - 273.15).toFixed(2)}C°`;
    place.innerHTML = `${data.sys.country}.${data.name}`;
    pression.innerHTML = `${data.main.pressure}P`;
    humidity.innerHTML = `${data.main.humidity}%`;
    descreption.innerHTML = `${data.weather[0].description}`;
    icon_weather.src = ` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
 })
 .catch(error => 
 {
    alert("error404");
 } 
 )
});