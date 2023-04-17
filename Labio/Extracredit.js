app.get("/login", function (request, response) {
    // Give a simple login form
    let username = "";
    let password = "";
    if (request.query.username && request.query.password) {
        username = request.query.username;
        password = request.query.password;
    }
    str = `
<body>
<form action="/login" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" value="${username}"><br />
<input type="password" name="password" size="40" placeholder="enter password" value="${password}"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
});
