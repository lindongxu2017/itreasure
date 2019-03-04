var app = getApp();
Page({
	data: {
		courseList: {
			data: [],
			page: 1,
			more: true,
			request: false,
		},
		search: '',
	},
	onLoad() {
		this.getListBuffer(false);
	},
	onReachBottom() {
		this.getListBuffer(true);
	},
	getListBuffer(isReachBottom) {
		// app.getList({
		// 	api: '',
		// 	listName: 'courseList',
		// 	that: this,
		// 	isReachBottom: isReachBottom,
		// });
		var courseList = this.data.courseList;
		courseList.data = [
			{
				cover: '/images/icons/templet.png',
				title: 'Python开发入门与爬虫项目实战',
				people: 4,
				price: '199.00',
			},
			{
				cover: '/images/icons/templet.png',
				title: 'Python开发入门与爬虫项目实战',
				people: 4,
				price: '199.00',
			},
		];
		this.setData({ courseList: courseList });
	},
});