/*
 * Request handlers
 *
 */

// Dependencies
var _data = require('./data');
var helpers = require('./helpers');
var config = require('./config');

// Define handlers object
let handlers = {};

/*
 * USERS
 */
handlers.users = (data,callback)=>{
  let acceptableMethods = ['post','get','put','delete'];
  if(acceptableMethods.indexOf(data.method) > -1){
    handlers._users[data.method](data,callback);
  } else {
    // Method not allowed
    callback(405);
  }
}

// Container for the users submethods
handlers._users = {};

// Users - POST
// Required data: firstName, lastName, email, password, address, tosAgreement
// Optional data: role
handlers._users.post = (data,callback)=>{
  // Check that all the required fields are filled out
  let firstName = typeof(data.payload.firstName) == 'string' && data.payload.firstName.trim().length > 0 ? data.payload.firstName.trim() : false;
  let lastName = typeof(data.payload.lastName) == 'string' && data.payload.lastName.trim().length > 0 ? data.payload.lastName.trim() : false;
  let email = typeof(data.payload.email) == 'string' && data.payload.email.trim().length > 0 ? data.payload.email.trim() : false;
  let password = typeof(data.payload.password) == 'string' && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false;
  let address = typeof(data.payload.address) == 'object' ? true : false;
  let tosAgreement = typeof(data.payload.tosAgreement) == 'boolean' && data.payload.tosAgreement == true ? true : false;

  // Verify email with Mailgun API
  let validEmail = true;

  if(validEmail){
    if(firstName && lastName && email && password && address && tosAgreement){
      // Make sure that the user doesn't already exist
      // get list of all emails and check if new email is already there
      if(err){
        // Hash the password

        // Create the user object

        // Persist the user to the disk
      } else {
        callback(400,{'Error' : 'A user with that email address already exists'});
      }
    } else {
      callback(400,{'Error' : 'Missing required fields'});
    }
  } else {
    callback(400,{'Error' : 'Email is not valid'});
  }
};

// Users - GET
// Required data: email
// Optional data: none

// Users - PUT
// Required data: email
// Optional data: firstName, lastName, password, address, role (at least one must be specified)

// Users - DELETE
// Required data: email
// Optional data: none

/*
 * TOKENS
 */
handlers.tokens = (data,callback)=>{
  let acceptableMethods = ['post','get','put','delete'];
  if(acceptableMethods.indexOf(data.method) > -1){
    handlers._tokens[data.method](data,callback);
  } else {
    // Method not allowed
    callback(405);
  }
};

// Container for all the tokens methods
handlers._tokens = {};

// Tokens - POST
// Required data: email and password
// Optional data: none

// Tokens - GET
// Required data: id
// Optional data: none

// Tokens - PUT
// Required data: id and extend
// Optional data:

// Tokens - DELETE
// Required data: id
// Optional data: none

/*
 * CARTS
 */
handlers.carts = (data,callback)=>{
  let acceptableMethods = ['post','get','put','delete'];
  if(acceptableMethods.indexOf(data.method) > -1){
    handlers._carts[data.method](data,callback);
  } else {
    // Method not allowed
    callback(405);
  }
};

// Container for the carts submethods
handlers._carts = {};

// Carts - POST
// Required data: items
// Optional data: none

// Carts - GET
// Required data: id
// Optional data: none

// Carts - PUT
// Required data: id and items
// Optional data: none

// Carts - DELETE
// Required data: id
// Optional data: none

/*
 * ORDERS
 */
handlers.orders = (data,callback)=>{
 let acceptableMethods = ['post','get','put','delete'];
 if(acceptableMethods.indexOf(data.method) > -1){
   handlers._orders[data.method](data,callback);
 } else {
   // Method not allowed
   callback(405);
 }
};

 // Container for the carts submethods
 handlers._orders = {};

// Orders - POST
// Required data: cartId,stripeId
// Optional data: deliveryTime

// Orders - GET
// Required data: id
// Optional data: none

// Orders - PUT
// Required data: id and orderStatus
// Optional data: none
// TODO: modify items. This means refund and new payment, or refund difference, or payment of difference

// Orders - DELETE
// Required data: id
// Optional data: none

/*
 * 404 handler
 */
handlers.notFound = (data,callback)=>{
	callback(404);
};

/*
 * EXPORT MODULE
 */
module.exports = handlers;
