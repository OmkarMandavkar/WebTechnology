//! STATIC METHODS IN ARRAY:

let n = 100;
let ar = [30, 20, 10];
let obj = { name: "xyz" };

console.log(typeof n); //~ number
console.log(typeof ar); //~ object
console.log(typeof obj); //~ object

console.log(Array.isArray(n)); //~ false
console.log(Array.isArray(ar)); //~ true
console.log(Array.isArray(obj)); //~ false

//! NON STATIC METHODS IN ARRAY:

//^ push
let arr = [20, 30];
let r1 = arr.push(40, 10, 70); //*returns the new length of the array
console.log(r1); //~ 5

//^ unshift
arr.unshift("str", 100n, true);
console.log(arr); //~ ['str', 100n, true, 20, 30, 40, 10, 70]

//^ pop
let arr1 = [90, 80, 70, 10, 20];
// arr1.pop();
// arr1.pop();
// let r2 = arr1.pop();
// console.log(r2);

//^ shift
arr1.shift();
let r3 = arr1.shift();
console.log(r3); //~ 80
console.log(arr1); //~ [70, 10, 20]

//^ slice
let arr2 = ["str", true, [30], 1n, undefined, { name: "sukhoi" }, 100, "js"];
let newAr1 = arr2.slice(2, 5);
console.log(newAr1); //~[Array(1), 1n, undefined]
console.log(arr2); //~ ['str', true, Array(1), 1n, undefined, {…}, 100, 'js']

let newAr2 = arr2.slice(5);
console.log(newAr2); //~  [{…}, 100, 'js']

let newAr3 = arr.slice(-3, -1);
console.log(newAr3); //~ [40, 10]

//^ splice //!important

let arr3 = [20, 30, "js", () => "arr", 10n, false];
let r4 = arr3.splice(2, 0, "react", "java", "php");
console.log(r4); //~ []

console.log(arr3.length); //~ 9
console.log(arr3); //~ [20, 30, 'react', 'java', 'php', 'js', ƒ, 10n, false]

//^ splice
let arr4 = [
  "str1",
  undefined,
  true,
  [30],
  1n,
  true,
  undefined,
  { name: "xyz" },
  100,
  "js",
];
let x1 = arr4.indexOf(true, 2);
console.log(x1); //~ 2

let x2 = arr4.lastIndexOf(undefined, 5);
console.log(x2); //~ 1

let a = [10, 20];
let b = [30, 40];
let c = [50, 60];

let x3 = c.concat(b, a);
console.log(x3); //~ [50, 60, 30, 40, 10, 20]

//^ flat() //!important

let p = [10, 20, [30, [40, [100, 200], 50], 60]];
let res1 = p.flat(3);
console.log(res1); //~ [10, 20, 30, 40, 100, 200, 50, 60]
