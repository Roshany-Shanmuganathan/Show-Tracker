//Genre filteration
function filterGenre(category) {
  const movieShow = document.getElementsByClassName("movieShow");

  for (let i = 0; i < movieShow.length; i++) {
    if (category === "") {
      movieShow[i].style.display = "none";
    } else {
      if (movieShow[i].classList.contains(category)) {
        movieShow[i].style.display = "block";
      } else {
        movieShow[i].style.display = "none";
      }
    }
  }
}
//Alphabet filteration
function filterItem(letter) {
  const name = document.getElementsByClassName("movieShow");

  name.forEach((name) => {
    if (letter === "") {
      movieShow[i].style.display = "none";
    } else if (name.textContent.startsWith(letter)) {
      movieShow[i].style.display = "block";
    } else {
      movieShow[i].style.display = "none";
    }
  });
}
