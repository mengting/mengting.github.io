var h = 580;
var w = 980;
var svg;

var menuHeight = 12;
var menuX = 805;
var menu1Text = "->HOME";
var menu1 = "index.html";
var menu1Y = 105;

var menu2Text = "->ABOUT";
var menu2 = "about.html";
var menu2Y = 135;

var menu3Text = "->PORTFOLIO";
var menu3 = "portfolio.html";
var menu3Y = 165;

var menu4Text = "->CONTACT";
var menu4 = "contact.html";
var menu4Y = 195;


var linkHeight = 12;
var linkX = 340;
var link1Text = "energy game";
var link1 = "http://energyvis.iat.sfu.ca/energy-game-v3/game.html?session=demo";
var link1Y = 300;

var link2Text = "westhouse dashboard demo";
var link2 = "http://www.sfu.ca/~msa93/ALIS-UI/";
var link2Y = 325;

var link3Text = "energy vis demo";
var link3 = "http://www.sfu.ca/~msa93/energyVis/";
var link3Y = 350;

var link6Text = "drink for your health";
var link6 = "http://www.sfu.ca/~msa93/CMPT467/project/drinkvis/drinkVisualization.html";
var link6Y = 375;

var link4Text = "list";
var link4 = "publication.html";
var link4Y = 440;

var link5Text = "photos";
var link5 = "https://www.facebook.com/media/set/?set=a.1986768556101.2116838.1449923692&type=1&l=aaa32de80d";
var link5Y = 490;

var link7Text = "art works";
var link7 = "https://picasaweb.google.com/108978096747885947680/FunArts?authuser=0&feat=directlink";
var link7Y = 515;

drawContent();
function drawContent(){
    svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);
		
	//---rects-----
	svg.append("image")
	    .attr("x", 800)
	    .attr("y", 25)
        .attr("width", 200)
        .attr("height", 590)
        .attr("xlink:href", "images/portfolio.jpg");
		
	svg.append("rect")
        .attr("x", 500)
        .attr("y", 0)
        .attr("width", 480)
        .attr("height", 200)
        .attr("fill", "rgba(255,0,0,0.4)");

    svg.append("rect")
	    .attr("x", 0)
        .attr("y", 160)
        .attr("width", 550)
		.attr("height", 370)
        .attr("fill", "rgba(0,114,188,0.4)");	

	//----text------
	svg.append("text")
        .text("portfolio")
        .attr("x", 805)
        .attr("y", 55)
        .attr("font-size", 36)
        .attr("font-family", "Krungthep")
        .attr("fill", "rgba(245, 245, 245, 1)");	

	svg.append("text")
        .text("v sualizations")
        .attr("x", 330)
        .attr("y", 300)
        .attr("font-size", 32)
		.attr("text-anchor", "end")
		.attr("xml:space", "preserve")
        .attr("font-family", "Krungthep")
        .attr("fill", "rgba(37,37,37,1)");
		
	svg.append("text")
        .text("i")
        .attr("x", 119)
        .attr("y", 300)
        .attr("font-size", 32)
		.attr("text-anchor", "end")
        .attr("font-family", "Krungthep")
        .attr("fill", "#b2161c");

	svg.append("text")
        .text("publicati  ns")
        .attr("x", 330)
        .attr("y", 440)
        .attr("font-size", 32)
		.attr("text-anchor", "end")
		.attr("xml:space", "preserve")
        .attr("font-family", "Krungthep")
        .attr("fill", "rgba(37,37,37,1)");
		
	svg.append("text")
        .text("o")
        .attr("x", 291)
        .attr("y", 440)
        .attr("font-size", 32)
		.attr("text-anchor", "end")
        .attr("font-family", "Krungthep")
        .attr("fill", "#b2161c");	

	svg.append("text")
        .text("ga leries")
        .attr("x", 330)
        .attr("y", 490)
        .attr("font-size", 32)
		.attr("text-anchor", "end")
		.attr("xml:space", "preserve")
        .attr("font-family", "Krungthep")
        .attr("fill", "rgba(37,37,37,1)");
		
	svg.append("text")
        .text("l")
        .attr("x", 232)
        .attr("y", 490)
        .attr("font-size", 32)
		.attr("text-anchor", "end")
        .attr("font-family", "Krungthep")
        .attr("fill", "#b2161c");
		
	//-----links--------
	svg.append("text")
        .text(link1Text)
		.attr("class", "menutext")
        .attr("x", linkX)
        .attr("y", link1Y)
        .attr("font-size", linkHeight)
		.on('click', function () {window.open(link1);});

	svg.append("text")
        .text(link2Text)
		.attr("class", "menutext")
        .attr("x", linkX)
        .attr("y", link2Y)
        .attr("font-size", linkHeight)
		.on('click', function () {window.open(link2);});	

	svg.append("text")
        .text(link3Text)
		.attr("class", "menutext")
        .attr("x", linkX)
        .attr("y", link3Y)
        .attr("font-size", linkHeight)
		.on('click', function () {window.open(link3);});

	svg.append("text")
        .text(link4Text)
		.attr("class", "menutext")
        .attr("x", linkX)
        .attr("y", link4Y)
        .attr("font-size", linkHeight)
		.on('click', function () {window.location = link4;});  

	svg.append("text")
        .text(link5Text)
		.attr("class", "menutext")
        .attr("x", linkX)
        .attr("y", link5Y)
        .attr("font-size", linkHeight)
		.on('click', function () {window.open(link5);}); 
		
	svg.append("text")
        .text(link6Text)
		.attr("class", "menutext")
        .attr("x", linkX)
        .attr("y", link6Y)
        .attr("font-size", linkHeight)
		.on('click', function () {window.open(link6);}); 

	svg.append("text")
        .text(link7Text)
		.attr("class", "menutext")
        .attr("x", linkX)
        .attr("y", link7Y)
        .attr("font-size", linkHeight)
		.on('click', function () {window.open(link7);});	
			
	//---menus----
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