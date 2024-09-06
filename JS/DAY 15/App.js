// let str = " This is a javascript class and we will learn javascript";
// let r1 = str.replace("javascript", java);
// console.log(r1);

let str = " This is a javascript class and we will learn java";
let r1 = str.replaceAll("javascript", "java");
console.log(r1); //~ This is a java class and we will learn java

let s1 = "       hello world!      ";
let r2 = s1.trim();
console.log(r2); //~ hello world!
console.log(s1.trimEnd()); //~        hello world!
console.log(s1.trimStart()); //~ hello world!

let s2 = "java script hello";
let r3 = s2.split(" ");
console.log(r3); //~ ['java', 'script', 'hello']

let s3 = "java";
let r4 = s3.split("");
console.log(r4); //~ ['j', 'a', 'v', 'a']
console.log(s2.split("a")); //~  ['j', 'v', ' script hello']

//! how to reverse the string

let x = s3.split("").reverse().join("");
console.log(x); //~ avaj

let y = s3.split("");
let z = y.reverse();
let rev = z.join("");
console.log(rev); //~ avaj

console.log("str" + "str"); //~ strstr
let s4 = "reduce Right";

let r5 = s4.split("").reduceRight((acc, cv) => acc + cv, "");
console.log(r5); //~ thgiR ecuder
