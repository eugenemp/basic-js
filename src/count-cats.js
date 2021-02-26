const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

  //Check if argument is passed
  if(!matrix) return 0;

  //Result counter
  let count = 0;
  
  //Check if specified chars exist in any subarray
  for(let i = 0; i < matrix.length; i++) {

    matrix[i].forEach(element => {
      if(element === '^^') count++;
    });
  };
  
  return count;
};
