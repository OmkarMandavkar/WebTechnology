let form = document.getElementsByClassName("form-control")[0];
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let percentage = document.querySelector("#percentage");
let email = document.querySelector("#email");
let DOB = document.querySelector("DOB");
let gender = document.querySelector("gender");

// console.log(DOB);
// console.log(gender);

let genderRes;
let courses = document.getElementsByName("course");
let courseRes = [];

percentage.addEventListener("input", (e) => {
  document.querySelector(".display-percentage").innerHTML = percentage.value;
});

// percentage.addEventListener("change", (e) => {
//   document.querySelector(".display-percentage").innerHTML = percentage.value;
// });

form.addEventListener("submit", function (e) {
  //   console.log(e);
  e.preventDefault();
  //   console.log(username.value);
  //   console.log(password.value);
  //   console.log(percentage.value);
  //   console.log(email.value);
  //   console.log(DOB.value);

  Array.from(gender).forEach((v) => {
    if (v.checked) genderRes = v.value;
  });

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
    course: courseRes,
  };

  console.log(obj);
});

///////////////////////////////
let formx = document.getElementsByClassName("form-control");

formx.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(formx);
  let finalData = Object.fromEntries(data);
  let courseRes = data.getAll("course");
  finalData.course = courseRes;
  console.log(finalData);
});
