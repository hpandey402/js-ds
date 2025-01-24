let arr = [27, 78, 4, 7, 5, 4, 3, 5, 1, 3, 6];

function bubble(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let swap = false;
    for (j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }
    if (!swap) {
      return arr;
    }
  }
}

console.log('checkkk', bubble(arr));
