// Importing the Express package from NPM

const express = require("express");

//Create an instance
const app = express();

app.get("/", (req, res) => {
  res.send("Express installed!");
});

// Start server and have it listening to port 3000
app.listen(3000, () => {
  console.log("Running on port 3000");
});

//
