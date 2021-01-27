// dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

// sets up express
const app = express();
const PORT = process.env.PORT || 3000;

// sets up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// recieves object
app.get("/api/notes", function (req, res) {
    fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});
// sends object
app.post("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", (err, data) => {
        if (err) throw err;

        // old notes
        const db = JSON.parse(data);

        const dbArray = [];

        // new notes = req.body

        db.push(req.body);

        for (var i = 0; i < db.length; i++) {
            const newNote = {
                id: i + 1,
                title: db[i].title,
                note: db[i].note
            };
            dbArray.push(newNote);
        }
        fs.writeFile(path.join(__dirname, "/db/db.json"), JSON.stringify(dbArray), (err) => {
            if (err) throw err;
            res.json(req.body);
        })
    })
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