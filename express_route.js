const express = require('express');
const app = express();

// Different responses for different routes can be embedded in one file like below. 

app.get('/home', function (req, res) {
    res.send("Hello, I am from route /home.")
  });

app.get('/abc', function (req, res) {
    res.send("Hello, I am from route /abc.")
  });

app.listen(3000);