var app = getApp();
Page({
	data: {
		// 用户信息
		userInfo: {},

		// 操作列表
		list: [
			{
        url: '/pages/home_page/home_page',
				title: '我的首页',
				id: 1,
			},
			{
        url: '/pages/my_learn/my_learn',
				title: '我的学习',
				id: 2,
			},
			{
				url: '',
				title: '会员充值',
				id: 3,
			},
		],
	},
});