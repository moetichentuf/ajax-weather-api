(() => {
// got help from Thibeault, Wolf and Samira with getting stuff out the array
    let averageTemp = array => Math.floor((array.reduce((a, b) => a + b, 0) / array.length));

    document.getElementById("run").addEventListener("click", function () {
        let input = document.getElementById("inp").value;
        let key = "3003d915e19a0bfa5f7e8f03edbb51b5"; // empty array for multiple elements;


        fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input + '&units=metric&appid=' + key)

            .then((response) => {
                return response.json();
            })

            .then((data) => {


                //console.log(data);


                let allTemp = [];
                let beschrijving = [];


                //for loop will get the info from api array

                for (let i = 0; i < 40; i++) {

                    allTemp.push(data.list[i].main.temp);
                    beschrijving.push(data.list[i].weather[0].description);


                    //console.log(allTemp);
                    document.getElementById('description1').innerHTML = beschrijving;

                    document.getElementById('location').style = data.name;

                    let dayOne = allTemp.slice(0, 8);
                    let dayTwo = allTemp.slice(8, 16);
                    let dayThree = allTemp.slice(16, 24);
                    let dayFour = allTemp.slice(24, 32);
                    let dayFive = allTemp.slice(32, 40);
                    // Temperature averages using the function defined earlier.
                    let tempDayOne = averageTemp(dayOne);
                    let tempDayTwo = averageTemp(dayTwo);
                    let tempDayThree = averageTemp(dayThree);
                    let tempDayFour = averageTemp(dayFour);
                    let tempDayFive = averageTemp(dayFive);

                    console.log(tempDayOne);
                    // Inserting temperatures
                    document.getElementById("temp1").innerHTML = tempDayOne + " " + "&#8451";
                    document.getElementById("temp2").innerHTML = tempDayTwo + " " + "&#8451";
                    document.getElementById("temp3").innerHTML = tempDayThree + " " + "&#8451";
                    document.getElementById("temp4").innerHTML = tempDayFour + " " + "&#8451";
                    document.getElementById("temp5").innerHTML = tempDayFive + " " + "&#8451";

                    /* DESCRIPTIONS */
                    // Cutting all descriptions up in the 5 days
                    let descriptionDayOne = beschrijving.slice(0, 8);
                    let descriptionDayTwo = beschrijving.slice(8, 16);
                    let descriptionDayThree = beschrijving.slice(16, 24);
                    let descriptionDayFour = beschrijving.slice(24, 32);
                    let descriptionDayFive = beschrijving.slice(32, 40);

                    // Inserting descriptions
                    document.getElementById("description1").innerHTML = descriptionDayOne[3];
                    document.getElementById("description2").innerHTML = descriptionDayTwo[3];
                    document.getElementById("description3").innerHTML = descriptionDayThree[3];
                    document.getElementById("description4").innerHTML = descriptionDayFour[3];
                    document.getElementById("description5").innerHTML = descriptionDayFive[3];
                }
            });
        let inpt = document.getElementById("inp").value;
        let ky = "fb61890e1a785b8d58a331dc8c156528c13123c10adcbda1b81fd451b15523b0";


      fetch('https://api.unsplash.com/search/photos?query='+ inpt + "&client_id="+ky)
            .then((response) => {
                return response.json();

            })
            .then((myJson) => {
                // Background images articles



                // image 1
                let backgroundImage1 = myJson['results'][0]['urls']['regular'];
                document.getElementById("day1").style.backgroundSize = "100% 100%";
                document.getElementById("day1").style.backgroundImage = 'url('+backgroundImage1+')';
                // image 2
                let backgroundImage2 = myJson['results'][1]['urls']['regular'];
                document.getElementById("day2").style.backgroundSize = "100% 100%";
                document.getElementById("day2").style.backgroundImage = 'url('+backgroundImage2+')';
                // image 3
                let backgroundImage3 = myJson['results'][2]['urls']['regular'];
                document.getElementById("day3").style.backgroundSize = "100% 100%";
                document.getElementById("day3").style.backgroundImage = 'url('+backgroundImage3+')';
                // image 4
                let backgroundImage4 = myJson['results'][3]['urls']['regular'];
                document.getElementById("day4").style.backgroundSize = "100% 100%";
                document.getElementById("day4").style.backgroundImage = 'url('+backgroundImage4+')';
                // image 5
                let backgroundImage5 = myJson['results'][4]['urls']['regular'];
                document.getElementById("day5").style.backgroundSize = "100% 100%";
                document.getElementById("day5").style.backgroundImage = 'url('+backgroundImage5+')';


            });


    });



})();