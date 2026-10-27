class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let mid = Math.floor((nums.length-1)/2);
        let right = nums.length-1;

        if(target >= nums[mid]){
            while(right >= mid){
                if(nums[right] === target){
                    return right;
                }else{
                    right--
                }
            }
            return -1
        }else{
            while(left <= mid){
                if(nums[left] === target){
                    return left
                }else{
                    left++
                }
            }
            return -1;
        }

    }
}
