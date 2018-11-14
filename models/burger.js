// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connections");

// var Burger;
// Creates a "Burgers" model that matches up with DB

module.exports = function (sequelize, DataTypes) {
   var Burger = sequelize.define("Burger", {
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN,
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  });
  return Burger;
}


// Syncs with
// Burger.sync();

// Makes the Burger Model available for other files (will also create a table)
//  module.exports = Burger;