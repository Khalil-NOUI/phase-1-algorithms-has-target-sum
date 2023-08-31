function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {

    for (let j = i + 1; j < array.length; j++) {

      if (target === array[i] + array[j]) {

        return true;
      }
    }
  }
  return false;
}


/* 

  time complxity  O(n*n*2 + 1) = O(n^2)
  space comlexity O(1 + 1 + 1) = O(1)

*/

/* 
the function takes an array and a target:
the function sums up two numbers from the array where :
it iterates through the array to find the first value (refrence)
it iterates through the array again to find a value that when combined  with the first it eaquals to the target
if the first refrence values doesn't have a second value to sum it up to the target the function moves to the next
if the different pairs generated all over  are no match the target it return false

*/

/*
  The goal of the function is to determine if there are any two numbers in the array that sum up to the provided target value.
  first i used the following but the refrence value and second value must not be the same
  function hasTargetSum(array, target) {
  for (let numI of array) {
    for (let numJ of array) {
      if (target === numI + numJ) {
        return true;
      }
    }
  }
  return false;
}
  */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 10));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([7], 7));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
