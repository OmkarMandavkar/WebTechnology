//! SHALLOW COPY

let std = {
  name: "xyz",
  id: 200,
  skills: ["java", "js", "react"],
  address: {
    pincode: 400061,
    location: "Mumbai",
  },
};

//~ by copying the object ref
// let copy = std;
// std.id = 900;
// console.log(copy);

//~ using Object.assign()
// let copy1 = Object.assign({}, std);
// std.id = 900;
// std.skills[1] = "node";
// std.address.pincode = 400600;
// console.log(copy1);

//~ using spread operator
// let copy2 = { ...std };
// std.id = 900;
// std.address.location = "Qspiders thane";
// console.log(copy2);

//~ using for in loop
// let copy3 = {};
// for (let key in std) {
//   copy3[key] = std[key];
// }
// std.id = 900;
// std.skills[1] = "ruby";
// console.log(copy3);

//! DEEP COPY

//~ StructuralClone()

// let copy4 = structuredClone(std);
// std.id = 900;
// std.address.location = "PYSpiders thane";
// console.log(copy4);

//~ stringify() and parse()

// var x = JSON.stringify(std);
// var copy5 = JSON.parse(x);
// std.id = 900;
// std.address.location = "PROSpiders Thane";
// console.log(copy5);
