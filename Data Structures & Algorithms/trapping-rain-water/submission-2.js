class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMax = [height[0]];
        let rightMax = []
        rightMax[height.length-1] = height[height.length-1];

        for(let i = 0; i< height.length-1; i++){
            leftMax.push(Math.max(leftMax[i], height[i+1]))
        }

        for(let i = height.length-2; i >= 0; i--){
           rightMax[i] =  Math.max(rightMax[i+1], height[i])
        }

        let ans = 0
        for(let i = 0; i< height.length-1; i++){
            ans += (Math.min(leftMax[i] , rightMax[i]) - height[i])
        }

        return ans;
    }
}
