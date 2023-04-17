const fs = require('fs');
const express = require('express');
const app = express();

const filename = 'user_data.json';

if (fs.existsSync(filename)) {
  const data = fs.readFileSync(filename, 'utf-8');
  const users_reg_data = JSON.parse(data);
  console.log(users_reg_data);
} else {
  console.log('File not found');
}

app.use(express.urlencoded({ extended: true }));

app.get('/login', function (request, response) {
  // Give a simple login form
  str = `
  <body>
    <form action="/login" method="POST">
      <input type="text" name="username" size="40" placeholder="enter username" ><br />
      <input type="password" name="password" size="40" placeholder="enter password"><br />
      <input type="submit" value="Submit" id="submit">
    </form>
  </body>
  `;
  response.send(str);
});

app.post('/login', function (request, response) {
  // Process login form POST and redirect to logged in page if ok, back to login page if not
  let username = request.body.username;
  let password = request.body.password;

  if (username in users_reg_data && password === users_reg_data[username].password) {
    // Successful login, generate logged in page
    str = `
    <body>
      <h1>${username} logged in</h1>
    </body>
    `;
    response.send(str);
  } else {
    // Incorrect username or password, redirect back to login page
    response.redirect('/login');
  }
});

app.listen(8080, () => console.log(`listening on port 8080`));
