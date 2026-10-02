class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hash = {};

    for(let i = 0; i< strs.length; i++){
        let sortedKeys = strs[i].split('').sort().join('')
        if(!hash[sortedKeys]){
            hash[sortedKeys] =[strs[i]]
        }else{
         hash[sortedKeys].push(strs[i])
        }
    }

    return Object.values(hash)
    }
}
