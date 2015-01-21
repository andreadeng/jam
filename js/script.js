$(document).ready(function(){
	$("#carousel-bar").click(function(){
    	$("#carousel-content").toggle(200);
	});
	$("#button").click(function(){
		$("#modal-container").fadeIn(300);
	});
	
	$("#coming").click(function(){
		$("#modal-container").fadeOut(300);
	});
	$("#nevermind").click(function(){
		$(this).text("(not an option)");
	});
	$("#nevermind").hover(function(){
		$(this).text("(nevermind)");
	});
	$(".free").click(function(){
		$(this).css("background-color", "#66ccff");
		$("#modal-container").fadeIn(300);
	});
});