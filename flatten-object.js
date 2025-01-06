//Flatten a deeply nested Object

const obj = {
  A: '12',
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

function flattenObj(obj) {
  let flatObj = {};
  for (let i in obj) {
    if (typeof obj[i] === 'object') {
      let temp = flattenObj(obj[i]);
      for (let j in temp) {
        flatObj[i + '.' + j] = temp[j];
      }
    } else {
      flatObj[i] = obj[i];
    }
  }
  return flatObj;
}

//Output:
//{ A: '12', B: 23, 'C.P': 23, 'C.O.L': 56, 'C.Q.0': 1, 'C.Q.1': 2 }
