// pages/getCourse/getCourse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: null,
    // loadingHidden: true,
    // nullHidden: true,
    lodingInfo: "正在搜索",
    inputShowed: false,
  },

  /**
   * 显示输入
   */
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },

  /**
   * 隐藏输入
   */
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },

  /**
   * 清楚输入
   */
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },

  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },

  /**
   * 搜索
   */
  tapSearch: function (event) {
    if (this.data.inputVal == null || this.data.inputVal.length == 0) {
      return;
    }
    var that = this;
    this.setData({
      loadingHidden: false,
      nullHidden: true,
      lodingInfo: "正在搜索",
    })
    // wx.request({
    //   url: "https://canteen.wf-learn.cn/wx/foods",
    //   data: {
    //     foodname: that.data.inputVal,
    //   },
    //   success: function(res) {
    //     //res.data.tngou是什么
    //     console.log(res.data)

    //     // if (res.data.tngou.length == 0) {
    //     //   that.setData({
    //     //     nullHidden: false,
    //     //   })
    //     // } else {
    //     //   console.log(res.data.tngou);
    //     //   app.globalData.result = res.data.tngou
    //     wx.navigateTo({
    //       url: "/pages/result/result?id=" + event.currentTarget.id
    //     });
    //     // }
    //   },
    //   fail: function(error) {
    //     console.log(error);
    //     that.setData({
    //       lodingInfo: "搜索失败，请检查您的网络",
    //       request_fail: true,
    //     });
    //   },
    //   complete: function() {
    //     that.setData({
    //       loadingHidden: true
    //     })
    //   }
    // })
  },

  /**
   * 扫一扫
   */
  scanCode:function(){
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
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