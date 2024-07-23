const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", function (req, res) {
  res.send("Welcome Hello World");
});

mongoose.connect(
    "mongodb+srv://ian:CRGW4Mhm3op66Qbs@backend.1wfoakx.mongodb.net/Node-app?retryWrites=true&w=majority&appName=Backend"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log("Connection failed:", error);
  });
  
