require.config({
	//By default load any module IDs from js/lib
	//baseUrl: 'js/lib',
	//except, if the module ID starts with "app",
	//load it from the js/app directory. paths
	//config is relative to the baseUrl, and
	//never includes a ".js" extension since
	//the paths config could be for a directory.
	baseUrl:"js",
	paths: {
		'jquery':'lib/jquery.min',
		'jgestures':'lib/jgestures.min',
		'imgpreload':'lib/jquery.imgpreload',
		'swiper':'swiper.min',
		'TweenMax':'lib/TweenMax.min',
		'viewSet':'app/viewSet',
		'animate':'app/animate',
		'control':'app/control'
	},
	shim:{
		
		'imgpreload':['jquery'],
		'jgestures':['jquery']
		
		//'weixin':['jweixin','jquery','fc']
	},
	waitSeconds: 60
});
require(['control'], function() {});