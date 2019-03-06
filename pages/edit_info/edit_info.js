// pages/edit_info/edit_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {},
    imgurl: '/images/demo.jpg',
    sex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  
  uploadImg: function () {
    const self = this
    wx.chooseImage({
      count: 1,
      success: function(res) {
        const tempFilePaths = res.tempFilePaths
        self.setData({
          imgurl: tempFilePaths
        })
      }
    })
  },

  change: function (e) {
    var type = e.currentTarget.dataset.type
    if (type == 'man') {
      this.setData({ sex: 0 })
    } else {
      this.setData({ sex: 1 })
    }
  }
})