const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(team) {

  //Return false on wrong type
  if(!Array.isArray(team)) return false;

  let str;
  let result = [];
    
  team.forEach(element => {

    //Check if current value of the aray is string...
    if(typeof element == 'string') {
  
      //...if so, remove whitespaces and pupulate array with chars
      //converted to uppercase
      str = element.replace(/\s+/g, '');
      result.push(str.charAt(0).toUpperCase());
    }
  });

  //Sort characters in result array, convert to string and return
  return result.sort().join('');
};
