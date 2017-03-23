// form panel
define(['backbone', 'text!template/form.panel.html'],
	function(backbone, Template) {

		var Model = Backbone.Model.extend({
			defaults: {
				title: '加班打车',
				content: '项目发布',
				by: {
					'0': '出租'
				},
				toTime: '',
				casePrice: 100,
				totalPrice: 100
			}
		});

		var View = Backbone.View.extend({
			el: '#j_form_panel',
			template: _.template(Template),
			model: new Model(),
			render: function() {
				this.$el.html(this.template(this.model.toJSON()))
			},
			setOptions: function() {}
		});

		return View;

	});