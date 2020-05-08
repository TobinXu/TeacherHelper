// pages/myTeaCourse/preview/report/report.js

var reports = [{
    name: "张嘉",
    accuracy: 90,
    time: {
      minite: 9,
      second: 20
    }
  },
  {
    name: "程希",
    accuracy: 93,
    time: {
      minite: 9,
      second: 19
    }
  }, 
  {
    name: "谢雨婷",
    accuracy: 85,
    time: {
      minite: 8,
      second: 12
    }
  },
  {
    name: "徐强国",
    accuracy: 88,
    time: {
      minite: 7,
      second: 13
    }
  },

]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    reports: reports,
    sortHidden: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(reports)
  },

  /**
   * 是否显示sort框
   */
  sortHidden: function() {
    this.setData({
      sortHidden: !this.data.sortHidden
    })
  },

  /**
   * 按正确率排序
   */
  sortByAcc: function() {
    var reports = this.data.reports
    console.log("sortByAcc")

    for (var i = 0; i < reports.length - 1; i++) { //外层循环控制排序趟数
      for (var j = 0; j < reports.length - 1 - i; j++) { //内层循环控制每一趟排序多少次
        if (reports[j].accuracy <= reports[j + 1].accuracy) {
          var temp = reports[j];
          reports[j] = reports[j + 1];
          reports[j + 1] = temp;
        }
      }
    }
    this.setData({
      reports: reports,
      sortHidden: !this.data.sortHidden
    })
  },

  /**
   * 按时长排序
   */
  sortByTime: function() {
    var reports = this.data.reports
    console.log("sortByTime")

    for (var i = 0; i < reports.length - 1; i++) { //外层循环控制排序趟数
      for (var j = 0; j < reports.length - 1 - i; j++) { //内层循环控制每一趟排序多少次
        if (reports[j].time.minite > reports[j + 1].time.minite){
          var temp = reports[j];
          reports[j] = reports[j + 1];
          reports[j + 1] = temp;
        }else if (reports[j].time.minite == reports[j + 1].time.minite) 
          if (reports[j].time.second > reports[j + 1].time.second){
            var temp = reports[j];
            reports[j] = reports[j + 1];
            reports[j + 1] = temp;
          }
      }
    }
    this.setData({
      reports: reports,
      sortHidden: !this.data.sortHidden
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