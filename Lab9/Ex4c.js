//this is validate if the number input is non negative integer or not and validate and show any errors 
var  ValidateNonNegInt = function (num, returnErrors = false){  //parameter num and returnErrors = false 
    errors = [ ]; // assume no errors at first
    if(Number(num) != num) errors.push('Not a number!'); // Check if string is a number value
    if(num < 0) errors.push('Negative value!'); // Check if it is non-negative, this default to false
    if(parseInt(num) != num) errors.push('Not an integer!'); // Check that it is an integer
    
    return returnErrors ? errors : (errors.length == 0);   
 }
    
    var attributes  =  "yurino;21;21.5;20.5" ;
    var pieces = attributes.split(";"); 
    for (let i=0; i<pieces.length; i++){
        const errors= ValidateNonNegInt(pieces[i], true);
        console.log(`${pieces[i]} is a non-negative integer: ${errors.length == 0}`);
    }