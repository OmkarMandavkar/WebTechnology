let p1 = new Promise((res, rej) => {
  var breakUp = false;
  if (breakUp) res("promise resolved");
  else rej("promise rejected");
});

console.log(p1);
p1.then((value) => {
  console.log(value);
  console.log("THEN STATEMENT EXECUTED");
})
  .catch((reason) => {
    console.log(reason);
    console.log("CATCH STATEMENT EXECUTED");
  })
  .finally(() => {
    console.log("FINALLY EXECUTED");
  });

///////////////////
let x1 = Promise.resolve("promise resolved");
console.log(x1);

let x2 = Promise.resolve("promise resolved");
x2.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);
