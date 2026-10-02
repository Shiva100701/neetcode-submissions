class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length-1;

        let lmax = height[left];
        let rmax= height[right];
        let ans = 0

        while(left < right){
            lmax = Math.max(lmax, height[left])
            rmax = Math.max(rmax, height[right])

            if(lmax < rmax){
                ans += lmax - height[left]
                left++
            }else{
                ans += rmax - height[right]
                right--
            }
        }

        return ans
    }
}
