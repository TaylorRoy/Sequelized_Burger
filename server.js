// var express = require("express");

// // bring in the models
// var db = require("./models");

// var app = express();
// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

// // Parse request body as JSON
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({defaultLayout: "main"}));
// app.set("view engine", "handlebars");

// var routes = require("./controllers/burgers_controller.js");

// app.use(routes);

// // listen on port 3000
// var PORT = process.env.PORT || 3000;
// db.sequelize.sync().then(function() {
//   app.listen(PORT, function() {
//     console.log("App now listening on port:", PORT);
//   });
// });



// var express = require("express");
// var bodyParser = require("body-parser");

// var app = express();
// var PORT = process.env.PORT || 3000;

// var db = require("./models");

// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

// // Parse request body as JSON
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // Import routes and give the server access to them.
// var routes = require("./controllers/burgers_controller.js");

// app.use(routes);

// db.sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });


// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// // Sets up the Express App
// // =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// // Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
const routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});