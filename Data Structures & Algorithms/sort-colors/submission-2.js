class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let left = 0;
        let right = nums.length - 1;
        let mid = 0;
        let temp = 0;

        while (mid <= right) {
            if (nums[mid] === 0) {
                temp = nums[left];
                nums[left] = nums[mid];
                nums[mid] = temp;
                left++;
                mid++;
            } else if (nums[mid] === 1) {
                mid++;
            } else {
                temp = nums[mid];
                nums[mid] = nums[right];
                nums[right] = temp;
                right--;
            }
        }
        return nums;
    }
}
