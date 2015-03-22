
var DEFAULT = {
  yearChoice: "1987",
  category: "job_creation"
}

var year = year || DEFAULT.yearChoice,
    category = category || DEFAULT.category;

var yearNester = d3.nest()
  .key(function(d) { return d.year; })
  .key(function(d) { return d.city; })
  .rollup(function(values) {
    return {
            jobsNums: d3.sum(values, function(d) {return +d[category]; }),
              //had to get just 1 value for lat/lon, so used d3.min - there should just be one number here per city.. or we have a prob
            lat: d3.min(values, function(d) { return +d.lat }),
            lon: d3.min(values, function(d) { return +d.lon})
          }
  })

getAllData()
  .then(function (allData){
    var dataset = allData[0];
    var json = allData[1];

    makeGrayMap(json)

    return allData
  })
  .then(function (allData){
    var dataset = allData[0];

    drawCircles(category, year, dataset)

    return allData
  })
  .then(setUpInteractions)
  .done()


function getAllData(){
  return Q.all([
    getJobsData(),
    getTopoJsonData()
    ])
}

function getJobsData(){
  var deferred = Q.defer();
  var promise = deferred.promise;

  d3.csv("data/bdsDataGeocoded.csv",
    function(d){
      deferred.resolve(d)
    })

  return promise

}

function getTopoJsonData(){
  var deferred = Q.defer();
  var promise = deferred.promise;

  d3.json("data/us-states.json", function(d) {
    deferred.resolve(d)
  })

  return promise;
}

function setUpInteractions(data){
  var jobsData = data[0]
  var slideEventDispatcher = makeSlider();

    slideEventDispatcher.on("slideEnd", function(value){
      year = findYear(value);
      drawCircles(category, year, jobsData)
    })

var catButtons = d3.selectAll(".cat-choice").on("click", function(){
    var clicked = d3.select(this);
    category = clicked.attr("data-cat");

    catButtons.classed("active", false);
    clicked.classed("active", true);

    drawCircles(category, year, jobsData);
  })
}

//improve this
function findYear(value){
      if (value > 1976 && value < 1980) { // 77-79
        return value = "1977";
      } else if (value > 1979 && value < 1985){ // 80-84
        return value = "1982";
      } else if (value > 1984 && value < 1990){ // 85-89
        return value = "1987"
      } else if (value > 1989 && value < 1995) { // 90-94
        return value = "1992"
      } else if (value > 1994 && value < 2000) { // 95-99
        return value = "1997"
      } else if (value > 1999 && value < 2005) { // 00-04
        return value = "2002"
      } else if (value > 2004 && value < 2010) { // 05-09
        return value = "2007"
      } else {
        return value = "2012"
      }
}






