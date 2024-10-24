const http = require('http'); // Importing http module (node:http also works)

const server = http.createServer(function (req, res){
    res.end("Hello World!"); // Sending response to the client
}); // Creating a server

server.listen(5555); // Listening to the server on port 5555