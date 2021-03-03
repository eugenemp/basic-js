const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const LN2= 0.693;

module.exports = function dateSample(sampleActivity) {
  // * Check if argument type is 'string' and there is a only number in it
  // * Check range of the sample activity value 
  if(
    typeof(sampleActivity) !== 'string' ||
    isNaN(parseFloat(sampleActivity))   ||
    parseFloat(sampleActivity) <= 0     ||
    parseFloat(sampleActivity) > 15

    ) return false;
  //Convert argument to 'number'
  sampleActivity = parseFloat(sampleActivity);
  //Calculate rate constant for the reaction
  let k = LN2 / HALF_LIFE_PERIOD;
  //Calculate sample approximate age
  let result = Math.log(MODERN_ACTIVITY / sampleActivity) / k;
  //Finally return rounded up result
  return Math.ceil(result);
};
