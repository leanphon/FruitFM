var app = getApp();

var orderTypeList = [{//waitPay
  typeId: 1,
  title: "待付款"
}, {//waitSend
  typeId: 2,
  title: "待发货"
}, {//sending
  typeId: 3,
  title: "已发货"
}, {//received
  typeId: 4,
  title: "已收货"
}]



Page({
  /* 页面的初始数据 */
  data: {
    cateItems: orderTypeList,
    currentTab: 1, // tab切换  
    children: 1, // 内容切换  
  },
  /* tab 切换事件 */
  swichNav: function(e) {
    var that = this;
    that.setData({
      currentTab: e.target.dataset.current,
      children: e.target.dataset.current
    })
  },
  onLoad: function(opts){
    console.log(opts.typeId);
    this.setData({ currentTab: opts.typeId });
  },

})