/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
	const rnArr = Array.from(ransomNote);
	const mArr = Array.from(magazine);
	for (let index = 0; index < mArr.length; index++) {
		const matchingIndex = rnArr.indexOf(mArr[index]);
		if (matchingIndex >= 0) {
			rnArr.splice(matchingIndex, 1)
		}
	}
	return rnArr.length <= 0
};
// @lc code=end
