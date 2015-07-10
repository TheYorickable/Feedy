var Backbone = require('backbone');
var $ = require('jquery');
var ItemList = require('../collections/list');

var ItemView = Backbone.View.extend({
	tagName: 'li',

	initialize: function () {
		this.render();
	},

	render: function () {
		this.$el.html('<span>' + this.model.get('title') + '</span> <a href="#">' + this.model.get('url') + '</a>');
		return this;
	}

});

module.exports = ItemView;