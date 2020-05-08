// pages/detail/detail.js
var _postsList = require('../../utils/discussion.js');

var _topBarList = [
  "课件", "预习反馈", "讨论区", "公告"
]

var _annList = [
  {
    title: "上课地点变动",
    content: "同学们注意，本节课将于新二304上课。",
    time: "8小时前",
    read: "20人已读"
  },
  {
    title: "作业上交时间",
    content: "作业将于本周五上交。",
    time: "20小时前",
    read: "45人已读"
  },
]

var _stickyPostList = [
  "发帖规则，人人须知",
  "关于如何正确的使用一元二次方程"
]

var _extraHidden = [true, true, true, true, true]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cName: null,
    topBarList: _topBarList,
    // tab切换
    activeIndex: 0,
    // swiper切换
    annList: _annList,
    collected: false,
    stickyPostList: _stickyPostList,
    postsList: _postsList.postslist,
    loadHidden: true,
    extraHidden: _extraHidden,
    publishHidden:true
  },

  /**
   * 点击获取对应分类的数据
   */
  changeTab: function (event) {
    console.log(event)
    this.setData({
      activeIndex: event.currentTarget.dataset.index,
    })
  },

  /**
   * 用户滑动swiper
   */
  bindChange: function (event) {
    console.log(event)
    this.setData({
      activeIndex: event.detail.current
    });
  },

  /**
   * 点击弹出发布框
   */
  add:function(){
    this.setData({
      publishHidden: !this.data.publishHidden
    })
  },

  /**
   * 点击查看已发布的预习测验
   */
  previewTitles:function(){
    wx.navigateTo({
      url: './preview/previewTitles/previewTitles',
    })
  },

  /**
   * 收藏
   */
  watchForm:function(e){
    wx.navigateTo({
      url: '/pages/myTeaCourse/preview/report/report',
    })
  },

  /**
   * 收藏
   */
  collected:function(){
    this.setData({
      collected: !this.data.collected
    })
  },

  /**
   * 点击进入课件详情
   */
  getIntoKejian:function(e){
    wx.navigateTo({
      url: '/pages/myTeaCourse/courseware/courseware',
    })
  },

  /**
   * 点击展开···
   */
  extraTap:function(e){
    console.log(e)
    var indexTap = e.currentTarget.dataset.tap
    this.data.extraHidden[indexTap] = !this.data.extraHidden[indexTap];

    this.setData({
      extraHidden: this.data.extraHidden
    })
  },

  /**
   * 点击进入帖子详情
   */
  discussionTap:function(e){
    console.log(e)
    var discussionId = e.currentTarget.dataset.discussionId
    wx.navigateTo({
      url: './discussion/discussion?cName=' + this.data.cName + '&discussionId=' + discussionId,
    })
  },

  /**
   * 点击添加帖子
   */
  addPost: function (e) {
    wx.navigateTo({
      url: './discussion/addPost/addPost',
    })
  },

  /**
   * 滑动底部加载
   */
  lower: function () {
    console.log('滑动底部加载', new Date());
  },

  /**
   * 点击公告卡片跳转
   */
  annCardTap: function (e) {
    console.log(e)
    var tap = e.currentTarget.dataset.tap
    var time = this.data.annList[tap].time
    var content = this.data.annList[tap].content
    wx.navigateTo({
      url: '/pages/myTeaCourse/announce/announce?time=' + time + "&content=" + content,
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.postsList)
    var cName = options.cName
    this.setData({
      cName: cName
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