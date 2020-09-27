//index.js
//获取应用实例
const app = getApp()
var utils = require('../../utils/util.js');

Page({
  data: {
    imgList: [
      '/image/ad1.jpg',
      '/image/ad2.jpg',
      '/image/ad3.jpg',
      '/image/ad4.jpg',
      '/image/ad5.jpg',
      '/image/ad6.jpg',
      '/image/ad7.jpg'
    ],
    navList: [{
        icon: '/image/nav-icon/jingdian.png',
        events: 'goToBangDan',
        text: '经典必听'
      },
      {
        icon: '/image/nav-icon/meiri.png',
        events: 'goToBangDan',
        text: '每日听单'
      },
      {
        icon: '/image/nav-icon/qinggan.png',
        events: 'goToBangDan',
        text: '情感电台'
      },
      {
        icon: '/image/nav-icon/zhumian.png',
        events: 'goToBangDan',
        text: '助眠解压'
      },
      {
        icon: '/image/nav-icon/zhibo.png',
        events: 'goToBangDan',
        text: '直播交友'
      },
    ],
    swiperCurrent: 0,
  },

  /**
   * 生命周期函数 —— 监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var url = 'https://mobile.ximalaya.com/mobile/discovery/v3/recommend/hotAndGuess?code=43_310000_3100&device=android&version=5.4.45';

    // 调用自己封装的工具函数，在utils中
    utils.myRequest({
      url: url,
      methods: 'GET',
      success: function(result){
        that.setData({
          showitem: true,
          guess: result.data.paidArea.list,
          xiaoshuocontent: result.data.hotRecommends.list[0].list,
          xiangshengcontent: result.data.hotRecommends.list[2].list,
          lishicontent: result.data.hotRecommends.list[3].list
        })
      },
      fail: function() {
        that.setData({
          showitem: false
        })
      }
    });
  },
  // 轮播图改变事件
  swiperChange: function(e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  // 宫格导航改变事件
  goToBangDan: function() {
    wx.navigateTo({
      url: '/pages/index/bangdan/bangdan',
    })
  },
  // 猜你喜欢改变事件
  gotoDetails(e) {
    var url = e.currentTarget.dataset.coverimg;
    var title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: '/pages/details/details?url=' + url + '&title=' + title,
    })
  }
})
