//sliding Window technique

function sumOfThree(arr, iteration) {
  let max = 0;
  let windowProd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i < iteration) {
      windowProd += arr[i];
    } else {
      max = windowProd;
      windowProd += arr[i] - arr[i - iteration];
      max = Math.max(windowProd, max);
    }
  }
  return max;
}

console.log(sumOfThree([1, 2, 3, 4, 5], 3));
