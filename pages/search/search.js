// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotData:[
      {title:"三体",icon:"icon-jiantouUp",color:"text-orange"},
      {title:"孟鹤堂",icon:"icon-jiantouUp",color:"text-red"},
      {title:"庆余年",icon:"icon-jiantouDown",color:"text-green"},
      {title:"龙王殿",icon:"icon-jiantouUp",color:"text-red"},
      {title:"儿童恐龙故事",icon:"icon-jiantouDown",color:"text-green"},
      {title:"英文听书",icon:"icon-jiantouUp",color:"text-red"},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  goBack: function(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})