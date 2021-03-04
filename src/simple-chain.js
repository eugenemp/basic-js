const CustomError = require("../extensions/custom-error");

const chainMaker = {
  //Define array for chains
  chain: [],
  //Chain length equals array's length
  getLength() {
    console.log(this.chain.length);

    return this;
  },
  //If argumrnt is null convert to string by hand, decorate value
  //and add to array
  addLink(value) {
    this.chain.push(`( ${(value === null) ? 'null' : value} )`);

    return this;
  },
  //Remove specific chain using splice method or throw an error
  //and reset array if specified position number is wrong
  removeLink(position) {
    if(this.chain[position]) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw Error;
      };

    return this; 
  },
  //Reverse accumulated chain by using array's reverse method
  reverseChain() {
    this.chain.reverse();

    return this;    
  },
  //Join chains with separator, copy result to temporary variable,
  //reset array and return result
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];

    return result;
  }
};

module.exports = chainMaker;
