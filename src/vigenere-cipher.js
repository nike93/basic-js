const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  decoder(n1, n2, message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let counter = 0;
    let messageUpper = message.toUpperCase().split('');
    let keyUpper = key.toUpperCase().split('').map(char => char.charCodeAt(0) - 65);
    let result = [];
    for (let i = 0; i < messageUpper.length; i++) {
      let position = messageUpper[i].charCodeAt(0);

      if (position >= 65 && position < 91) {
        result.push(String.fromCharCode(65 + (position - 65 + n1 * keyUpper[counter % keyUpper.length] + n2) % 26));
        counter++;
      } else {
        result.push(messageUpper[i]);
      }
    }

    return this.direct ? result.join('') : result.reverse().join('');
  }

  encrypt(message, key) {
    let n1 = 1;
    let n2 = 0;
    return this.decoder(n1, n2, message, key);
  }

  decrypt(message, key) {
    let n1 = -1;
    let n2 = 26;
    return this.decoder(n1, n2, message, key);
  }
}

module.exports = {
  VigenereCipheringMachine
};
