// time complexity : o(n) where n is the number of digits in th number;
//space complexity: o(1) as we are using a constant amount of space as reverse_num and original_num variables

function palindrome(x) {
  let reverse_num = 0;
  let original_num = x;

  if (x < 0) return false;

  while (x > 0) {
    let last_digit = x % 10;
    reverse_num = reverse_num * 10 + last_digit;
    x = Math.floor(x / 10);
  }

  return original_num === reverse_num ? true : false;
}

console.log(palindrome(121));
console.log(palindrome(-121));
console.log(palindrome(10));
