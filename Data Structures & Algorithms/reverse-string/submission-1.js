class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let temp = [];
        for(let i = s.length-1; i>= 0; i--){
            temp.push(s[i])
        }
        for(let i =0; i< s.length; i++){
            s[i] = temp[i]
        }
        // return temp
    }
}
