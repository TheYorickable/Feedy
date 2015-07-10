var Backbone = require('backbone');
var $ = require('jquery');
var List = require('../collections/list');
var ItemModel = require('../models/item');
var ItemView = require('./item');

var ItemList = Backbone.View.extend({
	el: $('#app'),
	events: {
		'click': '_clickList'
	},

	initialize: function () {
		this.collection = new List();
		this.collection.bind('add', this.newItem);

		this.render();
	},

	render: function () {
		this.$el.append('<ul class="v-itemlist"></ul>');

		this.populateList();

		return this;
	},

	populateList: function () {
		for (var i = 10 - 1; i >= 0; i--) {
			var Item = new ItemModel();

			Item.set({
				title: 'Item title nr' + i,
				url: 'video/id/' + i,
				score: i
			});

			this.collection.add(Item);
		};
	},

	newItem: function (item) {
		var itemView = new ItemView({
			model: item
		});

		$('.v-itemlist', this.el).append(itemView.el);
	},
});

module.exports = ItemList;