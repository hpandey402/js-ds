//Array-Polyfills

//ForEach
Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};
//Map
Array.prototype.myMap = function (cb) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i, this));
  }
  return newArr;
};
//Filter
Array.prototype.myFilter = function (cb) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

//Find
Array.prototype.myFind = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

//Some
Array.prototype.mySome = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

// //Every
Array.prototype.myEvery = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i], i, this)) return false;
  }
  return true;
};

//Reduce
Array.prototype.myReduce = function (cb, initialValue) {
  for (let i = 0; i < this.length; i++) {
    initialValue = cb(initialValue, this[i], i, this);
  }
  return initialValue;
};

const bcd = ['abc', 'bd', '78'].myReduce((acc, el) => acc + el, 0);

console.log(bcd);

//Flat
const arr = [1, 4, 5, [4, 5, [6, [3]]]];
Array.prototype.myFlat = function () {
  function flat(arr) {
    const result = [];
    if (Array.isArray(arr)) {
      arr.forEach((el) => result.push(...flat(el)));
    } else {
      result.push(arr);
    }
    return result;
  }
  return flat(this);
};

console.log(arr.myFlat());
