const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(type) {
    this.type = type;

    this.latin = 'abcdefghijklmnopqrstuvwxyz'; 

    this.encrypt = function(message, key) {

      if(!message) throw Error;

      message = message.toLowerCase();
      key = key.toLowerCase();
      while(key.length < message.length) key += key;

      let encStr = ''; // - Result string where we push encrypted letters
      let j = 0;       // - Counter for 'key' letters. If current char of the message is not a letter
                       //do not raise it and pass that char as is

      for(let i = 0; i < message.length; i++) {
        if(message[i].match(/[a-z]/ig)) {
          //Index of current 'message' and 'key' characters in the string of latin alphabet letters 
          let mesCharNum = this.latin.indexOf(message[i]);  
          let keyCharNum = this.latin.indexOf(key[j]);          
          let encCharNum = (mesCharNum + keyCharNum) % 26;
          //Convert resulted number to letter and add to the result string
          encStr += this.latin[encCharNum].toUpperCase();
          j++;
          //If current message char is not a letter than pass it to result string as is
        } else encStr += message[i].toUpperCase();
      }
      return this.type === false ? encStr.split('').reverse().join('') : encStr;
    }
    
    
    this.decrypt = function(encryptedMessage, key) {

      if(!encryptedMessage) throw Error;

      encryptedMessage = encryptedMessage.toLowerCase();
      key = key.toLowerCase();
      while(key.length < encryptedMessage.length) key += key;

      let decStr = '';
      let j = 0;

      for(let i = 0; i < encryptedMessage.length; i++) {
        if(encryptedMessage[i].match(/[a-z]/ig)) {

          let mesCharNum = this.latin.indexOf(encryptedMessage[i]);
          let keyCharNum = this.latin.indexOf(key[j]);
          let decCharNum = (mesCharNum - keyCharNum + 26) % 26;
          decStr += this.latin[decCharNum].toUpperCase();
          j++;

        } else decStr += encryptedMessage[i].toUpperCase();
      }
      return this.type === false ? decStr.split('').reverse().join('') : decStr;
    }
  }
}

module.exports = VigenereCipheringMachine;
