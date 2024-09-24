let h1 = document.querySelector("h1");
let p = document.querySelector("p");

h1.setAttribute("title", "Javascript");
p.setAttribute("class", "demo");

let user = document.querySelector("#username");
let pass = document.querySelector("#password");

user.setAttribute("placeholder", "Enter username");
pass.setAttribute("placeholder", "Enter password");

// user.setAttribute("required");

user.setAttribute("required", "");
pass.setAttribute("required", "");

let type = pass.getAttribute("class");

h1.removeAttribute("style");

let r1 = user.hasAttribute("required");
console.log(r1);
console.log(p.hasAttribute("title"));
