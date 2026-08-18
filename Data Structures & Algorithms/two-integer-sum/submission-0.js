class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let nMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const needed = target - nums[i];
        if(nMap.has(needed)){
            return [nMap.get(needed), i]
        }

        nMap.set(nums[i], i)

    }
    return []
    }
}
