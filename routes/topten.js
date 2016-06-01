var express = require('express');
var router = express.Router();

var _ = require('underscore');
var numeral = require('numeral');
var Q = require('q');

var sectors = require('../modules/sectors');
var benefacts = require ('../modules/benefacts');


/* GET home page. */
router.get('/:id/', function(req, res, next) {


    function getSector (id) {

        return _.find (sectors.sectors, function (o) {
            return o.code == id || o.url === id;
        });

    }

    var tasks = [],
        sectorElement = getSector(req.params.id); //sectors[2];

    numeral.defaultFormat("0,0");

    _.each (sectorElement.subSectors, function (sse) {
        sse.sortedByIncome = [];
    });


    var n = 1;
    for (; n < sectorElement.subSectors.length; n++) {
        tasks.push (benefacts.askBenefacts(sectorElement, sectorElement.subSectors[n]));
    }


   Q.allSettled(tasks).done (function (values) {

       console.log ("Rendering page");

       sectorElement.subSectors[0].sortedByIncome = _.sortBy (sectorElement.subSectors[0].sortedByIncome, function (o) {
           return o.document.income;
       }).reverse().slice(0,10);

       res.render('topten', { title: 'Benefacts 10 Tens', sectors: [sectorElement] });
   });





});

module.exports = router;
