<template>
    <div class="category">
        <div class="change">
        </div>
        <div class="ban">

        </div>
        <div class="safeguard">
            <ul>
                <li class="icon1">
                    <div class="icon11"></div>
                    <strong>透明低价</strong><br>
                    超值低价，每日更新
                </li>
                <li class="icon2"></li>
                <li class="icon3"></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'Category',
}
</script>
<style scoped>
    .category{
        background-color: #eee;
        width:1000px;
        height: 480px;
        margin: 0 auto;
        margin-top:-2px;
    }
    .change{
        width:260px;
        height: 476px;
        border: 2px solid #ff9d00;
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
        
    }

    .icon11{
        float: left;
        width:36px;
        height: 36px;
        background: url(../../assets/travel/logo.png) no-repeat -30px 0px;

    }
    
</style>