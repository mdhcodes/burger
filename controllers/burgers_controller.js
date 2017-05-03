// Create the router for the app, and export the router at the end of your file
var Burger = require('../models/burger');

module.exports = function(app) {

  // API route to display all burgers.
  app.get('/', function(req, res) {
    Burger.selectAll(function(data) { // closure - function remembers its outer scope
      //console.log(data);
      res.render('index', {burgers: data});
    });
  });


  // API route to insert a new burger
  app.post('/', function(req, res) {
    console.log('Body:', req.body.burger);
    var burger = req.body.burger;
    Burger.insertOne(burger, function() {
      res.redirect('/');
    });
  });


  // API route to update a burger devoured state as true.
  app.put('/', function(req, res) {
    console.log('ID:', req.body.id);
    Burger.updateOne(condition, function() {
      res.redirect('/');
    });
  });

};