const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  
  //Throw an Error if type is wrong or return empty array if passed one is also empty
  if(!Array.isArray(arr)) throw Error;
  if(arr.length === 0) return [];
  //Clone original array so it will stay anaffected
  let temp = [];
  let result = [];
  
  arr.forEach( item => temp.push(item) );

  //Search for control sequence while cycling through array
  for(let i = 0; i < arr.length; i++) {

    //Once sequence is found:
    //Check if element next or previous to control sequence is not 'undefind'
    //If it is true, delete control sequence and make changes to specified element
    //If it is false, so item near control sequence is 'underfined', delete only control sequence
    //Use 'delete' command or copy element if needed to preserve array's length while making changes    
    if(temp[i] === '--discard-next') temp[i + 1] !== undefined ? 
    (delete temp[i], delete temp[i + 1]) : delete temp[i];

    if(temp[i] === '--discard-prev') temp[i - 1] !== undefined ? 
    (delete temp[i], delete temp[i - 1]) : delete temp[i];

    if(temp[i] === '--double-next' ) temp[i + 1] !== undefined ? 
    temp[i] = temp[i + 1] : delete temp[i];

    if(temp[i] === '--double-prev' ) temp[i - 1] !== undefined ? 
    temp[i] = temp[i - 1] : delete temp[i];
  };
  //Filter result array to not include 'null' elements
  return temp.filter(item => item !== null);
};
