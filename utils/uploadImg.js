// str1、str2：that.data里的变量名，ulrs、imgs最后分别赋值给该变量，nubStr：选择图片的数量的变量名，toString：将上传结束的图片路径数组转为字符串（一般用于只上传一张图片的场景，如上传头像）
module.exports = function select(that, str1, str2, nubStr, toString) {
	// FilePaths：需要上传的图片数组，i：当前要上传的图片索引
	var uploadImg = (that, str1, str2, urls, imgs, FilePaths, i, toString) => {
		// 记录上传失败的图片
		var fails = ''

		wx.showLoading({
			title: '上传中...',
			icon: 'none',
		});

		wx.uploadFile({
			url: this.data.url + '/Api/User/UploadImg',
			name: 'message',
			filePath: FilePaths[i],
			success: res => {
				// 返回字符串，解析一下
				var data = JSON.parse(res.data);

				// 将对应的路径保存下来
				urls[i] = data.url;
				imgs[i] = data.photo;

				// 由于是异步上传，所以第i+1张图上传结束不代表全部上传结束，因此只要满足以下条件的情况都需要判断一下
				if (urls.length == FilePaths.length) {

					// 假设全部上传结束
					var done = true;
					for (var j = 0; j < FilePaths.length; j++) {

						// 判断假设是否正确
						if (!urls[j]) done = false;
					};

					// 如果全部上传结束
					if (done) {
						var data = {};
						if (toString) {

							// 将上传结束的图片路径数组转为字符串（一般用于只上传一张图片的场景，如上传头像）
							data[str1] = urls[0];
							data[str2] = imgs[0];

						} else {
							data[str1] = that.data[str1].concat(urls);
							data[str2] = that.data[str2].concat(imgs);
						}
						that.setData(data);

						// 如果存在上传失败的图片，给出提示
						if (fails.length != 0) {
							wx.showModal({
								title: '温馨提示',
								content: fails.substring(0, fails.length - 1) + '张图上传失败，请重新上传',
								showCancel: false,
							});
						}

						wx.hideLoading();
					}
				}
			},
			fail: e => {
				// 失败也要赋值，以防止部分图片上传失败就不给that赋值的情况
				urls[i] = 1
				imgs[i] = 1

				// 记录上传失败的图片索引
				fails += '第' + (parseInt(i) + 1) + ','
			},
		});
	};

	// ulrs：储存上传结束的图片路径，imgs：储存用于提交给后台的图片路径
	var urls = [];
	var imgs = [];

	// 当前可上传的图片数量，最大上传数量减去当前已上传数量
	var count = that.data[nubStr] - that.data[str1].length;

	// 如果toString为true，则count固定为1
	if (toString) count = 1;

	wx.chooseImage({
		count: count,
		sizeType: ['original', 'compressed'],
		sourceType: ['album'],
		success: res => {
			for (var i = 0; i < res.tempFilePaths.length; i++) {
				// 异步上传图片
				uploadImg(that, str1, str2, urls, imgs, res.tempFilePaths, i, toString);
			};
		},
	});
};