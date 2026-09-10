class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length-1;
        let maxWaterHold = 0;
        while(left<right){
            let totalArea = 0
            let width = right-left;
            let height = Math.min(heights[left], heights[right]);

            totalArea = width*height

            if(maxWaterHold < totalArea){
                maxWaterHold = totalArea;
            }
            
            if(heights[left] < heights[right]){
                left++
            }else{
                right--
            }
        }

        return maxWaterHold;
    }
}
