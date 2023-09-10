var http = require('http'), 
    fs = require('fs'),
    port = 8080;


var listingData, server;
console.log("success");
var requestHandler = function(request, response) {
  /*Investigate the request object. 
    You will need to use several of its properties: url and method
  */

    //console.log(request.url);
    
 
   
  
    //Your request handler should send listingData in the JSON format as a response if a GET request 
    //is sent to the '/listings' path. Otherwise, it should send a 404 error. 
   
    if (request.method == "GET" && request.url == '/listings') {
    response.writeHead(200, {"Content-Type": "text/html"});
        response.write(JSON.stringify(listingData));

    }
    else {
    response.end("404 error");
    }
   
    
   
    
    //HINT: Explore the list of MIME Types
    
   
    //HINT: Explore mdn web docs for resources on how to use javascript.
    //Helpful example: if-else structure- 

    
};

fs.readFile('listings.json', 'utf8', function(err, data) {
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 

    HINT: Check out this resource on fs.readFile
    

    HINT: Read up on JSON parsing Node.js
   
   */

    //Check for errors
    /*this resource gives you an idea of the general format err objects and Throwing an existing object.

   */
  

   //Save the data in the listingData variable already defined
    listingData = data;

  //Creates the server
   server = http.createServer(requestHandler);
  //Start the server
    server.listen(port, function () {
        
        
    });

});
