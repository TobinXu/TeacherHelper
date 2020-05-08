// pages/myTeaCourse/courseware/courseware.js

var _pptList = [
  "https://wx2.sinaimg.cn/mw690/be896171ly1fw00jbvg40j20i80abtai.jpg",
  "https://wx3.sinaimg.cn/mw690/be896171ly1fw00jbx6xzj20i70aadhq.jpg",
  "https://wx3.sinaimg.cn/mw690/be896171ly1fw00jbtj4fj20i90aata5.jpg",
  "https://wx3.sinaimg.cn/mw690/be896171ly1fw00jbtj4fj20i90aata5.jpg",
  "https://wx2.sinaimg.cn/mw690/be896171ly1fw00jccm31j20ib0a8wf9.jpg",
  "https://wx1.sinaimg.cn/mw690/be896171ly1fw00jbux42j20ib0a9dha.jpg"
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    close: true,
    pptList: _pptList
  },

  /**
   * 点击图片放大
   */
  imgTap:function(e){

  },

  /**
   * 侧边栏状态
   */
  slideOpen: function () {
    this.setData({
      close: !this.data.close
    })
  },

  /**
   * 开启同步
   */
  synchronous:function(){
    
  },

  /**
   * 签到
   */
  signTap: function () {
    wx.navigateTo({
      url: './sign/sign',
    })
  },

  /**
   * 随机点名
   */
  callNameTap: function () {
    wx.navigateTo({
      url: './callName/callName',
    })
  },
  /**
   * 推送问题
   */
  editTap: function () {
    wx.navigateTo({
      url: './sendProb/sendProb',
    })
  },

  /**
   * 发起投票
   */
  voteTap: function () {
    wx.navigateTo({
      url: './vote/vote',
    })
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