const arr = [-5, 2, 4, 6, 10];

const binarySearch = (arr, target) => {
  if (!arr.length) return -1;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) return middle;
    if (arr[middle] > target) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
};

console.log(binarySearch(arr, 10));
console.log("bigO: O(logn)");

const binarySearchRec = (arr, target, start = 0, end = arr.length - 1) => {
  if (!arr.length) return -1;
  let middle = Math.floor((start + end) / 2);
  if (arr[middle] === target) return middle;
  if (arr[middle] > target) {
    return binarySearchRec(arr, target, start, middle - 1);
  } else {
    return binarySearchRec(arr, target, middle + 1, end);
  }

};

console.log(binarySearchRec(arr, 10));
console.log("bigO: O(logn)");