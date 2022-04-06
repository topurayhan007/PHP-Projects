// var ndt = "2022-04-06 15:00:00";
// var n = ndt.split(' ');
// var date = new Date(n[0]);
// var time = n[1];

// console.log(date.toDateString());
// console.log(time);

// var mydate = new Date('2014-04-03');
// console.log(mydate.toDateString());

// var html = "Dhaka";

// document.getElementById("location").innerHTML = html;
// document.getElementById("date").innerHTML = html;
// document.getElementById("iconM").innerHTML = html;
// document.getElementById("descM").innerHTML = html;

// document.getElementById("tempM").innerHTML = html;

// document.getElementById("maxTemp").innerHTML = html;
// document.getElementById("humidity").innerHTML = html;
// document.getElementById("wind").innerHTML = html;

// document.getElementById("minTemp").innerHTML = html;
// document.getElementById("pressure").innerHTML = html;
// document.getElementById("visible").innerHTML = html;


// document.getElementById("day").innerHTML = html;
// document.getElementById("icon").innerHTML = html;
// document.getElementById("temp").innerHTML = html;
// document.getElementById("desc").innerHTML = html;

// var input1 = document.getElementById("search");
// input1.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//    event.preventDefault();
//    document.getElementById("myBtn").click();
//   }
// });
var input = document.getElementById("search");

function getWeather(){
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+ '&appid=e77939354c74a1379070653fce5442a6&units=metric') 
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        console.log(data);
        document.getElementById("location").innerHTML = data.city.name + ', ' + data.city.country;

        var ndt = data.list[0].dt_txt;
        var date = new Date(ndt);

        // var time = n[1];

        document.getElementById("date").innerHTML = date.toLocaleDateString('en-us', { weekday:"short", month:"long", day:"numeric"});
        document.getElementById("iconM").src = "http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png";
        document.getElementById("descM").innerHTML = data.list[0].weather[0].description;

        document.getElementById("tempM").innerHTML = Math.ceil(data.list[0].main.temp);

        document.getElementById("maxTemp").innerHTML = "Max temp: "+Math.ceil(data.list[0].main.temp_max) +" °C";
        document.getElementById("humidity").innerHTML = "Humidity: "+data.list[0].main.humidity + " %";
        document.getElementById("wind").innerHTML = "Wind speed: "+data.list[0].wind.speed + " m/s";

        document.getElementById("minTemp").innerHTML = "Min temp: "+ Math.ceil(data.list[0].main.temp_min) +" °C";
        document.getElementById("pressure").innerHTML = "Pressure: "+data.list[0].main.pressure +"Pa";
        document.getElementById("visible").innerHTML = "Visibility: "+ (data.list[0].visibility)/1000 + " Km";

        var currDate = date.toLocaleDateString('en-us', {day:"numeric"});
        // console.log(currDate);
        var counter =0;
        var fourList = new Array(3);
        for(let i = 0; i < 40; ++i){
            var tempDate = data.list[i].dt_txt;
            var tempTime = tempDate.split(' ');
            var time = tempTime[1];

            var dateTemp = new Date(tempDate);
            var currTempDate = dateTemp.toLocaleDateString('en-us', {day:"numeric"});
            console.log(currTempDate + " > " + currDate);
            
            
            
            if(currTempDate > currDate && time == '12:00:00'){
                currDate = currTempDate;
                counter++;
                document.getElementById("day"+counter).innerHTML = dateTemp.toLocaleDateString('en-us', {weekday:"long"});
                document.getElementById("icon"+counter).src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + "@2x.png";
                document.getElementById("temp"+counter).innerHTML = Math.ceil(data.list[i].main.temp) + " °C";
                document.getElementById("desc"+counter).innerHTML = data.list[i].weather[0].description;
                
                // console.log(dateTemp);
            }
            
        }
        console.log(counter);
        
    })
    .catch(err => alert("City not found!"));
    
}

function defaultLocation(){
    input.value = "Dhaka";
    getWeather();
}
