define(['imgpreload'], function(jQuery) {
	$("body img").imgpreload({
		each: function() {
			// callback invoked when each image is loaded
			// this = dom image object
			// check for success with: $(this).data('loaded')
		},
		all: function() {
			// this = array of dom image objects
			// check for success with: $(this[i]).data('loaded')
			$(".loading").hide();
		}
	});
});