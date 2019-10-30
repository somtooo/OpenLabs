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
let server_port = process.env.YOUR_PORT || process.env.PORT || 80;
let server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});
