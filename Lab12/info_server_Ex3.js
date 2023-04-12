var express = require('express');
var app = express();
app.all('*', function (request, response, next) {
    response.send(request.method + ' to path ' + request.path);
});
app.post('/process_form', function (request, response) {
    let q = request.body['quantity_textbox'];
    if (typeof q != 'undefined') {
        if (isNonNegInt(q)) {
            response.send(`Thank you for purchasing ${q} things!`);
        } else {
            response.send(`Error: ${q} is not a quantity. Hit the back button to fix.`);
        }
    } else {
        response.send('Error: Quantity is undefined. Hit the back button to fix.');
    }
});
app.use(express.static(__dirname + '/public'));
app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here to do a callback

