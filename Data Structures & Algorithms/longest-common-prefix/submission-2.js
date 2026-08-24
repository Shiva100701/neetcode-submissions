class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let refStr = strs[0];

  let result = "";

   if(strs.length === 1){
    return refStr
  }
  for (let i = 0; i < refStr.length; i++) {
    for (let j = 1; j < strs.length; j++) {

      if (refStr[i] !== strs[j][i]) {
        return result;
      }
    }
    
        result += refStr[i]
    
  }
  return result;
    }
}
