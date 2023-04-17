// load file system interface
var fs = require('fs');
var filename = __dirname + '/user_data.json';
var user_data = require(filename);
// read in user data
// covert user data JSON to object
// get password for user kazman
var username = 'kazman';
console.log(`The password for user ${username} is ${user_data[username]['password']}`);
 