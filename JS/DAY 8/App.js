//! IMMEDIATE INVOKE FUNCTION EXPRESSION

var a = 20;
console.log(a);

(function () {
  let a = 300;
  console.log(a);
})();

(function () {
  const a = 1000;
  console.log(a);
});

//! ARRAY

var arr = [
  10,
  false,
  [20, 30],
  100n,
  null,
  undefined,
  () => {
    console.log("arrow function");
    return "arr";
  },
];

console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[5]);
console.log(arr[2][1]);
console.log(arr[6]());

arr[7] = 10000;
arr[12] = true;
console.log(arr[9]);
console.log(arr[200]);

console.log(arr);

arr[0] = 10000; //?REPLACE
delete arr[3]; //?DELETE
console.log(arr);

//! literal way:

var ar = [10, 20, 30, 40]; //? Homogeneous array
const aar = [false, 1n, null, [10, 20], () => 10, { name: "ac" }]; //? Heterogenous array

//! Using array constructor:

// let a1 = new Array(10, 20, 30);
// console.log(a1);

// let a3 = new Array(10);
// let a3 = new Array("str");
// console.log(a3);

//! using Array.of()

let a2 = Array.of("str", true, null);
console.log(a2);

let a4 = Array.of(10);
console.log(a4);
