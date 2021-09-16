/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

class Stack {
    constructor() {
        this.stack = [];
    }

    get length() {
        return this.stack.length;
    }

    push(v) {
        this.stack.unshift(v);
    }

    pop() {
        return this.stack.shift();
    }
}

var isValid = function(s) {
    if(s.length % 2) {
        return false;
    }

    if(!s.includes(')') && !s.includes('}') && !s.includes(']')) {
        return false;
    }

    const parenthesesStack = new Stack();
    const parenthesesMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for(let i = 0; i < s.length; i++) {
        if('(' === s[i] || '{' === s[i] || '[' === s[i]) {
            parenthesesStack.push(s[i]);
        } 
        else if(parenthesesMap[parenthesesStack.pop()] !== s[i]) {
            return false;
        }
    }

    return parenthesesStack.length === 0; 
};

// @lc code=end

