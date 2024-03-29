// pages/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  changeItem(e){
    console.log(e);
    let index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      index
    })
  },
  swiperChange(e){
    console.log(e)
    let detail = e.detail;
    let source = detail.source;
    if (source === 'touch'){
      let index = detail.current;
      this.setData({
        index
      })
    }
  }
})