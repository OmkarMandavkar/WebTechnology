let ele = document.getElementsByClassName("container");
let div1 = ele[0];

console.log(div1);
ele[0].style.height = "200px";
ele[0].style.width = "200px";
ele[0].style.border = "1px solid black";

let [div] = [...ele];
div.style.background = "hotpink";

let body = document.querySelector("body");
body.style.height = "100vh";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";

//! how to add the child elements in html document:

// div1.innerHTML = `
// <h1>Hello World</h1>
// <p>Paragraph</p>
// <span>Span Content 1</span>
// `;

let h1 = document.createElement("h1");
let p = document.createElement("p");
let span = document.createElement("span");

h1.innerHTML = "hello world";
p.innerText = "paragraph";
span.innerText = "span content 1";

// console.log(h1, p, span);
div1.append(h1, p, span);
// div1.appendChild(h1);
