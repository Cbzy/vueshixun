<template>
      <div class="FreeTravel">      
            <div class="topNav">
                  <ul>
                        <li><div  class="topNavC"><router-link to="Travel"  active-class="topNavL">自由行</router-link></div></li>
                        <li><span>|</span></li>
                        <li><div  class="topNavC">跟团游</div></li>
                        <li><span>|</span></li>                        
                        <li><div  class="topNavC">当地游</div></li>
                        <li><span>|</span></li>
                        <li><div  class="topNavC">签证</div></li>
                        <li><span>|</span></li>
                        <li><div  class="topNavC">全球WiFi</div></li>
                        <li><span>|</span></li>
                        <li><div  class="topNavC">邮轮</div></li>
                  </ul>
            </div>
            <SalesM></SalesM>
            <TeamTravelM></TeamTravelM>
  </div>
</template>

<script>
import SalesM from '@/components/Sales'
import TeamTravelM from '@/components/TeamTravel'
export default {
  name: 'Travel',
  components:{
        SalesM,
        TeamTravelM
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
            height: 37px;
            padding: 0 20px;
            font-size: 14px;
            color: #666;
      }
      .topNav ul li span {
            color: #EEE;
            width: 1px;
            height: 37px;
            line-height: 37px;
      }

      .topNavC:hover{
            color:#ff9d00;
      }

      .topNavL{
            border-bottom: 3px solid #ff9d00
      }
      /* style="color:#ff9d00;border-bottom: 3px solid #ff9d00" */
</style>