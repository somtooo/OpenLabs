var express = require("express");
var app = express();


app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/college", function(req, res) {
    res.render("college");
});



app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.listen(3000, function() {
    console.log("The Open Labs Has Started!");
});
