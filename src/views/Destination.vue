<template>
  <div class="Destination">
    <div class="shade">
      <div class="place-focus"><!-- 头部 -->
        <a href="#" class="show-info-top">
          <div class="show-info-top">
            <div class="info-left">
              <p>Don't fear the unknown</p>
              <div class="liDiv">
                <input type="search" placeholder="我想去">
                <a href="#" class="search">
                  <i></i>
                </a>
              </div>
              <ul>
                <li><a href="#">成都</a></li>
                <li><a href="#">婺源</a></li>
                <li><a href="#">厦门</a></li>
                <li><a href="#">青岛</a></li>
                <li><a href="#">巴厘岛</a></li>
              </ul>
            </div>
            <div class="info-right">
              <a href="#" class="irTitle">
                <h2>神仙海岛的三款热门玩法，去普吉一定不能错过</h2>
              </a>
              <p>{{infoData}}</p>
              <a href="#" class="readAll">阅读全文</a>
            </div>
          </div>
        </a>
        <a href="#des-content" class="show-info-bottom">
          <div class="show-info-bottom">
            <i class="chevron-down"></i>
          </div>
        </a>
        <div class="show-ft">
          <div class="pic-from">
            <div class="pic-from-pop">
              <div>灰姑娘 的作品<span></span></div>
            </div>
            <i></i>
          </div>
          <div class="pic-time">
            <a href="#" class="show-icon-calendar" title="过目不忘">30</a>
          </div>
          <div class="pic-share">
            <a href="#" class="btn-share">
              <i></i>分享
            </a>
            <div class="pop-share">
              <a href="#"><i></i></a>
              <a href="#"><i></i></a>
              <a href="#"><i></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>

<!--
    热门目的地
 -->
    <section id="des-content" class="content">
      <div class="row-hot row">
        <h2>热门目的地</h2>
        <div>
          <div class="r-navbar">
            <div class="rn" v-for="(item,index) in hotList" :key="index">
              <p :class="{on:index==hotMouseOn}" v-on:mouseenter="hotChangActive(index)">{{item.State}}</p>
              <span>|</span>
            </div>
          </div>
          <div class="r-content" v-for="(item,index) in hotList" :key="index">
            <dl v-for="(pItem,pIndex) in item.Country" :key="pIndex" v-if="item.Id===hotMouseOn + 1">
              <dt v-if="pItem.Province=='直辖市'" :style="{textDecoration:(pItem.Province=='直辖市'?'none':'underline')}">
                {{pItem.Province}}
              </dt>
              <dt v-else>
                <a href="#">{{pItem.Province}}</a>
              </dt>
              <dd>
                <a href="#" v-for="(cItem,cIndex) in pItem.pvc" :key="cIndex">{{cItem.city}}</a>
              </dd>
            </dl>
          </div>
		    </div>
      </div>
    </section>
<!--
    当季推荐
 -->
    <section class="content">
      <div class="row-season row">
        <h2>当季推荐</h2>
        <div>
          <div class="r-navbar">
            <div class="rn" v-for="(item,index) in recommendList" :key="index">
              <p :class="{on:index==recommendMouseOn}" v-on:mouseenter="recommendChangActive(index)">{{item.Month}}</p>
              <span>|</span>
            </div>
          </div>
          <div class="r-content" v-for="(item,index) in recommendList" :key="index">
            <div class="tiles" v-for="(rItem,rIndex) in item.Recommend" :key="rIndex" v-if="item.Id===recommendMouseOn + 1">
              <div class="item" :class="{col3 : rItem.rId == 1|rItem.rId == 2|rItem.rId == 3,col6 : rItem.rId == 4|rItem.rId == 5|rItem.rId == 6}" v-if="rItem.rId != 7">
                <a href="#">
                  <img :src="rItem.cityImg" alt="recomment">
                  <div class="title">{{rItem.City}}</div>
                </a>
              </div>
              <div class="item col7" v-else>
                <a href="#">
                  <img :src="rItem.cityImg" alt="recomment">
                  <div class="title">{{rItem.City}}</div>
                  <div class="more">
                    <span>更多<i></i></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

<!--
    主题推荐
 -->
    <section class="content">
      <div class="row-theme row">
          <h2>主题推荐</h2>
          <div>
            <div class="r-navbar">
              <div class="rn" v-for="(item,index) in themeList" :key="index">
                <p :class="{on:index==themeMouseOn}" v-on:mouseenter="themeChangActive(index)">{{item.Condition}}</p>
                <span>|</span>
              </div>
            </div>
            <div class="r-content" v-for="(item,index) in themeList" :key="index">
              <div class="tiles" v-for="(rItem,rIndex) in item.Theme" :key="rIndex" v-if="item.Id===themeMouseOn + 1">
                <div class="item">
                  <a href="#">
                    <img :src="rItem.titleImg" alt="recomment">
                    <div class="title">{{rItem.Title}}</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>

<!--
    全球目的地
 -->
    <section class="content">
      <div class="row-global row">
        <div class="hd">
          <h2>
			  全球目的地
			  <span>（按拼音首字母排序）</span>
			  <a href="#">
			    <strong>+</strong>
			    <span>添加目的地</span>
			  </a>
		  </h2>

        </div>
        <div>
          <div class="r-navbar">
			<div class="bd">
				<div class="item" v-for="(item,index) in globalDestinationsList" :key="index">
					<h3>{{item.State}}</h3>
					<div class="clearfix">
						<ul>
							<li v-for="(tItem,tIndex) in item.Theme" :key="tIndex">
								<h4>{{tItem.Initials}}</h4>
								<div class="cfLiDiv">
									<a href="#" v-for="(lItem,lIndex) in tItem.letterData" :key="lIndex">
										{{lItem.chineseName}}
										<span class="englishName">
											{{lItem.englishName}}
										</span>
										<i v-if="lItem.Icon == 'hot'" class="icon-hot"></i>
										<a v-if="lItem.Icon == 'Texas'" class="icon-texas">德克萨斯</a>
										<a v-if="lItem.Icon == 'China'" class="icon-china"></a>
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
          </div>
		</div>
      </div>
    </section>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Destination',
  data(){
    return{
      infoData:'关于泰国普吉岛，这个多面风情的岛屿，常年位于境外旅游热搜榜前列，第一次去的人，容易被它的热带海岛风情和高性价比吸引到想再二刷；第N次去的人，更是因为每次都能发现普吉的新玩法，让人想再多宠幸一遍。',
      hotList: [],
      recommendList: [],
      themeList: [],
	  globalDestinationsList: [],
	  hotMouseOn: 0,
	  recommendMouseOn: 0,
	  themeMouseOn: 0,

    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get('@/../static/Hot.json').then(response => {
        this.hotList = response.data;
      }, response => {
        console.log("get hotList is error");
      });
      axios.get('../../static/Recommend.json').then(response => {
        this.recommendList = response.data;
      }, response => {
        console.log("get recommendList is error");
      });
	  axios.get('../../static/Theme.json').then(response => {
	    this.themeList = response.data;
	  }, response => {
	    console.log("get themeList is error");
	  });
	  axios.get('../../static/GlobalDestinations.json').then(response => {
		  this.globalDestinationsList = response.data;
    }, response => {
      console.log("get globalDestinationsList is error");
    });
    },
	hotChangActive(index){
		this.hotMouseOn = index;
	},
	recommendChangActive(index){
		this.recommendMouseOn = index;
	},
	themeChangActive(index){
		this.themeMouseOn = index;
	},

  }
}
</script>

<style scoped>
  @import url(../css/Destination.css);
</style>
