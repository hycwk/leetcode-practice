/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
	if (nums[0] > target) {
		return 0;
	}
	for (let i in nums) {
		if (nums[i] === target || (nums[i-1] < target && nums[i] > target)) {
			return i;
		}
	}
	return nums.length;
};
// @lc code=end

