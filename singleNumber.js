// Given a non-empty array of integers numx, every element appear twice except for one. find that single one. 
// You must implement a solution with a linear runtime complecity and use only constant extra space. 

// example 1:
const nums = [2,2,1]

const singleNumber = ()=>{
      let hash = {};

      for(let i=0 ; i< nums.length; i++){
            if(!hash[nums[i]]){
                  hash[nums[i]] = 1; 
            } else { 
                  hash[nums[i]] ++; 
            }
      }
      for(let i = 0; i< nums.length; i++){
            if(hash[nums[i]] == 1)
                  return nums[i]
      }
}

const result = singleNumber(nums); 
console.log(result); 
