<template>
   <div class="h-banner" :style="{height:itemHeight+'px'}">
    <ul id="bannerUl" :style="{width: itemWidth*(banner.data.length+1)+'px',height:itemHeight+'px',...boxStyle}" @touchstart="touchstart($event)" @touchmove="touchmove($event)" @touchend="touchend($event)">
      <li v-for="(item,index) in banner.data" :key="index" :style="{width:itemWidth+'px'}">
        <a :href="item.linkUrl">
          <img :src="item.picUrl" alt="">
        </a>
        <!-- <div style="width:200px;height:200px;margin-bottom:200px">
            {{item.title}}
        </div> -->
      </li>
      <li :key="banner.data.length" :style="{width:itemWidth+'px'}">
        <a :href="banner.data[0].linkUrl">
          <img :src="banner.data[0].picUrl" alt="">
        </a>
         <!-- <div style="width:200px;height:200px;margin-bottom:200px">
            {{item.title}}
        </div> -->
      </li>
    </ul>
    <div class="btn-list" :style="{top:itemHeight*0.8+'px'}">
      <a :key="index" v-for="(item,index) in banner.data" href="javascript:;" :class="{'select':index===displayIndex||(index==0&&displayIndex===banner.data.length)}" @click="displayIndex=index"></a>
    </div>
  </div>
</template>
<script>
export default {
    name: 'TeamTravel',
  props: {
    banner: {
      type: Object,
      default: function () {
        return {
          autoDisplayFlag: true, // 是否自动轮播
          data: [
            {
              'picUrl': 'http://gw.alicdn.com/imgextra/i2/96/O1CN01EiGkvo1Ca0Y6UsSrX_!!96-0-lubanu.jpg',
              'linkUrl': 'https://h5.m.taobao.com/',
              'title':'a'
            },
            {
              'picUrl': '//gw.alicdn.com/imgextra/i2/98/O1CN01wnOjRj1CavMBMHZlH_!!98-0-lubanu.jpg',
              'linkUrl': 'https://h5.m.taobao.com/',
              'title':'b'
            },
            {
              'picUrl': '//gw.alicdn.com/imgextra/i2/119/O1CN01KEfIYA1CkXfuwq6nv_!!119-0-lubanu.jpg',
              'linkUrl': 'https://h5.m.taobao.com/',
              'title':'c'
            },
            {
              'picUrl': '//gw.alicdn.com/imgextra/i3/18/O1CN01QcqcLg1C0HfhL9kEm_!!18-0-lubanu.jpg',
              'linkUrl': 'https://h5.m.taobao.com/',
              'title':'d'
            }
          ]
        }
      }
    }
  },
  data: function () {
    return {
      transitionDuration: '800ms', // 滑动动画时间
      autoTimer: 0, // 自动轮播定时器
      boxStyle: {
        transitionDuration: 0,
        transform: 'translate(0,0)'
      },
      itemWidth: 0, // 轮播图的宽度
      itemHeight: 0, // 轮播图的高度
      displayIndex: 0, // 当前展示的轮播图的索引
      slidePosition: 'left',
      startX: 0,
      startY: 0,
      endTime: 0,
      moveX: 0,
      moveY: 0,
      disX: 0,
      transitionendCallback: function () {
        console.log('ok')
      }
    }
  },
  watch: {
    displayIndex: function () {
      setTimeout(() => {
        if (this.displayIndex >= 0) {
          this.boxStyle = {
            transitionDuration: this.transitionDuration,
            transform: 'translate(' + (-this.displayIndex * this.itemWidth) + 'px,0)'
          }
          this.transitionendCallback = function () {
            this.boxStyle.transitionDuration = '0s'
            if (this.displayIndex >= this.banner.data.length) {
              this.boxStyle.transitionDuration = '0s'
              this.boxStyle.transform = 'translate(0,0)'
              this.displayIndex = 0
            }
            if (this.autoDisplayFlag) {
              this.autoDisplay()
            }
          }
        } else {
          this.displayIndex = 0
        }
      }, 0)
    }
  },
  created: function () {
    let that = this
    this.$nextTick(() => {
      if (this.banner.autoDisplayFlag) {
        this.autoDisplay()
      }
      this.computeWidthHeight()
      this.boxStyle = {
        transitionDuration: '0',
        transform: 'translate(' + (-this.displayIndex * this.itemWidth) + 'px,0)'
      }
      document.getElementById('bannerUl').addEventListener('transitionend', function () {
        that.transitionendCallback()
      }, false)
      window.onresize = function () {
        that.computeWidthHeight()
      }
    })
  },
  computed: {},
  mounted: function () {
  },
  methods: {
    computeWidthHeight() {
      let that = this
      this.itemWidth = window.innerWidth
      var myImg = new Image()
      myImg.src = this.banner.data[0].picUrl
      myImg.onload = function () {
        that.itemHeight = myImg.height / myImg.width * that.itemWidth
      }
    },
    /**
     * 自动轮播
     */
    autoDisplay: function () {
      if (this.banner.autoTimer) {
        clearInterval(this.autoTimer)
      }
      this.autoTimer = setInterval(() => {
        this.displayIndex++
      }, 2000)
    },
    touchstart(e) {
      clearInterval(this.autoTimer)
      e = e || event
      this.startTime = new Date().getTime()
      if (e.touches.length === 1) {
        this.startX = e.touches[0].clientX // 记录开始位置
        this.startY = e.touches[0].clientY // 记录开始位置
      }
    },
    touchmove(e) {
      e = e || event
      if (e.touches.length === 1) {
        // 滑动时距离浏览器左侧的距离
        this.moveX = e.touches[0].clientX
        this.disX = this.startX - this.moveX
        if (this.disX < 0) { // 右滑
          this.slidePosition = 'right'
          if (this.displayIndex <= 0) { // 在最左边不许往右滑动
          } else {
            this.boxStyle = {
              transitionDuration: '0',
              transform: 'translate(' + (-this.displayIndex * this.itemWidth - this.disX) + 'px,0)'
            }
          }
        } else { // 左滑
          this.slidePosition = 'left'
          if (this.displayIndex >= this.banner.data.length) { // 在最右边不许往左滑动
          } else {
            this.boxStyle = {
              transitionDuration: '0',
              transform: 'translate(' + (-this.displayIndex * this.itemWidth - this.disX) + 'px,0)'
            }
          }
        }
      }
    },
    touchend(e) {
      e = e || event
      this.endTime = new Date().getTime()
      if (Math.abs(this.moveX - this.startX) > this.itemWidth / 3) {
        if (this.slidePosition === 'left') {
          this.displayIndex++
        } else {
          this.displayIndex--
        }
      } else {
        this.boxStyle = {
          transitionDuration: '200',
          transform: 'translate(' + (-this.displayIndex * this.itemWidth) + 'px,0)'
        }
        this.transitionendCallback = function () {
          this.boxStyle.transitionDuration = '0s'
        }
      }
    }}
}

</script>
<style scoped>
     * {
      margin: 0;
      padding: 0;
    }
    .h-banner {position: relative;
    margin: 0;
    padding: 0;
    min-height: 100%;
    overflow: hidden;}
    ul {
      position: absolute;
      left: 0;
      overflow: hidden;
     
      }
      ul:after {
        content: "";
        clear: both;
      }
      li {
        float: left;
        list-style: none;}
       li a {
          display: block;}

         li img {
            width: 100%;
          }
        
      
    
    .btn-list {
      position: absolute;
      top: 41%;
      right: 1rem;}
      .btn-list a {
        display: inline-block;
        margin-right: 0.5rem;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid #fff;
        background: rgba(0,0,0,.3);
        box-sizing: border-box;}
        .btn-list a .select {
          background: #fff;
        }
      
    

</style>