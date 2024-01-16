function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if(array[i] + array[j] === target) {
        return true
      }
      }
    }
    return false
  }

console.log(hasTargetSum([2,3,5,6],8))
/* 
  Write the Big O time complexity of your function here

  The Big O notation is O(n^2)
*/

/* 
  Add your pseudocode here

  if  sum of array index 1 and array index 2 is equal to target
  return true
  if not return false
*/

/*
  Add written explanation of your solution here
Iterate through the whole array using a for loop.
Add every pair of the numbers in the array
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
