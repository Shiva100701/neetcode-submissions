class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStrings = "";
        for (const str of strs) {
            encodedStrings += `${str.length}#${str}`;
        }
        return encodedStrings;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decodedString = [];
        let i = 0;

        while (i < str.length) {
            let delimiter = str.indexOf("#", i);
            console.log("delimiter--> ", delimiter);
            let length = parseInt(str.substring(delimiter, i));

            let getStr = str.substring(delimiter + 1, delimiter + 1 + length);

            decodedString.push(getStr);
            i = delimiter + 1 + length;
        }

        return decodedString;
    }
}
