// function singleNumber(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count = count + 1;
//       }
//     }

//     if (count === 1) {
//       return arr[i];
//     }
//   }
// }

// const nums = [4, 1, 2, 1, 2];
// const nums1 = [2, 2, 1];
// console.log(singleNumber(nums));
// console.log(singleNumber(nums1));

// let merge1 = [1, 2, 3, 0, 0, 0];
// let merge2 = [2, 5, 6];

// function mergeSortedArray(nums1, nums2) {
//   let m = nums1.length;
//   let n = nums2.length;

//   let p1 = 0;
//   let p2 = 0;

//   let copyNums1 = nums1.slice(0, 3);

//   for (let i = 0; i < m + n; i++) {
//     if (p2 >= n || (p1 < m && copyNums1[p1] < nums2[p2])) {
//       nums1[i] = copyNums1[p1];
//       p1 = p1 + 1;
//     } else {
//       nums1[i] = nums2[p2];
//       p2++;
//     }
//   }

//   return { merged_arr: nums1 };
// }

// console.log(mergeSortedArray(merge1, merge2));

// function mergeSortedArrayWithoutExtraSpace(nums1, nums2) {
//   m = nums1.length;
//   n = nums2.length;

//   let p1 = m - 1;
//   let p2 = n - 1;

//   for (let i = m + n - 1; i >= 0; i--) {
//     if (p2 < 0) {
//       break;
//     }
//     if (p1 >= 0 && nums1[p1] > nums2[p2]) {
//       nums1[i] = nums1[p1];
//       p1--;
//     } else {
//       nums1[i] = nums2[p2];
//       p2--;
//     }
//   }

//   return { merge_arr: nums1 };
// }
// console.log(mergeSortedArrayWithoutExtraSpace(merge1, merge2));

// let question = [1, 0, 2, 0, 3, 12];

// function moveZeros(arr) {
//   let temp = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] !== 0) {
//       temp = arr[i + 1];
//       arr[i + 1] = arr[i];
//       arr[i] = temp;
//       console.log(
//         `i = ${i}, arr[i]: ${arr[i]}, arr[i+1] = ${arr[i + 1]} temp = ${temp}, array:${arr}`,
//       );
//     }
//   }
//   return arr;
// }
// console.log(moveZeros(question));
