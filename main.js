$(document).ready(function() {
	//credit: http://stackoverflow.com/questions/24944925/background-image-jumps-when-address-bar-hides-ios-android-mobile-chrome
    var bg = $("#div1");
	$(window).resize("resizeBackground");
	function resizeBackground() {
		var newHeight = jQuery(window).height() + 60;
		var newWidth = jQuery(window).width();
    	bg.height(jQuery(window).height() + 60);
    	var rule1 = ".front::before {width: " + newWidth + "px !important; height: " + newHeight +"px !important}";
    	document.styleSheets[1].insertRule(rule1, 1);
	}

	if($(window).width() < 768){
		resizeBackground();
	}
});