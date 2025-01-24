//binary-search
//Always use sorted array as input

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    const midIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[midIndex] === target) {
      return midIndex;
    }
    if (arr[midIndex] < target) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midindex - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 40));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
