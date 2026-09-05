//calculate the sum of numbers from 1 to n

function sum(n) {
  //base case
  if (n === 0) return 0;

  return n + sum(n - 1);
}

console.log(sum(20));

//calculate sum all elements in array
let arr = [5, 3, 2, 0, 1];

function sumArr(n) {
  if (n === 0) return arr[n];

  return arr[n] + sumArr(n - 1);
}

console.log(sumArr(arr.length - 1));
