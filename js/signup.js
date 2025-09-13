const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = true;

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Get error fields
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  // Name validation
  const nameRegex = /^[A-Za-z]{4,}$/;
  if (name === "") {
    nameError.innerText = "Name is required.";
    nameError.style.display = "block";
    isValid = false;
  } else if (!nameRegex.test(name)) {
    nameError.innerText =
      "Name must be at least 4 letters and contain only alphabets";
    nameError.style.display = "block";
    isValid = false;
  } else {
    nameError.style.display = "none";
  }

  // Email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email === "") {
    emailError.innerText = "Email is required.";
    emailError.style.display = "block";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.innerText = "Please enter a valid email.";
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  // Password validation
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z\d!@#$^&*]{8,}$/;
  if (password === "") {
    passwordError.innerText = "Password is required";
    passwordError.style.display = "block";
    isValid = false;
  } else if (!passwordRegex.test(password)) {
    passwordError.innerText = "Invalid password ";
    passwordError.style.display = "block";
    isValid = false;
  } else {
    passwordError.style.display = "none";
  }

  // If everything is valid
  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});
