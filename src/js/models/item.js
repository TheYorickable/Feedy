var Backbone = require('backbone');

var Item = Backbone.Model.extend({
	defaults: {
		uID: 0,
		title: '',
		url: '',
		score: 0
	},

	initialize: function () {
		this.on('change', this._change);
	},

	_change: function () {
		console.log('Item changed');
	}
});

module.exports = Item;