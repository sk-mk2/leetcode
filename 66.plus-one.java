/*
 * @lc app=leetcode id=66 lang=java
 *
 * [66] Plus One
 */

// @lc code=start
class Solution {
    public int[] plusOne(int[] digits) {
        digits[digits.length - 1]++;
        if(digits[digits.length - 1] != 10) {  
           return digits;
        }

       for(int i = digits.length - 1; i >= 0; i--) {
           if(digits[i] == 10) {
               digits[i] = 0;
               if(i-1 >= 0) {
                   digits[i-1]++;
               } else {
                   int[] newDigits = new int[digits.length + 1];
                   System.arraycopy(digits, 0, newDigits, 1, digits.length);
                   newDigits[0] = 1;
                   return newDigits;
               }               
           }
       }
       return digits;
    }
}
// @lc code=end

