// var movieQuery = "https://api.themoviedb.org/3/movie/{movie_id}?api_key=7ea50f67c90ee9445e3909943a9fd7a9&language=en-US"
var toWatchArr = []
var toWatchContainer = document.getElementById("toWatchContainer")

toWatchArr = JSON.parse(localStorage.getItem("watchList")) || [];

console.log(toWatchArr);

function getMovieDetails() {
    
    for ( var i = 0; i <toWatchArr.length; i++) {
        var movieQuery = "https://api.themoviedb.org/3/movie/" + toWatchArr[i] + "?api_key=7ea50f67c90ee9445e3909943a9fd7a9&language=en-US"


        fetch(movieQuery)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);

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
            imgEl.setAttribute("src", "https://image.tmdb.org/t/p/w500/" + data.poster_path);

            var cardContentEl = document.createElement("div")
            cardContentEl.classList.add("card-content");

            var titleEL = document.createElement("p")
            titleEL.classList.add("title", "is-6", "movieTitleNP");
            titleEL.textContent = data.original_title;

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

            toWatchContainer.append(cardColEl);

        })
    }
    
};

getMovieDetails();