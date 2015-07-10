var Backbone = require('backbone');
var $ = require('jquery');
var ItemList = require('../collections/list');

var ItemView = Backbone.View.extend({
	tagName: 'div',

	initialize: function () {
		this.render();
	},

	render: function () {
		this.$el.html(this.model.get('url'));
		return this;
	}

});

module.exports = ItemView;