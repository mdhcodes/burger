var mysql = require('mysql');
/*
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'code1310',
  database : 'burgers_db'
});
*/
var db = process.env.NODE_ENV === 'production'
            ? process.env.JAWSDB_URL
            : { host     : 'localhost',
                user     : 'root',
                password : 'code1310',
                database : 'burgers_db' };


var connection = mysql.createConnection(db);

connection.connect(function(err) {
  if(err) throw err;
  console.log('connected as id' + connection.threadId);
});

module.exports = connection;
