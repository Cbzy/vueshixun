<template>
    <div>
        <div class="list">
            <div class="title">


                <h2 style="color:#fb6720;font-weight: normal;font-size:24px;line-height:41px;">
                    本周热销榜
                </h2>
                <h3 style="margin-left: 10px;font-size: 14px;color: #999;line-height:51px;font-weight: normal;">
                    大家都在买
                </h3>
                <div style="width:790px">
                     <a href="#" style="float:right;line-height:51px;font-size: 12px;color: #999;"><i style="width: 14px;height: 14px;display: inline-block;margin-right: 4px;vertical-align: middle;"></i>换一换</a>
                </div>
               
           
           
           </div>
           <div class="content">
               <ul>
                    <li>
                    <div class="cap1">
                        <img src="../../assets/travel/CoUBGV2oOp-AXLpKAAJI2SSazu851.jpeg" alt="">
                    </div>
                                          <!-- <div class="caption">美到窒息的海+海岛控的梦想之地·深圳往返大溪地8天6晚自由行（免费行程路书+咨询可领优惠券+24小时中文服务+全程管家服务+可开免签证明+可安排当地游）</div>  -->

                        <div class="cards">￥34699<i style="font-size:14px;font-style:normal">起</i><i style="float: right;padding-top: 8px;font-size: 12px;color: #666;font-style:normal;line-height:34px">店铺111111</i></div>
                    </li>
                    <li>
                        <div class="cap1"></div>
                    </li>
                    <li>

                    </li>
                    <li>

                    </li>

               </ul>
           </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'WeekHot'
}
</script>
<style scoped>
    .list{
        width: 1000px;
        height: 315px;
        margin:0 auto;
        background: #fff;
        
    }
    .title{
        width: 1000px;
        height: 51px;
        background: #fff;
        display: flex;
        border-bottom: 1px solid #f1f1f1;
        margin-bottom: 15px;
    }
    .title i{
        background: url(../../assets/travel/change.png);
    }

    .content ul{
        display: flex;
    }
    .content li{
        width: 240px;
        height: 234px;
        background: #eee;
        margin: 0 12px 15px 6px;
    }

    .cap1{
        width: 238px;
         height:186px; 
        background-size: 238px 186px;
         overflow: hidden;
    }

    .caption{
        display: flex;
        width: 230px;
        height: 80px;
        background: #fff;
        font-weight: normal;
        color: #000;
        line-height: 21px;
        overflow: hidden;
        padding-bottom: 6px;
        font-size: 14px;
        padding-left: 5px;
        padding-right: 5px;
        padding-top:7px ;
        
         margin-top:140px ; 
    }
    .caption:hover{
        /* margin-top:100px ;
        transition: all .5s; */
    }

    .cards{
        font-size: 22px;
        color: #ff8a00;
        height: 29px;
        line-height: 43px;
    }
</style>
