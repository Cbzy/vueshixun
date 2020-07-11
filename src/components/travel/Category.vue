<template>
    <div class="category" @mouseleave="leave()">
        <div class="change">
            <ul>
                <li class="change-title" :style="active" v-for="(item,index) in Category" :key="index" @mouseenter="enter(index)">
                    <i  :class='item.style' ></i><h3 style="font-size:16px;color:#333;font-weight: normal;">{{item.name}}</h3><i class="logo3"></i>
                    <a href="" v-for="(item1,index1) in item.show" :key="index1">{{item1.city}}</a>
                </li>

            </ul>
            <ul>
                <li v-for="(item3,index3) in City" :key="index3" >
            <div class="change-bar" :class=" item3.style"  v-show="index3===num" >
              
            </div>
                    </li>
            </ul>


        </div>
                    <div class="ban">
                        
            </div>
        <div class="safeguard">
            <ul>
                <li class="icon1">
                    <div class="icon11"></div>&nbsp;&nbsp;
                    <strong style="color:#333; margin-bottom:2px;line-height: 20px;">透明低价</strong><br>
                   &nbsp;&nbsp;超值低价，每日更新
                </li>
               <li class="icon1">
                    <div class="icon22"></div>&nbsp;&nbsp;
                    <strong style="color:#333; margin-bottom:2px;line-height: 20px;">透明低价</strong><br>
                   &nbsp;&nbsp;超值低价，每日更新
                </li>
                <li class="icon1">
                    <div class="icon33"></div>&nbsp;&nbsp;
                    <strong style="color:#333; margin-bottom:2px;line-height: 20px;">透明低价</strong><br>
                   &nbsp;&nbsp;超值低价，每日更新
                </li>
            </ul>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'Category',
    data(){
        return {
            Category :[],
            City:[],
            num:'',
            active:'',

        }
    },
    mounted() {
    this.getData();
    this.getData2();
    console.log(this.Category);
     console.log(this.City);
     console.log(this.num);

    },
     methods: {
         enter(index){
             this.num = index;
             this.active = ''
         },
         leave(){
              this.num =false;
               this.active = ''
         },

    getData() {
      axios.get('../../../static/Category.json').then(response => {
        this.Category = response.data;
      }, response => {
      });
    },
        getData2() {
      axios.get('../../../static/City.json').then(response => {
        this.City = response.data;
      }, response => {
      });
    },}
}
</script>
<style scoped>
    .change-bar{
        width:740px;
        height: 476px;
        position: relative;
        background:#fff;
        top: -481px;
        left: 257px;
        border-right: 2px solid #ff9d00;
        border-bottom: 2px solid #ff9d00;
        border-top: 2px solid #ff9d00;

        overflow: hidden;
        z-index:0;
    }
    .change-bar-bg1{
        background: url(../../assets/travel/1.jpg) no-repeat;
    }
    .change-bar-bg2{
        background: url(../../assets/travel/2.jpg) no-repeat;
    }
        .change-bar-bg3{
        background: url(../../assets/travel/3.jpg) no-repeat;
    }
        .change-bar-bg4{
        background: url(../../assets/travel/4.jpg) no-repeat;
    }
        .change-bar-bg5{
        background: url(../../assets/travel/5.jpg) no-repeat;
    }
        .change-bar-bg6{
        background: url(../../assets/travel/6.jpg) no-repeat;
    }
        .change-bar-bg7{
        background: url(../../assets/travel/7.jpg) no-repeat;
    }

    .change-title a{
        margin-right: 6px;
        color: #666;
        white-space: nowrap;
        font-size:12px;
    }
    .change-title:hover{
        
        /* margin-left: 2px;
        padding-left:17px; */
        transition: all .2s;
        width:248px;
        border-bottom: 2px solid #ff9d00;
        border-top: 2px solid #ff9d00;  
        border-right: 2px solid #ff9d00;
        
    }
    .change-title a:hover{
        color:#ff9d00;
        text-decoration: underline;
        
    }
    .change-title{
        padding-left:12px;
        padding-top:11px;
        width:246px;
        height: 56px;
        border-bottom: 1px solid #f1f1f1;
         border-right: 2px solid #ff9d00; 

        
    }
    .logo3{
    margin-right:16px;  
    float: right;
     width: 8px;
    height: 14px;
    background: url(../../assets/travel/sprites3.png) no-repeat -30px 0;

    }
    .logo2{
    margin-top:2px;
    float: left;
    margin-right: 4px;
    width: 30px;
    height: 30px;
    background: url(../../assets/travel/logo.png) no-repeat 0 0;
    }
    .logo21{
    margin-top:2px;
    float: left;
    margin-right: 4px;
    width: 30px;
    height: 30px;
    background:url(../../assets/travel/logo.png) no-repeat 0 -28px;
    }
    .logo22{
    margin-top:2px;
    float: left;
    margin-right: 4px;
    width: 30px;
    height: 30px;
    background: url(../../assets/travel/logo.png) no-repeat 0 -56px;
    }
    .logo23{
    margin-top:2px;
    float: left;
    margin-right: 4px;
    width: 30px;
    height: 30px;
    background: url(../../assets/travel/logo.png) no-repeat 0 -88px;
    }
    .logo24{
    margin-top:2px;
    float: left;
    margin-right: 4px;
    width: 30px;
    height: 30px;
    background: url(../../assets/travel/logo.png) no-repeat 0 -122px;
    }
    .logo25{
    margin-top:2px;
    float: left;
    margin-right: 4px;
    width: 30px;
    height: 30px;
    background: url(../../assets/travel/logo.png) no-repeat 0 -150px;
    }
    .logo26{
    margin-top:2px;
    float: left;
    margin-right: 4px;
    width: 30px;
    height: 30px;
    background: url(../../assets/travel/logo.png) no-repeat 0 -178px;
    }
    .category{
        background-color: #fff;
        width:1000px;
        height: 480px;
        margin: 0 auto;
        margin-top:-2px;
        margin-bottom: 40px;
    }
    .change{
        width:260px;
        height: 476px;
        border-left: 2px solid #ff9d00;
        border-top: 2px solid #ff9d00;
        border-bottom: 2px solid #ff9d00;
        background-color: #fff;
        float: left;

    }
    .ban{
        
        width:730px;
        height: 405px;
        float: right;
        background: url(../../assets/travel/ban.jpg) no-repeat;
    }
    .safeguard{
        width:730px;
        height: 44px;
        background: #fff;
        float:right;
        margin-top:20px;
    }

    .safeguard ul li{
        float: left;
        width: 180px;
        height: 40px;
        
        margin-left: 26px;
        margin-right: 36px;
    }

    .icon1{
        font-size:12px;
        width: 180px;
        height: 40px;
        float: right;
        color: #999;
        
    }

    .icon11{
        float: left;
        width:36px;
        height: 36px;
        background: url(../../assets/travel/logo.png) no-repeat -30px 0px;

    }

        .icon22{
        float: left;
        width:36px;
        height: 36px;
        background: url(../../assets/travel/logo.png) no-repeat -30px -40px;

    }
        .icon33{
        float: left;
        width:36px;
        height: 36px;
        background: url(../../assets/travel/logo.png) no-repeat -30px -80px;

    }
    
</style>