(() => {
    document.getElementById("run").addEventListener("click", function() {
        let input = document.getElementById("inp").value;
        let key = "3003d915e19a0bfa5f7e8f03edbb51b5"; // empty array for multiple elements;

        fetch('https://api.openweathermap.org/data/2.5/weather?q='+input+'&appid='+key+"&units=metric")

            .then((response)=> {
                return response.json();
            })

            .then((data)=> {







                console.log(data)
            })

    });





})();