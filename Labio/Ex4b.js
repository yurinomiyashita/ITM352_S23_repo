const fs = require('fs');
const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));

const filename = 'user_data.json';

let users_reg_data = {};

if (fs.existsSync(filename)) {
  const data = fs.readFileSync(filename, 'utf-8');
  users_reg_data = JSON.parse(data);
}

app.get("/register", function (request, response) {
  // Give a simple register form
  str = `
    <body>
      <form action="/register" method="POST">
        <input type="text" name="username" size="40" placeholder="enter username" required><br>
        <input type="password" name="password" size="40" placeholder="enter password" required><br>
        <input type="password" name="repeat_password" size="40" placeholder="enter password again" required><br>
        <input type="email" name="email" size="40" placeholder="enter email" required><br>
        <input type="submit" value="Register" id="submit">
      </form>
    </body>
  `;
  response.send(str);
});

app.post("/register", function (request, response) {
  // process a simple register form
  const username = request.body.username;
  const password = request.body.password;
  const repeat_password = request.body.repeat_password;
  const email = request.body.email;

  let errors = [];

  // Check for errors
  if (username.length < 4 || username.length > 10) {
    errors.push("Username must be between 4 and 10 characters.");
  }

  if (password.length < 6 || password.length > 20) {
    errors.push("Password must be between 6 and 20 characters.");
  }

  if (password !== repeat_password) {
    errors.push("Passwords do not match.");
  }

  if (!email.includes('@')) {
    errors.push("Invalid email address.");
  }

  if (users_reg_data.hasOwnProperty(username)) {
    errors.push("Username is already taken.");
  }

  // If there are errors, display them to the user
  if (errors.length > 0) {
    let str = "<ul>";
    for (let i = 0; i < errors.length; i++) {
      str += "<li>" + errors[i] + "</li>";
    }
    str += "</ul>";
    response.send(str);
    return;
  }

  // Add user to users_reg_data and write to file
  users_reg_data[username] = {
    password: password,
    email: email
  };
  fs.writeFileSync(filename, JSON.stringify(users_reg_data));

  // Redirect to login page
  response.redirect('/login');
});

app.get("/login", function (request, response) {
  // Give a simple login form
  let str = `
    <body>
      <form action="/login" method="POST">
        <input type="text" name="username" size="40" placeholder="enter username" required><br>
        <input type="password" name="password" size="40" placeholder="enter password" required><br>
        <input type="submit" value="Login" id="submit">
      </form>
    </body>
  `;
  response.send(str);
});

app.post("/login", function (request, response) {
  // Process login form POST and redirect to logged in page if ok, back to login page if not
  const username = request.body.username;})
