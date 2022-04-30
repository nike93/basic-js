const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = String(n).split('');
  let max;
  if (n.length === 2) {
    n.sort((a, b) => a - b);
    return Number(n.pop());
  } else {
  function maxValue (arr) {
    max = Math.max(...arr);
  }
  maxValue(n);
  
  let result = n.filter((elem, index) => index !== (n.lastIndexOf(String(max))) - 1).join('')
  return Number(result);
  }
  }

module.exports = {
  deleteDigit
};
