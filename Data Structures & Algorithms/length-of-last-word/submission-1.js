class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let trim = s.trim();
        let count = 0;
        for (let i = trim.length - 1; i >= 0; i--) {
            if (trim[i] !== " ") {
                count++
            } else {
                return count;
            }
        }
        return count
    }
}
