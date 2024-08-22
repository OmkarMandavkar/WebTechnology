//! NESTED FUNCTION

let v = 100;
console.log(v);

function outer() {
  let i = 1;
  const y = 20;

  var arr = (q, s) => {
    console.log(i);
    console.log(q);
    console.log(s);
    const c = "js";
    console.log(c);
  };
  arr("arg 1", "arg 2");
  console.log(i, y);
}
outer();

//! LEXICAL SCOPING OR SCOPE CHAINING:

let h = 100;
var l = 500;
function f1() {
  function f2() {
    console.log(h);
    function f3() {
      console.log(l);
    }
    f3();
  }
  f2();
}
f1();
