Page({
  data: {
    PageCur: 'group'
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  onShareAppMessage() {
    return {
      title: '开团啦! 一起来团购吧!',
      imageUrl: '/images/share.jpg',
      path: '/pages/index/index'
    }
  },
})