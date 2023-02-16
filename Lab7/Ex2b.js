require("./products_data.js");
var num_products = 5;
var number = 0;
while(number++ < num_products) {
    
    if( (number > num_products*.75) || (number < num_products*.25) ) {
        console.log(`${eval('name' + number )} is sold out!`);
        continue;
    }
    console.log( number);
}