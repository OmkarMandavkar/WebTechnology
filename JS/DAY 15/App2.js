//! DATE CLASS

let x = new Date();
console.log(x.getFullYear());
console.log(x.getMonth());
console.log(x.getDate());
console.log(x.getDay());
console.log(x.getHours());
console.log(x.getMinutes());
console.log(x.getSeconds());

let y = new Date();
y.setFullYear(1999);
y.setMonth(4);
y.setDate(12);
y.setHours(10, 59, 30);
y.setMinutes(20);
y.setSeconds(36);
console.log(y);

//! MATH CLASS

// let z = new Math(); //! Uncaught TypeError: Math is not a constructor

console.log(Math.round(2.5));
console.log(Math.round(3.4));
console.log(Math.round(-1.5));
console.log(Math.round(-3.7));
console.log(Math.round(-9.35));

console.log(Math.ceil(7.6));
console.log(Math.ceil(5.1));
console.log(Math.ceil(-1.6));

console.log(Math.floor(10.75));
console.log(Math.floor(-7.9));

console.log(Math.trunc(-10.3));
console.log(Math.trunc(100.34));

console.log(Math.random());

let random = Math.random() * (9999 - 1000) + 1000;
console.log(Math.trunc(random));
