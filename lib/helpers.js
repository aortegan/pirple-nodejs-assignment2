/*
 * Helpers for various tasks
 *
 */

// Dependencies
var crypto = require('crypto');
var https = require('https');
var querystring = require('querystring');

var config = require('./config');

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

helpers.parseJsonToObject = (str)=>{

};

/*
 * EXPORT MODULE
 */
module.exports = helpers;
