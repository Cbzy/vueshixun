<template>
  <div class="homeAside">
    <div class="asidebox safety-prevention">
      <a href="#" style="display:block;magin-top:5px">
        <img src="../img/home/index-link.png" alt="安全提示" width="218" height="31" />
      </a>
    </div>
    <div class="asidebox box-traveller">
      <div class="asidebox-hd">
        <h2 class="hd-title">
          <a href="#">旅游家专栏</a>
        </h2>
        <a href="#" class="hd-right">专栏首页</a>
      </div>
      <div class="asidebox-bd">
        <ul class="slide-ul" style="left:0px">
          <li v-for="(item,index) in AsideList" v-show="currentIndex == index" :key="index">
            <div class="imgae">
              <a href="#">
                <img :src="item.img" alt height="140" width="260" />
              </a>
            </div>
            <h3>
              <a href="#">{{item.title}}</a>
              <p>{{item.content}}</p>
            </h3>
          </li>
         
        </ul>
        <div class="page" v-if="this.AsideList.length > 1">
          <ol class="slide-ol">
            <li
              v-for="(item,index) in AsideList"
              :key="index"
              @click="gotoPage(index)"
              :class="{'active':currentIndex == index}"
            ></li>
          </ol>
        </div>
      </div>
    </div>
    <div class="asidebox box-gonglve">
      <div class="asidebox-hd">
        <h2 class="hd-title">旅游攻略推荐</h2>
        <a href="#" class="hd-right">更多</a>
      </div>
      <div class="asidebox-bd" style="height:174px">
        <div class="gonglve-item">
          <div class="img">
            <a href="#">
              <img
                src="https://n1-q.mafengwo.net/s16/M00/E1/5F/CoUBUl7rJEeAN2uWAAGAj22UUto15.jpeg?imageMogr2%2Fthumbnail%2F%21260x139r%2Fgravity%2FCenter%2Fcrop%2F%21260x139%2Fquality%2F100"
                alt
              />
            </a>
            <span class="mark">自由行攻略</span>
          </div>
          <h3>
            <a href="#">呼伦贝尔大草原#呼伦贝尔大草原#呼伦贝尔大草原干货</a>
          </h3>
        </div>
      </div>
    </div>
    <div class="asidebox box-traveller box-activity">
      <div class="asidebox-hd">
        <h2 class="hd-title">最新活动</h2>
        <a href="#" class="hd-right">查看全部></a>
      </div>
      <div class="asidebox-bd">
        <div class="image">
          <a href="#">
            <img
              src="https://b1-q.mafengwo.net/s8/M00/91/94/wKgBpVWTULKAJN44AABd8Gtn0o437.jpeg?imageView2%2F2%2Fw%2F260%2Fh%2F178%2Fq%2F90"
              alt
              height="178"
              width="260"
            />
          </a>
        </div>
        <h3>
          <a href="#" style="color:#ff9d00">马蜂窝拍卖行</a>
          <p style="height:20px;margin-top:10px">每周二：精美实物奖品！</p>
        </h3>
      </div>
    </div>
    <div class="asidebox box-unknown">
      <div class="asidebox-hd">
        <h2 class="hd-title">未知旅行实验室</h2>
        <a href="#" class="hd-right">查看更多></a>
      </div>
      <div class="asidebox-bd" style="height:170px">
        <a href="#">
          <img
            src="http://images.mafengwo.net/images/new-index/unknownTravel181120.png"
            alt
            width="260"
            height="170"
          />
        </a>
      </div>
    </div>
    <div class="asidebox box-hr">
      <div class="asidebox-hd">
        <h2 class="hd-title">加入马蜂窝</h2>
        <a href="#" class="hd-right">了解详情></a>
      </div>
      <div class="asidebox-bd" style="height:146px">
        <a href="#">
          <img
            src="https://b1-q.mafengwo.net/s14/M00/01/D0/wKgE2l1t1WqAOUvnAACxwvHwMhM32.jpeg"
            alt
            width="260"
            height="146"
          />
        </a>
      </div>
    </div>
    <div class="asidebox box-news">
      <div class="asidebox-hd">
        <div class="hd-title">
          马蜂窝
          <h2>
            <a href="#">旅游网</a>
          </h2>最新资讯
        </div>
      </div>
      <ul class="asidebox-bd">
        <li>
          04月07日
          <a href="#">马蜂窝“云旅游”直播的攻与守</a>
        </li>
        <li>
          04月01日
          <a href="#">马蜂窝的“云上战疫”</a>
        </li>
        <li>
          02月19日
          <a href="#">科技“战疫” ：马蜂窝大数据赋能旅游业</a>
        </li>
        <li>
          02月13日
          <a href="#">陈罡：疫情下旅游业的“守恒与求变”</a>
        </li>
        <li>
          02月06日
          <a href="#">马蜂窝将退订完成率定为最高KPI</a>
        </li>
        <li>
          09月28日
          <a href="#">马蜂窝国庆白领出游偏好调查：超7成在旅途中工作</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeAside",
  data() {
    return {
      AsideList: [],
      currentIndex: 0,
      timer: null
    };
  },
  mounted() {
    this.getData();
    this.timer = setInterval(() => {
    this.gotoPage(this.nextIndex);
    }, 3500)
  },
   
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    getData() {
      this.$axios.get("../../static/Aside.json").then(
        response => {
          this.AsideList = response.data;
        },
        response => {
          console.log("get AsideList is error");
        }
      );
    },
    gotoPage(index) {
      this.currentIndex = index;
    }
  },
  computed: {
    prevIndex() {
      if (this.currentIndex == 0) {
        return this.AsideList.length - 1;
      } else {
        return this.currentIndex - 1;
      }
    },
    nextIndex() {
      if (this.currentIndex == this.AsideList.length - 1) {
        return 0;
      } else {
        return this.currentIndex + 1;
      }
    }
  },
//   runInv() {
//     this.timer = setInterval(() => {
//       this.gotoPage(this.nextIndex);
//     }, 1000);
//   }
};
</script>
<style scoped>
@import url("../css/home.css");
@import url("../css/app.css");
</style>