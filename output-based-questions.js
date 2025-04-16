//output based questions

/*#1 **/
//In case double equality javascript converts not primitive values to
// primitive by making use of valueOf property
const a = {
  valueOf: () => 2,
};

console.log(a == 2);
console.log(a + 3);
console.log(a > 1);

/*#2 **/
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();
const counterTwo = counterOne;
counterTwo.increment();
console.log(counterOne.count); // 3

/*#3 **/
const myPromise = Promise.resolve('some cool data');
(async () => {
  try {
    console.log(await myPromise);
  } catch {
    throw new Error('OOps didnt work');
  } finally {
    console.log('Oh finally!!');
  }
})(); // some cool data , Oh finally!!

/*#4 
Currying with arrow func
**/
const add = (x) => (y) => (z) => {
  console.log(x, y, z);
  return x + y + z;
};
const res = add(4)(5)(6);
console.log(res); //15

/*#5
 **/
let name = 'Max';

function getName() {
  console.log(name);
  let name = 'Twinkle';
}

getName(); // reference Error: Can't access variable before initialization

/*#6
 **/
const one = false || {} || null;
const two = null || false || '';
const three = [] || 0 || true;
console.log(one, two, three); // {} '' []

/*#7
 **/
let newList = [1, 2, 3].push(4);
console.log(newList.push(5)); //Error

/*#8
 Guess the output
 **/

new Promise((resolve) => {
  resolve(1);
  Promise.resolve().then(() => {
    console.log(2);
  });
}).then((data) => {
  console.log(data);
});
console.log(3);

/*#9
 Guess the output
 **/
Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => {
    throw new Error('Oops');
  })
  .then((x) => console.log('Success', x))
  .catch((err) => console.log('Caught', err.message))
  .then(() => console.log('After Catch'));
