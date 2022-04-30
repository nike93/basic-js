const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let letters = 'GHIJKLMNOPQRSTUVWXYZ';
 
  n = n.split('-');
  if (n.length !== 6) {
    return false;
  } else {
  for(let i = 0; i < n.length; i++) {
    if(n[i].length !== 2) {
      return false;
    };    
  }
    let strArr = [];
    strArr = n.reduce((sum, currVal) => sum + currVal);
    strArr = strArr.split('');
    for (let i = 0; i < strArr.length; i++){
      if(letters.includes(strArr[i])){
        return false;
      }
    }
  }
  return true;
}
module.exports = {
  isMAC48Address
};
