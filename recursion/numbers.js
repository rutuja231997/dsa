//printing numbers from 10 to 1 -> n to 1
function printNum(n) {
  if (0 > n) return;

  console.log(n);
  //   n = n - 1
  printNum(--n);
}

printNum(10);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

//printing numbers from 1 to 5 -> 1 to n
let n = 5;
function printNumber(x) {
  if (n < x) return;

  console.log(x);
  printNumber(++x);
}

printNumber(1);

// let x = 5;  // understand this increment and decrement

// console.log(--x);
// console.log(x--);
// console.log(x++);
// console.log(++x);
