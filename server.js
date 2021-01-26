// dependencies
var express = require("express");
var path = require("path");
// sets up express
var app = express();
var PORT = process.env.PORT || 3000;
// sets up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});