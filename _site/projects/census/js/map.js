
var w = 960;
var h = 470;

var projection = d3.geo.albersUsa()
             .translate([w/2, h/2])
             .scale([1000]);

var path = d3.geo.path()
         .projection(projection);

var svg = d3.select("#graph")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

function makeGrayMap(json){
  svg.selectAll("path")
     .data(json.features)
     .enter()
     .append("path")
     .attr("d", path)
     .attr("fill", "#eee")
     .attr("stroke", "#fff");
}

function drawCircles(category, year, data){

  data = yearNester.map(data, d3.map);

  var jobsDataset = data.get(year).entries();

  var circleColors = {
    job_destruction: "red",
    job_creation: "green"
  }

  var update = svg.selectAll("circle")
                .data(jobsDataset)

  var enter = update.enter()
                .append("circle")

  var exit = update.exit;
  update.transition()
      .attr("cx", function(d){ return projection([d.value.lon, d.value.lat])[0]})
      .attr("cy", function(d){ return projection([d.value.lon, d.value.lat])[1]})
      .attr("r", function(d){ return d.value.jobsNums/ 7000})
      .style("fill", circleColors[category])
      .style("opacity", 0.3)

  update.enter()
    .append("text")
      .style("stroke", "#000")
      .attr("x", function(d){ return projection([d.value.lon, d.value.lat])[0]})
      .attr("y", function(d){ return projection([d.value.lon, d.value.lat])[1]})
      .attr("text-anchor", "middle")
      .text(function(d){ return d.key })
      .attr("class", "city-name")
      .on("mouseover", function(){ d3.select(this).style("opacity", "1")})
      .on("mouseout", function(){ d3.select(this).style("opacity", "0")})

}
