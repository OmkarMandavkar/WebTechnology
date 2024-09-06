// let str = " This is a javascript class and we will learn javascript";
// let r1 = str.replace("javascript", java);
// console.log(r1);

let str = " This is a javascript class and we will learn javascript";
let r1 = str.replaceAll("javascript", java);
console.log(r1);

let s1 = "       hello world!      ";
let r2 = s1.trim();
console.log(r2);
console.log(s1.trimEnd);
console.log(s1.trimStart);

let s2 = "java script hello";
let r3 = s2.split(" ");
console.log(r3);

let s3 = "java";
let r4 = s3.split("");
console.log(r4);
console.log(s2.split("a"));

//! how to reverse the string

let x = s3.split("").reverse().join("");
console.log(x);

let y = s3.split("");
let z = y.reverse();
let rev = z.join("");
console.log(rev);

console.log("str" + "str");
let s4 = "reduce Right";

let r5 = s4.split("").reduceRight((acc, cv) => acc + cv, "");
console.log(r5);
