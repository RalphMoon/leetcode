/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const pairIndex = nums.indexOf(target - nums[i]);

        if (pairIndex !== i && pairIndex !== -1) {
            result.push(i, pairIndex);
            break;
        }
    }
    
    return result;
};