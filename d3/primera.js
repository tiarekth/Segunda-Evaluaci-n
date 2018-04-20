//aquí debes trabajar con datos de un arreglo o un objeto, incluido directamente en la variable data.



 var ciudades = [
    {name:'Fonasa Grupo A',population:24},
    {name:'Fonasa B',population:20},
    {name:'Fonasa C',population:15},
    {name:'Fonasa D',population:12}
  ];

var data;
var w = 600;
var h = 600;
d3.select(".dataviz-primera")
	.append("svg")
	.attr("width", w)
	.attr("height", h )
	.style("background","#12134f");
 
 
  d3.selectAll('circle')
    .data(ciudades)
    .attr('fill','#2f4734')
    .attr('r', function(d) {
      return d.population / 1;
    })
       
  d3.selectAll('text')
    .data(ciudades)
    .attr('fill','#ef842d')                      
    .text(function(d) {
      return ". " + d.name;
    });