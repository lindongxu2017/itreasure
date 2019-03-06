// pages/home_page/home_page.js
Page({

  // 页面的初始数据
  data: {
    tabActive: 0,
    tablist: [{ name: '在学' }, { name: '收藏' }, { name: '证书' }, { name: '积分' }, { name: '订单' }],
    noData: false,
    list: []
  },

  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    this.getlist()
  },

  // 生命周期函数--监听页面显示
  onShow: function () {

  },

  // 页面上拉触底事件的处理函数
  onReachBottom: function () {
    this.getlist()
  },

  switchTab: function (e) {
    let index = e.currentTarget.dataset.index
    this.setData({tabActive: index})
  },

  getlist: function () {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(() => {
      wx.hideLoading()
    }, 1000)
    switch(this.data.tabActive) {
      case 0:
        break
      case 1:
        break
      case 2:
        break
      case 3:
        break
      case 4:
        break
    }
  },

  goPage: function (e) {
    var url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: url
    })
  }

})