var express = require("express");
var multer = require("multer");
var path = require("path");

var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");


app.get("/", function(req, res){
    res.render("index"); 
});

app.post("/", multer({ dest: "./uploads" }).single("upl"), function(req, res){
    res.json({"size": req.file.size}); 
});

app.listen(process.env.PORT);