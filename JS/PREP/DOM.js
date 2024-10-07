//! DOM INBUILT METHODS
let res1 = document.getElementById("main");
console.log(res1);

let res2 = document.getElementsByClassName("art");
console.log(res2);

let res3 = document.getElementsByTagName("h4");
console.log(res3);

let res4 = document.querySelector(".active");
console.log(res4);

let res5 = document.querySelector("#art2");
console.log(res5);

let res6 = document.querySelector("h1");
console.log(res6);

let res7 = document.querySelectorAll(".active");
console.log(res7);

let res8 = document.querySelectorAll("#art2");
console.log(res8);

let res9 = document.querySelectorAll("h1");
console.log(res9);

//! DOM STYLE
let s1 = document.querySelector(".a2"); // No need for [0] here
s1.style.height = "200px";
s1.style.width = "300px";
s1.style.border = "2px solid black";
s1.style.background = "pink";

//! INNNERTEXT AND INNERHTML
let article1 = document.querySelector(".a1");
article1.innerText = "This is changed using innerText";
console.log(article1.innerText);

let article2 = document.getElementById("art2");
article2.innerHTML = "<h2>Updated Title with innerHTML</h2>";
console.log(article2.innerHTML);

//! CREATE ELEMENT --> APPEND AND APPENDCHILD
let newArticle = document.createElement("article");
let n1 = document.createElement("h1");
let n2 = document.createElement("p");
let n3 = document.createElement("h5");

n1.innerText = "h1 executed";
n2.innerText = "p executed";
n3.innerText = "h5 executed";

newArticle.appendChild(n1);
newArticle.append(n2, n3);

let adder = document.querySelector("#art2");
adder.appendChild(newArticle);

//! ATTRIBUTE METHODS IN DOM
newArticle.setAttribute("class", "article2");
newArticle.setAttribute("id", "articledel");

let res10 = newArticle.getAttribute("class");
console.log(res10);

newArticle.removeAttribute("id");

let res11 = newArticle.hasAttribute("id");
console.log(res11);

//! CLASSLIST PROPERTY IN DOM
let t1 = document.getElementsByTagName("h4")[0];
// t1.setAttribute("class", "main");

t1.classList.add("demo", "f12", "active", "link");

t1.classList.remove("f12", "link");

let res12 = t1.classList.contains("active");
console.log(res12);

let res13 = t1.classList.toggle("toggle");
console.log(res13);

let res14 = t1.classList.toggle("active");
console.log(res14);

//! DOM EVENTS

//! EVENT PROPERTY
let e1 = document.querySelector(".a3");
e1.style.height = "200px";
e1.style.width = "300px";

// e1.onmouseover = function () {
//   e1.style.background = "lightblue";
// };

// e1.onmouseout = function () {
//   e1.style.background = "";
// };

let e2 = document.querySelector(".a4");
e1.style.height = "100px";
e1.style.width = "300px";

e2.onclick = function () {
  e2.style.background = "lightgrey";
};

//! ADDEVENTLISTENER
e1.addEventListener("mouseover", (e) => {
  e1.style.background = "hotpink";
});

e1.addEventListener("mouseout", (e) => {
  e1.style.background = "";
});

//! KEYBOARD EVENT
let text1 = document.querySelector("#t1");
text1.addEventListener("keyup", function (e) {
  console.log(e);
});

let text2 = document.querySelector("#t2");
text2.addEventListener("keydown", function (e) {
  console.log(e);
});

let text3 = document.querySelector("#t3");
text3.addEventListener("keypress", function (e) {
  console.log(e);
});
