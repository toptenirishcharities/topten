var express = require('express');
var router = express.Router();

var _ = require('underscore');
var numeral = require('numeral');
var Q = require('q');

var sectors = require('../modules/sectors');
var benefacts = require ('../modules/benefacts');


router.get('/:id', function(req, res, next) {

    function fileNameEncode (str) {

        // Replace anything that isn't a letter, accented letter as per the Irish
        // alphabet or number with a dash.

        str = str.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚ]/g,'-');

        // Replace any repeated sequences of dashes with a single dash

        str = str.replace(/-{2,}/g, "-");

        // If the string ends with a dash, lose it!

        str = str.replace(/-$/, "");

        return encodeURIComponent(str);
    }

    function sectorNameEncode (str) {

        str = str.replace(/,/g, '');
        return str;

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
        tasks.push (benefacts.askBenefacts(sectorElement, sectorElement.subSectors[n]));
    }


    Q.allSettled(tasks).done (function (values) {

        console.log ("Rendering page");

        sectorElement.subSectors[0].sortedByIncome = _.sortBy (sectorElement.subSectors[0].sortedByIncome, function (o) {
            return o.document.income;
        }).reverse().slice(0,10);

        var csv = []; ["Charity Name,SectorId,Income in Euro"];

        _.each (sectorElement.subSectors, function (subSector) {
            csv.push (sectorNameEncode(subSector.code + " - " + (subSector.name || sectorElement.name)) + ",Income in Euro");
            
            _.each (subSector.sortedByIncome, function (ssi) {
               csv.push (sectorNameEncode(ssi.document.name) + "," + ssi.document.income);
            });
            
            csv.push ("");
            
        });

        var fileName = fileNameEncode(sectorElement.name)+ ".csv";

        res.writeHead(200, {
            "Content-disposition": "attachment; filename=" + fileName,
            "Content-Type": "text/csv"
        });

        res.end (csv.join("\r\n"));

    });
    
    

});

module.exports = router;
