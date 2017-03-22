// page index
require(['backbone', 'FormPanel'], function(Backbone, FormPanel) {

	var View = Backbone.View.extend({
		el: '#app',
		initialize: function() {
			this.FormPanel = new FormPanel();
			this.renderEls();
			this.render();
		},
		render: function() {
			this.FormPanel.render();
		},
		renderEls: function() {
			this.$els = {
				fltContainer: this.$('#j_flight_container')
			}
		}
	});

	new View();

});