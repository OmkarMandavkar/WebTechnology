async function demo() {
  try {
    console.log("start");
    let x = 100;
    var y = x;
    console.log(y);
    const c = 10;
    c = 90;
    console.log(c);
    return 1000;
  } catch (error) {
    console.log(error);
    console.log("error");
  } finally {
    console.log("finally");
  }
}

demo();

let x1 = Promise.resolve("Promise Resolved");

let x = async () => {
  try {
    console.log("start");
    await x1;
    let y = 100;
    console.log(y);
    console.log("end");
  } catch (e) {
    console.log("error");
  }
};
x();
console.log("hello world");
console.log("welcome");

async function fetchData() {
  let data = await window.fetch("https://api.github.com/users");
  let finalData = await data.json();
  console.log(finalData);
}
fetchData();
