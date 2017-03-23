// page index
require(['backbone', 'FormPanel', 'FormResult'], function(Backbone, FormPanel, FormResult) {

	var View = Backbone.View.extend({
		el: '#app',
		initialize: function() {
			this.FormPanel = new FormPanel();
			this.FormResult = new FormResult();
			this.render();
			this.renderEls();
			this.listenTo(this.FormPanel, 'update', this.ui_strGenerated);
		},
		render: function() {
			this.FormPanel.render();
		},
		renderEls: function() {
			this.$els = {
				fltContainer: this.$('#j_flight_container')
			}
		},
		ui_strGenerated: function(json) {
			this.FormResult.setOptions(json);
		}
	});

	new View();

});