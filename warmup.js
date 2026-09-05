//create a function which accepts the age and tells whether a person is eligiable to vote or not

function EligibleVoter(age) {
  if (age === 18 || age > 18) {
    return console.log(`voteer is eligble and age is ${age}`);
  } else {
    return console.log(`voter is not eligible and age is ${age}`);
  }
}
// function EligibleVoter(age) {
//   const eligibleVoter =
//     age === 18
//       ? `voteer is eligble and age is ${age}`
//       : `voter is not eligible and age is ${age}`;

//   return eligibleVoter;
// }

const ans = EligibleVoter(12);

console.log(ans);
