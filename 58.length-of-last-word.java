/*
 * @lc app=leetcode id=58 lang=java
 *
 * [58] Length of Last Word
 */

// @lc code=start
class Solution {
    public int lengthOfLastWord(String s) {
        String[] wordArray = s.split(" ");
        return wordArray[wordArray.length-1].length();        
    }
}
// @lc code=end

