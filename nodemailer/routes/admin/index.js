const express = require('express');
const Admin = express.Router();



Admin.get('/', function(req, res, next){
    res.send("I am from admin page");
});
Admin.get('/login', function(req, res, next){
    res.send("I am from admin login page");
});
Admin.get('/register', function(req, res, next){
    res.send("I am from admin register page");
});

module.exports = Admin;