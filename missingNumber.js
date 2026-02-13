//Given an array nums containing n distinct numbers taken from the range [0, n], return the only number in the range that is missing from the array.
let nums = [3, 0, 1];

function missingNumber() {
  let n = nums.length;
  let numsTotal = (n * (n + 1)) / 2;
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return numsTotal - sum; 
}
const result = missingNumber(nums); 
console.log(result)