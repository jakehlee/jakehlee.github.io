
$(document).ready(function() {
	//credit: http://stackoverflow.com/questions/24944925/background-image-jumps-when-address-bar-hides-ios-android-mobile-chrome
    var bg = $("#div1");
	$(window).resize("resizeIndexBackground");
	function resizeIndexBackground() {
		var newHeight = screen.height;
		var newWidth = screen.width;
    	bg.height(screen.height);
    	var rule1 = "#div1::before {width: " + newWidth + "px !important; height: " + newHeight +"px !important}";
    	document.styleSheets[1].insertRule(rule1, 1);
    	var rule2 = ".static-full {width: " + newWidth + "px !important; height: " + newHeight + "px !important}";
    	document.styleSheets[1].insertRule(rule2, 2);
	}

	if($(window).width() < 768){
		resizeIndexBackground();
	}
});
