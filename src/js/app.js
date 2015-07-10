/*var Backbone = require('backbone');
var _ = require('underscore');

var ItemModel = require('./model/item');
var ItemView = require('./views/item');

var as = new ItemView();

document.querySelector("#app").appendChild(as.el);


var firstItemModel = new ItemModel();
*/

var Backbone = require('backbone');
var $ = require('jquery');

var ItemListView = require('./views/itemList');

var Item = new ItemListView();