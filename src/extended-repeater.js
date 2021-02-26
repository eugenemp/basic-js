const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //Convert str to string type also if null is passed
  str = (str === null) ? 'null' : str.toString();

  let result = [];
  //Check options arguments for specific cases
  //"addition" variable need to be converted to string if false or null values passed
  let repTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition = (options.addition === false) ? 'false' :
                  (options.addition === null) ? 'null' :
                    options.addition || '';

  let addRepTimes = options.additionRepeatTimes || 1;
  let addSeparator = options.additionSeparator || '';
  //If more than one "addition" passed repeat it with additionSeparator inserted
  if(addRepTimes > 1) {
    let arr = [];

    for(let i = 0; i < addRepTimes; i++) {
      arr.push(addition);
    };
    addition = arr.join(addSeparator);
  };
  //Repeat str with inserted addition
  for(let i = 0; i < repTimes; i++) {  
    result.push(str + addition);
  }
  //Return result string with inserted str separator
  return result.join(`${separator}`);
};