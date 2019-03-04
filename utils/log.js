// 打印
module.exports = function log() {
	var arr = arguments;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] && arr[i] instanceof Object && !(arr[i] instanceof Function)) {
			arr[i] = JSON.parse(JSON.stringify(arr[i]));
		}
	};
	console.log.apply(null, arr);
};