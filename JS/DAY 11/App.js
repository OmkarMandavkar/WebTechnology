//! LOOPING STATEMENTS:

//& FOR LOOP
for (let i = 1; i < 5; i++) {
  console.log("js: " + i);
}

//& WHILE LOOP
let x1 = 0;
while (x1 < 5) {
  console.log(x1);
  x1++;
}

//& DO WHILE LOOP

let x2 = 1;
do {
  console.log("js: " + x2);
  x2++;
} while (x2 < 6);

let str = "JAVASCRIPT";
let arr = [10, 20, 30, 40, 50];

//&FOR IN LOOP

for (let i in str) {
  console.log(i);
}

for (let i in arr) {
  console.log(i);
}

//&FOR OF LOOP

for (let v of str) {
  console.log(v);
}

for (let v of arr) {
  console.log(v);
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  console.log(i);
}

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
  console.log(i);
}

////////////////////////////////////////

let obj = {
  name: "xyz",
  id: 100,
};

for (let i in obj) {
  console.log(i);
}

//~ Uncaught TypeError: obj is not iterable
// for (let v of obj) {
//   console.log(v);
// }

//~ Object.assign()

let data = {
  name: "xyz",
  id: 123,
  percentage: 56,
};

let address = {
  doorno: 300,
  location: "powai",
  percentage: 90,
};

let demo = {
  key1: "value 1",
  key2: "value 2",
};

let res = Object.assign(data, address, demo);
console.log(res);
console.log(data);
console.log(address);

//! Symbol: (Primitive Datatype)

let t1 = Symbol("key1");
let t2 = Symbol("key1");

let object1 = {
    object1[t1] = "value1";
    object1[t1] = "value1";
}

console.log(object1);
console.log(Object.keys(object1));
console.log(Object.getOwnPropertySymbols(object1));

let x = Symbol(100)
console.log(x);

let y = Symbol(100)
console.log(y);

console.log(x == y);
