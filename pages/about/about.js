var app = getApp();
var WxParse = require('../../wxParse/wxParse.js');
Page({
	data: {
		index: 0,
	},
	onLoad() {

	},
	indexTab(e) {
		var index = e.currentTarget.dataset.index;
		if (index != this.data.index) this.setData({index: index});
	},
});