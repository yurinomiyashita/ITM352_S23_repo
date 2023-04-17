app.post("/register", function (request, response) {
    // process a simple register form
    var errors = [];
    var username = request.body.username;
    var password = request.body.password;
    var repeat_password = request.body.repeat_password;
    var email = request.body.email;
  
    // check if username already exists
    if (typeof users_reg_data[username] != 'undefined') {
      errors.push("Username already exists");
    }
  
    // check if password and repeat_password match
    if (password !== repeat_password) {
      errors.push("Passwords do not match");
    }
  
    if (errors.length == 0) {
      // save new user info
      users_reg_data[username] = {};
      users_reg_data[username].password = password;
      users_reg_data[username].email = email;
  
      // write updated users_reg_data to file
      fs.writeFileSync(filename, JSON.stringify(users_reg_data));
  
      // redirect to login page
      response.redirect("/login");
    } else {
      // redirect to register page with errors
      request.query.errors = errors.join(';');
      response.redirect("/register?" + qs.stringify(request.query));
    }
  });
  