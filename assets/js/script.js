//MOVIE DB API
var movieAPIKEY = "7ea50f67c90ee9445e3909943a9fd7a9"
var searchQuery = "https://api.themoviedb.org/3/search/movie?api_key=" + movieAPIKEY + "&language=en-US&page=1" + "&query="
var trendingQuery = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + movieAPIKEY +
"&language=en-US&page=1"

//NOW PLAYING 
var nowPlayBtn = document.getElementById("nowPlayingBtn")

//SEARCH + SEARCH RESULT

var searchBtn = document.getElementById("searchBtn")
var searchResCol= document.getElementById("searchResCol")
var searchedMovieInput = document.getElementById("searchedmovie") 

var resultsSection = document.getElementById("resultsSection")
var imgElResultGroup = document.getElementsByClassName("movieImgResult");
var titleELResultGroup = document.getElementsByClassName("movieTitleResult")
var modalDesResultGroup = document.getElementsByClassName("modalDesResult")

var addBtnGroup = document.getElementsByClassName("btnAdd")
var addSpnGroup  = document.getElementsByClassName("spnAdd")

var likeBtnGroup = document.getElementsByClassName("btnLike")
var likeSpnGroup = document.getElementsByClassName("spnLike")


var watchListArr= []
var favoriteListArr = []


//TRENDING CAROUSEL ELEMENTS
var trendingBtn = document.getElementById("trendingBtn")
var trendingSection = document.getElementById("trendingSection")

var trendingCarouselContainer = document.getElementById("carousel-trending")
var trendingModalContainer = document.getElementById("containerForTrendingModals")

var imgElTrendingGroup = document.getElementsByClassName("trendingImage");
var titleELTrendingGroup = document.getElementsByClassName("trendingTitle")
var modalDesTrendingGroup = document.getElementsByClassName("trendingDesModal") 

var modalContainer = document.getElementById("containerForModals")

//Click "Now Playing Near Me" button to be redirected to Now Playing Page
function toNowPlaying(event) {
    location.assign("./nowPlayingPage.html")
}

nowPlayBtn.addEventListener("click", toNowPlaying)

// Search Results

//Creates Movie Cards for Search Results
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
  imgEl.classList.add("movieImgResult")
 
  
  var cardContentEl = document.createElement("div")
  cardContentEl.classList.add("card-content");

  var titleEL = document.createElement("p")
  titleEL.classList.add("title", "is-6", "movieTitleResult");
 

  var buttonGroupDV = document.createElement("div")
  buttonGroupDV.classList.add("buttons", "is-flex-wrap-nowrap", "is-justify-content-center");
  
  var addBtnEl = document.createElement("button")
  addBtnEl.classList.add("js-modal-trigger", "button", "is-primary", "btnAdd");
  addBtnEl.setAttribute("data-target", "added-modal");

  var addBtnSym = document.createElement("span")
  addBtnSym.classList.add("js-modal-trigger","material-symbols-outlined", "spnAdd");
  addBtnSym.innerHTML = "add_circle";
  addBtnEl.setAttribute("data-target", "added-modal");
  

  var likeBtnEl = document.createElement("button")
  likeBtnEl.classList.add("js-modal-trigger","button", "is-primary", "btnLike");
  likeBtnEl.setAttribute("data-target", "added-modal");
  

  var likeBtnSym = document.createElement("span")
  likeBtnSym.classList.add("js-modal-trigger","material-symbols-outlined", "spnLike");
  likeBtnSym.innerHTML = "favorite";
  addBtnEl.setAttribute("data-target", "added-modal");

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
  
  cardEl.append(
      cardImgEl,
      cardContentEl,    
  );

  cardColEl.append(cardEl);

  searchResCol.append(cardColEl);

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



function getSearches() {
  query = searchQuery + encodeURI(searchedMovieInput.value)
  console.log(query);

  fetch(query)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
   

    for (var i = 0; i < 10; i++) {
     
      imgElResultGroup[i].setAttribute("src", "https://image.tmdb.org/t/p/w500/" + data.results[i].poster_path);

      titleELResultGroup[i].textContent = data.results[i].original_title;

      addBtnGroup[i].setAttribute("data-watchID", data.results[i].id);
      addSpnGroup[i].setAttribute("data-watchID", data.results[i].id);

      likeBtnGroup[i].setAttribute("data-favoriteID", data.results[i].id);
      likeSpnGroup[i].setAttribute("data-favoriteID", data.results[i].id);
      

      modalDesResultGroup[i].textContent = data.results[i].overview;
     
    }

    document.addEventListener("click", (event)=>{

      if (event.target.getAttribute("data-watchID")){
       var watchMovieID = event.target.getAttribute("data-watchID")
    
        if (!watchListArr.includes(watchMovieID)){
          watchListArr.push(watchMovieID);
        };


        localStorage.setItem("watchList", JSON.stringify(watchListArr));
      
      } else if (event.target.getAttribute("data-favoriteID")) {
        var favoriteMovieID = event.target.getAttribute("data-favoriteID")
       

        if (!favoriteListArr.includes(favoriteMovieID)){
          favoriteListArr.push(favoriteMovieID);
        };

        localStorage.setItem("favoriteList", JSON.stringify(favoriteListArr));
       

      }else {
        return
      };
      
    
    });

  });
  resultsSection.classList.remove("hidden")

   
};

searchBtn.addEventListener("click", getSearches)


// MODALS

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

// Hamburger Menu
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
});

var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var loginButton = document.querySelector("#log-in")
var msgDiv = document.querySelector("#msg");

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}
   
signUpButton.addEventListener("click", function(event) {
    event.preventDefault();
  
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
  
    if (email === "") {
      displayMessage("error", "Email cannot be blank");
    } else if (password === "") {
      displayMessage("error", "Password cannot be blank");
    } else {
      displayMessage("success", "Registered successfully");
  
      window.localStorage.setItem("email", JSON.stringify(email));
      window.localStorage.setItem("password", JSON.stringify(password));
    }
});
    


loginButton.addEventListener("click", function(event) {
    event.preventDefault();
     JSON.parse(window.localStorage.getItem("email"));
    JSON.parse(window.localStorage.getItem("password"));

    if (emailInput === "email" && passwordInput === "password") {
      displayMessage("Successfully Logged In");
    } else {
      displayMessage("Incorrect email or password")
    }
});
