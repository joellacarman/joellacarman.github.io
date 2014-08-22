var margin = {top: 0, right: 0, bottom: 0, left: 0},
    width = 410,
    height = 350;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");



var chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", height);



  d3.csv("./data/current.csv", type, function(error, data) {
    x.domain(data.map(function(d) { return d.name; }));
    y.domain([0, 81132]);

    var bar = chart.selectAll("g")
        .data(data)
      .enter().append("g")
        .attr("transform", function(d) { return "translate(" + x(d.name) + ",0)"; });

    bar.append("rect")
        .attr("y", function(d) { return y(d.value); })
        .attr("height", function(d) { return height - y(d.value); })
        .attr("width", x.rangeBand());

    bar.append("text")
        .attr("x", x.rangeBand() / 2)
        .attr("y", 329)
        .attr("dy", ".75em")
        .text(function(d) { return d.value; });

    chart.append("xAxis")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);
  });

  function type(d) {
    d.value = +d.value;
    return d;
  }

function updateData(dataset) {
  d3.csv(dataset, type, function(error, data) {
    x.domain(data.map(function(d) { return d.name; }));
    y.domain([0, 81132]);
    console.log(data);

    var graph = d3.selectAll("g").data(data).transition();

    graph.select('rect')
      .duration(750)
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });

    graph.select('text')
      .duration(750)
      .text(function(d) { return d.value; });

  });


    function type(d) {
    d.value = +d.value;
    return d;
  }

}

$('#scrollDown').on("click", function(){
  var position = $(window).scrollTop();
  $(window).scrollTop(position + 700);
});

function chartSwap(file){
  $('#profileChart').attr('src', file);
}




