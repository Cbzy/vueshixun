<template >
    <div class="main">
      <div class="top">
        <div></div>
      </div>
      <div class="left">
        <div class="lefttop">

          <router-link to='/ticket/Oneway' class="oneway" ></router-link><span class="t">单程</span>
          <span class="d">往返</span><router-link to='/ticket/Twoway' class="twoway" ></router-link>
        </div>


        <router-view></router-view>
      </div>
      <div class="right_img">
        <img src="~@/assets/ticket/right.jpg" alt="" width="100%">
      </div>
      <ul class="main_footer">

          <li class="l1" >100%航协认证</li>
          <li class="l2"></li>
          <li class="l1">出行保证</li>
          <li class="l2"></li>
          <li class="l1" >7x24小时服务</li>

      </ul>
    </div>
</template>
<script>
export default {
  name:'Ticket',
  data() {
    return {

    }
  },
  methods:{

  }

}
</script>
<style  scoped>
  baby,html,*{padding: 0;margin: 0;}

  .main{
    border: 1px solid red;
    width: 960px;
    height: 600px;
    margin: 0 auto;
  }
  .top{
    width: 100%;
    border: 1px solid black;
    height: 50px;
    padding-left: 14px;
    box-sizing: border-box;

  }
  .top div{
    width: 26px;
    height: 26px;
    margin-top: 10px;
    background-image: url('~@/assets/ticket/ticket_one.png')   ;
    background-size: 200px 200px;
    background-position:   0 2px;
    /* border: 1px solid red; */

  }
  .top div::after{
    content: '国内机票';
    color: #666;
    font-size: 18px;
    display: block;
    /* border: 1px solid aqua; */
    line-height: 26px;
    width: 100px;
    height: 26px;
    margin-left:34px ;
  }
  .left{
    width: 37%;
    height: 332px;
    border: 2px solid #ff9d00;
    display: inline-block;


  }
  .left .lefttop{

    width: 50%;
    height: 50px;
    margin: 0 auto;
    border: 1px solid red;
    box-sizing: border-box;

  }
  .left .lefttop .t{
    color: #717376;
    font-size: 16px;
    margin-bottom: 5px;
    margin-top: 13px;
    border: 1px solid red;
    display: inline-block;
  }
  .left .lefttop .d{
     color: #717376;
    font-size: 16px;
    margin-bottom: 5px;
    margin-top: 13px;
    border: 1px solid red;
    display: inline-block;
    float: right;
  }
  .left  .lefttop .oneway{
    display: block;
    width: 16px;
    height: 16px;
    border: 1px solid #e9e9e9;
    border-radius: 12px;
    margin-right: 5px;
    margin-top: 16px;
    float: left;
  }


  .left .lefttop .twoway{
    display: block;
    width: 16px;
    height: 16px;
    border: 1px solid #e9e9e9 ;
    border-radius: 12px;

    float: right;
    margin-right: 5px;
    margin-top: 16px;
  }
  .right_img{
    border: 1px solid green;
    height: 332px;
    width: 61%;
    display: block;

    float: right;

  }
  .main_footer{
    display: block;
    width: 100%;
    height: 60px;
    border: 1px solid #e5e5e5;
    background-color: #f6f6f6 ;
    box-sizing: border-box;
    margin-top: 10px;

  }
  li{
    float: left;
  }
  .main_footer .l1{
    box-sizing: border-box;
    line-height: 60px;
    display: inline-block;
    /* border: 1px solid red; */
    width: 33%;
    height: 100%;
    font-size: 16px;
    text-align: center;

  }
  .main_footer .l2{
    display: inline-block;
    height: 30px;
    width: 2px;
    box-sizing: border-box;
    border: 1px solid #d1d1d1;
    margin-top: 15px;
  }
  .lin1{
    line-height: 60px;
  }

</style>


