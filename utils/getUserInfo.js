// 获取用户信息
module.exports = function getUserInfo(fn, notUpdated) {
	var userInfoStr = wx.getStorageSync("userInfo");
	var userInfo = {};
	if (userInfoStr) userInfo = JSON.parse(userInfoStr);
	if (userInfo.photo && notUpdated) {
		if (fn) fn(userInfo);
	} else {
		this.ajax({
			api: '/Api/User/userinfo',
			method: "GET",
			loading: { close: true },
			success: res => {
				userInfo = res.data;
				wx.setStorageSync("userInfo", JSON.stringify(userInfo));
				if (userInfo.photo) {
					if (fn) fn(userInfo);
				} else {
					if (!this.data.isWxAuth) {
						this.data.isWxAuth = true;
						wx.navigateTo({
							url: '/pages/wxAuth/wxAuth',
						});
					}
				}
			},
		});
	}
};