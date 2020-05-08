// pages/myTeaCourse/preview/previewTitles/previewTitles.js
var PreviewTitles = require("../../../../utils/previewTitles.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    previewTitles: PreviewTitles.titles
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 点击预习测验跳转
   */
  preTap: function (e) {
    console.log(e)
    var tap = e.currentTarget.dataset.tap
    wx.navigateTo({
      url: './preTiDetial/preTiDetial?count=' + tap,
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