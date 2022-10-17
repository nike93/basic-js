const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr: [],
  getLength() {
    return this.chainArr.length;
    
  },
  addLink(value) {
    this.chainArr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    let lenChain = this.chainArr.length;
    if((position - 1 >= 0) && (position - 1 < lenChain)) {
      this.chainArr.splice(position - 1, 1);
      return this;
    } else {
      this.chainArr.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    let finish = this.chainArr.join('~~');
    this.chainArr.length = 0;
    return finish;
  }
};

module.exports = {
  chainMaker
};
