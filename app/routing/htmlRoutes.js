// Dependency
var path = require("path");

// Exports the variable
module.exports = function (app) {
    // takes you to home.html
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    // takes you to survey.html
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
}