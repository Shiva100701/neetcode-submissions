class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let temp = "";
        let maxLen = Math.max(word1.length, word2.length);
        let minLen = Math.min(word1.length, word2.length);

        for (let i = 0; i < minLen; i++) {
            temp += word1[i] + word2[i];
        }
        let count = temp.length / 2;
        if (maxLen === word1.length) {
            let remainigword = word1.slice(count);
            temp += remainigword;
        } else {
            let remainigword = word2.slice(count);
            temp += remainigword;
        }
        return temp;
    }
}
