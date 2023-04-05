var express = require('express');
var app = express();

// Routing 

// Routing taking json file    
app.get("/products.json", function (request, response, next) {
  response.type('.js');
  let products_str = `let products = ${JSON.stringify(products)};`;
  response.send(products_str);
});

// monitor all requests
app.all('*', function (request, response, next) {
   console.log(request.method + ' to ' + request.path);
   next();
});

// process purchase request (validate quantities, check quantity available)
function checkQuantityTextbox(the_quantity_textbox) {
  var errors =isNonNegInt(the_quantity_textbox.value);
  purchase_button.disabled = true;          //onclick to call the checkquantitytextbox 
  if(errors.length==0){
      purchase_button.disabled = false;     
  }
  document.getElementById(the_quantity_textbox.id + "_message").innerHTML = errors.join(' ');
}

function isNonNegInt(q, retunErrors=false) {
  errors = []; // assume no errors at first
  if (Number(q) != q) errors.push('Please type a number'); // Check if string is a number value
  else {
      if (q < 0) errors.push('Please type positive value'); // Check if it is non-negative
      if (parseInt(q) != q) errors.push('Please type an integer!'); // Check that it is an integer
  }
  return errors;
}
//<** your code here ***>
app.use(myParser.urlencoded({extended:true}));
app.post("/process_form", function(request, response){
  process_quantity_form(request.body, response);
  response.send(request.body);
});
// route all other GET requests to files in public 
app.use(express.static(__dirname + '/public'));

//loading json file 
var products = require(__dirname + '/products.json'); 




// start server
app.listen(8080, () => console.log(`listening on port 8080`));