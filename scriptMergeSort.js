let array = [6, 4, 7, 2, 3, 1, 8, 5];
let array2 = [-1, 99, 24, -222, 77, 0, 13];
let array3 = [42, 0.1, -2.2, 7, -13, 0, 0.01, 710, 666];

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  //   else sort left half; sort right half; merge sorted halves;
  else {
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
  }
}

function merge(left, right) {
  let sortedArray = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      sortedArray.push(right.shift());
    } else {
      sortedArray.push(left.shift());
    }
  }
  while (left.length > 0) {
    sortedArray.push(left.shift());
  }
  while (right.length > 0) {
    sortedArray.push(right.shift());
  }
  return sortedArray;
}

console.log(mergeSort(array));
console.log(mergeSort(array2));
console.log(mergeSort(array3));
