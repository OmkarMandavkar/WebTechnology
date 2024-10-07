let parent = {
  name: "sunil",
  id: 120,
  getName() {
    console.log(this.name);
  },
  setName(n) {
    this.name = n;
  },
};

let child = {
  name: "Hardik Pandya",
};

child.__proto__ = parent;
child.setName("Ananya Pandey");
console.log(child.name);
console.log(child.id);
child.getName();
