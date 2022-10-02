var tableBodyEl = document.getElementById("tablebody")
var filmColEl = document.getElementById("filmCol")

var nowPlayingContainer = document.getElementById("carousel-nowplaying")
var modalDesCont = document.getElementById("modalDesCont")
var modalContainer = document.getElementById("containerForModals")

var localQuery = "https://api.themoviedb.org/3/movie/now_playing?api_key=7ea50f67c90ee9445e3909943a9fd7a9" + "&language=en-US&page=1"

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


for (var i = 0; i < 10; i++) {

    // CREATE MOVIE CARDS
  
    var carCardEl = document.createElement("div")
    carCardEl.classList.add("card");
  
    var cardImgEl = document.createElement("div")
    cardImgEl.classList.add("card-image");
  
    var figureEl = document.createElement("figure")
    figureEl.classList.add("image", "is-4by5");
  
    var imgEl = document.createElement("img")
    imgEl.setAttribute("alt", "Movie Poster");
    imgEl.classList.add("movieImgResult")
    
    var cardContentEl = document.createElement("div")
    cardContentEl.classList.add("card-content");
  
    var titleEL = document.createElement("p")
    titleEL.classList.add("title", "is-6", "movieTitleResult");
   
  
    var buttonGroupDV = document.createElement("div")
    buttonGroupDV.classList.add("buttons", "is-flex-wrap-nowrap", "is-justify-content-center");
    
    var addBtnEl = document.createElement("button")
    addBtnEl.classList.add("button", "is-primary");
    addBtnEl.setAttribute("id", "addBtn");
  
    var addBtnSym = document.createElement("span")
    addBtnSym.classList.add("material-symbols-outlined");
    addBtnSym.innerHTML = "add_circle";
    
  
    var likeBtnEl = document.createElement("button")
    likeBtnEl.classList.add("button", "is-primary");
    likeBtnEl.setAttribute("id", "likeBtn");
  
    var likeBtnSym = document.createElement("span")
    likeBtnSym.classList.add("material-symbols-outlined");
    likeBtnSym.innerHTML = "favorite";
  
    var descriptionBtnEl = document.createElement("button")
    descriptionBtnEl.classList.add("js-modal-trigger", "button", "is-primary");
    descriptionBtnEl.setAttribute("data-target", "movie-modal-" + i);
  
    var descriptionBtnSym = document.createElement("span")
    descriptionBtnSym.classList.add("material-symbols-outlined");
    descriptionBtnSym.innerHTML = "info";
  
    addBtnEl.append(addBtnSym);
    likeBtnEl.append(likeBtnSym);
    descriptionBtnEl.append(descriptionBtnSym);
  
    buttonGroupDV.append(
      addBtnEl,
      likeBtnEl,
      descriptionBtnEl,
    );
  
    cardContentEl.append(
      titleEL,
      buttonGroupDV,
    );
  
    figureEl.append(imgEl);
    cardImgEl.append(figureEl);
    
    carCardEl.append(
        cardImgEl,
        cardContentEl,    
    );
  
    nowPlayingContainer.append(carCardEl);
  
    // CREATE MOVIE CARD MODALS
    var movieModalEl = document.createElement("div")
    movieModalEl.classList.add("modal");
    movieModalEl.setAttribute("id", "movie-modal-" + i);
  
    var movieModalBackground = document.createElement("div")
    movieModalBackground.classList.add("modal-background");
  
    var movieModalContent = document.createElement("div")
    movieModalContent.classList.add("modal-content");
  
    var movieModalCard = document.createElement("div")
    movieModalCard.classList.add("card");
  
    var movieModalCardContent = document.createElement("div")
    movieModalCardContent.classList.add("card-content");
  
    var movieModalContentDes = document.createElement("p")
    movieModalContentDes.classList.add("content", "modalDesResult");
  
  
    var movieModalCloseBtn = document.createElement("button")
    movieModalCloseBtn.classList.add("modal-close", "is-large");
    movieModalCloseBtn.setAttribute("aria-label", "close");
  
    movieModalCardContent.append(movieModalContentDes);
    movieModalCard.append(movieModalCardContent);
    movieModalContent.append(movieModalCard);
  
  
    movieModalEl.append(
      movieModalBackground,
      movieModalContent,
      movieModalCloseBtn,
    );
  
    modalContainer.append(movieModalEl);
  
    
};

var imgElResultGroup = document.getElementsByClassName("movieImgResult");
var titleELResultGroup = document.getElementsByClassName("movieTitleResult")
var modalDesResultGroup = document.getElementsByClassName("modalDesResult")

function getTrending() {
  console.log(localQuery);

  fetch(localQuery)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
   

    for (var i = 0; i < 15; i++) {

     
     
      imgElResultGroup[i].setAttribute("src", "https://image.tmdb.org/t/p/w500/" + data.results.cinemas[i].poster_path);
     
      titleELResultGroup[i].textContent = data.results[i].original_title;

      
      modalDesResultGroup[i].textContent = data.results[i].overview;

     
    }
  });
  
};

getTrending();


//TRENDING CAROUSEL
bulmaCarousel.attach('#carousel-nowplaying', {
    slidesToScroll: 1,
    slidesToShow: 4,
    infinite: true
});

document.addEventListener('DOMContentLoaded', () => {
    
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;
  
      if (e.keyCode === 27) { // Escape key
        closeAllModals();
      }
    });
  });

