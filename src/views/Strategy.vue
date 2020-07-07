<template>
  <div class="subject">
    <!--旅游攻略导航目的地-->
    <div class="mddNavigation">
      <div class="mddNavigation_search">
        <div class="mddNavigation_local">
          <ul class="mddNavigation_ul">
            <li class="mddNavigation_li">海外冬季目的地精选<b class="fold"></b></li>
            <li class="mddNavigation_li">国内冬季目的地精选<b class="fold"></b></li>
            <li class="mddNavigation_li">奔向海岛<b class="fold"></b></li>
            <li class="mddNavigation_li" id="mddNavigation_li">主题推荐
              <b class="fold"></b>
            </li>
          </ul>
        </div>

        <!--搜索框-->
        <div class="search_box">
          <span></span>
          <input type="text" name="" placeholder="请输入想去的地方,如:香港" />
        </div>
        <div class="qcCode">
          <div class="logo">
            <a href="#"><img src="../assets/Strategy/logo_gonglve_v6.png" /></a>
          </div>
          <div class="download">
            <h3><a href="#">马蜂窝自由行APP下载</a></h3>
            <p>
              <a>iPhone版</a>
              <span>|</span>
              <a>Android版</a>
              <span>|</span>
              <a>iPad版</a>
            </p>
            <div class="qcPopup">
              <img src="../assets/Strategy/wKgED1vb_fqAeZq0AAAxwHmnAuc675.png" />
            </div>
          </div>
        </div>
      </div>

      <!-- 轮播图 -->
      <div class="Rotation">
        <div class="item">
          <a href="#"><img :src="dataList[currentIndex]"></a>
        </div>
        <div class="page" v-if="this.dataList.length > 1">
          <ul>
            <!-- <li @click="gotoPage(prevIndex)">&lt;</li> -->
            <li v-for="(item,index) in dataList" @click="gotoPage(index)" :class="{'current':currentIndex == index}" :keys="index">  {{index+1}}</li>
            <!-- <li @click="gotoPage(nextIndex)">&gt;</li> -->
          </ul>
        </div>
        <!--
        <img class="img_ad" src="../assets/Strategy/1.png" />
        <img class="img_ad" src="../assets/Strategy/2.jpeg" />
        <img class="img_ad" src="../assets/Strategy/3.jpeg" />
        <img class="img_ad" src="../assets/Strategy/4.png" />
        <img class="img_ad" src="../assets/Strategy/5.jpeg" />
        -->
      </div>
    </div>

    <!--主体内容-->
    <div class="mainContent">

      <!-- 主体内容左边 -->
      <div class="mainContent_left">
        <div class="mainContent_leftTitle">旅游攻略导航</div>
        <div class="region">
          <div class="guonei">
            <i></i>
            国内
          </div>
          <div class="guowai">
            <span></span>
            <i></i>
            国外
          </div>
          <div class="theme">
            <span></span>
            <i></i>
            主题
          </div>
        </div>
        <!-- 排行榜 -->
        <div class="Ranking">
          <ul>
            <li id="top">
              <!-- <span class="num">1</span> -->
              <a href="#" >
                <img src="../assets/Strategy/wKgBs1awe3SAO6YvAAhkrsH0YNo64.jpeg" />
              </a>
              <p>更新日期:2016-02-02</p>
              <div class="downNums">
                <span></span>
                <p>1234567人下载</p>
              </div>
            </li>
            <li>
              <span class="num">2</span>
              <a href="#">丽江</a>
            </li>
            <li>
              <span class="num">3</span>
              <a href="#">成都</a>
            </li>
            <li>
              <span class="num">4</span>
              <a href="#">云南</a>
            </li>
            <li>
              <span class="num">5</span>
              <a href="#">重庆</a>
            </li>
            <li>
              <span class="num">6</span>
              <a href="#">北疆</a>
            </li>
            <li>
              <span class="num">7</span>
              <a href="#">西安</a>
            </li>
            <li>
              <span class="num">8</span>
              <a href="#">西藏</a>
            </li>
            <li>
              <span class="num">9</span>
              <a href="#">香格里拉</a>
            </li>
            <li>
              <span class="num">10</span>
              <a href="#">三亚</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 主体内容右边 -->
      <div class="mainContent_right">
        <h3>推荐攻略</h3>
        <div class="postList">

          <!-- 帖子类型1 -->
          <ul class="postType1">
            <li>
              <a href="#" @click="getUrl">
                <div class="user">
                  <span class="user_span">
                    <i class="userimg"></i>
                    来自<strong class="username">自由行攻略</strong>
                  </span>
                  <span class="button">
                    <span class="num">43</span>
                    蜂蜂体验过
                    <i class="icon_cart"></i>
                  </span>
                </div>
                <div class="postTitle">
                  青海旅游攻略-青海旅游攻略-青海旅游攻略-景点干货
                </div>
                <div class="postTxt">
                  青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-
                </div>
                <div class="postImage">
                  <ul>
                    <li>
                      <img src="../assets/Strategy/CoUBGV5zMDGAdj4WAAJQ83kEszk13.jpeg" />
                    </li>
                    <li>
                      <img src="../assets/Strategy/CoUBUl7i7ceAX1HXAAJ0_iZgaf0552.jpg" />
                    </li>
                    <li>
                      <img src="../assets/Strategy/CoUBUl7i7dWADDT0AAH9EL1HjVY70.jpeg" />
                    </li>
                    <li class="views">2200浏览</li>
                  </ul>
                </div>
              </a>
            </li>
          </ul>

          <!-- 帖子类型1 -->
          <ul class="postType1">
            <li>
              <a href="#">
                <div class="user">
                  <span class="user_span">
                    <i class="userimg"></i>
                    来自<strong class="username">自由行攻略</strong>
                  </span>
                  <span class="button">
                    <span class="num">43</span>
                    蜂蜂体验过
                    <i class="icon_cart"></i>
                  </span>
                </div>
                <div class="postTitle">
                  青海旅游攻略-青海旅游攻略-青海旅游攻略-景点干货
                </div>
                <div class="postTxt">
                  青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-
                </div>
                <div class="postImage">
                  <ul>
                    <li>
                    <img src="../assets/Strategy/CoUBGV5zMDGAdj4WAAJQ83kEszk13.jpeg" />
                    </li>
                    <li>
                      <img src="../assets/Strategy/CoUBUl7i7ceAX1HXAAJ0_iZgaf0552.jpg" />
                    </li>
                    <li>
                      <img src="../assets/Strategy/CoUBUl7i7dWADDT0AAH9EL1HjVY70.jpeg" />
                    </li>
                    <li class="views">2200浏览</li>
                  </ul>
                </div>
              </a>
            </li>
          </ul>

          <!-- 帖子类型1 -->
          <ul class="postType1">
            <li>
              <a href="#">
                <div class="user">
                  <span class="user_span">
                    <i class="userimg"></i>
                    来自<strong class="username">自由行攻略</strong>
                  </span>
                  <span class="button">
                    <span class="num">43</span>
                    蜂蜂体验过
                    <i class="icon_cart"></i>
                  </span>
                </div>
                <div class="postTitle">
                  青海旅游攻略-青海旅游攻略-青海旅游攻略-景点干货
                </div>
                <div class="postTxt">
                  青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-青海旅游攻略-
                </div>
                <div class="postImage">
                  <ul>
                    <li>
                    <img src="../assets/Strategy/CoUBGV5zMDGAdj4WAAJQ83kEszk13.jpeg" />
                    </li>
                    <li>
                      <img src="../assets/Strategy/CoUBUl7i7ceAX1HXAAJ0_iZgaf0552.jpg" />
                    </li>
                    <li>
                      <img src="../assets/Strategy/CoUBUl7i7dWADDT0AAH9EL1HjVY70.jpeg" />
                    </li>
                    <li class="views">2200浏览</li>
                  </ul>
                </div>
              </a>
            </li>
          </ul>

          <!-- 帖子类型2 -->
          <div class="postType">
            <a href="#">
              <div class="user">
                <span class="user_span">
                  <i class="userimg"></i>
                  来自<strong class="username">游记</strong>
                </span>
                <span class="button">
                  <span class="num">43</span>
                  蜂蜂体验过
                  <i class="icon_cart"></i>
                </span>
              </div>
              <div class="postTitle">
                穿越丛林和冰川 拥抱星辰和湖泊——新西兰南岛12天自驾游
              </div>
              <dl class="content_dl">
                <dt class="image_dt">
                  <img src="../assets/Strategy/wKgEaVyEtQmAYGUEACuFa1TyJ5w10.jpeg" />
                </dt>
                <dd class="txt_dd">
                  <p>新西兰在我的行程计划前三位排了很多年，既有自然风景又有极限运动，绝对是我的菜啊。每年总嚷嚷着想去，又觉得不安排个悠长假期好好尽兴玩耍就是辜负了她。以前年少的时候，觉得旅行的意义就是逃离繁杂的生活，顺带买买买；等到年龄渐长，好像对物...</p>
                  <span class="clickNick">
                    <span class="userHead">
                      <img src="../assets/Strategy/wKgEaVxr4XSAB9z7ACL-awqpsGo10.jpeg" />
                      Renee小柔
                    </span>
                    <span class="nums">400浏览, 9评论</span>
                  </span>
                </dd>
              </dl>
            </a>
          </div>

          <!-- 帖子类型3 -->
          <ul class="postType1">
            <li>
              <a href="#">
                <div class="user">
                  <span class="user_span">
                    <i class="userimg"></i>
                    来自<strong class="username">自由行攻略</strong>
                  </span>
                  <span class="button">
                    <span class="num">43</span>
                    蜂蜂体验过
                    <i class="icon_cart"></i>
                  </span>
                </div>
                <div class="postTitle">
                  青海旅游攻略-青海旅游攻略-青海旅游攻略-景点干货
                </div>
                <div class="postImage">
                  <ul>
                    <li>
                    <img src="../assets/Strategy/CoUBGV5zMDGAdj4WAAJQ83kEszk13.jpeg" />
                    </li>
                    <li>
                      <img src="../assets/Strategy/CoUBUl7i7ceAX1HXAAJ0_iZgaf0552.jpg" />
                    </li>
                    <li>
                      <img src="../assets/Strategy/CoUBUl7i7dWADDT0AAH9EL1HjVY70.jpeg" />
                    </li>
                    <li class="views">2200浏览</li>
                  </ul>
                </div>
              </a>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
  name: 'Strategy',
  data () {
    return {
      dataList:["https://n1-q.mafengwo.net/s13/M00/03/30/wKgEaVyu94SAIqDcAAheevdYPB4887.png","https://p1-q.mafengwo.net/s11/M00/AB/01/wKgBEFrrsvOACErGAAGJ4YrPQUs78.jpeg","https://p1-q.mafengwo.net/s11/M00/4A/E0/wKgBEFrQBqeAYyjMAAURcw8MxG470.jpeg","https://b1-q.mafengwo.net/s12/M00/D4/09/wKgED1vpIAiAI6D9AAZ72-z4yZw188.png","https://n1-q.mafengwo.net/s10/M00/6F/B3/wKgBZ1h4nkiAURQzAAHf0nrnc6I29.jpeg"],
      currentIndex: 0,   //默认显示图片
      timer: null    //定时器
    }
  },
  methods: {
  	  gotoPage(index) {
  	    this.currentIndex = index;
      },
      getUrl(){
        this.$router.replace('/Free')
      }
  	},
  	computed: {
  	  //上一张

  	  prevIndex() {
  	    if(this.currentIndex == 0) {
  	      return this.dataList.length - 1;
  	    }else{
  	      return this.currentIndex - 1;
  	    }
  	  },
  	  //下一张
  	  nextIndex() {
  	    if(this.currentIndex == this.dataList.length - 1) {
  	      return 0;
  	    }else {
  	      return this.currentIndex + 1;
  	    }
  	  },

  },
   //定时器
  mounted() {
    this.timer = setInterval(() => {
      this.gotoPage(this.nextIndex);
    }, 3500)
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
 
}
</script>

<style scoped>
  @import url(../css/Strategy.css);
  @import url(../css/font-awesome-4.7.0/css/font-awesome.css);
</style>
