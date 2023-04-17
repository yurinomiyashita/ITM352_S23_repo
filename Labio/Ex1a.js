var fs= require('fs');  //fs file system 
var filename = dirname +'user_data.json';

console.log(typeof(user_data.json)); 

const users_reg_data = require('./user_data.json');
console.log(users_reg_data);
console.log(users_reg_data.kazman.password); 