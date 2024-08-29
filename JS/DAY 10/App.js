//! USING CONSTRUCTOR FUNCTION:

function Employee(name, id) {
  this.name = name;
  this.id = id;
}

let e1 = new Employee("xyz", 27);
console.log(e1);

var e2 = new Employee("sachin", 90);
console.log(e2);

//! LITERAL WAY

let obj = {
  name: "ABC",
  id: 88,
  skills: ["SQL", "WEB TECH", "JAVA"],
  isMarried: false,
  kids: undefined,
  demo: () => {
    console.log("demo function");
    return 10;
  },

  marks: {
    CS: 35,
    Maths: "KT",
  },
  isPassed: false,
  kids: 10,
};

console.log(obj.isPassed); //~ false
console.log(obj["id"]); //~88
console.log(obj["demo"]()); //~ 10
console.log(obj.marks["Maths"]); //~KT
console.log(obj.skills[2]); //~JAVA

// obj.designation = "Manager";
obj["designation"] = "Manager";

// obj.isMarried = true;
obj["isMarried"] = true;

delete obj.isMarried;
console.log(obj);

//! USING OBJECT CONSTRUCTOR
let x = new Object();
x.name = "abc";
x.id = 200;
x.skills = "react";
console.log(x);

//!STATIC METHODS IN OBJECT

let y = {
  name: "qqq",
  id: 100,
  isMarried: false,
  gender: "male",
  skills: ["sketching", "cricket"],
  1: 200,
  true: "boolean",
};

// Object.freeze(y);
// Object.seal(y);
// y.name = "TTT";
// y.percentage = 90;
// delete y.skills;
// console.log(y);

// let r1 = Object.isFrozen(y);
// console.log(r1);

// let r2 = Object.isSealed(y);
// console.log(r2);

let key = Object.keys(y);
console.log(key);

let val = Object.values(y);
console.log(val);

let e = Object.entries(y);
console.log(e);
