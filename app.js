var log = require('./utils/log.js');
var toast = require('./utils/toast.js');
var ajax = require('./utils/ajax.js');
var getList = require('./utils/getList.js');
var uploadImg = require('./utils/uploadImg.js');
var setUserInfo = require('./utils/setUserInfo.js');
var getUserInfo = require('./utils/getUserInfo.js');
var login = require('./utils/login.js');
App({
	data: {
		// 网络请求地址
		url: 'https://xinwo.qht17.com/',
		
		// 网络请求数量
		request_number: 0,

		// loading状态
		loading: false,
		
		// 登录同步锁
		login_request: false,

		// 用户id
		uid: null,

		// 微信授权同步锁
		wxAuth: false,
	},
	onLaunch() {
		this.login();
	},
	login: login,
	getList: getList,
	log: log,
	toast: toast,
	ajax: ajax,
	uploadImg: uploadImg,
	setUserInfo: setUserInfo,
	getUserInfo: getUserInfo,
});