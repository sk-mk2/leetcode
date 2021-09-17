/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//愚直な回答
var mergeTwoLists = function(l1, l2) {
    const tmpArray = [];

    while(l1){
        tmpArray.push(l1.val);
        l1 = l1.next;
    }  
    while(l2){
        tmpArray.push(l2.val);
        l2 = l2.next;
    }  
    if(!tmpArray.length){
        return null;
    }
    tmpArray.sort((a,b) => a - b);
    const headNode = new ListNode(tmpArray[0]);

    if(tmpArray.length === 1) {
        return headNode;
    }
    

    let  currentNode = new ListNode();
    headNode.next = currentNode;
    for(let i = 1; i < tmpArray.length; i++) {
        currentNode.val = tmpArray[i];
        if(tmpArray[i+1] !== undefined) {
            currentNode.next = new ListNode();
        }
        currentNode = currentNode.next;
    }

    return headNode;
};

// @lc code=end

