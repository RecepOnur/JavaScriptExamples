const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.textContent = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
  errorDisplay.textContent = "";
};
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const userNameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (userNameValue === "") {
    setError(username, "Username is required!");
  } else {
    setSuccess(username);
  }
  if (emailValue === "") {
    setError(email, "Email is required!");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Enter a valid email!");
  } else {
    setSuccess(email);
  }
  if (passwordValue === "") {
    setError(password, "Password is required!");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 characters");
  } else {
    setSuccess(password);
  }
  if (password2Value === "") {
    setError(password2, "Please confirm your password!");
  } else if (passwordValue !== password2Value) {
    setError(password2, "Passwords doesn't match!");
  } else {
    setSuccess(password2);
  }
};
