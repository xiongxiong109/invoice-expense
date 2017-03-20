// page index
require(['backbone'], function(Backbone) {

	var View = Backbone.View.extend({
		el: '#app',
		initialize: function() {
			this.renderEls();
		},
		renderEls: function() {
			this.$els = {
				fltContainer: this.$('#j_flight_container')
			}
		}
	});

	new View();

});