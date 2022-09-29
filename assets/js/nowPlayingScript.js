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

var filmsNowShowing = {
    "url": "https://api-gate2.movieglu.com/filmsNowShowing/?n=5",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "api-version": "v200",
        "Authorization": "Basic RURVQ18xNl9YWDoxSDlzN2JYeUtZS1E=",
        "client": "EDUC_16",
        "x-api-key": "Yzkr0rJSl16Amk6wf3K5j9DT7uLWdEmP6Xat753j",
        "device-datetime": "2022-09-28T12:07:57.296Z",
        "territory": "XX",
    },
};   

$.ajax(filmsNowShowing).done(function (response) {
    console.log(response);
    
    for (var i=0; i < response.films.length; i++){
        
        var cardColEl = document.createElement("div")
        cardColEl.classList.add("column", "is-one-fifth-desktop", "is-three-quarters-mobile")
    
        var cardEl = document.createElement("div")
        cardEl.classList.add("card");

        var cardImgEl = document.createElement("div")
        cardImgEl.classList.add("class", "card-image");

        var figureEl = document.createElement("figure")
        figureEl.classList.add("image", "is-4by5");

        var imgEl = document.createElement("img")
        imgEl.setAttribute("alt", "Movie Poster");
        imgEl.setAttribute("src", response.films[i].images.poster[1].medium.film_image);
       
        var cardContentEl = document.createElement("div")
        cardContentEl.classList.add("card-content");

        var titleEL = document.createElement("p")
        titleEL.classList.add("title", "is-4");
        titleEL.textContent = response.films[i].film_name;

        var ratingEl = document.createElement("p")
        ratingEl.classList.add("subtitle", "is-6");
        ratingEl.textContent = response.films[i].age_rating[0].rating;


        cardImgEl.append(figureEl);
        figureEl.append(imgEl);

        cardContentEl.append(
            titleEL,
            ratingEl,
        )
      
        cardEl.append(
            cardImgEl,
            cardContentEl,    
        );

        cardColEl.append(cardEl);

        filmColEl.append(cardColEl);

    };
});


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



