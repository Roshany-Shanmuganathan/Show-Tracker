const form = document.getElementById("myForm");
// Get input value
const showName = document.getElementById("tv-show-name").Value.trim();
// Get show field
const tvShow = document.getElementsByClassName("tvShow");
// valid Regex
const nameRegex = /^[a-zA-Z]$/;
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = true;
  if (!nameRegex.test(showName)) {
    tvShow.innerText = "Invalid tv show name";
    tvShow.style.display = "block";
    tvShow.className = "error";
    isValid = false;
    tvShow.style.display = "none";
  } else {
    tvShow.innerText = `"${showName}"has been added`;
    tvShow.style.display = "block";
    tvShow.className = "success";

    form.reset();
  }
});
