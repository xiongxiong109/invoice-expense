// 生成formResult
define(['backbone', 'text!template/form.result.html'],
	function(Backbone, Template) {

		var Model = Backbone.Model.extend({
			defaults: {}
		});

		var View = Backbone.View.extend({
			model: new Model(),
			template: _.template(Template),
			el: '#j_form_rst',
			initialize: function() {
				var json = this.model.toJSON();
				if (!_.isEmpty(json)) {
					this.render();
				}
			},
			render: function() {
				this.$el.html(this.template(this.model.toJSON()));
			},
			setOptions: function(json) {
				if (!_.isEmpty(json)) {
					console.log(json);
					this.model.set(json);
					this.render();
				}
			}
		});

		return View;

})