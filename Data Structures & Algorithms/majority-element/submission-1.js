class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
         let count = 0;
    let result = 0;

    for(let i = 0; i< nums.length; i++){
        if(count === 0){
            result = nums[i]
        }

        if(nums[i] === result){
            count++
        }else{
            count--
        }

        if(nums.length/2 < count){
            return result
        }
    }

    return result
    }
}
