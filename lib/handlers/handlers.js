/*
 * Request handlers
 *
 */

 // Dependencies
let users = require('./users');
let tokens = require('./tokens');
let carts = require('./carts');
let orders = require('./orders');

// Define handlers object
let handlers = {};

/*
* USERS
*/
handlers.users = (data,callback)=>{
  users(data,callback);
};

/*
* TOKENS
*/
handlers.tokens = (data,callback)=>{
  tokens(data,callback);
};

/*
* CARTS
*/
handlers.carts = (data,callback)=>{
  carts(data,callback);
};

/*
* ORDERS
*/
handlers.orders = (data,callback)=>{
  orders(data,callback);
};

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
