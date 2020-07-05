<template>
	<div class="Visa">
    <section class="visa-head">
      <div class="info-left">
        <div class="liDiv">
          <input type="search" placeholder="输入要办理签证的国家或地区名称">
          <a href="#" class="search">
            <i></i>
          </a>
        </div>
        <ul>
          <li><a href="#">美国</a></li>
          <li><a href="#">台湾</a></li>
          <li><a href="#">日本</a></li>
          <li><a href="#">英国</a></li>
          <li><a href="#">泰国</a></li>
          <li><a href="#">新加坡</a></li>
          <li><a href="#">马来西亚</a></li>
          <li><a href="#">更多></a></li>
        </ul>
      </div>
    </section>
    <section class="visa-centent wrapper" v-for="(item,index) in visaList" :key="index" v-if="item.Title == '马蜂窝推荐'">
		<div class="title">
		  <h3>{{item.Title}}</h3>
		</div>
      <ul class="pro-m">
        <li v-for="(cItem,cIndex) in item.Content" :key="cIndex">
          <a href="#">
            <div class="pic">
				<img :src="cItem.Pic" alt="pic">
				<div class="cover">
					<span>{{cItem.Country}}</span>
					<i class="line"></i>
					<span>{{cItem.Mode}}</span>
				</div>
            </div>
            <div class="info">
				<span class="nation">{{cItem.Country}}</span>
				<span class="price">
					<em>¥{{cItem.Price}}</em>起
				</span>
			</div>
          </a>
        </li>
      </ul>
    </section>
	<section class="visa-centent wrapper" v-else-if="item.Title == '热门国家/地区'">
	  <div class="title">
		  <h3>{{item.Title}}</h3>
		  <a href="#" class="flt">查看更多</a>
	  </div>
	  <ul class="pro-r">
	    <li v-for="(cItem,cIndex) in item.Content" :key="cIndex">
	      <a href="#">
	        <div class="pic">
				<img :src="cItem.Pic" alt="pic">
	        </div>
	        <div class="info">
				<span class="nation">{{cItem.Country}}</span>
				<span class="price">
					<em>¥{{cItem.Price}}</em>起
				</span>
			</div>
	      </a>
	    </li>
	  </ul>
	</section>
	<section class="visa-centent wrapper" v-else-if="item.Title == '本周热卖'">
	  <div class="title">
		  <h3>{{item.Title}}</h3>
		  <a href="javaScript:;" @click="changeGroup" class="flt"><i></i>换一组</a>
	  </div>
	  <ul class="pro-b">
	    <li v-for="(cItem,cIndex) in item.Content.slice(start,end)" :key="cIndex">
	      <a href="#">
	        <div class="pic">
				<img :src="cItem.Pic" alt="pic">
				<div class="cover">
					<span>{{cItem.Country}}</span>
				</div>
	        </div>
	        <div class="info">
				<div class="details">
					{{cItem.Details}}
				</div>
				<span class="price">
					<em>¥{{cItem.Price}}</em>起
				</span>
			</div>
	      </a>
	    </li>
	  </ul>
	</section>
	<section class="visa-centent wrapper" v-else>
	  <div class="title">
		  <h3>{{item.Title}}</h3>
	  </div>
	  <ul class="pro-bl">
	    <li v-for="(cItem,cIndex) in item.Content" :key="cIndex">
	      <a href="#">
	        <div class="pic">
				<i class="icon"></i>
				<span><i>{{cItem.cId}}</i>.{{cItem.Procedure}}</span>
	        </div>
	      </a>
	    </li>
	  </ul>
	</section>
    <section class="visa-foot">
		<a href="#">
			<img src="https://css.mafengwo.net/images/sales/ota/banner-alliance3.jpg">
		</a>
    </section>
	</div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'Visa',
    data(){
      return{
        visaList :[],
		start :0,
		end: 4,
      }
    },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get('@/../static/Visa.json').then(response => {
        this.visaList = response.data;
      }, response => {
        console.log("get visaList is error");
      });
    },
	changeGroup(){
		if(this.start == 0){
			this.start = 4;
			this.end = 8;
		}else{
			this.start = 0;
			this.end = 4;
		}
	}
  }
}
</script>
<style scoped>
	*{
	    margin: 0;
	    padding: 0;
	}
	a{
	  text-decoration: none;
	  color: black;
	}
	ul,li{
	    list-style: none;
	}
	input{
	  outline: none;
	}
	html,body{
	    width: 100%;
	    /* height: 100%; */
	    position: relative;
	}

	section.wrapper{
		width: 1000px;
		margin: 0 auto;
	}
	section.visa-head{
		position: relative;
		height: 240px;
		background: url('../../assets/travel/visa/focus1.jpg') no-repeat center top;
	  display: flex;
	  flex-direction: row;
	  justify-content: space-around;
	  align-items: center;
	}
		div.info-left{
	    background-color: rgba(0,0,0,.4);
	    padding: 15px 10px;
	    display: flex;
	    flex-direction: column;
	    justify-content: space-around;
	    border-radius: 4px;
	    text-align: left;
      margin-top: -30px;
	  }
	  div.info-left div.liDiv{
	    display: flex;
	    flex-direction: row;
	    justify-content: space-between;
	    align-content: center;
	    flex-wrap: nowrap;
	  }
	    div.info-left input{
	      font: 14px/1 "微软雅黑";
	      width: 440px;
	      height: 2.875rem;
	      /* margin: 0 6px 0 0; */
	      padding: 0 20px;
	      background-color: #fff;
	      border: 0 none;
	      color: #111;
	      border-radius: 4px;
	      border: none;
	      vertical-align:top;
        margin-right: 6px;
	    }
	    div.info-left a.search{
	      display: inline-block;
	      width: 3.125rem;
	      height: 2.875rem;
		  background-color: #ff9d00;
	      border-radius: 4px;
		    text-align: center;
		    line-height: 2.875rem;
	    }
	    div.info-left a.search i{
	      display: inline-block;
	      width: 24px;
	      height: 24px;
	      text-align: center;
	      background: url('../../assets/travel/visa/header-sprites.png') no-repeat 0 -110px;
	      vertical-align: middle;
	    }
	    div.info-left ul{
	      margin-top: 8px;
	    }
	    div.info-left li{
	      float: left;
	      margin-right: 10px;
	    }
	    div.info-left li a{
	      width: auto;
	      height: auto;
	      color: #fff;
	      font-size: 12px;
	      white-space: nowrap;
	    }
	    div.info-left li a:hover{
	      text-decoration: underline;
	    }

	section.visa-centent{
		margin-top: 17px;
	}
	section.visa-centent div.title{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-bottom: 1px solid #e8e8e8;
	}
		div.title a.flt{
			color: #666;
			font: 12px/1 "微软雅黑";
			margin-top: 30px;
		}
    div.title a.flt i{
			width: 14px;
      height: 14px;
      background: url(../../assets/travel/visa/change.png);
      display: inline-block;
      margin-right: 4px;
      vertical-align: middle;
		}
	section.visa-centent h3{
		font-size: 24px;
		font-weight: normal;
		color: #666;
		line-height: 52px;
	}
	section.visa-centent ul{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 15px;
		margin-bottom: 27px;
	}
	section.visa-centent ul li{
	}
		ul li a{

		}
		ul a{

		}
		div.pic{
			width: 314px;
			height: 180px;
			overflow: hidden;
			position: relative;
		}
		div.pic img{
			width: 100%;
			height: 100%;
			display: block;
		}
		div.pic div.cover{
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-content: center;
			text-align: center;
			background-color: rgba(0,0,0,.25);
		}
			div.cover span{
				font: 24px/50px "微软雅黑";
				color: white;
			}
			div.cover i.line{
				position: relative;
				width: 30%;
				height: 3px;
				background-color: white;
				border-radius: 3px;
				display: inline-block;
				margin: 0 auto;
			}
			div.cover i.line::after,div.cover i.line::before{
				content: "";
				position: absolute;
				display: inline-block;
				width: 3px;
				height: 3px;
				border-radius: 3px;
				background-color: white;
			}
			div.cover i.line::after{
				content: "";
				left: -7px;
			}
			div.cover i.line::before{
				content: "";
				right: -7px;
			}
		div.info{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-content: center;
			background-color: white;
			padding: 0 9px;
			border: 1px solid #f1f1f1;
			border-top: none;
		}
		div.info span{
			font: 20px/44px "微软雅黑";
		}
		div.info span.nation{
			color: black;
		}
		div.info span.price{
			font-size: 14px;
			color: #999;
		}
		div.info span.price em{
			font: 20px/44px "微软雅黑";
			color: #ff9d00;
		}
	ul.pro-r li{
		width: 25%;
	}
	ul.pro-r a{
		height: 67px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-content: center;
		padding: 14px;
		margin: 0 20px 10px 0;
	}
	ul.pro-r a:hover span.nation{
		color: #ff9d00;
	}
	ul.pro-r div.pic{
		width: 100px;
		height: 67px;
	}
	ul.pro-r div.info{
		display: flex;
		flex-direction: column;
		border: none;
	}
		ul.pro-r div.info span{
			line-height: 1;
			font-size: 16px;
			white-space: nowrap;
		}

	ul.pro-b li{
		width: 235px;
		height: 229px;
		position: relative;
	}
	ul.pro-b a{
		width: 235px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
	}
	ul.pro-b a:hover span.nation{
		color: #ff9d00;
	}
	ul.pro-b div.pic{
		width: 235px;
		height: 132px;
		position: relative;
	}
		ul.pro-b div.pic div.cover{
			text-align: left;
			top: auto;
			height: 34px;
			background: rgba(0,0,0,0.5);
		}
			ul.pro-b span{
				line-height: 34px;
				color: #fff;
				font-size: 18px;
			}
			ul.pro-b span::before{
				content: '';
				width: 16px;
				height: 21px;
				background: url(../../assets/travel/visa/address.png) no-repeat;
				display: inline-block;
				vertical-align: text-bottom;
				margin: 0 5px 0 10px;
			}
	ul.pro-b div.info{
		border: 1px solid #f1f1f1;
		border-top: 0;
		padding: 0 8px 5px 8px;
		height: 91px;
		text-align: right;
		overflow: hidden;
		position: absolute;
		bottom: 0;
		transition: height .2s;
		background-color: #fff;
		display: block;
		box-sizing: border-box;
		
	}
		ul.pro-b div.details{
			background-color: white;
			text-align: left;
			font: 14px/22px '微软雅黑';
			color: #000;
			font-weight: normal;
			padding: 6px 0;
			height: 40px;
			overflow: hidden;
			transition: height .2s;
		}
		ul.pro-b a:hover div.info{
			height: 131px;
			background-color: white;
		}
		ul.pro-b a:hover div.details{
			height: 80px;
		}
		ul.pro-b div.info span{
			line-height: 1;
			font-size: 16px;
			white-space: nowrap;
		}
	ul.pro-bl{
		
	}
	ul.pro-bl li{
		width: 16.66%;
		height: 86px;
	}
	ul.pro-bl div.pic{
		width: 100%;
		height: 86px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	ul.pro-bl i.icon{
		display: inline-block;
		width: 39px;
		height: 37px;
	}
	ul.pro-bl li:nth-of-type(1) i.icon{
		background: url(../../assets/travel/visa/icon_sprites.png) no-repeat 0 0;
	}
	ul.pro-bl li:nth-of-type(2) i.icon{
		background: url(../../assets/travel/visa/icon_sprites.png) no-repeat -40px 0;
	}
	ul.pro-bl li:nth-of-type(3) i.icon{
		background: url(../../assets/travel/visa/icon_sprites.png) no-repeat -80px 0;
	}
	ul.pro-bl li:nth-of-type(4) i.icon{
		background: url(../../assets/travel/visa/icon_sprites.png) no-repeat -120px 0;
	}
	ul.pro-bl li:nth-of-type(5) i.icon{
		background: url(../../assets/travel/visa/icon_sprites.png) no-repeat -160px 0;
	}
	ul.pro-bl li:nth-of-type(6) i.icon{
		background: url(../../assets/travel/visa/icon_sprites.png) no-repeat -200px 0;
	}
	ul.pro-bl span{
		color: #666;
		font: 14px/46px '微软雅黑';
	}
	
	section.visa-foot{
		width: 100%;
	}
	section.visa-foot a{
		display: block;
	}
	section.visa-foot img{
		display: block;
		width: 100%;
	}
</style>
