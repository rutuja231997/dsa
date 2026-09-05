let arr = [1, 0, 1, 1, 0, 1];

function coundDigit(nums) {
  if (!Array.isArray(nums)) {
    return false;
  }

  let currCount = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currCount++;
      console.log("currCount in loop", currCount);
    } else {
      maxCount = Math.max(maxCount, currCount);
      currCount = 0;
      console.log("maxCount in loop", maxCount);
    }
  }

  return { maxCount: Math.max(maxCount, currCount), currCount: currCount };
}
console.log(coundDigit(arr));

function missingNum(nums) {
  let n = nums.length;

  let totalSum = (n * (n + 1)) / 2;
  let partialSum = 0;

  for (let i = 0; i < nums.length; i++) {
    partialSum = partialSum + nums[i];
  }

  return totalSum - partialSum;
}

// console.log(missingNum([3, 0, 1]));
// console.log(missingNum([9, 6, 4, 2, 3, 5, 7, 0, 1]));
// console.log(missingNum([0, 1]));

// function singleNumber(nums) {
//   let hash = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (!hash[nums[i]]) {
//       hash[nums[i]] = 1;
//     } else {
//       hash[nums[i]]++;
//     }
//   }

//   for (let k = 0; k < nums.length; k++) {
//     if (hash[nums[k]] === 1) {
//       return nums[k];
//     }
//   }
// }

function singleNumber(nums) {
  let xor = 0;

  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }

  return xor;
}

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
