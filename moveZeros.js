//Move Zeroes
//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//Note that you must do this in-place without making a copy of the array.
let nums = [0, 1, 0, 3, 12];

function moveZeroes(nums) {
  let x = 0; // count


  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i]; 
      //1  0 !== 0 ? false ? x = 0 do nothing! 
      //2  1 !== 0 ? true,// nums[x] == 0 , nums[i] == 1  x = 1 
      //3  0 ! == 0 ? false , x = 1 do nothing! 
      //4  3 ! == 0 ? true , nums[x] = 1, num[i] = 3  x = 2
      //5  12 ! == 0 ? true,  nums[x] = 2, num[i]=4 x = 3,
       // nums = [1,3,12,3,12]; 
      x++;
    }
  }
  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
}

moveZeroes(nums);
console.log(nums);
