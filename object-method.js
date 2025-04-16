/***** Day 1: The Object.fromEntries() Method *****/

// Defining an array of key-value pairs
const keyValuePairs = [
  ['name', 'John'],
  ['age', 30],
];

// Using the Object.fromEntries() method to convert the array into an object
const obj = Object.fromEntries(keyValuePairs);
console.log(obj);

// OUTPUT: (2) {name: "John", age: 30}

/***** Day 2: The Object.entries() Method *****/

const myObject = {
  name: 'John',
  age: 30,
  city: 'New York',
};

const entries = Object.entries(myObject);
console.log(entries);

/* OUTPUT
  [
    ["name", "John"],
    ["age", 30],
    ["city", "New York"]
  ]
  */

/***** Day 3: The Object.setPrototypeOf() Method *****/

const dog = { breed: 'Labrador' };
const mammal = { legs: 4 };

Object.setPrototypeOf(dog, mammal);

console.log(dog.legs); // Output: 4
