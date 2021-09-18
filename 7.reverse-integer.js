/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const numArray = String(x).split('');
    const isNegative = numArray[0] === '-';

    if(isNegative) {
        numArray.shift();
    }

    const reversedNumArray = numArray.reverse();
    let reversedNum = Number(reversedNumArray.join(''));

    if(isNegative) {
        reversedNum *= -1;
    }

    if(reversedNum < -1 * Math.pow(2,31) || Math.pow(2,31) - 1 < reversedNum) {
        return 0;
    }

    return reversedNum;    
};

// @lc code=end

