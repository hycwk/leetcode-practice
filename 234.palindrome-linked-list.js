/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
	const arr = new Array();
	let counter = head;
	while(counter != null) {
		arr.push(counter.val);
		counter = counter.next;
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== arr[-i]) {
			return arr;
		}
	}
	return true;
};
// @lc code=end
// console.log(isPalindrome([1,2,2,1]))
