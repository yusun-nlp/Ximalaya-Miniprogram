const app = getApp();
var utils = require('../../../utils/util.js')
var result; // 定义一个全局变量保存从接口获取到的数据，以免重复请求接口

Page({
  /**
   * 页面的初始数据
   */
  data: {
    showCover: false,
    currentTab: 0,
    navTitle: [
      {title: '有声小说'},
      {title: '新闻资讯'},
      {title: '相声小品'},
      {title: '人文历史'},
      {title: '轶事杂谈'},
      {title: '艺术导读'},
      {title: '助眠解压'},
      {title: '悬疑惊悚'},
    ]
  },

  /**
   * 生命周期函数 —— 监听页面加载
   */
  onLoad: function(options){
    var that = this;
    var url = 'http://mobile.ximalaya.com/mobile/discovery/v3/recommend/hotAndGuess?code=43_310000_3100&device=android&version=5.4.45'
    utils.myRequest({
      url: url,
      methods: 'GET',
      success: function(res){
        console.log(res);
        result = res;
        that.setData({
          list: res.data.hotRecommends.list[0].list
        })
      },
      fail: function(){}
    })
  },

  handleClick(e){
    let currentTab = e.currentTarget.dataset.index;
    //实现每一个tab切换对应内容的原理
    this.setData({
      currentTab,
      list: result.data.hotRecommends.list[currentTab].list
    })
  },

  pullDown:function(){
    var that = this;
    that.setData({
      showCover: true
    })
  },

  closeCover:function(){
    var that = this;
    that.setData({
      showCover: false
    })
  },

  coverCheck:function(e){
    let currentTab = e.currentTarget.dataset.index;
    this.setData({
      currentTab,
      list: result.data.hotRecommends.list[currentTab].list
    })
    this.closeCover()
  }
})
