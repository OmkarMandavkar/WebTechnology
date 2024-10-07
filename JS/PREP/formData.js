let form = document.getElementsByClassName("form-control")[0];
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let percentage = document.querySelector("#percentage");
let email = document.querySelector("#email");
let DOB = document.querySelector("#DOB");
let genderInputs = document.getElementsByName("gender");
let courses = document.getElementsByName("course");

// let genderInputs = document.querySelectorAll('input[name="gender"]');

percentage.addEventListener("input", (e) => {
  document.querySelector(".display-percentage").innerHTML = percentage.value;
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let genderRes;
  Array.from(genderInputs).forEach((radio) => {
    if (radio.checked) {
      genderRes = radio.value;
    }
  });

  let courseRes = [];
  [...courses].map((v) => {
    if (v.checked) courseRes.push(v.value);
  });

  let obj = {
    username: username.value,
    password: password.value,
    percentage: percentage.value,
    email: email.value,
    DOB: DOB.value,
    gender: genderRes,
    courses: courseRes,
  };

  console.log(obj);
});

let formx = document.getElementsByClassName("form-control");

formx.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(formx);
  let finalData = Object.fromEntries(data);
  let courseRes = data.getAll("course");
  finalData.course = courseRes;
  console.log(finalData);
});
