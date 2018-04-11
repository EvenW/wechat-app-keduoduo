// pages/kd_detail.js
//获取应用实例  
var app = getApp();
//引用模板的js文件之一
var common =require("../common/common.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storeName: "捞王锅物料理",
    navbar: common.navbar,
    currentTab: 0,//三个文件这里依次为0，1，2，其他地方一样
    count: {
      zfCount:45,
      llCount: 15473,
      drawed:167,
      saled: 67
    },
    location:{
      address:'苏州市吴中区宝带东路416号',
      distance:'距您1154.6公里路程约3.5小时'
    },
    pIntro:{
      pTitle:'胡椒猪肚鸡 爆浆手打虾丸 煲仔饭小 手打鲜虾滑 湖南炸豆皮 精品肥牛 马蹄竹蔗水 绣花豆腐 芝士虾丸 油条',
      picInstr1:'图文混编一',
      href1:'img/171135v9zzfw7zo8uapwyr.jpg',
      picInstr2:'图文混编二',
      href2:'img/171204xl846rd6qjasl21r.jpg'
    },
    pComment:{
      cllcount:8873,
      czfcount:349,
      cdate:'02-05 18:51',
      zancount:159
    },
    pDiscount:{
      avatar:'img/avatar.jpeg',
      uname:'TOM',
      catagory:'美食',
      area:'吴中区 东山镇',
      content:'同城小程序演示',
      image:'img/86ccea448a12d88d9d530717f2ef75f4_qrcode.png',
      localStore:'海底捞火锅',
      localAddress:'苏州市吴中区通达路2699号'
    },
    pcommentdetails:[
        {
          cname:'放假出发',
          ccontent: '不错哦',
          avatar: '../img/avatar/29-020632_476.jpg',
          cdate:'2018-02-03',
          pimage:'../img/comment-upload/timg (1).jpeg'
        },
        {
          cname: '只如初见',
          ccontent: '可以',
          avatar: '../img/avatar/20150129144530_CiJ5Z.jpeg',
          cdate: '2018-02-03',
          pimage: '../img/comment-upload/timg (2).jpeg'
        },
        {
          cname: '星星',
          ccontent: '去尝尝',
          avatar: '../img/avatar/20150404H3338_N8Wir.jpeg',
          cdate: '2018-02-03',
          pimage: '../img/comment-upload/timg (3).jpeg'
        },
        {
          cname: '享受生活-乐活',
          ccontent: '你好呀',
          avatar: '../img/avatar/20160401215443_tYJne.jpeg',
          cdate: '2018-02-03',
          pimage: '../img/comment-upload/timg.jpeg'
        }
      ],
    /** 
      * 页面配置 
      */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0, 
  },

  onLoad: function () {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
}) 