class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map = {};
        for (let i = 0; i < numbers.length; i++) {
            let needed = target - numbers[i];

            if (map[needed] !== undefined) {
                return [map[needed] + 1, i + 1];
            }

            map[numbers[i]] = i;
        }

        return [];
    }
}
