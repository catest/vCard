define(['animate','swiper','jgestures', 'imgpreload', 'viewSet'], function(animate, Swiper,jQuery, imgpreload, viewSet) {
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

	function showScene() {
		$(".wrap_loading").hide();
		$(".wrap_scene").show();
		sliderInit()
		
	}
	function sliderInit() {
		console.log("swiper")
		var mySwiper = new Swiper('.swiper-container', {
			direction: 'vertical',//垂直方向
			loop: false,//是否循环

			// 如果需要前进后退按钮
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',

		})
	}
});