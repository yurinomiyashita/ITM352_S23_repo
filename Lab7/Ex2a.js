require("./products_data.js");

var num_products = 5;
var number = 1;
while(number < num_products) {
    console.log(number + '. ' + eval('name' + number));
    number++;

    if(number > num_products/2) {
        console.log(`That’s enough!`);
        break;
    }

}
console.log(`That's all we have!`);