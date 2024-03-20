var express = require("express");
var bodyParser = require("body-parser")
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/contact")
var db = mongoose.connection;
db.on("open",function(){
    console.log("connection succeed")
});

db.on("error",function(){
    console.log("db error")
});
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    }));
app.get("/",function(req,res)
{
  res.sendFile(__dirname+"/index.html")
});


app.post("/view",function(req,res){
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var country = req.body.country;
    var subject = req.body.subject;

    var data = {
        "firstname": firstname,
        "lastname": lastname,
        "country":country,
        "subject":subject,

    }
    db.collection('details').insertOne(data,function(req,res){
    });
    res.send("success")
});
app.listen(30000,function(){
    console.log("server listening at port 30000")
})
