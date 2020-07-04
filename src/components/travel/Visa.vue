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
    <section class="visa-centent wrapper" v-for="(item,index) in visaList" :key="index">
      <h3>{{item.Title}}</h3>
      <ul>
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
    <section class="visa-foot wrapper">

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
	section.visa-centent h3{
		font-size: 24px;
		font-weight: normal;
		color: #666;
		line-height: 52px;
		border-bottom: 1px solid #e8e8e8;
	}
	section.visa-centent ul{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 15px;
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
			div.cover i{
				position: relative;
				width: 30%;
				height: 3px;
				background-color: white;
				border-radius: 3px;
				display: inline-block;
				margin: 0 auto;
			}
			div.cover i::after,div.cover i::before{
				content: "";
				position: absolute;
				display: inline-block;
				width: 3px;
				height: 3px;
				border-radius: 3px;
				background-color: white;
			}
			div.cover i::after{
				content: "";
				left: -7px;
			}
			div.cover i::before{
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
</style>
