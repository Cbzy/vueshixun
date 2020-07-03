<template>
    <div>
        <div class="select">
            <div class="logo logo2"></div><a >自由行</a>
            <div class="search-panel">
                <div class="trigger">
                    <span>天津</span>出发
                </div>
                <div class="go go2"></div>
                <input type=text placeholder="请输入目的地/产品名称"  style="width:404px;margin-left:6px;outline: none;border:none;border-radius: 2px;font-size:16px;padding-left:5px; ">
                <div class="found"></div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'Select'
}
</script>
<style scoped>
    .found{
        width: 23px;
        height: 23px;
        margin-left: 30px;
        margin-top: 3px;
        background:url(../../assets/travel/logo.png) no-repeat -70px -60px;
    }
    .select{
        width:1000px;
        height: 70px;
        margin: 0 auto;

        display:flex;
        line-height:70px;
        
    }
    .logo{
        margin-top:15px;
        margin-right:10px;
        width:28px;
        height: 32px;
        background:url(../../assets/travel/logo.png) no-repeat 0 0;
    }

    .logo2{
        background-position: -70px 0;
    }
    .select a{
        font-size:24px;
        color: #333;
        margin-right:75px;
    }
    .search-panel{
        margin-top:15px;
        width: 640px;
        height: 30px;
        background-color: #ff9d00;
        border-radius: 3px;
        padding: 5px;
        display: flex;
    }

    .trigger{
 
        height: 30px;
        line-height:30px;
        padding:0 8px;
        font-size:12px;
        color: #333;
        background-color: #fff;
        width: 100px;
        border-radius: 2px;
    }

    .trigger span{
        font-size:16px;
        margin-right:5px;
        font-weight:normal;
    }

    .go{
        background:url(../../assets/travel/logo.png) no-repeat -70px -170px;
        top: 12px;
        margin-top: 12px;
        width: 16px;
        height: 4px;
        margin-left: 6px;
    }


</style>