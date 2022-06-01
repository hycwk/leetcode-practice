/*
 * @lc app=leetcode id=1337 lang=javascript
 *
 * [1337] The K Weakest Rows in a Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
	const r = mat.map((m, index) => {
		let c = 0;
		for(let i = 0; i < m.length; i++) {
			c = m[i] == 1 ? c + 1 : c;
		}
		return [index, c];
	}).sort((a, b) => {
		if (a[1] === b[1]) {
			return a[0] - b[0];
		} else {
			return a[1] - b[1];
		}
	})
	return r.slice(0, k).map(obj => obj[0]);
};
// @lc code=end

// var mat = 
// [[1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]], 
// k = 3;

// console.log(kWeakestRows(mat, k));