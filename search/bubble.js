function bubbleSort(nums) {
  let isSwapped = false;
  for (let i = 0; i < nums.length - 1; i++) {
    let temp = 0;

    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        isSwapped = true;
      }
    }
  }
  return nums;
}

console.log(bubbleSort([3, 4, 2, 1]));
console.log(bubbleSort([5, 2, 4, 6, 1, 3]));
console.log(bubbleSort([7, 4, 3, 5, 2, 1]));
