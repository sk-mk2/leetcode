/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 *
 * function ListNode(val, next) {
 *    this.val = (val===undefined ? 0 : val)
 *    this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//再帰での解法
var mergeTwoLists = function(l1, l2) {
    if(!l1 || !l2) {
        return l1 || l2;
    }
    if(l1.val >= l2.val) {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    } else {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
};

// @lc code=end

