// inc/orderlist/orderlist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    list: [{ status: 'unpay' }, { status: 'assemble'}, {status: 'cancel'}, {status: 'paid'}, {status: 'refund'}, {status: 'refunded'}]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    delItem: function (e) {
      var self = this
      var index = e.currentTarget.dataset.index
      var arr = []
      arr = arr.concat(this.data.list)
      wx.showModal({
        title: '提示',
        content: '是否删除该订单',
        success(res) {
          if (res.confirm) {
            arr.splice(index, 1)
            self.setData({ list: arr })
          } else if (res.cancel) {
            // console.log('用户点击取消')
          }
        }
      })
      
    }
  }
})
