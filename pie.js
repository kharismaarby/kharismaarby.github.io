var pieChart = {};
pieChart.draw = function(id, data, toolTip){		
		
	
		var width = 450,
			height = 450,
			radius = Math.min(width, height) / 2;

		var color = d3.scale.ordinal()
			.range(["#DB516F","#467BB8","#A3ADBF","#C4B289"]);
			//.range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

		var arc = d3.svg.arc()
			.outerRadius(radius - 10)
			.innerRadius(0);

		var pie = d3.layout.pie()
			.sort(null)
			.value(function(d) { return d.persen; });

		var svg = d3.select(id).append("svg")
			.attr("id","chart3")
			.attr("width", width)
			.attr("height", height)
		  .append("g")
			.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
			
			function findByJenjang(source, jenjang) {
				  for (var i = 0; i < source.length; i++) {
					if (source[i].jenjang === jenjang) {
					  return source[i];
					}
				  }
				  throw "Couldn't find object with jenjang: " + jenjang;
				}
		function mouseOver(d){
					d3.select("#tooltip").transition().duration(200).style("opacity", .9);      
					if(d.data.jenjang == "kuliah"){
						d.data.jenjang = "Kuliah";
					}
					if(d.data.jenjang == "sma"){
						d.data.jenjang = "SMA";
					}
					if(d.data.jenjang == "smp"){
						d.data.jenjang = "SMP";
					}
					if(d.data.jenjang == "sd"){
						d.data.jenjang = "SD";
					}
					d3.select("#tooltip").html(tooltipPie(d.data.jenjang, findByJenjang(data, d.data.jenjang), jumlah))  
						.style("left", (d3.event.pageX) + "px")     
						.style("top", (d3.event.pageY - 28) + "px");
				}

		function mouseOut(){
			d3.select("#tooltip").transition().duration(500).style("opacity", 0);      
		}
		
		var jumlah = 0;
			for (index = 0; index < data.length; ++index) {
				jumlah = jumlah + Math.round(data[index].persen*100)/100;
			}
		  var g = svg.selectAll(".arc")
			  .data(pie(data))
			.enter().append("g")
			  .attr("class", "arc")
			  .on("mouseover", mouseOver)
			  .on("mouseout", mouseOut);

		  g.append("path")
			  .attr("d", arc)
			  .style("fill", function(d) { return color(d.data.jenjang); });	
		
	/*var legend = d3.select("body").append("svg")
      .attr("class", "legend")
    .selectAll("g")
      .data(color.domain().slice().reverse())
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });
	  
	    var legend = d3.select("#panel-body")
      .data(color.domain().slice().reverse())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });



  legend.append("rect")
	.attr("x", 20)
      .attr("y",50)
      .attr("width", 18) //ukuran persegi
      .attr("height", 18)
      .style("fill", color);

  legend.append("text")
      .attr("x", 24) //jarak text
      .attr("y", 9)
      .attr("dy", ".35em")
      .text(function(d) { return d; });
*/
	 
	}
	  
	this.pieChart=pieChart;				  