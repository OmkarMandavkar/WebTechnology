// "use strict";

console.log(this);
console.log(this === window);

let obj = { name: "xyz", id: 121 };
function demo() {
  console.log(this);
  let f1 = () => {
    console.log(this); //!parent scope this keyword value
  };
  f1();
}

let x = demo.bind(obj);
x();

class Employee {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    console.log(this);
  }
}

let e1 = new Employee("ABC", 70);
let e2 = new Employee("XYZ", 69);

let std = {
  name: "abc",
  id: 121,
  skills: ["js", "java"],
  demo: function () {
    console.log(this);
    console.log(this.name);
    let b = () => {
      console.log(this);
    };
    b();
  },
  arr: () => {
    console.log(this);
  },
};

std.demo();
std.arr();

let div = document.querySelector(".container");
div.addEventListener("click", function (e) {
  console.log(this);
  console.log(e.target);
});

//! LOCAL STORAGE

console.log(window.localStorage);
console.log(window.sessionStorage);

localStorage.setItem("name", "omkar");
localStorage.setItem("id", "100");
localStorage.setItem("skills", ["js", "java", "PHP"]);

let o = {
  doorNo: 302,
  pinCode: 400071,
  location: "Andheri",
};
localStorage.setItem("address", JSON.stringify(o));

// let num = ["java", "js"];
// console.log(num.toString);

let id = localStorage.getItem("id");
console.log(typeof id);

let skills = localStorage.getItem("skills");
console.log(skills.split(","));

let address = localStorage.getItem("address");
console.log(JSON.parse(address));

localStorage.removeItem("id");
// localStorage.clear();

sessionStorage.setItem("name", "abc");
sessionStorage.setItem("id", 90);

console.log(sessionStorage.getItem("name"));
