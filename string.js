// const str = "hello";

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

const str = "1112abc";

function secondHighestNum(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      arr.push(Number(str[i]));
    }
  }

  if (arr.length === 0) {
    return -1;
  }
  let largest_num = arr[0];
  let secondLargest_num = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest_num) {
      secondLargest_num = largest_num;
      largest_num = arr[i];
    } else if (arr[i] > secondLargest_num && arr[i] < largest_num) {
      secondLargest_num = arr[i];
    }
  }

  return secondLargest_num;
}

function LengthOfWord(s) {
  if (s.length <= 1) {
    return s;
  }

  let count = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      if (count > 0) {
        break;
      }
    } else {
      count++;
    }
  }

  return count;
}

function printAlphabets() {
  let arr = [];

  // for (let i = 65; i <= 90; i++) {
  //   arr.push(String.fromCharCode(i));
  // }
  let i = 65;
  while (i <= 90) {
    arr.push(String.fromCharCode(i));
    i++;
  }
  return arr;
}

console.log(printAlphabets());

console.log(LengthOfWord("Hello World"));

console.log(secondHighestNum("dfa12321afd"));
console.log(secondHighestNum("abc1111"));
