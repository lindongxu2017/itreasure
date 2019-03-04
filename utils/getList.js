// obj.listName: 列表对象key(data: 数据，page: 页数，more: 更多数据，request: 请求状态)
module.exports = function getList(obj) {
	var list = obj.that.data[obj.listName];
	var page = list.page;

	if (list.request) return;
	list.request = true;
	var dataObj = {};
	dataObj[obj.listName] = list;
	obj.that.setData(dataObj);

	// 不是上拉加载就初始化
	if (!obj.isReachBottom) {
		list.more = true;
		page = 1;
	}

	// 默认参数
	if (!obj.data) obj.data = {};
	obj.data.page = page;

	// loading不显示
	var loading = {
		close: true
	};

	this.ajax({
		api: obj.api,
		method: obj.method,
		data: obj.data,
		loading: loading,
		success: res => {
			var data = res.data;
			if (!data) data = [];

			if (page == 1) list.data = [];
			if (data.length > 0) {
				for (var i = 0; i < data.length; i++) {
					list.data.push(data[i]);
				};
				list.page = ++page;
			} else {
				list.more = false;
			}

			list.request = false;
			dataObj[obj.listName] = list;
			obj.that.setData(dataObj);

			// 成功回调
			if (obj.success) obj.success(res);
		},
		success_secondary: obj.success_secondary,
		fail: e => {
			list.request = false;
			dataObj[obj.listName] = list;
			obj.that.setData(dataObj);
		},
	});
};