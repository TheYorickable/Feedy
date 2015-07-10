var Backbone = require('backbone');
var ItemModel = require('../models/item.js');

var ItemList = Backbone.Collection.extend({
	model: ItemModel
});

module.exports = ItemList;