let form = document.getElementsByClassName("form-control")[0];
let username = document.querySelector("#username");
let password = document.querySelector("#password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(username.value);
  console.log(password.value);
});
