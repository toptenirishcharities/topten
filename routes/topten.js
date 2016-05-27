var express = require('express');
var router = express.Router();
var rest = require('restler');
var _ = require('underscore');
var numeral = require('numeral');
var Q = require('q');

var sectors = require('../modules/sectors');

/* GET home page. */
router.get('/:id', function(req, res, next) {

    function askBenefacts (subSector) {

       var deferred = Q.defer ();

       rest.post (
           "https://webapi.benefacts.ie/api/search", {
               data: {
                   "term":subSector.code,
                   "page":1,
                   "pageSize":100,
                   "filters":"((subSectorName eq '" + subSector.name + "' or secondarySubsectorName eq '" + subSector.name + "')) and (regulatory/any(v: v eq 'Registered Charity (CRA)')) and ((income ge " + (subSector.baseAmount || sectorElement.baseAmount) + "))",
                   "facets":["subSectorName","county","regulatory","governingForm","income,values:10000|50000|250000|500000|1000000","standardsCompliance"],
                   "index":"sectorindex",
                   "orderby":["name"]
               }
           }).on("complete", function (data, response) {

           console.log (data);

           var sorted = _.sortBy (data.results, function (o) {
               return o.document.income;
           }).reverse().slice(0,10);

           // console.log (sorted);

           _.each (sorted, function (e) {
               e.formattedIncome = numeral(e.document.income).format();
           });

           subSector.sortedByIncome = sorted;

           sectorElement.subSectors[0].sortedByIncome = sectorElement.subSectors[0].sortedByIncome.concat(sorted);

           console.log ("Resolving " + subSector.name);

           deferred.resolve(1);


       });


       return deferred.promise;

    }

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
        tasks.push (askBenefacts(sectorElement.subSectors[n]));
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
