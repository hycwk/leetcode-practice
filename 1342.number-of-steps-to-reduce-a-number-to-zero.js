/*
 * @lc app=leetcode id=1342 lang=javascript
 *
 * [1342] Number of Steps to Reduce a Number to Zero
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
	let step = 0;
	while (num > 0) {
		step += 1;
		num = num % 2 === 1 ? num - 1 : num / 2;
	}
	return step;
};
// @lc code=end

