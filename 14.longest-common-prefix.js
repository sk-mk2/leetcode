/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
//改善の余地ありそう
var longestCommonPrefix = function (strs) {
    let lcp = "";
    const {minLength, minLengthIndex} = searchMinLength(strs);

    for (let i = 0; i < minLength; i++) {
        for (let j = 0; j < strs.length; j++) {
            if(strs[minLengthIndex][i] !== strs[j][i]){
                return lcp;
            }
        }

        lcp += strs[minLengthIndex][i];

    }
    return lcp;

};

function searchMinLength(strs) {
    let minLength = 201;
    let minLengthIndex = 0;
    strs.forEach((s,i) => {
        if(minLength > s.length){
            minLength = s.length;
            minLengthIndex = i;
        } 

    });
    return {minLength, minLengthIndex};

}
// @lc code=end

