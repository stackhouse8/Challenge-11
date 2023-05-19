const path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(_dirname, "../public/assets/index.html"));
    });

    app.get("/notes", function(req, res) {
        res.sendFile(path.join(_dirname, "../public/assets/notes.html"));
    });
}