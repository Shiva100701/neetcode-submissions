class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
      let sortedNum = nums.sort((a, b) => a - b);
        let refLen = (sortedNum.length / 3);
        let tempVal = sortedNum[0];
        let refNum = [];
        let count = 1;

        if (sortedNum.length === 1) {
            return nums;
        }
        if (sortedNum.length === 2) {
            return [... new Set(nums)];
        }
        for (let i = 1; i < sortedNum.length; i++) {
            if (tempVal === sortedNum[i]) {
                count++;
            } else {
                count = 1;
                tempVal = sortedNum[i];
            }
            if (count > refLen) {
                refNum.push(sortedNum[i]);
            }
        }
        return [...new Set(refNum)];
    }
}
