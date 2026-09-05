// time complexity: o(n) where n is the number of digits in the number;
// space complexity: o(1) as we are usin a constant amount of space as reversed_num and original_num variables

function reverseInteger(x) {
  let reversed_num = 0;
  let original_num = x;

  x = Math.abs(x);

  while (x > 0) {
    let last_digit = x % 10;
    reversed_num = reversed_num * 10 + last_digit;
    x = Math.floor(x / 10);
  }

  let limit = Math.pow(2, 31);
  if (reversed_num > -limit || reversed_num > limit - 1) {
    return 0;
  }
  return original_num < 0 ? -reversed_num : reversed_num;
}

console.log(reverseInteger(123));
console.log(reverseInteger(-123));
console.log(reverseInteger(120));
