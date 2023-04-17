const fs = require('fs');

const filename = 'user_data.json';

let users_reg_data = {};

if (fs.existsSync(filename)) {
  const data = fs.readFileSync(filename, 'utf-8');
  users_reg_data = JSON.parse(data);
}

// Add new user
const username = 'newuser';
users_reg_data[username] = {};
users_reg_data[username].password = 'newpass';
users_reg_data[username].email = 'newuser@user.com';

// Write updated data to file
fs.writeFileSync(filename, JSON.stringify(users_reg_data));

console.log(users_reg_data);
