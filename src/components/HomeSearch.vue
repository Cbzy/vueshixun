<template>
<div class="search-container">
     <div class="search-group homeSearch" >
        
          <div class="searchtab">
            <ul class="clearfix">
              <li class="tab-selected">
                <router-link to="homeAll">
                <i></i>
                全部
                </router-link>
              </li>
              <li class="">
                <router-link to="">
                <i></i>
                酒店
                </router-link>
              </li>
              <li class="">
                <router-link to="">
                <i></i>
                目的地
                </router-link>
              </li>
              <li class="">
                <router-link to="">
                <i></i>
                去旅行
                </router-link>
              </li>
              <li class="">
                <router-link to="">
                <i></i>
                机票
                </router-link>
              </li>
            </ul>
          </div>
           <div class="searchbar">
          
        </div>
        </div>
        </div>
</template>
<script>
export default {
    name:'HomeSearch'
}
</script>
<style scoped>
@import url("../css/home.css");
@import url("../css/app.css");
</style>