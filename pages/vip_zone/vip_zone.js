// pages/vip_zone/vip_zone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    viplist: [{}, {}, {}],
    current: 1,
    height: 350
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let query = wx.createSelectorQuery()
    const self = this
    query.select('.height').boundingClientRect(res => {
      self.setData({ height: res.height })
      // console.log(res)
    }).exec()
  },

  switchView(e) {
    this.setData({
      current: e.detail.current
    })
  }

})