var express = require("express");
var app = express();


app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/college", function(req, res) {
    res.render("college");
});


PORT = process.env.port || 3000;
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.listen(PORT,()=>{
    console.log("Open Labs server is up")
});
