var app = getApp();
Page({
	data: {
		dataList: {
			data: [],
			page: 1,
			more: true,
			request: false,
		},
		type_list: ["投资银行", "现代科技", "峰会论坛"],
		type_list2: ["上市", "上市", "上市", "上市", "上市", "上市", "上市", "上市", "上市", "上市", "上市"],
		type_list3: ["资料文件", "最新上传"],
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
		// 	listName: 'dataList',
		// 	that: this,
		// 	isReachBottom: isReachBottom,
		// });
		var dataList = this.data.dataList;
		dataList.data = [
			{
				type: 'PDF',
				title: '基金业协会洪会长：私募基金的自律管理逻辑-2018.05-62页',
				price: '0.01',
				look: 7,
				download: 2,
				time: '2019-02-18 10:15',
			},
			{
				type: 'PDF',
				title: '基金业协会洪会长：私募基金的自律管理逻辑-2018.05-62页',
				price: '0.01',
				look: 7,
				download: 2,
				time: '2019-02-18 10:15',
			},
			{
				type: 'PDF',
				title: '基金业协会洪会长：私募基金的自律管理逻辑-2018.05-62页',
				price: '0.01',
				look: 7,
				download: 2,
				time: '2019-02-18 10:15',
			},
		];
		this.setData({ dataList: dataList });
	},
});