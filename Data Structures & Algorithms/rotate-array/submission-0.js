class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        if (k > nums.length) {
            k = k % nums.length;
        }

        nums = nums.reverse();
        let i = 0;
        let j = k - 1;

        while (j > i) {
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            i++;
            j--;
        }

        let l = k;
        let m = nums.length - 1;

        while (m > l) {
            let temp = nums[m];
            nums[m] = nums[l];
            nums[l] = temp;
            l++;
            m--;
        }

        return nums;
    }
}
