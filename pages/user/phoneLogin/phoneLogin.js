const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    height: 400
  },

  /**
   * 生命周期函数 —— 监听页面加载
   */
  onLoad: function(options){
    //获取设备信息
    var that = this;
    wx.getSystemInfo({
      success(res){
        console.log(res.windowHeight);
        that.setData({
          height: res.screenHeight
        })
      }
    })
  },

  login: function(){
    wx.showToast({
      title: '成功',
    })
  },

  //微信登录
  wechatLogin: function(){
    wx.switchTab({
      url: '/pages/user/user',
    });
  }
})