async function getWeather(city){
    const url = await fetch(`https://api.weatherapi.com/v1/current.json?key=554c07a4be974533b8c143945232403&q=${city}`, {mode: 'cors'});
    const response = await url.json();
    document.getElementById('cityName').innerText =`City: ${response.location.name}`;
    document.getElementById('tempF').innerText =`Temp(°F): ${response.current.temp_f}`;
    document.getElementById('tempC').innerText =`Temp(°C): ${response.current.temp_c}`;
    document.getElementById('condition').innerText =`Condition: ${response.current.condition.text}`;
    document.getElementById('humidity').innerText =`Humidity: ${response.current.humidity}`;
}


function pageLoad(){
    const search = document.getElementById('searchBox');
    const btn = document.getElementById('submitBtn');
    btn.addEventListener("click",()=>{
        getWeather(`${search.value}`);
        document.getElementById('information').style.display = 'block';
        document.getElementById('information').style.display = 'flex';
    })
    search.addEventListener("keypress" ,function(event){
        if(event.key == 'Enter'){
            getWeather(`${search.value}`);
            document.getElementById('information').style.display = 'block';
            document.getElementById('information').style.display = 'flex';
        }
    })

}
window.onload = function() {
    document.getElementById("searchBox").value = "";
  }
pageLoad();