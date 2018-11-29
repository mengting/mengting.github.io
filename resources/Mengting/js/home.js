var h = 580;
var w = 980;
var svg;

var menuHeight = 12;
var menuX = 465;

var menu1Text = "HOME";
var menu1 = "index.html";
var menu1Y = 40;

var menu2Text = "ABOUT";
var menu2 = "about.html";
var menu2Y = 75;

var menu3Text = "PORTFOLIO";
var menu3 = "portfolio.html";
var menu3Y = 110;

var menu4Text = "CONTACT";
var menu4 = "contact.html";
var menu4Y = 145;


drawContent();

function drawContent(){
    svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);
		
	//---rects-----
	svg.append("image")
	    .attr("x", 465)
	    .attr("y", 0)
        .attr("width", 600)
        .attr("height", 600)
        .attr("xlink:href", "images/profile.jpg");
		
	svg.append("rect")
       .attr("x", 0)
       .attr("y", 490)
       .attr("width", 980)
       .attr("height", 30)
       .attr("fill", "rgba(255,0,0,0.4)");
	   
   	svg.append("rect")
          .attr("x", 0)
          .attr("y", 390)
          .attr("width", 980)
          .attr("height", 110)
          .attr("fill", "rgba(0,114,188,0.4)");

	svg.append("rect")
          .attr("x", 455)
	      .attr("y", 0)
	      .attr("width", 200)
          .attr("height", 600)
	      .attr("fill", "rgba(0,0,0,0.4)");
		  
	//----text-----
    svg.append("text")
        .text("Mengting.Sun")
        .attr("x", 460)
        .attr("y", 490)
        .attr("font-size", 70)
        .attr("font-family", "Krungthep")
        .attr("fill", "rgba(245,245,245,1)");

	svg.append("text")
        .text("Sun")
        .attr("x", 845)
        .attr("y", 490)
        .attr("font-size", 70)
        .attr("font-family", "Krungthep")
        .attr("fill", "rgba(17,17,17,1)");
		
	svg.append("text")
        .text("\"anyth ng")
        .attr("x", 15)
        .attr("y", 280)
        .attr("font-size", 30)
        .attr("font-family", "Krungthep")
        .attr("fill", "rgba(37,37,37,1)");		
		
	svg.append("text")
        .text("i")
        .attr("x", 127)
        .attr("y", 280)
        .attr("font-size", 30)
        .attr("font-family", "Krungthep")
        .attr("fill", "#b2161c");		
		
	svg.append("text")
	    .text("but")
	    .attr("x", 50)
        .attr("y", 340)
        .attr("font-size", 25)
        .attr("font-family", "Krungthep")
        .attr("fill", "rgba(37,37,37,1)");	
		
	svg.append("text")
        .text("o")
        .attr("x", 50)
        .attr("y", 400)
        .attr("font-size", 45)
        .attr("font-family", "Krungthep")
        .attr("fill", "#b2161c");

	svg.append("text")
	    .text("rdinary\"")
	    .attr("x", 76)
        .attr("y", 400)
        .attr("font-size", 45)
        .attr("font-family", "Krungthep")
        .attr("fill", "rgba(37,37,37,1)");		
		
	//-----menus--------
	svg.append("text")
		.attr("class", "menutext")
        .text(menu1Text)
        .attr("x", menuX)
        .attr("y", menu1Y)
        .attr("font-size", menuHeight)
		.on('click', function () {window.location = menu1;});

	svg.append("text")
		.attr("class", "menutext")
        .text(menu2Text)
        .attr("x", menuX)
        .attr("y", menu2Y)
        .attr("font-size", menuHeight)
		.on('click', function () {window.location = menu2;});	

	svg.append("text")
		.attr("class", "menutext")
        .text(menu3Text)
        .attr("x", menuX)
        .attr("y", menu3Y)
        .attr("font-size", menuHeight)
		.on('click', function () {window.location = menu3;});

	svg.append("text")
		.attr("class", "menutext")
        .text(menu4Text)
        .attr("x", menuX)
        .attr("y", menu4Y)
        .attr("font-size", menuHeight)
		.on('click', function () {window.location = menu4;});
}