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
//Your runtime beats 18.76 % of javascript submissions
//Your memory usage beats 22.42 % of javascript submissions (45.9 MB)
//コード汚い
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
        if(s[i] === 'I') {
            if(s[i+1] === 'V') {
                answer += 4;
                i++;
                continue;
            }
            if(s[i+1] === 'X') {
                answer += 9;
                i++;
                continue;
            }
        }
        if(s[i] === 'X') {
            if(s[i+1] === 'L') {
                answer += 40;
                i++;
                continue;
            }
            if(s[i+1] === 'C') {
                answer += 90;
                i++;
                continue;
            }

        }
        if(s[i] === 'C') {
            if(s[i+1] === 'D') {
                answer += 400;
                i++;
                continue;
            }
            if(s[i+1] === 'M') {
                answer += 900;
                i++;
                continue;
            }

        }
        
        answer += romenArray[s[i]];
            
    }

    return answer;
    
};
// @lc code=end

