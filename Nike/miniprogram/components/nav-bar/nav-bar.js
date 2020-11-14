// components/nav-bar/nav-bar.js
Component({
  /**
   * 组件的属性列表
   */
  // properties是父组件给过来的数据元
  properties: {
    title: {
      type: String, 
      value: ''
    },
    statusBarColor: {
      type: String, 
      value: '#ffffff'
    },
    navBarColor: {
      type: String, 
      value: '#ffffff'
    },
    titleColor: {
      type: String, 
      value: '#000000'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    topHeight: 0,
    statusBarStyle: '',
    navBarStyle: ''
  },

  /**
   * 组件的生命周期
   */
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      let statusBarStyle = `background-color: ${this.data.statusBarColor};
      height: ${wx.statusBarHeight}px;`
      let navBarStyle = `background-color: ${this.data.navBarColor};
      height: ${wx.navBarHeight}px;
      color: ${this.data.titleColor};`
      let topHeight = wx.statusBarHeight + wx.navBarHeight;
      this.setData({
        statusBarStyle,
        navBarStyle,
        topHeight
      })
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
