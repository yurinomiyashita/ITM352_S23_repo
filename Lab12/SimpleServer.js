//copid and pasted to Lab12
var http = require('http');  //loading file, http is built in node 

//create a server object:  
//this is anoynimmous function and callback function 
//req: request   res: response 
http.createServer(function (req, res) {
    console.log(req.headers); //output the request headers to the console
    res.writeHead(200, { 'Content-Type': 'text/html' }); // set MIME type to HTML 
    res.write(`<h1>The server date is: ${Date()}</h1>`); //send a response to the client
    res.write('<h1>The client date is: <script>document.write( Date.now() );</script></h1>'); // send another response
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

console.log('Hello world HTTP server listening on localhost port 8080');
