var express = require("express");

var router = express.Router();
// edit burger model to match sequelize
var db = require("../models/");

// get route -> index
router.route('/').get(function(req, res) {
  // send us to the next get function instead.
  res.redirect("/burgers");
});

// get route, edited to match sequelize
router.get("/burgers", function(req, res) {
  // replace old function with sequelize function
  db.Burger.findAll()
    // use promise method to pass the burgers...
    .then(function(dbBurger) {
      // into the main index, updating the page
      var hbsObject = { burger: dbBurger };
      return res.render("index", hbsObject);
    });
});

// post route to create burgers
router.post("/api/burger", function(req, res) {
  // edited burger create to add in a burger_name
  db.Burger.create({
    burger_name: req.body.burger_name
  })
    // pass the result of our call
    .then(function(dbBurger) {
      // log the result to our terminal/bash window
      // redirect
      res.redirect("/");
    });
});

// put route to devour a burger
router.put("/api/burger/:id", function(req, res) {
  var id= req.body.id
  // update one of the burgers
  db.Burger.update({
    devoured: true
  },
  {
    where: {
      id: req.params.id
    }
  }
  ).then(function(dbBurger) {
    res.json("/");
  });
});

//delete burger from db
router.delete("/api/burger/:id", function(req,res){
  db.Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbBurger){
    res.json(dbBurger)
  })
})

module.exports = router;