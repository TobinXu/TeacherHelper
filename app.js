//app.js


App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    this.authorize(); // 直接授权登录options.query

  },

  authorize: function (share) {
    let self = this;
    share = share || {};
    wx.login({
      success: function (res) {
        wx.getUserInfo({
          success: function (resp) {
            Request.post("/api/xcxWxLogin", {
              code: res.code,
              encryptedData: resp.encryptedData,
              iv: resp.iv
            }).then(({
              data: response
            }) => {
              if (response.code !== 0) {
                wx.showToast({
                  title: response.msg,
                  icon: "none"
                })
              } else {
                //  保存sessionid ，每次请求都会在拦截器中自动添加到header中
                wx.setStorageSync("UserSessionId", response.data.sessionId);
                self.globalData.sessionid = response.data.sessionId;
                //todo 后续逻辑代码
              }
            });
          },
          fail: function (err) {
            //重点，如果获取失败直接跳转
            let timer = setInterval(() => {
              let pages = getCurrentPages();
              if (pages.length > 0) {
                clearInterval(timer);
                let currentPage = pages[pages.length - 1];
                if (currentPage.route === "pages/user/userbind/userbind") {
                  return true;
                }
                try {
                  wx.setStorageSync("SYS_PREVIOUSPAGE", currentPage);
                  setTimeout(() => {
                    wx.redirectTo({
                      url: "/pages/course/course"
                    });
                  }, 300);
                } catch (e) {
                  wx.redirectTo({
                    url: "/pages/course/course"
                  });
                }
              }
            }, 200);
          }
        });
      }
    });

  },
  //登录
  userLogin: function (callback) { //callback是用户授权登录后的一些回调函数
    var that = this;
    //获取登录code
    wx.login({ // 小程序登录接口，成功后拿到code 到后台换取 openId, sessionKey, unionId
      success: function (res) {
        if (res.code) {
          var codes = res.code;
          //获取用户信息  // 因为 我们程序 要收集用户头像，昵称等，有一套用户体系
          wx.getSetting({ //先调用getSetting 拿到用户已经授权的一些列表，如果已经授权 再后面代码 就无需再wx.authorize 授权
            success: res => {
              if (res.authSetting['scope.userInfo']) { // 用户信息已经授权过，
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                callback ? (that.getUserInfoHandle(codes, callback)) : (that.getUserInfoHandle(codes)); //getUserInfoHandle 方法是处理用户信息，提取出来
              } else {
                wx.authorize({


                  // 如果在那用户授权信息的时候 没有拿到，则调用wx.authorize 授权，拿用户userInfo
                  scope: 'scope.userInfo',
                  success: res => {
                    //用户已经同意小程序授权
                    callback ? (that.getUserInfoHandle(codes, callback)) : (that.getUserInfoHandle(codes)); //同上
                  },
                  fail: (e) => { //如果用户点击拒绝授权，则调用wx.openSetting 调起客户端小程序设置界面，返回用户设置的操作结果。在这边做了个封装
                    that.openSetting()
                  }
                })
              }
            }
          });
        } else {
          that.userLogin(); //登录失败的话 ，重新调用 登录方法
          return false;
        }
      }
    })
  },

  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null,
    token: ''

  },

  //openSetting
  openSetting: function () {
    var that = this;
    wx.showModal({ // modal 提示用户
      title: '提示',
      content: '小程序需要获取用户信息权限，点击确认。前往设置或退出程序？',
      showCancel: false,
      success: function (res) {
        wx.openSetting({ // 调起客户端小程序设置界面
          success: (res) => {
            var userInfoFlag = res.authSetting['scope.userInfo']; //拿到用户操作结果
            if (!userInfoFlag) { // 如果用户没有点开同意用户授权 ，则再调用openSetting 弹框提示，总之 同意了 才会关闭modal 进入我们小程序
              that.openSetting();
            } else {
              that.userLogin(); // 用户成功设置授权后，再调用登录方法 ，给到后台 拿用户信息 等操作
            }
          }
        })
      }
    })
  },

  //数据交互
  request: function (opts, loginCb) {
    let {
      url,
      data,
      token,
      callback,
      type,
      failCb
    } = {
      ...this.setConfig.requestConfig,
        ...opts
      }
    var that = this;
    //发起网络请求
    wx.request({
      url: url,
      data: data,
      method: type,
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'token': token || that.globalData.token //每次请求都带token,进行用户认证
      },
      success: function (res) {
        //根据全局做处理
        var status = '' + res.statusCode;
        var firstStatus = status[0];
        switch (firstStatus) {
          case '2':
          case '3':
            if (res.data.err_code) {
              wx.hideLoading();
              wx.showToast({
                title: res.data.err_msg,
                icon: 'none',
                mask: true,
                duration: 1500
              })
              if (res.data.err_code == '1') { //没有登陆的错误码 重新登陆
                that.userLogin();
              }
              return false;
            }
            if (url.indexOf('/login') > -1) { //登陆接口 返回token，存在全局globalData中
              if (res.data.result) {
                that.globalData.token = res.data.result.token;
              }
            }
            callback(res); // 成功后大回调函数
            break;
          case '4':
            wx.showToast({
              title: '客户端错哦~',
              mask: true,
              icon: 'none',
              duration: 1500
            })
            break;
          case '5':
            wx.showToast({
              title: '服务端错误哦~',
              mask: true,
              icon: 'none',
              duration: 1500
            })
            break;
          default:
            break;
        }
      },
      fail: function (e) {
        wx.showToast({
          title: '当前网络状态不佳，请稍后再试',
          mask: true,
          icon: 'none',
          duration: 1500
        })
        failCb && failCb(e);
      },
      api: {

      }
    })
  }
})