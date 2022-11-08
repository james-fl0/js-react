const express = require("express");
const path = require("path");

const app = express(); // create express app

// add middleware
app.use(express.static(path.join(__dirname, '..', 'dist')));

// start express server on port 5000
const port = process.env.PORT ?? 3000;
app.listen(port, () => {
  console.log("server started on port " + port);
});