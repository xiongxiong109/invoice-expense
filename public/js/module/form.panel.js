// form panel
define(['backbone', 'text!template/form.panel.html'],
	function(backbone, Template) {

		var View = Backbone.View.extend({
			el: '#j_form_panel',
			template: _.template(Template),
			render: function() {
				this.$el.html(this.template())
			},
			setOptions: function() {}
		});

		return View;

	});