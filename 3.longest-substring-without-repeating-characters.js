/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let longestLength = 0;
    let currentLength = 0;
    let currentStr = "";
    if(s.length) {
        longestLength = 1;
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (currentStr.indexOf(s[j]) !== -1) {
                longestLength = currentLength > longestLength ? currentLength : longestLength; 
                currentStr = "";
                currentLength = 0;
                break;
            }
            currentStr += s[j];
            currentLength++;
        }
    }

    return longestLength;
};
// @lc code=end

