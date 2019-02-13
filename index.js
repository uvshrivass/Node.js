const express = require("express");
const path = require("path");
var serveIndex = require('serve-index');
const app = express();
const port = 5555 || process.env.PORT;

app.use("/",express.static(path.join(__dirname,"view")));
app.use("/",serveIndex("view", {'icons': true}));

app.listen(port,()=>{
    console.log(`Server started at ${port}`)
})