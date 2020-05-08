//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '编辑个人资料',
    userInfo: {},
    pageInfo: {
      'title': '我'
    }
  },
  onLoad: function () {
    var that = this

    wx.getStorage({
      key: 'loginInfo',
      success: function (res) {
        var token = res.data.token
        var uid = res.data.uid
        that.fetchData(token, uid)
      },
      fail: function () {
      },
      complete: function () {
      }
    })
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

  },

  fetchData: function (token, uid) {
    // 发起一个网络请求
    wx.request({
      url: app.api.baseUrl + 'me/index',
      data: {
        uid: uid
      },
      header: {
        'Content-Type': 'application/json',
        'appId': app.api.appId,
        'appSecret': app.api.appSecret,
        'token': token
      },
      success: function (res) {
        console.log(res.data)
      },
      fail: function () {
        console.log()
      },
      complete: function () {
        console.log('request complete')
      }
    })
  }
})