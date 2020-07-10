<template>
    <div class="homeAll">
        <div class="search-wrapper">
            <div class="search-input">
                <input type="text" placeholder="搜目的地/攻略/酒店/旅行特价">
            </div>
        </div>
        <div class="search-button">
            <a href="#">
                <i class="icon-search"></i>
            </a>
        </div>
  </div>
</template>
<script>
export default {
    name:'HomeAll'
}
</script>
<style scoped>
    .homeAll{
        overflow: hidden;
        height: 36px;
    }
    .search-wrapper{
        height: 36px;
        width: 474px;
    }
    .search-input input{
        height: 36px;
        width: 444px;
        padding: 0 10px 0 20px;
        font-size: 14px;
        line-height: 36px;
        border: 0 none;
        color: #666;
        border-radius: 4px;
        float: left;
    }
    .search-button{
        margin-left: 4px;
        float: left;
        width: 40px;
        height: 36px;
    }
    .search-button a{
        height: 36px;
        display: block;
        background-color: #ff9d00;
        border-radius: 4px;
        text-align: center;

    }
    .icon-search{
        margin-top: 6px;
        display: inline-block;
        width: 24px;
        height: 24px;
        background-image: url(../img/home/header-sprites13.png);
        background-position: 0 -110px!important;
        overflow: hidden;
        vertical-align: top;
    }
</style>