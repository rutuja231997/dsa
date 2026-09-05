//time complexity: o(n) where n is the length of the array;
// space complexity: o(1) as we are using a constant amount of space as largest & largest variables

function secondLargest(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return false;
  }

  let largest = arr[0];
  let secondLargest = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log(secondLargest([3, 2, 1])); // Output: 2
console.log(secondLargest([5, 4, -3, 2, 1])); // Output: 4
console.log(secondLargest([10, 5, 8, 3, 9])); // Output: 9
console.log(secondLargest([])); // Output: false
console.log(secondLargest(56)); // Output: false
