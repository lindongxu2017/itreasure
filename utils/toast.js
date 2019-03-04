// 提示框
module.exports = function toast(msg) {
	if (!msg) return;
	if (this.data.loading) {
		this.data.loading = false;
		wx.hideLoading();
	}
	wx.showToast({
		title: msg.toString(),
		icon: 'none',
		duration: 2000,
	});
};