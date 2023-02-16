/*require("./products_data.js");
var num_products = 5; 
var number=1; 
eval('name' + number);
while(number <= num_products){   //number has to be less than # of products 
    console.log(number++);
   // number++;  //
}
*/

require("./products_data.js");
var num_products = 5;
var number = 1;
while(number <= num_products/2) {
    console.log( `${number}. ${eval('name' + number )}`);
    number++;
}
console.log(`That's all we have!`);