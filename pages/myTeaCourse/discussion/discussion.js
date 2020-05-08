// pages/myTeaCourse/discussion/discussion.js
var _postsList = require("../../../utils/discussion.js")
var _extraHidden = [true, true, true, true, true]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cName: "",
    postsList: _postsList.postslist,
    extraHidden: _extraHidden,
    dId: 0
  },

  /**
   * 点击展开···
   */
  extraTap: function (e) {
    console.log(e)
    var indexTap = e.currentTarget.dataset.tap
    this.data.extraHidden[indexTap] = !this.data.extraHidden[indexTap];

    this.setData({
      extraHidden: this.data.extraHidden
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.postsList)
    var cName = options.cName
    this.setData({
      dId: options.discussionId
    })

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