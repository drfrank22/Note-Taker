const fs = require("fs");
const path = require("path");
const uuid = require("uuid");

module.exports = app => {

    fs.readFile("db/db.json", "utf8", (err, data) => {

        if (err) throw err;

        // set up variable for data to be passed
        var notes = JSON.parse(data);

        // API Routes

        // GET Routes
        // get all notes
        app.get("/api/notes", function (req, res) {
            res.json(notes);
        });

        // get specific note
        app.get("/api/notes/:id", function (req, res) {
            res.json(notes[req.params.id])
        });

        // // display notes.html
        // app.get("/notes", function(req, res) {
        //     res.readFile(path.join(__dirname, "public/notes"))
        // });

        // // display index
        // app.get("*", function(req, res) {
        //     res.readFile(path.join(__dirname, "public/index"))
        // });

        POST Route
        app.post("/api/notes", function (req, res) {

        })
    })
}