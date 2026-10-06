class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let i = s.length - 1;

        while (s[i] === " ") {
            i--;
        }

        let count = 0;
        while (i>= 0 && s[i] !== " ") {
            count++;
            i--;
        }

        return count;
    }
}
