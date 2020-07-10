<template>
    <div class="hotel-main">
      <div class="h-title">订酒店</div>
      <div class="clearfix date-warp">
            <div class="add-travle">
                <input type="text" placeholder="出行目的地"  autocomplete="off">

            </div>
            <div class="stay-time _j_booking_date_item" >
                <span>入住日期</span>
                <input type="text" placeholder="入住日期" >
                <i></i>
            </div>
            <div class="leave-time _j_booking_date_item" >
                <span>离店日期</span>
                <input type="text" placeholder="离店日期"  >
                <i></i>
            </div>
            <div class="hs-item hs-item-people number-guests-picker" >
                <span>人数未定</span>
                <i class="icon-person"></i>
            </div>
            <div class="btn-search" >
              <i></i>
            </div>
      </div>
      <div class="h-notice clearfix">
            <ul>
                <li>
                    <i class="notice01"></i>
                    <div class="flt1">
                        <h2>住宿攻略</h2>
                        <p>区域攻略到特色主题，应有尽有</p>
                    </div>
                </li>
                <li>
                    <i class="notice02"></i>
                    <div class="flt1">
                        <h2>专享价格</h2>
                        <p>多平台价格对比，天天专享特惠</p>
                    </div>
                </li>
                <li>
                    <i class="notice03"></i>
                    <div class="flt1">
                        <h2>真实点评</h2>
                        <p>超过100万真实用户点评和游记</p>
                    </div>
                </li>
            </ul>
    </div>
    <div class="h-theme" id="_j_features">
            <div class="h-title" style="margin-top: 50px;">主题住宿</div>
            <div class="tab-theme">
                <div class="themeList clearfix _j_tab_trigger">
                    <a href="javascript:;" data-id="0" class="on">浪漫花海</a>
                    <a href="javascript:;" data-id="1" class="">童话小镇</a>
                    <a href="javascript:;" data-id="2" class="">吃货根据地</a>
                    <a href="javascript:;" data-id="3" class="">目的地特色</a>
                    <a href="javascript:;" data-id="4" class="">潜水胜地</a>
                    <a href="javascript:;" data-id="5" class="">周末好去处</a>
                </div>
                <div class="_j_tab_content">
                    <ul class="clearfix" style="display: block;" data-id="0">
                      <li>
                        <div class="fc-item">
                          <a href="/hotel/10747/" target="_blank" data-type="mdd" data-name="富士山">
                            <div class="pic">
                              <img width="318" height="240" style="width:318px;height:240px;" src="http://p1-q.mafengwo.net/s10/M00/51/B4/wKgBZ1jLu5WAR-ezABxIarXxVhg42.jpeg?imageMogr2%2Fthumbnail%2F%21636x480r%2Fgravity%2FCenter%2Fcrop%2F%21636x480%2Fquality%2F90" class="img-show">
                            </div>
                            <div class="bag-opa"></div>
                            <span class="shadow"></span>
                            <div class="info">
                              <h2>富士山</h2>
                              <p class="caption">日本</p>
                            </div>
                          </a>
                        </div>
                      </li>
                    </ul>
                </div>


              </div>
      </div>
  </div>
</template>

<script>
export default {
  name:'Hotel',
}
</script>

<style>
body, p, div {
    margin: 0;
    padding: 0;
}
.hotel-main {
    position: relative;
    z-index: 5;
    width: 1000px;
    margin: 0 auto;
    padding-top: 60px;
}
.h-title {
    font-size: 24px;
    color: #333;
    line-height: 30px;
}
.date-warp {
    height: 47px;
    margin: 40px 0 70px 0;
    position: relative;
    z-index: 9;
}
.add-travle {
    height: 45px;
    width: 352px;
    position: relative;
    float: left;
    margin-right: 10px;
}
.add-travle input {
    width: 340px;
    height: 45px;
    border: 1px solid #999;
    font-size: 16px;
    color: #666;
    border-radius: 4px;
    padding: 0 0 0 10px;
}
.stay-time, .leave-time {
    position: relative;
    float: left;
    height: 47px;
    margin-right: 10px;

}
.stay-time input, .leave-time input, .stay-time span, .leave-time span {
    display: block;
    width: 170px;
    height: 45px;
    line-height: 45px;
    border: 1px solid #999;
    border-radius: 4px;
    font-size: 16px;
    color: #666;
    padding: 0 0 0 15px;
}
.stay-time input, .leave-time input {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    visibility: hidden;
    padding: 0;
    border: 0;
    width: 100%;
}
.stay-time i, .leave-time i {
    display: block;
    width: 16px;
    height: 16px;
    position: absolute;
    right: 11px;
    top: 15px;
    background: url(~@/assets/Hotel/header-sprites3.png) 0 -140px no-repeat;

    overflow: hidden;
}
.date-warp .hs-item {
    height: 47px;
    position: relative;
    float: left;
    margin-right: 10px;
}
.date-warp .hs-item>span {
    font-size: 16px;
    color: #666;
    display: block;
    height: 45px;
    line-height: 45px;
    padding: 0 12px;
    border: 1px solid #999;
    border-radius: 4px;
    width: 159px;
    cursor: pointer;
}
.date-warp .hs-item-people .icon-person {
    display: inline-block;
    position: absolute;
    top: 15px;
    right: 10px;
    width: 15px;
    height: 16px;
    background: url(~@/assets/Hotel/hotel-detail-icon7.png) no-repeat;
    background-position: -70px -140px!important;
    vertical-align: middle;
    overflow: hidden;
}
element.style {
    opacity: 0;
    margin-top: -16px;
    display: none;
}
.ngp-dropdown.align-right {
    right: 0;
}
.ngp-dropdown {
    position: absolute;
    z-index: 1000;
    margin-top: -1px;
    border: 1px solid #ffa800;
    border-radius: 4px;
    box-shadow: 0 0 4px #ffa800;
    background-color: #fff;
    padding: 0 15px;
    width: 480px;
    cursor: default;
    -webkit-transition: all .2s;
    transition: all .2s;
}
.date-warp .btn-search {
    width: 46px;
    height: 46px;
    line-height: 46px;
    background: #ffa800;
    float: left;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
}
.date-warp .btn-search i {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url(~@/assets/Hotel/header-sprites3.png?a=1) no-repeat;
    background-position: 0 -165px;
    vertical-align: middle;
}
ul, li, ol {
    list-style: none;
    padding: 0;
    margin: 0;
}
.h-notice ul li {
    float: left;
    width: 333px;
}
.h-notice ul li i.notice01 {
    width: 35px;
    height: 42px;
    background-position: 0 0;
}
.h-notice ul li i {
    display: block;
    float: left;
    margin-right: 13px;
    background: url(~@/assets/Hotel/hotel-sprites1.png) no-repeat;
}
.flt1 {
    float: left;
}
.h-notice ul li h2 {
    font-size: 18px;
    color: #666;
    line-height: 18px;
    font-weight: normal;
}
.h-notice ul li p {
    font-size: 14px;
    color: #666;
    margin-top: 5px;
}
.h-notice ul li i.notice02 {
    width: 43px;
    height: 42px;
    background-position: -40px 0;
    margin-left: 40px;
}
.h-notice ul li i.notice03 {
    width: 44px;
    height: 42px;
    background-position: -85px 0;
    margin-left: 80px;
}
.clearfix:after {
    content: '';
    clear: both;
    height: 0;
    display: block;
    overflow: hidden;
}

.h-theme {
      margin-top: 50px;
    padding-bottom: 100px;
}
.h-theme .h-title {
    text-align: center;
    margin: 100px 0 25px 0;
    color: #333;
    font-size: 24px;
        line-height: 30px;

}
.themeList {
    border-bottom: 1px solid #e4e4e4;
}
.themeList a.on {
    color: #ff8a00;
    border-bottom: 3px solid #ff8a00;
    margin-bottom: -2px;
}
.themeList a {
    display: block;
    text-decoration: none;
    float: left;
    width: 166px;
    width: 16.66%;
    color: #666;
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
}
.clearfix:after {
    content: '';
    clear: both;
    height: 0;
    display: block;
    overflow: hidden;
}
.tab-theme ul {
    width: 1023px;
}
.tab-theme ul li {
    width: 318px;
    height: 240px;
    float: left;
    margin: 20px 23px 0 0;
    position: relative;
}
.fc-item {
    position: relative;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    will-change: transform;
}
.tab-theme ul li .pic {
    width: 318px;
    height: 240px;
    overflow: hidden;
}
._j_tab_content .img-show {
    opacity: 1;
}
.tab-theme ul li .bag-opa {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #000;
    opacity: .2;
    z-index: 2;
}
.fc-item .shadow {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    height: auto;
    width: 100%;
    backface-visibility: hidden;
}
.tab-theme ul li .info {
    text-align: center;
    position: absolute;
    z-index: 3;
    left: 0;
    top: 50%;
    width: 100%;
    margin-top: -30px;
}
.tab-theme ul li .info h2 {
    font-size: 30px;
    color: #FFF;
    font-weight: normal;
}
.tab-theme ul li .info p {
    font-size: 18px;
    color: #FFF;
}
.fc-item::after {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: -1;
    display: block;
    content: '';
    height: 22px;
    width: 100%;
    background: url(~@/assets/Hotel/floating-card-shadow.png?a=1) no-repeat;
    background-size: 100%;
}
</style>
