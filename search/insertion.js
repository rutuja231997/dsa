function insertionSort(nums) {
  let n = nums.length;

  for (let i = 1; i < n; i++) {
    let curr = nums[i];
    let prev = i - 1;

    while (nums[prev] > curr && prev >= 0) {
      nums[prev + 1] = nums[prev];
      prev--;
    }

    nums[prev + 1] = curr;
  }
  return nums;
}

console.log(insertionSort([5, 2, 4, 6, 1, 3]));
console.log(insertionSort([7, 4, 3, 5, 2, 1]));
