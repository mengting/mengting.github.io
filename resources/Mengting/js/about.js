var h = 580;
var w = 980;
var svg;

var menuHeight = 12;
var menuX = 150;

var menu1Text = "Curriculum Vitae";
var menu1 = "Mengting_Sun_CV_2014.pdf";
var menu1Y = 160;

var menu2Text = "->HOME";
var menu2 = "index.html";
var menu2Y = 190;

var menu3Text = "->ABOUT";
var menu3 = "about.html";
var menu3Y = 220;

var menu4Text = "->PORTFOLIO";
var menu4 = "portfolio.html";
var menu4Y = 250;

var menu5Text = "->CONTACT";
var menu5 = "contact.html";
var menu5Y = 280;


drawContent();

function drawContent(){
    svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);
		
	//---rects-----
	svg.append("image")
	    .attr("x", -135)
	    .attr("y", 75)
        .attr("width", 400)
        .attr("height", 520)
        .attr("xlink:href", "images/about.jpg");
		
	svg.append("rect")
        .attr("x", 150)
        .attr("y", 0)
        .attr("width", 560)
        .attr("height", 310)
        .attr("fill", "rgba(255,0,0,0.4)");

    svg.append("rect")
	    .attr("x", 655)
        .attr("y", 250)
        .attr("width", 280)
		.attr("height", 260)
        .attr("fill", "rgba(0,114,188,0.4)");	
		
	//----texts----
	svg.append("text")
        .text("about")
        .attr("x", 150)
        .attr("y", 105)
        .attr("font-size", 35)
        .attr("font-family", "Krungthep")
        .attr("fill", "rgba(245, 245, 245, 1)");	

	svg.append("text")
        .text("i'm")
        .attr("x", 660)
        .attr("y", 275)
        .attr("font-size", 30)
        .attr("font-family", "Krungthep")
        .attr("fill", "rgba(245, 245, 245, 1)");

	svg.append("text")
        .text("a")
        .attr("x", 688)
        .attr("y", 306)
        .attr("font-size", 30)
        .attr("font-family", "Krungthep")
        .attr("fill", "rgba(245, 245, 245, 1)");
	
	svg.append("text")
        .text("researcher")
        .attr("x", 710)
        .attr("y", 275)
        .attr("font-size", 30)
        .attr("font-family", "Krungthep")
        .attr("fill", "rgba(37,37,37,1)");
		
	svg.append("text")
        .text("esigner")
        .attr("x", 725)
        .attr("y", 325)
        .attr("font-size", 23)
        .attr("font-family", "Krungthep")
        .attr("fill", "rgba(37,37,37,1)");
		
	svg.append("text")
        .text("d")
        .attr("x", 710)
        .attr("y", 325)
        .attr("font-size", 23)
        .attr("font-family", "Krungthep")
        .attr("fill", "#b2161c");

	svg.append("text")
        .text("program   er")
        .attr("x", 710)
        .attr("y", 375)
        .attr("font-size", 25)
		.attr("xml:space", "preserve")
        .attr("font-family", "Krungthep")
        .attr("fill", "rgba(37,37,37,1)");
		
	svg.append("text")
	    .text("m")
        .attr("x", 825)
        .attr("y", 375)
        .attr("font-size", 25)
        .attr("font-family", "Krungthep")
        .attr("fill", "#b2161c");

	svg.append("text")
        .text("\"f  ke\" artist")
        .attr("x", 710)
        .attr("y", 430)
        .attr("font-size", 21)
		.attr("xml:space", "preserve")
        .attr("font-family", "Krungthep")
        .attr("fill", "rgba(37,37,37,1)");
		
	svg.append("text")
	    .text("a")
        .attr("x", 730)
        .attr("y", 430)
        .attr("font-size", 21)
        .attr("font-family", "Krungthep")
        .attr("fill", "#b2161c");

	var bio = "As a MSc candidate in the  School of Interactive Arts and Technology at Simon Fraser University, my research interests include computational aesthetics, ambient visualization and informative arts. My current research explores the effectiveness of using informative art as feedback for residential energy use by integrating the visualizations with ambient displays and ecologically valid simulation. </br></br>I have a background in computing science, but I\'m more of an \"artist\" than a scientist. I\'m interested in graphic design, photography, painting and \"fun\" coding :)";
	svg.append("foreignObject")
		.attr("x", 252)
		.attr("y", 0)
		.attr("width", 410)
		.attr("height", 270)
		.append("xhtml:body")
		.style("font", "14px 'Krungthep'")
		.style("color", "#363636")
		.style("text-align", "left")
		.style("background-color", "transparent")
		.html("<p>" + bio + "</p>");
								
	//-----menus--------
	svg.append("text")
        .text(menu1Text)
		.attr("class", "menutext")
        .attr("x", menuX)
        .attr("y", menu1Y)
        .attr("font-size", menuHeight)
        .attr("font-family", "Krungthep")
        .attr("fill", "rgba(245,245,245,1)")
		.style("cursor", "pointer")
		.on('click', function () {window.open(menu1);});

	svg.append("text")
        .text(menu2Text)
		.attr("class", "menutext")
        .attr("x", menuX)
        .attr("y", menu2Y)
        .attr("font-size", menuHeight)
		.on('click', function () {window.location = menu2;});	

	svg.append("text")
        .text(menu3Text)
		.attr("class", "menutext")
        .attr("x", menuX)
        .attr("y", menu3Y)
        .attr("font-size", menuHeight)
		.on('click', function () {window.location = menu3;});

	svg.append("text")
        .text(menu4Text)
		.attr("class", "menutext")
        .attr("x", menuX)
        .attr("y", menu4Y)
        .attr("font-size", menuHeight)
		.on('click', function () {window.location = menu4;});  
			 
	svg.append("text")
        .text(menu5Text)
		.attr("class", "menutext")
        .attr("x", menuX)
        .attr("y", menu5Y)
        .attr("font-size", menuHeight)
		.on('click', function () {window.location = menu5;}); 
}
