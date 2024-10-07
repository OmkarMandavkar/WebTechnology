//! DATE OBJECT AND METHODS
/*
let x = new Date();
console.log(x.getFullYear()); //~ 2024
console.log(x.getMonth()); //~ 9
console.log(x.getDate()); //~11
console.log(x.getDay()); //~ 3
console.log(x.getHours()); //~19
console.log(x.getMinutes()); //~42
console.log(x.getSeconds()); //~38
console.log(x); //~ Wed Sep 11 2024 19:44:00 GMT+0530 (India Standard Time)

let y = new Date();
y.setFullYear(1999);
y.setMonth(4);
y.setDate(12);
y.setHours(10, 59, 30);
y.setMinutes(20);
y.setSeconds(36);
console.log(y); //~ Wed May 12 1999 10:20:36 GMT+0530 (India Standard Time)
*/

//! MATH OBJECT AND METHODS
/*
let z = new Math(); //* Uncaught TypeError: Math is not a constructor

console.log(Math.round(2.5)); //3
console.log(Math.round(3.4)); //3
console.log(Math.round(-1.5)); //-1
console.log(Math.round(-3.7)); //-4
console.log(Math.round(-9.35)); //-9

console.log(Math.ceil(7.6)); //8
console.log(Math.ceil(5.1)); //6
console.log(Math.ceil(-1.6)); //-1

console.log(Math.floor(10.75)); //10
console.log(Math.floor(-7.9)); //-8

console.log(Math.trunc(-10.3)); //-10
console.log(Math.trunc(100.34)); //100
*/

//! HOW TO CREATE RANDOM NUMBER WITHIN GIVEN RANGE
/*
console.log(Math.random()); //0.7094612369981179

let random = Math.random() * (9999 - 1000) + 1000;
console.log(Math.trunc(random)); //5361
*/

//! REST PARAMETER AND SPREAD OPERATOR

/*
const arr = (a, b, ...c) => {   //Rest Operator
  console.log("start");
  console.log(a); //~ 10
  console.log(b); //~ 20
  console.log(c); //~ [30, 40, 50, 60, 70]
};

arr(10, 20, 30, 40, 50, 60, 70);

let str = "javascript"; //String spread
console.log(...str); //~ j a v a s c r i p t

let ar = [10, 20, 30, 40, 50]; //Array spread
console.log(...ar); //~ 10 20 30 40 50

console.log([...str]); //~ ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
console.log([str]); //~ ['javascript']

let x = [10, 20];
let y = [30, 40];
let z = [50, 60];

let res = [...x, ...y, ...z]; //Spreading into Arrays
console.log(res); //~ [10, 20, 30, 40, 50, 60]
*/

//! ARRAY DESTRUCTURING
/*
var a = [300, 400, 500, 100, 200, 800];
const [p, q, r] = a;
console.log(p); //~ 300
console.log(q); //~ 400
console.log(r); //~ 500
*/

//! OBJECT DESTRUCTURING
/*
const o = { name: "xyz", id: 121 };
o.id = 900;
console.log(o);
console.log(o.id);
console.log(o.name);
*/

//! OBJECT METHODS IN JS
/*
//~ Object.freeze()
const obj = { name: "Alice" };
Object.freeze(obj);

obj.name = "Bob"; // This will not work
obj.age = 25; // This will not work

console.log(obj); // Output: { name: "Alice" }

//~ Object.isFrozen()
const obj = { name: "Alice" };
Object.freeze(obj);
console.log(Object.isFrozen(obj)); // Output: true

//~ Object.seal()
const obj = { name: "Alice" };
Object.seal(obj);
obj.name = "Bob"; // This will work
obj.age = 25; // This will not work
delete obj.name; // This will not work
console.log(obj); // Output: { name: "Bob" }

//~ Object.isSealed()
const obj = { name: "Alice" };
Object.seal(obj);
console.log(Object.isSealed(obj)); // Output: true

//~ Object.assign()
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // Output: { a: 1, b: 2, c: 3 }

//~ Object.keys()
const obj = { name: "Alice", age: 25 };
console.log(Object.keys(obj)); // Output: ["name", "age"]

//~ Object.values()
const obj = { name: "Alice", age: 25 };
console.log(Object.values(obj)); // Output: ["Alice", 25]

//~ Object.entries()
const obj = { name: "Alice", age: 25 };
console.log(Object.entries(obj)); // Output: [["name", "Alice"], ["age", 25]]
*/

//! JSON.stringify() and JSON.parse()

const obj1 = { name: "Alice", age: 25, skills: ["JavaScript", "Python"] };

const jsonString1 = JSON.stringify(obj1);
console.log(jsonString1);
// Output: '{"name":"Alice","age":25,"skills":["JavaScript","Python"]}'

const jsonString2 =
  '{"name":"Alice","age":25,"skills":["JavaScript","Python"]}';

const obj2 = JSON.parse(jsonString2);
console.log(obj2);
// Output: { name: 'Alice', age: 25, skills: [ 'JavaScript', 'Python' ] }

//! SHALLOW COPY AND DEEP COPY

