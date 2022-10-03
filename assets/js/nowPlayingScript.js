var localQuery = "https://api.themoviedb.org/3/movie/now_playing?api_key=7ea50f67c90ee9445e3909943a9fd7a9" + "&language=en-US&page=1"
var NowPlayingQuery = "https://api.themoviedb.org/3/movie/now_playing?api_key=7ea50f67c90ee9445e3909943a9fd7a9&language=en-US&page=1"

var nowPlayingContainer = document.getElementById("nowPlayingContainer")
var imgElNPGroup = document.getElementsByClassName("movieImgNP");
var titleElNPGroup = document.getElementsByClassName("movieTitleNP")


var tableBodyEl = document.getElementById("tablebody")
var filmColEl = document.getElementById("filmCol")
var cinemasNearby = {
    "url": "https://api-gate2.movieglu.com/cinemasNearby/?n=5",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "api-version": "v200",
        "Authorization": "Basic RURVQ18xNl9YWDoxSDlzN2JYeUtZS1E=",
        "client": "EDUC_16",
        "x-api-key": "Yzkr0rJSl16Amk6wf3K5j9DT7uLWdEmP6Xat753j",
        "device-datetime": "2022-09-28T12:07:57.296Z",
        "territory": "XX",
        "geolocation": "-22.0;14.0",
    },
};  


$.ajax(cinemasNearby).done(function (response) {
    console.log(response);
    
    for (var i=0; i < response.cinemas.length; i++){
        var tableRowEl = document.createElement("tr")

        var movieNameEl = document.createElement("td")
        movieNameEl.textContent = response.cinemas[i].cinema_name;

        var addressEl = document.createElement("td")
        addressEl.textContent = response.cinemas[i].address;

        var cityEl = document.createElement("td")
        cityEl.textContent = response.cinemas[i].city;

        var stateEl = document.createElement("td")
        stateEl.textContent = response.cinemas[i].state;

        var postcodeEl = document.createElement("td")
        postcodeEl.textContent = response.cinemas[i].postcode;

        var distanceEl = document.createElement("td")
        distanceEl.textContent = response.cinemas[i].distance.toFixed(2);
       

        
        
        tableRowEl.append(
            movieNameEl,
            addressEl,
            cityEl,
            stateEl,
            postcodeEl,
            distanceEl
        );

        tableBodyEl.append(tableRowEl);

    };
});

//Creates Movie Cards for Now Playing
for (var i = 0; i < 10; i++) {

  // CREATE MOVIE CARDS
  var cardColEl = document.createElement("div")
  cardColEl.classList.add("column", "is-one-fifth-desktop", "is-three-quarters-mobile")

  var cardEl = document.createElement("div")
  cardEl.classList.add("card");

  var cardImgEl = document.createElement("div")
  cardImgEl.classList.add("card-image");

  var figureEl = document.createElement("figure")
  figureEl.classList.add("image", "is-4by5");

  var imgEl = document.createElement("img")
  imgEl.setAttribute("alt", "Movie Poster");
  imgEl.classList.add("movieImgNP");
 
  
  var cardContentEl = document.createElement("div")
  cardContentEl.classList.add("card-content");

  var titleEL = document.createElement("p")
  titleEL.classList.add("title", "is-6", "movieTitleNP");
 
  cardContentEl.append(
    titleEL,
  );

  figureEl.append(imgEl);
  cardImgEl.append(figureEl);
  
  cardEl.append(
      cardImgEl,
      cardContentEl,    
  );

  cardColEl.append(cardEl);

  nowPlayingContainer.append(cardColEl);
  
};

function getNowPlaying() {
  console.log(NowPlayingQuery);

  fetch(NowPlayingQuery)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    for (var i =0; i< 10; i++){
      imgElNPGroup[i].setAttribute("src", "https://image.tmdb.org/t/p/w500/" + data.results[i].poster_path);

      titleElNPGroup[i].textContent = data.results[i].original_title;

    }

  })
}

getNowPlaying();