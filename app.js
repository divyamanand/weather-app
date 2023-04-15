var cityname = document.getElementById("cityname");
var submit = document.getElementById("submit");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var sky = document.getElementById("sky");

const apiKey = "eb575e83ad3861dd2b47fd395058d888";
submit.addEventListener("click", click);

function click (){
    let a = cityname.value;
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+a+"&appid="+apiKey)
    .then((response)=> response.json())
    .then((data)=>{
        const timestamp = data.sys['sunrise'];
        const date = new Date(timestamp * 1000); 
        const dateString = date.toUTCString(); 

        const timestamp2 = data.sys['sunset'];
        const date2 = new Date(timestamp2 * 1000);
        const dateString2 = date2.toUTCString(); 
        a = a.toUpperCase();
        document.getElementById("city").innerHTML = a;
        temp.innerHTML =  (data.main['temp']-273).toFixed(2)+' °C';
        document.getElementById("feel").innerHTML = 'Feels Like: ' +(data.main['feels_like']-273).toFixed(2)+' °C';
        sky.innerHTML = data.weather['0']['main'];
        wind.innerHTML = 'Wind Speed: ' +data.wind['speed'] + ' km/h';
        sunrise.innerHTML = 'Sunrise: '+ dateString;
        sunset.innerHTML = 'Sunset: '+ dateString2;


    })
    .catch((error)=>console.error(error));
};
