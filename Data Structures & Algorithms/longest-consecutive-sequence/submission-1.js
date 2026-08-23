class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
         if(nums.length === 0){
        return 0
    }

    let prevCount = 0;
    let currCount = 0
    let arr = [];

    let sortedNum = nums.sort((a,b)=> a -b);
    console.log(sortedNum)

    let left = 0;
    let right = 1

    while(right < sortedNum.length){
        let diff = sortedNum[right] - sortedNum[left]

        if(diff === 1){
            currCount++
        }else if(sortedNum[right] === sortedNum[left]){
           currCount = currCount
        }else{
            currCount = 0
        }

        if (currCount > prevCount) {
            prevCount = currCount
        }


        right++;
        left++
    }

   return prevCount+1
    }
}
