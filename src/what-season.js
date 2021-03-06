const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  //Check if argument is passed to the function
  if(!date) return 'Unable to determine the time of year!';  
    //Check if passed argument is a real Date object and throw an error if not
    if(Object.prototype.toString.call(date) !== "[object Date]" ) {
      throw Error;
    };  
    //Get month value and return corresponding season
    let month = date.getMonth();

    return (month > 10 || month < 2) ? 'winter' :
                         (month < 5) ? 'spring' :
                         (month < 8) ? 'summer' :
                                       'autumn' ;
    
};
