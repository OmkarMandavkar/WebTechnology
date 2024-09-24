// let div = document.querySelector(".container");

div.addEventListener("mouseover", (e) => {
  console.log(e);
  div.style.background = "hotpink";
});

div.onmouseout = function () {
  div.style.background = "pink";
};

let text = document.querySelector("#message");
// text.addEventListener("keyup", function (e) {
//   console.log(e);
// });

// let text = document.querySelector("#message");
// text.addEventListener("keydown", function (e) {
//   console.log(e);
// });

// let text = document.querySelector("#message");
// text.addEventListener("keypress", function (e) {
//   console.log(e);
// });

text.onkeydown = function (e) {
  let random = Math.floor(Math.random() * (9999 - 1000) + 1000);
  document.body.style.background = `#${random}`;
};
