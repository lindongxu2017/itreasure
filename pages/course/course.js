var app = getApp();
Page({
	data: {
		courseList: {
			data: [],
			page: 1,
			more: true,
			request: false,
		},
		type_list: ["投资银行", "现代科技", "峰会论坛"],
		type_list2: ["上市", "上市", "上市", "上市", "上市", "上市", "上市", "上市", "上市", "上市", "上市",],
		type_list3: ["初级", "进阶级", "大师级"],
		type_list4: ["最新", "最热", "好评"],
		type_list5: [
			{
				icon: '',
				selectIcon: '',
				title: '会员特权',
			},
			{
				icon: '',
				selectIcon: '',
				title: '付费课程',
			},
			{
				icon: '',
				selectIcon: '',
				title: '免费课程',
			},
		],
		type_list5_index: 0,
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