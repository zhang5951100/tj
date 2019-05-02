// pages/group/group.js

const app = getApp();

Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    groupBuyInfos: [{
        id: '1',
        groupStatus: true,
        description: '这是一个很好看的花',
        img: 'https://ws1.sinaimg.cn/large/006tNc79ly1g2m99o5sjwj31hc0qon7q.jpg',
        groupHeadName: '小天哈哈',
        groupHeadPic: 'https://ws3.sinaimg.cn/large/006tNc79ly1g2f89iecscj30ce0cdjvz.jpg',
        count: 10,
        price: 8880
      },
      {
        id: '2',
        groupStatus: false,
        description: '描述',
        img: 'https://ws3.sinaimg.cn/large/006tNc79ly1g2m9cn7ifmj31400u0u0x.jpg',
        groupHeadName: '小天嘻嘻',
        groupHeadPic: 'https://placekitten.com/200/200',
        count: 18,
        price: 55000
      },
      {
        id: '3',
        groupStatus: false,
        description: '花',
        img: 'https://ws3.sinaimg.cn/large/006tNc79ly1g2f89iecscj30ce0cdjvz.jpg',
        groupHeadName: '小天呵呵',
        groupHeadPic: 'https://ws3.sinaimg.cn/large/006tNc79ly1g2f89iecscj30ce0cdjvz.jpg',
        count: 888,
        price: 60000
      }
    ]
  },

  isCard(e) {
    this.setData({
      isCard: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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