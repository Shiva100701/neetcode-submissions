class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
         let hash = {};
        for(let i = 0; i< nums.length; i++){
            hash[nums[i]] = (hash[nums[i]] || 0)+1
        }

        let max = Math.max(...Object.values(hash))
        let getKey = Object.keys(hash).find(key => hash[key] === max)
        return parseInt(getKey)
    }
}
