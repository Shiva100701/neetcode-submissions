class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let found = 0;
        let left = 0;
        let right = s.length - 1;

        function isPallindrom(left, right) {
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

        while (left < right) {
            if (s[left] === s[right]) {
                left++;
                right--;
            } else {
                return isPallindrom(left + 1, right) || isPallindrom(left, right - 1);
            }
        }

        return true;
    }
}
