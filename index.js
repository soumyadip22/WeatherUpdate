var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var press = document.querySelector('#pressure');
var humi = document.querySelector('#humidity');
var clds = document.querySelector('#clouds');

apik = 'cef0b9c05e32d602e231267d5fbd467d'
function convertion(val){
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' +inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>{
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var tempature = data['main']['temp']
        var wndspeed = data['wind']['speed']
        var press = data['main']['pressure']
        var humi = data['main']['humidity']
        var clds = data['clouds']['all']
        

        city.innerHTML = `Weather of : <span>${nameval}</span>`
        temp.innerHTML = `Temperature : <span>${ convertion(tempature)}°C</span>`
        description.innerHTML = `Sky Condition : <span>${descrip}</span>`
        wind.innerHTML = `Wind Speed : <span>${wndspeed} meter/sec</span>`
        pressure.innerHTML = `Pressure update : <span>${press} in hPa</span>`
        humidity.innerHTML = `Humidity update : <span>${humi} %</span>`
        clouds.innerHTML = `Cloudiness : <span>${clds} %</span>`
       
    })

    .catch(Error => alert('You entered wrong city name '))
})
