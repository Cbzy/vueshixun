<template >
    <div class="main">
      <div class="top">
        <div></div>
      </div>
      <div class="left">
        <div class="lefttop">
          <!-- v-bind:class="{isOne:isOne}"  -->
          <router-link to=''  class="oneway" :class="{One :isOne, noOne:!isOne}"  @click.native="oway" ></router-link>
          <!-- <div class="swich-icon radioActive"></div> -->
          <span class="t">单程</span>
          <span class="d">往返</span>

          <router-link to='' class="twoway" :class="{Two :isTwo, noTwo:!isTwo}" @click.native="tway"></router-link>
        </div>


        <Oneway v-if="isOne" ></Oneway>
        <Twoway v-else></Twoway>
        <!-- <router-view></router-view> -->
      </div>
      <div class="right_img">
        <img src="~@/assets/ticket/right.jpg" alt="" width="100%">
      </div>



      <div class="flightpc-index-service">
        <div class="flightpc-s1">
          <i></i>100%航协认证
        </div>
        <div class="flightpc-s2">
          <i></i>出行保证
        </div>
        <div class="flightpc-s3">
          <i></i>
          <span>
            7x24小时服务<br><strong>4006345678转2</strong>
          </span>
        </div>
      </div>
      <div class="m-title"><span class="ticket-icon"></span><span>特价机票</span></div>
      <Sale></Sale>
    </div>
</template>
<script>
import Sale from '@/components/ticket/Sale';
import Oneway from '@/components/ticket/Oneway';
import Twoway from '@/components/ticket/Twoway';
export default {

  name:'Ticket',
  data() {
    return {
      isOne:true,
      isTwo:false,


    }
  },
  methods:{
    oway:function(){
      if(this.isOne=true){
        this.isOne = true;
        this.isTwo = false;

      }else if(this.isOne = false){
        this.isOne = true;
        this.isTwo = false;

      }
    },
    tway:function(){


      if(this.isTwo=false){
        this.isTwo = true;
        this.isOne = false;

      }else if(this.isTwo = true){
        this.isTwo = true;
        this.isOne = false;

      }
    }
  },
  components:{
    Sale,
    Oneway,
    Twoway
  }

}
</script>
<style  scoped>
  baby,html,*{padding: 0;margin: 0;}

  .main{
    /* border: 1px solid red; */
    width: 960px;
    height: 800px;
    margin: 0 auto;
  }
  .top{
    width: 100%;
    border: 1px solid white;
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
    /* border: 1px solid red; */
    box-sizing: border-box;

  }
  .left .lefttop .t{
    color: #717376;
    font-size: 16px;
    margin-bottom: 5px;
    margin-top: 13px;
    /* border: 1px solid red; */
    display: inline-block;
  }
  .left .lefttop .d{
     color: #717376;
    font-size: 16px;
    margin-bottom: 5px;
    margin-top: 13px;
    /* border: 1px solid red; */
    display: inline-block;
    float: right;
  }
  .left  .lefttop .oneway{
    display: block;
    /* width: 16px;
    height: 16px;
    border: 1px solid #e9e9e9; */
    /* border-radius: 12px; */
    margin-right: 5px;
    margin-top: 16px;
    float: left;

    background: #fff;
    border-radius: 12px;



  }
  .One{
    border: 5px solid #ff9d00;
    width: 6px;
    height: 6px;
  }
  .noOne{
    border: 1px solid #e5e5e5;
    width: 14px;
    height: 14px;
  }
  .Two{
    border: 5px solid #ff9d00;
    width: 6px;
    height: 6px;
  }
  .noTwo{
    border: 1px solid #e5e5e5;
    width: 14px;
    height: 14px;
  }


  .left .lefttop .twoway{
    display: block;

    border-radius: 12px;
    background: #fff;
    float: right;
    margin-right: 5px;
    margin-top: 16px;
}

  /* .radioActive {
    width: 6px;
    height: 6px;
    background: #fff;
    border-radius: 12px;
    border: 5px solid #ff9d00;
}
.swich-icon {
    cursor: pointer;
    display: inline-block;
    vertical-align: top;
    width: 14px;
    height: 14px;
    background: #fff;
    border-radius: 32px;
    border: 1px solid #e5e5e5;
    margin-right: 8px;
} */

  .right_img{
    /* border: 1px solid green; */
    height: 332px;
    width: 62%;
    display: block;

    float: right;

  }






  .flightpc-index-service {
    margin-top: 10px;
    width: 960px;
    border: 1px solid #e5e5e5;
    background-color: #f6f6f6;
    height: 58px;
    text-align: center;
    font-size: 16px;
    box-sizing: border-box;
}
.flightpc-index-service .flightpc-s1 {
    display: inline-block;
    padding: 10px 0;
    width: 300px;
    line-height: 38px;
    position: relative;
}
.flightpc-index-service .flightpc-s1 i {
    display: inline-block;
    background: url('~@/assets/ticket/ticket_one.png') 0 -90px no-repeat;
    background-size: auto;
    vertical-align: middle;
    width: 40px;
    height: 34px;
    margin-right: 15px;
}
.flightpc-index-service .flightpc-s2 {
    display: inline-block;
    padding: 10px 0;
    width: 300px;
    line-height: 38px;
    position: relative;
}
.flightpc-index-service .flightpc-s2:before {
    content: "";
    position: absolute;
    left: 0;
    top: 15px;
    width: 1px;
    height: 28px;
    background-color: #d1d1d1;
}
.flightpc-index-service .flightpc-s2 i {
    display: inline-block;
    background: url('~@/assets/ticket/ticket_one.png') 0 -90px no-repeat;
    background-size: auto;
    background-position: -60px -90px;
    vertical-align: middle;
    width: 34px;
    height: 34px;
    margin-right: 15px;
}
.flightpc-index-service .flightpc-s3 {
    display: inline-block;
    padding: 10px 0;
    width: 300px;
    position: relative;
}
.flightpc-index-service .flightpc-s3:before {
    content: "";
    position: absolute;
    left: 0;
    top: 15px;
    width: 1px;
    height: 28px;
    background-color: #d1d1d1;
}
.flightpc-index-service .flightpc-s3 i {
    display: inline-block;
    background: url('~@/assets/ticket/ticket_one.png') 0 -90px no-repeat;
    background-position: -120px -90px;
    background-size: auto;
    vertical-align: middle;
    width: 34px;
    height: 34px;
    margin-right: 15px;
}
.flightpc-index-service .flightpc-s3 span {
    display: inline-block;
    vertical-align: middle;
    line-height: 19px;
}
.flightpc-index-service .flightpc-s3 strong {
    color: #ff9d00;
    font-weight: norma;
    font-size: 14px;
    line-height: 16px;
}

.m-title {
    padding: 15px 0;
    margin: 0 20px;
    line-height: 30px;
    font-size: 18px;
}
.m-title .ticket-icon {
    width: 26px;
    background-position: -30px 0;
}
.m-title .ticket-icon {
    height: 24px;
    display: inline-block;
    background: url('~@/assets/ticket/ticket_one.png') -30px 0 no-repeat;
    background-size: auto;
    vertical-align: middle;
    margin-right: 12px;
}
</style>


