// HTTP Module allows developers to create HTTP servers and HTTP requests.
// Has a set of functions and classes to help with HTTP communication, allowing the creation of web servers, etc.

const http = require("http");

// Creates a new instance
const server = http.createServer();

// Adding an event listener to connect to event
server.on("connection", (socket) => {
  console.log("New Connection");
});

//Starting the server: Listening on port 3000
// server.listen(3000);

//Display that the server is listening to port 3000
console.log("Listening on port 3000");

//
