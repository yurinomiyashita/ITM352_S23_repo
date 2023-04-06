var express = require('express');
var app = express();

// Routing 
// Load Body-Parser Package
let parser = require("body-parser");

// Load QueryString Package
const qs = require('querystring');

// route all other GET requests to files in public 
app.use(express.static(__dirname + '/public'));

//loading json file 
var products = require(__dirname + '/products.json'); 



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
// Get Body
app.use(parser.urlencoded({
  extended: true
}));

app.post("/purchase", function (request, response, next) {
  console.log(request.body); //getting request from invoice.html body
  let quantities = request.body['quantity']; //assigning value to quantities as quantity entred in store.html textbox
  let errors = {};
  let available_quantity = false;
  for (i in quantities) {
    console.log(quantities[i])    
    if (isNonNegInt(quantities[i]) == false) {
      errors['quantity' + i] = `Please submit valid data for ${products[i].name}!` //if quantity enetred is invalid number 
    }
    if (!(quantities[i] === '') && Number(quantities[i]) === 0) {
      errors['quantity' + i] = `If the ${products[i].name} quantity is 0, please enter blank!` //if the cell is filled with 0 
    }
    if (quantities[i] > 0) { //if quantity entered is greater than, meaning no errors
      available_quantity = true;
    }
    if (quantities[i] > products[i].quantity_available) { //if quantity entered is greater than quantity available 
      errors['quantity' + i] = `We currenly don't have ${(quantities[i])}${products[i].name}. please check our website later!`
    }
  }
  //taking quantity entered to display in invoice and direct to log in page
  //changed login.html from invoice.html
  let quantity_object = {
    "quantity": JSON.stringify(quantities)
  }; //creating string by quantity_object
  console.log(Object.keys(errors));
  if (Object.keys(errors).length == 0) { //no errors, 
    for (i in quantities) { //remove purchase quantity from inventory
      products[i].quantity_available -= Number(quantities[i]);
    }
    // Save quantity requested
    qty_obj = quantity_object
    //sends invoice with quantity with quary string
    response.redirect('./store.html?' + qs.stringify(quantity_object)); //inserting value as quary string to invoice.html table 
  } else { //with errors, redirect to login.html  
    let errors_obj = {
      "errors": JSON.stringify(errors)
    };
    console.log(qs.stringify(quantity_object));
    response.redirect('./store.html?' + qs.stringify(quantity_object) + '&' + qs.stringify(errors_obj)); //redirect to store.html and display errors 
  }
});





// start server
app.listen(8080, () => console.log(`listening on port 8080`));