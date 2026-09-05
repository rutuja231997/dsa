// time complexity: o(n) where n is the lenght of the array
// space complexity: o(1) as we are using a constant amount of space as largest variable

function largestNum(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return false;
  }

  let largest = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }
  return largest;
}

console.log(largestNum([3, 2, 1])); // Output: 3
console.log(largestNum([5, 4, -3, 2, 1])); // Output: 5
console.log(largestNum([10, 5, 8, 3, 9])); // Output: 10
console.log(largestNum([]));
console.log(largestNum(56));
