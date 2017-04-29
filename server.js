var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var app = express();

var PORT = process.env.PORT || 3000;




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});