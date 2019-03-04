module.exports = function ajax(obj) {
	var request = (obj) => {
		if (!obj.loginBefore) this.data.request_number++;
		if (this.data.request_number == 1) {
			if (!obj.loading || (obj.loading && !obj.loading.close)) {
				this.data.loading = true;
				wx.showLoading({
					title: obj.loading && obj.loading.title ? obj.loading.title : '加载中',
				});
			}
		}
		wx.request({
			url: this.data.url + obj.api,
			data: obj.data,
			method: obj.method ? obj.method : 'POST',
			header: obj.header,
			success: res => {
				if (res.data.status == 1 || typeof res.data.status == 'undefined') {
					if (obj.success) obj.success(res.data);
				} else if (res.data.status == 99999) {
					wx.navigateTo({
						url: '/pages/setPhone/setPhone',
					});
				} else {
					if (obj.success_secondary) {
						obj.success_secondary(res.data);
					} else {
						this.toast(res.data.msg ? res.data.msg : res.data.err);
					}
				}
			},
			fail: e => {
				if (obj.fail) {
					obj.fail(e);
				} else {
					this.toast(e.data.msg ? e.data.msg : '请求超时！');
				}
			},
			complete: e => {
				if (!obj.loginBefore) this.data.request_number--;
				if (this.data.request_number == 0 && this.data.loading) {
					this.data.loading = false;
					wx.hideLoading();
				}
			},
		});
	};
	obj.header = { 'Content-Type': 'application/x-www-form-urlencoded' };
	if (obj.loginBefore) {
		// 未登录就能执行的请求
		request(obj);
	} else {
		// 需要等待登录的请求
		var fn = () => {
			if (this.data.uid) {
				// 默认参数
				if (!obj.data) obj.data = {};
				obj.data.uid = this.data.uid;
				request(obj);
			} else {
				setTimeout(fn, 50);
			}
		};
		fn();
	}
};