const path = require("path");
const fs = require("fs");

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

        // POST Route
        app.post("/api/notes", function (req, res) {
            let newNotes = req.body;
            notes.push(newNotes);
            updateDb();
            return console.log("New Note Added: " + newNotes.title )
        })

        function updateDb() {
            fs.writeFile("db/db.json", JSON.stringify(notes, "/t"), err => {
                if (err) throw err;
                return true;
            });
        };
    })
};