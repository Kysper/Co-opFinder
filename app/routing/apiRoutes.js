var friends = require('../data/friends.js');

module.exports = function(app) {
  // define the get route below
  app.get('/api/friends', function(req, res) {
      res.json(friends);
  });

  // define the post route below
  app.post('/api/friends', function(req, res) {
      friends.push(req.body);
  });
};