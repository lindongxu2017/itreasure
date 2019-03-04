var app = getApp();
Page({
	data: {
		// 轮播图与操作列表
		imgUrls: [],
		list1: [],
		forum: [
			{
				cover: '/images/icons/templet.png',
				explain: '上市、并购、估值建模、财务分析等投行技能课程，快速掌握投行核心要领',
			},
		],
		courseList1: [
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
		],
		courseList2: [
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
		],
		courseList3: [
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
		],
		mechanism: [
			{
				img: '/images/logo.png',
				url: '',
			},
			{
				img: '/images/logo.png',
				url: '',
			},
			{
				img: '/images/logo.png',
				url: '',
			},
		],
		teacher: [
			{
				img: '/images/icons/templet.png',
				name: '刘兴',
			},
			{
				img: '/images/icons/templet.png',
				name: '刘兴',
			},
		],
		footer: [
			{
				icon: '/images/icons/templet.png',
				content: '0755-25977435',
			},
			{
				icon: '/images/icons/templet.png',
				content: '0755-25977435',
			},
		],
	},
	onLoad() {
		// 获取轮播图，操作列表
		app.ajax({
			api: '/Api/Index/index',
			success: res => {
				var supplement = res.procat.length % 4;
				if (supplement > 0) supplement = 4 - supplement;
				for (var i = 0; i < supplement; i++) {
					res.procat.push({});
				};
				this.setData({
					imgUrls: res.ggtop,
					list1: res.procat,
				});
			},
		});
	},
});