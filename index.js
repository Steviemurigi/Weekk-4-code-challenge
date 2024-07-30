const movieList = document.getElementById ("movies");
const movieDetails = document.getElementsByClassName("movieDeatils");
const moviePoster = document.getElementById("poster");
const movieTitle = document.getElementById("title");
const movieRuntime = document.getElementById("runtime");
const movieShowtime = document.getElementById("showtime");
const availableTickets = document.getElementById("tickets")

const moviesBnUrl = http://localhost:3000/movies

//function to fetch first movie

function fetchFirstMovie(){
  fetch(`${moviesBnUrl}/1`)
  .then(response => response.json())
  .then(movie => {
    if (!movie.soldtickets){
        movie.soldtickets = 0;
    }
    displayMovieDetails(movie);
  })
}

//function to fetch all movies

function fetchAllMovies(){
  fetch(moviesBnUrl)
  .then(response => response.json())
  .then(movies => {
    movieList.textcontent = "";
    movies.forEach(movie =>{
      const movieListItem = document.createElement('li');
      movieListItem.textContent = movie.title;
      movieListItem.className = "movie-item";
      movieListItem.addEventListener('click', () => {
        displayMovieDetails(movie);
        buyTicketBtn.onclick = () => buyTicketHandler (film)
      });
      movieList.appendChild(movieListItem)
    })
  })
}

function displayMovieDetails(movie){
  moviePoster.src = movie.poster;
  movieTitle.textContent = movie.title;
  movieRuntime.textContent = `Runtime: ${movie.runtime} minutes`;
  movieShowtime.textcontent = `Showtime: ${movie.showtime}`;
  availableTickets.textcontent = ``

}