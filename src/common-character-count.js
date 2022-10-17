const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let number = 0;
  let lengthStr = s1.length;

  for (let i = 0; i < lengthStr; i++) {
    let elem = s1[i];
    if(s2.includes(elem)) {
      number = number + 1;
      s2 = s2.replace(elem, '');
    }
  }
  return number;
}

module.exports = {
  getCommonCharacterCount
};
