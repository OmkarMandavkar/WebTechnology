//! ARRAY HOF

//! find()

let arr = [10, 20, 50, 40, 70, 60];

let fn = (v, i, ar) => {
  console.log(v); // ~ 10 20 50
  return v > 22;
};

let r1 = arr.find(fn);
console.log(r1); //~ 50

//! findIndex()

let r2 = arr.findIndex(function (v, i, arr) {
  return v > 20;
});
console.log(r2); //~ 2

//! filter()

let r3 = arr.filter(function (v, i, arr) {
  return v > 15;
});
console.log(r3); //~ [20, 50, 40, 70, 60]

//! map()
let r4 = arr.map((v, i, arr) => {
  return v + 15;
});
console.log(r4); //~ [25, 35, 65, 55, 85, 75]

//! some()
let r5 = arr.some(function (v, i, arr) {
  return v > 15;
});
console.log(r5); //~ true

//! every()
let r6 = arr.every(function (v, i, arr) {
  return v > 1;
});
console.log(r6); //~ true

//! forEach()
arr.some((v, i, arr) => {
  console.log(v, i, arr);
});

//! find()
let r7 = arr.reduce(function (acc, cv) {
  //   console.log(acc);
  //   console.log(cv);
  return acc + cv;
}, 10);
console.log(r7); //~ 260

//! reduceRight()
let r8 = arr.reduceRight(function (acc, cv) {
  //   console.log(acc);
  //   console.log(cv);
  return acc + cv;
}, 10);
console.log(r8); //~ 260
