var express = require('express');
var router = express.Router();
var models = require('../models');

// /* GET users listing. */
router.get('/api', function(req, res, next) {
  models.Burger.findAll({}).then(function(burgers) {
    res.json(burgers);
  });
});

// /* GET 1 users listing. */
router.get('/api/:id', function(req, res, next) {
  models.Burger.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(burgers) {
    res.json(burgers);
  });
});


// /* POST new burger. */
router.post('/', function(req, res) {
  models.Burger.create({ burgername: req.body.burgername,
    devoured: req.body.devoured
   }).then(function() {
    res.redirect('/');
  });
});

  // // PUT route for updating posts
  router.post('/:id', function(req, res) {
    console.log("WORKING");
    models.Burger.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(burger) {
      if(burger) {
        burger.updateAttributes({
          devoured: req.body.devoured          
        }).then(function() {
          res.redirect('/');
        });
      }
    });
  });
     
// delete a single todo
router.delete('/delete/:id', function(req, res) {
  models.Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.redirect('/');
  });
});



module.exports = router;
