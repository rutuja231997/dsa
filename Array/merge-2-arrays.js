function mergeArrays(nums1, nums2) {
  if (nums1.length === 0) return nums1;
  if (nums2.length === 0) return nums2;

  let i = 0;
  let j = 0;

  let result_arr = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      result_arr.push(nums1[i]);
      i++;
    } else {
      result_arr.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) {
    result_arr.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    result_arr.push(nums2[j]);
    j++;
  }

  return result_arr;
}

console.log(mergeArrays([1, 2, 3, 0, 0, 0], [2, 5, 6]));
