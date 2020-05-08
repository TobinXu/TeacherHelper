// pages/estCourse/estCourse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled: false,
    loading: false,
    cName: '',
    cClass: '',
    tName: ''
  },

  /**
   * 输入课程名称
   */
  cNameInput: function(e) {
    this.setData({
      cName: e.detail.value
    })
  },

  /**
   * 输入班级名称
   */
  cClassInput: function(e) {
    this.setData({
      cClass: e.detail.value
    })
  },

  /**
   * 输入教师姓名
   */
  tNameInput: function(e) {
    this.setData({
      tName: e.detail.value
    })
  },

  /**
   * 创建课程完成
   */
  finish: function() {
    var cName = this.data.cName
    var cClass = this.data.cClass
    var tName = this.data.tName

    if(cName == '' || cClass == '' || tName == ''){
      wx.showModal({
        title: '请输入完整信息',
        content: '',
      })
    }else{
      wx.navigateTo({
        url: './estCFinish/estCFinish?cName=' + cName + '&cClass=' + cClass + '&tName=' + tName,
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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