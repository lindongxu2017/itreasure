// 登录
module.exports = function login() {
	if (this.data.login_request) return;
	this.data.login_request = true;
	wx.login({
		success: res => {
			this.ajax({
				api: '/Api/Login/getsessionkey',
				loginBefore: true,
				data: { code: res.code },
				success: res => {
					this.ajax({
						api: '/Api/Login/authlogin',
						loginBefore: true,
						data: {
							SessionId: res.session_key,
							openid: res.openid,
						},
						success: res => {
							this.data.login_request = false;
							if (res.arr.ID) {
								this.data.uid = res.arr.ID;
							} else {
								this.login();
							}
						},
						fail: e => {
							this.data.login_request = false;
							this.login();
						},
					});
				},
				fail: e => {
					this.data.login_request = false;
					this.login();
				},
			});
		},
	});
};