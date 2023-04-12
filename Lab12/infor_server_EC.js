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

app.post('/process_purchase', function (request, response, next) {
    console.log(request.body);
    // validate quantities 
    var q = request.body['quantity_textbox'];
    if (typeof q != 'undefined') {
        response.send(`<b>Thank you for purchasing ${q} things!</b>`);
    } 

    // if valid, complete the purchase

    // if not valid, send errors and go back to porder page
});


receipt = '';
    let qtys = request.body[`quantity_textbox`];
    for (i in qtys) {
        q = qtys[i];
        let brand = products[i]['brand'];
        let brand_price = products[i]['price'];
        if (isNonNegInt(q)) {
            products[i]['total_sold'] += Number(q);
            receipt += `<h3>Thank you for purchasing: ${q} ${brand}. Your total is \$${q * brand_price}!</h3>`; // render template string
        } else {
            receipt += `<h3><font color="red">${q} is not a valid quantity for ${brand}!</font></h3>`;
        }
    }
    response.send(receipt);
    response.end();

app.use(express.static(__dirname + '/public'));
app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here to do a callback

