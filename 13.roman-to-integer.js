/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 //Your runtime beats 95.37 % of javascript submissions
 //Your memory usage beats 73.38 % of javascript submissions (44.4 MB)
var romanToInt = function(s) {
    const romenArray = {
        'I': 1,
        'V': 5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    };

    let answer = 0;
    for(let i = 0; i < s.length; i++) {
        if(i !==  s.length-1 && romenArray[s[i]] < romenArray[s[i+1]]) {
            answer -= romenArray[s[i]];
        } else {
            answer += romenArray[s[i]];
        }       
    }

    return answer;
    
};
// @lc code=end

