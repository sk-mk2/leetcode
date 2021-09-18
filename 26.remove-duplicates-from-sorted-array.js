/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;
    const newNums = [];
    for(let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i-1] === nums[i]) {
            nums.splice(i, 1);
            i--;
            continue;
        }
        newNums.push(nums[i]);
        k++;
    }
    return k;
    
};
// @lc code=end

