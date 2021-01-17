const path = require("path");
const fs = require("fs");

module.exports = app => {
    // display notes.html
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    });

    // display index
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });
};