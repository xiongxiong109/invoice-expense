// form panel
define(['backbone', 'text!template/form.panel.html'],
	function(backbone, Template) {

		var Model = Backbone.Model.extend({
			defaults: {
				title: '加班打车',
				content: '项目发布',
				fromAddr: '凌空SOHO',
				toAddr: '沪亭路正好广场',
				distance: '36.5',
				by: {
					'0': '出租'
				},
				selectBy: '0',
				fromTime: '19:00',
				toTime: {
					'0': '22:00',
					'1': '22:30',
					'2': '23:00',
					'3': '24:00'
				},
				selectToTime: '0',
				maxPrice: 100, // 零点以前最高可报销金额
				casePrice: 100,
				finalPrice: 100
			}
		});

		var View = Backbone.View.extend({
			el: '#j_form_panel',
			template: _.template(Template),
			model: new Model(),
			events: {
				'input #j_casePrice': 'evt_modifyPrice',
				'input #distance': 'evt_modifyDistance',
				'change #j_toTime': 'evt_modifyToTime',
				'change #j_toAddr': 'evt_modifyAddr',
				'click #j_result': 'evt_callback'
			},
			render: function() {
				this.$el.html(this.template(this.model.toJSON()));
				this.renderEls();
			},
			renderEls: function() {
				this.els = {
					toTime: this.$("#j_toTime"),
					casePrice: this.$("#j_casePrice")
				}
			},
			calcPrice: function(price) {
				var maxPrice = this.model.get('maxPrice');
				var toTime = this.els.toTime.val();
				// 超过了24点, 全额报销
				if (parseInt(toTime) >= 3 && price > 100) {
					this.model.set('finalPrice', price);
				} else {
					this.model.set('finalPrice', Math.min(maxPrice, price));
				}
				console.log(this.model.get('finalPrice'));
			},
			evt_modifyPrice: function(e) {
				var price = e.currentTarget.value;
				this.model.set('casePrice', price);
				this.calcPrice(price);
			},
			evt_modifyDistance: function(e) {
				var distance = e.currentTarget.value;
				this.model.set('distance', distance);
			},
			evt_modifyToTime: function(e) {
				var v = e.currentTarget.value;
				var price = this.model.get('casePrice');
				this.model.set('selectToTime', v);
				this.calcPrice(price);
			},
			evt_modifyAddr: function(e) {
				var v = e.currentTarget.value;
				// var addr = this.model.get('toAddr');
				this.model.set('toAddr', v);
			},
			evt_callback: function() {
				var json = this.model.toJSON();
				this.trigger('update', json);
			}
		});

		return View;

	});