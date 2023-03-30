var express = require('express');
var app = express();   // express function because () to excute the code 
app.all('*', function (request, response, next) { //put all function to all with infinite loop, this is call back function
    response.send(request.method + ' to path ' + request.path);
});
app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here to do a callback

