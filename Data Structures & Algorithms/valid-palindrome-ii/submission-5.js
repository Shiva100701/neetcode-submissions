class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if (s[left] === s[right]) {
                left++;
                right--;
            } else {
                return this.isPallindrom(s,left + 1, right) || this.isPallindrom(s, left, right - 1);
            }
        }

        return true;
    }

    isPallindrom(s, left, right) {
            while (left < right) {
                if (s[left] === s[right]) {
                    left++;
                    right--
                }else{
                    return false
                }
            }
            return true
        }
}
