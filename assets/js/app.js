const vm = new Vue({
  el: '#app',
  data() {
    return {
      activeIndex: 0,
      navList: [],
      videoList: []
    }
  },
  methods: {
    changeNav(index) {
      this.activeIndex = index
      this.getVideoListByNavId()
    },
    async initNavList() {
      const { data } = await axios({
        method: 'GET',
        url: 'https:///www.escook.cn/channels'
      })
      this.navList = data
    },
    async getVideoListByNavId(navId) {
      const id = navId || this.navList[this.activeIndex].id
      const { data } = await axios({
        method: 'GET',
        url: 'https:///www.escook.cn/videos',
        params: {
          channel_id: id
        }
      })
      this.videoList = data
    }
  },
  created() {
    this.initNavList()
    this.getVideoListByNavId(1)
  },
})