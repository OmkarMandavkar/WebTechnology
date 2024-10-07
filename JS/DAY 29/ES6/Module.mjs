//! default export:
import data from "./App.mjs";
console.log(data);

//! name export:
import { add, sub, data } from "./App.mjs";

add(10, 20);
sub(39, 89);
console.log(data[3]);
