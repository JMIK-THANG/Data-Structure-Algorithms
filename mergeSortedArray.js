//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
//Merge nums1 and nums2 into a single array sorted in non-decreasing order.
//The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, //and the last n elements are set to 0 and should be ignored. nums2 has a length of n.


let nums1 = [1,3,5,0,0,0]; 
let nums2 = [ 2,4,6]; 
let m = 3; 
let n = nums1.length; 

 function mergeSortedArray() { 
   let n = nums2.length; 
       let i = m-1; 
       let j = n-2; 
       let k = (m+n) -1 
 }