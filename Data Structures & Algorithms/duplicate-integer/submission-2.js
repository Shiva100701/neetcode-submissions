class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      let sortedNum = [...new Set(nums)];

  for (let j = 0; j < nums.length; j++) {
    if (nums.length !== sortedNum.length) {
      return true;
    }
  }

  return false;
}
}
