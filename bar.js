var barChart = {};
barChart.draw = function(id, data, toolTip){		
		
var margin = {top: 20, right: 0, bottom: 60, left: 50},
    width = 750 ,
    height = 350 - margin.top - margin.bottom;

var x0 = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var x1 = d3.scale.ordinal();

var y = d3.scale.linear()
    .range([height, 0]);
	
var color = d3.scale.ordinal()
    .range(["#DB516F","#467BB8","#A3ADBF","#C4B289"]);

var xAxis = d3.svg.axis()
    .scale(x0)
    .orient("bottom");

	var m = [30, 10, 10, 30],
    w = 960 - m[1] - m[3];
    //h = 930 - m[0] - m[2];
	
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(d3.format(".2s"))
	.tickSize(-w);

var svgb = d3.select(id).append("svg")
	.attr("id","chart2")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top*2 + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + (margin.top+10) + ")");
  //ageNames.map(d3.keys(data[0]).filter(function(key) { return key !== "State"; }));
  
  var ageNames = d3.keys(data[0]).filter(function(key) { return key !== "State" && key !== "provinsi"; });

  data.forEach(function(d) {
	d.ages = ageNames.map(function(name) { return {name: name, value: +d[name]}; });
  });

  var maxvalue = d3.max(data, function(d) { return d3.max(d.ages, function(d) { return d.value; }); });
  var maxyAxis = 101;
  /*if(maxvalue >= 90){
	maxyAxis = 105;
  }
  else{
	maxyAxis = 100;
  }*/
    
  x0.domain(data.map(function(d) { return d.State; }));
  x1.domain(ageNames).rangeRoundBands([0, x0.rangeBand()]);
  y.domain([0, maxyAxis]);

  svgb.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
	  .style("font-size","15px")
	  .selectAll("text")  
	  .style("font-alignment","center")
      .style("text-anchor", "end")
      .attr("dx", ".9em")
      .attr("dy", ".8em")
      /*.attr("transform", function(d) {
		return "rotate(-65)"
      })*/;
      

  svgb.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      //.attr("transform", "rotate(-90)")
      .attr("y", -17)
	  .style("font-size","11px")
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Partisipasi");
	  
  function mouseOver(d){
		d3.select("#tooltip").transition().duration(200).style("opacity", .9);      
		console.log(d);
		d3.select("#tooltip").html(tooltipBar(d, jen))  
			.style("left", (d3.event.pageX) + "px")     
			.style("top", (d3.event.pageY - 28) + "px");
	}
	var jen = "";
	function mouseOver1(d){
		jen = d.name;
		console.log(d);
	}

	function mouseOut(){
		d3.select("#tooltip").transition().duration(500).style("opacity", 0);      
	}

	  	  
  var state = svgb.selectAll(".state")
      .data(data)
    .enter().append("g")
      .attr("class", "g")
      .attr("transform", function(d) { return "translate(" + x0(d.State) + ",0)"; })
	  .on("mouseover", mouseOver)
	  .on("mouseout", mouseOut);

  state.selectAll("rect")
      .data(function(d) { return d.ages; })
    .enter().append("rect")
      .attr("width", x1.rangeBand())
      .attr("x", function(d) { return x1(d.name); })
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); })
      .style("fill", function(d) { return color(d.name); })
	  .on("mouseover", mouseOver1);

  var legend = svgb.selectAll(".legend")
      //.data(color.domain().slice().reverse())
	  .data(ageNames.slice().reverse())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("rect")
      .attr("x", width - 15)
      .attr("y", height - 300)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

  legend.append("text")
      .attr("x", width - 20)
      .attr("y", height - 290)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d; });
	}
	
	this.barChart=barChart;				  	