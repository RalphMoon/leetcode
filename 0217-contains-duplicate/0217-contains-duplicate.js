/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
    const isRepeated = nums.some((num, index) => {
        const numIndex = nums.indexOf(num);

        return numIndex !== index && numIndex !== -1;
    });

    return isRepeated;
};2