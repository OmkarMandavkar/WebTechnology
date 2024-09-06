//! includes() and fill()

let arr = [10, 20, 30, 40, 50, 60, 990, 100];

let r1 = arr.includes(40, 1);
console.log(r1);

// let r2 = arr.fill(60);
// console.log(r2);

let r3 = arr.fill(60, 2, 6);
console.log(r3);

let r4 = arr.reverse();
console.log(r4);

let a = [20, "str", [90, 70], { name: "value" }, null, undefined];
console.log(a);

//^ sort()
let fruits = ["mango", "apple", "banana", "9watermelon", "Grapes", "Orange"];
console.log(fruits);

let a1 = [20, 100, 4, 9, 110, 1100, 2];
a1.sort(function (m, n) {
  return m - n;
});
console.log(a1);
// console.log(a1.reverse());

arr.sort((a, b) => {
  if (a > b) return 1;
  else if (b > a) return -1;
  return 0;
});
console.log(a1);
console.log(a1.reverse());

//! STRING METHODS

let str = "javascript";

console.log(str.slice(2, 6)); //~ vasc
console.log(str.slice(-4, -1)); //~ rip
console.log(str.slice(-2)); //~ pt

console.log(str.substring(3, 6)); //~ asc

console.log(str.substr(5, 2)); //~ cr
console.log(str.substr(4)); //~ script

let s1 = "hello world";
console.log(s1.includes("he")); //~ true
console.log(s1.includes(" ", 7)); //~ false
console.log(s1.includes("Hello")); //~ false

console.log(s1.indexOf("l", 5)); //~ 9
console.log(s1.indexOf(" wo")); //~ 5
console.log(s1.lastIndexOf("l", 8)); //~ 3

console.log(s1.toUpperCase()); //~ HELLO WORLD
let s2 = "HELLO WORLD";
console.log(s2.toLowerCase()); //~ hello world

console.log(s2.charAt(6)); //~ W
console.log(s2.charCodeAt(5)); //~ 32
console.log(s2.charCodeAt(0)); //~ 72
console.log(s2.length); //~ 11
