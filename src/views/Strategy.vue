<template>
  <div class="subject">
    <!--旅游攻略导航目的地-->
    <div class="mddNavigation">
      <div class="mddNavigation_search">
        <div class="mddNavigation_local">
          <ul class="mddNavigation_ul">
            <li class="mddNavigation_li" v-on:mouseenter="selShow=1,getShow()" v-on:mouseleave="selShow=0">海外冬季目的地精选<b class="fold"></b></li>
            <li class="mddNavigation_li" v-on:mouseenter="selShow=2,getShow()" v-on:mouseleave="selShow=0">国内冬季目的地精选<b class="fold"></b></li>
            <li class="mddNavigation_li" v-on:mouseenter="selShow=3,getShow()" v-on:mouseleave="selShow=0">奔向海岛<b class="fold"></b></li>
            <li class="mddNavigation_li" v-on:mouseenter="selShow2=1" v-on:mouseleave="selShow2=0">主题推荐
              <b class="fold"></b>
            </li>
          </ul>
          <div class="hiedBox" :class="{show:selShow!=0,hied:selShow==0}" v-on:mouseenter="selShow=i" v-on:mouseleave="selShow=0">
            <ul v-for="(item,index) in selectedList" v-if="index == selShow-1 && selShow == index+1" :key="index">
              <li v-for="(items,indexs) in item.local" :key="indexs">
                <span class="topTen">{{items.lid}}</span>
                <strong class="local">{{items.region}}</strong>
                <span class="describe">{{items.describe}}</span>
              </li>
            </ul>
          </div>
          <div class="hiedBox2" v-on:mouseenter="selShow2=1" v-on:mouseleave="selShow2=0" :class="{show:selShow2==1,hied:selShow2==0}">
            <dl class="riding">
              <dt>骑行</dt>
              <dd>
                <a href="#">海南</a><a href="#">青海湖</a><a href="#">敦煌</a>
                <a href="#">漠河</a><a href="#">台湾</a><a href="#">北京</a>
                <a href="#">杭州</a><a href="#">双廊</a><a href="#">婺源</a>
                <a href="#">阿尔山</a><a href="#">法国</a><a href="#">厦门</a>
                <a href="#">阳朔</a><a href="#">香格里拉</a><a href="#">太湖</a>
                <a href="#">西藏</a><a href="#">大理</a><a href="#">乌鲁木齐</a>
              </dd>
            </dl>
            <dl class="diving">
              <dt>潜水</dt>
              <dd>
                <a href="#">沙巴</a><a href="#">三亚</a><a href="#">斐济</a>
                <a href="#">巴厘岛</a><a href="#">长滩岛</a><a href="#">马尔代夫</a>
                <a href="#">苏梅岛</a><a href="#">普吉岛</a><a href="#">夏威夷</a>
                <a href="#">巴拉望</a><a href="#">马来西亚</a><a href="#">兰卡威</a>
                <a href="#">埃及</a><a href="#">印度尼西亚</a><a href="#">泰国</a>
              </dd>
            </dl>
            <dl class="onFoot">
              <dt>徒步</dt>
              <dd>
                <a href="#">尼泊尔</a><a href="#">虎跳峡</a><a href="#">喀纳斯</a>
                <a href="#">墨脱</a><a href="#">小五台</a><a href="#">贡嘎雪山</a>
                <a href="#">海坨山</a><a href="#">海螺沟</a><a href="#">雨崩</a>
                <a href="#">三峡</a><a href="#">阳朔</a><a href="#">新都桥</a>
                <a href="#">楠溪江</a><a href="#">梅里雪山</a><a href="#">野三坡</a>
                <a href="#"></a><a href="#">西双版纳</a>
              </dd>
            </dl>
            <dl class="mountaineering">
              <dt>登山</dt>
              <dd>
                <a href="#">珠穆朗玛峰</a><a href="#">乞力马扎罗</a><a href="#">牛背山</a>
                <a href="#">太白山</a><a href="#">四姑娘山</a><a href="#">雁荡山</a>
                <a href="#">云台山</a><a href="#">三清山</a><a href="#">普陀山</a>
                <a href="#">庐山</a><a href="#">海坨山</a><a href="#">小五台</a>
                <a href="#">华山</a><a href="#">泰山</a><a href="#">黄山</a><a href="#">武功山</a>
              </dd>
            </dl>
          </div>
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
            <li v-for="(item,index) in dataList" @click="gotoPage(index)" :class="{'current':currentIndex == index}" :key="index">  {{index+1}}</li>
            <!-- <li @click="gotoPage(nextIndex)">&gt;</li> -->
          </ul>
        </div>
      </div>
    </div>

    <!--主体内容-->
    <div class="mainContent">

      <!-- 主体内容左边 -->
      <div class="mainContent_left">
        <div class="mainContent_leftTitle">旅游攻略导航</div>
        <div class="region">
          <div class="guonei" @click="gnClick()" :class="{click:click==1}">
            <i :class="{clickI:click==1,clicks:click!=1}"></i>
            国内
          </div>
          <div class="guowai" @click="gwClick()" :class="{click:click==2}">
            <span></span>
            <i :class="{clickI:click==2,clicks:click!=2}"></i>
            国外
          </div>
          <div class="theme" @click="themeCilck()" :class="{click:click==3}">
            <span></span>
            <i :class="{clickI:click==3,clicks:click!=3}"></i>
            主题
          </div>
          <div class="regionHied" :class="{show:click!=0,hied:click==0}">
            <ul v-for="(item,index) in regList" v-if="click && index==click-1" :key="index">
              <li v-for="(items,indexs) in item.content" :key="indexs">
                <a href="#">{{items.province}}</a>
                <span></span>
              </li>
            </ul>
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
                    <span class="num">4563</span>
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
                    <li class="views">20浏览</li>
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
                    <span class="num">445</span>
                    蜂蜂体验过
                    <i class="icon_cart"></i>
                  </span>
                </div>
                <div class="postTitle">
                  呼伦贝尔旅游攻略@呼伦贝尔旅游攻略呼伦贝尔旅游攻略
                </div>
                <div class="postTxt">
                  呼伦贝尔旅游攻略@呼伦贝尔旅游攻略呼伦贝尔旅游攻略
                </div>
                <div class="postImage">
                  <ul>
                    <li>
                    <img src="http://p1-q.mafengwo.net/s16/M00/59/2D/CoUBUl8CyIaAfMmMAAElOlRqMzk24.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100" />
                    </li>
                    <li>
                      <img src="http://n1-q.mafengwo.net/s16/M00/D7/E6/CoUBUl8CipmAdt1kABaNW8Yvzrk889.gif?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100" />
                    </li>
                    <li>
                      <img src="http://p1-q.mafengwo.net/s16/M00/D7/E7/CoUBUl8CipqAbk6VAAJU1XEYzD8026.gif?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100" />
                    </li>
                    <li class="views">2450浏览</li>
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
                    <span class="num">456</span>
                    蜂蜂体验过
                    <i class="icon_cart"></i>
                  </span>
                </div>
                <div class="postTitle">
                  西双版纳攻略❀西双版纳攻略❀西双版纳攻略
                </div>
                <div class="postTxt">
                  大家好：想来西双版纳旅游 自由行 自驾游 自助游 有什么不懂的问我
                </div>
                <div class="postImage">
                  <ul>
                    <li>
                    <img src="http://p1-q.mafengwo.net/s16/M00/E6/CE/CoUBUl758ySAfgwOAAKgWitCOeI63.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100" />
                    </li>
                    <li>
                      <img src="http://p1-q.mafengwo.net/s14/M00/75/ED/wKgE2l1s9y2AHL9fAAFVw1_ctLw79.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100" />
                    </li>
                    <li>
                      <img src="http://b1-q.mafengwo.net/s14/M00/8C/E6/wKgE2l1vZ3mAbftJAAG05kTnIno14.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100" />
                    </li>
                    <li class="views">28300浏览</li>
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
                  <span class="num">89</span>
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
                    <span class="nums">4450浏览, 90评论</span>
                  </span>
                </dd>
              </dl>
            </a>
          </div>

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
                日本红叶季：青枫叶赤天雨霜
              </div>
              <dl class="content_dl">
                <dt class="image_dt">
                  <img src="http://p1-q.mafengwo.net/s12/M00/EE/04/wKgED1v3zY2Ad4PxAAwy6V1Fiq495.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F100" />
                </dt>
                <dd class="txt_dd">
                  <p>从10月份开始，日本各地开始陆续进入红叶季，其中最著名的恐怕就是京都的红叶了。最近比较闲，几乎算是疯狂的走遍关东关西几个比较著名的红叶景点。
虽然说是红叶，无论是“红”还是“叶”，都是有很多说法的。就拿京都来说，这里的红叶主要是枫叶。而东京...</p>
                  <span class="clickNick">
                    <span class="userHead">
                      <img src="http://n1-q.mafengwo.net/s10/M00/A7/CC/wKgBZ1lFzFmAWVr-ABmYN-TqOeI52.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90" />
                      子猫西柚
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
                    <span class="num">3</span>
                    蜂蜂体验过
                    <i class="icon_cart"></i>
                  </span>
                </div>
                <div class="postTitle">
                  必须曝光这家shopping mall，三亚的时髦精都来打过卡了吧
                </div>
                <div class="postImage">
                  <ul>
                    <li>
                    <img src="http://p1-q.mafengwo.net/s13/M00/B5/4C/wKgEaVyFzPCAEhWFAAI28Gx1pBo93.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100" />
                    </li>
                    <li>
                      <img src="http://p1-q.mafengwo.net/s13/M00/AA/CE/wKgEaVyFxUKAR2dfAAB7TLLlOTY32.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100" />
                    </li>
                    <li>
                      <img src="http://n1-q.mafengwo.net/s13/M00/AA/CE/wKgEaVyFxUKACESvAAJNKPI0gZI89.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100" />
                    </li>
                    <li class="views">2800浏览</li>
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
                贵州有哪些美到让人泪奔的景点？
              </div>
              <dl class="content_dl">
                <dt class="image_dt">
                  <img src="http://n1-q.mafengwo.net/s9/M00/08/64/wKgBs1dyX7GAMAITAAIERPTmGPY84.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F100" />
                </dt>
                <dd class="txt_dd">
                  <p>推荐下面几个地方吧
1. 黔西南 兴义市 马岭河峡谷兴义位于贵州西南边陲，交通偏远，城市接待能力也很一般，不过四周却被风景所包围。如果时间允许的话，在兴义市区住1、2天吧，好好感受下贵州西南边陲的这样一个城市，你会有所收获。马岭河峡谷就在兴义城外，被誉为地球上一道美丽的疤痕。地缝嶂谷、群瀑横飞、碳酸...</p>
                  <span class="clickNick">
                    <span class="userHead">
                      <img src="http://n1-q.mafengwo.net/s10/M00/A7/CC/wKgBZ1lFzFmAWVr-ABmYN-TqOeI52.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90" />
                      林冲
                    </span>
                    <span class="nums">120浏览, 45评论</span>
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
                  一篇攻略，带你玩重庆！吃住行游购娱，附带防坑指南
                </div>
                <div class="postImage">
                  <ul>
                    <li>
                    <img src="http://p1-q.mafengwo.net/s15/M00/75/4C/CoUBGV4C16SAZ1ZlAASyV8CocFs57.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100" />
                    </li>
                    <li>
                      <img src="http://n1-q.mafengwo.net/s15/M00/45/D5/CoUBGV4B31CAEfXuAAM59-M1ZhY980.jpg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100" />
                    </li>
                    <li>
                      <img src="http://n1-q.mafengwo.net/s15/M00/5C/E4/CoUBGV4B76eAN3kLAA9QkprN60c224.jpg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100" />
                    </li>
                    <li class="views">8400浏览</li>
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
                如果你有闺蜜，请一定和她相约清迈，来一场五彩斑斓的“穿搭...
              </div>
              <dl class="content_dl">
                <dt class="image_dt">
                  <img src="http://n1-q.mafengwo.net/s12/M00/6A/90/wKgED1wvKGGAJwTxAAe6yPyUJ_E98.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F100" />
                </dt>
                <dd class="txt_dd">
                  <p>如果把泰国比作一本诗集，那曼谷是现代诗，芭提雅是狂野诗，普吉是浪漫诗，而清迈，则是我心里的一首田园诗。这首诗里，有阳光透过树梢的斑驳光影，有栅栏外一朵小花的阵阵清香，有呼啸而过的呜呜摩托声，有深夜霓虹灯下的吉他弹唱。让人从眼睛、鼻子、耳...</p>
                  <span class="clickNick">
                    <span class="userHead">
                      <img src="http://b1-q.mafengwo.net/s16/M00/38/5E/CoUBUl6yeoSASdEQAABlunbWmTg53.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90" />
                      莫吉托
                    </span>
                    <span class="nums">5920浏览, 920评论</span>
                  </span>
                </dd>
              </dl>
            </a>
          </div>

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
                    <span class="num">999</span>
                    蜂蜂体验过
                    <i class="icon_cart"></i>
                  </span>
                </div>
                <div class="postTitle">
                  洛杉矶六旗魔术山-过山车爱好者梦想的玩法！
                </div>
                <div class="postTxt">
                  关于洛杉矶，大家的第一反应一定是好莱坞星光大道、环球影城、迪士尼乐园。但在洛杉矶还有一个让无数人尖叫的地方：Six Flag Magic Mountain（六旗魔术山）。无论你是想要寻找新鲜刺激的体验，还是挑战世界之最，这里都是绝佳的选择。
                </div>
                <div class="postImage">
                  <ul>
                    <li>
                    <img src="http://n1-q.mafengwo.net/s11/M00/44/C6/wKgBEFtZh_6AcRCXAAQTrmHf-1s23.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100" />
                    </li>
                    <li>
                      <img src="http://p1-q.mafengwo.net/s11/M00/44/05/wKgBEFtZh5aASSakAAzkjYmDECg06.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100" />
                    </li>
                    <li>
                      <img src="http://n1-q.mafengwo.net/s11/M00/46/4F/wKgBEFtZiL6AablfAAecCgwfgR835.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100" />
                    </li>
                    <li class="views">290浏览</li>
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
      timer: null,    //定时器
      selectedList:[],
      regList:[],
      selShow:0,
      i:0,
      selShow2:0,
      click:0
    }
  },
  methods: {
  	  gotoPage(index) {
  	    this.currentIndex = index;
      },
      getUrl(){
        this.$router.replace('/Free')
      },
      getData(){
        axios.get('../../static/Selected.json').then(response => {
          this.selectedList = response.data;
        }, response => {
          console.log("get selectedList is error");
        });
        axios.get('../../static/region.json').then(response => {
          this.regList = response.data;
        }, response => {
          console.log("get regList is error");
        });
      },
      getShow(){
        this.i=this.selShow;
      },
      gnClick(){
        if(this.click!=1){
          this.click=1;
        }else{
          this.click=0;
        }
      },
      gwClick(){
        if(this.click!=2){
          this.click=2;
        }else{
          this.click=0;
        }
      },
      themeCilck(){
        if(this.click!=3){
          this.click=3;
        }else{
          this.click=0;
        }
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
    }, 3500);
    this.getData();
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
