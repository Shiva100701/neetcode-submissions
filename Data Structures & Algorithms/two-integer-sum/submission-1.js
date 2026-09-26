class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       let numsMap = {};
for(let i =0; i< nums.length; i++){
  let needed = target - nums[i]
  if(numsMap[needed] !== undefined){
    return [i, numsMap[needed]]
  }
  numsMap[nums[i]] = i
}
return []
}
}
