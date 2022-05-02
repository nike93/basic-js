const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (options.addition === null || options.addition === false){
    options.addition= String(options.addition);
  }

  let repeatTimes = options.repeatTimes || 1 ;
  let separator = String(options.separator || '+');
  let addition = String(options.addition || '');
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = String(options.additionSeparator || '|');
  let arr = [[String(str)], []];

  let newStr;

    for (let i = 0; i < additionRepeatTimes; i++) {
      arr[1].push(addition);
    }
    arr[1] = arr[1].join(additionSeparator);
    newStr = arr.join('');
    arr = [];
    for (let i = 0; i < repeatTimes; i++) {
      arr.push(newStr);
    }
    return arr.join(separator)
}

module.exports = {
  repeater
};
