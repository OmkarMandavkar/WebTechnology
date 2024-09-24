let h1 = document.getElementsByTagName("h1")[0];
h1.setAttribute("class", "main");
// h1.className = "active";

h1.id = "h11";
h1.title = "hello world";

h1.classList.add("demo", "f12", "active", "link");
h1.classList.remove("f12", "link");

let r1 = h1.classList.contains("f12");
console.log(r1);

let r2 = h1.classList.contains("demo");
console.log(r2);

let r3 = h1.classList.toggle("toggle");
console.log(r3);

let r4 = h1.classList.toggle("demo");
console.log(r4);

// div .container style  h200px w400px border 1px]
// p lorem 20

// btn Show id=show
// btn hide onclick

/////////////////////////////////////////////////

let div = document.querySelector(".container");

// div.onclick = () => {
//   console.log(e);
//   let f = e.target;
//   f.style.background = "hotpink";
//   f.style.color = "red";
//   div.style.padding = "20px";
//   console.log("clicked");
// };

// div.addEventListener("click", function (e) {
//   console.log(e);
//   this.style.background = "blue";
//   this.style.color = "#fff";
// });

let show = document.querySelector("#show");
let hide = document.querySelector("#hide");
let tog = document.querySelector("#toggleBtn");

show.addEventListener("click", (e) => (div.style.visibility = "visible"));
hide.addEventListener("click", (e) => (div.style.visibility = "hidden"));

// Toggle.addEventListener("click", (e) => {
//   if (div.style.visibility == "hidden") {
//     div.style.visibility = "visible";
//   } else {
//     div.style.visibility = "hidden";
//   }
// });
