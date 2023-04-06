var express = require('express');  //loading express 
var app = express();
app.all('*', function (request, response, next) {
    console.log(request.method + ' to path ' + request.path + ' with qs ' + JSON.stringify(request.query));    //take query strings 
    //response.send, this route does not respond, we use this check if we are getting reuqest 
    next();    
});
var products = require(__dirname + '/product_data.json');

app.get("/product_data.js", function (request, response, next) {
   response.type('.js');
   var products_str = `var products = ${JSON.stringify(products)};`;
   response.send(products_str);
});



app.post('/process_purchase', function (request, response, next) { //match wit get request and url (http://localhost:8080/test)
    response.send('Post to process purchase');  
    let brand = products[0]['brand'];
    let brand_price = products[0]['price'];
}); 


app.use(express.static(__dirname + '/public'));
app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here to do a callback

