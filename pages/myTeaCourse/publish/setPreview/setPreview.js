// pages/myTeaCourse/publish/setPreview/setPreview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cName:null
  },

  /**
   * 选择题
   */
  choice: function () {
    wx.navigateTo({
      url: './choice/choice',
    })
  },

  /**
   * 判断题
   */
  judge: function () {
    wx.navigateTo({
      url: './judge/judge',
    })
  },

  /**
   * 简答题
   */
  shortAnswer: function () {
    wx.navigateTo({
      url: './shortAnswer/shortAnswer',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var cName = options.cName
    wx.setNavigationBarTitle({
      title: cName
    })
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

  }
})