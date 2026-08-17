class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
          if(s.length !== t.length){
        return false
    }

  let sMap = {}
  for(let char of s){
    sMap[char] = (sMap[char] || 0) +1
  }

  for(let char of t){
    if(!sMap[char]){
        return false
    }
    sMap[char]--
    if(sMap[char] < 0){
        return false
    }
  }
    return true
    }
}
