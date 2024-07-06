

let FirstName = "Shubhashish";
let age = 34;
let isMarried = true;

/*

If else:

If you wanna run certain section of the codebase under some conditions we use if else statements!

*/



// if (isMarried === true) {
//   console.log(`${FirstName} is Married!`)
// }

// else if (isMarried === false) {
//   console.log(`${FirstName} is Not Married!`)
// }



// More Optimized Way:

if (isMarried) { // True
  console.log(`${FirstName} is Married!!`);
}

else if (!isMarried) { // False
  console.log(`${FirstName} is Not Married!!`)
}