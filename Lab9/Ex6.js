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
//anonymous function for the callback directly in the .forEach():
pieces.forEach((item, index) => {
    console.log(`part ${index} is ${(isNonNegInt(item) ? 'a' : 'not a')} quantity`);
  });

  
//Using checkIt as a callback function in the .forEach() method for the array pieces:
/*function checkIt(item,index){
    console.log(`part ${index} is ${(isNonNegInt(item) ? 'a' : 'not a')} quantity`);
}
*/
//Ex 6. c 
// this c
function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        picture_data = "image data:XOXOXO";
        callback(picture_data); // calling the callback function
    }, 3 * 1000);
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://www.example.comt/big_pic.jpg';
download(url, process); // passing the process function as the callback parameter to download
