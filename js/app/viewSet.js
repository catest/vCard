define(['jquery'], function(jQuery) {
	var viewInfo={}
	viewInfo.resize=function() {
		var w_w = $(window).width();
		var w_h = $(window).height()
		var FontSize = parseInt($("html").css("font-size"));
		FontSize = (FontSize * w_w) / 640;
		//alert("FontSize:"+FontSize);
		$("html").css("font-size", FontSize + "px");
		$(".wrap").show();
		viewInfo.width=w_w;
		viewInfo.height=w_h;
		viewInfo.fontSize=FontSize;
	}
	return viewInfo;
});