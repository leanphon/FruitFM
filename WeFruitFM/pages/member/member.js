// pages/member/member.js

const app = getApp()

var orderTypeList = [{//waitPay
  typeId: 1, 
  counter: 1,
  title: "待付款"
}, {//waitSend
  typeId: 2,
  counter: 3,
  title: "待发货"
  }, {//sending
  typeId: 3,
  counter: 2,
  title: "已发货"
  }, {//received
  typeId: 4,
  counter: 6,
  title: "已收货"
}]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    orderTypeList: orderTypeList

  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  entryOrderDetail: function(e) {
    var typeId = e.currentTarget.dataset.typeid
    console.log(typeId);

    if (typeId != undefined || typeId != "")
    {
      wx.navigateTo({
        url: '../order/index/orderIndex?typeId=' + typeId
      })
    }
    
  },
  entryReceiveAddress: function (e) {
    wx.navigateTo({
      url: './address/index/addressIndex'
    })

  },
})