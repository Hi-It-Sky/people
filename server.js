const express = require("express");
var cors = require("cors");

const app = express();
//require("dotenv").config();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
app.use(express.static("static"));

// Add routes, both API and view
//app.use(routes);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
