<template>
  <div id="app">
    <div id="nav">
      <div class="header_warp clearfix">
        <div class="homehead_logo">
          <a href="#" class="mfw_logo"></a>
        </div>
        <ul class="head_nav">
          <li class="head_nav_index"><router-link to="/">首页</router-link> </li>
          <li class="head_nav_place"><router-link to="/Destination">目的地</router-link></li>
          <li class="head_nav_gonglve"><router-link to="/Strategy">旅游攻略</router-link></li>
          <li class="head_nav_sales head_nav_dropdown head_nav_hover">
             <router-link to="/travel" class="drop_toggle">
                <span>去旅行
                  <i class="icon_caret_down"></i>
                 </span>
              </router-link>
              <div class="dropdown_menu dropdown_sales" >
                <ul>
                  <li><a href="#">自由行<i class="i_hot">hot</i></a></li>
                  <li><a href="#">跟团游</a></li>
                  <li><a href="#">当地游</a></li>
                  <li><a href="#">邮轮</a></li>
                  <li><a href="#">签证</a></li>
                </ul>
              </div>
          </li>
          <li class="head_nav_flight">
            <router-link to="/ticket">机票火车票</router-link>

            </li>
          <li class="head_nav_hotel"><router-link to="/c">订酒店</router-link></li>
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
                  <li><a href="#">小组论坛</a></li>
                  <li><a href="#">分舵同城</a></li>
                  <li><a href="#">马蜂窝拍卖行</a></li>
                  <li><a href="#">照片PK</a></li>
                  <li><a href="#">真人兽</a></li>
                  <li><a href="#">道具商店</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li class="head_nav_app"><router-link to="/e">APP</router-link></li>
          <li class="head_nav_choice"><router-link to="/l"><div class="mfwzx_logo"></div></router-link></li>
        </ul>
        <div></div>
        <div>
          <div class="login_out">
            <router-link to="" class="weibo_login"></router-link>
            <router-link to="" class="qq_login"></router-link>
            <router-link to="" class="weixin_login"></router-link>
            <router-link to="" id="_j_showlogin">登录</router-link>
            <span class="split">|</span>
            <router-link to="" >注册</router-link>
            <!-- <a href="#" class="weibo_login"></a>
            <a href="#" class="qq_login"></a>
            <a href="#" class="weixin_login"></a>
            <a href="#" id="_jshow"></a>   -->
          </div>
        </div>
      </div>
    </div>
    <div id="v-content" v-bind:style="{minHeight:Height+'px'}">

       <div class="main">
      <router-view/>
      
    </div>
    <div class="mfw-container clearfix">
        <router-view name="HomeNav"></router-view>
        <router-view name="HomeAside"></router-view>
        <router-view name="HomeWrapper"></router-view>
    </div>
   
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
              <a href="#" >马蜂窝旅游网服务监督员</a>
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
                <li><a href="#">旅游攻略</a></li>
                <li><a href="#">酒店预订</a></li>
                <li><a href="#">旅游特价</a></li>
                <li><a href="#">国际租车</a></li>
                <li><a href="#">旅游问答</a></li>
                <li><a href="#">旅游保险</a></li>
                <li><a href="#">旅游指南</a></li>
                <li><a href="#">订火车票</a></li>
                <li><a href="#">旅游咨询</a></li>
                <li><a href="#">APP下载</a></li>
                <li style="width:120px"><a href="#" class="highlight">旅游商城全球商家入驻</a></li>
              </ul>
            </dd>

          </dl>
          <dl class="hft-info-col hft_info_qrcode">
           <dd>
             <span class="hft_qrcode_tejia"></span>
             <p>马蜂窝良品<br>官方服务号</p>
           </dd>
           <dd>
             <span class="hft_qrcode_weixin"></span>
             <p>马蜂窝旅游<br>订阅号</p>
           </dd>
           <dd>
             <span class="hft_qrcode_app"></span>
             <p>马蜂窝APP<br>扫描立即下载</p>
           </dd>
          </dl>
          <dl class="hft_info_social">
            <dt>旅游之前，先上马蜂窝</dt>
            <dd>
              <a href="#" class="hft_social_weibo"><i class="hft_social-icon"></i></a>
              <a href="#" class="hft_social_qqt"><i class="hft_social-icon"></i></a>
              <a href="#" class="hft_social_qzone"><i class="hft_social-icon"></i></a>
            </dd>
          </dl>
        </div>
        <div class="hft_copyright">
            <a href="#"><i class="hft_mfw_logo"></i></a>
            <p>
              © 2020 Mafengwo.cn
              <a href="#">京ICP备11015476号</a>
              <a href="#"><img src="./img/home/police_record.png" width="12" style="magin:0 2px 4px 0" alt="">京公网安备11010502013401号</a>
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

</template>
<script>
export default {
  name:'App',
  data(){
    return{
      Height:0
    }
  },
  mounted(){
    this.Height=document.documentElement.clientHeight - 100;
    window.onresize = ()=>{this.Height = document.documentElement.clientHeight -100}
  }
}
</script>
<style >
  @import url('./css/app.css');
  @import url('./css/home.css');
</style>
