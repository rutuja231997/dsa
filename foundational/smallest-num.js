// time complexity: o(n) where n is the length of the array
// space complexity: o(1) as we are using  a constant amount of space as smallest variable

function smallestNum(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }

  if (arr.length === 0) {
    return null;
  }

  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(smallestNum([3, 2, 1])); // Output: 1
console.log(smallestNum([5, 4, -3, 2, 1])); // Output: -3
console.log(smallestNum([10, 5, 8, 3, 9])); // Output: 3
console.log(smallestNum("happy")); // Output: false
console.log(smallestNum([])); // Output: null
