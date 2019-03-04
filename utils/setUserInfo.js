// 设置用户信息
module.exports = function setUserInfo(obj) {
	this.ajax({
		api: '/Api/User/updateMyCart',
		data: obj.data,
		success: res => {
			this.getUserInfo(obj.success);
		},
	});
};