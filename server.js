// A node server to deliver html files using express framework.

const express = require("express");
const serveIndex = require('serve-index');
const app = express();
const port = process.env.PORT || 5555;

// Delivering html file using sendFile() function. View is the folder holding html files.
app.get('/', function(req,res){
    res.sendFile(__dirname + '/view/index.html'); 
});

// Providing complete access.
app.use("/",serveIndex("view", {'icons': true}));
app.use(express.static(__dirname + "/view"));

app.listen(port,()=>{
    console.log(`Server started at ${port}`)
});