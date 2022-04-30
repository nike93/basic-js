const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newString = "";
		if (str.length == 1) {
			return str;
		}
			for (let i = 0; i < str.length; i++) {
				let item = str[i];
				let counter = 1;
					while (str[i+1] === item){
						counter++;
						i++;
					} 
          if (counter === 1) {
            counter = '';
          }
				newString += counter + item;
			}
		
			return newString;			
    }




module.exports = {
  encodeLine
};
