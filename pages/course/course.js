// pages/course/course.js
var Course = require('../../utils/course.js')
var Banner = [{
  "pic_url": "/image/banner.jpg",
}, {
  "pic_url": "/image/banner.jpg",
}, {
  "pic_url": "/image/banner.jpg",
}, {
  "pic_url": "/image/banner.jpg",
}, {
  "pic_url": "/image/banner.jpg",
}]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0,
    course: [],
    banner: Banner
  },

  /**
   * 点击获取对应分类的数据
   */
  classTap: function(e) {
    console.log(e)
    var that = this
    var index = e.currentTarget.dataset.index
    if (index == 0) {
      that.setData({
        activeIndex: index,
        course: Course.teaCourse
      })
    } else if (index == 1) {
      that.setData({
        activeIndex: index,
        course: Course.stuCourse
      })
    }
  },

  /**
   * 点击跳转到课程详细页面
   */
  cDetail: function(e) {
    console.log(e)
    var index = e.currentTarget.dataset.index
    var cName = this.data.course[index].cName
    var acIndex = this.data.activeIndex
    if(acIndex == 0){
      wx.navigateTo({
        url: '/pages/myTeaCourse/myTeaCourse?cName=' + cName,
      })
    }else{
      wx.navigateTo({
        url: '/pages/myLisCourse/myLisCourse?cName=' + cName,
      })
    }
      
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      course: Course.teaCourse
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})