var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Burger.findAll().then(function(burger) {
  res.render('index', { 
    title: 'Express',
    burger: burger

    });
  });
});

router.get('/users/:id', function(req, res, next) {
  models.Burger.findAll().then(function(burger) {
  res.render('index', { 
    title: 'update route',
    burger: burger

    });
  });
});

module.exports = router;
