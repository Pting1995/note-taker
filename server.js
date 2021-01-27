// dependencies
var express = require("express");
var path = require("path");
// const fs = require("fs");

// sets up express
var app = express();
var PORT = process.env.PORT || 3000;

// sets up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
// key=value&key2=value2 => {key:value, key2:value2}
app.use(express.json());

app.use(express.static("public"));

const db = require("./db/db.json")

// // recieves object
app.get("/api/notes", function (req, res) {
    res.json(db);
});
// // sends object
app.post("/api/notes", function (req, res) {

    db.push(req.body);

    res.json(db);
})



app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});