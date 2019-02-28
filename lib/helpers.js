/*
 * Helpers for various tasks
 *
 */

// Dependencies
let crypto = require('crypto');
let https = require('https');
let querystring = require('querystring');

let config = require('./config');

// container for helpers
let helpers = {};

// Create a SHA256 hash (already built in node module)
helpers.hash = (str)=>{
  if (typeof(str) == 'string' && str.length > 0) {
    var hash = crypto.createHmac('sha256', config.hashingSecret).update(str).digest('hex');
    return hash;
  } else {
    return false;
  }
}

// parse a JSON string to an Object in all cases without throwing
helpers.parseJsonToObject = function(str) {
  try {
    var obj = JSON.parse(str);
    return obj;
  } catch (e) {
    return {};
  }
}

// Create a string of random  alphanumeric characters, of a given length
helpers.createRandomString = function(strLength) {
  strLength = typeof(strLength) == 'number' && strLength > 0 ? strLength : false;
  if (strLength) {
    // Define all the possible characters that could go into the string
    var possibleCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';

    // Start final string
    var str = '';
    for (i = 1; i <= strLength; i++) {
      // Get a random character from the possibleCharacters string
      var randomCharacter = possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
      // Append this character to the final string
      str += randomCharacter;
    }

    // Return the string
    return str;

  } else {
    return false;
  }
};


/*
 * EXPORT MODULE
 */
module.exports = helpers;
