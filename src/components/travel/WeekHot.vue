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
                    <li v-for="(item,index) in WeekHot" :key="index" >
                    <div class="cap1">
                        <img :src="item.img" alt="" width="238px" height="134px">
                    </div>
                    <div class="caption">{{item.main}}</div>

                        <div class="cards">￥{{item.money}}<i style="font-size:14px;font-style:normal">起</i><i style="padding-left:58px;float: right;padding-top: 8px;font-size: 12px;color: #666;font-style:normal;line-height:34px">店铺:{{item.shop}}</i></div>
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
        <div class="list">
            <div class="title">


                <h2 style="color:#fb6720;font-weight: normal;font-size:24px;line-height:41px;">
                    休闲去哪儿
                </h2>
                <h3 style="margin-left: 10px;font-size: 14px;color: #999;line-height:51px;font-weight: normal;">
                   
                </h3>
                <div style="width:790px">
                     <a href="#" style="float:right;line-height:51px;font-size: 12px;color: #999;"><i style="width: 14px;height: 14px;display: inline-block;margin-right: 4px;vertical-align: middle;"></i>换一换</a>
                </div>
               
           
           
           </div>
           <div class="content">
               <ul>
                    <li v-for="(item,index) in Where" :key="index" >
                    <div class="cap1">
                        <img :src="item.img" alt="" width="238px" height="134px">
                    </div>
                    <div class="caption">{{item.main}}</div>

                        <div class="cards">￥{{item.money}}<i style="font-size:14px;font-style:normal">起</i><i style="padding-left:58px;float: right;padding-top: 8px;font-size: 12px;color: #666;font-style:normal;line-height:34px">店铺:{{item.shop}}</i></div>
                    </li>
               </ul>
           </div>
          
           
        </div>
        <div class="list">
            <div class="title">


                <h2 style="color:#fb6720;font-weight: normal;font-size:24px;line-height:41px;">
                    和你去看海
                </h2>
                <h3 style="margin-left: 10px;font-size: 14px;color: #999;line-height:51px;font-weight: normal;">
                   
                </h3>
                <div style="width:790px">
                     <a href="#" style="float:right;line-height:51px;font-size: 12px;color: #999;"><i style="width: 14px;height: 14px;display: inline-block;margin-right: 4px;vertical-align: middle;"></i>换一换</a>
                </div>
               
           
           
           </div>
           <div class="content">
               <ul>
                    <li v-for="(item,index) in Sea" :key="index" >
                    <div class="cap1">
                        <img :src="item.img" alt="" width="238px" height="134px">
                    </div>
                    <div class="caption">{{item.main}}</div>

                        <div class="cards">￥{{item.money}}<i style="font-size:14px;font-style:normal">起</i><i style="padding-left:58px;float: right;padding-top: 8px;font-size: 12px;color: #666;font-style:normal;line-height:34px">店铺:{{item.shop}}</i></div>
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
        <div class="list">
            <div class="title">


                <h2 style="color:#fb6720;font-weight: normal;font-size:24px;line-height:41px;">
                    邮轮度假
                </h2>
                <h3 style="margin-left: 10px;font-size: 14px;color: #999;line-height:51px;font-weight: normal;">
                   
                </h3>
                <div style="width:790px">
                     <a href="#" style="float:right;line-height:51px;font-size: 12px;color: #999;"><i style="width: 14px;height: 14px;display: inline-block;margin-right: 4px;vertical-align: middle;"></i>换一换</a>
                </div>
               
           
           
           </div>
           <div class="content">
               <ul>
                    <li v-for="(item,index) in Liner" :key="index" >
                    <div class="cap1">
                        <img :src="item.img" alt="" width="238px" height="134px">
                    </div>
                    <div class="caption">{{item.main}}</div>

                        <div class="cards">￥{{item.money}}<i style="font-size:14px;font-style:normal">起</i><i style="padding-left:58px;float: right;padding-top: 8px;font-size: 12px;color: #666;font-style:normal;line-height:34px">店铺:{{item.shop}}</i></div>
                    </li>

               </ul>
           </div>
          
           
        </div>
        <div class="list">
            <div class="title">


                <h2 style="color:#fb6720;font-weight: normal;font-size:24px;line-height:41px;">
                    扫货圣地
                </h2>
                <h3 style="margin-left: 10px;font-size: 14px;color: #999;line-height:51px;font-weight: normal;">
                   
                </h3>
                <div style="width:790px">
                     <a href="#" style="float:right;line-height:51px;font-size: 12px;color: #999;"><i style="width: 14px;height: 14px;display: inline-block;margin-right: 4px;vertical-align: middle;"></i>换一换</a>
                </div>
               
           
           
           </div>
           <div class="content">
               <ul>
                    <li v-for="(item,index) in Shop" :key="index" >
                    <div class="cap1">
                        <img :src="item.img" alt="" width="238px" height="134px">
                    </div>
                    <div class="caption">{{item.main}}</div>

                        <div class="cards">￥{{item.money}}<i style="font-size:14px;font-style:normal">起</i><i style="padding-left:58px;float: right;padding-top: 8px;font-size: 12px;color: #666;font-style:normal;line-height:34px">店铺:{{item.shop}}</i></div>
                    </li>

               </ul>
           </div>
          
           
        </div>
         

         <!-- 第二种列表 -->
        <div class="row">
            <div class="row-title">
                <h2 style="color:#45bd9e;font-weight: normal;font-size:24px;line-height:41px;width:170px">
                    主题推荐
                </h2>
                <ul class="bar">
                    <li>海岛特惠</li>
                    <li>亲子同行</li>
                    <li>吃货聚集地</li>
                </ul>
            </div>  
            <div class="bn-side">
                <img src="https://b1-q.mafengwo.net/s9/M00/6B/86/wKgBs1byYsOAREbHAAJa5lj0Ouk15.jpeg?imageMogr2%2Fthumbnail%2F%21308x482r%2Fgravity%2FCenter%2Fcrop%2F%21308x482%2Fquality%2F100" width="154px" height="241px">
            </div>
            <ul class="item">
               <!-- <li v-for="(item,index) in Shop" :key="index" >
                    <div class="cap1">
                        <img :src="item.img" alt="" width="238px" height="134px">
                    </div>
                    <div class="caption">{{item.main}}</div>

                        <div class="cards">￥{{item.money}}<i style="font-size:14px;font-style:normal">起</i><i style="padding-left:58px;float: right;padding-top: 8px;font-size: 12px;color: #666;font-style:normal;line-height:34px">店铺:{{item.shop}}</i></div>
                    </li> -->
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'WeekHot',
    data(){
      return{
        WeekHot :[],
        Where:[],
        Sea:[],
        Liner:[],
        Shop:[]
      }
    },
    mounted() {
    this.getData();
    this.getData2();
    this.getData3();
    this.getData4();
    this.getData5();

  },
  methods: {
    getData() {
      axios.get('../../../static/WeekHot.json').then(response => {
        this.WeekHot = response.data;
      }, response => {
        console.log("get weekHot is error");
      });
    },
    getData2() {
      axios.get('../../../static/Where.json').then(response => {
        this.Where = response.data;
      }, response => {
        console.log("get Where is error");
      });
    },
        getData3() {
      axios.get('../../../static/Sea.json').then(response => {
        this.Sea = response.data;
      }, response => {
        console.log("get Sea is error");
      });
    },
        getData4() {
      axios.get('../../../static/Liner.json').then(response => {
        this.Liner = response.data;
      }, response => {
        console.log("get Liner is error");
      });
    },
        getData5() {
      axios.get('../../../static/Shop.json').then(response => {
        this.Shop = response.data;
      }, response => {
        console.log("get Shop is error");
      });
    }
}
}
</script>
<style scoped>
@import url(../../css/WeekHot.css);

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
        background: #fff;
        margin: 0 12px 15px 6px;
        position:relative;
    }

    .cap1{
        width: 238px;
         height:134px; 
        background-size: 238px 186px;
         overflow: hidden;
    }

    .caption{
        top:148px;
        display: flex;
        width: 234px;
        height: 40px;
        background: #fff;
        font-weight: normal;
        color: #000;
        line-height: 21px;
        overflow: hidden;
        padding-bottom: 6px;
        font-size: 14px;
        position:absolute;
        padding-left: 4px;
        /* padding-left: 5px;
        padding-right: 5px;
        padding-top:7px ;
        
         margin-top:140px ;  */
    }
    .caption:hover{
        top:102px;
        height: 80px;
        transition: all .5s;
    }

    .cards{
        position:absolute;
         top:190px;
        font-size: 22px;
        color: #ff8a00;
        height: 29px;
        line-height: 43px;

    }

</style>