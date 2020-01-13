(() => {
    document.getElementById("run").addEventListener("click", function () {
        let input = document.getElementById("inp").value;
        let key = "3003d915e19a0bfa5f7e8f03edbb51b5"; // empty array for multiple elements;

        fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input + '&units=metric&appid=' + key)

            .then((response) => {
                return response.json();
            })

            .then((data) => {


                console.log(data);


                let averageTemp = array => Math.floor((array.reduce((a, b) => a + b, 0) / array.length));

                let allTemp = [];
                let beschrijving = [];
// This will take the weather data as a parameter and insert it into div.

                for (let i = 0; i < 40; i++) {

                    allTemp.push(data.list[i].main.temp);
                    beschrijving.push(data.list[i].weather[0].description);


                    console.log(allTemp);
                    document.getElementById('description').innerHTML = description;

                    document.getElementById('location').innerHTML = data.name;

                }
            });

    });





})();