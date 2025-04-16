// output: {user: {name: 'Alice', age: 30}}

function objectNesting(input) {
  let result = {};
  // const users = [];
  for (let key in input) {
    const keys = key.split('.');
    let currentObj = result;

    for (let i = 0; i < keys.length; i++) {
      const nestedKey = keys[i];

      if (!currentObj[nestedKey]) {
        if (i === keys.length - 1) {
          currentObj[nestedKey] = input[key];
        } else {
          currentObj[nestedKey] = {};
        }
      }
      currentObj = currentObj[nestedKey];
    }
  }
  return result;
}
console.log(objectNesting(input)); //{ user: { name: 'Alice', age: 30 } }
