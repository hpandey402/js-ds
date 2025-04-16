// Understanding memoization in JavaScript:
// Memoization is a optimization technique that is used for
// caching time consuming operations.

function sum(num) {
  return (num * 100) / 56;
}

function memoize(cb) {
  let cache = {};

  return function (num) {
    if (cache[num]) {
      console.log('using cache');
      return cache[num];
    } else {
      const result = cb(num);
      cache[num] = result;
      console.log('without using cache');
      return result;
    }
  };
}

const optimize = memoize(sum);

console.time('sum 50');
console.log(optimize(50));
console.timeEnd('sum 50');
// console.log(optimize(200))
console.time('memoize 50');
console.log(optimize(50));
console.timeEnd('memoize 50');
// console.log(optimize(200))
// console.log(sum(50))
