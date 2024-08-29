//! CLASS AND CONSTRUCTOR:

let a = 10;
var b = 20;

class Employee {
  static name = "sachin";

  constructor(name, id) {
    this.eName = name;
    this.eId = id;
  }

  static demo(a, b) {
    var x = 10;
    console.log(a, b);
    console.log("hello world");
    return x;
  }

  f1() {
    console.log("non-static method");
    console.log(this.eId);
  }
}

var e1 = new Employee("dhoni", 7); //? constructor call
console.log(e1);
console.log(e1.eName);
console.log(e1.eId);

var e2 = new Employee("rohit", 45);
console.log(e2); //~Employee {eName: 'rohit', eId: 45}

var e3 = new Employee("kolhi", 18);
console.log(e3);
console.log(e3.eName);
console.log(e3.eId);

console.log(Employee.demo(100, 200)); //~ 40
console.log(Employee.name); //~ sachin
