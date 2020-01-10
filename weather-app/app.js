(() => {
    // your code here
let lala =
    fetch('https://api.openweathermap.org/data/2.5/weather?id=6167865&appid={3003d915e19a0bfa5f7e8f03edbb51b5}')

        .then(function (link) {
            return link.json();
        })

        .then(function (data) {

console.log(data)

        })
})();