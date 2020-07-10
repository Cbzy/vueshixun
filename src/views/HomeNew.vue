<template>
  <div class="homeNew" style="display:block" id="homeNew">
    <div class="tn-list">
      <div class="tn-item clearfix" v-for="(item,index) in NewList.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index">
        <div class="tn-image">
          <a href="#">
            <img :src="item.img" alt />
          </a>
        </div>
        <div class="tn-wrapper">
          <dl>
            <dt>
              <a href="#"  class="tn-from-app" v-show="item.app==1">
                <i></i>
                APP
                <img
                  src="//b2-q.mafengwo.net/s12/M00/6E/DD/wKgED1uu232AMKEvAAAz-ljBM0k929.png"
                  alt
                />
              </a>
              <a href="#">{{item.title}}</a>
            </dt>
            <dd>
              <a href="#">{{item.content}}</a>
            </dd>
          </dl>
          <div class="tn-extra">
            <span class="tn-ding">
              <a href="#" class="btn-ding"></a>
              <em>{{item.ding}}</em>
            </span>
            <span class="tn-place">
              <i></i>
              <a href="#">{{item.city}}</a>
              , by
            </span>
            <span class="tn-user">
              <a href="#">
                <img :src="item.head" alt />
                {{item.name}}
              </a>
            </span>
            <span class="tn-nums">
              <i></i>
              {{item.num}}
            </span>
          </div>
        </div>
      </div>

      <div class="m-pagination">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10,20,30]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="NewList.length"
        >
          <!-- <span class="count">共53057页/636674条</span>
          <span class="pg-current">1</span>
          <a href="#" class="pi">2</a>
          <a href="#" class="pi">3</a>
          <a href="#" class="pi">4</a>
          <a href="#" class="pi">5</a>
          <a href="#" class="pg-next">下一页>></a>-->
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import backtop from "@/components/pagination";
export default {
  name: "HomeNew",

  methods: {
      handleSizeChange:function(size){
          this.pagesize=size;
          console.log(this.pagesize)
      },
      handleCurrentChange:function(currentPage){
          this.currentPage =currentPage;
          console.log(this.currentPage)
      },
      
    getData() {
      this.$axios.get("../../static/New.json").then(
        response => {
          this.NewList = response.data;
        },
        response => {
          console.log("get NewList is error");
        }
      );
    }
  },
  data() {
    return {
      currentPage:1,
      pagesize:10,
      NewList: [],
     
      isShow:true
    };
  },
  mounted() {
    this.getData();
  }
};
</script>
<style scoped>
@import url("../css/home.css");
@import url("../css/app.css");

</style>