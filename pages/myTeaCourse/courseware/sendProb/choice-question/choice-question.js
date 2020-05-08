Page({
  data: {
    items: [
      { name: 'A', value: 'A:' },
      { name: 'B', value: 'B:', checked: 'true' },
      { name: 'C', value: 'C:' },
      { name: 'D', value: 'D:' },

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.getSystemInfo({
    //   success: function (res) {
    //     var clientHeight = res.windowHeight,
    //       clientWidth = res.windowWidth,
    //       rpxR = 750 / clientwidth;
    //     var calc = clientHeight * rpxR;
    //     console.log(calc)
    //     that.setData({ winHeight: calc });
    //   }
    // })
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },

  radioChange: function () {
    console.log('radio发生change事件')
  }
})