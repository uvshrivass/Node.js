const express = require('express');
const User = express.Router();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


User.get('/contact', function(req, res, next){
    res.render("index");
});
           

User.post('/contact', function(req,res,next){
    
    let transporter = nodemailer.createTransport({
        host: "gains.arrowsupercloud.com",
        port: 465,
        secure: true,
        auth: {
          user: "mail@uvshrivas.com",
          pass: "************"
        }
    });

    let mailOptions = {
    from: '"Ujjwal" mail@uvshrivas.com',
    to: "uv_shrivas@gmail.com", 
    subject: req.body.subject,
    text: req.body.message,
    html: `The message is from ${req.body.email}`
    };

    transporter.sendMail(mailOptions, function(err){
        if (err){
            throw err;
        }
        else {
            console.log("Message sent: %s", info.messageId);
        }
    });

    res.json({"Status":"Email Sent"});
});


module.exports = User;