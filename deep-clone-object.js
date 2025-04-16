// Write a function to create a deep copy of a nested object without using JSON methods.

const a = {
  name: 'Testing',
  language: 'Javscript',
  frameworks: ['Angular', 'react'],
};

// #1
function deepClone(input) {
  if (typeof input !== 'object') {
    return input;
  }
  const initialValue = Array.isArray(input) ? [] : {};
  return Object.keys(input).reduce((acc, key) => {
    acc[key] = deepClone(input[key]);
    return acc;
  }, initialValue);
}

//Alternative
function deepClone(obj) {
  const newObj = Array.isArray(obj) ? [] : {};

  for (let i in obj) {
    if (typeof obj[i] === 'object') {
      newObj[i] = deepClone(obj[i]);
    } else {
      newObj[i] = obj[i];
      console.log(obj[i]);
    }
  }
  return newObj;
}

const b = deepClone(a);

b.frameworks.push('Adani');
console.log(b, a);
