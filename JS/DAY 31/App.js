let obj = {
  name: "sachin",
  id: 1221,
  1: "val",
};
console.log(Object.keys(obj));

let arr = [10, 30, 20];
let m = new Map([
  [arr, "array value"],
  [100, "number value"],
  [true, "boolean value"],
  ["name", "sachin"],
]);

// m.set(arr, "array value");
console.log(m.size);

console.log(m.get("name"));
console.log(m.get([10, 30, 20]));
console.log(m.delete("name"));
console.log(m.has(arr));

// m.clear();
console.log(m);

m.forEach(function (m, i, a) {
  console.log(m);
  console.log(i);
  console.log(a);
});

let key = m.keys();
console.log(key);

// for (let k of key) console.log(k);
// for (let value of m.values()) console.log(value);

for (let e of m.entries()) console.log(e);

///////////////////////////////////////////////

class Person {
  demo = "value 1";
  static f1 = "value 2";

  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  static add(a, b) {
    console.log("static method");
    return a + b;
  }

  getName() {
    console.log(this.name);
  }
}

let p1 = new Person("abc", "male");
// console.log(p1.demo);
// console.log(Person.f1);
// console.log(Person.add(10, 20));

class Employee extends Person {
  constructor(id, skills, name, gender) {
    super(name, gender);
    this.id = id;
    this.skills = skills;
  }
}

let e1 = new Employee(121, ["js", "java"], "xyz", "female");
console.log(e1);
e1.getName();
console.log(e1.demo);
