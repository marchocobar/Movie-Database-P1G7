var movieAPIKEY = "7ea50f67c90ee9445e3909943a9fd7a9"
var nowPlayBtn = document.getElementById("nowPlayingBtn")

//Click "Now Playing Near Me" button to be redirected to Now Playing Page
function toNowPlaying(event) {
    location.assign("./nowPlayingPage.html")
}

nowPlayBtn.addEventListener("click", toNowPlaying)


bulmaCarousel.attach('#carousel-demo', {
    slidesToScroll: 1,
    slidesToShow: 4,
    infinite: true
  });



    





