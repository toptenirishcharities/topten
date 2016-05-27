var express = require('express');
var router = express.Router();
var rest = require('restler');
var _ = require('underscore');
var numeral = require('numeral');
var Q = require('q');

var sectors = require('../modules/sectors');

/* GET home page. */
router.get('/', function(req, res, next) {

   res.render('index', { title: 'Benefacts 10 Tens', sectors: sectors.sectors});

});

module.exports = router;
