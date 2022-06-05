/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
	const arr = Array.from({length: n}, (v, i) => i)
	return arr.map((num, i) => {
		const order = i + 1;
		if (order % 3 == 0 && order % 5 == 0) {
			return "FizzBuzz"
		} else if (order % 3 == 0) {
			return "Fizz"
		} else if (order % 5 == 0) {
			return "Buzz"
		} else {
			return order.toString()
		}
	})
};
// @lc code=end
