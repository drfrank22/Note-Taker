const path = require("path");
const router = require("express").Router();

    // display notes.html
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

    // display index
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

module.exports = router;