// Connect Node to MySQL and export the connection.

module.exports = function() {

  var mysql      = require('mysql');
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'code1310',
    database : 'burgers_db'
  });

  connection.connect();
}