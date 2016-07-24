$(document).ready(function() {
	//credit: http://stackoverflow.com/questions/24944925/background-image-jumps-when-address-bar-hides-ios-android-mobile-chrome
    var bg = jQuery("#div1, #div2");
	jQuery(window).resize("resizeBackground");
	function resizeBackground() {
    	bg.height(jQuery(window).height() + 60);
	}
	if($(window).width() <= 768){
		resizeBackground();
	}
});