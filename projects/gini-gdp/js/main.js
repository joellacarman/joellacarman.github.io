var YEAR_CHOICE = 1990

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .tickFormat(d3.format("1s"))
    //.tickFormat(d3.format("1s"));

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var DATASET;

d3.csv("data/gdp_gini.csv", function(data){
	DATASET = d3.nest()
				.key(function(d){ return d["Country Code"]})
				.entries(data);

	var giniYear = "gini" + YEAR_CHOICE;
	var gdpYear = "gdp" + YEAR_CHOICE;

	x.domain(d3.extent(data, function(d) { return d[gdpYear]; })) //gdp
	y.domain(d3.extent(data, function(d){ return d[giniYear]; })) //gini

	    svg.append("g")
	      	.attr("class", "x axis")
	      	.attr("transform", "translate(0," + height + ")")
	      	.call(xAxis)
	    .append("text")
	      	.attr("class", "label")
	      	.attr("x", width)
	      	.attr("y", -6)
	      	.style("text-anchor", "end")
	      	.text("GDP");

	  	svg.append("g")
	      	.attr("class", "y axis")
	      	.call(yAxis)
	    .append("text")
	      	.attr("class", "label")
	      	.attr("transform", "rotate(-90)")
	      	.attr("y", 6)
	      	.attr("dy", ".71em")
	      	.style("text-anchor", "end")
	      	.text("GINI")

	makeChart(DATASET);

})

d3.select("#year-choice-sub").on("click", function(event){
  d3.event.preventDefault();

  var entry = document.getElementById("year-choice").value;

  if (isNaN(+entry)) {
    alert("Enter a number")
  } else {
    YEAR_CHOICE = entry;
    makeChart(DATASET)
  }

})

//the chartmaking function with an update just takes in current dataset
//it's set up to remove extra dots when a subsequent dataset has fewer members
function makeChart(data){

	var giniYear = "gini" + YEAR_CHOICE;
	var gdpYear = "gdp" + YEAR_CHOICE;

	var update = svg.selectAll(".dot")
				  .data(data, function(d){ return d.key })

	var enter = update.enter()
                    .append("circle")
                    .attr("class", "dot")

  update.transition().duration(500)
    .attr("cx", function(d){ return x(d.values[0][gdpYear]); })
    .attr("cy", function(d){ return y(d.values[0][giniYear]); })
	  .attr("r", 5)

 	var exit = update.exit();

	exit.remove();

}
