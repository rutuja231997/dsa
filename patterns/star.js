//  i -> i responsible for the rows
// j -> j responsible for the columns

// print star matrix
let n = 4;
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j < n; j++) {
    row = row + "*";
  }

  console.log(row);
}

// print star pyramid

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + "*";
  }
  console.log(row);
}

//reverse pyramid
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row = row + "*";
  }
  console.log(row);
}
