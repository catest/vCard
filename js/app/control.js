define(['animate', 'jgestures', 'imgpreload', 'viewSet'], function(animate, jQuery, imgpreload, viewSet) {
	$(function() {
		viewSet.resize(); //界面度量初始化
		console.log(viewSet.width + "|" + viewSet.height + "|" + viewSet.fontSize)

		$("body img").imgpreload({
			each: function() {
				// callback invoked when each image is loaded
				// this = dom image object
				// check for success with: $(this).data('loaded')
			},
			all: showScene()
		});
	});
	function showScene(){
		$(".wrap_loading").hide();
		$(".wrap_scene").show();
	}
});