<template>
    <div>
        <SelectM></SelectM>
        <CategoryM></CategoryM>
        
    </div>
</template>
<script>
import SelectM from "@/components/travel/select"
import CategoryM from "@/components/travel/Category"
export default {
    components:{
        SelectM: SelectM,
        CategoryM: CategoryM
    }
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