const util = require("util");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notes {
    // read the db.json
    read() {
        return readFileAsync("db/db.json", "utf8");
    }
    // write to the db.json
    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }

    // read all the notes
    getNotes() {
        return this.read().then((notes) => {
            let notesArray;
            try {
                notesArray = [].concat(JSON.parse(notes));
            } catch (err) {
                notesArray = [];
            }
            return notesArray
        });
    };

    addNotes(note) {
        const { title, text } = note;
        const newNote = { title, text, id: uuidv4() };

        return this.getNotes()
            .then((notes) => [...notes, newNote])
            .then((updatedNotes) => this.write(updatedNotes))
            .then(() => newNote);
    };

    removeNotes(id) {
        return this.getNotes()
            .then((notes) => notes.filter((note) => note.id !== id))
            .then((remainingNotes) => this.write(remainingNotes));
    };
};

module.exports = new Notes();