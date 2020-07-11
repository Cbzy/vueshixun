<template>
  <div id="app">
    <div id="login" v-if="loginShow">
      <login :msg="rShow" @getData="getData"></login>
    </div>
    <div id="index" v-else>
      <div id="nav">
        <div class="header_warp clearfix">
          <div class="homehead_logo">
            <a href="#" class="mfw_logo"></a>
          </div>
          <ul class="head_nav">
            <li class="head_nav_index">
              <router-link to="/" >首页</router-link>
            </li>
            <li class="head_nav_place">
              <router-link to="/Destination">目的地</router-link>
            </li>
            <li class="head_nav_gonglve">
              <router-link to="/Strategy">旅游攻略</router-link>
            </li>
            <li class="head_nav_sales head_nav_dropdown head_nav_hover">
              <router-link to="/travel" class="drop_toggle">
                <span>
                  去旅行
                  <i class="icon_caret_down"></i>
                </span>
              </router-link>
              <div class="dropdown_menu dropdown_sales">
                <ul>
                  <li>
                    <a href="#">
                      自由行
                      <i class="i_hot">hot</i>
                    </a>
                  </li>
                  <li>
                    <a href="#">跟团游</a>
                  </li>
                  <li>
                    <a href="#">当地游</a>
                  </li>
                  <li>
                    <a href="#">邮轮</a>
                  </li>
                  <li>
                    <a href="#">签证</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="head_nav_flight">
              <router-link to="/ticket">机票火车票</router-link>
            </li>
            <li class="head_nav_hotel">
              <router-link to="/hotel">订酒店</router-link>
            </li>
            <li class="head_nav_community">
              <div class="drop_toggle">
                <span>
                  社区
                  <i class="icon_caret_down"></i>
                </span>
              </div>
              <div class="dropdown_panel dropdown_community no_image">
                <div class="panel_wrapper">
                  <ul class="nav_list clearfix">
                    <li class="h">
                      <a href="#">
                        问答
                        <i class="i_hot">hot</i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        马蜂窝周边
                        <i class="i_new">new</i>
                      </a>
                    </li>
                    <li>
                      <a href="#">蜂首俱乐部</a>
                    </li>
                    <li>
                      <a href="#">结伴</a>
                    </li>
                  </ul>
                  <ul class="nav_list_sub clearfix">
                    <li>
                      <a href="#">小组论坛</a>
                    </li>
                    <li>
                      <a href="#">分舵同城</a>
                    </li>
                    <li>
                      <a href="#">马蜂窝拍卖行</a>
                    </li>
                    <li>
                      <a href="#">照片PK</a>
                    </li>
                    <li>
                      <a href="#">真人兽</a>
                    </li>
                    <li>
                      <a href="#">道具商店</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="head_nav_app">
              <router-link to="/e">APP</router-link>
            </li>
            <li class="head_nav_choice">
              <router-link to="/l">
                <div class="mfwzx_logo"></div>
              </router-link>
            </li>
          </ul>
          <div></div>
          <div>
            <div class="login_out" v-if="username==null|username==''">
              <router-link to class="weibo_login"></router-link>
              <router-link to class="qq_login"></router-link>
              <router-link to class="weixin_login"></router-link>
              <a @click="lShowChange" id="_j_showlogin">登录</a>
              <span class="split">|</span>
              <a @click="rShowChange">注册</a>
              <!-- <a href="#" class="weibo_login"></a>
		          <a href="#" class="qq_login"></a>
		          <a href="#" class="weixin_login"></a>
              <a href="#" id="_jshow"></a>-->
            </div>
			<div class="login-info" v-else>
				<button class="head-card" :style="loginOn1" @click="daka">{{dakaString}}</button>
				<div :class="{loginOn2:loginInfoShow2}" class="head-msg" @mouseenter="loginInfoShow2=true" @mouseleave="loginInfoShow2=false">
					<a class="drop-trigger" href="javascript:;">
						<i class="icon-msg"></i>
						消息
						<i class="icon-caret-down"></i>
					</a>
				</div>
				<div :class="{loginOn3:loginInfoShow3}" class="head-user" @mouseenter="loginInfoShow3=true" @mouseleave="loginInfoShow3=false">
					<a class="drop-trigger" href="javascript:;">
						<i class="user-portrait">{{headPortrait}}</i>
						<i class="icon-caret-down"></i>
					</a>
				</div>
				<div class="head-msg-hidd">
					<ul @mouseenter="loginInfoShow2=true" @mouseleave="loginInfoShow2=false" class="head-news" v-show="loginInfoShow2">
						<li v-for="(item,index) in newsList" :key="index"><a href="#">{{item}}</a></li>
					</ul>
					<ul @mouseenter="loginInfoShow3=true" @mouseleave="loginInfoShow3=false" class="head-information" v-show="loginInfoShow3">
						<li class="user-info"><a href="#">蜂蜜 1</a> / <a href="#">金币 1002</a></li>
						<li v-for="(item,index) in informationList" :key="index">
							<a href="#" v-if="item=='我的马蜂窝'"><i></i>{{item}}<span>LV.2</span></a>
							<a href="javascript:;" @click="logoutHandle" v-else-if="item=='退出'"><i></i>{{item}}</a>
							<a href="#" v-else><i></i>{{item}}</a>
						</li>
					</ul>
				</div>
			</div>
          </div>
        </div>
      </div>
      <div class="main">
        <router-view />
      </div>
      <div class="mfw-container clearfix">
        <router-view name="HomeNav"></router-view>
        <router-view name="HomeAside"></router-view>
        <router-view name="HomeWrapper"></router-view>
      </div>

      <div class="homefooter">
        <div class="hft_content">
          <div class="hft_info">
            <dl class="hft-info-col hft_info_intro">
              <dt>马蜂窝旅游网</dt>
              <dd>中国年轻一代用得更多的旅游网站</dd>
              <dd>
                上亿旅游者共同打造的
                <strong>"旅游神器"</strong>
              </dd>
              <dd>
                <strong>60,000</strong>
                多个全球旅游目的地
              </dd>
              <dd>
                <strong>600,000</strong>
                个细分目的地的新玩法
              </dd>
              <dd>
                <strong>760,000,000</strong>
                次攻略下载
              </dd>
              <dd>
                <strong>38,000</strong>
                家旅游产品供应商
              </dd>
            </dl>
            <dl class="hft-info-col hft_info_about">
              <dt>关于我们</dt>
              <dd>
                <a href="#">关于马蜂窝</a>
                <a href="#" class="m_l_10">联系我们</a>
              </dd>
              <dd>
                <a href="#">隐私政策</a>
                <a href="#" class="m_l_10">商标声明</a>
              </dd>
              <dd>
                <a href="#">服务协议</a>
              </dd>
              <dd>
                <a href="#">商城平台服务协议</a>
              </dd>
              <dd>
                <a href="#">网络信息侵权通知指引</a>
              </dd>
              <dd style="white-space:nowrap">
                <a href="#">马蜂窝旅游网服务监督员</a>
              </dd>
              <dd>
                <a href="#">网站地图</a>
                <a href="#" class="joinus highlight m_l_10">加入马蜂窝</a>
              </dd>
            </dl>
            <dl class="hft-info-col hft_info_service">
              <dt>旅游服务</dt>
              <dd>
                <ul class="clearfix">
                  <li>
                    <a href="#">旅游攻略</a>
                  </li>
                  <li>
                    <a href="#">酒店预订</a>
                  </li>
                  <li>
                    <a href="#">旅游特价</a>
                  </li>
                  <li>
                    <a href="#">国际租车</a>
                  </li>
                  <li>
                    <a href="#">旅游问答</a>
                  </li>
                  <li>
                    <a href="#">旅游保险</a>
                  </li>
                  <li>
                    <a href="#">旅游指南</a>
                  </li>
                  <li>
                    <a href="#">订火车票</a>
                  </li>
                  <li>
                    <a href="#">旅游咨询</a>
                  </li>
                  <li>
                    <a href="#">APP下载</a>
                  </li>
                  <li style="width:120px">
                    <a href="#" class="highlight">旅游商城全球商家入驻</a>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="hft-info-col hft_info_qrcode">
              <dd>
                <span class="hft_qrcode_tejia"></span>
                <p>
                  马蜂窝良品
                  <br />官方服务号
                </p>
              </dd>
              <dd>
                <span class="hft_qrcode_weixin"></span>
                <p>
                  马蜂窝旅游
                  <br />订阅号
                </p>
              </dd>
              <dd>
                <span class="hft_qrcode_app"></span>
                <p>
                  马蜂窝APP
                  <br />扫描立即下载
                </p>
              </dd>
            </dl>
            <dl class="hft_info_social">
              <dt>旅游之前，先上马蜂窝</dt>
              <dd>
                <a href="#" class="hft_social_weibo">
                  <i class="hft_social-icon"></i>
                </a>
                <a href="#" class="hft_social_qqt">
                  <i class="hft_social-icon"></i>
                </a>
                <a href="#" class="hft_social_qzone">
                  <i class="hft_social-icon"></i>
                </a>
              </dd>
            </dl>
          </div>
          <div class="hft_copyright">
            <a href="#">
              <i class="hft_mfw_logo"></i>
            </a>
            <p>
              © 2020 Mafengwo.cn
              <a href="#">京ICP备11015476号</a>
              <a href="#">
                <img src="./img/home/police_record.png" width="12" style="magin:0 2px 4px 0" alt />京公网安备11010502013401号
              </a>
              <a href="#">京ICP证110318号</a>
              <span class="m_l_10">违法和不良信息举报电话: 010-83416877 举报邮箱: mfwjubao@mafengwo.com</span>
            </p>
            <p>
              <a href="#" class="m_l_10">网络出版服务许可证</a>
              <a href="#" class="m_l_10">增值电信业务经营许可证</a>
              <a href="#" class="m_l_10">营业执照</a>
              <a href="#" class="m_l_10">广播电视节目制作经营许可证</a>
              <a href="#" class="m_l_10">网络文化许可证</a>
              <a href="#" class="m_l_10">网上有害信息举报专区</a>
              <a href="#" class="m_l_10">帮助中心</a>
            </p>
            <p>
              <span class="m_l_10">马蜂窝客服：国内</span>
              <span class="highlight">4006-345-678</span>
              <span class="m_l_10">海外</span>
              <span class="highlight">+86-10-8341-6888</span>
            </p>
          </div>
          <div class="hft_safety">
            <a href="#" class="s-b"></a>
            <a href="#" class="s-c"></a>
            <a href="#" class="s-d"></a>
          </div>
        </div>
      </div>
    </div>
    <div class="mfw-toolbar">
      <div class="toolbar-item-top">
        <el-backtop style="right: 0;bottom: 0;">
          <i class="icon_top"></i>
          <em>返回顶部</em>
        </el-backtop>
      </div>
      <div class="toolbar-item-feedack">
        <a href="#" class="btn">
          <i class="icon_feedback"></i>
          <em>意见反馈</em>
        </a>
      </div>
      <div class="toolbar-item-code">
          <a href="#" class="btn">
            <i class="icon_code"></i>
          </a>
          <a href="#" class="mfw-code">
            <img src="https://p1-q.mafengwo.net/s1/M00/6C/51/wKgIC1t_6TuASybrAADGUPUHjr021.jpeg?imageMogr2%2Fthumbnail%2F%21450x192r%2Fgravity%2FCenter%2Fcrop%2F%21450x192%2Fquality%2F90" alt="" width="450" height="192">
          </a>
      </div>
    </div>
  </div>
</template>
<script>
import Login from "@/components/Login/Login";
import backtop from "@/components/backtop";
export default {
  name: "App",
  data() {
    return {
      Height: 0,
      loginShow: false,
      rShow: true,
	  informationShow: false,

      username: localStorage.getItem("isLogin"),
	  headPortrait: '',
	  loginOn1: false,
	  loginInfoShow2: false,
	  loginInfoShow3: false,
	  dakaString:'打卡',
	  
	  newsList:[
		  '私信','小组消息','系统通知','问答消息','回复消息','喜欢与收藏','好友动态',
	  ],
	  informationList:[
		   '我的马蜂窝','写游记','预约游记','我的足迹','我的问答','我的好友','我的收藏','我的路线','我的订单','我的优惠券','创作者开放平台','设置','退出',
	  ],
    };
  },
  mounted() {
    this.Height = document.documentElement.clientHeight - 100;
    window.onresize = () => {
      this.Height = document.documentElement.clientHeight - 100;
    };
	if(this.username!=null){
		this.headPortrait = this.username.slice(0,1);
	}
  },
  methods: {
    lShowChange() {
      this.loginShow = true;
      this.rShow = true;
    },
    rShowChange() {
      this.loginShow = true;
      this.rShow = false;
      this.msg = this.rlShow;
    },
    getData(data) {
      this.loginShow = data;
    },
    logoutHandle() {
      localStorage.removeItem('isLogin');
	  this.lShowChange();
	  this.msg = this.rlShow;
    },
	daka(){
		this.dakaString = '已打卡';
		this.loginOn1 = {background: '#ff9d00'};
	},
  },
  components: {
    Login,
    backtop
  },
  updated() {
  	if(localStorage.getItem("isLogin")!=null){
  		this.username= localStorage.getItem("isLogin");
  	}
  }
};
</script>
<style >
@import url("./css/app.css");
@import url("./css/home.css");
@import url("./css/LoginChange.css");
</style>
