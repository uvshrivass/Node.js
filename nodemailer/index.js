const express = require('express');
const port = process.env.PORT || 3000;
const route = require('./routes/index');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var jade = require('jade')
const app = express();

app.set('view engine', 'jade')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.use('/user', route.userRoute);

app.use('/admin', route.adminRoute);

app.listen(port, () => console.log(`running express on ${port}`));