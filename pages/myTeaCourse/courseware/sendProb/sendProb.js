// pages/myTeaCourse/courseware/sendProb/sendProb.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
        name: 'choice',
        value: '选择题'
      },
      {
        name: 'if',
        value: '判断题',
        checked: 'true'
      },
      {
        name: 'answer',
        value: '简答题'
      },
    ],
    value: ""
  },


  checkboxChange: function(e) {
    this.setData({
      value: e.detail.value
    })
    console.log(this.data.value)
  },


  finish: function () {
    var value = this.data.value
    if (value == '选择题') {
      wx.navigateTo({
        url: '/pages/myTeaCourse/courseware/sendProb/choice-question/choice-question',
      })
    } else if (value == '判断题') {
      wx.navigateTo({
        url: '/pages/myTeaCourse/courseware/sendProb/trueflase-question/trueflase-question',
      })
    } else if (value == '简答题'){
      wx.navigateTo({
        url: '/pages/myTeaCourse/courseware/sendProb/fill-question/fill-question',
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