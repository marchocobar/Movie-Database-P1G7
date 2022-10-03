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

      modalDesResultGroup[i].textContent = data.results[i].overview;
     
    }
  });
  resultsSection.classList.remove("hidden")
};

searchBtn.addEventListener("click", getSearches);

// for (var i = 0; i < 8; i++) {
//   var carouselCard = document.createElement("div")
//   carouselCard.classList.add("card");
  
//   var carouselCardImgContGp = document.createElement("div")
//   carouselCardImgContGp.classList.add("card-image");

//   var carouselFigureEl = document.createElement("figure")
//   carouselFigureEl.classList.add("image", "is-4by5");

//   var carouselImgEl = document.createElement("img")
//   carouselImgEl.classList.add("trendingImage")
//   carouselImgEl.setAttribute("alt", "Movie Poster")
//   carouselFigureEl.append(carouselImgEl);

//   var carouselCardContGp = document.createElement("div")
//   carouselCardContGp.classList.add("card-content");

//   var carouselMovieTitleEl = document.createElement("p")
//   carouselMovieTitleEl.classList.add("title", "is-6", "trendingTitle");

//   var carouselBtnGp = document.createElement("div")
//   carouselBtnGp.classList.add("buttons", "is-flex-wrap-nowrap", "is-justify-content-center");

//   //ADD BUTTON SECTION
//   var carouselAddBtn = document.createElement("button")
//   carouselAddBtn.classList.add("button", "is-primary")
//   carouselAddBtn.setAttribute("id", "addBtn")

//   var carouselAddBtnSpan = document.createElement("span")
//   carouselAddBtnSpan.classList.add("material-symbols-outlined");
//   carouselAddBtnSpan.innerHTML = "add_circle";
//   carouselAddBtn.append(carouselAddBtnSpan);
  
//   //LIKE BUTTON SECTION
//   var carouselLikeBtn = document.createElement("button")
//   carouselLikeBtn.classList.add("button", "is-primary");
//   carouselLikeBtn.setAttribute("id", "likeBtn");

//   var carouselLikeBtnSpan = document.createElement("span")
//   carouselLikeBtnSpan.classList.add("material-symbols-outlined");
//   carouselLikeBtnSpan.innerHTML = "favorite";
//   carouselLikeBtn.append(carouselLikeBtnSpan);

//   //DESCRIPTION BUTTON SECTION
//   var carouselDesBtn = document.createElement("button")
//   carouselDesBtn.classList.add("js-modal-trigger", "button", "is-primary")
//   carouselDesBtn.setAttribute("id", "descriptionBtn")
//   carouselDesBtn.setAttribute("data-target", "trending-modal-" + i)
//   // modalDesResultGroup[i].textContent = data.results[i].overview;

//   var carouselDesBtnSpan = document.createElement("span")
//   carouselDesBtnSpan.classList.add("material-symbols-outlined");
//   carouselDesBtnSpan.innerHTML = "info";
//   carouselDesBtn.append(carouselDesBtnSpan);
    
//   carouselCardImgContGp.append(
//     carouselFigureEl,
//   );

//   carouselBtnGp.append(
//     carouselAddBtn,
//     carouselLikeBtn,
//     carouselDesBtn,
//   );

//   carouselCardContGp.append(
//     carouselMovieTitleEl,
//     carouselBtnGp,
//   );
  

//   carouselCard.append(
//     carouselCardImgContGp,
//     carouselCardContGp,
//   );

//   trendingCarouselContainer.append(carouselCard);
// }


// function getTrending() {

//   console.log(trendingQuery);

//   fetch(trendingQuery)
//   .then(function(response){
//     return response.json();
//   })
//   .then(function(data){
//     console.log(data)

//     for (var i = 0; i < 10; i++) {
      
//       imgElTrendingGroup[i].setAttribute("src", "https://image.tmdb.org/t/p/w500/" + data.results[i].poster_path);

      
//       carouselMovieTitleEl.textContent = data.results[i].original_title;
      

//     }
//   });
//   // trendingSection.classList.remove("hidden")
// };

// trendingBtn.addEventListener("click", getTrending)



// //TRENDING CAROUSEL
// bulmaCarousel.attach('#carousel-trending', {
//     slidesToScroll: 5,
//     slidesToShow: 5,
//     infinite: true
// });


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

    





