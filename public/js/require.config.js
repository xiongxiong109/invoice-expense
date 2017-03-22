// config require
requirejs.config({
	baseUrl: '/',
	paths: {
		// baseLine
		'modules': 'js/modules',
		// libs
		'text': 'js/lib/text/text',
		'underscore': 'js/lib/underscore/underscore-min',
		'jquery': 'js/lib/jquery/dist/jquery.min',
		'backbone': 'js/lib/backbone/backbone-min',
		// modules
		'FormPanel': 'js/module/form.panel'
	},
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	},
	alias: {
		$: 'jquery',
		_: 'underscore'
	}
});