class Fruit {
  constructor(id, name, color) {
    this.id = id;
    this.name = name;
    this.color = color;
  }
}

// const fruit = new Fruit(1, "apple", "red");
// console.log(fruit);

const fruits = [
  new Fruit(1, "apple", "red"),
  new Fruit(2, "banana", "yellow"),
  new Fruit(3, "coconut", "green"),
  new Fruit(4, "mango", "yellow"),
  new Fruit(5, "orange", "orange"),
  new Fruit(6, "grapes", "purple"),
  new Fruit(7, "kiwi", "green"),
];

module.exports = { fruits };
