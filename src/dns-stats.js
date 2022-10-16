const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(/* domains */) {
    let result = {};
  if (domains.length === 0) {
    return result;
  } else {
    let newArr = domains.map(e => e.split('.').reverse());
    let count0 = 0;  
    let count1 = 0;
    let count2 = 0;
    let value0 = newArr[0][0];
    let value1 = newArr[0][1];
    let value2 = newArr[0][2];
    let lastValue;
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i][0] === value0) {
        count0 += 1;
      } 
      if (newArr[i][1] === value1 && newArr[i][0] === value0){
        count1 += 1;
      }
      if(newArr[i][2]) {
        if(newArr[i][2] === value2 && newArr[i][1] === value1 && newArr[i][0] === value0){
          count2 += 1;
        } else {
          lastValue = newArr[1][2];
          //console.log('lastValue=', newArr[1][2])
        }
      }
      }  
      
      result[`.${value0}`] = count0;
      result[`.${value0}.${value1}`] = count1;
      if(value2){
        result[`.${value0}.${value1}.${value2}`] = count2;
        
      }
      if (lastValue) {
        result[`.${value0}.${value1}.${lastValue}`] = 1;
      }
    return result;
  }
}
}

module.exports = {
  getDNSStats
};
