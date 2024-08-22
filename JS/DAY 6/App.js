"use strict";

//! variable hoisting
// console.log(b); //? undefined
// console.log(a);
let a = 40;
var b = 90;
const c = 20;
console.log(a, b, c);

demo();
function demo() {
  let z = 80;
  var x = 65;
  const y = 12;
  console.log("demo function");
  return 200;
}

/*
p = 2000; //? Uncaught ReferenceError: p is not defined
console.log(p);

//? Uncaught SyntaxError: Duplicate parameter name not allowed in this context
function f1(n, m, m) {
  console.log(n + m);
}

f1(10, 20, 30);
*/

//! WINDOW

console.log(window);
console.log(this);
console.log(window == this);

// alert("alert popup");

var x1 = 20;
let x2 = 10;
const x3 = 30;

function f2() {
  var x1 = 100;
  console.log(x1);
  console.log(this.x1);
  console.log(window.x1);
}
f2();

//! TYPES OF FUNCTION

const fx = function () {
  //? Function with Expression
  let y1 = 10;
  console.log(this);
  return 100;
};
fx();

function f3(z1 = 100, z2 = 300) {
  console.log(z1);
  console.log(z2);
}
f3("str", true);
