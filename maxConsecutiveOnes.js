//Max Consecutive Ones
// Given a binary array nums, return the maximum number of consecutive 1s in the array. 

const nums = [1,1,0,1,1,1,]; 

const maxConsecutiveOnes = (nums) => { 
     let currentCount = 0; 
     let maxCount = 0; 

     for(let i= 0; i<nums.length; i++) { 
      if(nums[i] === 1) { 
            currentCount ++; 
            if(currentCount > maxCount){  // maxCount = Math.max(maxCount, currentCount)
                  maxCount = currentCount; 
            }
      } else { 
            currentCount = 0; 
      }
     }
     return maxCount; 
}
console.log(maxConsecutiveOnes(nums))
