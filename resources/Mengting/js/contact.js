var h = 580;
var w = 980;
var svg;

var menuHeight = 12;
var menuX = 0;
var menu1Text = "->HOME";
var menu1 = "index.html";
var menu1Y = 355;

var menu2Text = "->ABOUT";
var menu2 = "about.html";
var menu2Y = 385;

var menu3Text = "->PORTFOLIO";
var menu3 = "portfolio.html";
var menu3Y = 415;

var menu4Text = "->CONTACT";
var menu4 = "contact.html";
var menu4Y = 445;


drawContent();
function drawContent(){
    svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);
		
	//---rects-----
	svg.append("image")
	    .attr("x", 495)
	    .attr("y", 0)
        .attr("width", 460)
        .attr("height", 580)
        .attr("xlink:href", "images/contact.png");
		
	svg.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 150)
        .attr("height", 450)
        .attr("fill", "rgba(255,0,0,0.4)");

    svg.append("rect")
	    .attr("x", 0)
        .attr("y", 290)
        .attr("width", 750)
		.attr("height", 255)
        .attr("fill", "rgba(0,114,188,0.4)");

	//-----text------
	svg.append("text")
        .text("contact")
        .attr("x", 0)
        .attr("y", 320)
        .attr("font-size", 36)
        .attr("font-family", "Krungthep")
        .attr("fill", "rgba(245, 245, 245, 1)");

	svg.append("text")
        .text("Mengting.  un")
        .attr("x", 500)
        .attr("y", 440)
        .attr("font-size", 25)
		.attr("text-anchor", "end")
		.attr("xml:space", "preserve")
        .attr("font-family", "Krungthep")
        .attr("fill", "rgba(37,37,37,1)");
		
	svg.append("text")
        .text("S")
        .attr("x", 467)
        .attr("y", 440)
        .attr("font-size", 25)
		.attr("text-anchor", "end")
        .attr("font-family", "Krungthep")
        .attr("fill", "#b2161c");

	svg.append("text")
        .text("School of Interactive Arts+Technology")
        .attr("x", 500)
        .attr("y", 470)
        .attr("font-size", 18)
		.attr("text-anchor", "end")
		.attr("xml:space", "preserve")
        .attr("font-family", "Krungthep")
        .attr("fill", "rgba(37,37,37,1)");
		
	svg.append("text")
        .text("Simon Fraser University")
        .attr("x", 500)
        .attr("y", 495)
        .attr("font-size", 18)
		.attr("text-anchor", "end")
		.attr("xml:space", "preserve")
        .attr("font-family", "Krungthep")
        .attr("fill", "rgba(37,37,37,1)");			

	svg.append("text")
        .text("C   NADA")
        .attr("x", 500)
        .attr("y", 520)
        .attr("font-size", 18)
		.attr("text-anchor", "end")
		.attr("xml:space", "preserve")
        .attr("font-family", "Krungthep")
        .attr("fill", "rgba(37,37,37,1)");

	svg.append("text")
        .text("A")
        .attr("x", 450)
        .attr("y", 520)
        .attr("font-size", 18)
		.attr("text-anchor", "end")
        .attr("font-family", "Krungthep")
        .attr("fill", "#b2161c");

	svg.append("text")
        .text("msa93@sfu.ca")
        .attr("x", 500)
        .attr("y", 545)
        .attr("font-size", 18)
		.attr("text-anchor", "end")
		.attr("xml:space", "preserve")
        .attr("font-family", "Krungthep")
        .attr("fill", "rgba(37,37,37,1)");
														
	//-----menus--------
	svg.append("text")
        .text(menu1Text)
		.attr("class", "menutext")
        .attr("x", menuX)
        .attr("y", menu1Y)
        .attr("font-size", menuHeight)
		.on('click', function () {window.location = menu1;});

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
}


