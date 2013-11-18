$(function (){ 
$("nav").on("click","li", function(e)
	var $this = $(this):
	slideThumbs($this);
	activateBtn($this);
	return false;
)}

function slideThumbs (li){
	var $slider = $("#slide-dwon"),
	topic = li.find("span").text().toLowerCase();
if (li.hasClass.("active")){
	$slide.slideUp();
} else {
	$slider.slideDown("fast",function(){
	$("#slide-down > section").hide();
	$("section." + topic).show();	
		});
	}
}


function activateBtn(li){
	li.siblings("li").removeClass("activate");
	li.toggleClass("activate");
}