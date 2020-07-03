<template>
      <div class="FreeTravel">      
            <div class="topNav">
                  <ul>
                        <li><div  class="topNavC"><router-link to="sales" active-class="topNavL">自由行</router-link></div></li>
                        <li><span>|</span></li>
                        <li><div  class="topNavC"><router-link to="teamtravel" active-class="topNavL">跟团游</router-link></div></li>
                        <li><span>|</span></li>                        
                        <li><div  class="topNavC"><router-link to="localdeals" active-class="topNavL">当地游</router-link></div></li>
                        <li><span>|</span></li>
                        <li><div  class="topNavC"><router-link to="visa" active-class="topNavL">签证</router-link></div></li>
                        <li><span>|</span></li>
                        <li><div  class="topNavC"><router-link to="wf" active-class="topNavL">全球WiFi</router-link></div></li>
                        <li><span>|</span></li>
                        <li><div  class="topNavC"><router-link to="liner" active-class="topNavL">邮轮</router-link></div></li>
                  </ul>
            </div>
            <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Travel',
  components:{
  }
}
</script>
<style scoped>
      .topNav{
            height:40px;
            width: 1000px;
            display: flex;
            margin:0 auto;
justify-content:center;
      }

      .topNav ul li{
            float: left;
      }

      .topNav ul {
            width:502px;
      }      
      .topNavC{
            line-height:40px;
            text-align: center;
            height: 40px;
            padding: 0 20px;
            font-size: 14px;

      }
      .topNav ul li span {
            color: #EEE;
            width: 1px;
            height: 37px;
            line-height: 37px;
      }
      .topNavC :hover{
            color:#ff9d00;
      }

      .topNavL{
            color:#ff9d00;
            border-bottom: 3px solid #ff9d00;
            height: 40px;
            padding-bottom:8px;
                       
      }

     .topNavC a{
           color:#666 ;
      }
</style>