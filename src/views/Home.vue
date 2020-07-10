
<template>
  <div class="home mfw-focus" style="height:640px">
    <div class="item show-slider" :style="conheight">
      <ul class="show-image">
        <li class="first" v-for="(item,index) in LbtList" v-show="currentIndex == index" :key="index">
          <a href="#" class="show-pic">
            <img :src="item.img" alt style="magin-top:-3px;" height="640" width="100%"/>
          </a>
          <a href="#" class="show-title dark">
            <div class="date">
              <span class="day">{{item.day}}</span>
              {{item.monthly}}.{{item.year}}
            </div>
            <h3>{{item.title}}</h3>
          </a>
          <p class="show-info">
            图片来自于
            <font color="#ff9900">
              <a href="#">{{item.country}}</a>
            </font>
            ,此目的地共收藏了
            <font color="#ff9900">
              <a href="#">{{item.number}}</a>
            </font>
            张
            <a href="#">{{item.country}}</a>
            图片。本片由
            <font color="#ff9900">
              <a href="#">{{item.producer}}</a>
            </font>
            荣誉出品
          </p>
        </li>
      </ul>
      <div class="page" v-if="this.LbtList.length > 1">
      <ul class="show-nav">
        <li class  v-for="(item,index) in LbtList"
              :key="index"
              @click="gotoPage(index)"
              :class="{'active':currentIndex == index}">
          <a href="#">
            <img
              :src="item.img"
              alt
              height="62"
              width="110"
            />
            <span></span>
          </a>
        </li>
        
      </ul>
      </div>
      <a href="#" class="show-more">历历在目</a>
    </div>
    <div class="search-container">
        <div class="search-group">
          <div class="searchtab">
            <ul class="clearfix">
              <li class="tab-selected">
                <router-link to="homeAll">
                <i></i>
                全部
                </router-link>
              </li>
              <li class="">
                <router-link to="">
                <i></i>
                酒店
                </router-link>
              </li>
              <li class="">
                <router-link to="">
                <i></i>
                目的地
                </router-link>
              </li>
              <li class="">
                <router-link to="">
                <i></i>
                去旅行
                </router-link>
              </li>
              <li class="">
                <router-link to="">
                <i></i>
                机票
                </router-link>
              </li>
            </ul>
          </div>
           <div class="searchbar">
          <router-view/>
        </div>
        </div>
       
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      LbtList: [
        {
          id: "1",
          img:
            "https://n1-q.mafengwo.net/s16/M00/F1/0A/CoUBUl78p1aAS64AACnE_Ye2sto840.png?imageMogr2%2Finterlace%2F1",
          day: "2",
          monthly: "July",
          year: "2020",
          title:
            "『和你一起走遍全世界 第二站』顺时针自驾土耳其，寻找星月国的浪漫瞬间",
          country: "土耳其",
          number: "1012835",
          producer: "旅忆"
        },
        {
          id: "2",
          img:
            "https://n1-q.mafengwo.net/s16/M00/E6/D9/CoUBUl77KGaAReziACWAn2MXm5c712.png?imageMogr2%2Finterlace%2F1",
          day: "1",
          monthly: "July",
          year: "2020",
          title: "向西去阿里,那里有座山叫冈仁波齐 | 西藏阿里南线12天自驾游",
          country: "西藏",
          number: "2572426",
          producer: "米央Mia"
        },
        {
          id: "3",
          img:
            "https://b1-q.mafengwo.net/s16/M00/04/59/CoUBUl76BUaAL5zaACGqytAu1lA955.png?imageMogr2%2Finterlace%2F1",
          day: "30",
          monthly: "July",
          year: "2020",
          title: "终于来到了诗和远方 | 阿根廷（附电子签证详解+乌拉圭一日游）",
          country: "阿根廷",
          number: "23332",
          producer: "Melissa"
        },
        {
          id: "4",
          img:
            "https://p1-q.mafengwo.net/s16/M00/96/49/CoUBUl74vFGAFXO9ABzS5ZG0Bp4828.png?imageMogr2%2Finterlace%2F1",
          day: "29",
          monthly: "July",
          year: "2020",
          title: "菲律宾：再会，东方的明珠与失乐园",
          country: "菲律宾",
          number: "797643",
          producer: "DK与Amphe的旅程"
        },
        {
          id: "5",
          img:
            "https://b1-q.mafengwo.net/s16/M00/F3/9E/CoUBUl73ZQmARt_dACVBfOnIVmA123.png?imageMogr2%2Finterlace%2F1",
          day: "28",
          monthly: "July",
          year: "2020",
          title:
            "魔幻而刺激，浩渺又纯净——我把4月的新西兰讲给你听（附超详细攻略）",
          country: "新西兰",
          number: "1006096",
          producer: "啦啦奇闯天涯"
        }
      ],
      currentIndex: 0,
      timer: null,
      conheight:{
      height:'640'+'px'
      }
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
    },
    getHeight(){
      this.conheight.height=window.innerHeight-270+'px';
    },
    created(){
      window.addEventListener('resize',this.getHeight);
      this.getHeight()
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
}
</script>
<style scoped>
@import url("../css/home.css");
@import url("../css/app.css");
</style>