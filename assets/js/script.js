var movieAPIKEY = "7ea50f67c90ee9445e3909943a9fd7a9"
var nowPlayBtn = document.getElementById("nowPlayingBtn")

//Click "Now Playing Near Me" button to be redirected to Now Playing Page
function toNowPlaying(event) {
    location.assign("./nowPlayingPage.html")
}

nowPlayBtn.addEventListener("click", toNowPlaying)


function searchMovie(movie) {
    fetch("http://www.omdbapi.com/?s=" + movie + "&apikey=294c5c8e")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.Search[0].Title);
        console.log(data.Search[0].Year);
        console.log(data.Search[0].Poster);
  
        document.getElementById("poster").src = data.Search[0].Poster;
      });
  }
  //<img id="poster" src="" alt="Trulli" width="500" height="333" />//
