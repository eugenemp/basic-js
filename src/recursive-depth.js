const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    //When we'll call function recursively the execution context will change
    //so to preserve the initial one we need to define the reference to it 
    const self = this;

    return (
      //If argument is array, return 1 and sums this value with next one aquired by these steps:
      // * Cycle through the current array with reduce method
      // * Math.max() compares current element's depth with next one calculated by 
      //   recursively called calculateDepth() function 
      Array.isArray(arr) ? 1 + arr.reduce(function(currentDepth, item) {

        return Math.max(currentDepth, self.calculateDepth(item));             
      }, 0) : 0  //Return 0 if passed argument is not an array
    );
  }
};



