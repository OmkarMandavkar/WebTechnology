//! REST PARAMETER AND SPREAD OPERATOR

const arr = (a, b, ...c) => {
  console.log("start");
  console.log(a); //~ 10
  console.log(b); //~ 20
  console.log(c); //~ [30, 40, 50, 60, 70]
};

arr(10, 20, 30, 40, 50, 60, 70);

let str = "javascript";
console.log(...str); //~ j a v a s c r i p t

let ar = [10, 20, 30, 40, 50];
console.log(...ar); //~ 10 20 30 40 50

console.log([...str]); //~ ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
console.log([str]); //~ ['javascript']

let x = [10, 20];
let y = [30, 40];
let z = [50, 60];

let res = [...x, ...y, ...z];
console.log(res); //~ [10, 20, 30, 40, 50, 60]

//! DESTRUCTURING

var a = [300, 400, 500, 100, 200, 800];
const [p, q, r] = a;
console.log(p); //~ 300
console.log(q); //~ 400
console.log(r); //~ 500

let id = 1000;
let obj = {
  name: "abc",
  id: 2000,
  skills: ["js", "java", "sql"],
};

console.log(10 === 10); //~ true

let obj1 = { name: "abc" };
let s = { name: "abc" };
console.log(obj1 === s); //~ false

//!
const o = { name: "xyz", id: 121 };
o.id = 900;
console.log(o);

const arr3 = [10, 20, 30];
arr3[1] = 300;
console.log(arr3);
