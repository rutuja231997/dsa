//count negative numbers in an array

// time complexity : o(n) where n is the length of the Array;
// space complexity : o(1) as we are using a constant amount of space as count variable

function countNegatives(arr) {
  let count = 0;

  if (!Array.isArray(arr)) {
    return false;
  }

  if (arr.length === 0) {
    return true;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }

  return count;
}

console.log(countNegatives([-1, -2, 3, 4, -5])); // Output: 3
