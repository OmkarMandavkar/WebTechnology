//! TYPES OF FUNCTIONS:

//! ARROW FUNCTION:

const ar = () => {
  console.log("start");
  console.log("end");
  return "arrow function";
};

let r1 = ar();
console.log(r1);

// var arr = (v) => console.log("function error");
// arr();

// var f1 = (b) => b + 20;
// function f2(b) {
//   return b + 20;
// }
// console.log(f1(20));

//! HOF: (HIGHER ORDER FUNCTION) AND CALLBACK FUNCTION:

function demo(p, q) {
  p();
  console.log(q);
}

demo(() => console.log("argument function"), 20);

let arr1 = (s, t) => {
  //   console.log(s);
  //   s(10, 20);
};

arr1(function (a, b) {
  console.log(a + b);
  console.log("callback function");
}, 100);
