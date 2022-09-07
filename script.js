let myLibrary = new Array();

//Sample Date
let test1 = new Movie("Title1", "Director1", 2000, true);
let test2 = new Movie("Title2", "Director2", 2000, false);
let test3 = new Movie("Title3", "Director3", 2000, true);
addMovieToLibrary(test1);
addMovieToLibrary(test2);
addMovieToLibrary(test3);

console.log(typeof myLibrary);

myLibrary.forEach(movie => {
  console.log(movie.title);
  console.log(movie.toString());
});

displayMovies();

//Get Elements from DOM
let titleShowcase = document.querySelector(".collection");

//Movie Object
function Movie(title, director, year, watched) {
  this.title = title;
  this.director = director;
  this.year = year;
  this.watched = watched;
}

Movie.prototype.toString = function () {
  return this.title + " \nDirected by:" + this.director + " \nRelease in:" + this.year + "\n";
}

//Logical Functions
function addMovieToLibrary(newMovie) {
  for (let movie of myLibrary) {
    if (movie.title == newMovie.title) {
      return false;
    }
  }
  myLibrary[myLibrary.length] = newMovie;
  return true;
}

function displayMovies() {
  for (let movie of myLibrary) {
    console.log(makeMovieTitle(movie));
    //titleShowcase.appendChild(makeMovieTitle(movie));
  }
}

/*
<div class="movie">
            <div class="title">The Man Who Laughs</div>
            <div class="director">Paul Leni</div>
            <div class="year">1928</div>
            <input type="checkbox" class="watched" name="watched" checked>
            <label for="watched" class="watchedLabel">Watched</label>
            <br>
            <button class="remove">Remove</button>
        </div>
*/
function makeMovieTitle(movie) {
  let movieDiv = document.createElement("div");
  movieDiv.classList.add("movie");

  let titleDiv = document.createElement("div");
  titleDiv.classList.add("title");
  titleDiv.textContent = movie.title;
  movieDiv.appendChild(titleDiv);

  let directorDiv = document.createElement("div");
  directorDiv.classList.add("director");
  directorDiv.textContent = movie.director;
  movieDiv.appendChild(directorDiv);

  let yearDiv = document.createElement("div");
  yearDiv.classList.add("year");
  yearDiv.textContent = movie.year;
  movieDiv.appendChild(yearDiv);

  let watchedCheckBox = document.createElement("input");
  watchedCheckBox.classList.add("watched");
  if (movie.watched)
    watchedCheckBox.checked = true;
  movieDiv.appendChild(watchedCheckBox);

  let watchedLabel = document.createElement("label");
  watchedLabel.id = ("watchedLabel");
  //watchedLabel.("watched");
  watchedLabel.textContent = "Watched";
  movieDiv.appendChild(watchedLabel);

  let br = document.createElement("br");
  movieDiv.appendChild(br);

  let removeButton = document.createElement("button");
  removeButton.classList.add("remove");
  movieDiv.appendChild(removeButton);

  return movieDiv;
}