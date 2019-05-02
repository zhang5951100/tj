// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0,
    groupHead: {
      nickname: 'izuul',
      img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
      weixin: '18525391110',
      phone: '18525391110'
    },
    imgList: [],
    // cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }],
  },
  // 增加数量
  addCount(e) {
    // const index = e.currentTarget.dataset.index;
    this.data.num++;
    this.setData({
      num: this.data.num
    });
  },
  // 减少数量
  minusCount(e) {
    if (this.data.num > 0) {
      this.data.num--;
      this.setData({
        num: this.data.num
      });
    }
  },

  /**
   * 一键复制
   */
  copy: function(e) {
    var that = this;
    wx.setClipboardData({
      data: that.data.groupHead.weixin,
      success: function(res) {
        wx.showToast({
          title: '复制成功',
        });
      }
    });
  },

  call: function(e) {
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.groupHead.phone,
    })
  },
  ViewImage(e) {
    console.log(e.currentTarget.dataset.url)
    this.data.imgList.push(e.currentTarget.dataset.url)
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },

  hideModal(e) {
    this.setData({
      modalName: null
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.id)
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