/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
 //Your runtime beats 12.35 % of javascript submissions
 //Your memory usage beats 9.97 % of javascript submissions (49.1 MB)
 //TODO:文字列変換を使わずに回答する
var isPalindrome = function(x) {
    if(x < 0) return false;
    const numStr = String(x);
    const numLength = numStr.length;

    for(let i = 0; i < numLength / 2; i++){ 
        if(numStr[i] !== numStr[numLength - i - 1]) {
            return false;
        }
    }
    return true;
};
// @lc code=end

