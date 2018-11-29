var h = 580;
var w = 980;
var svg;

var menuHeight = 12;
var menuX = 470;
var menu1Text = "->BACK";
var menu1 = "portfolio.html";
var menu1Y = 560;

drawContent();

function drawContent(){
    svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);
		
	//---rects-----
	svg.append("rect")
        .attr("x", 150)
        .attr("y", 40)
        .attr("width", 680)
        .attr("height", 50)
        .attr("fill", "rgba(255,0,0,0.4)");

    svg.append("rect")
	    .attr("x", 150)
        .attr("y", 55)
        .attr("width", 680)
		.attr("height", 570)
        .attr("fill", "rgba(0,114,188,0.4)");	
		
	//----texts----
	svg.append("text")
        .text("publications")
        .attr("x", 490)
        .attr("y", 85)
        .attr("font-size", 35)
		.attr("text-anchor", "middle")
        .attr("font-family", "Krungthep")
        .attr("fill", "rgba(245, 245, 245, 1)");

	var text = "<h3>exhibition</h3>\"Seeing information in a new way: Ambient and Artistic Visualization for Residential Energy Use\", National Museum of Science and Technology, Ottawa, April, 2014"+
	           "<h3>posters</h3><a href=\"grand-poster.pdf\" target=\"_blank\">M. Sun, L. Bartram. \"Informative Art for Energy Use Feedback,\" 2013 GRAND (Graphics, Animation, and New Media) Conference, Toronto, ON, Canada, May 2013</a>"+
			   "<h3>papers</h3>M. Sun, L. Bartram. \"Energy Conservation Game: Exploring Alternative Visualizations for Residential Energy Use\", 2014 GRAND (Graphics, Animation, and New Media) Conference, Ottawa, ON, Canada, May 2014 (Accepted)"+
			   "</br></br><a href=\"http://link.springer.com/article/10.1186%2F2190-8532-1-23\" target=\"_blank\">A. J. Park, H. H. Tsang, M. Sun and U. Glasser, \"An agent-based model and computational framework for counter-terrorism and public safety based on swarm intelligence\", Security Informatics 1(1), Aug, 2013</a>"+
			   "</br></br><a href=\"http://dl.acm.org/citation.cfm?id=2194295\" target=\"_blank\">M. S. El-Nasr, L. Andres, T. Lavender, N. Funk, N. Jahangiri, M. Sun, \"IgnitePlay: Encouraging and sustaining healthy living through social games,\" igic, pp.23-25, 2011 IEEE International Games Innovation Conference, 2011</a>"+
			   "</br></br><a href=\"http://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=5484772&url=http%3A%2F%2Fieeexplore.ieee.org%2Fxpls%2Fabs_all.jsp%3Farnumber%3D5484772\" target=\"_blank\">H. H. Tsang, A. J. Park, M. Sun and U. Glasser. \"GENIUS: A Computational Modeling Framework for Counter-Terrorism Planning and Response\". In Proc. 2010 IEEE Intl. Conference on Intelligence and Security Informatics, Vancouver, BC, Canada, May 2010</a>";
	svg.append("foreignObject")
		.attr("x", 200)
		.attr("y", 120)
		.attr("width", 580)
		.attr("height", 430)
		.append("xhtml:body")
		.style("font", "12px 'Krungthep'")
		.style("color", "#363636")
		.style("text-align", "left")
		.style("background-color", "transparent")
		.html("<p>" + text + "</p>");
								
	//-----menus--------
	svg.append("text")
        .text(menu1Text)
        .attr("x", menuX)
        .attr("y", menu1Y)
        .attr("font-size", menuHeight)
        .attr("font-family", "Krungthep")
        .attr("fill", "rgba(245,245,245,1)")
		.style("cursor", "pointer")
		.on('click', function () {window.location = menu1;});
}

