const form = document.querySelector("form");
const username = document.querySelector("#userName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#confPassword");

const errors = [];

const showError = (input, msg) => {
  input.classList = "form-control error";
  input.nextElementSibling.innerText = msg;
  console.log(input.nextElementSibling);
  errors.push(input);
};
const showSuccess = (input) => {
  input.classList = "form-control success";
  input.nextElementSibling.innerText = "";
};

const checkRequired = (input) => {
  if (!input.value.trim().length) {
    showError(input, `This field is required`);
  } else {
    showSuccess(input);
  }
};

const checkLength = (input, min, max) => {
  if (input.value.trim().length < min || input.value.trim().length > max) {
    showError(input, `Must be between ${min} and ${max} characters`);
  } else {
    showSuccess(input);
  }
};

const checkEmail = (input) => {
  if (
    !email.value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    showError(input, `Must be a valid email`);
  } else {
    showSuccess(email);
  }
};

const checkMatch = (input1, input2) => {
  if (input1.value !== input2.value || !input2.value.length) {
    showError(input2, `Passwords don't match`);
  } else {
    showSuccess(input2);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  errors.length = 0;

  checkRequired(username);
  checkRequired(email);
  checkRequired(password);
  checkRequired(password2);

  checkLength(username, 5, 10);
  checkLength(password, 8, 15);
  checkEmail(email);
  checkMatch(password, password2);

  console.log(errors);

  if (!errors.length) {
    username.value = "";
    email.value = "";
    password.value = "";
    password2.value = "";

    console.log({
      username: username.value,
      email: email.value,
      password: password.value,
    });
  }
});
