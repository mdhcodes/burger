//  Import orm.js
var orm = require('../config/orm');

/*
Create the code that will call the ORM functions using burger specific input for the ORM.
Export at the end of the burger.js file.
*/

// call the orm to get the data
var burger = {
  table: "burgers",

  selectAll: function(burgerCtrlFn) {
    orm.selectAll(this.table, function(data) { // passing a function that's expecting data
      //console.log(data);
      //return data
      burgerCtrlFn(data);
    });
  },

  insertOne: function(tableName, burger, burgerCtrlFn) {
    orm.insertOne(tableName, burger, function(data) {
      burgerCtrlFn(data);
    });
  },

  updateOne: function(tableName, condition, burgerCtrlFn) {
    orm.updateOne(tableName, condition, function(data) {
      burgerCtrlFn(data);
    });
  }

};

module.exports = burger;