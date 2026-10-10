class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let lowestPositive = 1;
for(let i =0; i< nums.length; i++){
  for(let j = 0; j< nums.length; j++){
    if(lowestPositive === nums[j]){
      lowestPositive++
    }
    // console.log(lowestPositive)
  }
}
  return lowestPositive
    }
}
