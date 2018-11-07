// Dependency
var express = require('express');

// Express app setup
var app = express();
var PORT = process.env.PORT || 3000;

// 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//starts listening from server
app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});

// Routes for server

// html routes
require('./app/routing/htmlRoutes.js')(app);
// api routes
require('./app/routing/apiRoutes.js')(app);

app.get('/*', function (req, res) {
    res.redirect("/");
});

