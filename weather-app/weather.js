const weatherForm = document.getElementById("weather-app");
const output = document.getElementById("output");
const input = document.getElementById("text-input");
const img = document.querySelector("img");
const dateInput =document.querySelector("select");

//API keys
const apiKey = "8CY4F8TS9QZ3TUS2J9DGLRV8M";
const apiKeyGif = "crhlgW85MNpjpu0H09PasXaBaF8MjdVP&s";

//Weather Info

const weatherInfo = {
  "temp":[],
  "tempmin":[],
  "tempmax":[],
  "conditions":[],
  "humidity":[],
  "datetime":[],
  "precip":[],
  "precipprob":[],
  "description":[],
  "icon":[],
};
//Objects
/*
for(i=0; i<6; i++){
    const weatherInfo ={
        "temperatures":[weatherData.days[i].temp],
        "descriptions":[weatherData.days[i].description],
        "humidity":[weatherData.days[i].humidity],
        "address":[],
        "timeZone":[],
        "icon":[],
        "precipProb":[],
        "precipitations":[],
        "dateTimes":[],
        "tempMax":[],
        "tempMin":[],
    };
    }*/

//functions
function cleanTextInput(str) {
  str = str.trim();
  const regex = /[.\\,_+()/-\s]/g;
  return str.replace(regex, "");
}

function invalidInput(str) {
  if (str == "") {
    alert("Please input a value");
    return true;
  } else {
    return false;
  }
}

function getInput(e) {
  e.preventDefault();
  const wordInp = input.value;
  const wordInput = wordInp.toLowerCase();
  const textInput = cleanTextInput(wordInput);

  if (invalidInput(textInput)) {
   return;
  }
  output.removeAttribute("hidden");
  img.removeAttribute("hidden");
  apiRequest(textInput);
}

async function apiRequest(location) {
  //send API request
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
   //save in local storage
  localStorage.setItem("weather", JSON.stringify(weatherData));
  getWeatherData();
} 
apiRequest().catch(function (error) {
    console.error("Error fetching weather data", error);
  })

function getWeatherData(){
    //Get weather data from local storage
    const dayInput=Number(dateInput.value);
  const weatherData = JSON.parse(localStorage.getItem("weather")) || [];
  if(!weatherData){
    alert("Local storage (weatherData) not found");
  }
  const address = weatherData.resolvedAddress;
  const timeZone = weatherData.timezone;
  //Put info from the promise in the array
    Object.entries(weatherData.days).forEach(days => {
        days.forEach(data=>{
        for (let key in weatherInfo) {
          if (weatherInfo.hasOwnProperty(key) && data.hasOwnProperty(key)) {
            weatherInfo[key].push(data[key]);
          }
        }
})});
      

  /*const temperature = weatherData.days[0].temp;
  const tempMin = weatherData.days[0].tempmin;
  const tempMax = weatherData.days[0].tempmax;
  const conditions = weatherData.currentConditions.conditions;
  const humidity = weatherData.days[0].humidity;
  const dateTime = weatherData.currentConditions.datetime;
  const precipitations = weatherData.days[0].precip;
  const descriptions = weatherData.days[0].description;
  const icon = weatherData.currentConditions.icon;
  const precipProb = weatherData.days[0].precipprob;*/

  //Transform Farenheit to Celsius
const tempCelsius={
    "temp":[],
    "tempmin":[],
    "tempmax":[]
}

        for (let key in tempCelsius){
            if(tempCelsius.hasOwnProperty(key) && weatherInfo.hasOwnProperty(key)){
                tempCelsius[key].push(weatherInfo[key])
            }
        }
    
//  Math.floor(((element[key] - 32) * 5) / 9)

output.innerHTML+= `<p>Place: ${address}<p/>`;
for(x=0; x<dayInput; x++){
    output.innerHTML+=
    `<p>Temperature: ${tempCelsius.temp[0][x]}°C (${tempCelsius.tempmin[0][x]}°C-${tempCelsius.tempmin[0][x]}°C)</p>
    <p>Conditions: ${weatherInfo.conditions[x]}</p>
        <p>Humidity: ${weatherInfo.humidity[x]}%</p>
     <p>Time: ${weatherInfo.datetime[x]} - ${timeZone}</p>
     <p> Precipitations:  ${weatherInfo.precip[x]} mm (${weatherInfo.precipprob[x]}% prop.) </p>
      <p>Descriptions: ${weatherInfo.description[x]} </p>
    `;}
    getIcon(weatherInfo.icon[0]);
}



/*function nextDays() {
  
  const address = weatherData.resolvedAddress;
  output.innerHTML = "";

  const temperatures = [];
  const descriptions = [];
  const precipitations = [];
  const dateTimes = [];
  output.innerHTML = `<p>Place: ${address}<p/>`;
  for (i = 0; i < 5; i++) {
    console.log(weatherData.days[i].temp);
    temperatures.push(weatherData.days[i].temp);
    descriptions.push(weatherData.days[i].description);
    precipitations.push(weatherData.days[i].precip);
    dateTimes.push(weatherData.days[i].datetime);
    output.innerHTML += `<div> <h3>Date: ${dateTimes[i]} </h3>
        <p>Temperature: ${Math.floor(((temperatures[i] - 32) * 5) / 9)}°C </p>
        <p> Conditions: ${descriptions[i]}</p>
        <p> Precipitations: ${precipitations[i]} mm </p> </div>
        `;
  }
}*/
//get GIPHY icon

async function getIcon(icon) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${apiKeyGif}=${icon}`,
    { mode: "cors" }
  );
  const iconData = await response.json();

  img.src = iconData.data.images.original.url;
}
getIcon().catch(function (error) {
  if ((error = 200)) {
    console.log("The gif is not found");
    img.src = "https://media.tenor.com/1L8xQpkb71sAAAAM/crying.gif";
  }
  console.error("Error fetching icon data:", error);
});

weatherForm.addEventListener("submit", getInput);
