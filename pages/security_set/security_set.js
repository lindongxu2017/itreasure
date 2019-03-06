// pages/security_set/security_set.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pswdset: false,
    phoneset: true,
    emailset: false,
    popupVisible1: false,
    popupVisible2: false,
    popupVisible3: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  openPopup: function (e) {
    var type = e.currentTarget.dataset.type
    switch (parseInt(type)) {
      case 1:
        this.setData({ popupVisible1: !this.data.popupVisible1 })
        break
      case 2:
        this.setData({ popupVisible2: !this.data.popupVisible2 })
        break
      case 3:
        this.setData({ popupVisible3: !this.data.popupVisible3 })
        break
    }
  },

  getcode: function () {
    console.log(111111)
  }

})