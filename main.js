$(document).ready(function() {
	//credit: http://stackoverflow.com/questions/24944925/background-image-jumps-when-address-bar-hides-ios-android-mobile-chrome
    var bg = jQuery("#div1, #div2");
	$(window).resize("resizeBackground");
	function resizeBackground() {
		var newHeight = jQuery(window).height() + 60;
		var newWidth = jQuery(window).width();
    	bg.height(jQuery(window).height() + 60);
    	document.styleSheets[0].addRule('.front:before', 'height: ' + newHeight + "; width: " + newWidth + ";");
	}
	console.log($(window).width());
	if($(window).width() < 768){
		resizeBackground();
	}
});