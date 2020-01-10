(() => {
    document.getElementById("run").addEventListener("click", function() {
        let input = document.getElementById("inp").value;
        let key = "3003d915e19a0bfa5f7e8f03edbb51b5"; // empty array for multiple elements;

        fetch('https://api.openweathermap.org/data/2.5/weather?q='+input+'&appid='+key)

            .then((response)=> {
                return response.json();
            })

            .then((data)=> {




                drawWeather( data);



            });

    });

    function drawWeather( d ) {
        var celcius = Math.round(parseFloat(d.main.temp)-273.15);
        var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
        var description = d.weather[0].description;

        document.getElementById('description').innerHTML = description;
        document.getElementById('temp').innerHTML = celcius + '&deg;';
        document.getElementById('location').innerHTML = d.name;

        if( description.indexOf('rain') > 0 ) {
            document.body.className = 'rainy';
        } else if( description.indexOf('cloud') > 0 ) {
            document.body.className = 'cloudy';
        } else if( description.indexOf('sunny') > 0 ) {
            document.body.className = 'sunny';
        }
    }


})();