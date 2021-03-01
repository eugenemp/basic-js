const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //The formula to find the number of steps needed to move all disks to 
  //another rod is 2^n - 1, where 'n' is the disks amount:
  let steps = Math.pow(2, disksNumber) - 1;
  // * Calculate the time needed to one turn with specified speed
  // * Multiply it by amount of previously found steps
  // * Also multiply result by 60 to find time in seconds
  // * Round down result
  let time = Math.floor(60 / turnsSpeed * steps * 60);
  //Return array of results
  return {turns: steps, seconds: time};
};
