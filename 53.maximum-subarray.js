/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let bigSum = nums[0];
    let pastSum = nums[0];
    let currentSum;
    const max = (a, b) => a > b ? a : b;

    for(let i = 1; i < nums.length; i++) {
        currentSum = (max(pastSum + nums[i], nums[i]));
        bigSum = max(bigSum, currentSum);
        pastSum = currentSum;
    }
    return bigSum;    
};
// @lc code=end

