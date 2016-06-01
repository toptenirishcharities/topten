var rest = require('restler');
var Q = require('q');
var _ = require('underscore');
var numeral = require('numeral');

function askBenefacts (sectorElement, subSector) {

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

function getAllSubsectors (id) {
    
    var deferred = Q.defer;
    
    
    
    
    return deferred;
    
    
}

exports.askBenefacts = askBenefacts;
exports.getAllSubsectors = getAllSubsectors;