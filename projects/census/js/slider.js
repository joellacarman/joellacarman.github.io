
function makeSlider(){
  var margin = {top: 20, right: 50, bottom: 20, left: 50},
      width = 500 - margin.left - margin.right,
      height = 70 - margin.bottom - margin.top;

  var dispatcher = d3.dispatch("slideEnd");

  var x = d3.scale.linear()
      .domain([1977, 2012])
      .range([0, width])
      .clamp(true);

  var ticks = [1977, 1982, 1987, 1992, 1997, 2002, 2007, 2012];

  var brush = d3.svg.brush()
      .x(x)
      .extent([0, 0])
      .on("brush", brushed);

  var svg = d3.select("#slider").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height / 2 + ")")
      .call(d3.svg.axis()
        .scale(x)
        .tickValues(ticks)
        .orient("bottom")
        .tickFormat(function(d) { return d; })
        .tickSize(0)
        .tickPadding(12))
    .select(".domain")
    .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
      .attr("class", "halo");

  var slider = svg.append("g")
      .attr("class", "slider")
      .call(brush);

  slider.selectAll(".extent,.resize")
      .remove();

  slider.select(".background")
      .attr("height", height);

  var handle = slider.append("circle")
      .attr("class", "handle")
      .attr("transform", "translate(0," + height / 2 + ")")
      .attr("r", 9);

  slider
      .call(brush.event);

  function brushed() {
    var value = brush.extent()[0];

    if (d3.event.sourceEvent) { // not a programmatic event
      value = x.invert(d3.mouse(this)[0]);
      brush.extent([value, value]);
    }

    handle.attr("cx", x(value));

    dispatcher.slideEnd(value);

  }

    function clicked() {
    // Nudge it over a bit
      value = x.invert(d3.mouse(this)[0] - 2);

      brush.extent([value, value]);

    handle.transition()
      .attr("x", x(value));

    dispatcher.slideEnd(value);
  }

  return dispatcher;
};
