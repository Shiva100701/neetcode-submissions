class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let count = 1;
        let result = [];

        let sortedNums = nums.sort((a, b) => a - b);

        for (let i = 0; i < sortedNums.length; i++) {
            if (sortedNums[i] === sortedNums[i + 1]) {
                count++;
            } else {
                count = 1;
            }

            if (count > nums.length / 3) {
                if (result[result.length - 1] !== sortedNums[i]) {
                    result.push(sortedNums[i]);
                }
            }
        }

        return result;
    }
}
