
const apiKey="d635b15a00c09a6366ef07c938631bc6";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 

const searchbox=document.querySelector(".searchcity");
const searchbtn=document.querySelector(".button1");
const weatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city){
    const response= await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status== 404 ){
        document.querySelector(".error").style.display= "block";
        document.querySelector(".weather").style.display= "none";
    }
    else{
        var data= await response.json();

        document.querySelector(".cityh2").innerHTML=data.name;
        document.querySelector(".temph1").innerHTML=Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+ "km/h";
         
        if(data.weather[0].main == "Clouds"){
          weatherIcon.src= "tp/clouds.png";
        }
        else  if(data.weather[0].main == "Clear"){
            weatherIcon.src= "tp/clear.png";
          }
        else  if(data.weather[0].main == "Rain"){
            weatherIcon.src= "tp/rain.png";
          }
        else  if(data.weather[0].main == "Drizzle"){
            weatherIcon.src= "tp/drizzle.png";
          }
        else  if(data.weather[0].main == "Mist"){
            weatherIcon.src= "tp/mist.png";
          }
    
          document.querySelector(".weather").style.display= "block";
          document.querySelector(".error").style.display= "none";
        }

   
}

searchbtn.addEventListener("click",() =>{
    checkWeather(searchbox.value);
})
checkWeather();

