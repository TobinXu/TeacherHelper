// pages/notice/notice.js

/**
 * 通知列表数据
 */
var Notices = [
  {
    picUrl:"../../image/announce.png",
    courseName:"概率论",
    content:"同学们注意，本节课由于天气原因暂停授课",
    time:"2018.9.10"
  },
  {
    picUrl:"../../image/announce.png",
    courseName:"线性代数",
    content:"请大家在下次上课的时候带好纸笔，准备考试,加油。",
    time:"2018.9.22"
  },
  {
    picUrl:"../../image/announce.png",
    courseName:"合同法",
    content:"同学们注意，本节课将在新二301上课",
    time:"2018.8.1"
  },
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    notices: Notices
  },

  /**
   * 跳转到私信页面
   */
  privateNews:function (){
    wx.navigateTo({
      url: './privateNews/privateNews',
    })
  },

  /**
   * 跳转到通知页面
   */
  noticeDetail:function (e){
    console.log(e)
    var courseId = e.currentTarget.dataset.courseId
    // 跳转到通知页面 并 传递自定义的数据 courseId 的值
    wx.navigateTo({
      url: './noticeDetail/noticeDetail?courseId=' + courseId,
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