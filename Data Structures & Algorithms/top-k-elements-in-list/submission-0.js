class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hash = {};

    for(let i =0; i< nums.length; i++){
       hash[nums[i]] = (hash[nums[i]] || 0) + 1
    }

    let top2 = Object.entries(hash).sort(({ 1: a }, { 1: b })=> b-a).slice(0, k).map((a)=> Number(a[0]))

    return top2
    }
}
