//This code will collect any validation errors in the errors array
//Ex4a
/*
var  isNonNegInt = function (q){
errors = [ ]; // assume no errors at first
if(Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
if(parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer

    return  (errors.length == 0);
}

var attributes  =  "yurino;21;21.5;20.5" ;
var pieces = attributes.split(";"); 
for (let parts of pieces ){
    console.log(parts, isNonNegInt(parts));
}
*/

//Ex4b
var  isNonNegInt = function (q, returnErrors = false){
    errors = [ ]; // assume no errors at first
    if(Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if(parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
    
    return returnErrors ? errors : (errors.length == 0);   
 }
    
    var attributes  =  "yurino;21;21.5;20.5" ;
    var pieces = attributes.split(";"); 
    for (let i=0; i<pieces.length; i++){
        const errors= isNonNegInt(pieces[i], true);
        console.log(`${pieces[i]} is a non-negative integer: ${errors.length == 0}`);
    }